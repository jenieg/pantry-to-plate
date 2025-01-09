import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

//use markdown and remark to create formated recipe from hf ai
// eslint-disable-next-line react/prop-types
const Recipe = ({ recipe }) => {
    return (
        <section aria-live="polite" className="max-w-3xl mt-7 px-5 py-5">
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                className="prose prose-md">
                {recipe}
            </ReactMarkdown>
        </section>
    );
};

export default Recipe;
