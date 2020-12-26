import React, { useState, useEffect, useCallback } from "react";

import Loader from "components/Layouts/Loader";
import Layout from "components/Layouts/Layout";

export default function Home({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [wordLoading, setWordLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [step, setStep] = useState(0);

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
      setIsLoading(false);
    }, 3200);
    return function () {
      clearInterval(timerWordLoading);
    };
  }, []);

  return isLoading ? (
    <Loader text="Bienvenue sur NextFrog !" status={wordLoading} />
  ) : (
    <Layout>
      <div>Salut</div>
    </Layout>
  );
}
