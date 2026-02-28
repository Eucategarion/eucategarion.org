import type { Route } from './+types/gobierno';

import { Grid } from '@mui/material';
import Hero from '~/components/Hero';
import Section from '~/components/Section';
import Separator from '~/components/Separator';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Gobierno del Reino | Reino Soberano de Eucategarion' },
    {
      name: 'description',
      content:
        'Sacratísimo Reino Soberano de Eucategarion, Trono y Sede Metropolitana de las Provincias Digitales y Custodio del Orden',
    },
  ];
}

export default function Gobierno() {
  return (
    <>
      <Hero
        title="Gobierno del Reino"
        subtitle="La administración visible del Orden en la Metrópolis y en las Provincias Digitales."
        image="/escudo.png"
      />

      <Section>
        <h3 className="text-2xl font-bold mb-4">I. Principio de Gobierno</h3>
        <Grid container spacing={4} className="mt-4">
          <Grid size={6}>
            <p className="mb-4">
              El Gobierno del Reino no constituye el fundamento del Orden;
              <br />
              constituye su instrumento visible.
            </p>

            <p className="mb-4">
              Toda autoridad administrativa participa de la autoridad superior
              del Trono,
              <br />
              pero ejerce funciones delimitadas y específicas.
            </p>

            <p className="mb-4">La estructura gubernativa existe para:</p>

            <ul className="list-none pl-0 mb-4">
              <li>— Organizar la vida institucional</li>
              <li>— Ejecutar las decisiones promulgadas</li>
              <li>— Supervisar la coherencia doctrinal y normativa</li>
              <li>— Administrar las Provincias y Dominios</li>
            </ul>
          </Grid>
          <Grid size={6}>
            <img
              src="/gobierno-consejo.png"
              alt="Sala de consejo administrativo"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid>
        </Grid>
      </Section>

      <Separator />

      <Section>
        <h3 className="text-2xl font-bold mb-4">II. La Metrópolis</h3>
        <Grid container spacing={4} className="mt-4">
          <Grid size={6}>
            <p className="mb-4">
              La Metrópolis constituye el centro administrativo del Reino.
            </p>

            <p className="mb-4">
              Desde ella se coordinan las Provincias Mayores,
              <br />
              se conservan los registros institucionales
              <br />y se ejecutan las decisiones superiores.
            </p>

            <p className="mb-4">
              La Metrópolis no es únicamente símbolo;
              <br />
              es el núcleo operativo desde el cual se mantiene la unidad del
              sistema.
            </p>
          </Grid>
          <Grid size={6}>
            <img
              src="/metropolis.png"
              alt="Vista urbana organizada de la Metrópolis"
              className="w-full rounded-lg shadow-lg"
            />
          </Grid>
        </Grid>
      </Section>

      <Separator />

      <Section>
        <h3 className="text-2xl font-bold mb-0">III. Provincias Mayores</h3>
        <p className="text-lg mt-4 mb-6">
          Las Provincias Mayores constituyen divisiones funcionales del Reino.
          Cada una posee una competencia definida y una autoridad designada.
        </p>

        {/* Provincia del Orden */}
        <div className="mb-8 pb-8 border-b border-gray-300 last:border-b-0">
          <h4 className="text-xl font-bold mb-4">
            1️⃣ Provincia del Orden (Provincia Ordinis)
          </h4>
          <Grid container spacing={4}>
            <Grid size={6}>
              <p className="mb-4">
                <strong>Competencia:</strong>
              </p>
              <ul className="list-none pl-0 mb-4">
                <li>— Redacción normativa</li>
                <li>— Custodia jurídica</li>
                <li>— Supervisión de coherencia institucional</li>
              </ul>
              <p className="mb-4">
                <strong>Autoridad:</strong>
                <br />
                Prefecto del Orden
              </p>
            </Grid>
            <Grid size={6}>
              <img
                src="/gobierno-provincia-orden.png"
                alt="Interior con mesas de redacción y códices digitales"
                className="w-full rounded-lg shadow-lg"
              />
            </Grid>
          </Grid>
        </div>

        {/* Provincia de la Fides */}
        <div className="mb-8 pb-8 border-b border-gray-300 last:border-b-0">
          <h4 className="text-xl font-bold mb-4">2️⃣ Provincia de la Fides</h4>
          <Grid container spacing={4}>
            <Grid size={6}>
              <p className="mb-4">
                <strong>Competencia:</strong>
              </p>
              <ul className="list-none pl-0 mb-4">
                <li>— Formación doctrinal</li>
                <li>— Producción de contenido institucional</li>
                <li>— Custodia simbólica interna</li>
              </ul>
              <p className="mb-4">
                <strong>Autoridad:</strong>
                <br />
                Metropolitano Provincial
              </p>
            </Grid>
            <Grid size={6}>
              <img
                src="/gobierno-provincia-fides.png"
                alt="Biblioteca iluminada con estanterías y símbolos"
                className="w-full rounded-lg shadow-lg"
              />
            </Grid>
          </Grid>
        </div>

        {/* Provincia de la Elevación */}
        <div className="mb-8 pb-8 border-b border-gray-300 last:border-b-0">
          <h4 className="text-xl font-bold mb-4">
            3️⃣ Provincia de la Elevación
          </h4>
          <Grid container spacing={4}>
            <Grid size={6}>
              <p className="mb-4">
                <strong>Competencia:</strong>
              </p>
              <ul className="list-none pl-0 mb-4">
                <li>— Desarrollo intelectual</li>
                <li>— Producción académica</li>
                <li>— Formación cultural</li>
              </ul>
              <p className="mb-4">
                <strong>Autoridad:</strong>
                <br />
                Logoteta de la Elevación
              </p>
            </Grid>
            <Grid size={6}>
              <img
                src="/gobierno-provincia-elevacion.png"
                alt="Sala moderna con pantallas, manuscritos y mapas conceptuales"
                className="w-full rounded-lg shadow-lg"
              />
            </Grid>
          </Grid>
        </div>

        {/* Provincia de las Artes y la Tradición */}
        <div className="mb-8 pb-8 border-b border-gray-300 last:border-b-0">
          <h4 className="text-xl font-bold mb-4">
            4️⃣ Provincia de las Artes y la Tradición
          </h4>
          <Grid container spacing={4}>
            <Grid size={6}>
              <p className="mb-4">
                <strong>Competencia:</strong>
              </p>
              <ul className="list-none pl-0 mb-4">
                <li>— Estética institucional</li>
                <li>— Liturgia ceremonial</li>
                <li>— Archivo histórico</li>
              </ul>
              <p className="mb-4">
                <strong>Autoridad:</strong>
                <br />
                Custodio de la Tradición
              </p>
            </Grid>
            <Grid size={6}>
              <img
                src="/gobierno-provincia-artes.png"
                alt="Taller ceremonial con estandartes, escudos y sellos"
                className="w-full rounded-lg shadow-lg"
              />
            </Grid>
          </Grid>
        </div>

        {/* Provincia de la Expansión Digital */}
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-4">
            5️⃣ Provincia de la Expansión Digital
          </h4>
          <Grid container spacing={4}>
            <Grid size={6}>
              <p className="mb-4">
                <strong>Competencia:</strong>
              </p>
              <ul className="list-none pl-0 mb-4">
                <li>— Infraestructura tecnológica</li>
                <li>— Relaciones externas</li>
                <li>— Incorporación de ciudadanos</li>
              </ul>
              <p className="mb-4">
                <strong>Autoridad:</strong>
                <br />
                Exarca Digital
              </p>
            </Grid>
            <Grid size={6}>
              <img
                src="/gobierno-provincia-expansion.png"
                alt="Centro de operaciones digital con servidores y mapas de red"
                className="w-full rounded-lg shadow-lg"
              />
            </Grid>
          </Grid>
        </div>
      </Section>

      <Separator />
    </>
  );
}
