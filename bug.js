```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Missing return statement in useEffect cleanup function
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []);

  return <div>Count: {count}</div>;
}
```