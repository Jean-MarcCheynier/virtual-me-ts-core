"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getLevel = exports.LevelEnum = void 0;
var LevelEnum;
(function (LevelEnum) {
    LevelEnum["JUNIOR"] = "JUNIOR";
    LevelEnum["MEDIOR"] = "MEDIOR";
    LevelEnum["SENIOR"] = "SENIOR";
})(LevelEnum = exports.LevelEnum || (exports.LevelEnum = {}));
function getLevel(level) {
    var translatable;
    switch (level) {
        case LevelEnum.JUNIOR:
            translatable = {
                translation: {
                    en: 'junior',
                    fr: 'debutant'
                },
                I18N: 'const.level.junior'
            };
            break;
        case LevelEnum.MEDIOR:
            translatable = {
                translation: {
                    en: 'medior',
                    fr: 'intermédiaire'
                },
                I18N: 'const.level.medior'
            };
            break;
        case LevelEnum.SENIOR:
            translatable = {
                translation: {
                    en: 'senior',
                    fr: 'expert'
                },
                I18N: 'const.level.senior'
            };
            break;
    }
    return __assign(__assign({}, translatable), { type: level });
}
exports.getLevel = getLevel;
