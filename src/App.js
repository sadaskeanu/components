import { GoBell, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          Primary
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          <GoBell />
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button danger outline>
          Danger
        </Button>
      </div>
    </div>
  );
}

export default App;
