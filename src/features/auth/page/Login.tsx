import React, {useCallback, useEffect} from 'react';
import "./index.css";
import Logo from "../../../components/logo/Logo";
import {Controller, useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {StringUtils} from "../../../utils/StringUtils";
import {showMessage} from "../../../components/alert/Alert";

const Login = () => {

    const {control, trigger, getValues, formState: {isValid, errors}} = useForm({
        mode: "onChange"
    });

    useEffect(() => {
        trigger();
    },[]);

    const onClick = useCallback(() => {
        if(!isValid) {
            if(Object.keys(errors).length>0) {
                // @ts-ignore
                showMessage("Ошибка: " + errors[Object.keys(errors)[0]].message.toString())
            }
        } else {

        }
    },[errors,isValid]);

    return (
        <div className={"login-page"}>
            <div className={"login-form"}>
                <Logo/>
                <p>Авторизация</p>
                <div className={"login-form_main"}>
                    <Controller
                        control={control}
                        name={"login"}
                        rules={{
                            validate: v => StringUtils.isNotBlank(v) || "Введите логин"
                        }}
                        render={({field}) => (
                            <TextField
                                fullWidth
                                size={"small"}
                                id="outlined-basic"
                                label="Логин"
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={"password"}
                        rules={{
                            validate: v => StringUtils.isNotBlank(v) || "Введите пароль"
                        }}
                        render={({field}) => (
                            <TextField
                                style={{marginTop: "10px"}}
                                fullWidth
                                size={"small"}
                                id="outlined-basic"
                                label="Пароль"
                                {...field}
                            />
                        )}
                    />
                    <Button
                        onClick={onClick}
                        style={{marginTop: "10px", width: "100%"}}
                        variant="contained"
                    >
                        Войти
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;