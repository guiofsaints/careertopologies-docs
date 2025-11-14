interface PageHeroProps {
  title: string;
  description?: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="border-b bg-muted/30">
      <div className="container py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
