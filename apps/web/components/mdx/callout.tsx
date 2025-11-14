import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type CalloutType = 'info' | 'warning' | 'success' | 'danger';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig = {
  info: {
    icon: Info,
    className: 'border-blue-500 bg-blue-50 dark:bg-blue-950/20',
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20',
  },
  success: {
    icon: CheckCircle,
    className: 'border-green-500 bg-green-50 dark:bg-green-950/20',
  },
  danger: {
    icon: AlertCircle,
    className: 'border-red-500 bg-red-50 dark:bg-red-950/20',
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <Alert className={`my-6 ${config.className}`}>
      <Icon className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription className="mt-2">{children}</AlertDescription>
    </Alert>
  );
}
