import React, { useState } from 'react';
// import VideoList from './VideoList';
import { BiSend } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";
import { useSpeechRecognition } from "react-speech-kit";



const Videos = () => {
  const apiKey = "AIzaSyCgxrESwcuOa8S3CLvbI1wkzOqzl_2Mwgs"
  const [videos, setVideos] = useState([]);
  const [input, setInput] = useState("");
  const [mic, setMic] = useState(false);

  const toggleMic = () => {
    setMic(!mic);
    if (!mic) {
      listen();
    }
    if (mic) {
      stop();
    }
  };


  const { listen, listening,stop} = useSpeechRecognition({
    onResult: (result) => {
      setInput(result)
  
    }
  })
  
  

  function SendMessage(e) {
    e.preventDefault();
    videoSearch(apiKey, input, 9);
  }

  function videoSearch(apiKey, search, maxResults) {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${maxResults}&q=${input}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let videoList = data.items.map(item => (
          <iframe 
           className='my-5 rounded-lg'
            key={item.id.videoId} 
            width="350" height="200"
            src={`http://www.youtube.com/embed/${item.id.videoId}`} 
            allowFullScreen>hello</iframe>
        ));
        setVideos(videoList);
      });
  }

 

  return (
    <>
    <div className='bg-[#171f3c] overflow-hidden overflow-y-auto  flex-1 rounded-md my-2 h-[77vh] mb-4'>
      <div className='p-5 gap-5 grid grid-cols-3 flex-wrap' id="videos">
        {videos}
      </div>
    </div>

    <div className="">
      <form className="flex p-2 px-4 bg-gray-700  rounded-lg items-center">
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value, e.preventDefault())
              }
              autoComplete="off"
              type="text"
              placeholder="Ask to our smart chat bot ? "
              className="text-white bg-gray-700 focus:bg-gray-700 flex-1 rounded-md outline-none"
            />

            {/* {message} */}
            <BiMicrophone
              onClick={toggleMic}
              className={`mr-2 hover:bg-gray-900 p-2 text-[2.6rem] rounded-full ${
                listening && "bg-green-400 blink"
              }`}
            ></BiMicrophone>

            <BiSend
              onClick={SendMessage}
              type="submit"
              className="p-2 text-[2.6rem] hover:bg-gray-900 rounded-md"
            />
          </form>
      </div>
    </>
  );
};

export default Videos;
