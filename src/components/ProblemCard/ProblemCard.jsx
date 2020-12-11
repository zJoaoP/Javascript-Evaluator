import PropTypes from 'prop-types';
import React from 'react';

import {
  CustomCard,
  Description,
  CodeTextArea,
  SubmitButton,
  SubmitWrapper,
  EvaluationResult,
} from 'components/ProblemCard/style';

import evaluate from 'helpers/evaluation';

const STATUS = {
  TO_EVALUATE: (
    <EvaluationResult color="#FFD700">
      A avaliar..
    </EvaluationResult>
  ),
  SUCCESS: (
    <EvaluationResult color="#00FF00">
      Sucesso!
    </EvaluationResult>
  ),
  FAILURE: (
    <EvaluationResult color="#FF0000">
      Fracasso!
    </EvaluationResult>
  ),
};

export default function ProblemCard({ name, description, inputs, outputs }) {
  const [status, setStatus] = React.useState(STATUS.TO_EVALUATE);
  const [code, setCode] = React.useState('');

  function handleSubmitClick() {
    const result = inputs.filter((input, i) => {
      const r = evaluate(code, JSON.parse(JSON.stringify(input)), outputs[i]);
      return r;
    });
    setStatus(result.length < outputs.length ? STATUS.FAILURE : STATUS.SUCCESS);
  }

  function handleCodeChange(e) {
    setCode(e.target.value);
  }

  return (
    <CustomCard title={<h1>{name}</h1>}>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Description>
      <CodeTextArea rows={8} onChange={handleCodeChange} />
      <SubmitWrapper>
        {status}
        <SubmitButton onClick={handleSubmitClick}>Submeter</SubmitButton>
      </SubmitWrapper>
    </CustomCard>
  );
}

ProblemCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.array).isRequired,
  outputs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
