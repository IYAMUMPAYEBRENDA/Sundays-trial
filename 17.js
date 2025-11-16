import React, { Suspense, useState } from 'react';

const LazyComponent = React.lazy(() => import('./SomeComponent'));

function LazyLoadingExample() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div>
      <button onClick={() => setShowLazy(true)}>
        Load Lazy Component
      </button>
      {showLazy && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}
