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
