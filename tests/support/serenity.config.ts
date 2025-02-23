// tests/support/serenity.config.ts
import { configure } from '@serenity-js/core';
import { ArtifactArchiver } from '@serenity-js/core/lib/stage';
import SerenityBDDReporter from '@serenity-js/serenity-bdd';
import { ConsoleReporter } from '@serenity-js/console-reporter';

configure({
    crew: [
        ConsoleReporter.forDarkTerminals(),
        SerenityBDDReporter({}),  // Se pasa un objeto vacío como configuración
        ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
    ],
});


