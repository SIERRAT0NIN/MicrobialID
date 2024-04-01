import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <>
      <h1 className="rounded-full p-8 colored text-2xl text-white font-extrabold  shadow-lg">
        Hello World
        <FontAwesomeIcon icon="fa-solid fa-poo" />
        <i className="fa-solid fa-user-secret ml-5  hover:animate-appearance-out"></i>
      </h1>
    </>
  );
}

export default App;
