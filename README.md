# Client-reference manifest growth with Turbopack, 16.3.8 → 16.4.x

```bash
bun install
bun add -E next@16.3.8 react@19.2.6 react-dom@19.2.6 && rm -rf .next && bun run build
find .next/server/app -name 'page_client-reference-manifest.js' -printf '%s %p\n'
find .next/server/chunks -name '*.js' | wc -l

bun add -E next@16.4.1 react@19.3.0 react-dom@19.3.0 && rm -rf .next && bun run build
find .next/server/app -name 'page_client-reference-manifest.js' -printf '%s %p\n'
find .next/server/chunks -name '*.js' | wc -l
```

npm or pnpm work the same.
