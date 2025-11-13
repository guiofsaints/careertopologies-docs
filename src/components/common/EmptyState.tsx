import { LucideIcon, SearchX, AlertCircle, Inbox } from 'lucide-react';
import { Heading, Text, Button } from '@radix-ui/themes';
import { cn } from '@/utils';

export interface EmptyStateProps {
  /**
   * Visual variant - determines icon and styling
   */
  variant?: 'default' | 'error' | 'search';

  /**
   * Custom icon to display (overrides variant icon)
   */
  icon?: LucideIcon;

  /**
   * Primary heading text
   */
  title: string;

  /**
   * Supporting description text
   */
  description?: string;

  /**
   * Optional action button
   */
  action?: {
    label: string;
    onClick: () => void;
  };

  /**
   * Additional CSS classes
   */
  className?: string;
}

const variantConfig = {
  default: {
    icon: Inbox,
    iconColor: 'text-muted-foreground',
    bgColor: 'bg-muted/30'
  },
  error: {
    icon: AlertCircle,
    iconColor: 'text-destructive',
    bgColor: 'bg-destructive/10'
  },
  search: {
    icon: SearchX,
    iconColor: 'text-muted-foreground',
    bgColor: 'bg-muted/30'
  }
} as const;

/**
 * EmptyState Component
 *
 * Displays a friendly message when content is unavailable or no results are found.
 *
 * @example
 * ```tsx
 * // Default empty state
 * <EmptyState
 *   title="No items yet"
 *   description="Get started by creating your first item"
 *   action={{
 *     label: "Create Item",
 *     onClick: () => navigate('/create')
 *   }}
 * />
 *
 * // Search no results
 * <EmptyState
 *   variant="search"
 *   title="No results found"
 *   description="Try adjusting your search terms"
 * />
 *
 * // Error state
 * <EmptyState
 *   variant="error"
 *   title="Failed to load"
 *   description="Something went wrong. Please try again later."
 *   action={{
 *     label: "Retry",
 *     onClick: handleRetry
 *   }}
 * />
 * ```
 */
export function EmptyState({
  variant = 'default',
  icon,
  title,
  description,
  action,
  className
}: EmptyStateProps) {
  const config = variantConfig[variant];
  const Icon = icon || config.icon;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-16 px-6 text-center rounded-lg',
        config.bgColor,
        className
      )}
      role="status"
      aria-live="polite"
    >
      {/* Icon */}
      <div className="mb-6">
        <Icon
          className={cn('w-16 h-16', config.iconColor)}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <Heading as="h3" size="4" className="mb-3 max-w-md">
        {title}
      </Heading>

      {/* Description */}
      {description && (
        <Text
          as="p"
          size="3"
          color="gray"
          className="mb-6 max-w-lg"
        >
          {description}
        </Text>
      )}

      {/* Action Button */}
      {action && (
        <Button
          onClick={action.onClick}
          variant="solid"
          size="2"
          aria-label={action.label}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

/**
 * Pre-composed variants for common use cases
 */
export const EmptyStateVariants = {
  /**
   * No items yet - Generic empty state
   */
  NoItems: ({ onCreate }: { onCreate?: () => void }) => (
    <EmptyState
      title="No items yet"
      description="Get started by creating your first item"
      action={onCreate ? {
        label: "Create Item",
        onClick: onCreate
      } : undefined}
    />
  ),

  /**
   * Search returned no results
   */
  NoSearchResults: ({ query }: { query?: string }) => (
    <EmptyState
      variant="search"
      title="No results found"
      description={
        query
          ? `We couldn't find anything matching "${query}". Try different keywords.`
          : "Try adjusting your search terms"
      }
    />
  ),

  /**
   * Error occurred while loading
   */
  LoadError: ({ onRetry }: { onRetry?: () => void }) => (
    <EmptyState
      variant="error"
      title="Failed to load content"
      description="Something went wrong. Please try again."
      action={onRetry ? {
        label: "Retry",
        onClick: onRetry
      } : undefined}
    />
  ),

  /**
   * Feature coming soon
   */
  ComingSoon: () => (
    <EmptyState
      title="Coming Soon"
      description="This feature is currently in development. Check back later!"
    />
  ),

  /**
   * No favorites/bookmarks
   */
  NoFavorites: () => (
    <EmptyState
      title="No favorites yet"
      description="Items you favorite will appear here"
    />
  )
};

export default EmptyState;
