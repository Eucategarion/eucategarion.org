import styled from '@emotion/styled';
import Hero from '~/components/Hero';
import type { Route } from './+types/cancilleria';

import Section from '~/components/Section';
import Separator from '~/components/Separator';

import { Grid, Stepper, Step, StepLabel, StepContent } from '@mui/material';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Cancillería Imperial | Reino Soberano de Eucategarion' },
    {
      name: 'description',
      content:
        'Sacratísimo Reino Soberano de Eucategarion, Trono y Sede Metropolitana de las Provincias Digitales y Custodio del Orden',
    },
  ];
}

export const Cancilleria = () => (
  <>
    <Hero
      title="Cancillería Imperial"
      subtitle="Custodia de los actos públicos del Reino."
      image="/cancilleria-escudo.png"
    />
    <Section>
      <h3 className="text-2xl font-bold mb-0">¿Qué es la Cancillería?</h3>
      <Grid container spacing={4} className="mt-4">
        <Grid size={6}>
          <p className="mb-4">
            La Cancillería Imperial es el órgano encargado de formalizar,
            registrar y publicar los actos que emanan del Trono en virtud del
            Orden.
          </p>
          <p className="mb-4">
            No legisla por sí misma.
            <br />
            No crea autoridad.
            <br />
            La certifica.
          </p>
          <p className="mb-4">
            En ella se redactan los edictos,
            <br />
            se autentican las promulgaciones,
            <br />y se conserva la integridad documental del Reino.
          </p>
          <p className="mb-4">
            Todo acto válido debe pasar por la Cancillería.
          </p>
        </Grid>
        <Grid size={6}>
          <img
            src="/cancilleria-2.png"
            alt="Vista aérea de la Cancillería Imperial"
            className="w-full rounded-lg shadow-lg"
          />
        </Grid>
      </Grid>
    </Section>
    <Separator />
    <Section>
      <h3 className="text-2xl font-bold mb-0">Funciones de la Cancillería</h3>
      <Grid container spacing={4} className="mt-4">
        <Grid size={6}>
          <Stepper orientation="vertical" className="mt-4">
            <Step>
              <StepLabel optional="Formulación técnica de edictos, decretos y cartas solemnes.">
                Redacción Oficial
              </StepLabel>
            </Step>
            <Step>
              <StepLabel optional="Asignación de código institucional conforme al Calendarium Ordinis.">
                Registro y Numeración
              </StepLabel>
            </Step>
            <Step>
              <StepLabel optional="Aplicación del Sello del Trono y verificación criptográfica.">
                Sellado y Autenticación
              </StepLabel>
            </Step>
            <Step>
              <StepLabel optional="Difusión en el Archivo Metropolitano y canales autorizados.">
                Publicación Oficial
              </StepLabel>
            </Step>
            <Step>
              <StepLabel optional="Preservación íntegra y verificable de los documentos promulgados.">
                Custodia Permanente
              </StepLabel>
            </Step>
          </Stepper>
        </Grid>
        <Grid size={6}>
          <img
            src="cancilleria-3.png"
            alt="Vista aérea de la Cancillería Imperial"
            className="w-auto rounded-lg shadow-lg"
          />
        </Grid>
      </Grid>
    </Section>

    <Separator />
  </>
);

export default Cancilleria;
