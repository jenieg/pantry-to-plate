import React from "react";

const Main = () => {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li className="px-3 py-1 bg-gray-200 rounded-md shadow" key={ingredient}>{ingredient}</li>
    ));

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")

        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main className="max-w-5xl pt-7 px-7">
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

            <div className="flex justify-center">
                <ul className="max-w-3xl flex flex-wrap justify-center items-center gap-3 mt-5">
                    {ingredientsListItems}
                </ul>
            </div>

        </main>
    );
};

export default Main;
