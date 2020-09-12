import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #ff9000;
  border-radius: 10px;
  border: 0;
  width: 100%;
  height: 56px;
  font-weight: 500;
  margin-top: 24px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
