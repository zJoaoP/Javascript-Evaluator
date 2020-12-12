import React from 'react';

import ProblemCard from 'components/ProblemCard/ProblemCard';
import GlobalStyle from 'GlobalStyle';

import 'antd/dist/antd.css';

const problems = [
  {
    name: 'Hello, World!',
    description:
      'Escreva "Hello, World!" no terminal. Lembre-se de usar o <strong>console.log(str)</strong> para isso.\n\nÉ de graça :)',
    inputs: [['Nothing']],
    outputs: ['Hello, World!\n'],
  },
  {
    name: 'Readline',
    description:
      'Leia uma determinada sentença utilizando o <strong>readline()</strong> e, em seguida, a escreva no console.',
    inputs: [['Hello, World!'], ['ReadlineTest']],
    outputs: ['Hello, World!\n', 'ReadlineTest\n'],
  },
  {
    name: 'O maior dos números',
    description:
      'Leia uma sequência contendo 2 valores e, em seguida, imprima o maior deles.',
    inputs: [['2 10'], ['0 0'], ['-2 -1']],
    outputs: ['10\n', '0\n', '-1\n'],
  },
  {
    name: 'Na faixa!',
    description:
      'Leia uma sequência contendo 10 valores e, em seguida, imprima apenas os valores entre [10, 20].',
    inputs: [['2 4 6 8 10 12 14 16 18 19'], ['1 2 3 4 5']],
    outputs: ['10 12 14 16 18 19\n', '\n'],
  },
  {
    name: 'Produto de Vetores',
    description:
      'Leia duas sequências de mesmo tamanho e, em seguida, imprima o resultado do produto das sequências. (element-wise)',
    inputs: [
      ['1', '2'],
      ['1 2', '3 4'],
      ['0 1 2', '3 4 5'],
    ],
    outputs: ['2\n', '3 8\n', '0 4 10\n'],
  },
  {
    name: 'Pares e Ímpares',
    description:
      'Leia duas sequências A e B de mesmo tamanho e em seguida, crie uma nova sequência contendo os valores de A nas posições pares e os valores de B nas posições ímpares.',
    inputs: [
      ['1', '2'],
      ['1 2', '3 4'],
      ['0 1 2', '3 4 5'],
    ],
    outputs: ['1 2\n', '1 3 2 4\n', '0 3 1 4 2 5\n'],
  },
];

function App() {
  return (
    <div
      id="app"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <GlobalStyle />
      <h1 style={{ fontSize: '75px', marginBottom: '0px' }}>
        Exercícios de Javascript
      </h1>
      <h2 style={{ marginBottom: '30px' }}>
        https://github.com/zJoaoP/Javascript-Evaluator
      </h2>
      {problems.map((problem) => (
        <ProblemCard
          key={problem.name}
          name={problem.name}
          description={problem.description}
          inputs={problem.inputs}
          outputs={problem.outputs}
        />
      ))}
    </div>
  );
}

export default App;
