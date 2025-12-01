# Development Guide

## Project Structure

\`\`\`
flip-clock/
├── lib/
│   └── types.ts              # TypeScript type definitions
├── components/
│   └── core/
│       ├── flip-card.tsx     # FlipCard component
│       └── flip-clock.tsx    # FlipClock component
├── app/
│   ├── page.tsx              # Demo page
│   ├── layout.tsx            # Layout
│   └── globals.css           # Global styles
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
└── package.json
\`\`\`

## Key Files

### `lib/types.ts`
Contains all TypeScript interfaces and types for the library.

### `components/core/flip-card.tsx`
The main FlipCard component that handles individual card flip animations.

### `components/core/flip-clock.tsx`
The FlipClock component that uses FlipCard to display time.

## Development Workflow

1. **Make changes** in the component files
2. **Test locally** using the demo page
3. **Run type-check** with `npm run type-check`
4. **Build** with `npm run build:lib`
5. **Test** with `npm run test`

## Adding New Features

When adding new features:

1. Update types in `lib/types.ts`
2. Implement the feature in the component
3. Update the README with new props/features
4. Add examples in the documentation
5. Update CHANGELOG.md

## Performance Considerations

- Minimize re-renders using React hooks
- Use CSS animations for smooth 60fps performance
- Avoid inline function definitions in render
- Use memoization for expensive calculations

## Browser Support

The library supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
