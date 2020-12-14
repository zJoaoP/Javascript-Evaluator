import styled from 'styled-components';

import { Card, Typography } from 'antd';

export const CaseCard = styled(Card)`
  flex-grow: 1;
  height: 100%;
`;

export const CaseTypography = styled(Typography)`
  white-space: pre-wrap;
`;

export default {
  CaseTypography,
  CaseCard,
};
