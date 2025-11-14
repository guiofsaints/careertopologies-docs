'use client';

import * as React from 'react';
import * as _jsx_runtime from 'react/jsx-runtime';
import * as _jsx_dev_runtime from 'react/jsx-dev-runtime';
import { mdxComponents } from './index';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = React.useMemo(() => {
    try {
      // Provide require as a global for the evaluated code
      const mockRequire = (module: string) => {
        if (module === 'react/jsx-dev-runtime') {
          return _jsx_dev_runtime;
        }
        if (module === 'react/jsx-runtime') {
          return _jsx_runtime;
        }
        if (module === 'react') {
          return React;
        }
        throw new Error(`Module ${module} not found in MDX runtime`);
      };

      // Evaluate the code in a context where 'require' is our mock
      const func = new Function('require', code + '\nreturn Component;');
      const result = func(mockRequire);
      
      // The compiled code returns an object with a 'default' export
      return result.default || result;
    } catch (error) {
      console.error('Error rendering MDX:', error);
      return () => React.createElement('div', { style: { color: 'red', padding: '20px' } }, 
        'Error rendering MDX content. Check console for details.'
      );
    }
  }, [code]);

  return <Component components={mdxComponents} />;
}
