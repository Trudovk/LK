import React from 'react'
import { ScheduleTable } from '../ui/molecules/ScheduleTable'
import { Contacts } from '../ui/atoms/Contacts'
import { ColofrulText } from '@shared/ui/atoms/ColofrulText'

export const SalaryPayment = () => (
    <>
        <p>
            Выплата заработной платы за первую половину месяца производится{' '}
            <ColofrulText color="green">до 20 числа</ColofrulText> текущего месяца, за вторую половину –{' '}
            <ColofrulText color="green">до 5 числа</ColofrulText> следующего месяца. Перечисление заработной платы
            в университете производится на банковскую карту платежной системы «МИР». В случае отсутствия действующей
            карты платежной системы «МИР», оформите ее, обратившись в Расчетный отдел университета.
        </p>
        <ScheduleTable
            title="Режим работы и контакты Расчетного отдела:"
            content={{
                'Понедельник – Четверг': '9:30-18:30',
                Пятница: '9:30 – 17:15',
                'Обеденный перерыв': '13:00-13:45',
                'Суббота, Воскресенье': 'Выходной',
            }}
        />
        <Contacts>
            г. Москва, ул. Большая Семеновская, д. 38, каб. А-311
            <br />
            <a href="tel:+74952230523p1410">Тел. : +7 (495) 223-05-23 доб. 1410</a>,{' '}
            <a href="tel:+74952230523p1322">1322</a>, <a href="tel:+74952230523p1236">1236</a>
        </Contacts>
    </>
)