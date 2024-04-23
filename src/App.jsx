import { Link, Outlet } from "react-router-dom";
import "./App.css"



function App() {
  return (
    <>
    <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/cars">Cars</Link>

    </nav>

    <h1>Début du outlet</h1>
    <Outlet />
    <h1>Fin du outlet</h1>
    </>
  )
}

export default App;
