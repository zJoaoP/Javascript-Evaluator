import styled from 'styled-components';

import { Card, Input, Typography, Button } from 'antd';

const { TextArea } = Input;

export const CustomCard = styled(Card)`
  width: 50%;
  margin-top: 8px;
`;

export const Description = styled(Typography)`
  margin-bottom: 24px;
`;

export const EvaluationResult = styled(Typography)`
  color: ${(props) => props.color};
  text-align: center;
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
  CustomTextArea: CodeTextArea,
};
