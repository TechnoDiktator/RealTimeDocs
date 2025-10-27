import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div  className="flex min-h-screen flex-col items-center justify-center py-2 bg-red-500">
      <p>This is the home page of the real-time documentation application.</p>
      <Button variant="secondary">Click Me</Button> 
    </div>
  );
}

export default Home;