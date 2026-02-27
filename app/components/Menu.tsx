import styled from '@emotion/styled';
import Item from './Item';

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #0b0b0d;
  color: #c6a75e;
  list-style: none;

  li {
    transition:
      color 0.3s,
      background-color 0.3s;
  }

  li:hover {
    color: #f4f1e8;
    background-color: #1f1f23;
  }

  li.active {
    color: #f4f1e8;
    background-color: #1f1f23;
    box-shadow: inset 0 -5px 0 #c6a75e;
  }

  a {
    text-decoration: none;
    margin: 0.5rem 0;
    height: 2.5rem;
    padding: 0.5rem 1.5rem;
    display: block;
  }
`;

const Menu = () => (
  <MenuContainer>
    <Item href="/">El Trono</Item>
    <Item href="/reino">El Reino</Item>
    <Item href="/gobierno">Gobierno y provincias</Item>
    <Item href="/legislacion">Legislación</Item>
    <Item href="/calendario">Calendario</Item>
    <Item href="/cancilleria">Cancillería</Item>
  </MenuContainer>
);

export default Menu;
