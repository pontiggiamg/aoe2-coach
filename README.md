# AoE2 Coach — Coaching ranked 1v1 (local)

App web **gratuita y 100% local** para coaching de *Age of Empires II: Definitive Edition* en ranked Random Map 1v1, orientada a Elo **1000–1100**. Interfaz en español.

Elegís **Mi civ**, **Rival** y **Mapa** (con búsqueda typeahead) y obtenés:

1. Apertura / build order  
2. Plan del mapa  
3. Vs rival  
4. Adaptaciones (arqueros, scouts, MAA, FC, torres, agua)  
5. Tips en partida (Feudal / Castle)  
6. Errores comunes en ~1k Elo  

Por defecto, **Mi civ = Búlgaros** (cobertura profunda: MAA, Blacksmith barato, Krepost, Konniks).

No inventa win rates numéricos: solo coaching cualitativo, con enlaces a fuentes.

## Requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado 20+)
- npm (viene con Node)

## Cómo correr

```bash
cd aoe2-coach
npm install
npm run dev
```

Abrí la URL que muestra Vite (por lo general `http://localhost:5173`).

### Build de producción

```bash
npm run build
npm run preview
```

## Cómo abrir en Windows

1. Instalá Node.js LTS desde https://nodejs.org/  
2. Abrí **PowerShell** o **Terminal** en la carpeta del proyecto (por ejemplo `C:\Users\...\aoe2-coach`).  
3. Ejecutá:

```powershell
npm install
npm run dev
```

4. En el navegador entrá a `http://localhost:5173`.  
5. Opcional: creá un acceso directo o un `.bat`:

```bat
@echo off
cd /d "%~dp0"
call npm run dev
pause
```

La app guarda las últimas selecciones y los **5 matchups recientes** en `localStorage` del navegador (no sube datos a ningún servidor).

## Cómo actualizar el pool de mapas

El pool ranked rota ~cada 2 semanas. Editá:

- `src/data/maps.ts` — agregá/quitá mapas, ajustá `tag` (`open` | `closed` | `hybrid` | `water` | `nomad`) y `inReferencePool` para los del pool de referencia.

Referencia histórica incluida: Acropolis, Arabia, Arena, Four Lakes, Gold Rush, Hideout, Islands (más mapas frecuentes de rotación).

Civilizaciones: `src/data/civs.ts` (RM 1v1, incl. Three Kingdoms, Last Chieftains, Viking Sagas; sin Chronicles).

Estrategias / motor: `src/data/strategies.ts` + `src/lib/resolveStrategy.ts`  
Cascada: matchup específico → mi civ + tag de mapa → arquetipo → genérico (nunca pantalla en blanco).

## Stack

Vite + React + TypeScript + Tailwind CSS v4. Solo cliente.

## Fuentes

- https://aoestats.io  
- https://www.aoe2insights.com  
- https://www.ageofempires.com/news/  
