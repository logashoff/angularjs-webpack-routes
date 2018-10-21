// require all modules ending in "_test" from the
// current directory and all subdirectories

import 'angular';
import 'angular-mocks/angular-mocks';

const testsContext = require.context('../src/app', true, /\.js$/);

testsContext.keys().forEach(testsContext);
