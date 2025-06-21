// Validators

// Validate planting date (stub, muss ggf. angepasst werden)
export function validatePlantingDate(plantType, environment, date, region) {
  // Hier kann die echte Logik aus PlantService/db übernommen werden
  if (!date) return { valid: false, message: 'No date provided' };
  // Beispiel: Indoor immer gültig
  if (environment === 'indoor') return { valid: true, message: 'Indoor growing - any time suitable' };
  // Beispiel: Outdoor nur März bis Juli
  const month = new Date(date).getMonth() + 1;
  if (environment === 'outdoor' && (month < 3 || month > 7)) {
    return { valid: false, message: 'Outdoor planting only recommended March to July' };
  }
  return { valid: true, message: 'No seasonal restrictions' };
}

// Validate event data
export function validateEventData(event) {
  if (!event.title || !event.date || !event.type) {
    return { valid: false, message: 'Missing required event fields' };
  }
  return { valid: true };
}

// Validate email
export function validateEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}
