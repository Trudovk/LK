import { adminLinksModel } from '@entities/admin-links'
import { menuModel } from '@entities/menu'
import { LOGIN_ROUTE, publicRoutes } from '@app/routes/general-routes'
import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { userModel } from '../../entities/user'
import ContentLayout from '../../shared/ui/content-layout'

const Router = () => {
    const {
        data: { isAuthenticated, user },
    } = userModel.selectors.useUser()

    useEffect(() => {
        if (isAuthenticated) {
            adminLinksModel.effects.getAdminLinksFx()
        }
    }, [isAuthenticated])

    useEffect(() => {
        if (user) {
            menuModel.events.defineMenu({ user })
        }
    }, [user])

    return isAuthenticated ? (
        <Switch>
            <Route path="/" component={ContentLayout} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, Component }, i) => {
                return <Route path={path} component={Component} exact={true} key={i} />
            })}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default Router