// Date Utilities

// Format date as YYYY-MM-DD
export function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toISOString().split('T')[0];
}

// Add days to a date
export function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

// Check if two dates are the same day
export function isSameDay(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
}

// Parse ISO date string to Date
export function parseISODate(isoString) {
  return new Date(isoString);
}

// Get week number of the year
export function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}

// Helper function to format date for German locale
export function formatDateForGerman(dateString) {
  if (!dateString) {
    // Return today's date if no date provided
    return new Date().toISOString().split('T')[0];
  }
  
  // If it's already in YYYY-MM-DD format, return as is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return dateString;
  }
  
  // Try to parse and format the date
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // If parsing fails, return today's date
      return new Date().toISOString().split('T')[0];
    }
    return date.toISOString().split('T')[0];
  } catch (error) {
    // If any error occurs, return today's date
    return new Date().toISOString().split('T')[0];
  }
}
