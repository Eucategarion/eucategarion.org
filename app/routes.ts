import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('reino', 'routes/reino.tsx'),
  route('calendario', 'routes/calendar.tsx'),
  route('cancilleria', 'routes/cancilleria.tsx'),
  route('gobierno', 'routes/gobierno.tsx'),
  route('*', 'routes/404.tsx'),
] satisfies RouteConfig;
