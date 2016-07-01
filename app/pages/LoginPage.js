import React from 'react'
import DefaultLayout from '../layouts/Default'
import AuthForm from '../containers/forms/AuthForm'

const LoginPage = () => (
    <DefaultLayout title="Sign into VascLab">
        <AuthForm />
    </DefaultLayout>
)

export default LoginPage
