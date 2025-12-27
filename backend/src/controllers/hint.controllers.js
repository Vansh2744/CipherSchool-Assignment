import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import "dotenv/config";

const llm = new ChatGroq({
  model: "openai/gpt-oss-120b",
});

export const generateHint = async (req, res) => {
  const { query } = req.body;

  const prompt = `
    You are an SQL tutor.
    Give hints only.
    Do NOT write SQL queries.
`;

  const chatPromptTemplate = ChatPromptTemplate.fromMessages([
    ["system", prompt],
    ["user", "Give me hint for question : {question}"],
  ]);

  const chain = chatPromptTemplate.pipe(llm);

  const response = await chain.invoke({ question: query });

  res.json({ hint: response.content });
};
