import React, { forwardRef, useRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  return <input ref={ref} className="fancy-input" {...props} />;
});

function ParentComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <FancyInput ref={inputRef} placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

