

//why do we need a promise here?
// 
interface DocumentIdPageProps {
    params: Promise<{ documentId: string}>
}



//in this function we first destructures the params object to get the documentId
//then we return a simple div that displays the documentId
const DocumentIdPage = async ({params}: DocumentIdPageProps) => {

    const awaitedParams = await params;
    const documentId = awaitedParams.documentId;

    return (
        <div>
            Document Id: {documentId}
        </div>
    )


}

export default DocumentIdPage;







