import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
  name: 'username',
  initialState: '',
  reducers: {
    storeUsername: (_, action) => {
      return action.payload;
    },
  },
});

export const { storeUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
