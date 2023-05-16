'use client'
import {EditorContent, useEditor} from '@tiptap/react'
import {StarterKit} from "@tiptap/starter-kit";
import Placeholder from '@tiptap/extension-placeholder'
import {CharacterCount} from "@tiptap/extension-character-count";
import {useEffect} from "react";

interface ITipTap {
    content: string;
    setContent: (content: string) => void;
    charLimit: number;
    placeholder:string;
}

const Tiptap = ({
                    content,
                    setContent,
                    charLimit,
    placeholder,
                }: ITipTap) => {

    console.log('limit', charLimit)

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'My Custom Placeholder',
            }),
            CharacterCount.configure({
                limit: charLimit,
            })
        ],
        content,
    })

    useEffect(() => {
        if (editor !== null && placeholder !== "") {
            editor.extensionManager.extensions.filter(
                (extension) => extension.name === "placeholder"
            )[0].options["placeholder"] = placeholder;
            editor.view.dispatch(editor.state.tr);
        }
    }, [editor, placeholder]);


    useEffect(() => {
        if (editor !== null && charLimit !== null) {
            editor.extensionManager.extensions.filter(
                (extension) => extension.name === "characterCount"
            )[0].options["limit"] = charLimit;
            editor.view.dispatch(editor.state.tr);
        }
    }, [editor, charLimit]);

    editor?.on('update', ({editor}) => {
        setContent(editor.getHTML())
    })

    return (
        <EditorContent editor={editor}/>
    )
}

export default Tiptap;
