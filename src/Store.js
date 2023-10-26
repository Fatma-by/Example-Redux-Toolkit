// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Counter Slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

// const UserSlice = createSlice({
//     name: 'user',
//     initialState: ("Jean", ""),
//     reducers: {
//         changeUser: (state, action) => {
//             state.name = action.payload.name;
//             state.email = action.payload.email;

//         }
//     }
// });

const UserSlice = createSlice({
    name: "user",
    initialState: { name: "Jean", email: "" },
    reducers: {
      changeUser: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
      },
    },
  });


const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        counter: counterSlice.reducer,
    },
});

export const { increment, decrement } = counterSlice.actions;
export const { changeUser } = UserSlice.actions;
export default store;
