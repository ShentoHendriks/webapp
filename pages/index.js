import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import { useRef } from 'react';
// your code

export default function Home() {
  const ref = useRef(null);
  const author = useRef(null);
  var input_prompt = "";

  async function onSubmit(event) {
    event.preventDefault();
    input_prompt = `Rewrite as if ${author.current.value} has written it:\n${ref.current.value}`
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: input_prompt }),
    });
    const data = await response.json();

    /* Letter generation in forms*/
    for (let i = 0; i < data.result.length; i++) {
      task(i);
    }

    function task(i) {
      setTimeout(function () {
        if (i == 0) {
          ref.current.value = "";
        }
        ref.current.value += data.result.charAt(i)
      }, 15 * i);
    }
  }

  return (
    <div>
      <Head>
        <title>Shento's Text generator</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1>Verbosity: Turn your prose into a published author.</h1>
          <h3>Developed and created by: Shento Hendriks</h3>
          <div>Choose your Author:</div>
          <select ref={author}>
            <option value="Vladimir Nabokov">Vladimir Nabokov</option>
            <option value="Ernest Hemingway">Ernest Hemingway</option>
            <option value="F. Scott Fitzgerald">F. Scott Fitzgerald</option>
          </select>
          <form onSubmit={onSubmit}>
            <input type="submit" value="Rewrite" />
          </form>
        </div>



        <textarea className={styles.vak} ref={ref} placeholder="I want to describe..."></textarea>
      </main>
    </div>
  );
}