import PropTypes from 'prop-types';
import React from 'react';

import ProblemCard from 'components/ProblemCard/ProblemCard';
import { Wrapper } from 'components/ProblemSection/style';

export default function ProblemSection({ problems }) {
  return (
    <Wrapper>
      {problems.map((problem) => (
        <ProblemCard
          key={problem.name}
          name={problem.name}
          description={problem.description}
          inputs={problem.inputs}
          outputs={problem.outputs}
        />
      ))}
    </Wrapper>
  );
}

ProblemSection.propTypes = {
  problems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
