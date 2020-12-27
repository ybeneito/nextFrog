import dynamic from "next/dynamic";
import { Box, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layouts/Layout";
import Fraugue from "components/Dialog/Fraugue";
import Socials from "components/Dialog/Socials";
import Title from "components/Dialog/Title";
import Button from "components/Dialog/Button";
import Script from "components/Dialog/Script";

const DynamicFinalScore = dynamic(
  () => import("components/Dialog/FinalScoring"),
  {
    loading: () => (
      <Box width="100%" height="auto" textAlign="center">
        <Typography component="h4" variant="h4">
          Chargement en cours ...
        </Typography>
        {""}
      </Box>
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
