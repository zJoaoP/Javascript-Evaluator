import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  white-space: nowrap;
  text-align: center;
  margin-bottom: 0;
  font-size: 4rem;

  @media screen and (min-width: 768px) {
    font-size: 5.5em;
  }
`;

export const Description = styled.h2`
  white-space: nowrap;
  text-align: center;

  font-size: 1rem;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default {
  Description,
  Wrapper,
  Title,
};
