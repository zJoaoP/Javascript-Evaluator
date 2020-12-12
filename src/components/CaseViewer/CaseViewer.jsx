import PropTypes from 'prop-types';
import React from 'react';

import {
  ViewerWrapper,
  CaseCard,
  CaseTypography,
} from 'components/CaseViewer/style';

export default function CaseViewer({ input, output, results }) {
  return (
    <ViewerWrapper>
      <CaseCard title="Entrada">
        <CaseTypography>
          {input.reduce((acc, curr) => `${acc}${curr}\n`, '')}
        </CaseTypography>
      </CaseCard>
      <CaseCard title="Saída Esperada">{output}</CaseCard>
      <CaseCard title="Saída Obtida">{results}</CaseCard>
    </ViewerWrapper>
  );
}

CaseViewer.propTypes = {
  input: PropTypes.arrayOf(PropTypes.string).isRequired,
  output: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
};
