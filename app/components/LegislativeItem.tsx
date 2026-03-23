import styled from '@emotion/styled';

const LegislativeContainer = styled.div`
  border: 1px solid #c6a75e;
  padding: 2rem;
  margin-bottom: 1.5rem;
  background-color: #faf9f6;

  .legislative-header {
    border-bottom: 2px solid #c6a75e;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .legislative-code {
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
    color: #c6a75e;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .legislative-title {
    font-size: 1.3rem;
    color: #5a0f1b;
    margin: 0.5rem 0;
    font-family: 'Cardo', serif;
  }

  .legislative-meta {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;

    .meta-item {
      display: flex;
      flex-direction: column;

      .label {
        font-weight: bold;
        color: #5a0f1b;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.3px;
      }

      .value {
        margin-top: 0.25rem;
      }
    }
  }

  .legislative-body {
    margin: 1.5rem 0;
    line-height: 1.8;
  }

  .legislative-footer {
    border-top: 1px solid #e0dcd5;
    margin-top: 1.5rem;
    padding-top: 1rem;
    font-size: 0.85rem;
    color: #888;
    font-style: italic;
  }
`;

export interface LegislativeItemProps {
  code: string;
  title: string;
  date: string;
  status: 'Vigente' | 'Derogado' | 'Archivado';
  subject: string;
  content: React.ReactNode;
}

const LegislativeItem = ({
  code,
  title,
  date,
  status,
  subject,
  content,
}: LegislativeItemProps) => (
  <LegislativeContainer>
    <div className="legislative-header">
      <div className="legislative-code">{code}</div>
      <div className="legislative-title">{title}</div>
    </div>

    <div className="legislative-meta">
      <div className="meta-item">
        <span className="label">Promulgación</span>
        <span className="value">{date}</span>
      </div>
      <div className="meta-item">
        <span className="label">Estado</span>
        <span className="value">{status}</span>
      </div>
    </div>

    <div className="legislative-body">{content}</div>

    <div className="legislative-footer">
      Dado bajo el Sello del Trono en la Metrópolis de Eucategarion | Ordo et
      Fides
    </div>
  </LegislativeContainer>
);

export default LegislativeItem;
