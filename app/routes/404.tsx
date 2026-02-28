import Hero from '~/components/Hero';
import type { Route } from './+types/404';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '404 - Página no encontrada | Reino Soberano de Eucategarion' },
    {
      name: 'description',
      content:
        'Sacratísimo Reino Soberano de Eucategarion, Trono y Sede Metropolitana de las Provincias Digitales y Custodio del Orden',
    },
  ];
}

export const NotFound = () => (
  <Hero
    title="404 - Página no encontrada"
    subtitle="Lo sentimos, la página que buscas no existe."
  />
);

export default NotFound;
