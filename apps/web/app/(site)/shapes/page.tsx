'use client';

import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { getAllShapes } from '@/lib/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ShapesPage() {
  const shapes = getAllShapes();

  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Team Shapes"
        description="Common team structures and organizational patterns"
      />
      <div className="container py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shapes.length === 0 ? (
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>
                  Team shape patterns will be documented here
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            shapes.map((shape) => (
              <Link key={shape.slug} href={`/shapes/${shape.slug}`}>
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle>{shape.title}</CardTitle>
                    <CardDescription>{shape.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}
