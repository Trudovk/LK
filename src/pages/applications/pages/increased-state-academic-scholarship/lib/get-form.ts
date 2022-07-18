import { IInputArea } from '@ui/input-area/model'

const TypeOfActivityOptions = [
    { id: 0, title: 'учебная деятельность' },
    { id: 1, title: 'научно-исследовательская деятельность' },
    { id: 3, title: 'общественная деятельность' },
    { id: 3, title: 'культурно-творческая деятельность' },
    { id: 3, title: 'спортивная деятельность' },
]

const getForm = (): IInputArea => {
    return {
        title: 'Характеристика-рекомендация на получение повышенной государственной академической стипендии',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                value: '',
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Вид деятельности',
                type: 'radio',
                fieldName: 'TypeOfActivity',
                value: null,
                editable: true,
                required: true,
                items: TypeOfActivityOptions,
            },
            {
                title: 'Перечень достижений в выбранном виде деятельности:',
                type: 'textarea',
                fieldName: 'listOfAchievements',
                value: '',
                editable: true,
                required: true,
            },
        ],
        links: [
            {
                title: 'Порядок подачи',
                link: 'https://e.mospolytech.ru/old/storage/files/Poryadok_priema_dokumentov_PGAS.pdf',
                type: 'document',
            },
        ],
        alert: 'Загрузите подтверждающие документы',
        optionalCheckbox: {
            title: `С Порядком подачи ознакомлен`,
            value: false,
            fieldName: '',
            editable: true,
        },
        documents: { files: [], fieldName: 'docs', maxFiles: 3, required: true },
    }
}

export default getForm
