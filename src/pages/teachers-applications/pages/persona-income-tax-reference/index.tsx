import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'

const PersonaIncomeTaxReferencePage = () => {
    return <TemplateFormPage model={teacherStatementModel} getForm={getForm} goBack="Назад к заявлениям" />
}

export default PersonaIncomeTaxReferencePage
