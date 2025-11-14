'use client';

import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { getManagementPageBySlug, getAllManagementPages } from '@/lib/content';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function ManagementPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.[0] || 'index';
  const page = getManagementPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const MDXContent = useMDXComponent(page.body.code);

  return (
    <>
      <Breadcrumbs />
      <PageHero title={page.title} description={page.description} />
      <div className="container py-8 md:py-12">
        <article className="prose">
          <MDXContent />
        </article>
      </div>
    </>
  );
}
