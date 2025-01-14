export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch("/.netlify/functions/generateRecipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients: ingredientsArr }),
        });

        if (!response.ok) {
            throw new Error("Failed to generate recipe");
        }

        const data = await response.json();
        return data.recipe;
    } catch (error) {
        console.error("Error fetching recipe:", error);
        throw error;
    }
}
