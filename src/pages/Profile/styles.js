import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    > p {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      color: #444;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      margin: 0 0 10px;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &[type='checkbox'] {
        width: 15px;
        height: 15px;
        margin-left: 5px;
      }
    }

    hr {
      border: 0;
      height: 1px;
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      margin: 5px 0 10px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: -10px 0 10px;
      font-size: 12px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 15px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f64c75')};
    }
  }
`;

export const Teste = styled.div`
  display: ${props => (props.isHidden ? 'none;' : 'flex')};
  flex-direction: column;
`;
