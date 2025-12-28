# AI Engineering Portfolio - Augusto César

Este repositório contém o código-fonte do meu portfólio profissional, focado em soluções de **Engenharia de Inteligência Artificial**, **Sistemas Inteligentes** e **Arquitetura Cloud**.

O projeto foi construído seguindo princípios de **Clean Architecture** e **Modularização**, garantindo escalabilidade e facilidade de manutenção.

## 🚀 Tecnologias Utilizadas

- **Frontend:** React 19, TypeScript, Tailwind CSS 4.
- **Ícones:** Lucide React.
- **Build Tool:** Vite.
- **Arquitetura:** Context API para Gerenciamento de Estado (Multi-idioma), Componentização Atômica.
- **Deploy:** GitHub Pages.

## 🛠️ Estrutura do Projeto

A arquitetura foi refatorada para separar as preocupações de dados e interface:

- `/src/components`: Componentes visuais reutilizáveis (Cards, Header, Hero).
- `/src/contexts`: Gerenciamento de estado global (idioma PT/EN).
- `/src/data`: "Fonte única de verdade" para todos os textos e dados dos projetos.
- `/src/assets`: Recursos de mídia (imagens e ícones).

## 🌟 Projetos em Destaque

Alguns dos projetos listados no portfólio incluem:
- **API de Extração Inteligente de Notas Fiscais:** Serverless com AWS Lambda e Amazon Textract.
- **Chatbot RAG Jurídico:** Orquestração com LangChain e AWS Bedrock (Amazon Titan).
- **Zaia Agent:** Agente ReAct Fullstack com Gemini 2.0 Flash.
- **DreamSquad AI:** API de agentes utilizando Clean Architecture e Ollama.
- **IaC com Terraform:** Provisionamento modular na Oracle Cloud Infrastructure (OCI).

## ⚙️ Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/augustocsar/portfolio.git
   ```

Instale as dependências:

```bash
npm install
```
Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
📦 Deploy
O deploy é realizado automaticamente via gh-pages. Para publicar alterações:

```bash
npm run deploy
```
Documentação técnica desenvolvida por Augusto César.


