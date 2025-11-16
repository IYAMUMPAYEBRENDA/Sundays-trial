import React from 'react';

function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = React.useState(false);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} setLoading={setLoading} />;
  };
}

function DataFetcher({ setLoading }) {
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Data fetched!');
    }, 2000);
  };

  return <button onClick={fetchData}>Fetch Data</button>;
}