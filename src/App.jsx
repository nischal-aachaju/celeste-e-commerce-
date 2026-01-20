
import Home from "./Pages/Home";
import Navbar from "./Components/layout/Navbar";
import Product from "./Pages/Product";
import axios from "axios";
import LoadingPage from "./Pages/LoadingPage";
import { useContext } from "react";
import { ApiDataContext } from "./Context/ContextApi";



const App = () => {

  const data=useContext(ApiDataContext)

  if (data == null) {
    return <LoadingPage />
  }
  return (
    <div className=" h-screen w-full">
      <Navbar />
      <Home />
      <Product />
    </div>
  );
};

export default App;
