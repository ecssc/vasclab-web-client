import React from 'react'
import NoNavLayout from '../layouts/NoNav'
import AuthForm from '../components/AuthForm'

const LoginPage = () => (
    <NoNavLayout title="Sign into VascLab">
        <AuthForm />
    </NoNavLayout>
)

export default LoginPage
