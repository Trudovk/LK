import { userModel } from '@entities/user'
import { getJwtToken } from '@entities/user/lib/jwt-token'
import { AxiosRequestConfig } from 'axios'
import { $hrApi } from '.'
import { refreshAccessToken } from '../user-api'

export const authResponseInterceptor = async (error: any) => {
    const originalRequest = error.config
    if (error.request.status === 403 || error.request.status === 401) {
        if (!originalRequest._retry) {
            originalRequest._retry = true
            const refreshToken = localStorage.getItem('jwt_refresh')

            try {
                const { accessToken, refreshToken: newRefreshToken } = await refreshAccessToken(refreshToken ?? '')
                localStorage.setItem('jwt', accessToken)
                localStorage.setItem('jwt_refresh', newRefreshToken)

                return $hrApi(originalRequest)
            } catch (error) {
                userModel.events.logout()
            }
        }
    }
    return Promise.reject(error)
}

export const addAuthHeaderToRequests = (config: AxiosRequestConfig) => {
    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${getJwtToken()}`
    return config
}