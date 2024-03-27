import I_UserSessionState from "../interfaces/loginInterface"
class LocalStorage{
    setSession(sessionObj:I_UserSessionState){
        localStorage.setItem("session",JSON.stringify(sessionObj))
    }
    getSession(){
        let session = localStorage.getItem("session");
        return session?JSON.parse(session):{}
    }
    clearSession(){
        localStorage.removeItem("session");
    }
}

export default LocalStorage