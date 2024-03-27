import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../reducerConfig/store';
import I_UserSessionState  from "../../interfaces/loginInterface"

import LocalStorage from "../../utility/localStorage"

const localStorage = new LocalStorage();
const initialState: I_UserSessionState = {
  userName: '',
  isLoggedIn:false
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const userSessionSlice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn=true;
      return {...state};
    },
    logout: (state) => {
      state.isLoggedIn=false;
      return {...state};
    },
    setSessionOnLogin: (state, action: PayloadAction<I_UserSessionState>) => {
      state = action.payload;
      localStorage.setSession(state)
      return {...state};
    },
  }
});

export const { login, logout, setSessionOnLogin } = userSessionSlice.actions;
export const selectUserSession = (state: RootState) => state.userSession;
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default userSessionSlice.reducer;
