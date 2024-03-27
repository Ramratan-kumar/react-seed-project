interface I_UserSessionState {
  userName: string;
  email?:string;
  mobile?:string;
  token?:string;
  isLoggedIn:boolean;
}

export default I_UserSessionState