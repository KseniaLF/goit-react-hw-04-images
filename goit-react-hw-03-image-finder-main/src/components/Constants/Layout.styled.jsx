import styled from 'styled-components';

export const Layout = styled.div`
  background-color: rgb(231, 236, 242);
  padding: 16px;
  font-size: 30px;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  color: #010101;
  
  input {
    width: 100%;
    /* Убираем влияние padding и border на конечную ширину input */
    box-sizing: border-box;
    /* Обнуляем margin */
    margin: 0;
  }
`;