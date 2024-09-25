import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    rules: {
      semi: ["error", "always"],           // Punto y coma obligatorio al final de cada línea
      quotes: ["error", "single"],         // Comillas simples obligatorias
      "no-console": "warn",                // Advertir si se usa console.log
      "max-len": ["error", { code: 72 }],  // Limitar las líneas a un máximo de 72 caracteres
    },
  },
];
