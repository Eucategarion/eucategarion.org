import styled from '@emotion/styled';

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: #5a0f1b;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  h3 {
    color: #5a0f1b;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: circle;
    padding-left: 1.5rem;
  }
`;

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <SectionContainer className={className}>{children}</SectionContainer>;

export default Section;
