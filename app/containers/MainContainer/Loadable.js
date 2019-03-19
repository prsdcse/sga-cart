/**
 *
 * Asynchronously loads the component for MainContainer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
