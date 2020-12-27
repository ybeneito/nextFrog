import React, { useState, useEffect, useCallback } from "react";
import Router from "next/router";
import Loader from "components/Layouts/Loader";
import Layout from "components/Layouts/Layout";
import Title from "components/Dialog/Title";
import Counter from "components/Dialog/Counter";
import Fraugue from "components/Dialog/Fraugue";
import Button from "components/Dialog/Button";
import Correction from "components/Dialog/Correction";
import Quizz from "components/Dialog/Quizz";
import Script from "components/Dialog/Script";

export default function Home({ talk }) {
  // Ensemble de Hooks d'états qui permettent de consulter et de modifié l'état de mon appilication.
  const [isLoading, setIsLoading] = useState(true);
  const [wordLoading, setWordLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [step, setStep] = useState(0);

  // Destructuration du talk en plusieurs categories variables respectives
  const { textButton, textCorrection, textReponses, textScript } = talk;

  // Hook d'effet qui initie un timer pour afficher le loader. Est nettoyé à la fin pour éviter les sur-rendu
  useEffect(() => {
    const timerLoading = setInterval(() => {
      setIsLoading(false);
    }, 5000);
    return function () {
      clearInterval(timerLoading);
    };
  }, []);

  // Hook d'effet qui initie un timer pour afficher le loader. Est nettoyé à la fin pour éviter les sur-rendu
  useEffect(() => {
    const timerWordLoading = setInterval(() => {
      setWordLoading(false);
    }, 3200);

    return function () {
      clearInterval(timerWordLoading);
    };
  }, []);

  // Fonction de confirmation qui renvoi l'utilisateur au debut de l'app au clique sur le Titre
  const Confirmation = useCallback(() => {
    if (confirm("Etes vous sur de vouloir recommencer ?")) {
      setIsLoading(false);
      setSelected(0);
      setGoodAnswer(0);
      setStep(0);
    }
  }, []);

  // Fonction qui permet de changer les etats de l'ap au fil des clicks et de push l'utilisateur sur la section resultat
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

  // Si l'app est en cours de chargement Loader, sinon Layout principal.
  return isLoading ? (
    <Loader text="Bienvenue sur Next Frogs" status={wordLoading} />
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
        ""
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

// Pour récupérer les données  de notre app au moment de sa construction
export async function getStaticProps() {
  // Appel de notre propre API avec fetch inclus nativement dans NextJS
  // A faire sur votre url de deploiement une fois le projet en ligne.
  const res = await fetch("https://next4frogs.vercel.app/api/hello");
  const talk = await res.json();

  // on retourne le script de dialogue au composant pour qu'il le traite au rendu.
  return {
    props: {
      talk,
    },
  };
}
