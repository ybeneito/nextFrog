import React, { useState, useEffect, useCallback } from "react";
import Router from "next/router";
import Loader from "components/Layouts/Loader";
import Layout from "components/Layouts/Layout";
import Title from "components/Dialog/Title";
import Counter from "components/Dialog/Counter";
import Script from "components/Dialog/Script";
import Quizz from "components/Dialog/Quizz";
import Button from "components/Dialog/Button";
import Correction from "components/Dialog/Correction";
import Fraugue from "components/Dialog/Fraugue";

export default function Home({ talk }) {
  const [isLoading, setIsLoading] = useState(true);
  const [wordLoading, setWordLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [step, setStep] = useState(0);

  const { textButton, textCorrection, textReponses, textScript } = talk;

  useEffect(() => {
    const timerLoading = setInterval(() => {
      setIsLoading(false);
    }, 5000);
    return function () {
      clearInterval(timerLoading);
    };
  }, []);

  useEffect(() => {
    const timerWordLoading = setInterval(() => {
      setWordLoading(false);
    }, 3200);
    return function () {
      clearInterval(timerWordLoading);
    };
  }, []);

  const Confirmation = useCallback(() => {
    if (confirm("Êtes vous sûr de vouloir recommencer ?")) {
      setIsLoading(false);
      setSelected(0);
      setGoodAnswer(0);
      setStep(0);
    }
  }, []);

  const Increment = useCallback(() => {
    setStep(step + 1);
    (step != 2) & (step != 4) & (step != 6) & (step != 8) & (step != 10) &&
      setSelected(0),
      (step == 2) & (selected == 2) && setGoodAnswer(goodAnswer + 1),
      (step == 4) & (selected == 1) && setGoodAnswer(goodAnswer + 1),
      (step == 6) & (selected == 4) && setGoodAnswer(goodAnswer + 1),
      (step == 8) & (selected == 4) && setGoodAnswer(goodAnswer + 1),
      (step == 10) & (selected == 3) && setGoodAnswer(goodAnswer + 1);
    step == 12 && Router.push(`/resultat/${goodAnswer}`);
  }, [step, selected, goodAnswer]);

  return isLoading ? (
    <Loader text="Bienvenue sur NextFrog !" status={wordLoading} />
  ) : (
    <Layout>
      <Title onClick={Confirmation} />
      <Counter step={step} goodAnswer={goodAnswer} />
      <Script step={step} content={textScript} />
      {step < 12 ? (
        <Quizz
          step={step}
          content={textReponses}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        " "
      )}
      <Button
        step={step}
        content={textButton}
        selected={selected}
        onClick={Increment}
      />
      <Correction
        step={step}
        selected={selected}
        textCorrection={textCorrection}
      />
      <Fraugue step={step} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://next-frog.vercel.app/api/hello");
  const talk = await res.json();

  return {
    props: {
      talk,
    },
  };
}
