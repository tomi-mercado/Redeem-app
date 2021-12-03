module.exports = {
    singleQuote: true,
    jsxSingleQuote: false,
    importOrder: [
      "^next(.*)$",
      "^@(.*)$",
      "^[^\.@]+$",
      "^(.*)components(.*)$",
      "^(.*)services(.*)$",
      "^(.*)functions$",
      "^(.*)(interfaces)|(enums)$",
      "^\.{2}(.*)$",
      "^\.{1}(.*)$",
      "^(.*)$",
    ],
    importOrderSeparation: true,
  };
  