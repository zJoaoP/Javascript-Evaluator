import styled from 'styled-components';

import { Card, Input, Typography, Button } from 'antd';

const { TextArea } = Input;

export const CustomCard = styled(Card)`
  max-width: 900px;
  width: 90%;

  margin-top: 8px;
`;

export const Description = styled(Typography)`
  margin-bottom: 24px;
`;

export const ErrorDescription = styled(Typography)`
  color: ${(props) => props.color};
`;

export const CodeWrapper = styled.div`
  margin-bottom: 16px;
`;

export const EvaluationResult = styled(Typography)`
  color: ${(props) => props.color};

  text-align: center;
  font-weight: bold;
  width: 50%;
`;

export const CodeTextArea = styled(TextArea)``;

export const SubmitWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-grow: 1;

  margin-top: 16px;
`;
export const SubmitButton = styled(Button)`
  width: 50%;
`;

export default {
  CustomCard,
};
