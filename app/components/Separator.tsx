import styled from '@emotion/styled';

const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  color: #c6a75e;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #5a0f1c9f;
    background: linear-gradient(to right, transparent, #5a0f1c9f, transparent);
    margin: 0 20px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Separator = () => (
  <SeparatorContainer>
    <span>✧</span>
  </SeparatorContainer>
);

export default Separator;
