import styled from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const InputElement = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
  }

  &[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
  }
`;