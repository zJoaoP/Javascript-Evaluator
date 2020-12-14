import PropTypes from 'prop-types';
import React from 'react';

import {
  ViewerWrapper,
  CaseCard,
  CaseTypography,
} from 'components/CaseViewer/style';

export default function CaseViewer({ context, output, result }) {
  return (
    <ViewerWrapper>
      <CaseCard title="Entrada">
        {Object.keys(context).map((k) => (
          <CaseTypography key={k}>{`${k}: ${context[k]}`}</CaseTypography>
        ))}
      </CaseCard>
      <CaseCard title="Saída Esperada">{output}</CaseCard>
      <CaseCard title="Saída Obtida">{result}</CaseCard>
    </ViewerWrapper>
  );
}

CaseViewer.propTypes = {
  context: PropTypes.objectOf(PropTypes.any).isRequired,
  output: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
