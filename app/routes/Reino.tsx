import type { Route } from './+types/Reino';

import { Grid } from '@mui/material';
import Hero from '~/components/Hero';
import Section from '~/components/Section';
import Separator from '~/components/Separator';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'El Reino | Reino Soberano de Eucategarion' },
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
        title="El Reino"
        subtitle="Ordo et Fides"
        image="/escudo-white.png"
      />

      <Section>
        <p className="mb-8 text-center" style={{ fontSize: '1.4rem' }}>
          El Trono de Eucategarion es la sede visible del Orden eterno.
        </p>

        <img
          src="/mapa.png"
          alt="Mapa del Reino Soberano de Eucategarion"
          className="w-2xl rounded-lg shadow-lg mb-8 mt-16 mx-auto block"
        />

        <Separator />
        <h3 className="text-2xl font-bold mb-0">
          La Metrópolis de Eucategarion
        </h3>
        <h4 className="text-xl font-semibold mb-4 text-center">
          Núcleo del Reino. Sede visible del Orden
        </h4>
        <Grid container spacing={4} className="mt-4">
          <Grid size={6}>
            <p className="mb-4">
              La Metrópolis de Eucategarion no es solo capital administrativa.
              Es centro doctrinal, archivo vivo y eje axial del Reino.
            </p>
            <p className="mb-4">
              Gobernada directamente por Su Augusta y Sacratísima Majestad
              Imperial, el Autócrator de Eucategarion, Alexion I.
            </p>
            <p className="mb-4">
              La Metrópolis es:
              <ul>
                <li>🜂 Sede del Trono</li>
                <li>📜 Custodia del Acta Fundacional</li>
                <li>🏛 Centro de gobierno supremo</li>
                <li>🕯 Corazón doctrinal del Orden</li>
                <li>🛡 Archivo y memoria institucional</li>
              </ul>
            </p>
            <p className="mb-4">
              No es provincia.
              <br />
              No es territorio delegado.
              <br />
              Es dominio inmediato del Trono.
            </p>
          </Grid>
          <Grid size={6}>
            <img
              src="/metropolis.png"
              alt="Vista aérea de la Metrópolis de Eucategarion, sede visible del Orden eterno"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid>
        </Grid>
      </Section>

      <Separator />

      <Section>
        <h3 className="text-2xl font-bold mb-0">El Palacio del Trono</h3>
        <Grid container spacing={4} className="mt-4">
          <Grid size={6}>
            <p className="mb-4">Centro simbólico y jurídico.</p>
            <p className="mb-4">
              Funciones:
              <ul>
                <li>Proclamaciones imperiales</li>

                <li>Audiencias solemnes</li>
                <li>Emisión de edictos</li>
                <li>Juramentos ante el Codex Ordinis</li>
                <li>Recepción de embajadores digitales</li>
              </ul>
            </p>
          </Grid>
          <Grid size={6}>
            <img
              src="/palacio.png"
              alt="Vista aérea del Palacio del Trono"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid>
        </Grid>
      </Section>

      <Separator />

      <Section>
        <h3 className="text-2xl font-bold mb-0">
          Archivo Imperial Metropolitano
        </h3>
        <Grid container spacing={4} className="mt-4">
          <Grid size={6}>
            <p className="mb-4">
              Custodia:
              <ul>
                <li>Acta Fundacional (Año I E.O.E.)</li>
                <li>Liber Ordinis Eucategarionis</li>
                <li>Decretos imperiales</li>
                <li>Registro de ciudadanos</li>
                <li>Registro de dignidades</li>
                <li>Cronología oficial del Reino</li>
              </ul>
            </p>
            <p className="mb-4">
              Debe funcionar como:
              <ul>
                <li>Archivo histórico</li>
                <li>Archivo jurídico</li>
                <li>Archivo ceremonial</li>
              </ul>
            </p>
            <p className="mb-4">
              Nada se elimina.
              <br />
              Todo se consigna.
            </p>
          </Grid>
          <Grid size={6}>
            <img
              src="/archivo.png"
              alt="Vista aérea del Archivo Imperial Metropolitano"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid>
        </Grid>
      </Section>

      <Separator />

      <Section>
        <h3 className="text-2xl font-bold mb-0">Cámara del Sello</h3>
        <Grid container spacing={4} className="mt-4">
          <Grid size={6}>
            <p className="mb-4">
              Responsable de:
              <ul>
                <li>Aplicación del Sello Imperial</li>
                <li>Numeración oficial de documentos</li>
                <li>Custodia de la firma imperial</li>
                <li>Validación digital (hash único imperial)</li>
                <li>Protocolo de autenticidad</li>
              </ul>
            </p>
            <p className="mb-4">
              Aquí se garantiza que la autoridad no se falsifica, se certifica.
            </p>
          </Grid>
          <Grid size={6}>
            <img
              src="/sello.png"
              alt="Vista aérea de la Cámara del Sello"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid>
        </Grid>
      </Section>

      <Separator />

      <Section>
        <h3 className="text-2xl font-bold mb-0">Cancillería Imperial</h3>
        <Grid container spacing={4} className="mt-4">
          <Grid size={6}>
            <p className="mb-4">Estructura administrativa central.</p>
            <p className="mb-4">
              Funciones:
              <ul>
                <li>Redacción formal de documentos</li>
                <li>Correspondencia diplomática</li>
                <li>Comunicación oficial</li>
                <li>Gestión protocolaria</li>
                <li>Convocatorias imperiales</li>
              </ul>
            </p>
            <p className="mb-4">Es la voz estructurada del Trono.</p>
          </Grid>
          <Grid size={6}>
            <img
              src="/cancilleria.png"
              alt="Vista aérea de la Cancillería Imperial"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid>
        </Grid>
      </Section>

      <Separator />
    </>
  );
}
