```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: No return value needed if no cleanup is necessary
    // Alternatively, return a cleanup function if needed (e.g., for subscriptions)
    //return () => { ... cleanup ... };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```