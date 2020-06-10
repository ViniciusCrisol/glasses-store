import React from 'react';

import { Container } from './styles';

import logo from '../../assets/logo.png';

import GlassesContainer from '../../components/GlassesContainer';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt='chilli beans' />
        <main>
          <GlassesContainer />
        </main>
      </div>
    </Container>
  );
};

export default Home;
