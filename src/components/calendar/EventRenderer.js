import { t } from '../../core/i18n/index.js';
import { getEventTypeIcon } from '../../utils/eventUtils.js';

/**
 * EventRenderer - Handles the display of events in the calendar
 * Extracted from AddEventModal.js and EventDetails.js
 */

export function renderEventContent(event) {
  const { title, type, description, plantType, customName, location } = event;
  
  // Determine event type and icon
  const eventIcon = getEventTypeIcon(type);
  const eventType = type || 'custom';
  
  // Create event content based on type
  if (eventType === 'planting') {
    return renderPlantingEvent(event);
  } else {
    return renderCustomEvent(event);
  }
}

function renderPlantingEvent(event) {
  const { plantType, customName, location, phase } = event;
  
  const plantName = customName || plantType || 'Unknown Plant';
  const locationText = location ? `📍 ${location}` : '';
  const phaseText = phase ? `🌱 ${phase}` : '';
  
  return `
    <div class="planting-event">
      <div class="flex items-center space-x-1">
        <span class="text-green-600">🌱</span>
        <span class="font-medium">${plantName}</span>
      </div>
      ${locationText ? `<div class="text-xs text-gray-600">${locationText}</div>` : ''}
      ${phaseText ? `<div class="text-xs text-blue-600">${phaseText}</div>` : ''}
    </div>
  `;
}

function renderCustomEvent(event) {
  const { title, type, description } = event;
  const eventIcon = getEventTypeIcon(type);
  
  return `
    <div class="custom-event">
      <div class="flex items-center space-x-1">
        <span>${eventIcon}</span>
        <span class="font-medium">${title}</span>
      </div>
      ${description ? `<div class="text-xs text-gray-600">${description}</div>` : ''}
    </div>
  `;
}

export function renderEventTooltip(event) {
  const { title, type, description, plantType, customName, location, date } = event;
  
  let tooltipContent = '';
  
  if (type === 'planting') {
    const plantName = customName || plantType || 'Unknown Plant';
    tooltipContent = `
      <div class="planting-tooltip">
        <div class="font-bold">🌱 ${plantName}</div>
        ${location ? `<div>📍 ${location}</div>` : ''}
        ${description ? `<div class="text-sm">${description}</div>` : ''}
      </div>
    `;
  } else {
    tooltipContent = `
      <div class="custom-tooltip">
        <div class="font-bold">${getEventTypeIcon(type)} ${title}</div>
        ${description ? `<div class="text-sm">${description}</div>` : ''}
      </div>
    `;
  }
  
  return tooltipContent;
}

export function getEventColor(event) {
  const { type } = event;
  
  switch (type) {
    case 'planting':
      return '#10B981'; // green-500
    case 'maintenance':
      return '#F59E0B'; // amber-500
    case 'watering':
      return '#3B82F6'; // blue-500
    case 'fertilizing':
      return '#8B5CF6'; // violet-500
    case 'harvest':
      return '#EF4444'; // red-500
    default:
      return '#6B7280'; // gray-500
  }
}

export function getEventTextColor(event) {
  const { type } = event;
  
  switch (type) {
    case 'planting':
      return '#FFFFFF'; // white
    case 'maintenance':
      return '#FFFFFF'; // white
    case 'watering':
      return '#FFFFFF'; // white
    case 'fertilizing':
      return '#FFFFFF'; // white
    case 'harvest':
      return '#FFFFFF'; // white
    default:
      return '#FFFFFF'; // white
  }
}

export function formatEventTitle(event) {
  const { title, plantType, customName, type } = event;
  
  if (type === 'planting') {
    return customName || plantType || t('event.planting.default_title');
  }
  
  return title || t('event.custom.default_title');
}

export function getEventPriority(event) {
  const { type, phase } = event;
  
  // Planting events have higher priority
  if (type === 'planting') {
    // Harvest phase has highest priority
    if (phase === 'harvest') return 1;
    // Flowering phase has high priority
    if (phase === 'flowering') return 2;
    // Vegetative phase has medium priority
    if (phase === 'vegetative') return 3;
    // Germination phase has lower priority
    if (phase === 'germination') return 4;
    return 5;
  }
  
  // Custom events have lower priority
  switch (type) {
    case 'maintenance':
      return 6;
    case 'watering':
      return 7;
    case 'fertilizing':
      return 8;
    default:
      return 9;
  }
}
