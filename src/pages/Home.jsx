import Header from "../components/Header";
import Hello from "../components/Hello";
import { useState } from "react";
import Counter from "../components/Counter"
import ForzaHorizonList from "../components/ForzaHorizonList"



export default function Home() {
    const [changement, setChangement] = useState(50);
  return (
    <>
    <Hello />
    <Header />
      <input
        value={changement}
        onChange={(e) => setChangement(+e.target.value)}
        required
      />
      <Counter initialValue={10} increment={1} />
      <Counter initialValue={-30} increment={1} />
      <div>Cours de react</div>
      <h2>regarde mon tableau</h2>
      
      <ForzaHorizonList treshold={changement} />
    </>
  );
}