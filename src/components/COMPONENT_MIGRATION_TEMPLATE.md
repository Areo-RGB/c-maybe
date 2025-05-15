# Component Migration Template

This document provides a step-by-step guide for migrating components from Chakra UI to Shadcn UI.

## Migration Steps

1. **Analyze the original component**
   - Review the props and functionality
   - Identify theme dependencies
   - Note any complex behaviors

2. **Create the Shadcn equivalent**
   - Create a new file with the same name + "Shadcn" (e.g., `Banner.js` → `BannerShadcn.js`)
   - Replace Chakra imports with Shadcn imports
   - Convert style props to Tailwind classes

3. **Handle theming**
   - Replace `useColorModeValue` with Tailwind dark mode classes
   - Example: `color={useColorModeValue("gray.700", "white")}` becomes `className="text-gray-700 dark:text-white"`

4. **Test the component**
   - Add it to a migration test page
   - Compare with the original Chakra component
   - Verify appearance in light and dark mode

5. **Update imports**
   - Once the component is working correctly, update imports in pages that use it
   - Test the page with the new component

## Styling Conversion Examples

### Chakra to Tailwind Conversion

| Chakra | Tailwind |
|--------|----------|
| `mt="10px"` | `className="mt-2.5"` |
| `fontSize="xl"` | `className="text-xl"` |
| `fontWeight="bold"` | `className="font-bold"` |
| `color="gray.400"` | `className="text-gray-400"` |
| `borderRadius="16px"` | `className="rounded-2xl"` |
| `display="flex"` | `className="flex"` |
| `flexDirection="column"` | `className="flex-col"` |
| `alignItems="center"` | `className="items-center"` |
| `justifyContent="center"` | `className="justify-center"` |
| `w="100%"` | `className="w-full"` |
| `h="87px"` | `className="h-[87px]"` |

### Component Props to Classes

| Chakra Component | Shadcn Equivalent |
|------------------|-------------------|
| `<Box mt="20px">` | `<Box className="mt-5">` |
| `<Flex direction="column">` | `<Flex className="flex-col">` |
| `<Text color="gray.500">` | `<Text className="text-gray-500">` |
| `<Card p="20px">` | `<Card className="p-5">` |

## Handling Dynamic Styles

For dynamic styles, use template literals with Tailwind classes:

```jsx
// Chakra (original)
<Box bg={isActive ? "blue.500" : "gray.200"}>

// Shadcn (migrated)
<Box className={`${isActive ? "bg-blue-500" : "bg-gray-200"}`}>
```

## Common Challenges

1. **Complex responsive styles**
   - Use Tailwind responsive prefixes: `md:`, `lg:`, `xl:`
   - For very complex styles, consider using style objects

2. **Animation and transitions**
   - Use Tailwind transition classes
   - For complex animations, consider using Framer Motion

3. **Custom theme values**
   - Update tailwind.config.js to include any custom theme values
   - Use CSS variables for theme-specific values

## Migration Checklist

- [ ] Component functionality preserved
- [ ] Responsive behavior matches original
- [ ] Dark mode works correctly
- [ ] Accessibility features maintained
- [ ] Performance optimized
- [ ] Documentation updated 