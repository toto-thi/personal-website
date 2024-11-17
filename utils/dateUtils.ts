function abbreviateMonth(month: string): string {
  const longMonths: { [key: string]: string } = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    August: 'Aug',
    September: 'Sept',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec'
  };
  
  return longMonths[month as keyof typeof longMonths] || month;
}

export function formatDateRange(dateRange: string): string {
  const [start, end] = dateRange.split(' - ');
  
  const parseDate = (date: string) => {
    const [month, year] = date.split(' ');
    return { month: abbreviateMonth(month), year };
  };

  const startDate = parseDate(start);
  const endDate = end.toLowerCase() === 'present' 
    ? { month: 'Present', year: 'Present' }
    : parseDate(end);

  if (endDate.year === 'Present') {
    return `${startDate.year} - Present`;
  } else if (startDate.year === endDate.year) {
    return `${startDate.month} - ${endDate.month} ${startDate.year}`;
  } else {
    return `${startDate.year} - ${endDate.year}`;
  }
};

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const [month, year] = formattedDate.split(' ');

  return `${abbreviateMonth(month)} ${year}`;
};

export function getOnlyYear(dateStr: string): string {
  const date = new Date(dateStr);
  return date.getFullYear().toString();
};