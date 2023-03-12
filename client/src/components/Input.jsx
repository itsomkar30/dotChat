import React  from "react";
import { useState } from "react";
import axios from 'axios'
import { BiSend } from "react-icons/bi";
// import { BiVolumeFull } from "react-icons/bi";
import { BiVolumeMute } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";
import { useSpeechSynthesis } from 'react-speech-kit';
import { useSpeechRecognition } from 'react-speech-kit';
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../features/InputSlice";
import {addMessage} from '../features/messageSlice'




const Input = () => {
  
 const input = useSelector((state)=>state.input)
 const [mic,setMic] = useState(false)

 const dispatch = useDispatch()


 const toggleMic =()=>{
  setMic(!mic)
  if (!mic) {
    listen()
  }if(mic){
    stop()
  }

 }

 const {speak,cancel} =useSpeechSynthesis() 

 const { listen, listening, stop } = useSpeechRecognition({
  onResult: (result) => {
    dispatch(setInput(result))

  }
})

// const chatgptkey = "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"

const SendMessage = async (e)=>{
  e.preventDefault()
  const userMessage = {
      role: 'User',
      content : input
  } 
  dispatch(addMessage(userMessage))

  const messageResponse = async ()=>{
    const {data} = await axios.post('http://localhost:5000/chat',userMessage)
    console.log(data.content)
    console.log(data.role)

    const resMessage = {
      role: data.role,
      content: data.content
    }

    dispatch(addMessage(resMessage))

    speak({text:data.content})
}

  await messageResponse()
  
  console.log(userMessage)
}


 
  return (
    <form className="flex p-2 px-4 bg-gray-700  rounded-lg items-center">
      <input
        value={input}
        onChange={(e)=>dispatch(setInput(e.target.value,e.preventDefault()))}
        autoComplete="off"
        type="text"
        placeholder="Ask to our smart chat bot ? "
        className="text-white bg-gray-700 focus:bg-gray-700 flex-1 rounded-md outline-none"
      />

      {/* {message} */}
      <BiMicrophone
        onClick={toggleMic}
        className={`mr-2 hover:bg-gray-900 p-2 text-[2.6rem] rounded-full ${listening && 'bg-green-400 blink'}`} >

      </BiMicrophone>

      <BiVolumeMute
        className={`mr-2 hover:bg-gray-900 p-2 text-[2.6rem] rounded-full`} 
        onClick={cancel}
      >
      </BiVolumeMute>

      <BiSend 
        onClick={SendMessage}
        type="submit"
        className="p-2 text-[2.6rem] hover:bg-gray-900 rounded-md" />
    </form>
  );
};

export default Input;
