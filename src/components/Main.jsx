import React from "react";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "../api/ai"

const Main = () => {
    //Ingredients State
    const [ingredients, setIngredients] = React.useState([])

    //Recipe and visibility state
    const [recipe, setRecipe] = React.useState("");
    
    // Loading state
    const [loading, setLoading] = React.useState(false); 
    
    //add ingredient function
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    //button click function
    async function handleClick() {
        // Start loading
        setLoading(true); 
        try {
          // Fetch the recipe with ingredients stored in state
            const recipeMarkdown = await getRecipeFromMistral(ingredients);
            setRecipe(recipeMarkdown); // Store the markdown response
        } catch (error) {
            console.error("Error fetching recipe:", error);
        } finally {
            // Stop loading
            setLoading(false); 
        }
    }

    return (
        <main className="max-w-7xl pt-7 px-7 flex flex-col justify-center items-center">
            <form 
                action={addIngredient}
                className="flex flex-col w-full sm:flex-row sm:flex-grow sm:justify-center gap-3"
            >
                <input 
                    name="ingredient"
                    aria-label="Add Ingredient"
                    placeholder="e.g. oregano"
                    type="text"
                    className="rounded-md shadow" 
                />
                <button
                    className="p-3 rounded-md shadow border-none bg-green-800 text-white text-sm font-medium"
                >Add Ingredient</button>
            </form>

            
                <Ingredients 
                    ingredients={ingredients} 
                    handleClick={handleClick}
                    loading={loading}
                />

            {recipe && <Recipe recipe={recipe}/>}
        </main>
    );
};

export default Main;
