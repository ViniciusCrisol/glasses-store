import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInContainer = keyframes`
  0% {
    opacity: 0.6;
    transform : translateY(-20px)
  }
  100% {
    opacity: 1;
    transform : translateY(0px)
  }
`;

const fadeInImage = keyframes`
  0% {
    opacity: 0.6;
    transform : translateX(30px)
  }
  100% {
    opacity: 1;
    transform : translateX(0px)
  }
`;

export const Container = styled(Link)`
  background-color: white;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);

  text-decoration: none;

  padding: 32px;
  border-radius: 32px;
  margin-bottom: 32px;

  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 200ms;
  animation: 700ms ${fadeInContainer} ease-out;

  img {
    width: 260px;
    animation: 700ms ${fadeInImage};
  }

  footer {
    flex: 1;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: 600;
      color: #282828;
    }

    span {
      color: #666;
    }
  }

  &:hover {
    transform: scale(1.03);
  }
`;
