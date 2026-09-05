import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const login = async (data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin({ userData }));
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="mx-auto w-full max-w-md rounded-2xl border border-green-900/40 bg-[#111111] p-6 shadow-2xl shadow-black/60 sm:p-8">
            <div className="mb-4 flex justify-center">
                <Logo />
            </div>
            <h2 className="text-center text-2xl font-bold text-white">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-slate-400">
                Don&apos;t have an account?&nbsp;
                <Link to="/signup" className="font-semibold text-green-400 transition hover:text-green-300 hover:underline">
                    Sign Up
                </Link>
            </p>
            {error && (
                <p className="mt-4 rounded-lg border border-red-800/50 bg-red-900/20 px-4 py-2 text-center text-sm text-red-400">
                    {error}
                </p>
            )}
            <form className="mt-6" onSubmit={handleSubmit(login)}>
                <div className="space-y-5">
                    <Input
                        label="Email:"
                        placeholder="Enter your email"
                        type="email"
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password:"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    <Button type="submit" className="w-full">
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login;
