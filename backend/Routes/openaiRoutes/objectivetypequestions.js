const express = require("express");
const openAiObjective = express.Router();
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAPI_KEY,
});

const openai = new OpenAIApi(configuration);

openAiObjective.get("/Objective/:section", async (req, res) => {
  const { section } = req.params;
  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `May I request 5 multiple-choice questions pertaining to ${section}? Please format each question with a number and provide 4 answer options labeled A, B, C, and D. Additionally, include the correct answer immediately following the options."
  
          For example, it might look something like this:
          Which of the following is a primitive data type in JavaScript?
          A) Number
          B) Array
          C) Object
          D) String
          Correct option: A) Number
          Could you please follow the same format for the rest of the questions related to ${section}?`,
      },
    ],
  });
  let data = chat_completion.data.choices[0].message.content;
  let spliteddata = data.split("\n");
  res.send(spliteddata);
});

module.exports = { openAiObjective };
