import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const DialogWidgetWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  position: fixed;
  bottom: 20px;
  right: 20px;
  animation: ${rotate} linear infinite 3s;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DialogContainer = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || 'white'};
  padding: 20px 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 3px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const PromoCodeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PromoCodeInput = styled.input`
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;
