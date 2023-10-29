import { pEStudentVisitModel } from '@entities/pe-student/model'
import { PEStudentProfile } from '@entities/pe-student/types'
import { peTeacherModel } from '@entities/pe-teacher'
import { PeTeacherPermission } from '@entities/pe-teacher/types'
import { Button } from '@shared/ui/button'
import { ColumnProps } from '@shared/ui/table/types'
import { differenceInDays } from 'date-fns'
import { combine } from 'effector'
import React from 'react'

export const $peStudentVisitsColumns = combine(
    peTeacherModel.stores.peTeacher,
    pEStudentVisitModel.stores.pendingRemoveVisit,
    (teacher, isLoading): ColumnProps[] => [
        {
            title: 'Дата',
            field: 'date',
            type: 'date',
            sort: true,
        },
        {
            title: 'Преподаватель',
            field: 'teacher',
            render: (data) => data.fullName,
        },
        {
            title: 'Действия',
            field: 'actions',
            onClick: () => null,
            render: (_, data) => {
                const history = data as PEStudentProfile['visitsHistory'][number]
                const isExpired = differenceInDays(new Date(history.date), new Date()) < -7
                const isAdmin = [PeTeacherPermission.AdminAccess, PeTeacherPermission.SuperUser].some((permission) =>
                    teacher?.permissions?.includes(permission),
                )

                if (!((history.teacherGuid === teacher?.id && !isExpired) || isAdmin)) return null

                return (
                    <Button
                        width="100%"
                        text="Удалить"
                        isActive={!isLoading}
                        onClick={() => {
                            pEStudentVisitModel.events.removeVisit({ id: history.id.toString() })
                        }}
                    />
                )
            },
        },
    ],
)
