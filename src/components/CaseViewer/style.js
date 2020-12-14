import styled from 'styled-components';

import { Card, Typography } from 'antd';

export const ViewerWrapper = styled.div`
  flex-direction: line;
  display: flex;
  flex-basis: 0;
`;

export const CaseCard = styled(Card)`
  max-width: 100%;
  flex-basis: 33%;
  flex-grow: 0;
`;

export const CaseTypography = styled(Typography)`
  white-space: pre-wrap;
`;

export default {
  CaseTypography,
  ViewerWrapper,
  CaseCard,
};
