import React from "react";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";

const Main = () => {
    //Ingredients
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    const [recipeShown, setRecipeShown] = React.useState(false)
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function handleClick() {
        setRecipeShown(prevShown => !prevShown);
    }

    return (
        <main className="max-w-7xl pt-7 px-7 flex flex-col items-center">
            <form 
                action={addIngredient}
                className="flex flex-col sm:flex-row sm:flex-grow justify-center gap-3"
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

            {recipeShown && <Recipe />}
        </main>
    );
};

export default Main;
