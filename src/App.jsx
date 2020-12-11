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
];

function App() {
  return (
    <div
      id="app"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GlobalStyle />
      <h1 style={{ fontSize: '75px' }}>Aula 2 - Javascript</h1>
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
