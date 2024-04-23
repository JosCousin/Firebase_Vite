import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function FirebaseDemo({}) {
  const [email, setEmail] = useState();
  const [mdp, setMdp] = useState();
  async function createUser() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      mdp
    );
    console.log(userCredentials.user.email, userCredentials.user.uid);
  }

  return (
    <>
      <h1>Firebase Demo</h1>
      <div>
        <input
          name="email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          name="password"
          required
          type="password"
          value={mdp}
          onChange={(e) => setMdp(e.target.value)}
        ></input>
        <button onClick={createUser}>Create user</button>
      </div>
    </>
  );
}
