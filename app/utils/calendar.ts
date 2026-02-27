import moment from 'moment';

moment.updateLocale('la-eucategarion', {
  months: [
    'Mensis Fidei',
    'Mensis Elevationis',
    'Mensis Ordinis',
    'Mensis Traditionis',
    'Mensis Auctoritas',
    'Mensis Sapientiae',
    'Mensis Custodiae',
    'Mensis Metropolis',
    'Mensis Expansionis',
    'Mensis Virtutis',
    'Mensis Concordiae',
    'Mensis Aeternitatis',
  ],
});

moment.updateLocale('es-eucategarion', {
  months: [
    'Mes de la Fe',
    'Mes de la Elevación',
    'Mes del Orden',
    'Mes de la Tradición',
    'Mes de la Autoridad',
    'Mes de la Sabiduría',
    'Mes de la Custodia',
    'Mes de la Metrópolis',
    'Mes de la Expansión',
    'Mes de la Virtud',
    'Mes de la Concordia',
    'Mes de la Eternidad',
  ],
});

moment.locale('es-eucategarion');

const foundationYear = 2026;
const now = moment();

export function getCurrentImperialYear(
  date: Date | moment.Moment = now,
): number {
  const m = moment(date);
  const imperialYear = m.year() - foundationYear + 1;
  return imperialYear;
}

export function formatImperial(date: Date | moment.Moment = now): string {
  const m = moment(date);
  const imperialYear = getCurrentImperialYear(m);
  const isBeforeFoundation = imperialYear < 1;

  if (isBeforeFoundation)
    return m.format(`[Día] D MMMM [Año ${imperialYear - 1} A.O.E.]`);
  return m.format(`[Día] D MMMM [Año ${imperialYear} E.O.E.]`);
}
