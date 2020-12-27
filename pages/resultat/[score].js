import { useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Layout from "components/Layouts/Layout";
import Fraugue from "components/Dialog/Fraugue";
import Socials from "components/Dialog/Socials";
import Title from "components/Dialog/Title";
import Button from "components/Dialog/Button";
import Script from "components/Dialog/Script";

const DynamicFinalScore = dynamic(
  () => import("components/Dialog/Finalscore"),
  {
    loading: () => (
      <p style={{ width: "100%", textAlign: "center" }}> Chargement ...</p>
    ),
  }
);

export const Outcome = () => {
  const router = useRouter();
  const score = router.query.score;

  const GoBackHome = useCallback(() => {
    if (confirm("Êtes vous sur de vouloir rejouer?")) {
      router.push("/");
    }
  });

  return (
    <Layout>
      <Title onClick={GoBackHome} result={true} />
      <Script result={score} />
      <DynamicFinalScore score={score} />
      <Socials />
      <Fraugue result={true} />
      <Button result={true} />
    </Layout>
  );
};

export default Outcome;
