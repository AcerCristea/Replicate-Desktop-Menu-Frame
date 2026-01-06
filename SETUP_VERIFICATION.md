# Archive Project - Setup Verification Guide

## ✅ What's Already Complete

Your archive website is now fully configured and ready to use with your existing `Selflux_Archive` table in Supabase. All code has been updated to work with your table.

### Complete Features
- ✅ Navigation sidebar with 5 pages
- ✅ Archive page displaying projects from `Selflux_Archive` table
- ✅ Project detail pages with image galleries
- ✅ Smooth animations with Motion (Framer)
- ✅ Responsive hover effects
- ✅ Supabase integration configured
- ✅ Build configuration (Vite with `outDir: 'dist'`)

---

## 🔍 Required Supabase Verification

Since you already have a `Selflux_Archive` table, please verify the following:

### 1. Table Structure
Your `Selflux_Archive` table should have these columns (exact column names are important):

| Column Name | Type | Required | Description |
|-------------|------|----------|-------------|
| `ID` | TEXT | Yes | Primary key (your unique identifier) |
| `ClientName` | TEXT | Yes | Client/project name |
| `Date` | TEXT | Yes | Project date/year |
| `PrimaryTag` | TEXT | Yes | Project type/category |
| `Industry` | TEXT | Yes | Industry classification |
| `Visible` | TEXT | Yes | Show/hide project (use "true" or "false") |
| `Team` | TEXT | No | Team members (optional) |
| `Filename` | TEXT | No | Reference filename (optional) |
| `Overview` | TEXT | No | Short project overview |
| `Description` | TEXT | No | Full project description |
| `SecondaryTags` | TEXT[] | No | Additional tags (array) |
| `Captions` | TEXT[] | No | Image captions (array) |

**Important:** Column names are case-sensitive and must match exactly as shown.

### 2. Row Level Security (RLS)
Make sure your table has proper RLS policies:

```sql
-- Enable Row Level Security
ALTER TABLE "Selflux_Archive" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON "Selflux_Archive"
  FOR SELECT
  USING ("Visible" = 'true');
```

### 3. Storage Bucket Setup
You should have a storage bucket named `Portfolio-Visuals`:

1. **Bucket Configuration:**
   - Name: `Portfolio-Visuals`
   - Privacy: Private (the app uses signed URLs)
   
2. **Folder Structure:**
   ```
   Portfolio-Visuals/
     ├── [project-id-1]/
     │   ├── image1.jpg
     │   ├── image2.jpg
     │   └── image3.jpg
     ├── [project-id-2]/
     │   └── image1.jpg
     └── ...
   ```
   
3. **Important:**
   - Each project's images go in a folder named with its `id` (UUID)
   - Folder name MUST match the project's `id` from the database
   - Supported image formats: JPG, PNG, WebP, GIF

### 4. Storage Bucket Policies
Your bucket needs these RLS policies:

```sql
-- Allow public to read from Portfolio-Visuals
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'Portfolio-Visuals');
```

---

## 🚀 Testing Your Setup

### 1. Test Database Connection
Open your browser console and check for:
- ✅ No errors about "table not found"
- ✅ Projects loading on the Archive page
- ❌ If you see errors, verify table name and RLS policies

### 2. Test Project Display
On the Archive page (`/`), you should see:
- ✅ Column headers: CLIENT, PROJECT TYPE, INDUSTRY, DATE
- ✅ Red underline under "CLIENT"
- ✅ Your projects listed with smooth hover effects
- ❌ If empty, check the `Visible` column in your data

### 3. Test Project Details
Click on a project row:
- ✅ Should navigate to `/project/{id}`
- ✅ Should display project information
- ✅ Should load images from storage bucket
- ❌ If images don't load, check storage bucket structure

---

## 🛠️ Common Issues & Solutions

### Issue: "No projects found"
**Solutions:**
1. Check that you have data in `Selflux_Archive` table
2. Verify `Visible` column is set to the text value `"true"` (not boolean, but TEXT type)
3. Check RLS policies are enabled and correct

### Issue: "Projects load but no images"
**Solutions:**
1. Verify storage bucket exists and is named `Portfolio-Visuals`
2. Check folder names match project IDs exactly
3. Verify storage bucket RLS policy allows public read

### Issue: "Error fetching projects"
**Solutions:**
1. Check browser console for specific error
2. Verify Supabase connection in `/utils/supabase/info.tsx`
3. Confirm column names match exactly (case-sensitive)

### Issue: Column name mismatch
**If your columns have different names:**
1. Either rename your columns to match the expected names
2. Or update the TypeScript type in `/src/lib/supabase.ts` to match your columns

---

## 📊 Sample Data Format

If you need to add test data, here's an example:

```sql
INSERT INTO "Selflux_Archive" (
  "ClientName",
  "Date",
  "PrimaryTag",
  "Industry",
  "Visible",
  "Overview",
  "Description",
  "Team"
) VALUES (
  'Acme Corporation',
  '2024',
  'Brand Identity',
  'Technology',
  'true',
  'A comprehensive brand refresh for a leading tech company.',
  'This project involved creating a new visual identity system that reflects the company''s innovative spirit...',
  'Design: Jane Doe, Development: John Smith'
);
```

---

## 🎨 Design Details

### Color Palette
- Background: `#cfd860` (Yellow-green)
- Accent/Links: `#d05d49` (Coral red)
- Text Primary: `#0c1517` (Near black)
- Text Secondary: `#3e6064` (Teal gray)
- Text Light: `#1e3239` (Dark teal)

### Typography
- Font: **Albert Sans** (Google Fonts)
- Weights: 100-900 (variable)

### Hover Effects
- Navigation items: Slide right 5px
- Project rows: Slide right 8px, opacity 0.8
- Client names: Change to coral red (#d05d49)
- Separator lines: Expand 2% horizontally

---

## 🚢 Deployment to Vercel

### Build Settings
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install` (default)

### Environment Variables
The Supabase credentials are automatically handled through `/utils/supabase/info.tsx`, so you don't need to set environment variables in Vercel.

### Steps
1. Connect GitHub repository to Vercel
2. Configure build settings as above
3. Deploy!

---

## 📁 Project Structure

```
/src
  /app
    /components
      - Navigation.tsx         # Sidebar navigation
      - ArchivePage.tsx        # Main archive list
      - ProjectDetail.tsx      # Individual project page
      - LoadingSkeleton.tsx    # Loading state UI
  /lib
    - supabase.ts              # Supabase client & types
  /styles
    - fonts.css                # Albert Sans import
    - theme.css                # CSS variables
    - index.css                # Main CSS entry
/utils
  /supabase
    - info.tsx                 # Supabase credentials
```

---

## ✅ Final Checklist

Before launching, verify:
- [ ] `Selflux_Archive` table has correct column names
- [ ] RLS is enabled with public read policy
- [ ] At least one project has `Visible = true`
- [ ] `Portfolio-Visuals` storage bucket exists
- [ ] Storage bucket has folders matching project IDs
- [ ] Storage bucket has read policy enabled
- [ ] Images are uploaded to correct folders
- [ ] Archive page loads without errors
- [ ] Clicking a project navigates correctly
- [ ] Images display on project detail page
- [ ] All hover effects work smoothly

---

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify your Supabase dashboard settings
3. Test with a single project first
4. Ensure column names match exactly (case-sensitive)

---

**Your archive website is ready to go!** Just verify your Supabase setup matches these requirements.

---

## Step 1: Get Project ID
1. Go to Supabase Table Editor
2. Open your `Selflux_Archive` table
3. Copy the `ID` (your unique text identifier) of the project you want to add images to

## Step 2: Create Folder
1. Go to Supabase Storage
2. Open the `Portfolio-Visuals` bucket
3. Create a new folder with the project's `ID` as the name

## Step 3: Upload Images
1. Open the folder you just created
2. Upload your images (JPG, PNG, WebP, etc.)
3. Images will appear in order on the project detail page

**Example:**
```
Portfolio-Visuals/
  └── your-project-id/
      ├── hero.jpg
      ├── detail-1.jpg
      └── detail-2.jpg
```

**Important:** The folder name must match the project's `ID` exactly.