import styled from '@emotion/styled';
import Item from './Item';
import { getCurrentImperialYear } from '../utils/calendar';

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 3rem 2rem;
  background-color: #0b0b0d;
  color: #f4f1e8;

  p.italic {
    font-family: 'Cardo', serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: italic;
  }

  p {
    margin-bottom: 1rem;
  }

  h2,
  h3 {
    color: #c6a75e;
    margin-bottom: 0.5rem;
  }

  img {
    width: 200px;
    max-width: 100%;
    height: auto;
    align-self: center;
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0.5rem 1.5rem;
  border-right: 3px solid #5a0f1b;

  li {
    padding: 0.25rem 0;
  }

  li:hover {
    color: #d8bc7a;
  }

  &:last-child {
    border-right: none;
  }
`;

const { imperialYear } = getCurrentImperialYear();

const Footer = () => (
  <FooterContainer>
    <MenuContainer>
      <img
        src="/escudo-white.png"
        alt="Escudo del Reino Soberano de Eucategarion"
      />
      <p className="italic text-center">
        “El Trono de Eucategarion es la sede visible del Orden eterno.”
        <br />— Liber Ordinis Eucategarionis
      </p>
    </MenuContainer>
    <MenuContainer>
      <h2 className="text-lg font-bold">El Trono</h2>
      <Item href="/autocrator">Alexion I</Item>
      <Item href="/casa-eucategariana">Casa Eucategariana</Item>
      <h2 className="text-lg font-bold mt-4">El Reino</h2>
      <Item href="/metropolis">La metrópolis</Item>
      <Item href="/provincias">Provincias Mayores</Item>
    </MenuContainer>
    <MenuContainer>
      <h2 className="text-lg font-bold">Cancillería Imperial</h2>
      <Item href="/correspondencia">Correspondencia oficial</Item>
      <Item href="/tratamiento">Protocolo de tratamiento</Item>
      <Item href="/sello">Cámara del Sello</Item>
      <Item href="/ciudadania">Registro ciudadano</Item>
    </MenuContainer>
    <MenuContainer>
      <p>
        Sacratísimo Reino Soberano de Eucategarion Trono y Sede Metropolitana de
        las Provincias Digitales Custodio Perpetuo del Orden
      </p>

      <p>🏛 Fundado en el Año I del Orden Elevado</p>

      <p>© Año {imperialYear} E.O.E. — Trono de Eucategarion</p>
    </MenuContainer>
  </FooterContainer>
);

export default Footer;
