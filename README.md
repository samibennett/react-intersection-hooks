# React Intersection Hooks

A lightweight, strictly-typed, and highly performant collection of React hooks wrapping the Intersection Observer API.

## Installation

```bash
npm install react-intersection-hooks
```

## Usage

```tsx
import { useIntersectionObserver } from 'react-intersection-hooks';

function App() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {entry?.isIntersecting ? 'Visible!' : 'Hidden'}
    </div>
  );
}
```

## License
MIT
