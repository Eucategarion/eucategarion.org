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
  monthsShort: [
    'Fe',
    'Elev',
    'Ord',
    'Trad',
    'Aut',
    'Sab',
    'Cust',
    'Metr',
    'Exp',
    'Virt',
    'Conc',
    'Aetern',
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
  monthsShort: [
    'Fe',
    'Elev',
    'Ord',
    'Trad',
    'Aut',
    'Sab',
    'Cust',
    'Metr',
    'Exp',
    'Virt',
    'Conc',
    'Aetern',
  ],
});

moment.locale('es-eucategarion');

const foundationYear = 2026;
const now = moment();

function toRoman(num: number) {
  const romans = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
  ];
  return romans[num] || num;
}

export function getCurrentImperialYear(date: Date | moment.Moment = now): {
  imperialYear: string | number;
  isBeforeFoundation: boolean;
} {
  const m = moment(date);
  const imperialYear = m.year() - foundationYear + 1;
  return {
    imperialYear: toRoman(imperialYear),
    isBeforeFoundation: imperialYear < 1,
  };
}

export function getCurrentImperialMonth(date: Date | moment.Moment = now): {
  imperialMonth: string;
} {
  const m = moment(date);
  const monthIndex = m.month();
  return {
    imperialMonth: m.localeData().months()[monthIndex],
  };
}

export function formatImperial(date: Date | moment.Moment = now): string {
  const m = moment(date);
  const { imperialYear, isBeforeFoundation } = getCurrentImperialYear(m);

  if (isBeforeFoundation)
    return m.format(`[Día] D MMMM [Año ${imperialYear} A.O.E.]`);
  return m.format(`[Día] D MMMM [Año ${imperialYear} E.O.E.]`);
}

export function formatImperialShort(date: Date | moment.Moment = now): string {
  const m = moment(date);
  const { imperialYear, isBeforeFoundation } = getCurrentImperialYear(m);

  if (isBeforeFoundation) return m.format(`D-MMM-[${imperialYear} A.O.E.]`);
  return m.format(`D-MMM-[${imperialYear} E.O.E.]`);
}
