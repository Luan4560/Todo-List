import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 5px;
  padding: 16px;
  flex: 1;
  color: #232323;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    border: 0;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Poppins';
  }
`;