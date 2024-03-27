import userSessionReducer, {
  login,
  logout,
  setSessionOnLogin,
} from './userSessionSlice';
import I_UserSessionState  from "../../interfaces/loginInterface"

describe('counter reducer', () => {
  const initialState: I_UserSessionState = {
    userName: "ram",
    isLoggedIn:false
  };
  it('should handle initial state', () => {
    expect(userSessionReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = userSessionReducer(initialState, login());
    expect(actual.isLoggedIn).toEqual(true);
  });

  it('should handle decrement', () => {
    const actual = userSessionReducer(initialState, logout());
    expect(actual.isLoggedIn).toEqual(false);
  });

  it('should handle incrementByAmount', () => {
    const actual = userSessionReducer(initialState, setSessionOnLogin({userName:"ram",isLoggedIn:true}));
    expect(actual.userName).toEqual("ram");
  });
});
