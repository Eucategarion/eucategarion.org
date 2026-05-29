const FOUNDATION_YEAR = 2026;

export const IMPERIAL_MONTHS = [
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
] as const;

export const IMPERIAL_MONTHS_SHORT = [
  'Fidei', 'Elev.', 'Ordin.', 'Trad.', 'Auct.', 'Sap.',
  'Cust.', 'Metr.', 'Expan.', 'Virt.', 'Conc.', 'Aetern.',
] as const;

const ROMAN = [
  '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII',
  'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV',
];

export function toRoman(n: number): string {
  return ROMAN[n] ?? String(n);
}

export function getImperialYear(date: Date = new Date()): {
  year: string;
  isBeforeFoundation: boolean;
} {
  const imperial = date.getFullYear() - FOUNDATION_YEAR + 1;
  return { year: toRoman(imperial), isBeforeFoundation: imperial < 1 };
}

export function getImperialMonth(date: Date = new Date()): string {
  return IMPERIAL_MONTHS[date.getMonth()];
}

export function getImperialMonthShort(date: Date = new Date()): string {
  return IMPERIAL_MONTHS_SHORT[date.getMonth()];
}

export function formatImperial(date: Date = new Date()): string {
  const { year, isBeforeFoundation } = getImperialYear(date);
  const month = getImperialMonth(date);
  const era = isBeforeFoundation ? 'A.O.E.' : 'E.O.E.';
  return `Día ${date.getDate()} ${month} Año ${year} ${era}`;
}

export function formatImperialShort(date: Date = new Date()): string {
  const { year, isBeforeFoundation } = getImperialYear(date);
  const month = getImperialMonthShort(date);
  const era = isBeforeFoundation ? 'A.O.E.' : 'E.O.E.';
  return `${date.getDate()}-${month}-${year} ${era}`;
}
