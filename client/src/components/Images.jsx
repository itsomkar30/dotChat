import React, { useState } from "react";
import axios from "axios";
import { BiSend } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";
import { useSpeechRecognition } from "react-speech-kit";


const Images = () => {
  const [images, setImages] = useState([]);

  const [input, setInput] = useState("");

  const [mic, setMic] = useState(false);

  // const dispatch = useDispatch();

  const toggleMic = () => {
    setMic(!mic);
    if (!mic) {
      listen();
    }
    if (mic) {
      stop();
    }
  };

  const { listen, listening,stop } = useSpeechRecognition({
    onResult: (result) => {
      setInput(result)
  
    }
  })

  // const chatgptkey = "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"

  const apiKey = "AIzaSyCgxrESwcuOa8S3CLvbI1wkzOqzl_2Mwgs";
  const maxResults = 10;
  const cx = "1110d60dcdc604786";

  const SendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${input}&searchType=image&num=${maxResults}`
      );

      setImages(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-[#171f3c] p-5  flex-1 overflow-hidden overflow-y-auto items-between rounded-md my-2 h-[77vh] mb-4">
      {images.length === 0  && (
            <div className="h-full flex justify-center items-center">
              <h1>&#x1f50e; Search Images</h1>
            </div>
        )}


        <div id="images" className="grid gap-3 grid-cols-3">
          
          {images.map((image) => (
            <img className='flex-1 rounded-md' src={image.link} alt={image.title} key={image.link} />
          ))}
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

export default Images;
