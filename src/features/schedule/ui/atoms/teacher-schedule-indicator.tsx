import { SCHEDULE_ROUTE } from '@app/routes/routes'
import { Button, TeacherWidthModal } from '@ui/atoms'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const TeacherScheduleIndicatorWrapper = styled.div`
    color: var(--text);
`

interface Props {
    fio: string
}

const TeacherScheduleIndicator = ({ fio }: Props) => {
    const history = useHistory()
    return (
        <TeacherScheduleIndicatorWrapper>
            <div>
                Расписание: <TeacherWidthModal fio={fio} />
            </div>
            <Button
                onClick={() => history.push(SCHEDULE_ROUTE)}
                text="Вернуться к своему расписанию"
                textColor="var(--blue)"
                width="100%"
                background="transparent"
            />
        </TeacherScheduleIndicatorWrapper>
    )
}

export default TeacherScheduleIndicator
