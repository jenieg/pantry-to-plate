import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// eslint-disable-next-line react/prop-types
const Recipe = ({ recipe }) => {
    return (
        <section className="max-w-3xl mt-7 px-5 py-5">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {recipe}
            </ReactMarkdown>
        </section>
    );
};

export default Recipe;
