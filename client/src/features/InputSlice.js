import {createSlice} from '@reduxjs/toolkit'


const InputSlice = createSlice({
    name: 'input',
    initialState: '',
    reducers: {
        setInput: (state, action) => {
          return action.payload;
        },
        clearInput: (state) => {
          return '';
        },
    }
})


export const { setInput, clearInput } = InputSlice.actions;

export default InputSlice.reducer;