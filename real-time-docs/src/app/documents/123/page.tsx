
//see that we created a folder named "123" inside the documents folder.\
// This is a dynamic route segment representing a document with the ID "123".
// Inside this folder, we have a page.tsx file that defines the content for this specific document.

const DocumentIdPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-green-500">
      <p>This is the document page for document ID in the real-time documentation application.</p>
    </div>
  );
}

export default DocumentIdPage;