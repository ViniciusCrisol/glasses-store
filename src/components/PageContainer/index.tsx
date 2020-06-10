import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const fadeInContainer = keyframes`
  0% {
    opacity: 0.6;
    transform : translateY(10px)
  }
  100% {
    opacity: 1;
    transform : translateY(0px)
  }
`;

const fadeText = keyframes`
  0% {
    opacity: 0.6;
    transform : translateX(-30px)
  }
  100% {
    opacity: 1;
    transform : translateX(0px)
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;

  > section {
    height: 100%;
    width: 40%;

    padding: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      width: 60%;
      min-width: 300px;

      padding: 32px;
      border-radius: 32px;
      background-color: white;
      box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);

      animation: 700ms ${fadeInContainer} ease-out;

      img {
        width: 100%;
      }
    }
  }

  > div {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    animation: 700ms ${fadeText} ease-out;

    header {
      margin-bottom: 20px;

      a {
        color: #282828;
        text-transform: uppercase;
        font-weight: 500;

        border-bottom: 2px solid #ed3333;
      }
    }

    p {
      margin-top: 20px;
      max-width: 500px;
    }

    section {
      margin-top: 20px;

      display: flex;
      align-items: center;

      button {
        background-color: #ed3333;
        border-radius: 6px;
        box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
        border: 0;

        height: 40px;
        width: 120px;

        color: white;
        text-transform: uppercase;

        transition: 200ms;

        & + button {
          margin-left: 20px;
          border: 2px solid #ed3333;
          background-color: #eee;

          color: #ed3333;

          &:hover {
            background-color: ${darken(0.04, '#eee')};
          }
        }

        &:hover {
          background-color: ${darken(0.04, '#ed3333')};

          transform: translateY(-5px);
        }
      }
    }
  }

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    padding: 32px;

    div {
      text-align: center;

      section {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Container;
