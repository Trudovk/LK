import { IInputArea } from '@ui/input-area/model'

const getRegistration = (): IInputArea => {
    return {
        title: 'Регистрация',
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
