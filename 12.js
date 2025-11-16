import React, { useState, memo } from 'react';

const ExpensiveComponent = memo(({ value }) => {
  console.log('ExpensiveComponent rendered');
  // Simulate expensive computation
  const result = value * 2;
  return <div>Result: {result}</div>;
});

function MemoExample() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Re-render parent: {count}
      </button>
      <button onClick={() => setValue(value + 1)}>
        Change value: {value}
      </button>
      <ExpensiveComponent value={value} />
    </div>
  );
}

