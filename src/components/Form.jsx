const Main = () => {
    return (
        <main className="h-9 pt-7 px-7">
            <form 
                action="POST"
                className="flex flex-grow justify-center gap-3"
            >
                <input 
                    aria-label="Add Ingredient"
                    placeholder="e.g. oregano"
                    type="text"
                    className="rounded-md shadow" 
                />
                <button
                    className="rounded-md shadow border-none bg-green-800 text-white w-36 text-sm font-medium"
                >Add Ingredient</button>
            </form>
        </main>
    );
};

export default Main;
