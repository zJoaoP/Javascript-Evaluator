import React from 'react';

import ProblemCard from 'components/ProblemCard/ProblemCard';
import Header from 'components/Header/Header';

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
    <div id="home">
      <Header />
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
