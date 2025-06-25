## 🧠 BRAINSTORMING SESSION! 

### 1. **Aktuelle Sprachen** 🌍
Wir haben: **DE, EN, ES, FR, IT** - also 5 Sprachen!

### 2. **Cannabis in DE** 🇩🇪
Du hast recht! In DE ist Cannabis für medizinische Zwecke erlaubt und seit 2024 auch für den Eigenanbau (bis 3 Pflanzen). Also sollte `showCannabis: true` sein!

### 3. **DB-Struktur Analyse** ��

**Aktuell:**
```
plants/
├── cannabis/     ← Diese müssen wir umstrukturieren!
├── vegetables/
├── herbs/
├── fruits/
└── fruit-trees/
```

**Neue Struktur:**
```
plants/
├── vegetables/   
├── herbs/ ← Cannabis-Pflanzen hier rein als Tag
├── fruits/
├── fruit-trees/
└── flowers/      ← Neue Kategorie
```

### 4. **Was müssen wir ändern?** 🔄

#### A) **Categories.js** 
- ✅ Cannabis aus PLANT_CATEGORIES entfernen
- ✅ PLANT_TAGS hinzufügen
- ✅ COUNTRY_SETTINGS korrigieren (DE = true)

#### B) **DB-Struktur**
- 🔄 Cannabis-Pflanzen in `herbs/` verschieben
- 🔄 Cannabis-Tag zu den Pflanzen hinzufügen
- 🔄 Neue `flowers/` Kategorie erstellen

#### C) **Calendar Wizard**
- 🔄 Kategorien-Filter anpassen
- 🔄 Cannabis als optionalen Filter hinzufügen

### 5. **Migrationsplan** 📋

#### Phase 1: Categories & Settings
```javascript
// Neue COUNTRY_SETTINGS
export const COUNTRY_SETTINGS = {
  'DE': { showCannabis: true },   // ✅ Korrigiert!
  'AT': { showCannabis: false },
  'CH': { showCannabis: false },
  'NL': { showCannabis: true },
  'CA': { showCannabis: true },
  'US': { showCannabis: false },  // Je nach Bundesstaat
  'ES': { showCannabis: false },
  'FR': { showCannabis: false },
  'IT': { showCannabis: false }
};
```

#### Phase 2: DB-Migration
```javascript
// Cannabis-Pflanzen werden zu:
{
  name: "Cannabis Indica",
  category: "herbs",  // ← Neue Kategorie
  tags: ["Cannabis", "Perennial"], // ← Neue Tags
  // ... rest der Daten
}
```

#### Phase 3: Calendar Wizard Anpassung
```javascript
// Filter-Optionen erweitern:
const filterOptions = [
  { key: 'category', label: 'Category' },
  { key: 'tags', label: 'Tags' },      // ← Neue Filter-Option
  { key: 'season', label: 'Season' }
];
```

### 6. **Vorteile der neuen Struktur** ✨

1. **Flexibler**: Pflanzen können mehrere Tags haben
2. **Länderkonform**: Cannabis nur wo erlaubt
3. **Erweiterbar**: Neue Tags einfach hinzufügbar
4. **Benutzerfreundlich**: Klare Garten-Kategorien

### 7. **Fragen für dich** 🤔

1. **Soll Cannabis komplett in `herbs/` oder eigene Unterkategorie?**
2. **Welche anderen Pflanzen sollen Tags bekommen?** (z.B. "Root" für Karotten/Kartoffeln)
3. **Soll der Calendar Wizard die neuen Tags unterstützen?**
4. **Sollen wir eine Migrationsfunktion schreiben für bestehende Daten?**

### 8. **Nächste Schritte** 🚀

1. ✅ Categories.js mit neuen PLANT_TAGS
2. 🔄 Cannabis-Pflanzen migrieren
3. �� Calendar Wizard anpassen
4. 🔄 Tests schreiben

**Was denkst du? Sollen wir mit Phase 1 (Categories.js) anfangen?** 🎯
