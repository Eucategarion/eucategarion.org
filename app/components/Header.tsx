import styled from '@emotion/styled';
import { formatImperial } from '../utils/calendar';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  background-color: #5a0f1b;
  color: #f4f1e8;

  h1 {
    color: #c6a75e;
  }
`;

const date = formatImperial();

const Header = () => (
  <HeaderContainer>
    <img
      src="/escudo.png"
      alt="Escudo del Reino Soberano de Eucategarion"
      className="w-40 mr-4"
    />
    <div>
      <h1 className="text-3xl font-bold">
        Sacratísimo Reino Soberano de Eucategarion
      </h1>
      <p className="text-lg">
        Trono y Sede Metropolitana de las Provincias Digitales y Custodio del
        Orden
      </p>
      <p className="text-m">{date}</p>
    </div>
  </HeaderContainer>
);

export default Header;
