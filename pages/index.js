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
  const additionalInformation = useRef(null);

  //Senses
  const sight = useRef(null);
  const smell = useRef(null);
  const taste = useRef(null);
  const sound = useRef(null);
  const touch = useRef(null);
  const metaphor = useRef(null);

  var input_prompt = "";

  // Rewrite Button output
  async function onSubmit(event) {
    event.preventDefault();

    // Setup The prompt
    input_prompt;
    console.log(get_import_prompt())
    get_import_prompt()

    // Max words
    function isNumeric(value) {
      return /^-?\d+$/.test(value);
    }

    var number_for_prompt = 250;
    if (isNumeric(maxwords.current.value) == true) {
      number_for_prompt = parseInt(maxwords.current.value / 0.75) // setup the input for max words in prompt
    }

    var randomness_holder = 0.7;
    if (isNumeric(randomness.current.value) == true) {
      randomness_holder = parseInt(randomness.current.value) // setup the randomness in prompt
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
      }, 2 * i); // speed of generation
    }
  }

  // Describe Button output
  async function onSubmitDescribe(event) {
    event.preventDefault();
    input_prompt = "";

    console.log(get_senses_description());
    // Max words
    function isNumeric(value) {
      return /^-?\d+$/.test(value);
    }

    var number_for_prompt = 250;
    if (isNumeric(maxwords.current.value) == true) {
      number_for_prompt = parseInt(maxwords.current.value / 0.75) // setup the input for max words in prompt
    }

    var randomness_holder = 0.7;
    if (isNumeric(randomness.current.value) == true) {
      randomness_holder = parseInt(randomness.current.value) // setup the randomness in prompt
    }

    // Prompt here for describe
    input_prompt;

    function get_senses_description() {
      var senses_description = "";
      if (sight.current.checked) {
        if (senses_description == "") {
          senses_description = "Using sight"
        } else {
          senses_description += "Using sight"
        }
      }
      if (smell.current.checked) {
        if (senses_description == "") {
          senses_description += "Using smell"
        } else {
          senses_description += " and using smell"
        }
      }

      if (taste.current.checked) {
        if (senses_description == "") {
          senses_description = "Using taste"
        } else {
          senses_description += " and using taste"
        }
      }

      if (sound.current.checked) {
        if (senses_description == "") {
          senses_description = "Using sound"
        } else {
          senses_description += " and using sound"
        }
      }

      if (touch.current.checked) {
        if (senses_description == "") {
          senses_description = "Using touch"
        } else {
          senses_description += " and using touch"
        }
      }

      if (metaphor.current.checked) {
        if (senses_description == "") {
          senses_description = "Using a metaphor"
        } else {
          senses_description += " and using a metaphor"
        }
      }
      return senses_description
    }
    if (detail.current.value == "Rewrite the sentence") {
      input_prompt = `Describe ${get_senses_description()} as if ${author.current.value} wrote it. Without saying ${author.current.value}:\n'\n${ref.current.value}\n'\n`
    }

    if (detail.current.value == "Add more detail") {
      input_prompt = `Describe with great detail ${get_senses_description()} as if ${author.current.value} wrote it. Without saying ${author.current.value}:\n'\n${ref.current.value}\n'\n`
    }
    if (detail.current.value == "Add as many detail as possible") {
      input_prompt = `Describe with as many details as possible and dialogue ${get_senses_description()} as if ${author.current.value} wrote it. Without saying ${author.current.value}:\n'\n${ref.current.value}\n'\n`
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
      }, 2 * i); // speed of generation
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
            <option value="Vladimir Nabokov">Vladimir Nabokov (Beautiful)</option>
            <option value="Ernest Hemingway">Ernest Hemingway (Simple, Minimalistic)</option>
            <option value="F. Scott Fitzgerald">F. Scott Fitzgerald (Vivid imagery and Metaphors)</option>
            <option value="J. R. R. Tolkien">J. R. R. Tolkien</option>
            <option value="Virginia Woolf">Virginia Woolf</option>
            <option value="Ocean Vuong">Ocean Vuong</option>
            <option value="Jane Austen">Jane Austen</option>
            <option value="Louisa May Alcott">Louisa May Alcott</option>
            <option value="George R. R. Martin">George R. R. Martin</option>
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

          {/* <div className={styles.margintop}>Additional Information:</div>
          <textarea className={styles.vakextrainfo} ref={additionalInformation} placeholder="For example, the father is gay or add the crowds shocked reaction. Describe the stares of the girl he walked past."></textarea> */}

          <form onSubmit={onSubmit}>
            <input className={styles.button} type="submit" value="Rewrite" />
          </form>

          <form onSubmit={onSubmitDescribe}>
            <input className={styles.button} type="submit" value="Describe" />
            <input ref={sight} type="checkbox" value=""></input>
            <label>Sight</label>
            <input ref={smell} type="checkbox" value="smell" ></input>
            <label>Smell</label>
            <input ref={taste} type="checkbox" value="taste"></input>
            <label>Taste</label>
            <input ref={sound} type="checkbox" value="sound"></input>
            <label>Sound</label>
            <input ref={touch} type="checkbox" value="touch"></input>
            <label>Touch</label>
            <input ref={metaphor} type="checkbox" value="metaphor"></input>
            <label>Metaphor</label>
          </form>
          <textarea className={styles.vakinput} ref={ref} placeholder="I want to describe..."></textarea>
          <textarea className={styles.vakouput} placeholder="Rewritten Text..." ref={output}></textarea>
        </div>


      </main>
    </div>
  );

  function removedot(input) {
    if (input.charAt(input.length - 1) == '.') {
      input = input.slice(0, -1);
      return input;
    } else {return input;}
    
  }

  // functions here for cleaner code
  function get_import_prompt() {
    input_prompt;
    if (detail.current.value == "Rewrite the sentence") {
      input_prompt = `Rewrite as if ${author.current.value} wrote it. Without saying ${author.current.value}:\n'\n${ref.current.value}\n'\n`
    }

    if (detail.current.value == "Add more detail") {
      input_prompt = `Rewrite with great detail as if ${author.current.value} wrote it. Without saying ${author.current.value}:\n'\n${ref.current.value}\n'\n`
    }
    if (detail.current.value == "Add as many detail as possible") {
      input_prompt = `Rewrite with as many details as possible and dialogue as if ${author.current.value} wrote it. Without saying ${author.current.value}:\n'\n${ref.current.value}\n'\n`
    }
  }

}
