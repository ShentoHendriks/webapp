import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import {useRef} from 'react';
// your code

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  const ref = useRef(null);
  

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
    ref.current.value = data.result;
  }

  return (
    <div>
      <Head>
        <title>Shento's Text generator</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Generate Text</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter your text here"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate text" />
        </form>
        <textarea className={styles.vak} ref={ref}></textarea>
      </main>
    </div>
  );
}
