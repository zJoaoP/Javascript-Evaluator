/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import React from 'react';

import {
  CustomCard,
  Description,
  CodeTextArea,
  SubmitButton,
  SubmitWrapper,
  ErrorDescription,
  EvaluationResult,
} from 'components/ProblemCard/style';

import ExpansibleContainer from 'components/ExpansibleContainer/ExpansibleContainer';
import CaseViewer from 'components/CaseViewer/CaseViewer';

import evaluate from 'helpers/evaluation';

const STATUS = {
  TO_EVALUATE: <EvaluationResult color="#FFD700">A avaliar..</EvaluationResult>,
  SUCCESS: <EvaluationResult color="#00FF00">Sucesso!</EvaluationResult>,
  FAILURE: <EvaluationResult color="#FF0000">Fracasso!</EvaluationResult>,
};

export default function ProblemCard({ name, description, inputs, outputs }) {
  const [status, setStatus] = React.useState(STATUS.TO_EVALUATE);
  const [error, setError] = React.useState(undefined);
  const [results, setResults] = React.useState([]);
  const [code, setCode] = React.useState('');

  function handleSubmission() {
    const currentResults = [];
    setError(undefined);

    const result = inputs.filter((input, i) => {
      const response = evaluate(code, JSON.parse(JSON.stringify(input)));
      if (typeof response !== 'string') {
        currentResults.push(response.toString());
        setError(response);
        return false;
      }

      currentResults.push(response);
      return response === outputs[i];
    });

    setStatus(result.length < outputs.length ? STATUS.FAILURE : STATUS.SUCCESS);
    setResults(currentResults);
  }

  function handleCodeChange(e) {
    setCode(e.target.value);
  }

  function handleCodeKeyDown(e) {
    if (e.keyCode === 9) {
      document.execCommand('insertHTML', false, '&#009');
      e.preventDefault();
    }
    if (e.ctrlKey && e.code === 'Enter') {
      handleSubmission();
    }
  }

  return (
    <CustomCard title={<h1>{name}</h1>}>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Description>
      <CodeTextArea
        rows={8}
        onChange={handleCodeChange}
        onKeyDown={handleCodeKeyDown}
        spellCheck="false"
      />
      {error && (
        <ErrorDescription color="#FF0000">{error.toString()}</ErrorDescription>
      )}
      {results.length === outputs.length && (
        <ExpansibleContainer
          title="Resultados"
          content={outputs.map((out, i) => (
            <CaseViewer
              key={`${inputs[i]}_${out}`}
              input={inputs[i]}
              output={out}
              results={results[i]}
            />
          ))}
        />
      )}
      <SubmitWrapper>
        {status}
        <SubmitButton onClick={handleSubmission}>Submeter</SubmitButton>
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
