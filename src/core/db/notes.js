/**
 * Plant Notes Database Operations
 * Handles all plant note CRUD operations
 */

import { getDB } from './connection.js';

/**
 * Add a note to a specific planting
 * @param {number} plantingId - ID of the planting
 * @param {string} note - Note content
 * @returns {Promise<number>} Note ID
 */
export async function addPlantNote(plantingId, note) {
  const db = await getDB();
  return db.add('plantNotes', {
    plantingId,
    date: new Date().toISOString(),
    note
  });
}

/**
 * Get all notes for a specific planting
 * @param {number} plantingId - ID of the planting
 * @returns {Promise<Array>} Array of notes
 */
export async function getPlantNotes(plantingId) {
  const db = await getDB();
  return db.getAllFromIndex('plantNotes', 'plantingId', plantingId);
}

/**
 * Update an existing plant note
 * @param {number} noteId - ID of the note to update
 * @param {string} newNote - New note content
 * @returns {Promise<void>}
 */
export async function updatePlantNote(noteId, newNote) {
  const db = await getDB();
  const tx = db.transaction('plantNotes', 'readwrite');
  const note = await tx.store.get(noteId);
  
  if (note) {
    note.note = newNote;
    note.lastModified = new Date().toISOString();
    await tx.store.put(note);
  }
  
  return tx.done;
}

/**
 * Delete a plant note
 * @param {number} noteId - ID of the note to delete
 * @returns {Promise<void>}
 */
export async function deletePlantNote(noteId) {
  const db = await getDB();
  return db.delete('plantNotes', noteId);
}

/**
 * Get all notes for a specific planting with date range filter
 * @param {number} plantingId - ID of the planting
 * @param {string} startDate - Start date (ISO string)
 * @param {string} endDate - End date (ISO string)
 * @returns {Promise<Array>} Filtered array of notes
 */
export async function getPlantNotesByDateRange(plantingId, startDate, endDate) {
  const db = await getDB();
  const allNotes = await db.getAllFromIndex('plantNotes', 'plantingId', plantingId);
  
  return allNotes.filter(note => {
    const noteDate = new Date(note.date);
    return noteDate >= new Date(startDate) && noteDate <= new Date(endDate);
  });
}

/**
 * Delete all notes for a specific planting
 * Used when deleting a planting
 * @param {number} plantingId - ID of the planting
 * @returns {Promise<number>} Number of notes deleted
 */
export async function deleteAllPlantNotes(plantingId) {
  const db = await getDB();
  
  // Check if plantNotes store exists (for backward compatibility)
  if (!db.objectStoreNames.contains('plantNotes')) {
    return 0;
  }
  
  try {
    const tx = db.transaction('plantNotes', 'readwrite');
    const allNotes = await tx.store.getAll();
    const plantNotes = allNotes.filter(note => note.plantingId === plantingId);
    
    for (const note of plantNotes) {
      await tx.store.delete(note.id);
    }
    
    await tx.done;
    return plantNotes.length;
    
  } catch (error) {
    console.warn('Could not delete plant notes:', error);
    return 0;
  }
}

export default {
  addPlantNote,
  getPlantNotes,
  updatePlantNote,
  deletePlantNote,
  getPlantNotesByDateRange,
  deleteAllPlantNotes
}; 