/**
 * File Utils - File handling, drag & drop, validation
 * Handles all file-related operations for import/export
 */

// File size limits (in bytes)
export const FILE_SIZE_LIMITS = {
  JSON: 50 * 1024 * 1024,  // 50MB
  CSV: 10 * 1024 * 1024,   // 10MB
  ICAL: 5 * 1024 * 1024,   // 5MB
  ZIP: 100 * 1024 * 1024   // 100MB
};

// Supported file formats
export const SUPPORTED_FORMATS = {
  JSON: ['json'],
  CSV: ['csv'],
  ICAL: ['ics', 'ical'],
  ZIP: ['zip']
};

/**
 * Detect file format from file extension and content
 */
export function detectFileFormat(file) {
  const extension = file.name.split('.').pop().toLowerCase();
  
  switch (extension) {
    case 'json':
      return { format: 'JSON', confidence: 'high' };
    case 'ics':
      return { format: 'ICAL', confidence: 'high' };
    case 'csv':
      return { format: 'CSV', confidence: 'high' };
    default:
      // Try to detect by content if extension is unknown
      return { format: 'UNKNOWN', confidence: 'low' };
  }
}

/**
 * Validate file before processing
 */
export function validateFile(file) {
  const format = detectFileFormat(file);
  
  if (!format) {
    throw new Error('Unsupported file format');
  }
  
  const maxSize = FILE_SIZE_LIMITS[format];
  if (file.size > maxSize) {
    throw new Error(`File too large. Maximum size: ${Math.round(maxSize / 1024 / 1024)}MB`);
  }
  
  return { format, size: file.size };
}

/**
 * Read file as text
 */
export function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = e => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
}

/**
 * Download data as file
 */
export function downloadFile(data, filename, mimeType = 'application/octet-stream') {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

/**
 * Setup drag and drop for an element
 */
export function setupDragAndDrop(element, onFileDrop, onDragOver = null, onDragLeave = null) {
  element.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    element.classList.add('drag-over');
    if (onDragOver) onDragOver(e);
  });
  
  element.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    element.classList.remove('drag-over');
    if (onDragLeave) onDragLeave(e);
  });
  
  element.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    element.classList.remove('drag-over');
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFileDrop(files[0]);
    }
  });
}

/**
 * Create file input for manual file selection
 */
export function createFileInput(accept = '*/*', onFileSelect) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = accept;
  input.style.display = 'none';
  
  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  });
  
  document.body.appendChild(input);
  return input;
} 