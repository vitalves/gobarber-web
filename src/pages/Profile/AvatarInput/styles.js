import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;

      /*
      &::after {
        content: 'Editar foto';
        position: absolute;
        font-size: 12px;
        background: rgba(111, 80, 173, 0.8);
        padding: 1px 3px;
        border-radius: 6px;
        color: #eee;
      }
      */
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
