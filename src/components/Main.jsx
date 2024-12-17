import React from "react";
import Recipe from "./Recipe";

const Main = () => {
    //Ingredients
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    const [recipeShown, setRecipeShown] = React.useState(false)
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li className="px-3 py-1 bg-gray-100 rounded-md shadow" key={ingredient}>{ingredient}</li>
    ));
    
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
            <section aria-live="polite" className="flex flex-col justify-center mt-3">
                <ul className="max-w-3xl flex flex-wrap justify-center items-center gap-3 mt-5">
                    {ingredientsListItems}
                </ul>

                {ingredients.length > 3 && <div className="mt-10 sm:w-max flex sm:flex-row flex-col justify-between items-center rounded-lg bg-gray-200 px-5 py-2.5">
                    <div className="sm:mr-20 mr-0 mb-3 sm:mb-0 text-center sm:text-left">
                        <h3 className="text-md font-medium leading-6">Ready for a recipe?</h3>
                        <p className="text-gray-500 text-sm leading-5">Generate a recipe with your list of ingredients.</p>
                    </div>

                    <button onClick={handleClick} className="border-none rounded-md bg-red-500 shadow-sm text-white px-4 py-2 text-sm cursor-pointer">Get a recipe</button>
                </div>}
            </section>}

            {recipeShown && <Recipe />}
        </main>
    );
};

export default Main;
