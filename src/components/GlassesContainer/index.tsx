import React from 'react';

import { Container } from './styles';

import bamboo from '../../assets/bamboo.webp';
import essential from '../../assets/essential.webp';
import square from '../../assets/square.webp';

const glassContainer: React.FC = () => {
  return (
    <>
      <Container to='/glasses-1'>
        <img src={bamboo} alt='Chilli Beans Bamboo' />
        <footer>
          <p>Chilli Beans Bamboo</p>
          <span>R$ 94,98</span>
        </footer>
      </Container>
      <Container to='/glasses-2'>
        <img src={essential} alt='Chilli Beans Bamboo' />
        <footer>
          <p>Chilli Beans Essential</p>
          <span>R$ 104,98</span>
        </footer>
      </Container>
      <Container to='/glasses-3'>
        <img src={square} alt='Chilli Beans Square' />
        <footer>
          <p>Chilli Beans Square</p>
          <span>R$ 99,18</span>
        </footer>
      </Container>
    </>
  );
};

export default glassContainer;
