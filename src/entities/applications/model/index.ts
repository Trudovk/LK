import { applicationApi } from '@api'
import { Application, UserApplication } from '@api/model'
import { createEvent } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createStore, forward } from 'effector/compat'
interface ApplicationsStore {
    listApplication: Application[] | null
    dataUserApplication: UserApplication | null
    error: string | null
}

const DEFAULT_STORE = { listApplication: null, error: null, dataUserApplication: null }

const useApplications = () => {
    const { listApplication, dataUserApplication, error } = useStore($applicationsStore)
    return {
        data: { listApplication, dataUserApplication },
        loading: useStore(getUserDataApplicationsFx.pending),
        error: error,
    }
}
const getApplicationsFx = createEffect(async (): Promise<Application[]> => {
    const response = await applicationApi.get()

    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить заявления')
    }
})

const getUserDataApplicationsFx = createEffect(async (): Promise<UserApplication> => {
    const response = await applicationApi.getAppData()

    try {
        return response.data
    } catch (_) {
        throw new Error('Не удалось загрузить информацию о пользователе')
    }
})

const clearStore = createEvent()

forward({ from: getApplicationsFx.doneData, to: getUserDataApplicationsFx })

const $applicationsStore = createStore<ApplicationsStore>(DEFAULT_STORE)
    .on(getUserDataApplicationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getUserDataApplicationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        dataUserApplication: newData,
    }))
    .on(getUserDataApplicationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(getApplicationsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getApplicationsFx.doneData, (oldData, newData) => ({
        ...oldData,
        listApplication: newData,
    }))
    .on(getApplicationsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useApplications,
}

export const effects = {
    getApplicationsFx,
    getUserDataApplicationsFx,
}

export const events = {
    clearStore,
}
