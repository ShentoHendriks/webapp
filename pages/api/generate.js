import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.input), // data is received here and sent from index.js -> body: JSON.stringify({ input: input_prompt })
    temperature: req.body.randomness,
    max_tokens: req.body.maxwordsCount,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,

  });
  res.status(200).json({
    result: completion.data}); //.data.choices[0].text.trim()
}

function generatePrompt(input) {
  console.log(input);
  return `${input}`;
}