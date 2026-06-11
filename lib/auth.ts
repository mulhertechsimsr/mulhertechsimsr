export type Member = {
  id: string;
  nome: string;
  apelido: string;
  email: string;
  whatsapp?: string;
  cpf?: string;
  dataNascimento?: string;
  cidade?: string;
  estado?: string;
  faixaEtaria?: string;
  // diversidade
  racaCor?: string;
  identidadeGenero?: string;
  pcd?: string;
  // formação
  escolaridade?: string;
  areaFormacao?: string;
  // carreira
  momento?: string;
  anosExperiencia?: string;
  area?: string;
  areaAtuacao?: string;
  // situação profissional
  situacaoProfissional?: string;
  empresa?: string;
  modalidade?: string;
  faixaSalarial?: string;
  // comunidade
  redes?: string;
  comoConheceu?: string;
  participouEdicao?: string;
  mentoria?: string;
  expectativas?: string;
  // sistema
  anoIngresso: string;
  numeroCarteirinha?: string;
  foto?: string;
};

export type AuthState = {
  token: string;
  member: Member;
};

const AUTH_KEY = "mtss_auth";

export function setAuth(state: AuthState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_KEY, JSON.stringify(state));
}

export function getAuth(): AuthState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? (JSON.parse(raw) as AuthState) : null;
  } catch {
    return null;
  }
}

export function updateMember(member: Member): void {
  const auth = getAuth();
  if (!auth) return;
  setAuth({ ...auth, member });
}

export function clearAuth(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_KEY);
}
