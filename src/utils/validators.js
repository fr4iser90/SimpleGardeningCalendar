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

// Validate template data
export function validateTemplate(templateData) {
  if (!templateData || typeof templateData !== 'object') {
    return { isValid: false, error: 'Template data is required' };
  }
  
  if (!templateData.name || typeof templateData.name !== 'string') {
    return { isValid: false, error: 'Template name is required' };
  }
  
  if (!templateData.category || typeof templateData.category !== 'string') {
    return { isValid: false, error: 'Template category is required' };
  }
  
  if (!templateData.tasks || !Array.isArray(templateData.tasks)) {
    return { isValid: false, error: 'Template tasks array is required' };
  }
  
  for (const task of templateData.tasks) {
    if (!task.title || !task.date || !task.type) {
      return { isValid: false, error: 'Each task must have title, date, and type' };
    }
  }
  
  return { isValid: true };
}
