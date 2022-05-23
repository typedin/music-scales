"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleBuilder = void 0;
function ScaleBuilder(tonic, degreeBuilders) {
    return degreeBuilders.map(function (degreeBuilder, index) { return ({
        order: index + 1,
        name: index == 0 ? tonic.name : degreeBuilder.callable(tonic).name,
        alteration: index == 0
            ? tonic.alteration
            : degreeBuilder.callable(tonic).alteration,
        function: degreeBuilder.function,
    }); });
}
exports.ScaleBuilder = ScaleBuilder;
//# sourceMappingURL=ScaleBuilder.js.map