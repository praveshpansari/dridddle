import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { Montserrat } from "next/font/google";
import LanguageSelector from "./components/LanguageSelector";
import Tries from "./components/Tries";

const montserrat = Montserrat({ subsets: ["latin"] });

const IndexPage: React.FC = () => {
  const [answer, setAnswer] = React.useState<string>("");
  const [correct, setCorrect] = useState(false);
  const [tries, setTries] = useState<number>(0);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    console.log(answer, tries);
    setTries(tries + 1);
    if (answer.toLowerCase() == "fire") setCorrect(true);
    if (tries == 3) setTries(0);
    // setAnswer("");
  };

  return (
    <>
      <Head>
        <title>Daily Riddle | Challenge Your Mind Every Day</title>
        <meta
          name="description"
          content="Get a new riddle every day and challenge your mind with Daily Riddle. Join our community of riddle enthusiasts and put your problem-solving skills to the test!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${montserrat.className} ${styles.main}`}>
        <section className={styles.menu}>
          <LanguageSelector />
          <Tries tries={tries} />
        </section>
        <section className={`${styles.riddle}`}>
          <p className={styles.riddleText}>
            I am always hungry, I must always be fed. The finger I touch, will
            soon turn red. What am I?
          </p>
          <div className={styles.answer}>
            <input
              className={styles.answerbox}
              type="text"
              id="answer"
              value={answer}
              onChange={handleAnswerChange}
            />
            <span onClick={(e) => handleSubmit(e)} className={styles.answerbtn}>
              <button className={styles.btn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 96 960 960"
                  width="40"
                >
                  <path
                    className={styles.arrow}
                    fill="currentColor"
                    d="M527.348 799.102q-12.638-13.015-12.66-31.442-.022-18.428 12.326-30.776l118.522-118.145H190.884q-18.667 0-31.37-12.703t-12.703-31.369q0-18.667 12.703-31.37t31.37-12.703h454.652L526.014 411.072q-12.638-12.637-12.304-30.565.333-17.928 12.971-30.942 13.014-12.348 31.37-12.348 18.355 0 30.703 12.348l193.667 194.232q6.652 6.652 9.949 14.485 3.297 7.834 3.297 16.385 0 8.55-3.297 16.384-3.297 7.833-9.949 14.485L589.087 799.435q-12.87 12.87-30.797 12.587-17.928-.282-30.942-12.92Z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndexPage;
