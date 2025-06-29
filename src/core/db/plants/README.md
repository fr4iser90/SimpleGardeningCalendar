# Plant Database Model (Current State)

## Current Model

- The plant database consists of individual plant definitions (e.g., tomato, cucumber, basil), each as its own object/file.
- Each plant has attributes such as:
  - `name` (translation key)
  - `category` (e.g., category.vegetables, category.herbs)
  - `tags` (e.g., tag.annual, tag.photoperiod)
  - `environments` (e.g., indoor, outdoor, greenhouse with respective phases)
  - `phases` (growth phases with duration, description, care instructions)
  - `careTips` (care instructions like watering, fertilizing, light, temperature)
  - `commonProblems` (common problems including suggested solutions)
- Categories and tags are currently flat (e.g., "vegetables", "herbs", "annual", "photoperiod").
- There are no subcategories or varieties yet (e.g., "cherry tomato", "field cucumber", "salad cucumber").

## Planned Extension

- The goal is to make the database more granular in the future:
  - Introduction of **subcategories** (e.g., tomatoes → cherry tomatoes, beefsteak tomatoes, cocktail tomatoes)
  - Mapping of **varieties** (e.g., tomato → "San Marzano", "Roma", "Tigerella"; cucumber → "Marketmore", "Vorgebirgstraube")
  - Each variety should be able to have its own properties, care instructions, and possibly specific phases/problems.
  - The database structure should be extended so that a plant can contain multiple varieties/specializations.
- Currently, there is not enough time and data to implement this level of detail.

## Note

The current model is intentionally kept simple to cover a broad range of plants. The planned extension to subcategories and varieties is intended for the future, once more time and data are available.
