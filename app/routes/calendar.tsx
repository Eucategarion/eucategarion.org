import type { Route } from './+types/calendar';

import Hero from '~/components/Hero';
import Separator from '~/components/Separator';

import {
  formatImperialShort,
  getCurrentImperialYear,
  getCurrentImperialMonth,
} from '~/utils/calendar';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Calendario | Reino Soberano de Eucategarion' },
    {
      name: 'description',
      content:
        'Sacratísimo Reino Soberano de Eucategarion, Trono y Sede Metropolitana de las Provincias Digitales y Custodio del Orden',
    },
  ];
}

const externalEvents = [
  {
    title: 'Dies Victoriae',
    start: '2026-02-25',
    classNames: ['imperial-feast'],
  },
  {
    title: 'Dies Fundationis',
    start: '2026-03-01',
    classNames: ['imperial-feast'],
  },
  {
    title: 'Dies Coronationis',
    start: '2026-03-07',
    classNames: ['imperial-feast'],
  },
  {
    title: 'Dies Domus Eucategarianae',
    start: '2026-03-08',
    classNames: ['imperial-feast'],
  },
  {
    title: 'Dies Ordinis',
    start: '2026-03-31',
    classNames: ['imperial-feast'],
  },
];

const dayCellContent = ({
  date,
  isOther,
}: {
  date: Date;
  isOther: boolean;
}) => ({
  html: `
	<div class="fc-day-container ${isOther ? 'fc-day-other' : ''}">
	<div class="fc-day-civil">${date.getDate()}</div>
		${isOther ? '' : `<div class="fc-day-eoe">${formatImperialShort(date)}</div>`}
	</div>
	`,
});

const datesSet = () => {
  const { imperialYear } = getCurrentImperialYear();
  const { imperialMonth } = getCurrentImperialMonth();
  return `${imperialMonth} Año ${imperialYear} E.O.E.`;
};

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [imperialTitle, setImperialTitle] = useState('');

  useEffect(() => {
    setEvents(externalEvents as any);
    setImperialTitle(datesSet());
  }, []);

  return (
    <>
      <Hero
        title={imperialTitle || 'Calendario del Reino'}
        subtitle="Eventos del Reino Soberano de Eucategarion"
      />
      <CalendarContainer>
        <Separator />
        <FullCalendar
          eventDisplay="block"
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locale={esLocale}
          dayCellContent={dayCellContent}
          events={events}
          eventDidMount={(info) => {
            info.el.setAttribute(
              'title',
              'Celebración Mayor del Reino — Ordo et Fides',
            );
          }}
          headerToolbar={{
            left: '',
            center: '',
            right: '',
          }}
        />
        <Separator />
      </CalendarContainer>
    </>
  );
}
