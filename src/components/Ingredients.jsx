/* eslint-disable react/prop-types */
const Ingredients = (props) => {
    const ingredientsListItems = props.ingredients.map((ingredient) => (
        <li
            className="px-3 py-1 bg-gray-100 rounded-md shadow"
            key={ingredient}
        >
            {ingredient}
        </li>
    ));

    return (
        <section
            aria-live="polite"
            className="flex flex-col items-center mt-3 w-full"
        >
            <ul className="max-w-3xl flex flex-wrap justify-center gap-3 mt-5">
                {ingredientsListItems}
            </ul>

        {props.ingredients.length < 4 ? (
        <div className="mt-10 w-full max-w-lg text-center rounded-lg bg-gray-200 px-5 py-2.5">
            <p className="text-gray-500 text-sm leading-5">
                A minimum of 4 ingredients is needed for a recipe.
            </p>
        </div>
        ) : (
        <div className="mt-10 w-full max-w-lg flex flex-col sm:flex-row items-center sm:justify-between rounded-lg bg-gray-200 px-5 py-2.5">
            <div className="text-center sm:text-left sm:mr-10 mb-3 sm:mb-0">
                <h3 className="text-md font-medium leading-6">
                    Ready for a recipe?
                </h3>
                <p className="text-gray-500 text-sm leading-5">
                    Generate a recipe with your list of ingredients.
                </p>
        </div>

        <button
            onClick={props.handleClick}
            className="border-none rounded-md bg-red-500 shadow-sm text-white px-4 py-2 text-sm cursor-pointer"
        >
            Get a recipe
        </button>
    </div>
)}

        </section>
    );
};

export default Ingredients;
