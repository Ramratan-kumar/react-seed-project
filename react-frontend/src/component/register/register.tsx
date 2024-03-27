import React, { useEffect, useReducer,useState } from "react";

import {Md5} from 'ts-md5';
import Api from "../../utility/api";
import CONSTANTS from "../../utility/CONSTANTS";
import Toasts from "../../utility/toast";

interface I_User {
    name: string,
    email: string,
    mobile: string,
    password: string,
    matchPassword: string,
}
const user: I_User = {
    name: "Ramratan",
    email: "",
    mobile: "",
    password: "",
    matchPassword: ""
}

type UserKey = "name" | "email" | "mobile" | "password" | "matchPassword";

interface I_Action {
    key: UserKey,
    value: string
}

let initialValue: any = user;

const userRegisterForm = [
    { label: "Name", type: "text", key: "name" },
    { label: "Email", type: "email", key: "email" },
    { label: "Password", type: "password", key: "password" },
    { label: "Re-Password", type: "password", key: "matchPassword" }
]
const RegisterUser: React.FC = () => {
    const [userForm, dispatch] = useReducer(userReducer, initialValue);
    const [isSubmit,setIsSubmit] = useState(false);
    function onChange(value: string, key: UserKey) {
        dispatch({ key: key, value: value })
    }

    function getUserValue(key: UserKey): string {
        return userForm[key];
    }

    function onRegisteration(e: any){
        e.preventDefault();
        setIsSubmit(true)
    }

    useEffect(()=>{
        if(isSubmit){
            handleRegistrationClick(userForm);
            setIsSubmit(false)
        }
       
    },[isSubmit])

    return (<div>
        <div className="card border-primary mb-3 card-width">
            <div className="card-header text-alignment">Register</div>
            <div className="card-body text-primary">
                <div className="container-sm">
                    <form onSubmit={(event) => { onRegisteration(event) }}>
                        <RegistorForm userForm={userForm} onChange={onChange} getUserValue={getUserValue} />
                    </form>

                </div>
            </div>
            <div className="card-footer text-alignment"> <button type="submit"
                className="btn btn-primary" onClick={(event) => { onRegisteration(event) }}>Register</button></div>
        </div>
    </div>)
}

function RegistorForm({ ...props }) {
    let registorForm = userRegisterForm.map((ele) =>
        <div className="row" key={ele.key}>
            <div className="col-sm">
                <p><label>{ele.label}</label></p>
                <p><input type={ele.type} value={props.getUserValue(ele.key)}
                    onChange={(e) => props.onChange(e.target.value, ele.key)} /></p>
            </div>
        </div>
    )
    return <>{registorForm}</>
}


function userReducer(userForm: I_User, action: I_Action) {
    userForm[action.key] = action.value;
    return { ...userForm }
}



async function handleRegistrationClick(userForm:I_User) {
    const api = new Api();
    const toast = new Toasts();
    let user = {
        name: userForm.name,
        email: userForm.email,
        mobile: userForm.mobile,
        password: Md5.hashStr(userForm.password)
    }
    const res:any = await api.postApi(`http://localhost:8080/${CONSTANTS.apiUrl.registration}`,user);
    console.log(res);
    if(res.code === 201 || res.code === 202){
        toast.notify(res.message);
    }else{
        toast.notify(res.message,'error');
    }
  
}

export default RegisterUser;