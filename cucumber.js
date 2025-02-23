module.exports = {
    default: {
      require: [
        'tests/step_definitions/*.ts', // Ruta a tus definiciones de pasos
        'tests/support/*.ts',          // Ruta a tus archivos de soporte
      ],
      format: [
        '@serenity-js/cucumber',
      ],
      requireModule: [
        'ts-node/register',
      ],
      'format-options': {
        snippetInterface: 'async-await',
      },
    },
  };
