import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface SupabaseImageProps {
  bucketName: string;
  imagePath: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SupabaseImage({
  bucketName,
  imagePath,
  alt = 'Image',
  className = '',
  style = {}
}: SupabaseImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = supabase.storage
          .from(bucketName)
          .getPublicUrl(imagePath);

        if (data?.publicUrl) {
          setImageUrl(data.publicUrl);
        } else {
          setError('Failed to get image URL');
        }
      } catch (err) {
        console.error('Error fetching image:', err);
        setError('Error loading image');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [bucketName, imagePath]);

  if (loading) {
    return (
      <div className={className} style={style}>
        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
          <p className="text-gray-500 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={className} style={style}>
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600 text-sm">{error || 'Image not found'}</p>
        </div>
      </div>
    );
  }

  // Detect if this is a video file
  const isVideo = imagePath.toLowerCase().endsWith('.mp4') ||
                  imagePath.toLowerCase().endsWith('.mov') ||
                  imagePath.toLowerCase().endsWith('.webm');

  if (isVideo) {
    return (
      <video
        src={imageUrl}
        className={className}
        style={style}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      style={style}
    />
  );
}
