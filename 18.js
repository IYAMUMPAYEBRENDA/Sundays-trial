import React, { useState, useCallback, memo } from 'react';

const ChildComponent = memo(({ onButtonClick, count }) => {
  console.log('ChildComponent rendered');
  return (
    <div>
      <p>Count from parent: {count}</p>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
});

function CallbackExample() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState('');

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input
        value={otherState}
        onChange={(e) => setOtherState(e.target.value)}
        placeholder="Type to cause re-renders"
      />
      <ChildComponent onButtonClick={handleClick} count={count} />
    </div>
  );
}