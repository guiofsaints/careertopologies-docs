'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
  keywords: string[];
}

const searchIndex: SearchResult[] = [
  {
    title: 'About',
    description: 'Learn about Career Topologies and our mission',
    path: '/about',
    category: 'General',
    keywords: ['about', 'mission', 'overview'],
  },
  {
    title: 'Manifesto',
    description: 'Our core principles and values',
    path: '/manifesto',
    category: 'General',
    keywords: ['principles', 'values', 'manifesto', 'philosophy'],
  },
  {
    title: 'Framework',
    description: 'Career development framework overview',
    path: '/framework',
    category: 'Framework',
    keywords: ['framework', 'career', 'development', 'progression'],
  },
  {
    title: 'Career Levels',
    description: 'Five career levels from Junior to Principal',
    path: '/framework/leveling',
    category: 'Framework',
    keywords: ['levels', 'junior', 'senior', 'staff', 'principal', 'leveling'],
  },
  {
    title: 'Progression Pillars',
    description: 'Four pillars of career progression',
    path: '/framework/progression',
    category: 'Framework',
    keywords: ['progression', 'pillars', 'growth', 'advancement'],
  },
  {
    title: 'Guidelines',
    description: 'Best practices and guidelines',
    path: '/framework/guidelines',
    category: 'Framework',
    keywords: ['guidelines', 'best practices', 'recommendations'],
  },
  {
    title: 'Topologies',
    description: 'Organizational structures and patterns',
    path: '/topologies',
    category: 'Topologies',
    keywords: ['topologies', 'organizational', 'structure', 'patterns'],
  },
  {
    title: 'Career Shapes',
    description: 'Different career path shapes',
    path: '/shapes',
    category: 'Patterns',
    keywords: ['shapes', 'paths', 'ic', 'management', 'hybrid'],
  },
  {
    title: 'Management',
    description: 'Management layers and responsibilities',
    path: '/management',
    category: 'Management',
    keywords: ['management', 'layers', 'leadership', 'managers'],
  },
  {
    title: 'Developing Leaders',
    description: 'Leadership readiness and development',
    path: '/management/developing-leaders',
    category: 'Management',
    keywords: ['leaders', 'readiness', 'development', 'coaching'],
  },
  {
    title: 'Core Concepts',
    description: 'Fundamental concepts and terminology',
    path: '/concepts',
    category: 'Reference',
    keywords: ['concepts', 'terminology', 'definitions'],
  },
  {
    title: 'References',
    description: 'Books, articles, and resources',
    path: '/references',
    category: 'Reference',
    keywords: ['references', 'resources', 'books', 'articles'],
  },
  {
    title: 'Contributing',
    description: 'How to contribute to the project',
    path: '/contributing',
    category: 'Community',
    keywords: ['contributing', 'github', 'community', 'pull request'],
  },
];

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    
    return searchIndex
      .filter((item) => {
        const searchableText = [
          item.title,
          item.description,
          item.category,
          ...item.keywords,
        ]
          .join(' ')
          .toLowerCase();
        
        return searchableText.includes(searchTerm);
      })
      .slice(0, 5); // Limit to 5 results
  }, [query]);

  const showResults = isFocused && results.length > 0;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search documentation..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full pl-10 pr-4"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {showResults && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg">
          <CardContent className="p-0">
            <div className="divide-y">
              {results.map((result) => (
                <Link
                  key={result.path}
                  href={result.path}
                  className="block p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm mb-1">{result.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {result.description}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {result.category}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
