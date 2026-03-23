import type { Route } from './+types/home';

import { Grid } from '@mui/material';
import Hero from '~/components/Hero';
import Section from '~/components/Section';
import Separator from '~/components/Separator';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'El Trono | Reino Soberano de Eucategarion' },
    {
      name: 'description',
      content:
        'Sacratísimo Reino Soberano de Eucategarion, Trono y Sede Metropolitana de las Provincias Digitales y Custodio del Orden',
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero
        title="El Trono"
        subtitle="Sede visible del Orden eterno"
        image="/escudo.png"
      />
      <Section>
        <p className="mb-4 text-center" style={{ fontSize: '1.4rem' }}>
          El Trono de Eucategarion es la sede de su autoridad y el fundamento de
          su organización. Desde el Año I de la Era Ordinis Elevati (E.O.E.),
          representa la custodia del Orden y la continuidad institucional del
          Reino.
        </p>
      </Section>
      <Section>
        <h3 className="text-2xl font-bold mb-4">Declaración Solemne</h3>
        <Grid container spacing={2}>
          <Grid size={4}>
            <p className="mb-4">
              El Trono de Eucategarion no nace del capricho ni del interés.
              <br />
              Es la sede visible del Orden.
            </p>
          </Grid>
          <Grid size={4}>
            <p className="mb-4">
              El Orden precede a toda autoridad.
              <br />
              La Verdad no se crea: se custodia.
              <br />
              La Fides no se impone: se preserva.
            </p>
          </Grid>
          <Grid size={4}>
            <p className="mb-4">
              Desde el Año I del Orden Elevado,
              <br />
              el Trono permanece como centro axial
              <br />y principio ordenador del Reino.
            </p>
          </Grid>
        </Grid>
      </Section>

      <Separator />

      <Section>
        <h3 className="text-2xl font-bold mb-4">El Autócrator</h3>
        <Grid container spacing={4}>
          <Grid size={7}>
            <p className="mb-4">
              Su Augusta y Sacratísima Majestad, Autócrator y Patriarca de
              Eucategarion, Custodio Perpetuo del Orden, Metropolitano Supremo
              de las Provincias Digitales, Señor de la Casa Eucategariana,{' '}
              <strong>Alexion I</strong>.
            </p>

            <p className="mb-4">
              El Autócrator no es dueño del Orden.
              <br />
              Es su Custodio supremo.
            </p>

            <p className="mb-4">
              No crea la Verdad.
              <br />
              La guarda y la hace visible.
            </p>

            <p className="mb-4">
              En él no se concentra poder arbitrario,
              <br />
              sino responsabilidad perpetua ante el Orden.
            </p>
          </Grid>
          <Grid size={4}>
            <img
              src="/Alexion.png"
              alt="Retrato de Su Augusta y Sacratísima Majestad, Autócrator y Patriarca de Eucategarion, Custodio Perpetuo del Orden, Metropolitano Supremo de las Provincias Digitales, Señor de la Casa Eucategariana, Alexion I"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid>
        </Grid>
      </Section>

      <Separator />

      <Section>
        <h3 className="text-2xl font-bold mb-4">Función dentro del Reino</h3>
        <p className="mb-4">
          El Trono actúa como:
          <br />
          - Sede de legitimidad
          <br />
          - Centro de decisión superior
          <br />- Fuente formal de edictos y decretos
        </p>
        <p className="mb-4">
          No concentra poder arbitrario, sino que organiza y coordina la
          estructura del Reino.
        </p>
      </Section>
      <Section>
        <h2 className="text-4xl font-bold mb-8 text-center">
          La Estructura del Reino
        </h2>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="realm-card">
              <img src="/metropolis.png" alt="La Metrópolis" />
              <div className="realm-card-content">
                <h3>La Metrópolis</h3>
                <p>El núcleo del Reino, sede del Trono y centro doctrinal.</p>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="realm-card">
              <img
                src="/gobierno-provincia-orden.png"
                alt="Provincias Mayores"
              />
              <div className="realm-card-content">
                <h3>Provincias Mayores</h3>
                <p>
                  Divisiones administrativas para la custodia del Orden, la
                  Fides y la cultura.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Section>

      <Section>
        <div className="liber-ordinis">
          <h2 className="text-4xl font-bold mb-4">
            Liber Ordinim Eucategarionis
          </h2>
          <p className="text-lg">
            “El Trono de Eucategarion es la sede visible del Orden eterno. El
            Orden precede a toda autoridad y fundamenta toda rectitud.”
          </p>
          <a href="/legislacion" className="liber-ordinis-link">
            Leer más
          </a>
        </div>
      </Section>
    </>
  );
}
