import { useParams } from "react-router-dom";
import { forzaHorizonCars } from "../Constant";

export default function CarsDetailPage() {
  const params = useParams();
  const car = forzaHorizonCars.find((car) => car.name === params.name);
   
  return (
    <>
      {car ? (
        <>
          <h1>Cars Details {params.car}</h1>
          <p>{car.car}</p>
          <p>{car.ch}</p>
        </>
      ) : (
        <p style={{ color: "red" }}>Pas de voiture</p>
      )}
    </>
  );
}
