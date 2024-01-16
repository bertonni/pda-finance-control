import { Button } from "../../components/Button";

function HomePage() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div
      className="w-screen flex flex-col items-center
      justify-between pt-20 py-28 h-full"
    >
      <h1 className="display-large text-center">Home Page</h1>

      <Button title="Começar" onClick={handleClick} style={{ width: 200 }} />
    </div>
  );
}

export default HomePage;
