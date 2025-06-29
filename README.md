# Descubra sua Idade

![Banner One Piece](static/banner.png)

Este projeto usa a API gratuita Agify para estimar a idade de uma pessoa pelo nome, com tema inspirado no anime One Piece.

---

## 🚀 Funcionalidades

- 🔍 Input com **debounce de 800ms**: evita requisições desnecessárias.
- 📡 Consulta automática à API [agify.io](https://agify.io/).
- 🔗 A URL é atualizada com o nome pesquisado (ex: `/?name=Luffy`), permitindo compartilhamento direto.
- ⚡ Resultado exibido automaticamente conforme o nome é digitado.
- 💄 Interface com **modo padrão** e **modo temático pirata**:
  - Ativável por um botão.
  - Persistente via `localStorage`.
  - Com fontes e cores inspiradas no universo de One Piece.

---

## 🧱 Tecnologias e boas práticas

- **SvelteKit 5** (sem TypeScript).
- Utilização da função `load()` para busca da API.
- Separação clara de responsabilidades:
  - `lib/utils/debounce.js`: lógica de debounce.
  - `lib/api/agify.js`: comunicação com a API.
  - `lib/components/PirateInput.svelte`: input com lógica isolada.
- Sem dependências externas — CSS puro, sem frameworks.

---

## 🎨 Estilização

- Fonte personalizada **"Pirata One"** (Google Fonts).
- Cores baseadas em mapas do tesouro: dourado, marrom escuro e preto.
- Ícones e frases customizadas para a temática pirata.
- Alternância de estilos com classe CSS condicional e temas com `localStorage`.

---

## 📦 Como rodar o projeto

```bash
npm install
npm run dev