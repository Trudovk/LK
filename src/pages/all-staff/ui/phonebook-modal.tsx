import Flex from '@shared/ui/flex'
import React from 'react'
import { AvatarWrapper, Buttons, Content, Header, Subtitle, Title, Wrapper } from '../styled'
import { InfoItem } from '../info-item'
import UserHeaderBackground from '@shared/ui/user-header/user-header-background'
import { Link } from 'react-router-dom'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { FiClock, FiMessageCircle } from 'react-icons/fi'
import { Button } from '@shared/ui/button'
import { useModal } from 'widgets'
import List from '@shared/ui/list'
import Avatar from '@features/home/ui/molecules/avatar'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'

export type PhonebookInfo = {
    subtitle?: string
    attributes: { id?: 'email' | 'innerPhone' | 'mobile' | 'jobType'; title: string; text: string }[]
}

export const PhonebookModal = ({
    title,
    info,
    isEmployee,
    avatar,
}: {
    title: string
    info: PhonebookInfo[]
    avatar?: string
    isEmployee?: boolean
}) => {
    const { close } = useModal()
    const { isMobile } = useCurrentDevice()

    return (
        <Flex d="column">
            <Header isEmployee={!!isEmployee}>
                <UserHeaderBackground
                    fullName={title}
                    height="200px"
                    width="calc(100% + 16px)"
                    baseScale={1}
                    baseScaleDelta={0.5}
                />
                {isEmployee && (
                    <AvatarWrapper>
                        <Avatar
                            avatarModal
                            border
                            name={title}
                            avatar={avatar}
                            width={isMobile ? '110px' : '150px'}
                            height={isMobile ? '110px' : '150px'}
                            marginRight="0"
                        />
                    </AvatarWrapper>
                )}
                <Title>{title}</Title>
            </Header>
            <Wrapper>
                <List key={title} minWidth="100%" direction="horizontal" showPages gap={20}>
                    {info.map(({ subtitle, attributes }) => {
                        const jobType = attributes.find((attribute) => attribute.id === 'jobType')
                        return (
                            <Content
                                key={subtitle ? title + subtitle + jobType?.text : title}
                                isEmployee={!!isEmployee}
                            >
                                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                                {attributes.map(({ title, text, id }) => (
                                    <InfoItem key={title} title={title}>
                                        {text ? (
                                            id === 'email' ? (
                                                <a href={`mailto:${text}`}>{text}</a>
                                            ) : id === 'innerPhone' ? (
                                                text.split('; ').map((tel, i, arr) => (
                                                    <a key={tel} href={`tel:+7(495) 223-05-23,${tel}`}>
                                                        {i === arr.length - 1 ? tel : `${tel}; `}
                                                    </a>
                                                ))
                                            ) : id === 'mobile' ? (
                                                <a href={`tel:${text}`}>{text}</a>
                                            ) : (
                                                <>{text}</>
                                            )
                                        ) : (
                                            '-'
                                        )}
                                    </InfoItem>
                                ))}
                            </Content>
                        )
                    })}
                </List>
            </Wrapper>
            {isEmployee && (
                <Buttons>
                    <Link
                        to={getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                            page: 'current',
                            filter: title,
                        })}
                    >
                        <Button
                            icon={<FiClock />}
                            text={'Расписание'}
                            onClick={() => {
                                close()
                            }}
                            background="var(--theme-4)"
                            width="100%"
                        />
                    </Link>
                    <Button
                        icon={<FiMessageCircle />}
                        text={'Написать'}
                        onClick={() => close()}
                        width="100%"
                        background="var(--theme-4)"
                        isActive={false}
                    />
                </Buttons>
            )}
        </Flex>
    )
}