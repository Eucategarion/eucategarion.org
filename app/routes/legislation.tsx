import type { Route } from './+types/legislation';

import { Grid } from '@mui/material';
import Hero from '~/components/Hero';
import Section from '~/components/Section';
import Separator from '~/components/Separator';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Legislación | Reino Soberano de Eucategarion' },
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
        title="El Orden se hace visible cuando es proclamado"
        subtitle="Archivo público de Edictos, Decretos, Codex y Actas Fundacionales vigentes"
        image="/escudo.png"
      />
      <Section>
        <p className="mb-4 text-center" style={{ fontSize: '1.3rem' }}>
          La Legislación de Eucategarion constituye la expresión formal del
          Orden en la vida institucional del Reino. Toda norma válida emana del
          Trono, es promulgada públicamente y queda registrada en el Archivo
          Metropolitano.
        </p>
      </Section>
    </>
  );
}
