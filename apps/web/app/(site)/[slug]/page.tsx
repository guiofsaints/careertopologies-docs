import { use } from 'react';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { getPageBySlug, getAllPages } from '@/lib/content';
import { MDXContent } from '@/components/mdx';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs />
      <PageHero title={page.title} description={page.description} />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <article className="prose max-w-4xl mx-auto">
          <MDXContent code={page.body.code} />
        </article>
      </div>
    </>
  );
}
