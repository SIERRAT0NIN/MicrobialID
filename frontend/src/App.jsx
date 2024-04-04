import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <a href="/home">
        <h1 className="rounded-full p-8 shadow-teal-50 text-2xl text-white font-extrabold  shadow-lg hover:scale-150">
          Meet your AI Lab Assistant
          <FontAwesomeIcon icon="fa-solid fa-poo" />
          <i className="fa-solid fa-user ml-5  "></i>
        </h1>
      </a>
    </>
  );
}

export default App;
