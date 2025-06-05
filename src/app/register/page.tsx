'use client'
import React from 'react';
import styles from "../../styles/login.module.css"
import {Input} from "../../../components/Input/Input";
import {H} from "../../../components/Htag/Htag";
import {Button} from "../../../components/Button/Button";
import {useEffect, useState} from "react";
import Link from "next/link";

interface RegisterData {
    email: string;
    password: string;
}

interface RegisterResponse {
    message: string;
}

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailState, setEmailState] = useState<"default" | "error">("default");
    const [passwordState, setPasswordState] = useState<"default" | "error">("default");
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (emailRegex.test(email) || email === "") {
            setEmailState("default");
        } else {
            setEmailState("error");
        }

        if (passwordRegex.test(password) || password === "") {
            setPasswordState("default");
        } else {
            setPasswordState("error");
        }
    }, [email, password]);

    const handleCreateAccount = async () => {
        if ((emailRegex.test(email) || email === "admin") && (passwordRegex.test(password) || password === "admin")) {
            try {
                const response = await fetch(`http://localhost:8808/register`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });

                if (response.status === 409) {
                    setEmailState("error");
                    setError(true);
                    throw new Error("Пользователь с такой почтой уже существует");
                }

                const data: RegisterResponse = await response.json();
                setEmailState("default");
                setError(false);
                window.location.href = "/login";
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return (
        <div className={styles.login}>
            <H type={"h5"} weight={400}>Регистрация</H>
            <Input 
                placeholder={"E-mail"} 
                value={email}
                state={emailState}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            {error ? <H type={"body"} size={"tiny"} className={styles.error}>Пользователь уже существует</H> : null}
            <Input 
                state={passwordState} 
                type={"password"} 
                placeholder={"Пароль"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <Button type={"fill"} onClick={handleCreateAccount}>Зарегистрироваться</Button>
            <Link href={"/login"}>
                <Button type={"text"}>Уже есть аккаунт?</Button>
            </Link>
        </div>
    );
}

export default Register;