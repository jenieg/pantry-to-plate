/* eslint-disable no-undef */
const { HfInference } = require("@huggingface/inference");

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

exports.handler = async (event) => {
    try {
        //parse req body
        const {ingredients} = JSON.parse(event.body)

        //if ingredient empty or invalid, err
        if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({error: "Invalid or Misssing Ingredients"})
            }
        }

        //get key from .env
        const HF_API_KEY = process.env.HF_API_KEY;
        if (!HF_API_KEY) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Hugging Face API key not configured" }),
            };
        }

        //initalize hf inference client
        const hf = new HfInference(HF_API_KEY)

        //prepare ingredient string
        const ingredientsString = ingredients.join(", ")

         // Call the Hugging Face API with prompt and ingredient string
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-Nemo-Instruct-2407",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });

        // Return the recipe in the response
        return {
            statusCode: 200,
            body: JSON.stringify({ recipe: response.choices[0].message.content }),
        };
    } catch (error) {
        console.error("Error generating recipe:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}