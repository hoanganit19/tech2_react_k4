import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./Components/ComponentA";
import Products from "./Products/Products";

function App() {
  console.log(logo);
  const logo2 = "/logo192.png";
  console.log(logo2);
  return (
    <div>
      <img src={logo2} alt="" />
    </div>
  );
}

export default App;
