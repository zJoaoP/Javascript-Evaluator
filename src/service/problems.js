const problems = [
  {
    name: 'Hello, World!',
    description:
      'Escreva "Hello, World!" no terminal. Lembre-se de usar o <strong>console.log(str)</strong> para isso.\n\nÉ de graça :)',
    contexts: [{}],
    outputs: ['Hello, World!\n'],
  },
  {
    name: 'Soma simples',
    description:
      'Escreva um script capaz de imprimir a soma de duas variáveis <strong>A</strong> e <strong>B</strong> no console.',
    contexts: [
      { A: 2, B: 3 },
      { A: 0, B: 0 },
    ],
    outputs: ['5\n', '0\n'],
  },
  {
    name: 'Reverso',
    description:
      'Escreva um script capaz de inverter a ordem de um vetor chamado <strong>V</strong>.\nConsidere que ele já foi devidamente inicializado.',
    contexts: [{ V: [1, 2, 3] }],
    outputs: ['3,2,1\n'],
  },
  {
    name: 'Produto Escalar',
    description:
      'Escreva um script capaz de imprimir o produto escalar de dois vetores <strong>U</strong> e <strong>V</strong>.',
    contexts: [
      { U: [1, 2, 3], V: [4, 5, 6] },
      { U: [1, 0], V: [3, 4] },
    ],
    outputs: ['32\n', '3\n'],
  },
];

const api = {
  fetchProblems: () =>
    new Promise((resolve) => setTimeout(() => resolve(problems), 1000)),
};

export default api;
