import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  min-height: 100%;

  margin: 0 auto;
  padding: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    align-items: center;

    img {
      width: 200px;
    }

    > main {
      flex: 1;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  @media (max-width: 1200px) {
    align-items: center;

    main,
    div {
      flex-direction: column;
      justify-content: center;

      img {
        margin-bottom: 32px;
      }
    }
  }
`;
