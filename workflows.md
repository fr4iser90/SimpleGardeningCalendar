# Simple Gardening Calendar – User Workflows

## 1. **Erster Start / Onboarding**
- User öffnet die App zum ersten Mal.
- **Single Local Calendar** („Garten Kalender“) wird automatisch und sprachabhängig angelegt.
- **Der Local Calendar Wizard erscheint NICHT automatisch.**
- User kann später über „Kalender verwalten/ändern“ den Wizard öffnen und weitere Kalender hinzufügen oder umstellen.

---

## 1a. **Standard-Kalender & Namensgebung**
- **Initial** wird immer der Single Calendar automatisch angelegt, Name entspricht der aktuellen Sprache (z.B. "Garten Kalender", "Garden Calendar").
- **Der Wizard erscheint nur**, wenn der User explizit auf "Kalender verwalten/ändern" klickt.
- **Beim Language-Switch:**
  - Standard- und Bereichs-Kalendernamen werden automatisch angepasst, solange der User sie nicht manuell geändert hat.
  - Custom-Kalendernamen (Option 3 im Wizard) bleiben immer wie vom User eingegeben.
- **Optionen im Wizard:**
  - **Option 1 (Single):** Name ist sprachabhängig.
  - **Option 2 (Bereiche):** Namen sind sprachabhängig, werden beim Language-Switch angepasst (außer User hat sie geändert).
  - **Option 3 (Custom):** Namen sind immer user-definiert und bleiben unverändert.

---

## 2. **Tägliche Nutzung (Lokal)**
- User arbeitet **offline und lokal**:
  - Fügt Pflanzen, Termine, Notizen hinzu.
  - Alles wird **nur im Browser** gespeichert (IndexedDB).
  - Keine Anmeldung oder Cloud nötig.

---

## 3. **Export & Import (Backup, Gerätewechsel)**
- User kann **jederzeit**:
  - **Exportieren** (Daten als Datei sichern)
  - **Importieren** (Export-Datei wieder einspielen, z.B. auf neuem Gerät)

---

## 4. **Google Calendar Integration (Optional)**
- User kann **jederzeit Google verbinden**:
  - Klick auf "Google Calendar verbinden"
  - App prüft, ob passende Google-Kalender existieren
    - Falls nicht: werden sie automatisch angelegt (z.B. "Garten Kalender")
  - User sieht Übersicht: "Diese lokalen Kalender werden mit Google synchronisiert"
  - **Sync-Button**: User kann Daten hochladen (Export zu Google) oder runterladen (Import von Google)

---

## 5. **Sync-Optionen**
- **Standard:**
  - **Nur Export (lokal → Google)**
  - User kann seine lokalen Daten in Google sichern (Backup, Handy-Integration)
- **Optional:**
  - **Import von Google** (z.B. für Gerätewechsel oder wenn User auf anderem Gerät mit Google gearbeitet hat)
- **Bidirektional (beide Richtungen, automatisch):**
  - **Nur für Power-User** (kann zu Konflikten führen, daher nicht Standard)

---

## 6. **Empfohlene UX-Philosophie**
- **Lokal ist Standard**: Schnell, offline, datenschutzfreundlich
- **Google ist Add-on**: Für Backup, Gerätewechsel, Integration
- **Kein Zwang zur Cloud**: User entscheidet selbst
- **Einfacher Einstieg, flexibel für Fortgeschrittene**

---

## 7. **Zusätzliche Hinweise**
- User kann jederzeit zwischen Single- und Multi-Calendar wechseln
- Google-Integration braucht **keinen eigenen Wizard** – sie nutzt die lokalen Kalender als Basis
- Import von Google bleibt als Option für Gerätewechsel oder Datenwiederherstellung
