import styled from '@emotion/styled';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;

  h2 {
    color: #5a0f1b;
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const NotFound = () => (
  <NotFoundContainer>
    <h2>404 - Página no encontrada</h2>
    <p>Lo sentimos, la página que buscas no existe.</p>
  </NotFoundContainer>
);

export default NotFound;
