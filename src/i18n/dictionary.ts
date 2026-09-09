export type Lang = "fr" | "en";

/** Chaîne bilingue réutilisable dans les fichiers de contenu. */
export type Localized = { fr: string; en: string };

export const pick = (value: Localized, lang: Lang): string => value[lang];

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      work: "Projets",
      skills: "Compétences",
      contact: "Contact",
      cta: "Me contacter",
      themeLabel: "Thème",
      langLabel: "Passer en anglais",
    },
    hero: {
      availability: "Disponible — freelance ou temps partiel",
      titleLine1: "Je construis des produits complets,",
      titleLine2: "de la base de données au store.",
      paragraph:
        "Développeur full-stack à Abidjan — ERP Axelor, applications Flutter et APIs Spring Boot. Quatre ans à livrer des logiciels métier et des apps grand public pour le marché ouest-africain, aux standards internationaux.",
      ctaPrimary: "Me contacter",
      ctaSecondary: "Voir mes projets",
      ctaCv: "Demander mon CV",
      cvSubject: "Demande de CV - Moctar Traore",
      portraitName: "Moctar Traoré",
      portraitTitle: "Développeur Full-Stack — ERP, Mobile & Web",
      portraitLocation: "Abidjan",
    },
    about: {
      eyebrow: "01",
      title: "À propos",
      p1: "J'ai commencé par des stages — Eburtis, Neurones Technologies — avant de rejoindre Prosol via Overnetflow, où je développe et maintiens des modules métier Axelor ERP : modèles de données, vues, services, intégrations et migrations PostgreSQL, utilisés au quotidien par les équipes.",
      p2: "En parallèle, je conçois et publie mes propres produits pour le marché ivoirien et UEMOA : apps Flutter, APIs Spring Boot, paiements Mobile Money, fonctionnement hors-ligne quand le réseau est capricieux. Je sais ce qu'il faut pour amener une idée jusqu'à un produit en ligne qui génère des revenus.",
      values: [
        {
          title: "Rigueur",
          text: "Modèles de données propres, migrations testées, code lisible par le développeur suivant.",
        },
        {
          title: "Autonomie",
          text: "Agile / Scrum, Jira, GitHub & GitLab — je prends un périmètre et je le ramène terminé.",
        },
        {
          title: "De A à Z",
          text: "Interface, API, base de données, déploiement et publication sur les stores — une seule personne, tout le produit.",
        },
      ],
      careerEyebrow: "PARCOURS",
    },
    projects: {
      eyebrow: "02",
      title: "Projets",
      subtitle: "Trois produits conçus, développés et déployés de bout en bout.",
      elismoiTitle: "Elismoi",
      elismoiText: "Application de matching électoral (Flutter) — en ligne",
    },
    skills: {
      eyebrow: "03",
      title: "Compétences",
      methodsLabel: "MÉTHODES",
      methods: ["Agile", "Scrum", "Jira", "GitHub", "GitLab"],
    },
    contact: {
      availability: "Disponible pour des missions freelance ou temps partiel",
      title: "Parlons de votre projet.",
      paragraph:
        "Module ERP, application mobile, API ou produit complet à livrer — dites-moi ce dont vous avez besoin, je réponds sous 24 heures.",
      nameLabel: "Votre nom",
      namePlaceholder: "Konan Yao",
      contactLabel: "Email ou téléphone",
      contactPlaceholder: "vous@entreprise.com",
      projectLabel: "Votre projet",
      projectPlaceholder:
        "Ce que vous voulez construire, le délai, le budget si vous l'avez.",
      submit: "Envoyer le message",
      note: "Ouvre votre application email avec le message prêt.",
      noteSent:
        "Votre application email devrait s'ouvrir — sinon, écrivez à moctartraore000@gmail.com.",
      mailSubjectPrefix: "Demande de projet — ",
      mailReachMe: "Me joindre : ",
    },
    footer: {
      rights: "© 2026 Moctar Traoré — Abidjan, Côte d'Ivoire",
    },
  },

  en: {
    nav: {
      about: "About",
      work: "Work",
      skills: "Skills",
      contact: "Contact",
      cta: "Get in touch",
      themeLabel: "Theme",
      langLabel: "Switch to French",
    },
    hero: {
      availability: "Available — freelance & part-time",
      titleLine1: "I build complete products,",
      titleLine2: "from database to store.",
      paragraph:
        "Full-stack developer in Abidjan — Axelor ERP, Flutter mobile apps and Spring Boot APIs. Four years shipping business software and consumer apps for the West-African market, with international standards.",
      ctaPrimary: "Contact me",
      ctaSecondary: "See my work",
      ctaCv: "Request my CV",
      cvSubject: "CV request - Moctar Traore",
      portraitName: "Moctar Traoré",
      portraitTitle: "Full-Stack Developer — ERP, Mobile & Web",
      portraitLocation: "Abidjan",
    },
    about: {
      eyebrow: "01",
      title: "About",
      p1: "I started in internships — Eburtis, Neurones Technologies — then joined Prosol through Overnetflow, where I develop and maintain Axelor ERP business modules: domain models, views, services, integrations and PostgreSQL migrations for teams that use them every day.",
      p2: "In parallel I design and ship my own products for the Ivorian and UEMOA market: Flutter apps, Spring Boot APIs, Mobile Money payments, offline-first when the network is unreliable. I know what it takes to take an idea to a live, paying product.",
      values: [
        {
          title: "Rigour",
          text: "Clean data models, tested migrations, code that the next developer can read.",
        },
        {
          title: "Autonomy",
          text: "Agile / Scrum, Jira, GitHub & GitLab — I take a scope and bring it back done.",
        },
        {
          title: "End to end",
          text: "UI, API, database, deployment and app-store release — one person, whole product.",
        },
      ],
      careerEyebrow: "CAREER",
    },
    projects: {
      eyebrow: "02",
      title: "Selected work",
      subtitle: "Three products designed, built and deployed end to end.",
      elismoiTitle: "Elismoi",
      elismoiText: "Electoral matching app (Flutter) — live",
    },
    skills: {
      eyebrow: "03",
      title: "Skills",
      methodsLabel: "WAYS OF WORKING",
      methods: ["Agile", "Scrum", "Jira", "GitHub", "GitLab"],
    },
    contact: {
      availability: "Available for freelance or part-time work",
      title: "Let's talk about your project.",
      paragraph:
        "ERP module, mobile app, API or a full product to ship — tell me what you need and I'll answer within 24 hours.",
      nameLabel: "Your name",
      namePlaceholder: "Jane Doe",
      contactLabel: "Email or phone",
      contactPlaceholder: "you@company.com",
      projectLabel: "Your project",
      projectPlaceholder:
        "What you want to build, your timeline, your budget if you have one.",
      submit: "Send the message",
      note: "Opens your email app with the message ready.",
      noteSent:
        "Your email app should be open — if not, write to moctartraore000@gmail.com.",
      mailSubjectPrefix: "Project enquiry — ",
      mailReachMe: "Reach me at: ",
    },
    footer: {
      rights: "© 2026 Moctar Traoré — Abidjan, Côte d'Ivoire",
    },
  },
};

export type Translation = (typeof translations)["fr"];
