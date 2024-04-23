import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  setDoc,
} from "firebase/firestore";

export default function FirebaseStoreDemo() {
  const { name } = useState();
  const { horsePower } = useState();
  const carsCollection = collection(db, "cars");
  // useState permet de générer un état
  const [carsList, setcarsList] = useState([]);

  async function fetchCars() {
    const carsSnapshot = await getDocs(carsCollection);
    const list = carsSnapshot.docs.map((cars) => (
      <li key={cars.id}>
        Name: {cars.data().name}. Hp: {cars.data().horsePower}
      </li>
    ));
    setcarsList(list);
  }

  async function addLesCars(name, horsePower) {
    const newDoc = doc(carsCollection);

    await setDoc(newDoc, {
      name: name,
      horsePower: horsePower,
    });
  }

  return (
    <>
      <ul>{carsList}</ul>
      <input value={name} />
      <input value={horsePower} />
      <button onClick={() => addLesCars(name, horsePower)}>Add Fighter</button>
    </>
  );
}
