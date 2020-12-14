import React from 'react';

import ProblemCard from 'components/ProblemCard/ProblemCard';

import api from 'service/problems';

export default function Home() {
  const [problems, setProblems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    api.fetchProblems().then((response) => setProblems(response));
    setLoading(false);
    return () => {};
  }, [problems]);

  api.fetchProblems();

  return (
    <div>
      <h1 style={{ fontSize: '75px', marginBottom: '0px' }}>
        Exercícios de Javascript
      </h1>
      <h2 style={{ marginBottom: '30px' }}>
        https://github.com/zJoaoP/Javascript-Evaluator
      </h2>
      {!loading &&
        problems.map((problem) => (
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
