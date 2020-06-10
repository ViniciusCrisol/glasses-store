import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/PageContainer';

import bamboo from '../../assets/bamboo.webp';

const GlaassesPage: React.FC = () => {
  return (
    <Container>
      <section>
        <div>
          <img src={bamboo} alt='' />
        </div>
      </section>
      <div>
        <header>
          <Link to='/'>Voltar</Link>
        </header>
        <main>
          <h1>Chili Beans Bamboo</h1>
          <p>
            Basicão mas cheio de atitude! Este Óculos de Sol Masculino vem com
            uma mistura de materiais que só a Chilli sabe compor. Aprimoramos os
            acabamentos e inserimos muita natividade encontrada na madeira e
            bambu em uma fusão natural art.
          </p>
          <section>
            <button>Comprar</button>
            <button>Favoritar</button>
          </section>
        </main>
      </div>
    </Container>
  );
};

export default GlaassesPage;
