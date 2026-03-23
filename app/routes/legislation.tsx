import type { Route } from './+types/legislation';

import Hero from '~/components/Hero';
import LegislationSection from '~/components/LegislationSection';
import LegislativeItem from '~/components/LegislativeItem';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Legislación | Reino Soberano de Eucategarion' },
    {
      name: 'description',
      content:
        'Archivo legislativo oficial del Sacratísimo Reino Soberano de Eucategarion. Edictos, Decretos, Codex y Actas Fundacionales vigentes.',
    },
  ];
}

export default function Legislation() {
  return (
    <>
      <Hero
        title="El Orden se hace visible cuando es proclamado"
        subtitle="Archivo público de Edictos, Decretos, Codex y Actas Fundacionales vigentes"
        image="/escudo.png"
      />
      <LegislationSection title="Naturaleza de la Legislación">
        <p>
          La Legislación de Eucategarion constituye la expresión formal del
          Orden en la vida institucional del Reino.
        </p>
        <p>
          Toda norma válida emana del Trono, es promulgada públicamente y queda
          registrada en el Archivo Metropolitano.
        </p>
        <p>
          Ninguna disposición tiene vigor si no ha sido promulgada conforme al
          rito jurídico establecido.
        </p>
      </LegislationSection>

      <LegislationSection title="Edictos Imperiales">
        <div style={{ marginTop: '2rem' }}>
          <LegislativeItem
            code="EDI-I-001-EOE"
            title="Edicto de Constitución del Archivo Metropolitano"
            subject="Organización administrativa"
            date="Mensis Ordinis, Año I E.O.E."
            status="Vigente"
            content={
              <div>
                <p>
                  Por este Edicto, el Trono constituye formalmente el Archivo
                  Metropolitano como órgano de custodia permanente de la memoria
                  jurídica del Reino.
                </p>
                <p>
                  El Archivo será ubicado en la Metrópolis y administrado
                  conforme a los protocolos de preservación establecidos en el
                  Codex.
                </p>
              </div>
            }
          />

          <LegislativeItem
            code="EDI-I-002-EOE"
            title="Edicto de Vigencia de las Normas"
            subject="Procedimiento legislativo"
            date="Mensis Ordinis, Año I E.O.E."
            status="Vigente"
            content={
              <div>
                <p>
                  Declárase que toda norma promulgada conforme a estas
                  disposiciones entra en vigor el día de su promulgación
                  pública, salvo disposición expresa en contrario.
                </p>
              </div>
            }
          />
        </div>
      </LegislationSection>

      {/* <LegislationSection title="Legislación por Año del Orden Elevado">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          {['Año I E.O.E.', 'Año II E.O.E.'].map((year) => (
            <div
              key={year}
              style={{
                padding: '1.5rem',
                backgroundColor: '#faf9f6',
                border: '1px solid #e0dcd5',
              }}
            >
              <h4 style={{ color: '#5a0f1b', marginBottom: '0.5rem' }}>
                {year}
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#888' }}>
                Consultar legislación del período
              </p>
            </div>
          ))}
        </div>
      </LegislationSection> */}
    </>
  );
}
