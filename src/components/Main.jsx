import { useState } from 'react';
import Ingredients from './Ingredients';
import Recipe from './Recipe';
import { getRecipeFromMistral } from '../api/ai';

const Main = () => {
  //Ingredients State
  const [ingredients, setIngredients] = useState([]);

  //Recipe and visibility state
  const [recipe, setRecipe] = useState('');

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error state
  const [error, setError] = useState('');

  //add ingredient function
  const addIngredient = (formData) => {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  //button click function
  const handleClick = async () => {
    // Start loading
    setLoading(true);
    try {
      // Fetch the recipe with ingredients stored in state
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown); // Store the markdown response
    } catch (error) {
      setError('Failed to generate recipe. Please try again.');
      console.error('Error fetching recipe:', error);
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <main className='w-full pt-7 px-7 flex flex-col justify-center items-center'>
      {/* Add ingredient form */}
      <form action={addIngredient} className='flex flex-col w-full sm:flex-row sm:flex-grow sm:justify-center gap-3'>
        <input
          name='ingredient'
          aria-label='Add Ingredient'
          placeholder='e.g. oregano'
          type='text'
          className='rounded-md shadow'
          required
          maxLength={25}
          minLength={2}
        />
        <button className='p-3 rounded-md shadow border-none bg-green-800 text-white text-sm font-medium'>Add Ingredient</button>
      </form>

      {/* Ingredient list & get recipe button */}
      <Ingredients ingredients={ingredients} handleClick={handleClick} loading={loading} />

      {/* Error */}
      {error && <p className='mt-5 text-red-500 text-sm'>{error}</p>}

      {/* formated recipe  */}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
};

export default Main;
