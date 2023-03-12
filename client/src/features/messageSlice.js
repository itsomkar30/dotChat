import {createSlice} from '@reduxjs/toolkit'

const MessageList = []



const messageSlice = createSlice({
    name : 'messages',
    initialState : MessageList,
    reducers:{
        addMessage : (state,action)=>{
            state.push(action.payload)
        },
        createMessage : (state,action)=>{
            state = []
        }
    }
})

export default messageSlice.reducer

export const {addMessage} = messageSlice.actions



