'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.nextConfigPartial = void 0;
function nextConfigPartial(appDir) {
  return {
    target: `./${appDir}/next.config.js`,
    transformer: 'merge',
    query:
      "VariableDeclaration[name.name='nextConfig'] > ObjectLiteralExpression",
    value: {
      output: 'export',
    },
  };
}
exports.nextConfigPartial = nextConfigPartial;
//# sourceMappingURL=next.config.js.partial.js.map
