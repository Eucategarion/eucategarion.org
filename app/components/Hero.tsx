import styled from '@emotion/styled';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #0b0b0d;
  background: linear-gradient(180deg, #0b0b0d 85%, #1f1f23 100%);
  color: #f4f1e8;

  h2 {
    color: #c6a75e;
    font-size: 2.5rem;
    text-align: center;
  }

  h3 {
    color: #f4f1e8;
    font-size: 1.5rem;
    text-align: center;
  }

  img {
    width: 300px;
    max-width: 100%;
    height: auto;
  }
`;

const Hero = ({
  title,
  subtitle,
  image,
}: {
  image?: string;
  title: string;
  subtitle: string;
}) => (
  <HeroContainer>
    {image && <img src={image} alt={title} />}
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
  </HeroContainer>
);

export default Hero;
