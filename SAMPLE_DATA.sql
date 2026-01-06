-- Sample data for Selflux_Archive table
-- Note: After inserting these projects, you'll need to:
-- 1. Note the ID values of the created projects
-- 2. Create folders in the Portfolio-Visuals bucket matching each project's ID
-- 3. Upload images to the respective folders

-- Insert sample projects into Selflux_Archive table
INSERT INTO "Selflux_Archive" ("ClientName", "Date", "PrimaryTag", "Industry", "Visible", "Overview", "Description", "SecondaryTags")
VALUES 
  (
    'Acticol',
    '2024',
    'Mobile App',
    'Healthcare & Wellness',
    'true',
    'A revolutionary mobile health tracking application',
    'Acticol is a comprehensive health and wellness platform designed to help users monitor their daily activities, nutrition, and overall wellbeing. The app features real-time tracking, personalized recommendations, and seamless integration with wearable devices.',
    ARRAY['Mobile', 'Health Tech', 'UX Design']
  ),
  (
    'Porto Montenegro',
    '2023',
    'Interactive Installation',
    'Music & Entertainment',
    'true',
    'An immersive digital experience for luxury yacht marina',
    'Created an interactive installation that showcases the Porto Montenegro luxury marina through cutting-edge digital storytelling and interactive displays.',
    ARRAY['Installation', 'Luxury', 'Digital Experience']
  ),
  (
    'Renault',
    '2023',
    'Interactive Installation',
    'Automotive',
    'true',
    'Next-generation vehicle showcase experience',
    'Developed an interactive showroom experience that allows customers to explore Renault vehicles through augmented reality and immersive displays.',
    ARRAY['Automotive', 'AR', 'Interactive']
  ),
  (
    'Science Museum',
    '2022',
    'Interactive Installation',
    'Education & Culture',
    'true',
    'Educational interactive exhibits for science museum',
    'Designed and implemented interactive exhibits that make complex scientific concepts accessible and engaging for visitors of all ages.',
    ARRAY['Education', 'Museum', 'Interactive']
  ),
  (
    'Tate',
    '2022',
    'Web Application',
    'Arts & Culture',
    'true',
    'Digital archive and exhibition platform',
    'Built a comprehensive digital platform for the Tate museum, featuring virtual exhibitions, artwork archives, and educational resources.',
    ARRAY['Museum', 'Web', 'Digital Archive']
  ),
  (
    'Sky',
    '2021',
    'Mobile App',
    'Media & Broadcasting',
    'true',
    'Next-generation streaming platform',
    'Developed a cutting-edge streaming application with personalized content recommendations, multi-device sync, and 4K streaming capabilities.',
    ARRAY['Streaming', 'Mobile', 'UX']
  ),
  (
    'Selfridges',
    '2021',
    'Interactive Installation',
    'Retail',
    'true',
    'In-store digital experience',
    'Created an innovative in-store digital experience that bridges physical and online shopping through interactive displays and personalized recommendations.',
    ARRAY['Retail', 'Digital', 'Experience Design']
  ),
  (
    'Wellcome Trust',
    '2020',
    'Web Platform',
    'Healthcare & Research',
    'true',
    'Research collaboration platform',
    'Built a collaborative platform for medical researchers to share findings, collaborate on projects, and access comprehensive research databases.',
    ARRAY['Healthcare', 'Research', 'Collaboration']
  ),
  (
    'Telegraph',
    '2020',
    'Web Application',
    'Media & Publishing',
    'true',
    'Modern news platform redesign',
    'Redesigned and developed the Telegraph digital platform with focus on performance, accessibility, and engaging user experience.',
    ARRAY['News', 'Publishing', 'Web']
  ),
  (
    'Wedgwood',
    '2019',
    'E-commerce Platform',
    'Luxury Goods',
    'true',
    'Premium e-commerce experience',
    'Created a luxury e-commerce platform that showcases Wedgwood heritage and craftsmanship through stunning visuals and intuitive shopping experience.',
    ARRAY['E-commerce', 'Luxury', 'Heritage']
  );

-- Note: After inserting these projects, you'll need to:
-- 1. Note the ID values of the created projects
-- 2. Create folders in the Portfolio-Visuals bucket matching each project's ID
-- 3. Upload images to the respective folders