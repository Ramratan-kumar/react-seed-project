import Toasts from "../utility/toast";
import LocalStorage from "./localStorage";

class Api {
    toast = new Toasts();
    localStorage = new LocalStorage();
    getApi(url: string) {
        const option = {
            method:"Get",
            headers:{"token":this.localStorage.getSession().token}
        }
        return new Promise((resolve, reject) => {
            fetch(url,option)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    return resolve(data);

                }).catch((error)=>{
                    console.log(error);
                    this.toast.notify(error.message,'error');
                    // return reject();
                })
        })

    }

    postApi(url: string,data:any) {
        const option = {
            method:"post",
            headers:{"token":this.localStorage.getSession().token,
            "content-type":"application/json"},
            body:JSON.stringify(data)
        }
        return new Promise((resolve, reject) => {
            fetch(url,option)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    return resolve(data);

                }).catch((error)=>{
                    console.log("error",error);
                    this.toast.notify(error.message,'error');
                    // return reject();
                })
        })

    }
}

export default Api;