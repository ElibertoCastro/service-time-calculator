# Calculadora de Tempo de Serviço

![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4+-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-16a34a)

Aplicação web desenvolvida para calcular **tempo de serviço** a partir de **múltiplos intervalos de datas**, exibindo tanto o total individual de cada período quanto o total consolidado de todos os intervalos informados.

## Acesse o projeto

- **Deploy:** https://service-time-calculator.vercel.app/
- **Repositório:** https://github.com/elibertocastro/service-time-calculator

## Motivação

Este projeto foi criado para ajudar pessoas que precisavam encontrar uma ferramenta web capaz de:

- calcular períodos com base em intervalos de datas;
- exibir o total individual de cada intervalo;
- apresentar o total geral de todos os intervalos informados.

A proposta foi desenvolver uma solução simples, objetiva e acessível, com foco em praticidade, clareza visual e boa experiência de uso.

## Funcionalidades

- Adição de múltiplos intervalos de datas
- Remoção do último intervalo adicionado
- Cálculo automático do total de dias por intervalo
- Exibição do resultado individual de cada período em:
  - anos
  - meses
  - dias
- Exibição do resultado total consolidado de todos os intervalos
- Exibição do total geral de dias computados
- Interface responsiva
- Visual sóbrio e profissional, com identidade inspirada em tons institucionais

## Regras de cálculo

O projeto considera as seguintes regras:

- A contagem do período é **inclusiva**
  - quando a data inicial e a data final são iguais, o resultado é **1 dia**
- Para conversão do total de dias:
  - **1 ano = 365 dias**
  - **1 mês = 30 dias**

> **Observação:** o app considera anos de 365 dias e meses de 30 dias para fins de conversão do total de dias.

## Tecnologias utilizadas

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vite**

## Layout e proposta visual

A interface foi pensada para transmitir:

- sobriedade;
- legibilidade;
- simplicidade de uso;
- aparência institucional e profissional.

A paleta visual foi ajustada para tons mais neutros e verdes, buscando uma identidade mais alinhada ao contexto institucional do projeto.

## Estrutura do projeto

```bash
src/
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── InputDate.tsx
│   ├── IntervalComp.tsx
│   └── TotalResult.tsx
├── utils/
│   └── dateUtils.ts
├── App.tsx
└── main.tsx

```

## Como usar

1. Clique em **Adicionar** para inserir um novo intervalo.
2. Informe a **data de início** e a **data de fim**.
3. O sistema calculará automaticamente:
   - o total de dias do intervalo;
   - a conversão em anos, meses e dias.
4. Adicione quantos períodos desejar.
5. Consulte o bloco de **resultado total** para visualizar:
   - o total consolidado em anos, meses e dias;
   - o total geral de dias computados.

## Melhorias futuras

- validação para impedir data final anterior à data inicial;
- remoção de intervalos específicos;
- edição individual de intervalos;
- persistência dos dados no navegador;
- exportação dos resultados;
- suporte a diferentes regras de contagem de tempo;
- possibilidade de tema escuro.

## Autor

Desenvolvido por **Eliberto Castro**.

- **LinkedIn:** [seu-linkedin](https://www.linkedin.com/in/elibertocastro)
