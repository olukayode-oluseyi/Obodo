/**
 * Formats a date string from "YYYY-MM-DD HH:mm:ss" to "DD MMM. YYYY at H:MM AM/PM"
 * @param dateString - Date string in format "YYYY-MM-DD HH:mm:ss"
 * @returns Formatted date string like "03 Sep. 2021 at 3:00 PM"
 */
export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = date.getDate().toString().padStart(2, '0');
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return `${day} ${month}. ${year} at ${hours}:${minutes} ${ampm}`;
};

