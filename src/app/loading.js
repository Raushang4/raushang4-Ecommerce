import React from 'react';
import SkeletonLoader from '@/components/SkeletonLoader';

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 w-full">
      <SkeletonLoader type="title" count={1} className="max-w-lg mx-auto md:mx-0" />
      <div className="mt-12 space-y-8">
        <SkeletonLoader type="text" count={3} />
        <SkeletonLoader type="image" count={1} className="mt-8 mb-8" />
        <SkeletonLoader type="text" count={4} />
      </div>
    </div>
  );
}
