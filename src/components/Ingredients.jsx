/* eslint-disable react/prop-types */
const Ingredients = ({ ingredients, handleClick, handleDelete, loading }) => {
  // map over ingredient list and create li for each
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li className='px-3 py-1 bg-gray-100 rounded-md shadow flex items-center justify-center gap-3' key={ingredient}>
      <p>{ingredient}</p>
      <button onClick={() => handleDelete(ingredient)}>
        <svg height='16' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.5 9.5C1.225 9.5 0.989667 9.40217 0.794 9.2065C0.598333 9.01083 0.500333 8.77533 0.5 8.5V2H0V1H2.5V0.5H5.5V1H8V2H7.5V8.5C7.5 8.775 7.40217 9.0105 7.2065 9.2065C7.01083 9.4025 6.77533 9.50033 6.5 9.5H1.5ZM2.5 7.5H3.5V3H2.5V7.5ZM4.5 7.5H5.5V3H4.5V7.5Z'
            fill='#6b7280'
          />
        </svg>
      </button>
    </li>
  ));

  return (
    <section aria-live='polite' className='flex flex-col items-center mt-3 w-full'>
      {/*list of ingredients */}
      <ul className='max-w-3xl flex flex-wrap justify-center gap-3 mt-5'>{ingredientsListItems}</ul>

      {/* get recipe section */}
      {ingredients.length < 4 ? (
        <div className='mt-10 w-full max-w-lg text-center rounded-lg bg-gray-200 px-5 py-2.5'>
          <p className='text-gray-500 text-sm leading-5'>A minimum of 4 ingredients is needed for a recipe.</p>
        </div>
      ) : (
        <div className='mt-10 w-full max-w-lg flex flex-col sm:flex-row items-center sm:justify-between rounded-lg bg-gray-200 px-5 py-2.5'>
          <div className='text-center sm:text-left sm:mr-10 mb-3 sm:mb-0'>
            <h3 className='text-md font-medium leading-6'>Ready for a recipe?</h3>
            <p className='text-gray-500 text-sm leading-5'>Generate a recipe with your list of ingredients.</p>
          </div>

          <button
            onClick={handleClick}
            className={`border-none rounded-md shadow-sm text-white px-4 py-2 text-sm cursor-pointer ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
            } transition duration-300`}
            disabled={loading}
            title={loading ? 'Loading, please wait...' : ''}>
            <div className='flex justify-center items-center'>
              {loading ? (
                <svg className='animate-spin h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z' />
                </svg>
              ) : (
                'Get a recipe'
              )}
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Ingredients;
