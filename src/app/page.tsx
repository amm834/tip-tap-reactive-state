'use client'
import React, {useState} from 'react';
import Tiptap from "@/app/components/TipTap";

const Home = () => {
    const [content, setContent] = useState('')
    const [limit, setLimit] = useState(10)
    const [placeholder, setPlaceholder] = useState('Type something')

    return (
        <div className="mx-8 mt-8">
            <div>
                <div>Char limit:{limit}</div>
                <div className="flex gap-x-3">
                    <button
                        className="px-3 py-1.5 bg-indigo-600 text-white rounded hover:ring"
                        onClick={() => setLimit(15)}>Change Limit
                    </button>
                    <button
                        className="px-3 py-1.5 bg-indigo-600 text-white rounded hover:ring"
                        onClick={() => setPlaceholder('Placeholder Changed')}>Change Placeholder
                    </button>
                </div>
            </div>

            <div className="mt-8">
                <Tiptap
                    content={content}
                    setContent={content => setContent(content)}
                    charLimit={limit}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default Home;
