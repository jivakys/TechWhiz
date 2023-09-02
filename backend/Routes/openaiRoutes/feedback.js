const express = require("express");
const openAiFeedback = express.Router();
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAPI_KEY,
});

const openai = new OpenAIApi(configuration);

openAiFeedback.post("/feedback", async (req, res) => {
  const { Question, Answer } = req.body;
  if (!Answer) {
    res.send({
      content:
        "You haven't provided an answer. Please answer the question and try again.",
    });
  } else if (Answer.length <= 50) {
    res.send({
      content:
        "Your answer is too short for feedback. Please provide an answer between 51 to 200 words.",
    });
  } else {
    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Please provide your feedback on the answer to the question: '${Question}'\n\nAnswer: '${Answer}'\n\nIn 2-3 sentences, share your feedback on the answer's quality, clarity, and relevance. Then, on a scale of 1 to 10, rate the answer's overall effectiveness.`,
        },
      ],
    });
    res.send(chat_completion.data.choices[0].message);
  }
});

module.exports = { openAiFeedback };
