export type Edition = {
  n: string;
  year: string;
  theme: string | null;
  color: string;
  current?: true;
};

export const EDITIONS: Edition[] = [
  { n: "11ª", year: "2026", theme: "Dados",           color: "var(--orange-500)", current: true },
  { n: "10ª", year: "2025", theme: "10 anos",        color: "var(--teal-600)"                  },
  { n: "9ª",  year: "2024", theme: "Inteligência Artificial",    color: "var(--pink-500)"                  },
  { n: "8ª",  year: "2023", theme: "Arte e Tecnologia",color: "var(--yellow-500)"               },
  { n: "7ª",  year: "2022.2", theme: "Games World",       color: "var(--coral-500)"                 },
  { n: "6ª",  year: "2022.1", theme: "Viagem ao Espaço",     color: "var(--teal-600)"                  },
  { n: "5ª",  year: "2020", theme: null,               color: "var(--ink-300)"                   },
  { n: "4ª",  year: "2019", theme: null,               color: "var(--ink-300)"                   },
  { n: "3ª",  year: "2018", theme: null,               color: "var(--ink-300)"                   },
  { n: "2ª",  year: "2017", theme: null,               color: "var(--ink-300)"                   },
  { n: "1ª",  year: "2016", theme: null,               color: "var(--ink-300)"                   },
];
