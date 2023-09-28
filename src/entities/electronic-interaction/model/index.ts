import { pepApi } from '@api'
import { ElectronicInteraction } from '@api/model'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { popUpMessageModel } from '@entities/pop-up-message'
import { MessageType } from '@shared/ui/types'

const postElectronicInteraction = createEvent()
const changeDone = createEvent<boolean>()
const changeCompleted = createEvent<boolean>()

const postElectronicInteractionFx = createEffect(async () => {
    const response = await pepApi.set()

    const preparedData = response[0]

    if (preparedData?.result !== 'ok') throw new Error()

    return response
})

sample({
    clock: postElectronicInteractionFx.doneData,
    fn: () => {
        return {
            message: `Форма отправлена успешно`,
            type: 'success' as MessageType,
            time: 0,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: postElectronicInteractionFx.failData,
    fn: () => {
        return { message: 'Не удалось подписать', type: 'failure' as MessageType }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

const getElectronicInteractionFx = createEffect(async (): Promise<ElectronicInteraction> => {
    try {
        const response = await pepApi.get()

        return response[0]
    } catch (error) {
        throw new Error(error as string)
    }
})

sample({ clock: postElectronicInteraction, target: postElectronicInteractionFx })

const clearStore = createEvent()

const $loading = getElectronicInteractionFx.pending
const $workerLoading = postElectronicInteractionFx.pending
const $completed = createStore<boolean>(false).on(changeCompleted, (oldData, completed) => completed)
const $done = createStore<boolean>(false).on(changeDone, (oldData, done) => done)
const $error = createStore<string | null>(null)
    .on(getElectronicInteractionFx, () => null)
    .on(getElectronicInteractionFx.failData, (oldData, newData) => newData.message)
const $electronicInteractionStore = createStore<ElectronicInteraction | null>(null)
    .on(getElectronicInteractionFx.doneData, (oldData, newData) => newData)
    .on(clearStore, () => null)

export const stores = {
    $error,
    $electronicInteractionStore,
    $completed,
    $done,
    $loading,
    $workerLoading,
}

export const effects = {
    getElectronicInteractionFx,
}

export const events = {
    postElectronicInteraction,
    changeCompleted,
    clearStore,
}
