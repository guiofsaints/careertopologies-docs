// Export all MDX components for use in content
export { Callout } from './callout';
export { CodeBlock } from './code-block';
export { TopologyComparison } from './topology-comparison';
export { ImpactAutonomyMatrix } from './impact-autonomy-matrix';
export { MDXContent } from './mdx-content';

import { Callout } from './callout';
import { CodeBlock } from './code-block';
import { TopologyComparison } from './topology-comparison';
import { ImpactAutonomyMatrix } from './impact-autonomy-matrix';

// MDX components mapping for useMDXComponent
export const mdxComponents = {
  Callout,
  CodeBlock,
  TopologyComparison,
  ImpactAutonomyMatrix,
};
