// AIDEV-NOTE: ANCHOR: slugify function
// This slugify function is a combination of two previous implementations.
// It creates a URL-friendly slug from a string by performing the following steps:
// 1. Converts the string to lowercase.
// 2. Trims leading and trailing whitespace.
// 3. Removes special characters, but keeps spaces and hyphens.
// 4. Replaces one or more spaces with a single hyphen.
// 5. Collapses multiple consecutive hyphens into a single one.
// 6. It intentionally does not handle diacritics to keep it simple,
//    aligning with the original implementations.

export const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove all non-alphanumeric chars except spaces and hyphens
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/-{2,}/g, '-');      // Replace multiple hyphens with a single one
