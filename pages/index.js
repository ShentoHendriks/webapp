import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import { useRef } from 'react';



export default function Home() {
  const ref = useRef(null);
  const author = useRef(null);
  const output = useRef(null);
  const detail = useRef(null);
  const maxwords = useRef(null);
  const randomness = useRef(null);

  var input_prompt = "";

  async function onSubmit(event) {
    event.preventDefault();

    // Setup The prompt

    input_prompt = `Rewrite as if ${author.current.value} wrote it. Without saying ${author.current.value}:\n${ref.current.value}`

    if (detail.current.value == "Rewrite the sentence") {
      input_prompt = `Rewrite as if ${author.current.value} wrote it. Without saying ${author.current.value}:\n'\n${ref.current.value}\n'\n`
    }

    if (detail.current.value == "Add more detail") {
      input_prompt = `Rewrite immersively as if ${author.current.value} wrote it. Without saying ${author.current.value}. Add more detail:\n'\n${ref.current.value}\n'\n`
    }
    if (detail.current.value == "Add as many detail as possible") {
      input_prompt = `Rewrite immersively as if ${author.current.value} wrote it. Add as many details as possible. Write as much as you can. Without saying ${author.current.value}:\n'\n${ref.current.value}\n'\n`
    }

    // Max words
    function isNumeric(value) {
      return /^-?\d+$/.test(value);
    }

    var number_for_prompt = 250;
    if (isNumeric(maxwords.current.value) == true) {
      number_for_prompt = parseInt(maxwords.current.value / 0.75)
    }

    var randomness_holder = 0.7;
    if (isNumeric(randomness.current.value) == true) {
      randomness_holder = parseInt(randomness.current.value)
    }

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      /* Send the data to the generate.js */
      body: JSON.stringify({
        input: input_prompt,
        maxwordsCount: number_for_prompt,
        randomness: randomness_holder,
      }),
    });
    var data = await response.json();
    var data2 = data.result.choices[0].text.trim(); //edited output from ai shows results and trimmed
    var tokencost = data.result.usage.total_tokens; //cost of tokens

    /* Letter generation in forms*/
    for (let i = 0; i < data2.length; i++) {
      task(i);
    }

    function task(i) {
      setTimeout(function () {
        if (i == 0) {
          output.current.value = "";
        }
        output.current.value += data2.charAt(i)
      }, 10 * i); // speed of generation
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
          <h1><span style={{ color: '#7e7ebb' }}>Verbosity:</span> Rewrite your prose into something beautiful.</h1>
          <h3 style={{ color: '#a3d9a0' }}>Developed and created by: Shento Hendriks</h3>

          <div>Choose your Author:</div>
          <select className={styles.bigfont} ref={author}>
            <option value="Vladimir Nabokov">Vladimir Nabokov</option>
            <option value="Ernest Hemingway">Ernest Hemingway</option>
            <option value="F. Scott Fitzgerald">F. Scott Fitzgerald</option>
            <option value="J. R. R. Tolkien">J. R. R. Tolkien</option>
            <option value="Virginia Woolf">Virginia Woolf</option>
            <option value="A poet">A Poet</option>
          </select>

          <div className={styles.margintop}>Choose amount of detail:</div>
          <select className={styles.bigfont} ref={detail}>
            <option value="Rewrite the sentence">Rewrite the sentence</option>
            <option value="Add more detail">Add more detail</option>
            <option value="Add as many detail as possible">Add as many detail as possible</option>
          </select>

          <div className={styles.margintop}>Generate max word count (1-1000) Default = 250:</div>
          <input type="text" className={styles.bigfont} ref={maxwords}></input>

          <div className={styles.margintop}>Randomness (0-1) Default = 0.7:</div>
          <input type="text" className={styles.bigfont} ref={randomness}></input>

          <form onSubmit={onSubmit}>
            <input className={styles.button} type="submit" value="Rewrite" />
          </form>

          <textarea className={styles.vakinput} ref={ref} placeholder="I want to describe..."></textarea>
          <textarea className={styles.vakouput} placeholder="Rewritten Text..." ref={output}></textarea>
        </div>


      </main>
    </div>
  );
}