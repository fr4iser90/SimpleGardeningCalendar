# 📋 Import/Export Implementation Plan

## 🗂️ Neue Dateien (folgen deinem Pattern):

### 1. Services Layer 
```
src/services/
├── ImportExportService.js     # 🎯 Haupt-Service für alle Formate
└── formats/                   # 📁 Format-spezifische Handler
    ├── JsonHandler.js         # JSON Import/Export
    ├── ICalHandler.js         # iCal (.ics) Import/Export  
    ├── CsvHandler.js          # CSV Import/Export
    └── PdfHandler.js          # PDF Export
```

### 2. Utils Layer
```
src/utils/
└── fileUtils.js              # 🔧 File handling, drag&drop, validation
```

### 3. Components Layer
```
src/components/modals/
├── ImportModal.js             # 📥 Import Dialog
└── ExportModal.js             # 📤 Export Dialog
```

## 🔗 Bestehende Dateien erweitern:

### CalendarActions.js (bestehend)
```javascript
// Nur 2 neue Buttons hinzufügen:
+ importBtn (öffnet ImportModal)
+ exportBtn (öffnet ExportModal)
```

### services/index.js (bestehend)
```javascript
// Export hinzufügen:
+ export * from './ImportExportService.js';
```

### 🌍 Translations erweitern (WICHTIG!):
```
src/core/i18n/translations/
├── de.js - + Import/Export Texte
├── en.js - + Import/Export Texte  
├── es.js - + Import/Export Texte
├── fr.js - + Import/Export Texte
└── it.js - + Import/Export Texte
```

## 🎯 Service Architecture (dein Pattern):

### ImportExportService.js (Main Service)
```javascript
// Central orchestrator - delegiert an Format-Handler
export class ImportExportService {
  static async importFile(file) { ... }
  static async exportData(format, data, options) { ... }
  static detectFileFormat(file) { ... }
  static async validateImportData(data) { ... }  // NEU
  static async mergeWithExisting(data) { ... }   // NEU
}
```

### Format Handlers (modularer Ansatz)
```javascript
// JsonHandler.js
export class JsonHandler {
  static async import(file) { ... }
  static async export(data) { ... }
  static validateSchema(data) { ... }    // NEU
}

// ICalHandler.js  
export class ICalHandler {
  static async import(file) { ... }
  static async export(data) { ... }
  static parseICalEvents(icalString) { ... }  // NEU
}
```

## 🎨 UI Integration (Button Position):

### 📍 **Button Position - PERFEKTE Lösung:**
**Im `calendar-controls` Bereich** (zwischen Header und Kalender)

**Warum HIER optimal:**
- ✅ **Gleiche Ebene** wie andere Kalender-Buttons 
- ✅ **Logisch gruppiert** mit Kalender-Aktionen
- ✅ **Immer sichtbar** wenn Kalender sichtbar ist
- ✅ **Folgt deinem Pattern** - alle Kalender-Buttons sind hier

### 🎯 **Neue Button-Reihenfolge:**
```
Erstellen: [+ Termin] [🌱 Pflanze] [📋 Gartenplan]
Verwalten: [🍃 Meine Pflanzen] [📥 Import] [📤 Export] 
Löschen:   [🗑️ Kalender leeren]
```

### CalendarActions.js - Code Update:
```javascript
// Nach Line 43 (nach clearCalendarBtn):
const importBtn = document.createElement('button');
importBtn.innerHTML = '<i class="fas fa-file-import mr-2"></i>' + t('btn.import_calendar');
importBtn.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
importBtn.onclick = () => showImportModal();

const exportBtn = document.createElement('button');
exportBtn.innerHTML = '<i class="fas fa-file-export mr-2"></i>' + t('btn.export_calendar');
exportBtn.className = 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600';
exportBtn.onclick = () => showExportModal();

// Buttons zwischen "Meine Pflanzen" und "Kalender leeren" hinzufügen
buttonGroup.appendChild(addEventBtn);
buttonGroup.appendChild(addPlantingBtn);
buttonGroup.appendChild(templateImportBtn);
buttonGroup.appendChild(myPlantsBtn);
buttonGroup.appendChild(importBtn);        // NEU
buttonGroup.appendChild(exportBtn);        // NEU
buttonGroup.appendChild(clearCalendarBtn);
```

## 📤📥 Button Features:

### Import Button:
- **Unterstützt ALLES**: JSON, iCal, CSV
- **Drag & Drop** Support
- **Automatische Dateierkennung**
- **Konflikt-Handling** (Events existieren bereits?)
- **Vorschau** vor Import
- **Progress Indicators** für große Dateien
- **Rollback** bei Fehlern

### Export Button - "Export as..." Dropdown:
```
[Export Calendar ▼]
├── 📄 JSON (für Re-Import)
├── 📅 iCal (.ics) (für andere Kalender)
├── 📊 CSV (für Excel)
├── 📋 PDF (zum Ausdrucken)
└── 🗜️ Alle Formate als ZIP
```

### Mehrere Kalender Support:
```
[Export Calendar ▼]
├── 🌱 Gemüsegarten 2024
├── 🌿 Kräutergarten 2024  
├── 🌸 Blumengarten 2024
├── ═══════════════════════
├── 📦 Alle Kalender einzeln
└── 🗜️ Alle als ZIP-Archiv
```

## 🌍 Internationalization (FEHLT IM URSPRUNGSPLAN!):

### Neue Translation Keys benötigt:
```javascript
// Buttons
'btn.import_calendar': 'Kalender importieren',
'btn.export_calendar': 'Kalender exportieren',

// Import Modal
'import.modal.title': 'Kalender importieren',
'import.drag_drop': 'Datei hier hinziehen oder klicken',
'import.supported_formats': 'Unterstützte Formate: JSON, iCal (.ics), CSV',
'import.file_detected': 'Datei erkannt: {format}',
'import.events_found': '{count} Events gefunden',
'import.conflicts.title': 'Konflikte erkannt',
'import.conflicts.description': '{count} Events existieren bereits',
'import.conflict.skip': 'Überspringen',
'import.conflict.overwrite': 'Überschreiben', 
'import.conflict.duplicate': 'Duplizieren',
'import.preview.title': 'Import Vorschau',
'import.confirm': 'Import bestätigen',

// Export Modal  
'export.modal.title': 'Kalender exportieren',
'export.format.label': 'Format auswählen:',
'export.calendar.label': 'Kalender auswählen:',
'export.date_range.label': 'Zeitraum:',
'export.date_range.all': 'Alle Events',
'export.date_range.year': 'Dieses Jahr',
'export.date_range.month': 'Dieser Monat',
'export.date_range.custom': 'Benutzerdefiniert',
'export.include.plants': 'Pflanzen-Daten einschließen',
'export.include.notes': 'Notizen einschließen',
'export.download': 'Download starten',

// Error Messages
'import.error.invalid_file': 'Ungültige Datei',
'import.error.unsupported_format': 'Format nicht unterstützt',
'import.error.corrupted_data': 'Beschädigte Daten',
'import.error.database': 'Datenbank-Fehler beim Import',
'export.error.no_data': 'Keine Daten zum Exportieren',
'export.error.generation_failed': 'Export-Generierung fehlgeschlagen',

// Success Messages
'import.success': '{count} Events erfolgreich importiert',
'export.success': 'Export erfolgreich erstellt',

// Notifications
'import.notification.start': 'Import gestartet...',
'import.notification.progress': 'Importiere {current}/{total} Events...',
'export.notification.start': 'Export wird erstellt...',
'export.notification.ready': 'Export bereit zum Download'
```

## 📦 Dependencies (minimal):
- **iCal**: Native JS (kein extra Package)
- **CSV**: Native JS  
- **PDF**: jsPDF (nur wenn PDF gewünscht)
- **Drag&Drop**: Native HTML5
- **ZIP**: JSZip (für Multi-Export)

## 🔄 Integration Points:
1. **ImportModal** → **ImportExportService** → **Format Handlers**
2. **ExportModal** → **ImportExportService** → **Format Handlers**  
3. **CalendarActions** → **Modals** (wie bei deinen anderen Buttons)
4. **Notifications** → **showNotification** (bestehend)
5. **i18n** → **t()** function (bestehend)
6. **Database** → **openDB, events, plantings** (bestehend)

## 🗄️ Database Schema Überlegungen (FEHLT!):

### Metadaten für Import/Export:
```javascript
// Erweitere bestehende Event-Objekte:
{
  // ... bestehende Felder
  importSource: 'manual|json|ical|csv',     // NEU
  importTimestamp: Date,                    // NEU  
  originalId: String,                       // NEU - für Re-Import
  exportable: Boolean,                      // NEU - für selektiven Export
  lastModified: Date                        // NEU - für Konflikt-Resolution
}
```

### Import-History Tracking:
```javascript
// Neue IndexedDB Store: 'importHistory'
{
  id: Number,
  filename: String,
  format: String,
  timestamp: Date,
  eventsImported: Number,
  eventsSkipped: Number,
  eventIds: Array                          // Für Rollback
}
```

## 🚨 Error Handling Pattern (FEHLT!):

### Robuste Fehlerbehandlung:
```javascript
// Folge bestehendem Pattern in deinem Code:
try {
  const result = await ImportExportService.importFile(file);
  showNotification(t('import.success', { count: result.imported }), 'success');
} catch (error) {
  console.error('Import failed:', error);
  showNotification(t('import.error.database'), 'error');
}
```

### Validation Layer:
```javascript
// Vor Database-Schreibvorgängen:
export function validateEventData(eventData) {
  if (!eventData.title || !eventData.date) {
    throw new Error('Required fields missing');
  }
  if (!isValidDate(eventData.date)) {
    throw new Error('Invalid date format');
  }
  return true;
}
```

## ✅ Implementation Reihenfolge:

### Phase 1: Foundation
- [ ] `fileUtils.js` - File handling utilities
- [ ] **Translation Keys** - Alle i18n Texte hinzufügen
- [ ] `ImportExportService.js` - Main service
- [ ] `JsonHandler.js` - Start mit JSON (einfachster Fall)

### Phase 2: UI
- [ ] `ImportModal.js` - Import Dialog 
- [ ] `ExportModal.js` - Export Dialog
- [ ] `CalendarActions.js` - Buttons hinzufügen

### Phase 3: Formats
- [ ] `ICalHandler.js` - iCal Support (.ics)
- [ ] `CsvHandler.js` - CSV Support
- [ ] `PdfHandler.js` - PDF Export (optional)

### Phase 4: Advanced
- [ ] Multi-Calendar Support
- [ ] ZIP Export
- [ ] Conflict Resolution
- [ ] Progress Indicators
- [ ] **Database Schema** erweitern
- [ ] **Import History** implementieren

### Phase 5: Polish
- [ ] **Error Handling** vervollständigen
- [ ] **Notifications** Integration
- [ ] **Accessibility** (Keyboard navigation)
- [ ] **Testing** mit verschiedenen Dateiformaten

## 📊 Datenpersistenz Verbesserungen:

### Zusätzliche Backup-Strategien:
1. **Automatische JSON-Backups**
   - Täglich automatische Downloads
   - Speichert in Downloads-Ordner als Fallback
   - **localStorage** Setting: 'autoBackup.enabled'

2. **Browser-übergreifende Sync**
   - QR-Code-basierte Übertragung
   - Cloud-Speicher Integration (Dropbox, OneDrive)
   - **WebRTC** für Peer-to-Peer Transfer

3. **PWA Features** 
   - Offline-first Architektur
   - Service Worker für bessere Persistenz
   - **Background Sync** für failed exports

## 🔧 Technical Considerations (FEHLT!):

### File Size Limits:
- **Browser Limits**: ~2GB für Blob/File API
- **Practical Limits**: 50MB für JSON, 100MB für ZIP
- **Progress Tracking**: Für Dateien >5MB

### Memory Management:
- **Streaming**: Für große CSV/iCal Dateien
- **Chunked Processing**: Events in 1000er Batches
- **Cleanup**: Temporary Blobs nach Download

### Performance:
- **Web Workers**: Für schwere Parsing-Operations
- **Lazy Loading**: Format-Handler dynamisch laden
- **Caching**: Parsed Templates für Re-Use

**Total: 7 neue Dateien + 5 Translation-Dateien erweitert + 2 bestehende erweitert**
**Folgt komplett deinem bestehenden Pattern ohne Bloating**
**✅ Vollständige i18n Integration**
**✅ Robuste Error Handling**
**✅ Database Schema berücksichtigt**
**✅ Performance optimiert**
