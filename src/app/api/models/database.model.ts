import type { Models } from 'appwrite';

export const LibraryType = {
  'UX/UI': 'UX/UI',
  'CSS': 'CSS',
  'FETCHING': 'FETCHING',
  'STORE': 'STORE',
  'ICONS': 'ICONS',
  'UTILS': 'UTILS',
  'FULL STACK': 'FULL STACK',
  'DEV OPS': 'DEV OPS',
  'TRANSLATIONS': 'TRANSLATIONS',
  'LOW-LEVEL': 'LOW-LEVEL',
  'LIBRARIES': 'LIBRARIES',
  'OTHER': 'OTHER',
  'GITHUB': 'GITHUB',
} as const;

export type LibraryType = (typeof LibraryType)[keyof typeof LibraryType];

export const LibraryTechnology = {
  'JS/TS': 'JS/TS',
  'Angular': 'Angular',
  'React': 'React',
  'Tailwind': 'Tailwind',
  'Other': 'Other',
} as const;

export type LibraryTechnology = (typeof LibraryTechnology)[keyof typeof LibraryTechnology];

export interface Library extends Partial<Models.Document> {
  description: string;
  name: string;
  type: LibraryType;
  icon?: string;
  technology: LibraryTechnology;
  url: string;
  important?: boolean;
}

