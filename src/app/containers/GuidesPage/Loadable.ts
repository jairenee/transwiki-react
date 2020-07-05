/**
 *
 * Asynchronously loads the component for GuidesPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GuidesPage = lazyLoad(
  () => import('./index'),
  module => module.GuidesPage,
);
