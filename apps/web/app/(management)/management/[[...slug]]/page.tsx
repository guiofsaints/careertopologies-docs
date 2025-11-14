'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { getManagementPageBySlug, getAllManagementPages } from '@/lib/content';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { mdxComponents } from '@/components/mdx';

export default function ManagementPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug: slugArray } = use(params);
  const slug = slugArray?.[0] || 'index';
  const page = getManagementPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const MDXContent = useMDXComponent(page.body.code);

  return (
    <>
      <Breadcrumbs />
      <PageHero title={page.title} description={page.description} />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <article className="prose max-w-4xl mx-auto">
          <MDXContent components={mdxComponents} />
        </article>
      </div>
    </>
  );
}
