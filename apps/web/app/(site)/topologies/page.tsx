'use client';

import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { getAllTopologies } from '@/lib/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function TopologiesPage() {
  const topologies = getAllTopologies();

  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Career Topologies"
        description="Different organizational structures and career progression patterns"
      />
      <div className="container py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topologies.length === 0 ? (
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>
                  Career topology patterns will be documented here
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            topologies.map((topology) => (
              <Link key={topology.slug} href={`/topologies/${topology.slug}`}>
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle>{topology.title}</CardTitle>
                    <CardDescription>{topology.description}</CardDescription>
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
