const Ingredients = (props) => {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li className="px-3 py-1 bg-gray-100 rounded-md shadow" key={ingredient}>{ingredient}</li>
    ));

    return(
        <section aria-live="polite" className="flex flex-col justify-center mt-3">
        <ul className="max-w-3xl flex flex-wrap justify-center items-center gap-3 mt-5">
            {ingredientsListItems}
        </ul>

        {props.ingredients.length > 3 && <div className="mt-10 sm:w-max flex sm:flex-row flex-col justify-between items-center rounded-lg bg-gray-200 px-5 py-2.5">
            <div className="sm:mr-20 mr-0 mb-3 sm:mb-0 text-center sm:text-left">
                <h3 className="text-md font-medium leading-6">Ready for a recipe?</h3>
                <p className="text-gray-500 text-sm leading-5">Generate a recipe with your list of ingredients.</p>
            </div>

            {/* <button onClick={props.handleClick} className="border-none rounded-md bg-red-500 shadow-sm text-white px-4 py-2 text-sm cursor-pointer">Get a recipe</button> */}
        </div>}
    </section>
    );
};

export default Ingredients;
