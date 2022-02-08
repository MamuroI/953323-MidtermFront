import React, { createContext, useContext, useEffect, useState } from "react";
import { client } from '../../../api'

export const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context

        this.currentForm = context.currentForm
        this.setCurrentForm = context.setCurrentForm

        this.firstName = context.firstName
        this.setFirstName = context.setFirstName

        this.lastName = context.lastName
        this.setLastName = context.setLastName

        this.email = context.email
        this.setEmail = context.setEmail

        this.userName = context.userName
        this.setUserName = context.setUserName

        this.passWord = context.passWord
        this.setPassWord = context.setPassWord

        this.handleLogin = context.handleLogin
        this.handleRegister = context.handleRegister
    }

}

export function LoginProvider({ children }) {
    const [currentForm, setCurrentForm] = useState(0);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    function handleLogin(){
        const data = {
            username: this.userName,
            password: this.passWord

        }
        console.log(data)
        client.post('/auth',data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                window.location.reload(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function handleRegister(){
        const data = {
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
            username: this.userName,
            password: this.passWord
        }
        console.log(data)
        client.post('/register',data)
            .then(res => {
                console.log(res)
                window.location.reload(false)
            })
            .catch(err =>{
                // console.log(err)
            })
    }

    return (
        <context.Provider
            value={{
                currentForm,
                setCurrentForm,
                firstName,setFirstName,
                lastName,setLastName,
                email,setEmail,
                userName,setUserName,
                passWord,setPassWord,
                handleLogin,handleRegister
            }}
        >
            {children}
        </context.Provider>
    )
}