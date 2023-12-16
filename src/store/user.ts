import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    email?: string;
    loggedIn?: boolean;
}

const initialState: UserState = {
    email: undefined,
    loggedIn: undefined,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Partial<UserState>>) => ({
            ...state,
            ...action.payload,
        }),
    },
});

export default userSlice.reducer;

export const { update } = userSlice.actions;
