import styled from 'styled-components';

export const FormContainer = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || 'white'};
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Arial', sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  margin-bottom: 10px;
`;

interface LabelFormProps {
    textColor?: string
}

export const Label = styled.label<LabelFormProps>`
  margin: 0 10px 5px 0;
  color: ${(props) => props.textColor || 'black'};
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || 'blue'};
  color: ${(props) => (props.backgroundColor ? 'white' : 'black')};
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
