interface DocumentsLayoutProps {
    children: React.ReactNode
}

//layout.tsx is a reserved file name for Next.js route segments
// It is used to define the layout for all pages within the /documents route segment
// We can add shared components like headers, footers, or sidebars here
//the layput will be applied to all pages inside the documents folder
const DocumentsLayout  = ({children}: DocumentsLayoutProps) => {
    return (

        <div className="flex flex-col gap-y-4">
            <nav className="w-full bg-red-500">Document navbar</nav>
            {children}
        </div>

    )

}


export default DocumentsLayout;