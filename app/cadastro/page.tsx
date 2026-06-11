import { Metadata } from "next";
import { CadastroClient } from "./CadastroClient";

export const metadata: Metadata = {
  title: "Cadastro de Membra — Mulher Tech Sim Senhor",
  description:
    "Faça seu cadastro gratuito e entre para a comunidade de +1.000 mulheres na tecnologia em João Pessoa.",
};

export default function CadastroPage() {
  return <CadastroClient />;
}
