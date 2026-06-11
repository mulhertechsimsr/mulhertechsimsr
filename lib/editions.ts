export type Edition = {
  n: string;
  year: string;
  theme: string;
  color: string;
  current?: true;
};

export const EDITIONS: Edition[] = [
  { n: "11ª", year: "2026", theme: "Dados",           color: "var(--orange-500)", current: true },
  { n: "10ª", year: "2025", theme: "Caminhos",        color: "var(--teal-600)"                  },
  { n: "9ª",  year: "2024", theme: "Ecossistemas",    color: "var(--pink-500)"                  },
  { n: "8ª",  year: "2023", theme: "Arte e Tecnologia",color: "var(--yellow-500)"               },
  { n: "7ª",  year: "2022", theme: "Reconexão",       color: "var(--coral-500)"                 },
  { n: "6ª",  year: "2021", theme: "Resiliência",     color: "var(--teal-600)"                  },
  { n: "5ª",  year: "2020", theme: "—",               color: "var(--ink-300)"                   },
  { n: "4ª",  year: "2019", theme: "—",               color: "var(--ink-300)"                   },
  { n: "3ª",  year: "2018", theme: "—",               color: "var(--ink-300)"                   },
  { n: "2ª",  year: "2017", theme: "—",               color: "var(--ink-300)"                   },
  { n: "1ª",  year: "2016", theme: "—",               color: "var(--ink-300)"                   },
];
