import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Sobre } from "@/components/sections/Sobre";
import { Historia } from "@/components/sections/Historia";
import { Edicoes } from "@/components/sections/Edicoes";
import { Equipe } from "@/components/sections/Equipe";
import { Participante } from "@/components/sections/Participante";
import { Contato } from "@/components/sections/Contato";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Sobre />
        <Historia />
        <Edicoes />
        <Equipe />
        <Participante />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
