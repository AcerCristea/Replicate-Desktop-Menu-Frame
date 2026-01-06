# 🚀 Quick Start Guide

## ✅ You're Already Set Up!

Your archive website is **completely configured** and ready to use your existing `Selflux_Archive` table. No need to create a new table!

---

## 📋 Pre-Launch Checklist

Before you start, make sure these are in place in your Supabase dashboard:

### 1. Database Table ✓
- [ ] Table named `Selflux_Archive` exists
- [ ] Has at least one row with `Visible = true`
- [ ] Row Level Security (RLS) is enabled
- [ ] Public read policy exists

**Quick Test:** Can you see your projects in the Supabase Table Editor?

### 2. Storage Bucket (Optional but Recommended) 
- [ ] Bucket named `Portfolio-Visuals` exists
- [ ] Bucket is set to **private**
- [ ] Each project has a folder named with its `id` (UUID)
- [ ] Images are uploaded to their respective folders

**Note:** Projects will work without images, they just won't show visuals on detail pages.

---

## 🎯 Column Requirements

Your `Selflux_Archive` table **must** have these columns with **exact names** (case-sensitive):

| Column | Type | Required | Example |
|--------|------|----------|---------|
| `ID` | TEXT | ✅ | Your unique identifier |
| `ClientName` | TEXT | ✅ | "Acme Corp" |
| `Date` | TEXT | ✅ | "2024" |
| `PrimaryTag` | TEXT | ✅ | "Web App" |
| `Industry` | TEXT | ✅ | "Technology" |
| `Visible` | TEXT | ✅ | "true" or "false" |
| `Overview` | TEXT | ❌ | Short description |
| `Description` | TEXT | ❌ | Full description |
| `Team` | TEXT | ❌ | "Jane Doe" |
| `SecondaryTags` | TEXT[] | ❌ | Array of tags |
| `Captions` | TEXT[] | ❌ | Array of captions |

### ⚠️ Column Name Case-Sensitivity

PostgreSQL column names are case-sensitive when quoted. Make sure your columns match exactly:
- ✅ `ClientName` (correct)
- ❌ `clientname` (wrong)
- ❌ `client_name` (wrong)

---

## 🔒 Required Supabase Policies

### Enable RLS on Table
```sql
ALTER TABLE "Selflux_Archive" ENABLE ROW LEVEL SECURITY;
```

### Allow Public Read Access
```sql
CREATE POLICY "Allow public read access" ON "Selflux_Archive"
  FOR SELECT
  USING ("Visible" = true);
```

### Storage Bucket Policy (if using images)
```sql
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'Portfolio-Visuals');
```

---

## 🏃‍♂️ Running the App

### Development Mode
```bash
npm run dev
```

Then open your browser to the provided URL (usually `http://localhost:5173`)

### Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder.

---

## ✨ What You Should See

### 1. Archive Page (Homepage `/`)
- Yellow-green background (#cfd860)
- Left sidebar navigation with "Archive" highlighted
- Column headers: CLIENT, PROJECT TYPE, INDUSTRY, DATE
- Red underline under "CLIENT"
- Your projects listed in rows
- Hover effects: rows slide right and fade

### 2. Project Detail Page (`/project/{id}`)
- Project name in large coral red text
- Project details in a grid
- Overview and description sections
- Images loaded from storage (if available)
- "Back to Archive" button

### 3. Navigation
- Fixed sidebar on the left
- 5 navigation items (About, Approach, Selected Works, White Space, Archive)
- Rotated "Archive" text and "1996-2026" at the bottom
- Hover effects: items slide right

---

## 🐛 Troubleshooting

### Problem: "No projects found"
**Solution:**
1. Check that `Selflux_Archive` has data
2. Verify `Visible` column is set to the text value `"true"` (not boolean)
3. Check RLS policy is correct

### Problem: "Error fetching projects"
**Solution:**
1. Open browser console (F12) to see exact error
2. Verify column names match exactly (case-sensitive)
3. Check Supabase connection in browser console

### Problem: Projects load but no images
**Solution:**
1. Verify `Portfolio-Visuals` bucket exists
2. Check folder names match project IDs exactly
3. Verify storage bucket has read policy enabled

### Problem: Column mismatch errors
**Solution:**
Your existing columns might have different names. You have two options:

**Option A: Rename your columns** (recommended)
```sql
ALTER TABLE "Selflux_Archive" RENAME COLUMN "client_name" TO "ClientName";
-- Repeat for all columns that don't match
```

**Option B: Update the code**
Edit `/src/lib/supabase.ts` to match your column names.

---

## 📸 Adding Images to Projects

### Step 1: Get Project ID
1. Go to Supabase Table Editor
2. Open your `Selflux_Archive` table
3. Copy the `ID` (your unique text identifier) of the project you want to add images to

### Step 2: Create Folder in Storage
1. Go to Supabase Storage
2. Open `Portfolio-Visuals` bucket
3. Create a new folder with the exact ID from Step 1

### Step 3: Upload Images
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

---

## 🎨 Customization

### Colors
All colors are defined in the components. Main colors:
- Background: `#cfd860` (yellow-green)
- Accent: `#d05d49` (coral red)
- Text: `#0c1517` (near black)

### Typography
- Font: **Albert Sans** from Google Fonts
- Already imported in `/src/styles/fonts.css`
- Weights: 100-900 available

---

## 🚀 Deploying to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial archive website"
   git push
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install` (default)

4. **Deploy!**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live!

**Note:** Supabase credentials are automatically handled, no need to set environment variables.

---

## 📝 Next Steps

Once your site is running smoothly, consider:

- [ ] Add filtering by Industry or Project Type
- [ ] Implement search functionality
- [ ] Add pagination for large project lists
- [ ] Create mobile-responsive layouts
- [ ] Add loading animations
- [ ] Implement project filtering by tags
- [ ] Add a contact form
- [ ] Enable full-text search

---

## 📚 Documentation Files

- **SETUP_VERIFICATION.md** - Detailed Supabase setup verification
- **PROJECT_SETUP.md** - Complete project documentation
- **SAMPLE_DATA.sql** - Sample data for testing
- **QUICK_START.md** - This file!

---

## 🆘 Need Help?

1. **Check browser console** (F12 → Console tab) for errors
2. **Check Supabase logs** in your Supabase dashboard
3. **Verify table structure** matches requirements above
4. **Test with sample data** from SAMPLE_DATA.sql

---

## ✅ Success Indicators

You know everything is working when:
- ✅ Archive page loads without errors
- ✅ Projects appear in the list
- ✅ Hover effects work smoothly
- ✅ Clicking a project navigates to detail page
- ✅ Images appear on detail pages (if configured)
- ✅ "Back to Archive" button works
- ✅ No console errors in browser

**Your archive website is ready to go! 🎉**