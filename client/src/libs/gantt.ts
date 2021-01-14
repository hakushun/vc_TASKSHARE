import dayjs from 'dayjs';

const getElement = (
  id: string,
): {
  targetRect: DOMRect;
  initialDateRect: DOMRect;
  lastDateRect: DOMRect;
} => {
  const target = document.getElementById(id) as HTMLDivElement;
  const initialDate = document.getElementById(
    dayjs().format('YYYY-MM-DD'),
  ) as HTMLDivElement;
  const lastDate = document.getElementById(
    dayjs().add(30, 'day').format('YYYY-MM-DD'),
  ) as HTMLDivElement;

  const targetRect = target?.getBoundingClientRect();
  const initialDateRect = initialDate.getBoundingClientRect();
  const lastDateRect = lastDate.getBoundingClientRect();

  return { targetRect, initialDateRect, lastDateRect };
};

const getPositionTop = (id: string): number => {
  const { targetRect } = getElement(id);
  return targetRect.top + 3;
};

const getPositionLeft = (date: string): number => {
  const { targetRect, initialDateRect, lastDateRect } = getElement(date);
  if (targetRect) return targetRect.left;

  if (dayjs().add(30, 'day') < dayjs(date)) {
    return lastDateRect!.left + lastDateRect!.width;
  }

  return initialDateRect.left;
};

const getPositionRight = (date: string): number => {
  const { targetRect, initialDateRect, lastDateRect } = getElement(date);

  if (targetRect) return targetRect.left + targetRect.width;

  if (dayjs().add(30, 'day') < dayjs(date)) {
    return lastDateRect!.left + lastDateRect!.width;
  }
  return initialDateRect.left;
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
