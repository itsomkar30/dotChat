import express from 'express'
import cors from 'cors'
const app = express()
import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'
dotenv.config()

app.use(cors())
app.use(express.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


const configuration = new Configuration({
    organization: "org-kk0WgMJij6oIhvNMQ5MNlmiQ",
    apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

app.post('/images',async (req,res)=>{

})


app.post('/chat', async (req,res)=>{
  const {content} = req.body

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "user", content: content}
      ],
    });
    // console.log(completion.data.choices[0].message);

    res.json(completion.data.choices[0].message)
    
  } catch (error) {
    console.log(error);
  }

})

app.listen(5000,()=>{
    console.log('hello');
})




