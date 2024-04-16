import { useMemo } from "react";

const EXAMPLE_SECRET = import.meta.env.VITE_EXAMPLE_SECRET;

export function App() {
  const secret = useMemo(()=> {
    return EXAMPLE_SECRET ?? 'LOADING';
  }, []);

  return (
    <div>
      Revelled secret: {secret}
    </div>
  );
}

export default App;
