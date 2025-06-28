# TODO: Google Calendar Sync – Best UI/UX

**Goal:**
Seamless, language-aware synchronization between local and Google calendars. The user should never have to manually set up or match calendars. All names, categories, and events are always in sync and in the correct language. Maximum clarity, zero confusion.

## Steps

### 1. Backend/Logic
- [x] Auto-detect Google Calendars on login (fetch all user calendars)
- [x] Detect existing gardening calendars in all supported languages
- [x] For each local calendar (by technical category !SummaryNAME!, not name):
  - [x] Try to find a matching Google calendar (regardless of language)
  - [x] If found, link it to the local calendar
  - [x] If a matching Google calendar exists but the name or emoji does not match the current language/locale, rename it
  - [x] If no matching Google calendar exists for a local category, create a new Google calendar with the correct name, emoji, and description (in the current language)
- [x] If the user changes organization (e.g. from "areas" to "single") and some Google calendars are no longer needed, offer to delete or archive them (with user confirmation)
- [x] On language change, automatically update all linked Google calendar names to match the new language

### 2. Event Sync Logic
- [x] When exporting events, always write to the correct Google calendar by category
- [x] Ensure event titles and descriptions are in the current language
- [x] When importing from Google, map events to the correct local calendar by category (not by name)
- [ ] Translate event titles/descriptions if possible

### 3. UI/UX
- [x] Remove all manual setup wizard UI, options, and event listeners (GoogleCalendarWizard.js, GoogleCalendarSetupModal.js)
- [x] Remove/shorten all wizard/setup-related help content (GoogleDetailedHelp.js)
- [x] Keep and improve Google login, connection status, sync/export/import buttons, sync settings, logout
- [x] Add clear status/notifications for calendar sync, renaming, creation, and errors
- [x] Always display calendar names in the user's current language
- [ ] Show a simple overview of linked Google calendars and their categories (optional)

---

## Google Calendar UI Refactoring Plan

**Goal:** Remove the manual setup wizard and migrate to fully automatic, category-based Google Calendar sync. Simplify the UI for best user experience.

### GoogleCalendarWizard.js
- [x] Remove all wizard UI, setup options, manual calendar selection, duplicate cleanup modals, and related event listeners
- [x] Keep utility functions for calendar icons/status if needed
- [x] Add helper functions for automatic calendar detection, renaming, creation, and deletion

### GoogleCalendarSetupModal.js
- [x] Remove wizard rendering and event listeners for manual setup
- [x] Keep Google login, connection status, sync/export/import buttons, sync settings, logout
- [x] Add automatic calendar matching/renaming/creation logic on login and language change. Show status/notifications for all automatic actions

### GoogleDetailedHelp.js
- [x] Remove/shorten all wizard/setup-related help content
- [x] Keep only the Google API Client ID setup and troubleshooting instructions

**Result:**
- ✅ No more manual calendar setup or wizard.
- ✅ All Google calendar matching, naming, and syncing is automatic and language-aware.
- ✅ UI is focused on connection status, sync actions, and clear notifications.

## Implementation Status

**✅ COMPLETED:**
- Automatic calendar detection and matching
- Category-based calendar creation and renaming
- Language-aware calendar name updates
- Event export to correct calendars by category
- Removed all manual wizard UI
- Simplified setup modal with automatic detection
- Language change integration

**🔄 REMAINING:**
- Event title/description translation during import
- Optional calendar overview display
- Final testing and polish
