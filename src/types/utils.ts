// Utility types for the application
import * as React from 'react';

// Make all properties optional
export type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Make specific properties required
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Extract function type
export type ExtractFunctionType<T> = T extends (...args: any[]) => any ? T : never;

// Deep readonly
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Component with ref
export type ComponentWithRef<T, P = {}> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

// HTML element props
export type HTMLElementProps<T extends keyof React.JSX.IntrinsicElements> = React.JSX.IntrinsicElements[T];

// Polymorphic component props
export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = Props &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props> & {
    as?: C;
  };
