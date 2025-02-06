/* eslint-disable no-undef */
const { HfInference } = require("@huggingface/inference");

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. If someone asks for anything that is not a recipe say "I'm sorry, I can only make recipes.
`;

exports.handler = async (event) => {
    console.log("Function triggered");
    try {
        // Parse the request body
        const { ingredients } = JSON.parse(event.body);
        console.log("Received ingredients:", ingredients);

        // Check for valid ingredients
        if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Invalid or Missing Ingredients" }),
            };
        }

        // Get the API key from environment variables
        const HF_API_KEY = process.env.HF_API_KEY;
        if (!HF_API_KEY) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Hugging Face API key not configured" }),
            };
        }

        console.log("Using Hugging Face API Key:", HF_API_KEY ? "Valid Key" : "Missing Key");  // Log API key check

        // Initialize Hugging Face Inference Client
        const hf = new HfInference(HF_API_KEY);

        // Prepare the ingredients string
        const ingredientsString = ingredients.join(", ");
        console.log("Prepared Ingredients String:", ingredientsString);  // Log ingredients string

        // Call the Hugging Face API
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-Nemo-Instruct-2407",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });

        console.log("Response from Hugging Face API:", response);  // Log API response

        // Return the recipe
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
};
