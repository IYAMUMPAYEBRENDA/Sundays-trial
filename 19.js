import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ number }) {
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return number * 2 + result;
  }, [number]);

  return <div>Expensive value: {expensiveValue}</div>;
}

function MemoCalculation() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>
        Re-render: {count}
      </button>
      <ExpensiveCalculation number={number} />
    </div>
  );
}

