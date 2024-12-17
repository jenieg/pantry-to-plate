const Recipe = () => {
    return (
        <section className="max-w-3xl mt-7 px-5 py-5">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Beef Bolognese Pasta</h2>
            <article className="text-gray-700" aria-live="polite">
                <p className="mb-5">
                    I recommend making a simple a delicious Beef Bolognese Pasta. Here is the recipe:
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredients:</h3>
                <ul className="list-disc list-inside space-y-2 mb-5">
                    <li>1 lb. ground beef</li>
                    <li>1 onion, diced</li>
                    <li>3 cloves garlic, minced</li>
                    <li>2 tablespoons tomato paste</li>
                    <li>1 (28 oz) can crushed tomatoes</li>
                    <li>1 cup beef broth</li>
                    <li>1 teaspoon dried oregano</li>
                    <li>1 teaspoon dried basil</li>
                    <li>Salt and pepper to taste</li>
                    <li>
                        8 oz pasta of your choice (e.g., spaghetti, penne, or
                        linguine)
                    </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions:</h3>
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        Bring a large pot of salted water to a boil for the
                        pasta.
                    </li>
                    <li>
                        In a large skillet or Dutch oven, cook the ground beef
                        over medium-high heat, breaking it up with a wooden
                        spoon, until browned and cooked through, about 5-7
                        minutes.
                    </li>
                    <li>
                        Add the diced onion and minced garlic to the skillet and
                        cook for 2-3 minutes, until the onion is translucent.
                    </li>
                    <li>Stir in the tomato paste and cook for 1 minute.</li>
                    <li>
                        Add the crushed tomatoes, beef broth, oregano, and
                        basil. Season with salt and pepper to taste.
                    </li>
                    <li>
                        Reduce the heat to low and let the sauce simmer for
                        15-20 minutes, stirring occasionally, to allow the
                        flavors to meld.
                    </li>
                    <li>
                        While the sauce is simmering, cook the pasta according
                        to the package instructions. Drain the pasta and return
                        it to the pot.
                    </li>
                    <li>
                        Add the Bolognese sauce to the cooked pasta and toss to
                        combine.
                    </li>
                    <li>
                        Serve hot, garnished with additional fresh basil or
                        grated Parmesan cheese if desired.
                    </li>
                </ol>
            </article>
        </section>
    );
};

export default Recipe;
