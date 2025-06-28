# TODO: Google Calendar Sync – Best UI/UX

**Goal:**
Seamless, language-aware synchronization between local and Google calendars. The user should never have to manually set up or match calendars. All names, categories, and events are always in sync and in the correct language. Maximum clarity, zero confusion.

## Steps

### 1. Backend/Logic
- [ ] Auto-detect Google Calendars on login (fetch all user calendars)
- [ ] Detect existing gardening calendars in all supported languages
- [ ] For each local calendar (by technical category !SummaryNAME!, not name):
  - [ ] Try to find a matching Google calendar (regardless of language)
  - [ ] If found, link it to the local calendar
  - [ ] If a matching Google calendar exists but the name or emoji does not match the current language/locale, rename it
  - [ ] If no matching Google calendar exists for a local category, create a new Google calendar with the correct name, emoji, and description (in the current language)
- [ ] If the user changes organization (e.g. from "areas" to "single") and some Google calendars are no longer needed, offer to delete or archive them (with user confirmation)
- [ ] On language change, automatically update all linked Google calendar names to match the new language

### 2. Event Sync Logic
- [ ] When exporting events, always write to the correct Google calendar by category
- [ ] Ensure event titles and descriptions are in the current language
- [ ] When importing from Google, map events to the correct local calendar by category (not by name)
- [ ] Translate event titles/descriptions if possible

### 3. UI/UX
- [ ] Remove all manual setup wizard UI, options, and event listeners (GoogleCalendarWizard.js, GoogleCalendarSetupModal.js)
- [ ] Remove/shorten all wizard/setup-related help content (GoogleDetailedHelp.js)
- [ ] Keep and improve Google login, connection status, sync/export/import buttons, sync settings, logout
- [ ] Add clear status/notifications for calendar sync, renaming, creation, and errors
- [ ] Always display calendar names in the user's current language
- [ ] Show a simple overview of linked Google calendars and their categories (optional)

---

## Google Calendar UI Refactoring Plan

**Goal:** Remove the manual setup wizard and migrate to fully automatic, category-based Google Calendar sync. Simplify the UI for best user experience.

### GoogleCalendarWizard.js
- [ ] Remove all wizard UI, setup options, manual calendar selection, duplicate cleanup modals, and related event listeners
- [ ] Keep utility functions for calendar icons/status if needed
- [ ] Add helper functions for automatic calendar detection, renaming, creation, and deletion

### GoogleCalendarSetupModal.js
- [ ] Remove wizard rendering and event listeners for manual setup
- [ ] Keep Google login, connection status, sync/export/import buttons, sync settings, logout
- [ ] Add automatic calendar matching/renaming/creation logic on login and language change. Show status/notifications for all automatic actions

### GoogleDetailedHelp.js
- [ ] Remove/shorten all wizard/setup-related help content
- [ ] Keep only the Google API Client ID setup and troubleshooting instructions

**Result:**
- No more manual calendar setup or wizard.
- All Google calendar matching, naming, and syncing is automatic and language-aware.
- UI is focused on connection status, sync actions, and clear notifications.
