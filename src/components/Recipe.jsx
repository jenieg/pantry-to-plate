const Recipe = ({markdown}) => {
    return (
        <section className="max-w-3xl mt-7 px-5 py-5">
            <pre>
                <code>{markdown}</code>
            </pre>
        </section>
    );
};

export default Recipe;
