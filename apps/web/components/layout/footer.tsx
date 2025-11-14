import Link from 'next/link';

const footerSections = [
  {
    title: 'Documentation',
    links: [
      { label: 'Getting Started', href: '/about' },
      { label: 'Core Concepts', href: '/concepts' },
      { label: 'References', href: '/references' },
      { label: 'Contributing', href: '/contributing' },
    ],
  },
  {
    title: 'Framework',
    links: [
      { label: 'Career Levels', href: '/framework/leveling' },
      { label: 'Progression Pillars', href: '/framework/progression' },
      { label: 'Guidelines', href: '/framework/guidelines' },
    ],
  },
  {
    title: 'Management',
    links: [
      { label: 'Overview', href: '/management' },
      { label: 'Developing Leaders', href: '/management/developing-leaders' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: 'https://github.com/guilhermesantos/careertopologies.com' },
      { label: 'Discussions', href: 'https://github.com/guilhermesantos/careertopologies.com/discussions' },
      { label: 'Issues', href: 'https://github.com/guilhermesantos/careertopologies.com/issues' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t mt-auto bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Career Topologies. Open source framework for career development.
          </p>
        </div>
      </div>
    </footer>
  );
}
