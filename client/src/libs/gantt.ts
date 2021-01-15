import dayjs from 'dayjs';

const getElement = (
  id: string,
): {
  originRect: DOMRect;
  targetRect: DOMRect;
  initialDateRect: DOMRect;
  lastDateRect: DOMRect;
} => {
  const origin = document.getElementById('gantt_chart') as HTMLDivElement;
  const target = document.getElementById(id) as HTMLDivElement;
  const initialDate = document.getElementById(
    dayjs().format('YYYY-MM-DD'),
  ) as HTMLDivElement;
  const lastDate = document.getElementById(
    dayjs().add(60, 'day').format('YYYY-MM-DD'),
  ) as HTMLDivElement;

  const originRect = origin?.getBoundingClientRect();
  const targetRect = target?.getBoundingClientRect();
  const initialDateRect = initialDate.getBoundingClientRect();
  const lastDateRect = lastDate.getBoundingClientRect();

  return { originRect, targetRect, initialDateRect, lastDateRect };
};

const getPositionTop = (id: string): number => {
  const { originRect, targetRect } = getElement(id);
  return targetRect.top - originRect.top + 3;
};

const getPositionLeft = (date: string): number => {
  const { originRect, targetRect, initialDateRect, lastDateRect } = getElement(
    date,
  );
  if (targetRect) return targetRect.left - originRect.left;

  if (dayjs().add(60, 'day') < dayjs(date)) {
    return lastDateRect!.left + lastDateRect!.width - originRect.left;
  }

  return initialDateRect.left - originRect.left;
};

const getPositionRight = (date: string): number => {
  const { originRect, targetRect, initialDateRect, lastDateRect } = getElement(
    date,
  );

  if (targetRect) return targetRect.left + targetRect.width - originRect.left;

  if (dayjs().add(60, 'day') < dayjs(date)) {
    return lastDateRect!.left + lastDateRect!.width - originRect.left;
  }
  return initialDateRect.left - originRect.left;
};

export const renderChart = (): void => {
  const charts = Array.from(
    document.querySelectorAll('[data-item="chart"]'),
  ) as HTMLDivElement[];

  charts.forEach((chart) => {
    const id = chart.getAttribute('data-id');
    const startDate = chart.getAttribute('data-startdate');
    const dueDate = chart.getAttribute('data-duedate');
    chart.style.top = `${getPositionTop(id!)}px`;
    chart.style.left = `${getPositionLeft(startDate!)}px`;
    chart.style.width = `${
      getPositionRight(dueDate!) - getPositionLeft(startDate!)
    }px`;
  });
};
