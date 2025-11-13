import { ReactNode } from 'react';
import { Box, Flex, Grid, Container, Section, Heading, Text } from '@radix-ui/themes';

// Standard layout components based on design system analysis
// Refactored to use Radix Themes internally

interface SectionContainerProps {
  children: ReactNode;
  variant?: 'default' | 'narrow' | 'wide';
  padding?: 'default' | 'sm' | 'lg' | 'xl';
  background?: 'default' | 'muted';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionContainer({
  children,
  variant = 'default',
  padding = 'default',
  background = 'default',
  align = 'left',
  className = ''
}: SectionContainerProps) {
  // Map variant to Radix Container size
  const containerSize = {
    narrow: '3',   // ~880px - for text-heavy content
    default: '4',  // ~1136px - standard content width (closest to max-w-6xl)
    wide: '4'      // ~1136px - keeping consistent with default (Radix doesn't have size 5+)
  } as const;

  // Map padding to Radix Section size
  const sectionSize = {
    sm: '1',      // Small vertical padding
    default: '2', // Medium vertical padding
    lg: '3',      // Large vertical padding
    xl: '3'       // Extra large (use size 3, Radix max)
  } as const;

  // Alignment mapping
  const textAlign = align as 'left' | 'center' | 'right';

  return (
    <Section
      size={sectionSize[padding]}
      style={{
        backgroundColor: background === 'muted' ? 'var(--accent-2)' : undefined
      }}
    >
      <Container size={containerSize[variant]} px="6">
        <Box
          style={{ textAlign }}
          className={className}
        >
          {children}
        </Box>
      </Container>
    </Section>
  );
}

interface GridContainerProps {
  children: ReactNode;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
}

export function GridContainer({
  children,
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'md',
  align = 'stretch',
  className = ''
}: GridContainerProps) {
  // Map gap sizes to Radix spacing scale (1-9)
  const gapScale = {
    xs: '2',   // 8px
    sm: '4',   // 16px
    md: '5',   // 24px - standard for most layouts
    lg: '6',   // 32px - for spacious layouts
    xl: '7'    // 48px - for major section separation
  } as const;

  // Map alignment
  const alignMap = {
    start: 'start',
    center: 'center',
    end: 'end',
    stretch: 'stretch'
  } as const;

  // Build columns responsive object for Radix Grid
  const columns = {
    initial: String(cols.default || 1),
    ...(cols.sm && { sm: String(cols.sm) }),
    ...(cols.md && { md: String(cols.md) }),
    ...(cols.lg && { lg: String(cols.lg) }),
    ...(cols.xl && { xl: String(cols.xl) })
  };

  return (
    <Grid
      columns={columns}
      gap={gapScale[gap]}
      align={alignMap[align]}
      className={className}
    >
      {children}
    </Grid>
  );
}

// Standard card component with consistent spacing
interface CardProps {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  padding = 'md',
  align = 'left',
  className = '',
  hover = false
}: CardProps) {
  // Map padding to Radix spacing scale
  const paddingScale = {
    sm: '4',  // 16px
    md: '5',  // 24px - standard card padding
    lg: '6'   // 32px - for feature cards
  } as const;

  const textAlign = align as 'left' | 'center' | 'right';

  return (
    <Box
      p={paddingScale[padding]}
      style={{
        backgroundColor: 'var(--color-panel)',
        border: '1px solid var(--gray-6)',
        borderRadius: 'var(--radius-3)',
        textAlign,
        ...(hover && {
          transition: 'all 0.2s ease',
          cursor: 'pointer'
        })
      }}
      className={`${hover ? 'hover-card' : ''} ${className}`}
      onMouseEnter={hover ? (e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-5)';
        e.currentTarget.style.borderColor = 'var(--accent-7)';
      } : undefined}
      onMouseLeave={hover ? (e) => {
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = 'var(--gray-6)';
      } : undefined}
    >
      {children}
    </Box>
  );
}

// Content width container for text-heavy sections
interface ContentContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  center?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function ContentContainer({
  children,
  size = 'md',
  center = true,
  align = 'left',
  className = ''
}: ContentContainerProps) {
  // Map size to max-width values
  const maxWidthMap = {
    sm: '672px',  // ~max-w-2xl - for narrow text
    md: '768px',  // ~max-w-3xl - for standard content
    lg: '1024px'  // ~max-w-4xl - for wider content
  } as const;

  const textAlign = align as 'left' | 'center' | 'right';

  return (
    <Box
      style={{
        maxWidth: maxWidthMap[size],
        marginLeft: center ? 'auto' : undefined,
        marginRight: center ? 'auto' : undefined,
        textAlign
      }}
      className={className}
    >
      {children}
    </Box>
  );
}

// Standard section header component
interface SectionHeaderProps {
  title: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  description,
  size = 'md',
  align = 'center',
  className = ''
}: SectionHeaderProps) {
  // Map size to Radix Heading size (using H2 sizes)
  const headingSize = {
    sm: '5',  // Smaller section heading
    md: '6',  // Standard section heading (H2 standard)
    lg: '7'   // Large section heading
  } as const;

  const textAlign = align as 'left' | 'center';
  const marginBottom = description ? '4' : '6';

  return (
    <Box
      style={{ textAlign }}
      className={className}
    >
      <Heading
        as="h2"
        size={headingSize[size]}
        mb={marginBottom}
        style={{ color: 'var(--accent-11)' }}
      >
        {title}
      </Heading>
      {description && (
        <ContentContainer size="md" center={align === 'center'} align={align}>
          <Text size="3" color="gray" style={{ lineHeight: '1.6' }} mb="6">
            {description}
          </Text>
        </ContentContainer>
      )}
    </Box>
  );
}

// Flex container for centered layouts
interface FlexContainerProps {
  children: ReactNode;
  direction?: 'row' | 'col';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
  className?: string;
}

export function FlexContainer({
  children,
  direction = 'row',
  align = 'center',
  justify = 'center',
  gap = 'md',
  wrap = false,
  className = ''
}: FlexContainerProps) {
  // Map gap to Radix spacing scale
  const gapScale = {
    xs: '2',   // 8px
    sm: '4',   // 16px
    md: '5',   // 24px
    lg: '6',   // 32px
    xl: '7'    // 48px
  } as const;

  // Map direction
  const directionMap = {
    row: 'row',
    col: 'column'
  } as const;

  // Map alignment
  const alignMap = {
    start: 'start',
    center: 'center',
    end: 'end',
    stretch: 'stretch'
  } as const;

  // Map justify - Radix only supports start, center, end, between
  const justifyMap = {
    start: 'start',
    center: 'center',
    end: 'end',
    between: 'between',
    around: 'between',  // Fallback to between
    evenly: 'between'   // Fallback to between
  } as const;

  return (
    <Flex
      direction={directionMap[direction]}
      align={alignMap[align]}
      justify={justifyMap[justify]}
      gap={gapScale[gap]}
      wrap={wrap ? 'wrap' : 'nowrap'}
      className={className}
    >
      {children}
    </Flex>
  );
}
