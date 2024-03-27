
import React from "react";
import { useFormState } from "../../common/useFormState";
import { useEffect, useState } from "react";

import { useAppDispatch } from '../../reducerConfig/hooks';
import { setSessionOnLogin } from '../../features/userSession/userSessionSlice';
import { useNavigate } from "react-router-dom";
import I_UserSessionState from "../../interfaces/loginInterface";
import Toasts from "../../utility/toast";
import Api from "../../utility/api"
import CONSTANTS from "../../utility/CONSTANTS";
import {Md5} from 'ts-md5';

import "./login.scss";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useFormState('');
    const password = useFormState('');
    const [isSubmite, setSubmittedValue] = useState(false);
    const navigate = useNavigate();
    const toast = new Toasts();
    const api = new Api();
    function login() {
        setSubmittedValue(true);

    }
    useEffect(() => {
        const loginUser = async () => {
            if (isSubmite) {
                const reqObj = createLoginRequestObject(user.value, password.value);
                const data: any = await api.postApi(`http://localhost:8080/${CONSTANTS.apiUrl.login}`,reqObj);
                if (data.code === 200) {
                    const userData: I_UserSessionState = {
                        email: data.data.email,
                        userName:data.data.name,
                        token: data.data.token,
                        isLoggedIn: true
                    }
                    dispatch(setSessionOnLogin(userData))
                    navigate('/home');
                    toast.notify("Welcome to dashboard.");
                } else {
                    setSubmittedValue(false);
                    toast.notify(data.message, 'error');
                }

            }
        }
        loginUser();
        return () => { }
    }, [isSubmite, dispatch, api, toast, navigate])



    return (<div>
        <div className="card border-primary mb-3 card-width">
            <div className="card-header text-alignment">Login</div>
            <div className="card-body text-primary">
                <div className="container-sm">
                    <form onSubmit={login}>
                        <div className="row">
                            <div className="col-sm">
                                <p><label>Email/Modbile:</label></p>
                                <p><input type="text" {...user} /></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <p> <label>Password:</label></p>
                                <p><input type="password" {...password} /></p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div className="card-footer text-alignment"> <button type="submit" className="btn btn-primary" onClick={login}>Login</button></div>
        </div>
    </div>
    )
}

function createLoginRequestObject(user: string, password: string) {
    return {
        "email": user,
        "password":Md5.hashStr(password)
        }
}


export default Login;