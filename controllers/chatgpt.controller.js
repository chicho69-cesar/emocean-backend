const { response, request } = require("express");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const callChatGpt = async (req = request, res = response) => {
  try {
    const { prompt } = req.body;

    let queryObj = {
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "user", "content": prompt }
      ],
      max_tokens: 500,
      temperature: 1
    }

    const completion = await openai.createChatCompletion(queryObj);
    const message = completion.data.choices[0].message;
    const usage = completion.data.usage;

    res.json({ message, usage });
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

const dailySuggest = async (req = request, res = response) => {
  try {
    const { prompt } = req.body;

    let queryObj = {
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "user", "content": "Hola, mi dia ha estado así, algunas sugerencias" },
        { "role": "user", "content": prompt }
      ],
      // max_tokens: 200,
      temperature: 1
    }

    const completion = await openai.createChatCompletion(queryObj);
    const message = completion.data.choices[0].message;
    const usage = completion.data.usage;

    res.json({ message, usage });
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

const testSuggest = async (req = request, res = response) => {
  try {
    const { prompt } = req.body;

    let queryObj = {
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "user", "content": prompt }
      ],
      // max_tokens: 200,
      temperature: 1
    }

    const completion = await openai.createChatCompletion(queryObj);
    const message = completion.data.choices[0].message;
    const usage = completion.data.usage;

    res.json({ message, usage });
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

module.exports = {
  callChatGpt,
  dailySuggest,
  testSuggest
}
