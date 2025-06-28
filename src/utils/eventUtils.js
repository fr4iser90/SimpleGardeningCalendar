// Event Utilities

// Get color for event type
export function getEventColor(type) {
  const colors = {
    planting: '#10B981', // green
    watering: '#3B82F6', // blue
    fertilizing: '#8B5CF6', // purple
    harvesting: '#F59E0B', // amber
    maintenance: '#EF4444', // red
    pruning: '#EC4899', // pink
    transplanting: '#06B6D4', // cyan
    pest_control: '#84CC16', // lime
    default: '#6B7280' // gray
  };
  return colors[type] || colors.default;
}

// Get emoji/icon for event type
export function getEventTypeIcon(type) {
  const icons = {
    planting: '🌱',
    watering: '💧',
    fertilizing: '🌿',
    harvesting: '🌾',
    maintenance: '🔧',
    pruning: '✂️',
    transplanting: '🔄',
    pest_control: '🐛',
    default: '📅'
  };
  return icons[type] || icons.default;
}

// Check if event is a gardening event (Google Calendar sync)
export function isGardeningEvent(event) {
  const description = event.description || '';
  const summary = event.summary || event.title || '';
  if (description.includes('[GardeningCalendar:')) return true;
  const gardeningIndicators = ['🌱', '💧', '🌿', '🌾', '🔧', 'plant', 'water', 'fertiliz', 'harvest', 'garden'];
  return gardeningIndicators.some(ind => summary.toLowerCase().includes(ind) || description.toLowerCase().includes(ind));
}

// Filter events by type
export function filterEventsByType(events, type) {
  return events.filter(event => event.type === type);
}

// Konvertiert ein lokales Event ins Google Calendar Format
export function convertToGoogleEvent(eventData) {
  const startDate = new Date(eventData.date);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 1);
  
  const categoryEmojis = {
    planting: '🌱',
    watering: '💧',
    fertilizing: '🌿',
    harvesting: '🌾',
    maintenance: '🔧'
  };
  
  const title = eventData.title;
  
  // Add metadata
  const metadata = {
    type: eventData.type,
    localId: eventData.id,
    plantingId: eventData.plantingId,
    syncedAt: new Date().toISOString()
  };
  
  const description = `${eventData.description || ''}\n\n[GardeningCalendar:${JSON.stringify(metadata)}]`.trim();
  
  return {
    summary: title,
    description: description,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  };
}

// Konvertiert ein Google Calendar Event ins lokale Format
export function convertFromGoogleEvent(googleEvent) {
  const summary = googleEvent.summary || '';
  const description = googleEvent.description || '';
  
  // Extract metadata
  const metadataMatch = description.match(/\[GardeningCalendar:([^\]]+)\]/);
  let metadata = {};
  if (metadataMatch) {
    try {
      metadata = JSON.parse(metadataMatch[1]);
    } catch (error) {
      console.warn('Failed to parse event metadata:', error);
    }
  }
  
  // Determine event type
  let type = metadata.type || 'maintenance';
  if (summary.includes('🌱')) type = 'planting';
  else if (summary.includes('💧')) type = 'watering';
  else if (summary.includes('🌿')) type = 'fertilizing';
  else if (summary.includes('🌾')) type = 'harvesting';
  
  const startDate = googleEvent.start?.date || googleEvent.start?.dateTime;
  const date = startDate ? new Date(startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
  
  const title = summary.replace(/^[🌱💧🌿🌾🔧📅]\s*/, '');
  const cleanDescription = description.replace(/\[GardeningCalendar:[^\]]+\]/, '').trim();
  
  return {
    id: metadata.localId || null,
    title,
    date,
    type,
    description: cleanDescription,
    plantingId: metadata.plantingId || null,
    googleEventId: googleEvent.id,
    lastModified: googleEvent.updated,
    source: 'google'
  };
}
