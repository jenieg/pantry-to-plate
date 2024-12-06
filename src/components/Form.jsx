const Main = () => {
    return (
        <main className="h-9 pt-7 px-7">
            <form 
                action="POST"
                className="flex flex-col sm:flex-row sm:flex-grow justify-center gap-3"
            >
                <input 
                    aria-label="Add Ingredient"
                    placeholder="e.g. oregano"
                    type="text"
                    className="rounded-md shadow" 
                />
                <button
                    className="p-3 rounded-md shadow border-none bg-green-800 text-white text-sm font-medium"
                >Add Ingredient</button>
            </form>
        </main>
    );
};

export default Main;
