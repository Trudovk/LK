import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import deletePageFromHome from '@features/all-pages/lib/delete-page-from-home'
import deletePageFromSidebar from '@features/all-pages/lib/delete-page-from-sidebar'
import Avatar from '@features/home/ui/molecules/avatar'
import { changeEmail, changePhone } from '@shared/api/user-api'
import { REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import useTheme from '@shared/lib/hooks/use-theme'
import React, { useEffect, useState } from 'react'
import { useModal } from 'widgets'
import getSettingsModel, { TFullSettingsModel } from '../model'
import CustomizeMenu from '../../../features/customize-menu'
import addPageToSidebar from '@features/all-pages/lib/add-page-to-sidebar'
import addPageToHome from '@features/all-pages/lib/add-page-to-home'
import { NotificationsSettingsType } from '@entities/settings/lib/get-default-settings'
import { User } from '@shared/api/model'

const getValue = (value: string | undefined) => (!value || value.length === 0 ? 'Не указан' : value)

const useSettings = () => {
    const { theme, switchTheme } = useTheme()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const { leftsideBarRoutes, homeRoutes } = menuModel.selectors.useMenu()
    const { settings } = settingsModel.selectors.useSettings()
    const [fullSettings, setFullSettings] = useState<TFullSettingsModel | null>(null)
    const { property: settingsProperty } = settings['settings-notifications']
    const { property: appearanceProperty } = settings['settings-appearance']
    const { widgetPayment, widgetSchedule, news } = settings['settings-home-page'].property
    const isStudent = user?.user_status === 'stud'

    const requiredLeftsideBarItems =
        user?.user_status === 'staff' ? REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG : REQUIRED_LEFTSIDE_BAR_CONFIG
    useEffect(() => {
        setFullSettings({
            ...getSettingsModel({
                scheduledLightTheme: appearanceProperty.scheduledLightTheme as boolean,
                lightThemeRange: appearanceProperty.lightThemeRange as [string, string],
                settings: settingsProperty as NotificationsSettingsType,
                menu: {
                    value: leftsideBarRoutes,
                    additionalActions: {
                        onAdd: () =>
                            open(
                                <CustomizeMenu
                                    enabledList={'leftsideBarRoutes'}
                                    requiredList={requiredLeftsideBarItems}
                                    remove={deletePageFromSidebar}
                                    add={addPageToSidebar}
                                />,
                                'Настройка меню',
                            ),
                        onRemoveOne: (id) => deletePageFromSidebar(id as string, settings, requiredLeftsideBarItems),
                    },
                },
                theme: { value: theme === 'dark', action: (value) => switchTheme(value as boolean) },
                email: {
                    value: user?.email ?? '',
                    description: getValue(user?.email),
                    action: (value) => changeEmail((value ?? '') as string),
                    additionalActions: {
                        onSuccess: (value) => {
                            userModel.events.update({ key: 'email', value: value as string })
                        },
                    },
                },
                avatar: {
                    value: user?.avatar,
                    description: 'Смена аватара',
                    icon: (
                        <Avatar
                            avatar={user?.avatar}
                            name={user?.fullName ?? ''}
                            width="22px"
                            height="22px"
                            marginRight="0"
                        />
                    ),
                },
                homepage: {
                    sections: {
                        value: homeRoutes,
                        additionalActions: {
                            onRemoveOne: (id) => deletePageFromHome(id as string, settings),
                            onAdd: () =>
                                open(
                                    <CustomizeMenu
                                        enabledList={'homeRoutes'}
                                        requiredList={[]}
                                        remove={deletePageFromHome}
                                        add={addPageToHome}
                                    />,
                                    'Добавить страницы',
                                ),
                        },
                    },
                    widgets: {
                        schedule: {
                            value: widgetSchedule as boolean,
                            action: (state) =>
                                settingsModel.events.updateSetting({
                                    nameSettings: 'settings-home-page',
                                    nameParam: 'widgetSchedule',
                                    value: !!state,
                                }),
                        },
                        payments: {
                            value: widgetPayment as boolean,
                            action: (state) =>
                                settingsModel.events.updateSetting({
                                    nameSettings: 'settings-home-page',
                                    nameParam: 'widgetPayment',
                                    value: !!state,
                                }),
                        },
                    },
                    news: {
                        value: news as boolean,
                        action: (state) =>
                            settingsModel.events.updateSetting({
                                nameSettings: 'settings-home-page',
                                nameParam: 'news',
                                value: !!state,
                            }),
                    },
                },
                phone: isStudent
                    ? {
                          value: user?.phone ?? '',
                          description: user?.phone,
                          action: (value) => {
                              changePhone({ phone: (value ?? '') as string })
                          },
                          additionalActions: {
                              onSuccess: (value) => {
                                  userModel.events.update({ key: 'phone', value: value as string })
                              },
                          },
                      }
                    : {
                          value: {
                              phone: user?.phone ?? '',
                              allow_mobphone_in: user?.allow_mobphone_in,
                              allow_mobphone_out: user?.allow_mobphone_out,
                          },

                          description: user?.phone,
                          subfieldsAction: (values) => {
                              changePhone(values)
                              Object.entries(values).forEach(([key, value]) => {
                                  userModel.events.update({ key, value } as {
                                      key: keyof User
                                      value: User[keyof User]
                                  })
                              })
                          },
                      },
                isStudent,
            }),
        })
    }, [
        theme,
        homeRoutes,
        widgetSchedule,
        widgetPayment,
        news,
        Object.keys(leftsideBarRoutes ?? {}).length,
        Object.keys(homeRoutes ?? {}).length,
    ])

    return fullSettings
}

export default useSettings
