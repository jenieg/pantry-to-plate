import React from "react";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "../api/ai"

const Main = () => {
    //Ingredients State
    const [ingredients, setIngredients] = React.useState([])

    //Recipe and visibility state
    const [recipeMarkdown, setRecipeMarkdown] = React.useState("");
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    //add ingredient function
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    //button click function
    async function handleClick() {
        try {
          // Fetch the recipe with ingredients stored in state
            const recipe = await getRecipeFromMistral(ingredients);
            setRecipeMarkdown(recipe); // Store the markdown response
            setRecipeShown(true); // Show the Recipe component
        } catch (error) {
            console.error("Error fetching recipe:", error);
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

            {ingredients.length > 0 && 
                <Ingredients 
                    ingredients={ingredients} 
                    handleClick={handleClick}
                />}

            {recipeShown && <Recipe markdown={recipeMarkdown}/>}
        </main>
    );
};

export default Main;
