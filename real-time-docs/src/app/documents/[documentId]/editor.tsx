//what is use client ??
/*
The use client directive in Next.js is a crucial mechanism for 
designating a component as a Client Component. In Next.js's App Router, 
components are by default Server Components, meaning they are 
rendered on the server. The use client directive explicitly tells Next.js 
to treat the component and its imported dependencies as client-side code.
*/
"use client";

//EditorContent is a react class component


import { useEditor , EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";



export const Editor = () => {
    const editor = useEditor({
        editorProps: {
            attributes: {
                style: "padding-left: 56px; padding-right: 56px",
                class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C8] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
            },
        },
        extensions : [StarterKit],
        content: "<p>Hello World! This is your editor.</p>",
    });


    return (
        <div className="size-full overflow-x-auto bg-[#b1b0aa] px-4 print:p-0 print:bg-white print:overflow-visible">
            
            <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
            <EditorContent editor={editor} />
            </div>
        </div>
    )

}