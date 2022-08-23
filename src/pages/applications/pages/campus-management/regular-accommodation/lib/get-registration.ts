import { IInputArea } from '@ui/input-area/model'

const getRegistration = (): IInputArea => {
    return {
        title: 'Адрес регистрации',
        data: [],
        documents: {
            files: [],
            required: true,
            fieldName: 'registrationFiles',
            maxFiles: 5,
        },
    }
}

export default getRegistration
