import React from 'react';
import EmptyState from '@/components/EmptyState';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <EmptyState 
        title="Page Not Found" 
        description="The page or content you are looking for doesn't exist, has been moved, or is temporarily unavailable."
        ctaText="Back to Home"
        ctaLink="/"
      />
    </div>
  );
}
