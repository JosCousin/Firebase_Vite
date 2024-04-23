import { Link } from "react-router-dom";
import { forzaHorizonCars } from "../Constant";


function ForzaHorizonList({ treshold }) {
  
  const forzaHorizonItems = forzaHorizonCars.map((forzaHorizon) => (
    <li key={forzaHorizon.car}>
      <Link to={"/cars/" + forzaHorizon.car}>
        Name: {forzaHorizon.car}
        <br></br>
        ch:{" "}
        <span
          style={{
            color: forzaHorizon.ch > treshold ? "green" : "red",
          }}
        >
          {forzaHorizon.ch}
        </span>
      </Link>
    </li>
  ));

  return <ol> {forzaHorizonItems} </ol>;
}

export default ForzaHorizonList;
