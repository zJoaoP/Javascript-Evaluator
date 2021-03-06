/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import React from 'react';

import {
  CustomCard,
  Description,
  CodeWrapper,
  SubmitButton,
  SubmitWrapper,
  ErrorDescription,
  EvaluationResult,
} from 'components/ProblemCard/style';

import ExpansibleContainer from 'components/ExpansibleContainer/ExpansibleContainer';
import CaseViewer from 'components/CaseViewer/CaseViewer';

import evaluate from 'helpers/evaluation';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const STATUS = {
  TO_EVALUATE: <EvaluationResult color="#FFD700">A avaliar..</EvaluationResult>,
  SUCCESS: <EvaluationResult color="#00b300">Sucesso!</EvaluationResult>,
  FAILURE: <EvaluationResult color="#FF0000">Fracasso!</EvaluationResult>,
};

export default function ProblemCard({ name, description, contexts, outputs }) {
  const [status, setStatus] = React.useState(STATUS.TO_EVALUATE);
  const [error, setError] = React.useState(undefined);
  const [results, setResults] = React.useState([]);
  const [code, setCode] = React.useState('');

  function handleSubmission() {
    const currentResults = [];
    setError(undefined);

    const result = contexts.filter((input, i) => {
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
    setCode(e.getValue());
  }

  return (
    <CustomCard title={<h1>{name}</h1>}>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Description>
      <CodeWrapper>
        <CodeMirror
          onChange={handleCodeChange}
          height="250px"
          options={{
            viewportMargin: 5,
            theme: 'monokai',
            keyMap: 'sublime',
            mode: 'js',
            scrollbarStyle: 'null',
          }}
        />
      </CodeWrapper>
      {error && (
        <ErrorDescription color="#FF0000">{error.toString()}</ErrorDescription>
      )}
      {results.length === outputs.length && (
        <ExpansibleContainer
          title="Resultados"
          content={outputs.map((out, i) => (
            <CaseViewer
              key={`${contexts[i]}_${out}`}
              context={contexts[i]}
              output={out}
              result={results[i]}
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
  contexts: PropTypes.arrayOf(PropTypes.object).isRequired,
  outputs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
