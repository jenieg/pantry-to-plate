// eslint-disable-next-line react/prop-types
const Recipe = ({recipe}) => {
    return (
        <section className="max-w-3xl mt-7 px-5 py-5">
            <pre>
                <code>{recipe}</code>
            </pre>
        </section>
    );
};

export default Recipe;
