import { SelectPage } from '@features/select'
import { ExpandableItemType } from '@pages/phonebook/expandable-item'
import { teacherApi } from '@shared/api'
import { TTeacher } from '@shared/api/model'
import { createEffect, createEvent, createStore, sample } from 'effector'

type Subdivision = {
    title?: string
    guid?: string
    head?: TTeacher
    staff: TTeacher[]
}

const setChosenSubdivision = createEvent<string>()

const getSubdivisions = createEvent<ServerListRequest<SelectPage | null>>()
const getSubdivisionsFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<ExpandableItemType> => {
        const { search = '', page, limit, filter } = request
        // const { data } = await api.get(search, filter?.id.toString() ?? '', page, limit)

        const data: ExpandableItemType = {
            'Проректор по цифровому развитию и делопроизводству': {
                'Центр развития технологий в цифровом образовании': {
                    'Отдел внутренней разработки ': {},
                    'Отдел внедрения и обеспечения технологий цифрового образования': {},
                },
                'Центр управления делами': {},
            },
            'Отдел тестирования': {
                'Внутренний отдел тестирования': {},
            },
            'Кафедра "Информатика и информационные технологии"': {},
        }
        return data
    },
)
sample({ clock: getSubdivisions, target: getSubdivisionsFx })

const getSubdivisionData = createEvent<ServerListRequest<SelectPage | null>>()
const clearSubdivisionData = createEvent()
const getSubdivisionDataFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<Subdivision> => {
        const { search, page, limit, filter } = request
        const group = filter?.title === 'Все' ? '' : filter?.title ?? ''

        const { data } = await teacherApi.get(search ?? '', group, page, limit)
        return { staff: data.items }
    },
)
sample({ clock: getSubdivisionData, target: getSubdivisionDataFx })

const $chosenSubdivision = createStore<string | null>(null).on(setChosenSubdivision, (_, subdivision) => subdivision)
const $subdivisions = createStore<ExpandableItemType | null>(null).on(
    getSubdivisionsFx.doneData,
    (_, subdivisions) => subdivisions,
)
const $subdivisionData = createStore<Subdivision | null>(null)
    .on(getSubdivisionDataFx.doneData, (_, subdivision) => subdivision)
    .reset(clearSubdivisionData)
const $error = createStore<string | null>(null)
    .on(getSubdivisionsFx.failData, (_, error) => error.message)
    .on(getSubdivisionsFx, () => null)
    .on(getSubdivisionDataFx.failData, (_, error) => error.message)
    .on(getSubdivisionDataFx, () => null)

export const events = {
    setChosenSubdivision,
    getSubdivisions,
    getSubdivisionData,
    clearSubdivisionData,
}

export const stores = {
    $chosenSubdivision,
    $subdivisions,
    $subdivisionData,
    $error,
}
