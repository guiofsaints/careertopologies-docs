import type { Metadata } from 'next';
import { SearchBar } from '@/components/search/search-bar';
import { PageHero } from '@/components/content/page-hero';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search through Career Topologies documentation',
};

export default function SearchPage() {
  return (
    <>
      <PageHero
        title="Search Documentation"
        description="Find pages, concepts, and resources across Career Topologies"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <SearchBar />
          
          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="/framework"
                  className="p-4 rounded-lg border hover:border-primary transition-colors"
                >
                  <div className="font-semibold mb-2">Framework</div>
                  <div className="text-sm text-muted-foreground">
                    Career development framework overview
                  </div>
                </a>
                <a
                  href="/topologies"
                  className="p-4 rounded-lg border hover:border-primary transition-colors"
                >
                  <div className="font-semibold mb-2">Topologies</div>
                  <div className="text-sm text-muted-foreground">
                    Organizational structures and patterns
                  </div>
                </a>
                <a
                  href="/concepts"
                  className="p-4 rounded-lg border hover:border-primary transition-colors"
                >
                  <div className="font-semibold mb-2">Core Concepts</div>
                  <div className="text-sm text-muted-foreground">
                    Fundamental concepts and terminology
                  </div>
                </a>
                <a
                  href="/references"
                  className="p-4 rounded-lg border hover:border-primary transition-colors"
                >
                  <div className="font-semibold mb-2">References</div>
                  <div className="text-sm text-muted-foreground">
                    Books, articles, and resources
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
