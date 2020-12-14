import PropTypes from 'prop-types';
import React from 'react';

import { Row, Col } from 'antd';

import {
  CaseCard,
  CaseTypography,
} from 'components/CaseViewer/style';

export default function CaseViewer({ context, output, result }) {
  return (
    <Row>
      <Col xs={24} md={8}>
        <CaseCard title="Entrada">
          {Object.keys(context).map((k) => (
            <CaseTypography key={k}>{`${k}: ${context[k]}`}</CaseTypography>
          ))}
        </CaseCard>
      </Col>
      <Col xs={24} md={8}>
        <CaseCard title="Saída Esperada">{output}</CaseCard>
      </Col>
      <Col xs={24} md={8}>
        <CaseCard title="Saída Obtida">{result}</CaseCard>
      </Col>
    </Row>
  );
}

CaseViewer.propTypes = {
  context: PropTypes.objectOf(PropTypes.any).isRequired,
  output: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
