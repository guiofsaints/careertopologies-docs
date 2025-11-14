import type { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: GenerateMetadataProps): Metadata {
  const url = `https://careertopologies.com${path}`;
  
  const allKeywords = [
    'career development',
    'career framework',
    'engineering careers',
    ...keywords,
  ];

  return {
    title,
    description,
    keywords: allKeywords,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Career Topologies',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
