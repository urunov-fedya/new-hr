import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = {
  user?: Record<string, object>;
}

const initialState: TInitialState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  selectors: {
    getUser: (state) => state.user,
  },
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Record<string, object> | undefined>) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { actions, selectors } = userSlice;
export const { setUser } = actions;
export const { getUser } = selectors;