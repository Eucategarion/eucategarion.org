import styled from '@emotion/styled';

const LegislationSectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  border-top: 2px solid #c6a75e;

  &:first-of-type {
    border-top: none;
  }

  h2 {
    color: #5a0f1b;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-family: 'Cardo', serif;
    font-weight: bold;
  }

  .section-number {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #c6a75e;
    font-weight: bold;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 0.5rem;
  }

  .section-content {
    margin-top: 2rem;
    line-height: 1.8;

    p {
      margin-bottom: 1.5rem;
      color: #333;
      font-size: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 1.5rem 0;

      li {
        padding: 0.5rem 0;
        padding-left: 2rem;
        position: relative;
        color: #333;

        &:before {
          content: '–';
          position: absolute;
          left: 0;
          color: #c6a75e;
          font-weight: bold;
        }
      }
    }
  }
`;

interface LegislationSectionProps {
  number?: string;
  title: string;
  children: React.ReactNode;
}

const LegislationSection = ({ title, children }: LegislationSectionProps) => (
  <LegislationSectionContainer>
    <h2>{title}</h2>
    <div className="section-content">{children}</div>
  </LegislationSectionContainer>
);

export default LegislationSection;
