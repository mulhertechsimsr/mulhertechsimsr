export type Member = {
  id: string;
  nome: string;
  apelido: string;
  email: string;
  whatsapp?: string;
  cidade?: string;
  faixaEtaria?: string;
  momento?: string;
  area?: string;
  empresa?: string;
  redes?: string;
  comoConheceu?: string;
  expectativas?: string;
  anoIngresso: string;
  numeroCarteirinha?: string;
  foto?: string;
  cpf?: string;
  dataNascimento?: string;
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
