import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
    <>
    <div className="bg-white text-black w-full min-h-screen	px-5 md-px-10">
      <Header/>
      <Outlet/>
    </div>
      <Footer/>
    </>
  );
}

export default App;
