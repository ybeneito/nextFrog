// Document contenant toute la conversation entre utilisateur et l'app

export default {
  textScript: [
    { step: 0, text: "ZzZZ..ZzZZzz..." },
    { step: 1, text: "Hey, Prêt à démontrer tes talents de dev ?" },
    { step: 2, text: "Qu'est-ce que le SSR ?" },
    { step: 3, text: "Qu'est-ce que le SSR ?" },
    { step: 4, text: "Quelle est la caractéristique du dossier pages ?" },
    { step: 5, text: "Quelle est la caractéristique du dossier pages ?" },
    { step: 6, text: "Peut-on faire du déploiement continue avec NextJS ?" },
    { step: 7, text: "Peut-on faire du déploiement continue avec NextJS ?" },
    { step: 8, text: "Une application NextJS est-elle forcement statique ?" },
    { step: 9, text: "Une application NextJS est-elle forcement statique ?" },
    { step: 10, text: "A quoi sert le dynamic import ?" },
    { step: 11, text: "A quoi sert le dynamic import ?" },
    { step: 12, text: "Hmmmmm... Tu veux mon avis ?! " },
  ],
  textReponses: [
    {
      step: 2,
      proposal: {
        1: "Un nouveau permis de conduire pour deux roues",
        2: "Server Side Rendering",
        3: "Server Step Rendering",
        4: "WTF ?",
      },
    },
    {
      step: 3,
      proposal: {
        1: "Un nouveau permis de conduire pour deux roues",
        2: "Server Side Rendering",
        3: "Server Step Rendering",
        4: "WTF ?",
      },
    },
    {
      step: 4,
      proposal: {
        1: "Chaque page présente dans le dossier bénéficie d'un système de routing basé sur son nom",
        2: "Il n'en a pas de particulières",
        3: "Il ne donne pas accès aux routes dynamiques",
        4: "Il est incompatible avec withRouter()",
      },
    },
    {
      step: 5,
      proposal: {
        1: "Chaque page présente dans le dossier bénéficie d'un système de routing basé sur son nom",
        2: "Il n'en a pas de particulières",
        3: "Il ne donne pas accès aux routes dynamiques",
        4: "Il est incompatible avec withRouter()",
      },
    },
    {
      step: 6,
      proposal: {
        1: "Non c'est un simple framework Frontend",
        2: "Je n'en sais rien !",
        3: "C'est possible, mais seulement avec Github et un Compte Vercel",
        4: "Oui c'est possible, peu importe le fournisseur de dépôt et l'hébergeur",
      },
    },
    {
      step: 7,
      proposal: {
        1: "Non c'est un simple framework Frontend",
        2: "Je n'en sais rien !",
        3: "C'est possible, mais seulement avec Github et un Compte Vercel",
        4: "Oui c'est possible, peu importe le fournisseur de dépôt et l'hébergeur",
      },
    },
    {
      step: 8,
      proposal: {
        1: "Oui et c'est un choix !",
        2: "Non seul Gatsby peut le faire",
        3: "NextJS sert uniquement à rendre du contenu de façon dynamique",
        4: "NextJS permet de faire à la fois du rendu dynamique et du statique.",
      },
    },
    {
      step: 9,
      proposal: {
        1: "Oui et c'est un choix !",
        2: "Non seul Gatsby peut le faire",
        3: "NextJS sert uniquement à rendre du contenu de façon dynamique",
        4: "NextJS permet de faire à la fois du rendu dynamique et du statique.",
      },
    },
    {
      step: 10,
      proposal: {
        1: "C'est juste une autre façon d'importer des composants",
        2: "Une façon d'importer dynamiquement et plus gourmande en ressources",
        3: "Il permet de mieux découper son code et de le manipuler dynamiquement",
        4: "Je vais retourner réviser",
      },
    },
    {
      step: 11,
      proposal: {
        1: "C'est juste une autre façon d'importer des composants",
        2: "Une façon d'importer dynamiquement et plus gourmande en ressources",
        3: "Il permet de mieux découper son code et de le manipuler dynamiquement",
        4: "Je vais retourner réviser",
      },
    },
  ],
  textButton: [
    { step: 0, text: "Bonjour !" },
    { step: 1, text: "Go !" },
    { step: 2, text: "Valider" },
    { step: 3, text: "Continuer" },
    { step: 4, text: "Valider" },
    { step: 5, text: "Continuer" },
    { step: 6, text: "Valider" },
    { step: 7, text: "Continuer" },
    { step: 8, text: "Valider" },
    { step: 9, text: "Continuer" },
    { step: 10, text: "Valider" },
    { step: 11, text: "Continuer" },
    { step: 12, text: "Evidemment !" },
  ],
  textCorrection: [
    {
      step: 3,
      reponse: 2,
      text:
        "Le SSR permet un rendu côté serveur et la réponse envoyée au navigateur contient directement tout le code HTML généré. La page est donc visible dès la première requête, avant même d'être interactive",
    },
    {
      step: 5,
      reponse: 1,
      text:
        "Une URL est automatiquement crée  lorsque l'on insère un fichier JS ou JSX dans le dossier /pages. Il permet aussi d'utiliser le routage dynamique au moyen de withRouter()",
    },
    {
      step: 7,
      reponse: 4,
      text:
        "NextJS permet le déploiement continue sous toutes ses formes. Depuis l'éditeur de texte grâce à une liaison entre Github et Vercel comme dans ce tutoriel, ou à votre sauce",
    },
    {
      step: 9,
      reponse: 4,
      text:
        "Vous pouvez bénéficier des avantages des données statiques en ligne, mais en supportant parfaitement les données dynamiques. Il offre même en bêta la Génération Statique Incrémentielle",
    },
    {
      step: 11,
      reponse: 3,
      text:
        "Le Dynamic import permet de mieux découper son code en morceaux afin d'économiser des ressources en important juste ce qu'il faut pour une bonne expérience utilisateur. Il permet aussi de mettre en place des loaders ou d'utiliser des modules qui ne marchent que côté client",
    },
  ],
};
