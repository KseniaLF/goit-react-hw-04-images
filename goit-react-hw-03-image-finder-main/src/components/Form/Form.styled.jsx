import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 10px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  background-color: #384dc3af;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  form {
    display: flex;
    align-items: center;

    padding: 3px;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;

    button {
      display: flex;
      align-items: center;

      border: 0;
      padding: 0 10px;
      cursor: pointer;
      background-color: inherit;
      text-align: center;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    input {
      padding: 3px 10px;
      display: inline-block;
      width: 100%;
      font: inherit;
      font-size: 20px;
      border: none;
      outline: none;
      border-radius: inherit;

      ::placeholder {
        font: inherit;
        font-size: 18px;
      }
    }
  }
`;
