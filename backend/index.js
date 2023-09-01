const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const { config } = require("dotenv");
const cors = require("cors");

const {
  openAiObjective,
} = require("./Routes/openaiRoutes/objectivetypequestions");
const { OpenAiQuestion } = require("./Routes/openaiRoutes/questions");
const { openAiFeedback } = require("./Routes/openaiRoutes/feedback");
// const { connection } = require("./Connection/db");

const app = express();
app.use(cors());
config();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello Friends, Welcome To TechWhiz");
});

app.use("/Openai", openAiObjective);
app.use("/Openai", OpenAiQuestion);
app.use("/Openai", openAiFeedback);

app.listen(process.env.PORT, async () => {
  try {
    // await connection;
    console.log("Server is Running");
  } catch (error) {
    console.log(error);
  }
});
