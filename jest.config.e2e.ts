import type { Config } from '@jest/types';
import defaultConfig from './jest.config';

const config: Config.InitialOptions = {
    ...defaultConfig,
    testRegex: ['.*\\e2e-spec\\.ts$'],
    globalSetup: '<rootDir>/test/setup.e2e.ts',
};

export default config;
