import { LucideIcon } from 'lucide-react';
import { Heading, Text, Card, Box, Flex } from '@radix-ui/themes';
import { cn } from '@/utils';

export interface FeatureCardProps {
  /**
   * Icon component to display
   */
  icon: LucideIcon;

  /**
   * Card title
   */
  title: string;

  /**
   * Card description/body text
   */
  description: string;

  /**
   * Icon color variant
   */
  iconColor?: 'primary' | 'muted' | 'accent';

  /**
   * Visual style variant
   */
  variant?: 'default' | 'outlined' | 'elevated';

  /**
   * Whether the card is interactive (hover effects)
   */
  interactive?: boolean;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

const iconColorClasses = {
  primary: 'text-primary',
  muted: 'text-muted-foreground',
  accent: 'text-accent-foreground'
} as const;

const variantClasses = {
  default: 'border-border',
  outlined: 'border-2 border-primary',
  elevated: 'border-border shadow-lg'
} as const;

/**
 * FeatureCard Component
 *
 * Pre-composed card for displaying features, benefits, or key points.
 * Combines icon, title, and description in a consistent layout.
 *
 * @example
 * ```tsx
 * // Default feature card
 * <FeatureCard
 *   icon={Target}
 *   title="Clear Goals"
 *   description="Define clear career objectives and progression paths"
 * />
 *
 * // Interactive card with custom styling
 * <FeatureCard
 *   icon={Award}
 *   title="Recognition"
 *   description="Fair and transparent recognition system"
 *   variant="elevated"
 *   interactive
 *   onClick={() => navigate('/recognition')}
 * />
 *
 * // Outlined accent card
 * <FeatureCard
 *   icon={Users}
 *   title="Collaboration"
 *   description="Foster team collaboration and growth"
 *   variant="outlined"
 *   iconColor="accent"
 * />
 * ```
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = 'primary',
  variant = 'default',
  interactive = false,
  onClick,
  className
}: FeatureCardProps) {
  const isClickable = !!onClick || interactive;

  return (
    <Card
      size="2"
      variant="surface"
      className={cn(
        'text-center transition-all duration-200',
        variantClasses[variant],
        isClickable && 'cursor-pointer hover:shadow-md hover:scale-105',
        className
      )}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      } : undefined}
    >
      <Flex direction="column" align="center" p="4">
        <Box mb="4">
          <Icon
            className={cn('w-8 h-8', iconColorClasses[iconColor])}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </Box>
        <Heading as="h3" size="4" mb="3">
          {title}
        </Heading>
        <Text as="p" size="3" color="gray" className="leading-relaxed">
          {description}
        </Text>
      </Flex>
    </Card>
  );
}

/**
 * FeatureCardGrid Component
 *
 * Responsive grid container for feature cards with consistent spacing.
 *
 * @example
 * ```tsx
 * <FeatureCardGrid>
 *   <FeatureCard icon={Target} title="Goal 1" description="..." />
 *   <FeatureCard icon={Award} title="Goal 2" description="..." />
 *   <FeatureCard icon={Users} title="Goal 3" description="..." />
 * </FeatureCardGrid>
 * ```
 */
export function FeatureCardGrid({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
        className
      )}
    >
      {children}
    </div>
  );
}

export default FeatureCard;
