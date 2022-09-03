import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userStateValue {
  username: string;
}

interface userState {
  value: userStateValue;
}

let initialState = { value: { username: "" } } as userState;

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state: userState, action: PayloadAction<userStateValue>) => {
      state.value = action.payload;
    },
    logout: (state: userState) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
