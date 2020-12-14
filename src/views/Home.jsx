import React from 'react';

import ProblemSection from 'components/ProblemSection/ProblemSection';
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
      {!loading && <ProblemSection problems={problems} />}
    </div>
  );
}
