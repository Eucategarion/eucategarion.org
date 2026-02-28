import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('reino', 'routes/Reino.tsx'),
  route('calendario', 'routes/calendar.tsx'),
  route('*', 'routes/404.tsx'),
] satisfies RouteConfig;
