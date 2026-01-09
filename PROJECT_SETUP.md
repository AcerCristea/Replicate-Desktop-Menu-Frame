# Archive Project Setup Guide

## Overview
This is a professional archive website built with React, TypeScript, Tailwind CSS v4, Motion (Framer Motion), and Supabase. The desktop version features a clean navigation sidebar and a dynamic list of projects fetched from Supabase.

## Technology Stack
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations and hover effects
- **React Router DOM** - Client-side routing
- **Supabase** - Backend database and storage
- **Vite** - Build tool with `outDir: 'dist'`

## Supabase Setup

### Database Table Structure
This project uses your existing `Selflux_Archive` table. The table should have the following columns:

```sql
-- Your existing table: Selflux_Archive
-- Required columns:
CREATE TABLE "Selflux_Archive" (
  "ID" TEXT PRIMARY KEY,
  "ClientName" TEXT NOT NULL,
  "Date" TEXT NOT NULL,
  "Team" TEXT,
  "Filename" TEXT,
  "PrimaryTag" TEXT NOT NULL,
  "SecondaryTags" TEXT,
  "Industry" TEXT NOT NULL,
  "Visible" TEXT DEFAULT 'true',
  "Overview" TEXT,
  "Description" TEXT,
  "Captions" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE "Selflux_Archive" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON "Selflux_Archive"
  FOR SELECT
  USING ("Visible" = 'true');
```

**Note:** Column names are case-sensitive and must match exactly as shown above.

### Storage Bucket Setup
1. Create a storage bucket named `Portfolio-Visuals`
2. Make it a **private** bucket (the app will use signed URLs)
3. For each project, create a folder with the same name as the project's `ID`
4. Upload project images into the respective folder

Example structure:
```
Portfolio-Visuals/
  ├── project-id-1/
  │   ├── image1.jpg
  │   ├── image2.jpg
  │   └── image3.jpg
  ├── project-id-2/
  │   └── image1.jpg
  └── ...
```

### Environment Configuration
The Supabase credentials are automatically managed through `/utils/supabase/info.tsx`. Make sure your Supabase project is properly connected.

## Features Implemented

### Navigation Sidebar
- Clean vertical navigation with 5 main sections
- Active state highlighting for the current page
- Smooth hover animations using Motion
- Rotated "Archive" title and "1996-2026" year range at the bottom
- Fixed position on the left side

### Archive Page
- Dynamic project list fetched from Supabase
- Column headers: CLIENT, PROJECT TYPE, INDUSTRY, DATE
- Red highlight under "CLIENT" header
- Smooth hover effects on each row
- Clickable rows that navigate to project detail page
- Responsive to database changes

### Project Detail Page
- Full project information display
- Dynamic image loading from Supabase Storage (signed URLs)
- Smooth page transitions with Motion
- Back button to return to archive
- Image captions support
- Secondary tags display

### Hover States & Animations
- Navigation items slide right on hover
- Project rows fade and slide on hover
- Smooth transitions throughout
- Cursor changes to pointer on interactive elements

## Running the Project

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
The output will be in the `dist/` directory as configured in `vite.config.ts`.

### Deployment to Vercel
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## Adding Sample Data

Here's an example of how to add a project to your Supabase table:

```sql
INSERT INTO "Selflux_Archive" (
  "ClientName",
  "Date",
  "PrimaryTag",
  "Industry",
  "Visible",
  "Overview",
  "Description"
) VALUES (
  'Acme Corporation',
  '2024',
  'Web Application',
  'Technology',
  'true',
  'A modern web application for enterprise management',
  'This project involved creating a comprehensive web platform with real-time collaboration features...'
);
```

## Color Palette
- **Background:** `#cfd860` (Yellow-green)
- **Navigation Background:** `#cfd860` (Yellow-green)
- **Primary Accent:** `#d05d49` (Coral red)
- **Text Primary:** `#0c1517` (Near black)
- **Text Secondary:** `#3e6064` (Teal gray)
- **Text Light:** `#1e3239` (Dark teal)

## Font
The project uses **Albert Sans** font family from Google Fonts, with weights ranging from 100 to 900.

## Next Steps
- Add filtering functionality to the archive page
- Implement search feature
- Add more animations and transitions
- Create mobile and tablet responsive layouts
- Add pagination for large project lists
- Implement loading skeletons

## Notes
- The desktop version is fully implemented and matches the Figma design
- Hover states are smooth and performant using Motion
- All animations use hardware-accelerated properties for smooth performance
- The Supabase integration is production-ready with proper error handling