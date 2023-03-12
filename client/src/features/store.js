import {configureStore} from '@reduxjs/toolkit'
import inputReducer from './InputSlice'
import messsageReducer from './messageSlice'

const store = configureStore({
    reducer:{
        input: inputReducer,
        messages : messsageReducer
    }
})

export default store