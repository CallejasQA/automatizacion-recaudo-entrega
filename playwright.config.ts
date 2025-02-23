import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        baseURL: 'https://apiv2-test.coordinadora.com', // Ajusta la URL base según corresponda
    },
    reporter: [
        ['@serenity-js/playwright-test', {
            crew: [
                '@serenity-js/console-reporter',
                '@serenity-js/serenity-bdd',
                ['@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' }],
            ],
        }],
    ],
};

export default config;