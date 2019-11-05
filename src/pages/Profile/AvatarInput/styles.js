import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;

      &::after {
        content: 'Alterar foto';
        position: absolute;
        top: 160px;
        left: calc(50% - 35px);
        font-size: 12px;
        background: rgba(255, 255, 255, 0.6);
        padding: 1px 3px;
        border-radius: 6px;
        color: rgba(0, 0, 0, 0.4);
      }
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
