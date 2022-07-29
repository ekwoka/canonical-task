(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/commonjs/perf_hooks.cjs
  var require_perf_hooks = __commonJS({
    "node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/commonjs/perf_hooks.cjs"(exports) {
      try {
        const { performance: performance2 } = __require("perf_hooks");
        exports.performance = performance2;
      } catch (fallback) {
        exports.performance = { now() {
          return +new Date();
        } };
      }
    }
  });

  // node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js
  var require_boolbase = __commonJS({
    "node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js"(exports, module) {
      module.exports = {
        trueFunc: function trueFunc() {
          return true;
        },
        falseFunc: function falseFunc() {
          return false;
        }
      };
    }
  });

  // node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/types.js
  var require_types = __commonJS({
    "node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AttributeAction = exports.IgnoreCaseMode = exports.SelectorType = void 0;
      var SelectorType4;
      (function(SelectorType5) {
        SelectorType5["Attribute"] = "attribute";
        SelectorType5["Pseudo"] = "pseudo";
        SelectorType5["PseudoElement"] = "pseudo-element";
        SelectorType5["Tag"] = "tag";
        SelectorType5["Universal"] = "universal";
        SelectorType5["Adjacent"] = "adjacent";
        SelectorType5["Child"] = "child";
        SelectorType5["Descendant"] = "descendant";
        SelectorType5["Parent"] = "parent";
        SelectorType5["Sibling"] = "sibling";
        SelectorType5["ColumnCombinator"] = "column-combinator";
      })(SelectorType4 = exports.SelectorType || (exports.SelectorType = {}));
      exports.IgnoreCaseMode = {
        Unknown: null,
        QuirksMode: "quirks",
        IgnoreCase: true,
        CaseSensitive: false
      };
      var AttributeAction2;
      (function(AttributeAction3) {
        AttributeAction3["Any"] = "any";
        AttributeAction3["Element"] = "element";
        AttributeAction3["End"] = "end";
        AttributeAction3["Equals"] = "equals";
        AttributeAction3["Exists"] = "exists";
        AttributeAction3["Hyphen"] = "hyphen";
        AttributeAction3["Not"] = "not";
        AttributeAction3["Start"] = "start";
      })(AttributeAction2 = exports.AttributeAction || (exports.AttributeAction = {}));
    }
  });

  // node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/parse.js
  var require_parse = __commonJS({
    "node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = exports.isTraversal = void 0;
      var types_1 = require_types();
      var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
      var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
      var actionTypes = /* @__PURE__ */ new Map([
        [126, types_1.AttributeAction.Element],
        [94, types_1.AttributeAction.Start],
        [36, types_1.AttributeAction.End],
        [42, types_1.AttributeAction.Any],
        [33, types_1.AttributeAction.Not],
        [124, types_1.AttributeAction.Hyphen]
      ]);
      var unpackPseudos = /* @__PURE__ */ new Set([
        "has",
        "not",
        "matches",
        "is",
        "where",
        "host",
        "host-context"
      ]);
      function isTraversal2(selector) {
        switch (selector.type) {
          case types_1.SelectorType.Adjacent:
          case types_1.SelectorType.Child:
          case types_1.SelectorType.Descendant:
          case types_1.SelectorType.Parent:
          case types_1.SelectorType.Sibling:
          case types_1.SelectorType.ColumnCombinator:
            return true;
          default:
            return false;
        }
      }
      exports.isTraversal = isTraversal2;
      var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
      function funescape(_, escaped, escapedWhitespace) {
        var high = parseInt(escaped, 16) - 65536;
        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      }
      function unescapeCSS(str) {
        return str.replace(reEscape, funescape);
      }
      function isQuote(c) {
        return c === 39 || c === 34;
      }
      function isWhitespace2(c) {
        return c === 32 || c === 9 || c === 10 || c === 12 || c === 13;
      }
      function parse6(selector) {
        var subselects2 = [];
        var endIndex = parseSelector(subselects2, "".concat(selector), 0);
        if (endIndex < selector.length) {
          throw new Error("Unmatched selector: ".concat(selector.slice(endIndex)));
        }
        return subselects2;
      }
      exports.parse = parse6;
      function parseSelector(subselects2, selector, selectorIndex) {
        var tokens = [];
        function getName3(offset) {
          var match = selector.slice(selectorIndex + offset).match(reName);
          if (!match) {
            throw new Error("Expected name, found ".concat(selector.slice(selectorIndex)));
          }
          var name = match[0];
          selectorIndex += offset + name.length;
          return unescapeCSS(name);
        }
        function stripWhitespace(offset) {
          selectorIndex += offset;
          while (selectorIndex < selector.length && isWhitespace2(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
          }
        }
        function readValueWithParenthesis() {
          selectorIndex += 1;
          var start = selectorIndex;
          var counter = 1;
          for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) {
              counter++;
            } else if (selector.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) {
              counter--;
            }
          }
          if (counter) {
            throw new Error("Parenthesis not matched");
          }
          return unescapeCSS(selector.slice(start, selectorIndex - 1));
        }
        function isEscaped(pos) {
          var slashCount = 0;
          while (selector.charCodeAt(--pos) === 92)
            slashCount++;
          return (slashCount & 1) === 1;
        }
        function ensureNotTraversal() {
          if (tokens.length > 0 && isTraversal2(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
          }
        }
        function addTraversal(type) {
          if (tokens.length > 0 && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
          }
          ensureNotTraversal();
          tokens.push({ type });
        }
        function addSpecialAttribute(name, action2) {
          tokens.push({
            type: types_1.SelectorType.Attribute,
            name,
            action: action2,
            value: getName3(1),
            namespace: null,
            ignoreCase: "quirks"
          });
        }
        function finalizeSubselector() {
          if (tokens.length && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens.pop();
          }
          if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
          }
          subselects2.push(tokens);
        }
        stripWhitespace(0);
        if (selector.length === selectorIndex) {
          return selectorIndex;
        }
        loop:
          while (selectorIndex < selector.length) {
            var firstChar = selector.charCodeAt(selectorIndex);
            switch (firstChar) {
              case 32:
              case 9:
              case 10:
              case 12:
              case 13: {
                if (tokens.length === 0 || tokens[0].type !== types_1.SelectorType.Descendant) {
                  ensureNotTraversal();
                  tokens.push({ type: types_1.SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
              }
              case 62: {
                addTraversal(types_1.SelectorType.Child);
                stripWhitespace(1);
                break;
              }
              case 60: {
                addTraversal(types_1.SelectorType.Parent);
                stripWhitespace(1);
                break;
              }
              case 126: {
                addTraversal(types_1.SelectorType.Sibling);
                stripWhitespace(1);
                break;
              }
              case 43: {
                addTraversal(types_1.SelectorType.Adjacent);
                stripWhitespace(1);
                break;
              }
              case 46: {
                addSpecialAttribute("class", types_1.AttributeAction.Element);
                break;
              }
              case 35: {
                addSpecialAttribute("id", types_1.AttributeAction.Equals);
                break;
              }
              case 91: {
                stripWhitespace(1);
                var name_1 = void 0;
                var namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124) {
                  name_1 = getName3(1);
                } else if (selector.startsWith("*|", selectorIndex)) {
                  namespace = "*";
                  name_1 = getName3(2);
                } else {
                  name_1 = getName3(0);
                  if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 61) {
                    namespace = name_1;
                    name_1 = getName3(1);
                  }
                }
                stripWhitespace(0);
                var action = types_1.AttributeAction.Exists;
                var possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                  action = possibleAction;
                  if (selector.charCodeAt(selectorIndex + 1) !== 61) {
                    throw new Error("Expected `=`");
                  }
                  stripWhitespace(2);
                } else if (selector.charCodeAt(selectorIndex) === 61) {
                  action = types_1.AttributeAction.Equals;
                  stripWhitespace(1);
                }
                var value = "";
                var ignoreCase2 = null;
                if (action !== "exists") {
                  if (isQuote(selector.charCodeAt(selectorIndex))) {
                    var quote = selector.charCodeAt(selectorIndex);
                    var sectionEnd = selectorIndex + 1;
                    while (sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                      sectionEnd += 1;
                    }
                    if (selector.charCodeAt(sectionEnd) !== quote) {
                      throw new Error("Attribute value didn't end");
                    }
                    value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                    selectorIndex = sectionEnd + 1;
                  } else {
                    var valueStart = selectorIndex;
                    while (selectorIndex < selector.length && (!isWhitespace2(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) {
                      selectorIndex += 1;
                    }
                    value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                  }
                  stripWhitespace(0);
                  var forceIgnore = selector.charCodeAt(selectorIndex) | 32;
                  if (forceIgnore === 115) {
                    ignoreCase2 = false;
                    stripWhitespace(1);
                  } else if (forceIgnore === 105) {
                    ignoreCase2 = true;
                    stripWhitespace(1);
                  }
                }
                if (selector.charCodeAt(selectorIndex) !== 93) {
                  throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                var attributeSelector = {
                  type: types_1.SelectorType.Attribute,
                  name: name_1,
                  action,
                  value,
                  namespace,
                  ignoreCase: ignoreCase2
                };
                tokens.push(attributeSelector);
                break;
              }
              case 58: {
                if (selector.charCodeAt(selectorIndex + 1) === 58) {
                  tokens.push({
                    type: types_1.SelectorType.PseudoElement,
                    name: getName3(2).toLowerCase(),
                    data: selector.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
                  });
                  continue;
                }
                var name_2 = getName3(1).toLowerCase();
                var data = null;
                if (selector.charCodeAt(selectorIndex) === 40) {
                  if (unpackPseudos.has(name_2)) {
                    if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                      throw new Error("Pseudo-selector ".concat(name_2, " cannot be quoted"));
                    }
                    data = [];
                    selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                    if (selector.charCodeAt(selectorIndex) !== 41) {
                      throw new Error("Missing closing parenthesis in :".concat(name_2, " (").concat(selector, ")"));
                    }
                    selectorIndex += 1;
                  } else {
                    data = readValueWithParenthesis();
                    if (stripQuotesFromPseudos.has(name_2)) {
                      var quot = data.charCodeAt(0);
                      if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                        data = data.slice(1, -1);
                      }
                    }
                    data = unescapeCSS(data);
                  }
                }
                tokens.push({ type: types_1.SelectorType.Pseudo, name: name_2, data });
                break;
              }
              case 44: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
              }
              default: {
                if (selector.startsWith("/*", selectorIndex)) {
                  var endIndex = selector.indexOf("*/", selectorIndex + 2);
                  if (endIndex < 0) {
                    throw new Error("Comment was not terminated");
                  }
                  selectorIndex = endIndex + 2;
                  if (tokens.length === 0) {
                    stripWhitespace(0);
                  }
                  break;
                }
                var namespace = null;
                var name_3 = void 0;
                if (firstChar === 42) {
                  selectorIndex += 1;
                  name_3 = "*";
                } else if (firstChar === 124) {
                  name_3 = "";
                  if (selector.charCodeAt(selectorIndex + 1) === 124) {
                    addTraversal(types_1.SelectorType.ColumnCombinator);
                    stripWhitespace(2);
                    break;
                  }
                } else if (reName.test(selector.slice(selectorIndex))) {
                  name_3 = getName3(0);
                } else {
                  break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 124) {
                  namespace = name_3;
                  if (selector.charCodeAt(selectorIndex + 1) === 42) {
                    name_3 = "*";
                    selectorIndex += 2;
                  } else {
                    name_3 = getName3(1);
                  }
                }
                tokens.push(name_3 === "*" ? { type: types_1.SelectorType.Universal, namespace } : { type: types_1.SelectorType.Tag, name: name_3, namespace });
              }
            }
          }
        finalizeSubselector();
        return selectorIndex;
      }
    }
  });

  // node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/stringify.js
  var require_stringify = __commonJS({
    "node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/stringify.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = void 0;
      var types_1 = require_types();
      var attribValChars = ["\\", '"'];
      var pseudoValChars = __spreadArray(__spreadArray([], attribValChars, true), ["(", ")"], false);
      var charsToEscapeInAttributeValue = new Set(attribValChars.map(function(c) {
        return c.charCodeAt(0);
      }));
      var charsToEscapeInPseudoValue = new Set(pseudoValChars.map(function(c) {
        return c.charCodeAt(0);
      }));
      var charsToEscapeInName = new Set(__spreadArray(__spreadArray([], pseudoValChars, true), [
        "~",
        "^",
        "$",
        "*",
        "+",
        "!",
        "|",
        ":",
        "[",
        "]",
        " ",
        "."
      ], false).map(function(c) {
        return c.charCodeAt(0);
      }));
      function stringify(selector) {
        return selector.map(function(token) {
          return token.map(stringifyToken).join("");
        }).join(", ");
      }
      exports.stringify = stringify;
      function stringifyToken(token, index, arr) {
        switch (token.type) {
          case types_1.SelectorType.Child:
            return index === 0 ? "> " : " > ";
          case types_1.SelectorType.Parent:
            return index === 0 ? "< " : " < ";
          case types_1.SelectorType.Sibling:
            return index === 0 ? "~ " : " ~ ";
          case types_1.SelectorType.Adjacent:
            return index === 0 ? "+ " : " + ";
          case types_1.SelectorType.Descendant:
            return " ";
          case types_1.SelectorType.ColumnCombinator:
            return index === 0 ? "|| " : " || ";
          case types_1.SelectorType.Universal:
            return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : "".concat(getNamespace(token.namespace), "*");
          case types_1.SelectorType.Tag:
            return getNamespacedName(token);
          case types_1.SelectorType.PseudoElement:
            return "::".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(escapeName(token.data, charsToEscapeInPseudoValue), ")"));
          case types_1.SelectorType.Pseudo:
            return ":".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data), ")"));
          case types_1.SelectorType.Attribute: {
            if (token.name === "id" && token.action === types_1.AttributeAction.Equals && token.ignoreCase === "quirks" && !token.namespace) {
              return "#".concat(escapeName(token.value, charsToEscapeInName));
            }
            if (token.name === "class" && token.action === types_1.AttributeAction.Element && token.ignoreCase === "quirks" && !token.namespace) {
              return ".".concat(escapeName(token.value, charsToEscapeInName));
            }
            var name_1 = getNamespacedName(token);
            if (token.action === types_1.AttributeAction.Exists) {
              return "[".concat(name_1, "]");
            }
            return "[".concat(name_1).concat(getActionValue(token.action), '="').concat(escapeName(token.value, charsToEscapeInAttributeValue), '"').concat(token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s", "]");
          }
        }
      }
      function getActionValue(action) {
        switch (action) {
          case types_1.AttributeAction.Equals:
            return "";
          case types_1.AttributeAction.Element:
            return "~";
          case types_1.AttributeAction.Start:
            return "^";
          case types_1.AttributeAction.End:
            return "$";
          case types_1.AttributeAction.Any:
            return "*";
          case types_1.AttributeAction.Not:
            return "!";
          case types_1.AttributeAction.Hyphen:
            return "|";
          case types_1.AttributeAction.Exists:
            throw new Error("Shouldn't be here");
        }
      }
      function getNamespacedName(token) {
        return "".concat(getNamespace(token.namespace)).concat(escapeName(token.name, charsToEscapeInName));
      }
      function getNamespace(namespace) {
        return namespace !== null ? "".concat(namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName), "|") : "";
      }
      function escapeName(str, charsToEscape) {
        var lastIdx = 0;
        var ret = "";
        for (var i = 0; i < str.length; i++) {
          if (charsToEscape.has(str.charCodeAt(i))) {
            ret += "".concat(str.slice(lastIdx, i), "\\").concat(str.charAt(i));
            lastIdx = i + 1;
          }
        }
        return ret.length > 0 ? ret + str.slice(lastIdx) : str;
      }
    }
  });

  // node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/index.js
  var require_commonjs = __commonJS({
    "node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/commonjs/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = exports.parse = exports.isTraversal = void 0;
      __exportStar(require_types(), exports);
      var parse_1 = require_parse();
      Object.defineProperty(exports, "isTraversal", { enumerable: true, get: function() {
        return parse_1.isTraversal;
      } });
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parse_1.parse;
      } });
      var stringify_1 = require_stringify();
      Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
        return stringify_1.stringify;
      } });
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/StyleSheet.js
  var require_StyleSheet = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/StyleSheet.js"(exports) {
      var CSSOM = {};
      CSSOM.StyleSheet = function StyleSheet() {
        this.parentStyleSheet = null;
      };
      exports.StyleSheet = CSSOM.StyleSheet;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSRule.js
  var require_CSSRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSRule.js"(exports) {
      var CSSOM = {};
      CSSOM.CSSRule = function CSSRule() {
        this.parentRule = null;
        this.parentStyleSheet = null;
      };
      CSSOM.CSSRule.UNKNOWN_RULE = 0;
      CSSOM.CSSRule.STYLE_RULE = 1;
      CSSOM.CSSRule.CHARSET_RULE = 2;
      CSSOM.CSSRule.IMPORT_RULE = 3;
      CSSOM.CSSRule.MEDIA_RULE = 4;
      CSSOM.CSSRule.FONT_FACE_RULE = 5;
      CSSOM.CSSRule.PAGE_RULE = 6;
      CSSOM.CSSRule.KEYFRAMES_RULE = 7;
      CSSOM.CSSRule.KEYFRAME_RULE = 8;
      CSSOM.CSSRule.MARGIN_RULE = 9;
      CSSOM.CSSRule.NAMESPACE_RULE = 10;
      CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
      CSSOM.CSSRule.SUPPORTS_RULE = 12;
      CSSOM.CSSRule.DOCUMENT_RULE = 13;
      CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
      CSSOM.CSSRule.VIEWPORT_RULE = 15;
      CSSOM.CSSRule.REGION_STYLE_RULE = 16;
      CSSOM.CSSRule.prototype = {
        constructor: CSSOM.CSSRule
      };
      exports.CSSRule = CSSOM.CSSRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleRule.js
  var require_CSSStyleRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleRule.js"(exports) {
      var CSSOM = {
        CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSStyleRule = function CSSStyleRule() {
        CSSOM.CSSRule.call(this);
        this.selectorText = "";
        this.style = new CSSOM.CSSStyleDeclaration();
        this.style.parentRule = this;
      };
      CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
      CSSOM.CSSStyleRule.prototype.type = 1;
      Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
        get: function() {
          var text;
          if (this.selectorText) {
            text = this.selectorText + " {" + this.style.cssText + "}";
          } else {
            text = "";
          }
          return text;
        },
        set: function(cssText) {
          var rule = CSSOM.CSSStyleRule.parse(cssText);
          this.style = rule.style;
          this.selectorText = rule.selectorText;
        }
      });
      CSSOM.CSSStyleRule.parse = function(ruleText) {
        var i = 0;
        var state = "selector";
        var index;
        var j = i;
        var buffer = "";
        var SIGNIFICANT_WHITESPACE = {
          "selector": true,
          "value": true
        };
        var styleRule = new CSSOM.CSSStyleRule();
        var name, priority = "";
        for (var character; character = ruleText.charAt(i); i++) {
          switch (character) {
            case " ":
            case "	":
            case "\r":
            case "\n":
            case "\f":
              if (SIGNIFICANT_WHITESPACE[state]) {
                switch (ruleText.charAt(i - 1)) {
                  case " ":
                  case "	":
                  case "\r":
                  case "\n":
                  case "\f":
                    break;
                  default:
                    buffer += " ";
                    break;
                }
              }
              break;
            case '"':
              j = i + 1;
              index = ruleText.indexOf('"', j) + 1;
              if (!index) {
                throw '" is missing';
              }
              buffer += ruleText.slice(i, index);
              i = index - 1;
              break;
            case "'":
              j = i + 1;
              index = ruleText.indexOf("'", j) + 1;
              if (!index) {
                throw "' is missing";
              }
              buffer += ruleText.slice(i, index);
              i = index - 1;
              break;
            case "/":
              if (ruleText.charAt(i + 1) === "*") {
                i += 2;
                index = ruleText.indexOf("*/", i);
                if (index === -1) {
                  throw new SyntaxError("Missing */");
                } else {
                  i = index + 1;
                }
              } else {
                buffer += character;
              }
              break;
            case "{":
              if (state === "selector") {
                styleRule.selectorText = buffer.trim();
                buffer = "";
                state = "name";
              }
              break;
            case ":":
              if (state === "name") {
                name = buffer.trim();
                buffer = "";
                state = "value";
              } else {
                buffer += character;
              }
              break;
            case "!":
              if (state === "value" && ruleText.indexOf("!important", i) === i) {
                priority = "important";
                i += "important".length;
              } else {
                buffer += character;
              }
              break;
            case ";":
              if (state === "value") {
                styleRule.style.setProperty(name, buffer.trim(), priority);
                priority = "";
                buffer = "";
                state = "name";
              } else {
                buffer += character;
              }
              break;
            case "}":
              if (state === "value") {
                styleRule.style.setProperty(name, buffer.trim(), priority);
                priority = "";
                buffer = "";
              } else if (state === "name") {
                break;
              } else {
                buffer += character;
              }
              state = "selector";
              break;
            default:
              buffer += character;
              break;
          }
        }
        return styleRule;
      };
      exports.CSSStyleRule = CSSOM.CSSStyleRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleSheet.js
  var require_CSSStyleSheet = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleSheet.js"(exports) {
      var CSSOM = {
        StyleSheet: require_StyleSheet().StyleSheet,
        CSSStyleRule: require_CSSStyleRule().CSSStyleRule
      };
      CSSOM.CSSStyleSheet = function CSSStyleSheet() {
        CSSOM.StyleSheet.call(this);
        this.cssRules = [];
      };
      CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
      CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;
      CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
        if (index < 0 || index > this.cssRules.length) {
          throw new RangeError("INDEX_SIZE_ERR");
        }
        var cssRule = CSSOM.parse(rule).cssRules[0];
        cssRule.parentStyleSheet = this;
        this.cssRules.splice(index, 0, cssRule);
        return index;
      };
      CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
        if (index < 0 || index >= this.cssRules.length) {
          throw new RangeError("INDEX_SIZE_ERR");
        }
        this.cssRules.splice(index, 1);
      };
      CSSOM.CSSStyleSheet.prototype.toString = function() {
        var result = "";
        var rules = this.cssRules;
        for (var i = 0; i < rules.length; i++) {
          result += rules[i].cssText + "\n";
        }
        return result;
      };
      exports.CSSStyleSheet = CSSOM.CSSStyleSheet;
      CSSOM.parse = require_parse2().parse;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/MediaList.js
  var require_MediaList = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/MediaList.js"(exports) {
      var CSSOM = {};
      CSSOM.MediaList = function MediaList() {
        this.length = 0;
      };
      CSSOM.MediaList.prototype = {
        constructor: CSSOM.MediaList,
        get mediaText() {
          return Array.prototype.join.call(this, ", ");
        },
        set mediaText(value) {
          var values = value.split(",");
          var length = this.length = values.length;
          for (var i = 0; i < length; i++) {
            this[i] = values[i].trim();
          }
        },
        appendMedium: function(medium) {
          if (Array.prototype.indexOf.call(this, medium) === -1) {
            this[this.length] = medium;
            this.length++;
          }
        },
        deleteMedium: function(medium) {
          var index = Array.prototype.indexOf.call(this, medium);
          if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
          }
        }
      };
      exports.MediaList = CSSOM.MediaList;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSImportRule.js
  var require_CSSImportRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSImportRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSStyleSheet: require_CSSStyleSheet().CSSStyleSheet,
        MediaList: require_MediaList().MediaList
      };
      CSSOM.CSSImportRule = function CSSImportRule() {
        CSSOM.CSSRule.call(this);
        this.href = "";
        this.media = new CSSOM.MediaList();
        this.styleSheet = new CSSOM.CSSStyleSheet();
      };
      CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
      CSSOM.CSSImportRule.prototype.type = 3;
      Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
        get: function() {
          var mediaText = this.media.mediaText;
          return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
        },
        set: function(cssText) {
          var i = 0;
          var state = "";
          var buffer = "";
          var index;
          for (var character; character = cssText.charAt(i); i++) {
            switch (character) {
              case " ":
              case "	":
              case "\r":
              case "\n":
              case "\f":
                if (state === "after-import") {
                  state = "url";
                } else {
                  buffer += character;
                }
                break;
              case "@":
                if (!state && cssText.indexOf("@import", i) === i) {
                  state = "after-import";
                  i += "import".length;
                  buffer = "";
                }
                break;
              case "u":
                if (state === "url" && cssText.indexOf("url(", i) === i) {
                  index = cssText.indexOf(")", i + 1);
                  if (index === -1) {
                    throw i + ': ")" not found';
                  }
                  i += "url(".length;
                  var url = cssText.slice(i, index);
                  if (url[0] === url[url.length - 1]) {
                    if (url[0] === '"' || url[0] === "'") {
                      url = url.slice(1, -1);
                    }
                  }
                  this.href = url;
                  i = index;
                  state = "media";
                }
                break;
              case '"':
                if (state === "url") {
                  index = cssText.indexOf('"', i + 1);
                  if (!index) {
                    throw i + `: '"' not found`;
                  }
                  this.href = cssText.slice(i + 1, index);
                  i = index;
                  state = "media";
                }
                break;
              case "'":
                if (state === "url") {
                  index = cssText.indexOf("'", i + 1);
                  if (!index) {
                    throw i + `: "'" not found`;
                  }
                  this.href = cssText.slice(i + 1, index);
                  i = index;
                  state = "media";
                }
                break;
              case ";":
                if (state === "media") {
                  if (buffer) {
                    this.media.mediaText = buffer.trim();
                  }
                }
                break;
              default:
                if (state === "media") {
                  buffer += character;
                }
                break;
            }
          }
        }
      });
      exports.CSSImportRule = CSSOM.CSSImportRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSGroupingRule.js
  var require_CSSGroupingRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSGroupingRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSGroupingRule = function CSSGroupingRule() {
        CSSOM.CSSRule.call(this);
        this.cssRules = [];
      };
      CSSOM.CSSGroupingRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSGroupingRule.prototype.constructor = CSSOM.CSSGroupingRule;
      CSSOM.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
        if (index < 0 || index > this.cssRules.length) {
          throw new RangeError("INDEX_SIZE_ERR");
        }
        var cssRule = CSSOM.parse(rule).cssRules[0];
        cssRule.parentRule = this;
        this.cssRules.splice(index, 0, cssRule);
        return index;
      };
      CSSOM.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
        if (index < 0 || index >= this.cssRules.length) {
          throw new RangeError("INDEX_SIZE_ERR");
        }
        this.cssRules.splice(index, 1)[0].parentRule = null;
      };
      exports.CSSGroupingRule = CSSOM.CSSGroupingRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSConditionRule.js
  var require_CSSConditionRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSConditionRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule
      };
      CSSOM.CSSConditionRule = function CSSConditionRule() {
        CSSOM.CSSGroupingRule.call(this);
        this.cssRules = [];
      };
      CSSOM.CSSConditionRule.prototype = new CSSOM.CSSGroupingRule();
      CSSOM.CSSConditionRule.prototype.constructor = CSSOM.CSSConditionRule;
      CSSOM.CSSConditionRule.prototype.conditionText = "";
      CSSOM.CSSConditionRule.prototype.cssText = "";
      exports.CSSConditionRule = CSSOM.CSSConditionRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSMediaRule.js
  var require_CSSMediaRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSMediaRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
        CSSConditionRule: require_CSSConditionRule().CSSConditionRule,
        MediaList: require_MediaList().MediaList
      };
      CSSOM.CSSMediaRule = function CSSMediaRule() {
        CSSOM.CSSConditionRule.call(this);
        this.media = new CSSOM.MediaList();
      };
      CSSOM.CSSMediaRule.prototype = new CSSOM.CSSConditionRule();
      CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
      CSSOM.CSSMediaRule.prototype.type = 4;
      Object.defineProperties(CSSOM.CSSMediaRule.prototype, {
        "conditionText": {
          get: function() {
            return this.media.mediaText;
          },
          set: function(value) {
            this.media.mediaText = value;
          },
          configurable: true,
          enumerable: true
        },
        "cssText": {
          get: function() {
            var cssTexts = [];
            for (var i = 0, length = this.cssRules.length; i < length; i++) {
              cssTexts.push(this.cssRules[i].cssText);
            }
            return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
          },
          configurable: true,
          enumerable: true
        }
      });
      exports.CSSMediaRule = CSSOM.CSSMediaRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSSupportsRule.js
  var require_CSSSupportsRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSSupportsRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
        CSSConditionRule: require_CSSConditionRule().CSSConditionRule
      };
      CSSOM.CSSSupportsRule = function CSSSupportsRule() {
        CSSOM.CSSConditionRule.call(this);
      };
      CSSOM.CSSSupportsRule.prototype = new CSSOM.CSSConditionRule();
      CSSOM.CSSSupportsRule.prototype.constructor = CSSOM.CSSSupportsRule;
      CSSOM.CSSSupportsRule.prototype.type = 12;
      Object.defineProperty(CSSOM.CSSSupportsRule.prototype, "cssText", {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
          }
          return "@supports " + this.conditionText + " {" + cssTexts.join("") + "}";
        }
      });
      exports.CSSSupportsRule = CSSOM.CSSSupportsRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSFontFaceRule.js
  var require_CSSFontFaceRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSFontFaceRule.js"(exports) {
      var CSSOM = {
        CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
        CSSOM.CSSRule.call(this);
        this.style = new CSSOM.CSSStyleDeclaration();
        this.style.parentRule = this;
      };
      CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
      CSSOM.CSSFontFaceRule.prototype.type = 5;
      Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
        get: function() {
          return "@font-face {" + this.style.cssText + "}";
        }
      });
      exports.CSSFontFaceRule = CSSOM.CSSFontFaceRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSHostRule.js
  var require_CSSHostRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSHostRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSHostRule = function CSSHostRule() {
        CSSOM.CSSRule.call(this);
        this.cssRules = [];
      };
      CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
      CSSOM.CSSHostRule.prototype.type = 1001;
      Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
          }
          return "@host {" + cssTexts.join("") + "}";
        }
      });
      exports.CSSHostRule = CSSOM.CSSHostRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSKeyframeRule.js
  var require_CSSKeyframeRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSKeyframeRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration
      };
      CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
        CSSOM.CSSRule.call(this);
        this.keyText = "";
        this.style = new CSSOM.CSSStyleDeclaration();
        this.style.parentRule = this;
      };
      CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
      CSSOM.CSSKeyframeRule.prototype.type = 8;
      Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
        get: function() {
          return this.keyText + " {" + this.style.cssText + "} ";
        }
      });
      exports.CSSKeyframeRule = CSSOM.CSSKeyframeRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSKeyframesRule.js
  var require_CSSKeyframesRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSKeyframesRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule
      };
      CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
        CSSOM.CSSRule.call(this);
        this.name = "";
        this.cssRules = [];
      };
      CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
      CSSOM.CSSKeyframesRule.prototype.type = 7;
      Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push("  " + this.cssRules[i].cssText);
          }
          return "@" + (this._vendorPrefix || "") + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
        }
      });
      exports.CSSKeyframesRule = CSSOM.CSSKeyframesRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSValue.js
  var require_CSSValue = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSValue.js"(exports) {
      var CSSOM = {};
      CSSOM.CSSValue = function CSSValue() {
      };
      CSSOM.CSSValue.prototype = {
        constructor: CSSOM.CSSValue,
        set cssText(text) {
          var name = this._getConstructorName();
          throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
        },
        get cssText() {
          var name = this._getConstructorName();
          throw new Error('getter "cssText" of "' + name + '" is not implemented!');
        },
        _getConstructorName: function() {
          var s = this.constructor.toString(), c = s.match(/function\s([^\(]+)/), name = c[1];
          return name;
        }
      };
      exports.CSSValue = CSSOM.CSSValue;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSValueExpression.js
  var require_CSSValueExpression = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSValueExpression.js"(exports) {
      var CSSOM = {
        CSSValue: require_CSSValue().CSSValue
      };
      CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
        this._token = token;
        this._idx = idx;
      };
      CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
      CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;
      CSSOM.CSSValueExpression.prototype.parse = function() {
        var token = this._token, idx = this._idx;
        var character = "", expression = "", error = "", info, paren = [];
        for (; ; ++idx) {
          character = token.charAt(idx);
          if (character === "") {
            error = "css expression error: unfinished expression!";
            break;
          }
          switch (character) {
            case "(":
              paren.push(character);
              expression += character;
              break;
            case ")":
              paren.pop(character);
              expression += character;
              break;
            case "/":
              if (info = this._parseJSComment(token, idx)) {
                if (info.error) {
                  error = "css expression error: unfinished comment in expression!";
                } else {
                  idx = info.idx;
                }
              } else if (info = this._parseJSRexExp(token, idx)) {
                idx = info.idx;
                expression += info.text;
              } else {
                expression += character;
              }
              break;
            case "'":
            case '"':
              info = this._parseJSString(token, idx, character);
              if (info) {
                idx = info.idx;
                expression += info.text;
              } else {
                expression += character;
              }
              break;
            default:
              expression += character;
              break;
          }
          if (error) {
            break;
          }
          if (paren.length === 0) {
            break;
          }
        }
        var ret;
        if (error) {
          ret = {
            error
          };
        } else {
          ret = {
            idx,
            expression
          };
        }
        return ret;
      };
      CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
        var nextChar = token.charAt(idx + 1), text;
        if (nextChar === "/" || nextChar === "*") {
          var startIdx = idx, endIdx, commentEndChar;
          if (nextChar === "/") {
            commentEndChar = "\n";
          } else if (nextChar === "*") {
            commentEndChar = "*/";
          }
          endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
          if (endIdx !== -1) {
            endIdx = endIdx + commentEndChar.length - 1;
            text = token.substring(idx, endIdx + 1);
            return {
              idx: endIdx,
              text
            };
          } else {
            var error = "css expression error: unfinished comment in expression!";
            return {
              error
            };
          }
        } else {
          return false;
        }
      };
      CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
        var endIdx = this._findMatchedIdx(token, idx, sep), text;
        if (endIdx === -1) {
          return false;
        } else {
          text = token.substring(idx, endIdx + sep.length);
          return {
            idx: endIdx,
            text
          };
        }
      };
      CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
        var before2 = token.substring(0, idx).replace(/\s+$/, ""), legalRegx = [
          /^$/,
          /\($/,
          /\[$/,
          /\!$/,
          /\+$/,
          /\-$/,
          /\*$/,
          /\/\s+/,
          /\%$/,
          /\=$/,
          /\>$/,
          /<$/,
          /\&$/,
          /\|$/,
          /\^$/,
          /\~$/,
          /\?$/,
          /\,$/,
          /delete$/,
          /in$/,
          /instanceof$/,
          /new$/,
          /typeof$/,
          /void$/
        ];
        var isLegal = legalRegx.some(function(reg) {
          return reg.test(before2);
        });
        if (!isLegal) {
          return false;
        } else {
          var sep = "/";
          return this._parseJSString(token, idx, sep);
        }
      };
      CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
        var startIdx = idx, endIdx;
        var NOT_FOUND = -1;
        while (true) {
          endIdx = token.indexOf(sep, startIdx + 1);
          if (endIdx === -1) {
            endIdx = NOT_FOUND;
            break;
          } else {
            var text = token.substring(idx + 1, endIdx), matched = text.match(/\\+$/);
            if (!matched || matched[0] % 2 === 0) {
              break;
            } else {
              startIdx = endIdx;
            }
          }
        }
        var nextNewLineIdx = token.indexOf("\n", idx + 1);
        if (nextNewLineIdx < endIdx) {
          endIdx = NOT_FOUND;
        }
        return endIdx;
      };
      exports.CSSValueExpression = CSSOM.CSSValueExpression;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/MatcherList.js
  var require_MatcherList = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/MatcherList.js"(exports) {
      var CSSOM = {};
      CSSOM.MatcherList = function MatcherList() {
        this.length = 0;
      };
      CSSOM.MatcherList.prototype = {
        constructor: CSSOM.MatcherList,
        get matcherText() {
          return Array.prototype.join.call(this, ", ");
        },
        set matcherText(value) {
          var values = value.split(",");
          var length = this.length = values.length;
          for (var i = 0; i < length; i++) {
            this[i] = values[i].trim();
          }
        },
        appendMatcher: function(matcher) {
          if (Array.prototype.indexOf.call(this, matcher) === -1) {
            this[this.length] = matcher;
            this.length++;
          }
        },
        deleteMatcher: function(matcher) {
          var index = Array.prototype.indexOf.call(this, matcher);
          if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
          }
        }
      };
      exports.MatcherList = CSSOM.MatcherList;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSDocumentRule.js
  var require_CSSDocumentRule = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSDocumentRule.js"(exports) {
      var CSSOM = {
        CSSRule: require_CSSRule().CSSRule,
        MatcherList: require_MatcherList().MatcherList
      };
      CSSOM.CSSDocumentRule = function CSSDocumentRule() {
        CSSOM.CSSRule.call(this);
        this.matcher = new CSSOM.MatcherList();
        this.cssRules = [];
      };
      CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
      CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
      CSSOM.CSSDocumentRule.prototype.type = 10;
      Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
          }
          return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
        }
      });
      exports.CSSDocumentRule = CSSOM.CSSDocumentRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/parse.js
  var require_parse2 = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/parse.js"(exports) {
      var CSSOM = {};
      CSSOM.parse = function parse6(token) {
        var i = 0;
        var state = "before-selector";
        var index;
        var buffer = "";
        var valueParenthesisDepth = 0;
        var SIGNIFICANT_WHITESPACE = {
          "selector": true,
          "value": true,
          "value-parenthesis": true,
          "atRule": true,
          "importRule-begin": true,
          "importRule": true,
          "atBlock": true,
          "conditionBlock": true,
          "documentRule-begin": true
        };
        var styleSheet = new CSSOM.CSSStyleSheet();
        var currentScope = styleSheet;
        var parentRule;
        var ancestorRules = [];
        var hasAncestors = false;
        var prevScope;
        var name, priority = "", styleRule, mediaRule, supportsRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule;
        var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;
        var parseError = function(message) {
          var lines = token.substring(0, i).split("\n");
          var lineCount = lines.length;
          var charCount = lines.pop().length + 1;
          var error = new Error(message + " (line " + lineCount + ", char " + charCount + ")");
          error.line = lineCount;
          error["char"] = charCount;
          error.styleSheet = styleSheet;
          throw error;
        };
        for (var character; character = token.charAt(i); i++) {
          switch (character) {
            case " ":
            case "	":
            case "\r":
            case "\n":
            case "\f":
              if (SIGNIFICANT_WHITESPACE[state]) {
                buffer += character;
              }
              break;
            case '"':
              index = i + 1;
              do {
                index = token.indexOf('"', index) + 1;
                if (!index) {
                  parseError('Unmatched "');
                }
              } while (token[index - 2] === "\\");
              buffer += token.slice(i, index);
              i = index - 1;
              switch (state) {
                case "before-value":
                  state = "value";
                  break;
                case "importRule-begin":
                  state = "importRule";
                  break;
              }
              break;
            case "'":
              index = i + 1;
              do {
                index = token.indexOf("'", index) + 1;
                if (!index) {
                  parseError("Unmatched '");
                }
              } while (token[index - 2] === "\\");
              buffer += token.slice(i, index);
              i = index - 1;
              switch (state) {
                case "before-value":
                  state = "value";
                  break;
                case "importRule-begin":
                  state = "importRule";
                  break;
              }
              break;
            case "/":
              if (token.charAt(i + 1) === "*") {
                i += 2;
                index = token.indexOf("*/", i);
                if (index === -1) {
                  parseError("Missing */");
                } else {
                  i = index + 1;
                }
              } else {
                buffer += character;
              }
              if (state === "importRule-begin") {
                buffer += " ";
                state = "importRule";
              }
              break;
            case "@":
              if (token.indexOf("@-moz-document", i) === i) {
                state = "documentRule-begin";
                documentRule = new CSSOM.CSSDocumentRule();
                documentRule.__starts = i;
                i += "-moz-document".length;
                buffer = "";
                break;
              } else if (token.indexOf("@media", i) === i) {
                state = "atBlock";
                mediaRule = new CSSOM.CSSMediaRule();
                mediaRule.__starts = i;
                i += "media".length;
                buffer = "";
                break;
              } else if (token.indexOf("@supports", i) === i) {
                state = "conditionBlock";
                supportsRule = new CSSOM.CSSSupportsRule();
                supportsRule.__starts = i;
                i += "supports".length;
                buffer = "";
                break;
              } else if (token.indexOf("@host", i) === i) {
                state = "hostRule-begin";
                i += "host".length;
                hostRule = new CSSOM.CSSHostRule();
                hostRule.__starts = i;
                buffer = "";
                break;
              } else if (token.indexOf("@import", i) === i) {
                state = "importRule-begin";
                i += "import".length;
                buffer += "@import";
                break;
              } else if (token.indexOf("@font-face", i) === i) {
                state = "fontFaceRule-begin";
                i += "font-face".length;
                fontFaceRule = new CSSOM.CSSFontFaceRule();
                fontFaceRule.__starts = i;
                buffer = "";
                break;
              } else {
                atKeyframesRegExp.lastIndex = i;
                var matchKeyframes = atKeyframesRegExp.exec(token);
                if (matchKeyframes && matchKeyframes.index === i) {
                  state = "keyframesRule-begin";
                  keyframesRule = new CSSOM.CSSKeyframesRule();
                  keyframesRule.__starts = i;
                  keyframesRule._vendorPrefix = matchKeyframes[1];
                  i += matchKeyframes[0].length - 1;
                  buffer = "";
                  break;
                } else if (state === "selector") {
                  state = "atRule";
                }
              }
              buffer += character;
              break;
            case "{":
              if (state === "selector" || state === "atRule") {
                styleRule.selectorText = buffer.trim();
                styleRule.style.__starts = i;
                buffer = "";
                state = "before-name";
              } else if (state === "atBlock") {
                mediaRule.media.mediaText = buffer.trim();
                if (parentRule) {
                  ancestorRules.push(parentRule);
                }
                currentScope = parentRule = mediaRule;
                mediaRule.parentStyleSheet = styleSheet;
                buffer = "";
                state = "before-selector";
              } else if (state === "conditionBlock") {
                supportsRule.conditionText = buffer.trim();
                if (parentRule) {
                  ancestorRules.push(parentRule);
                }
                currentScope = parentRule = supportsRule;
                supportsRule.parentStyleSheet = styleSheet;
                buffer = "";
                state = "before-selector";
              } else if (state === "hostRule-begin") {
                if (parentRule) {
                  ancestorRules.push(parentRule);
                }
                currentScope = parentRule = hostRule;
                hostRule.parentStyleSheet = styleSheet;
                buffer = "";
                state = "before-selector";
              } else if (state === "fontFaceRule-begin") {
                if (parentRule) {
                  fontFaceRule.parentRule = parentRule;
                }
                fontFaceRule.parentStyleSheet = styleSheet;
                styleRule = fontFaceRule;
                buffer = "";
                state = "before-name";
              } else if (state === "keyframesRule-begin") {
                keyframesRule.name = buffer.trim();
                if (parentRule) {
                  ancestorRules.push(parentRule);
                  keyframesRule.parentRule = parentRule;
                }
                keyframesRule.parentStyleSheet = styleSheet;
                currentScope = parentRule = keyframesRule;
                buffer = "";
                state = "keyframeRule-begin";
              } else if (state === "keyframeRule-begin") {
                styleRule = new CSSOM.CSSKeyframeRule();
                styleRule.keyText = buffer.trim();
                styleRule.__starts = i;
                buffer = "";
                state = "before-name";
              } else if (state === "documentRule-begin") {
                documentRule.matcher.matcherText = buffer.trim();
                if (parentRule) {
                  ancestorRules.push(parentRule);
                  documentRule.parentRule = parentRule;
                }
                currentScope = parentRule = documentRule;
                documentRule.parentStyleSheet = styleSheet;
                buffer = "";
                state = "before-selector";
              }
              break;
            case ":":
              if (state === "name") {
                name = buffer.trim();
                buffer = "";
                state = "before-value";
              } else {
                buffer += character;
              }
              break;
            case "(":
              if (state === "value") {
                if (buffer.trim() === "expression") {
                  var info = new CSSOM.CSSValueExpression(token, i).parse();
                  if (info.error) {
                    parseError(info.error);
                  } else {
                    buffer += info.expression;
                    i = info.idx;
                  }
                } else {
                  state = "value-parenthesis";
                  valueParenthesisDepth = 1;
                  buffer += character;
                }
              } else if (state === "value-parenthesis") {
                valueParenthesisDepth++;
                buffer += character;
              } else {
                buffer += character;
              }
              break;
            case ")":
              if (state === "value-parenthesis") {
                valueParenthesisDepth--;
                if (valueParenthesisDepth === 0)
                  state = "value";
              }
              buffer += character;
              break;
            case "!":
              if (state === "value" && token.indexOf("!important", i) === i) {
                priority = "important";
                i += "important".length;
              } else {
                buffer += character;
              }
              break;
            case ";":
              switch (state) {
                case "value":
                  styleRule.style.setProperty(name, buffer.trim(), priority);
                  priority = "";
                  buffer = "";
                  state = "before-name";
                  break;
                case "atRule":
                  buffer = "";
                  state = "before-selector";
                  break;
                case "importRule":
                  importRule = new CSSOM.CSSImportRule();
                  importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
                  importRule.cssText = buffer + character;
                  styleSheet.cssRules.push(importRule);
                  buffer = "";
                  state = "before-selector";
                  break;
                default:
                  buffer += character;
                  break;
              }
              break;
            case "}":
              switch (state) {
                case "value":
                  styleRule.style.setProperty(name, buffer.trim(), priority);
                  priority = "";
                case "before-name":
                case "name":
                  styleRule.__ends = i + 1;
                  if (parentRule) {
                    styleRule.parentRule = parentRule;
                  }
                  styleRule.parentStyleSheet = styleSheet;
                  currentScope.cssRules.push(styleRule);
                  buffer = "";
                  if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
                    state = "keyframeRule-begin";
                  } else {
                    state = "before-selector";
                  }
                  break;
                case "keyframeRule-begin":
                case "before-selector":
                case "selector":
                  if (!parentRule) {
                    parseError("Unexpected }");
                  }
                  hasAncestors = ancestorRules.length > 0;
                  while (ancestorRules.length > 0) {
                    parentRule = ancestorRules.pop();
                    if (parentRule.constructor.name === "CSSMediaRule" || parentRule.constructor.name === "CSSSupportsRule") {
                      prevScope = currentScope;
                      currentScope = parentRule;
                      currentScope.cssRules.push(prevScope);
                      break;
                    }
                    if (ancestorRules.length === 0) {
                      hasAncestors = false;
                    }
                  }
                  if (!hasAncestors) {
                    currentScope.__ends = i + 1;
                    styleSheet.cssRules.push(currentScope);
                    currentScope = styleSheet;
                    parentRule = null;
                  }
                  buffer = "";
                  state = "before-selector";
                  break;
              }
              break;
            default:
              switch (state) {
                case "before-selector":
                  state = "selector";
                  styleRule = new CSSOM.CSSStyleRule();
                  styleRule.__starts = i;
                  break;
                case "before-name":
                  state = "name";
                  break;
                case "before-value":
                  state = "value";
                  break;
                case "importRule-begin":
                  state = "importRule";
                  break;
              }
              buffer += character;
              break;
          }
        }
        return styleSheet;
      };
      exports.parse = CSSOM.parse;
      CSSOM.CSSStyleSheet = require_CSSStyleSheet().CSSStyleSheet;
      CSSOM.CSSStyleRule = require_CSSStyleRule().CSSStyleRule;
      CSSOM.CSSImportRule = require_CSSImportRule().CSSImportRule;
      CSSOM.CSSGroupingRule = require_CSSGroupingRule().CSSGroupingRule;
      CSSOM.CSSMediaRule = require_CSSMediaRule().CSSMediaRule;
      CSSOM.CSSConditionRule = require_CSSConditionRule().CSSConditionRule;
      CSSOM.CSSSupportsRule = require_CSSSupportsRule().CSSSupportsRule;
      CSSOM.CSSFontFaceRule = require_CSSFontFaceRule().CSSFontFaceRule;
      CSSOM.CSSHostRule = require_CSSHostRule().CSSHostRule;
      CSSOM.CSSStyleDeclaration = require_CSSStyleDeclaration().CSSStyleDeclaration;
      CSSOM.CSSKeyframeRule = require_CSSKeyframeRule().CSSKeyframeRule;
      CSSOM.CSSKeyframesRule = require_CSSKeyframesRule().CSSKeyframesRule;
      CSSOM.CSSValueExpression = require_CSSValueExpression().CSSValueExpression;
      CSSOM.CSSDocumentRule = require_CSSDocumentRule().CSSDocumentRule;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleDeclaration.js
  var require_CSSStyleDeclaration = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/CSSStyleDeclaration.js"(exports) {
      var CSSOM = {};
      CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration2() {
        this.length = 0;
        this.parentRule = null;
        this._importants = {};
      };
      CSSOM.CSSStyleDeclaration.prototype = {
        constructor: CSSOM.CSSStyleDeclaration,
        getPropertyValue: function(name) {
          return this[name] || "";
        },
        setProperty: function(name, value, priority) {
          if (this[name]) {
            var index = Array.prototype.indexOf.call(this, name);
            if (index < 0) {
              this[this.length] = name;
              this.length++;
            }
          } else {
            this[this.length] = name;
            this.length++;
          }
          this[name] = value + "";
          this._importants[name] = priority;
        },
        removeProperty: function(name) {
          if (!(name in this)) {
            return "";
          }
          var index = Array.prototype.indexOf.call(this, name);
          if (index < 0) {
            return "";
          }
          var prevValue = this[name];
          this[name] = "";
          Array.prototype.splice.call(this, index, 1);
          return prevValue;
        },
        getPropertyCSSValue: function() {
        },
        getPropertyPriority: function(name) {
          return this._importants[name] || "";
        },
        getPropertyShorthand: function() {
        },
        isPropertyImplicit: function() {
        },
        get cssText() {
          var properties = [];
          for (var i = 0, length = this.length; i < length; ++i) {
            var name = this[i];
            var value = this.getPropertyValue(name);
            var priority = this.getPropertyPriority(name);
            if (priority) {
              priority = " !" + priority;
            }
            properties[i] = name + ": " + value + priority + ";";
          }
          return properties.join(" ");
        },
        set cssText(text) {
          var i, name;
          for (i = this.length; i--; ) {
            name = this[i];
            this[name] = "";
          }
          Array.prototype.splice.call(this, 0, this.length);
          this._importants = {};
          var dummyRule = CSSOM.parse("#bogus{" + text + "}").cssRules[0].style;
          var length = dummyRule.length;
          for (i = 0; i < length; ++i) {
            name = dummyRule[i];
            this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
          }
        }
      };
      exports.CSSStyleDeclaration = CSSOM.CSSStyleDeclaration;
      CSSOM.parse = require_parse2().parse;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/clone.js
  var require_clone = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/clone.js"(exports) {
      var CSSOM = {
        CSSStyleSheet: require_CSSStyleSheet().CSSStyleSheet,
        CSSRule: require_CSSRule().CSSRule,
        CSSStyleRule: require_CSSStyleRule().CSSStyleRule,
        CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
        CSSConditionRule: require_CSSConditionRule().CSSConditionRule,
        CSSMediaRule: require_CSSMediaRule().CSSMediaRule,
        CSSSupportsRule: require_CSSSupportsRule().CSSSupportsRule,
        CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
        CSSKeyframeRule: require_CSSKeyframeRule().CSSKeyframeRule,
        CSSKeyframesRule: require_CSSKeyframesRule().CSSKeyframesRule
      };
      CSSOM.clone = function clone(stylesheet) {
        var cloned = new CSSOM.CSSStyleSheet();
        var rules = stylesheet.cssRules;
        if (!rules) {
          return cloned;
        }
        for (var i = 0, rulesLength = rules.length; i < rulesLength; i++) {
          var rule = rules[i];
          var ruleClone = cloned.cssRules[i] = new rule.constructor();
          var style = rule.style;
          if (style) {
            var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
            for (var j = 0, styleLength = style.length; j < styleLength; j++) {
              var name = styleClone[j] = style[j];
              styleClone[name] = style[name];
              styleClone._importants[name] = style.getPropertyPriority(name);
            }
            styleClone.length = style.length;
          }
          if (rule.hasOwnProperty("keyText")) {
            ruleClone.keyText = rule.keyText;
          }
          if (rule.hasOwnProperty("selectorText")) {
            ruleClone.selectorText = rule.selectorText;
          }
          if (rule.hasOwnProperty("mediaText")) {
            ruleClone.mediaText = rule.mediaText;
          }
          if (rule.hasOwnProperty("conditionText")) {
            ruleClone.conditionText = rule.conditionText;
          }
          if (rule.hasOwnProperty("cssRules")) {
            ruleClone.cssRules = clone(rule).cssRules;
          }
        }
        return cloned;
      };
      exports.clone = CSSOM.clone;
    }
  });

  // node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/index.js
  var require_lib = __commonJS({
    "node_modules/.pnpm/cssom@0.5.0/node_modules/cssom/lib/index.js"(exports) {
      "use strict";
      exports.CSSStyleDeclaration = require_CSSStyleDeclaration().CSSStyleDeclaration;
      exports.CSSRule = require_CSSRule().CSSRule;
      exports.CSSGroupingRule = require_CSSGroupingRule().CSSGroupingRule;
      exports.CSSConditionRule = require_CSSConditionRule().CSSConditionRule;
      exports.CSSStyleRule = require_CSSStyleRule().CSSStyleRule;
      exports.MediaList = require_MediaList().MediaList;
      exports.CSSMediaRule = require_CSSMediaRule().CSSMediaRule;
      exports.CSSSupportsRule = require_CSSSupportsRule().CSSSupportsRule;
      exports.CSSImportRule = require_CSSImportRule().CSSImportRule;
      exports.CSSFontFaceRule = require_CSSFontFaceRule().CSSFontFaceRule;
      exports.CSSHostRule = require_CSSHostRule().CSSHostRule;
      exports.StyleSheet = require_StyleSheet().StyleSheet;
      exports.CSSStyleSheet = require_CSSStyleSheet().CSSStyleSheet;
      exports.CSSKeyframesRule = require_CSSKeyframesRule().CSSKeyframesRule;
      exports.CSSKeyframeRule = require_CSSKeyframeRule().CSSKeyframeRule;
      exports.MatcherList = require_MatcherList().MatcherList;
      exports.CSSDocumentRule = require_CSSDocumentRule().CSSDocumentRule;
      exports.CSSValue = require_CSSValue().CSSValue;
      exports.CSSValueExpression = require_CSSValueExpression().CSSValueExpression;
      exports.parse = require_parse2().parse;
      exports.clone = require_clone().clone;
    }
  });

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/commonjs/canvas.cjs
  var require_canvas = __commonJS({
    "node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/commonjs/canvas.cjs"(exports, module) {
      try {
        module.exports = __require("canvas");
      } catch (fallback) {
        class Canvas2 {
          constructor(width, height) {
            this.width = width;
            this.height = height;
          }
          getContext() {
            return null;
          }
          toDataURL() {
            return "";
          }
        }
        module.exports = {
          createCanvas: (width, height) => new Canvas2(width, height)
        };
      }
    }
  });

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/symbols.js
  var CHANGED = Symbol("changed");
  var CLASS_LIST = Symbol("classList");
  var CUSTOM_ELEMENTS = Symbol("CustomElements");
  var CONTENT = Symbol("content");
  var DATASET = Symbol("dataset");
  var DOCTYPE = Symbol("doctype");
  var DOM_PARSER = Symbol("DOMParser");
  var END = Symbol("end");
  var EVENT_TARGET = Symbol("EventTarget");
  var GLOBALS = Symbol("globals");
  var IMAGE = Symbol("image");
  var MIME = Symbol("mime");
  var MUTATION_OBSERVER = Symbol("MutationObserver");
  var NEXT = Symbol("next");
  var OWNER_ELEMENT = Symbol("ownerElement");
  var PREV = Symbol("prev");
  var PRIVATE = Symbol("private");
  var SHEET = Symbol("sheet");
  var START = Symbol("start");
  var STYLE = Symbol("style");
  var UPGRADE = Symbol("upgrade");
  var VALUE = Symbol("value");

  // node_modules/.pnpm/htmlparser2@8.0.1/node_modules/htmlparser2/lib/esm/index.js
  var esm_exports3 = {};
  __export(esm_exports3, {
    DefaultHandler: () => DomHandler,
    DomHandler: () => DomHandler,
    DomUtils: () => esm_exports2,
    ElementType: () => esm_exports,
    Parser: () => Parser,
    Tokenizer: () => Tokenizer,
    createDomStream: () => createDomStream,
    getFeed: () => getFeed,
    parseDOM: () => parseDOM,
    parseDocument: () => parseDocument,
    parseFeed: () => parseFeed
  });

  // node_modules/.pnpm/entities@4.3.1/node_modules/entities/lib/esm/generated/decode-data-html.js
  var decode_data_html_default = new Uint16Array([7489, 60, 213, 305, 650, 1181, 1403, 1488, 1653, 1758, 1954, 2006, 2063, 2634, 2705, 3489, 3693, 3849, 3878, 4298, 4648, 4833, 5141, 5277, 5315, 5343, 5413, 0, 0, 0, 0, 0, 0, 5483, 5837, 6541, 7186, 7645, 8062, 8288, 8624, 8845, 9152, 9211, 9282, 10276, 10514, 11528, 11848, 12238, 12310, 12986, 13881, 14252, 14590, 14888, 14961, 15072, 15150, 2048, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 92, 98, 102, 109, 115, 127, 132, 139, 144, 149, 152, 166, 179, 185, 200, 207, 108, 105, 103, 32827, 198, 16582, 80, 32827, 38, 16422, 99, 117, 116, 101, 32827, 193, 16577, 114, 101, 118, 101, 59, 16642, 256, 105, 121, 120, 125, 114, 99, 32827, 194, 16578, 59, 17424, 114, 59, 49152, 55349, 56580, 114, 97, 118, 101, 32827, 192, 16576, 112, 104, 97, 59, 17297, 97, 99, 114, 59, 16640, 100, 59, 27219, 256, 103, 112, 157, 161, 111, 110, 59, 16644, 102, 59, 49152, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 24673, 105, 110, 103, 32827, 197, 16581, 256, 99, 115, 190, 195, 114, 59, 49152, 55349, 56476, 105, 103, 110, 59, 25172, 105, 108, 100, 101, 32827, 195, 16579, 109, 108, 32827, 196, 16580, 1024, 97, 99, 101, 102, 111, 114, 115, 117, 229, 251, 254, 279, 284, 290, 295, 298, 256, 99, 114, 234, 242, 107, 115, 108, 97, 115, 104, 59, 25110, 374, 246, 248, 59, 27367, 101, 100, 59, 25350, 121, 59, 17425, 384, 99, 114, 116, 261, 267, 276, 97, 117, 115, 101, 59, 25141, 110, 111, 117, 108, 108, 105, 115, 59, 24876, 97, 59, 17298, 114, 59, 49152, 55349, 56581, 112, 102, 59, 49152, 55349, 56633, 101, 118, 101, 59, 17112, 99, 242, 275, 109, 112, 101, 113, 59, 25166, 1792, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 333, 337, 342, 384, 414, 418, 437, 439, 442, 476, 533, 627, 632, 638, 99, 121, 59, 17447, 80, 89, 32827, 169, 16553, 384, 99, 112, 121, 349, 354, 378, 117, 116, 101, 59, 16646, 256, 59, 105, 359, 360, 25298, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 24901, 108, 101, 121, 115, 59, 24877, 512, 97, 101, 105, 111, 393, 398, 404, 408, 114, 111, 110, 59, 16652, 100, 105, 108, 32827, 199, 16583, 114, 99, 59, 16648, 110, 105, 110, 116, 59, 25136, 111, 116, 59, 16650, 256, 100, 110, 423, 429, 105, 108, 108, 97, 59, 16568, 116, 101, 114, 68, 111, 116, 59, 16567, 242, 383, 105, 59, 17319, 114, 99, 108, 101, 512, 68, 77, 80, 84, 455, 459, 465, 470, 111, 116, 59, 25241, 105, 110, 117, 115, 59, 25238, 108, 117, 115, 59, 25237, 105, 109, 101, 115, 59, 25239, 111, 256, 99, 115, 482, 504, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25138, 101, 67, 117, 114, 108, 121, 256, 68, 81, 515, 527, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 24605, 117, 111, 116, 101, 59, 24601, 512, 108, 110, 112, 117, 542, 552, 583, 597, 111, 110, 256, 59, 101, 549, 550, 25143, 59, 27252, 384, 103, 105, 116, 559, 566, 570, 114, 117, 101, 110, 116, 59, 25185, 110, 116, 59, 25135, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25134, 256, 102, 114, 588, 590, 59, 24834, 111, 100, 117, 99, 116, 59, 25104, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25139, 111, 115, 115, 59, 27183, 99, 114, 59, 49152, 55349, 56478, 112, 256, 59, 67, 644, 645, 25299, 97, 112, 59, 25165, 1408, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 672, 684, 688, 692, 696, 715, 727, 737, 742, 819, 1165, 256, 59, 111, 377, 677, 116, 114, 97, 104, 100, 59, 26897, 99, 121, 59, 17410, 99, 121, 59, 17413, 99, 121, 59, 17423, 384, 103, 114, 115, 703, 708, 711, 103, 101, 114, 59, 24609, 114, 59, 24993, 104, 118, 59, 27364, 256, 97, 121, 720, 725, 114, 111, 110, 59, 16654, 59, 17428, 108, 256, 59, 116, 733, 734, 25095, 97, 59, 17300, 114, 59, 49152, 55349, 56583, 256, 97, 102, 747, 807, 256, 99, 109, 752, 802, 114, 105, 116, 105, 99, 97, 108, 512, 65, 68, 71, 84, 768, 774, 790, 796, 99, 117, 116, 101, 59, 16564, 111, 372, 779, 781, 59, 17113, 98, 108, 101, 65, 99, 117, 116, 101, 59, 17117, 114, 97, 118, 101, 59, 16480, 105, 108, 100, 101, 59, 17116, 111, 110, 100, 59, 25284, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 24902, 1136, 829, 0, 0, 0, 834, 852, 0, 1029, 102, 59, 49152, 55349, 56635, 384, 59, 68, 69, 840, 841, 845, 16552, 111, 116, 59, 24796, 113, 117, 97, 108, 59, 25168, 98, 108, 101, 768, 67, 68, 76, 82, 85, 86, 867, 882, 898, 975, 994, 1016, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 236, 569, 111, 628, 889, 0, 0, 891, 187, 841, 110, 65, 114, 114, 111, 119, 59, 25043, 256, 101, 111, 903, 932, 102, 116, 384, 65, 82, 84, 912, 918, 929, 114, 114, 111, 119, 59, 25040, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 25044, 101, 229, 714, 110, 103, 256, 76, 82, 939, 964, 101, 102, 116, 256, 65, 82, 947, 953, 114, 114, 111, 119, 59, 26616, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26618, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26617, 105, 103, 104, 116, 256, 65, 84, 984, 990, 114, 114, 111, 119, 59, 25042, 101, 101, 59, 25256, 112, 577, 1001, 0, 0, 1007, 114, 114, 111, 119, 59, 25041, 111, 119, 110, 65, 114, 114, 111, 119, 59, 25045, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25125, 110, 768, 65, 66, 76, 82, 84, 97, 1042, 1066, 1072, 1118, 1151, 892, 114, 114, 111, 119, 384, 59, 66, 85, 1053, 1054, 1058, 24979, 97, 114, 59, 26899, 112, 65, 114, 114, 111, 119, 59, 25077, 114, 101, 118, 101, 59, 17169, 101, 102, 116, 722, 1082, 0, 1094, 0, 1104, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 26960, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26974, 101, 99, 116, 111, 114, 256, 59, 66, 1113, 1114, 25021, 97, 114, 59, 26966, 105, 103, 104, 116, 468, 1127, 0, 1137, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26975, 101, 99, 116, 111, 114, 256, 59, 66, 1146, 1147, 25025, 97, 114, 59, 26967, 101, 101, 256, 59, 65, 1158, 1159, 25252, 114, 114, 111, 119, 59, 24999, 256, 99, 116, 1170, 1175, 114, 59, 49152, 55349, 56479, 114, 111, 107, 59, 16656, 2048, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1213, 1216, 1220, 1227, 1246, 1250, 1255, 1262, 1269, 1313, 1327, 1334, 1362, 1373, 1376, 1381, 71, 59, 16714, 72, 32827, 208, 16592, 99, 117, 116, 101, 32827, 201, 16585, 384, 97, 105, 121, 1234, 1239, 1244, 114, 111, 110, 59, 16666, 114, 99, 32827, 202, 16586, 59, 17453, 111, 116, 59, 16662, 114, 59, 49152, 55349, 56584, 114, 97, 118, 101, 32827, 200, 16584, 101, 109, 101, 110, 116, 59, 25096, 256, 97, 112, 1274, 1278, 99, 114, 59, 16658, 116, 121, 595, 1286, 0, 0, 1298, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26107, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26027, 256, 103, 112, 1318, 1322, 111, 110, 59, 16664, 102, 59, 49152, 55349, 56636, 115, 105, 108, 111, 110, 59, 17301, 117, 256, 97, 105, 1340, 1353, 108, 256, 59, 84, 1346, 1347, 27253, 105, 108, 100, 101, 59, 25154, 108, 105, 98, 114, 105, 117, 109, 59, 25036, 256, 99, 105, 1367, 1370, 114, 59, 24880, 109, 59, 27251, 97, 59, 17303, 109, 108, 32827, 203, 16587, 256, 105, 112, 1386, 1391, 115, 116, 115, 59, 25091, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 24903, 640, 99, 102, 105, 111, 115, 1413, 1416, 1421, 1458, 1484, 121, 59, 17444, 114, 59, 49152, 55349, 56585, 108, 108, 101, 100, 595, 1431, 0, 0, 1443, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26108, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26026, 880, 1466, 0, 1471, 0, 0, 1476, 102, 59, 49152, 55349, 56637, 65, 108, 108, 59, 25088, 114, 105, 101, 114, 116, 114, 102, 59, 24881, 99, 242, 1483, 1536, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1512, 1516, 1519, 1530, 1536, 1554, 1558, 1563, 1565, 1571, 1644, 1650, 99, 121, 59, 17411, 32827, 62, 16446, 109, 109, 97, 256, 59, 100, 1527, 1528, 17299, 59, 17372, 114, 101, 118, 101, 59, 16670, 384, 101, 105, 121, 1543, 1548, 1552, 100, 105, 108, 59, 16674, 114, 99, 59, 16668, 59, 17427, 111, 116, 59, 16672, 114, 59, 49152, 55349, 56586, 59, 25305, 112, 102, 59, 49152, 55349, 56638, 101, 97, 116, 101, 114, 768, 69, 70, 71, 76, 83, 84, 1589, 1604, 1614, 1622, 1627, 1638, 113, 117, 97, 108, 256, 59, 76, 1598, 1599, 25189, 101, 115, 115, 59, 25307, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25191, 114, 101, 97, 116, 101, 114, 59, 27298, 101, 115, 115, 59, 25207, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 27262, 105, 108, 100, 101, 59, 25203, 99, 114, 59, 49152, 55349, 56482, 59, 25195, 1024, 65, 97, 99, 102, 105, 111, 115, 117, 1669, 1675, 1686, 1691, 1694, 1706, 1726, 1738, 82, 68, 99, 121, 59, 17450, 256, 99, 116, 1680, 1684, 101, 107, 59, 17095, 59, 16478, 105, 114, 99, 59, 16676, 114, 59, 24844, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 24843, 496, 1711, 0, 1714, 102, 59, 24845, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 25856, 256, 99, 116, 1731, 1733, 242, 1705, 114, 111, 107, 59, 16678, 109, 112, 324, 1744, 1752, 111, 119, 110, 72, 117, 109, 240, 303, 113, 117, 97, 108, 59, 25167, 1792, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 1786, 1790, 1795, 1799, 1806, 1818, 1822, 1825, 1832, 1860, 1912, 1931, 1935, 1941, 99, 121, 59, 17429, 108, 105, 103, 59, 16690, 99, 121, 59, 17409, 99, 117, 116, 101, 32827, 205, 16589, 256, 105, 121, 1811, 1816, 114, 99, 32827, 206, 16590, 59, 17432, 111, 116, 59, 16688, 114, 59, 24849, 114, 97, 118, 101, 32827, 204, 16588, 384, 59, 97, 112, 1824, 1839, 1855, 256, 99, 103, 1844, 1847, 114, 59, 16682, 105, 110, 97, 114, 121, 73, 59, 24904, 108, 105, 101, 243, 989, 500, 1865, 0, 1890, 256, 59, 101, 1869, 1870, 25132, 256, 103, 114, 1875, 1880, 114, 97, 108, 59, 25131, 115, 101, 99, 116, 105, 111, 110, 59, 25282, 105, 115, 105, 98, 108, 101, 256, 67, 84, 1900, 1906, 111, 109, 109, 97, 59, 24675, 105, 109, 101, 115, 59, 24674, 384, 103, 112, 116, 1919, 1923, 1928, 111, 110, 59, 16686, 102, 59, 49152, 55349, 56640, 97, 59, 17305, 99, 114, 59, 24848, 105, 108, 100, 101, 59, 16680, 491, 1946, 0, 1950, 99, 121, 59, 17414, 108, 32827, 207, 16591, 640, 99, 102, 111, 115, 117, 1964, 1975, 1980, 1986, 2e3, 256, 105, 121, 1969, 1973, 114, 99, 59, 16692, 59, 17433, 114, 59, 49152, 55349, 56589, 112, 102, 59, 49152, 55349, 56641, 483, 1991, 0, 1996, 114, 59, 49152, 55349, 56485, 114, 99, 121, 59, 17416, 107, 99, 121, 59, 17412, 896, 72, 74, 97, 99, 102, 111, 115, 2020, 2024, 2028, 2033, 2045, 2050, 2056, 99, 121, 59, 17445, 99, 121, 59, 17420, 112, 112, 97, 59, 17306, 256, 101, 121, 2038, 2043, 100, 105, 108, 59, 16694, 59, 17434, 114, 59, 49152, 55349, 56590, 112, 102, 59, 49152, 55349, 56642, 99, 114, 59, 49152, 55349, 56486, 1408, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2085, 2089, 2092, 2128, 2147, 2483, 2488, 2503, 2509, 2615, 2631, 99, 121, 59, 17417, 32827, 60, 16444, 640, 99, 109, 110, 112, 114, 2103, 2108, 2113, 2116, 2125, 117, 116, 101, 59, 16697, 98, 100, 97, 59, 17307, 103, 59, 26602, 108, 97, 99, 101, 116, 114, 102, 59, 24850, 114, 59, 24990, 384, 97, 101, 121, 2135, 2140, 2145, 114, 111, 110, 59, 16701, 100, 105, 108, 59, 16699, 59, 17435, 256, 102, 115, 2152, 2416, 116, 1280, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2174, 2217, 2225, 2272, 2278, 2300, 2351, 2395, 912, 2410, 256, 110, 114, 2179, 2191, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26600, 114, 111, 119, 384, 59, 66, 82, 2201, 2202, 2206, 24976, 97, 114, 59, 25060, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 25030, 101, 105, 108, 105, 110, 103, 59, 25352, 111, 501, 2231, 0, 2243, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26598, 110, 468, 2248, 0, 2258, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26977, 101, 99, 116, 111, 114, 256, 59, 66, 2267, 2268, 25027, 97, 114, 59, 26969, 108, 111, 111, 114, 59, 25354, 105, 103, 104, 116, 256, 65, 86, 2287, 2293, 114, 114, 111, 119, 59, 24980, 101, 99, 116, 111, 114, 59, 26958, 256, 101, 114, 2305, 2327, 101, 384, 59, 65, 86, 2313, 2314, 2320, 25251, 114, 114, 111, 119, 59, 24996, 101, 99, 116, 111, 114, 59, 26970, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 2340, 2341, 2345, 25266, 97, 114, 59, 27087, 113, 117, 97, 108, 59, 25268, 112, 384, 68, 84, 86, 2359, 2370, 2380, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 26961, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26976, 101, 99, 116, 111, 114, 256, 59, 66, 2390, 2391, 25023, 97, 114, 59, 26968, 101, 99, 116, 111, 114, 256, 59, 66, 2405, 2406, 25020, 97, 114, 59, 26962, 105, 103, 104, 116, 225, 924, 115, 768, 69, 70, 71, 76, 83, 84, 2430, 2443, 2453, 2461, 2466, 2477, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 25306, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25190, 114, 101, 97, 116, 101, 114, 59, 25206, 101, 115, 115, 59, 27297, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 27261, 105, 108, 100, 101, 59, 25202, 114, 59, 49152, 55349, 56591, 256, 59, 101, 2493, 2494, 25304, 102, 116, 97, 114, 114, 111, 119, 59, 25050, 105, 100, 111, 116, 59, 16703, 384, 110, 112, 119, 2516, 2582, 2587, 103, 512, 76, 82, 108, 114, 2526, 2551, 2562, 2576, 101, 102, 116, 256, 65, 82, 2534, 2540, 114, 114, 111, 119, 59, 26613, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26615, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26614, 101, 102, 116, 256, 97, 114, 947, 2570, 105, 103, 104, 116, 225, 959, 105, 103, 104, 116, 225, 970, 102, 59, 49152, 55349, 56643, 101, 114, 256, 76, 82, 2594, 2604, 101, 102, 116, 65, 114, 114, 111, 119, 59, 24985, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 24984, 384, 99, 104, 116, 2622, 2624, 2626, 242, 2124, 59, 25008, 114, 111, 107, 59, 16705, 59, 25194, 1024, 97, 99, 101, 102, 105, 111, 115, 117, 2650, 2653, 2656, 2679, 2684, 2693, 2699, 2702, 112, 59, 26885, 121, 59, 17436, 256, 100, 108, 2661, 2671, 105, 117, 109, 83, 112, 97, 99, 101, 59, 24671, 108, 105, 110, 116, 114, 102, 59, 24883, 114, 59, 49152, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 25107, 112, 102, 59, 49152, 55349, 56644, 99, 242, 2678, 59, 17308, 1152, 74, 97, 99, 101, 102, 111, 115, 116, 117, 2723, 2727, 2733, 2752, 2836, 2841, 3473, 3479, 3486, 99, 121, 59, 17418, 99, 117, 116, 101, 59, 16707, 384, 97, 101, 121, 2740, 2745, 2750, 114, 111, 110, 59, 16711, 100, 105, 108, 59, 16709, 59, 17437, 384, 103, 115, 119, 2759, 2800, 2830, 97, 116, 105, 118, 101, 384, 77, 84, 86, 2771, 2783, 2792, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 24587, 104, 105, 256, 99, 110, 2790, 2776, 235, 2777, 101, 114, 121, 84, 104, 105, 238, 2777, 116, 101, 100, 256, 71, 76, 2808, 2822, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 242, 1651, 101, 115, 115, 76, 101, 115, 243, 2632, 76, 105, 110, 101, 59, 16394, 114, 59, 49152, 55349, 56593, 512, 66, 110, 112, 116, 2850, 2856, 2871, 2874, 114, 101, 97, 107, 59, 24672, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 16544, 102, 59, 24853, 1664, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 2901, 2902, 2922, 2940, 2977, 3051, 3076, 3166, 3204, 3238, 3288, 3425, 3461, 27372, 256, 111, 117, 2907, 2916, 110, 103, 114, 117, 101, 110, 116, 59, 25186, 112, 67, 97, 112, 59, 25197, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25126, 384, 108, 113, 120, 2947, 2954, 2971, 101, 109, 101, 110, 116, 59, 25097, 117, 97, 108, 256, 59, 84, 2962, 2963, 25184, 105, 108, 100, 101, 59, 49152, 8770, 824, 105, 115, 116, 115, 59, 25092, 114, 101, 97, 116, 101, 114, 896, 59, 69, 70, 71, 76, 83, 84, 2998, 2999, 3005, 3017, 3027, 3032, 3045, 25199, 113, 117, 97, 108, 59, 25201, 117, 108, 108, 69, 113, 117, 97, 108, 59, 49152, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 49152, 8811, 824, 101, 115, 115, 59, 25209, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 49152, 10878, 824, 105, 108, 100, 101, 59, 25205, 117, 109, 112, 324, 3058, 3069, 111, 119, 110, 72, 117, 109, 112, 59, 49152, 8782, 824, 113, 117, 97, 108, 59, 49152, 8783, 824, 101, 256, 102, 115, 3082, 3111, 116, 84, 114, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 3098, 3099, 3105, 25322, 97, 114, 59, 49152, 10703, 824, 113, 117, 97, 108, 59, 25324, 115, 768, 59, 69, 71, 76, 83, 84, 3125, 3126, 3132, 3140, 3147, 3160, 25198, 113, 117, 97, 108, 59, 25200, 114, 101, 97, 116, 101, 114, 59, 25208, 101, 115, 115, 59, 49152, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 49152, 10877, 824, 105, 108, 100, 101, 59, 25204, 101, 115, 116, 101, 100, 256, 71, 76, 3176, 3193, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 49152, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 49152, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 384, 59, 69, 83, 3218, 3219, 3227, 25216, 113, 117, 97, 108, 59, 49152, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25312, 256, 101, 105, 3243, 3257, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 25100, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 3275, 3276, 3282, 25323, 97, 114, 59, 49152, 10704, 824, 113, 117, 97, 108, 59, 25325, 256, 113, 117, 3293, 3340, 117, 97, 114, 101, 83, 117, 256, 98, 112, 3304, 3321, 115, 101, 116, 256, 59, 69, 3312, 3315, 49152, 8847, 824, 113, 117, 97, 108, 59, 25314, 101, 114, 115, 101, 116, 256, 59, 69, 3331, 3334, 49152, 8848, 824, 113, 117, 97, 108, 59, 25315, 384, 98, 99, 112, 3347, 3364, 3406, 115, 101, 116, 256, 59, 69, 3355, 3358, 49152, 8834, 8402, 113, 117, 97, 108, 59, 25224, 99, 101, 101, 100, 115, 512, 59, 69, 83, 84, 3378, 3379, 3387, 3398, 25217, 113, 117, 97, 108, 59, 49152, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25313, 105, 108, 100, 101, 59, 49152, 8831, 824, 101, 114, 115, 101, 116, 256, 59, 69, 3416, 3419, 49152, 8835, 8402, 113, 117, 97, 108, 59, 25225, 105, 108, 100, 101, 512, 59, 69, 70, 84, 3438, 3439, 3445, 3455, 25153, 113, 117, 97, 108, 59, 25156, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25159, 105, 108, 100, 101, 59, 25161, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25124, 99, 114, 59, 49152, 55349, 56489, 105, 108, 100, 101, 32827, 209, 16593, 59, 17309, 1792, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 3517, 3522, 3529, 3541, 3547, 3552, 3559, 3580, 3586, 3616, 3618, 3634, 3647, 3652, 108, 105, 103, 59, 16722, 99, 117, 116, 101, 32827, 211, 16595, 256, 105, 121, 3534, 3539, 114, 99, 32827, 212, 16596, 59, 17438, 98, 108, 97, 99, 59, 16720, 114, 59, 49152, 55349, 56594, 114, 97, 118, 101, 32827, 210, 16594, 384, 97, 101, 105, 3566, 3570, 3574, 99, 114, 59, 16716, 103, 97, 59, 17321, 99, 114, 111, 110, 59, 17311, 112, 102, 59, 49152, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 256, 68, 81, 3598, 3610, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 24604, 117, 111, 116, 101, 59, 24600, 59, 27220, 256, 99, 108, 3623, 3628, 114, 59, 49152, 55349, 56490, 97, 115, 104, 32827, 216, 16600, 105, 364, 3639, 3644, 100, 101, 32827, 213, 16597, 101, 115, 59, 27191, 109, 108, 32827, 214, 16598, 101, 114, 256, 66, 80, 3659, 3680, 256, 97, 114, 3664, 3667, 114, 59, 24638, 97, 99, 256, 101, 107, 3674, 3676, 59, 25566, 101, 116, 59, 25524, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 25564, 1152, 97, 99, 102, 104, 105, 108, 111, 114, 115, 3711, 3719, 3722, 3727, 3730, 3732, 3741, 3760, 3836, 114, 116, 105, 97, 108, 68, 59, 25090, 121, 59, 17439, 114, 59, 49152, 55349, 56595, 105, 59, 17318, 59, 17312, 117, 115, 77, 105, 110, 117, 115, 59, 16561, 256, 105, 112, 3746, 3757, 110, 99, 97, 114, 101, 112, 108, 97, 110, 229, 1693, 102, 59, 24857, 512, 59, 101, 105, 111, 3769, 3770, 3808, 3812, 27323, 99, 101, 100, 101, 115, 512, 59, 69, 83, 84, 3784, 3785, 3791, 3802, 25210, 113, 117, 97, 108, 59, 27311, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25212, 105, 108, 100, 101, 59, 25214, 109, 101, 59, 24627, 256, 100, 112, 3817, 3822, 117, 99, 116, 59, 25103, 111, 114, 116, 105, 111, 110, 256, 59, 97, 549, 3833, 108, 59, 25117, 256, 99, 105, 3841, 3846, 114, 59, 49152, 55349, 56491, 59, 17320, 512, 85, 102, 111, 115, 3857, 3862, 3867, 3871, 79, 84, 32827, 34, 16418, 114, 59, 49152, 55349, 56596, 112, 102, 59, 24858, 99, 114, 59, 49152, 55349, 56492, 1536, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 3902, 3907, 3911, 3936, 3955, 4007, 4010, 4013, 4246, 4265, 4276, 4286, 97, 114, 114, 59, 26896, 71, 32827, 174, 16558, 384, 99, 110, 114, 3918, 3923, 3926, 117, 116, 101, 59, 16724, 103, 59, 26603, 114, 256, 59, 116, 3932, 3933, 24992, 108, 59, 26902, 384, 97, 101, 121, 3943, 3948, 3953, 114, 111, 110, 59, 16728, 100, 105, 108, 59, 16726, 59, 17440, 256, 59, 118, 3960, 3961, 24860, 101, 114, 115, 101, 256, 69, 85, 3970, 3993, 256, 108, 113, 3975, 3982, 101, 109, 101, 110, 116, 59, 25099, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 25035, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 26991, 114, 187, 3961, 111, 59, 17313, 103, 104, 116, 1024, 65, 67, 68, 70, 84, 85, 86, 97, 4033, 4075, 4083, 4130, 4136, 4187, 4231, 984, 256, 110, 114, 4038, 4050, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26601, 114, 111, 119, 384, 59, 66, 76, 4060, 4061, 4065, 24978, 97, 114, 59, 25061, 101, 102, 116, 65, 114, 114, 111, 119, 59, 25028, 101, 105, 108, 105, 110, 103, 59, 25353, 111, 501, 4089, 0, 4101, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26599, 110, 468, 4106, 0, 4116, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26973, 101, 99, 116, 111, 114, 256, 59, 66, 4125, 4126, 25026, 97, 114, 59, 26965, 108, 111, 111, 114, 59, 25355, 256, 101, 114, 4141, 4163, 101, 384, 59, 65, 86, 4149, 4150, 4156, 25250, 114, 114, 111, 119, 59, 24998, 101, 99, 116, 111, 114, 59, 26971, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 4176, 4177, 4181, 25267, 97, 114, 59, 27088, 113, 117, 97, 108, 59, 25269, 112, 384, 68, 84, 86, 4195, 4206, 4216, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 26959, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26972, 101, 99, 116, 111, 114, 256, 59, 66, 4226, 4227, 25022, 97, 114, 59, 26964, 101, 99, 116, 111, 114, 256, 59, 66, 4241, 4242, 25024, 97, 114, 59, 26963, 256, 112, 117, 4251, 4254, 102, 59, 24861, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 26992, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25051, 256, 99, 104, 4281, 4284, 114, 59, 24859, 59, 25009, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 27124, 1664, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 4324, 4337, 4343, 4349, 4377, 4382, 4433, 4438, 4449, 4455, 4533, 4539, 4543, 256, 67, 99, 4329, 4334, 72, 99, 121, 59, 17449, 121, 59, 17448, 70, 84, 99, 121, 59, 17452, 99, 117, 116, 101, 59, 16730, 640, 59, 97, 101, 105, 121, 4360, 4361, 4366, 4371, 4375, 27324, 114, 111, 110, 59, 16736, 100, 105, 108, 59, 16734, 114, 99, 59, 16732, 59, 17441, 114, 59, 49152, 55349, 56598, 111, 114, 116, 512, 68, 76, 82, 85, 4394, 4404, 4414, 4425, 111, 119, 110, 65, 114, 114, 111, 119, 187, 1054, 101, 102, 116, 65, 114, 114, 111, 119, 187, 2202, 105, 103, 104, 116, 65, 114, 114, 111, 119, 187, 4061, 112, 65, 114, 114, 111, 119, 59, 24977, 103, 109, 97, 59, 17315, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 25112, 112, 102, 59, 49152, 55349, 56650, 626, 4461, 0, 0, 4464, 116, 59, 25114, 97, 114, 101, 512, 59, 73, 83, 85, 4475, 4476, 4489, 4527, 26017, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 25235, 117, 256, 98, 112, 4495, 4510, 115, 101, 116, 256, 59, 69, 4503, 4504, 25231, 113, 117, 97, 108, 59, 25233, 101, 114, 115, 101, 116, 256, 59, 69, 4520, 4521, 25232, 113, 117, 97, 108, 59, 25234, 110, 105, 111, 110, 59, 25236, 99, 114, 59, 49152, 55349, 56494, 97, 114, 59, 25286, 512, 98, 99, 109, 112, 4552, 4571, 4617, 4619, 256, 59, 115, 4557, 4558, 25296, 101, 116, 256, 59, 69, 4557, 4565, 113, 117, 97, 108, 59, 25222, 256, 99, 104, 4576, 4613, 101, 101, 100, 115, 512, 59, 69, 83, 84, 4589, 4590, 4596, 4607, 25211, 113, 117, 97, 108, 59, 27312, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25213, 105, 108, 100, 101, 59, 25215, 84, 104, 225, 3980, 59, 25105, 384, 59, 101, 115, 4626, 4627, 4643, 25297, 114, 115, 101, 116, 256, 59, 69, 4636, 4637, 25219, 113, 117, 97, 108, 59, 25223, 101, 116, 187, 4627, 1408, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 4670, 4676, 4681, 4693, 4702, 4721, 4726, 4767, 4802, 4808, 4817, 79, 82, 78, 32827, 222, 16606, 65, 68, 69, 59, 24866, 256, 72, 99, 4686, 4690, 99, 121, 59, 17419, 121, 59, 17446, 256, 98, 117, 4698, 4700, 59, 16393, 59, 17316, 384, 97, 101, 121, 4709, 4714, 4719, 114, 111, 110, 59, 16740, 100, 105, 108, 59, 16738, 59, 17442, 114, 59, 49152, 55349, 56599, 256, 101, 105, 4731, 4745, 498, 4736, 0, 4743, 101, 102, 111, 114, 101, 59, 25140, 97, 59, 17304, 256, 99, 110, 4750, 4760, 107, 83, 112, 97, 99, 101, 59, 49152, 8287, 8202, 83, 112, 97, 99, 101, 59, 24585, 108, 100, 101, 512, 59, 69, 70, 84, 4779, 4780, 4786, 4796, 25148, 113, 117, 97, 108, 59, 25155, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25157, 105, 108, 100, 101, 59, 25160, 112, 102, 59, 49152, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 24795, 256, 99, 116, 4822, 4827, 114, 59, 49152, 55349, 56495, 114, 111, 107, 59, 16742, 2785, 4855, 4878, 4890, 4902, 0, 4908, 4913, 0, 0, 0, 0, 0, 4920, 4925, 4983, 4997, 0, 5119, 5124, 5130, 5136, 256, 99, 114, 4859, 4865, 117, 116, 101, 32827, 218, 16602, 114, 256, 59, 111, 4871, 4872, 24991, 99, 105, 114, 59, 26953, 114, 483, 4883, 0, 4886, 121, 59, 17422, 118, 101, 59, 16748, 256, 105, 121, 4894, 4899, 114, 99, 32827, 219, 16603, 59, 17443, 98, 108, 97, 99, 59, 16752, 114, 59, 49152, 55349, 56600, 114, 97, 118, 101, 32827, 217, 16601, 97, 99, 114, 59, 16746, 256, 100, 105, 4929, 4969, 101, 114, 256, 66, 80, 4936, 4957, 256, 97, 114, 4941, 4944, 114, 59, 16479, 97, 99, 256, 101, 107, 4951, 4953, 59, 25567, 101, 116, 59, 25525, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 25565, 111, 110, 256, 59, 80, 4976, 4977, 25283, 108, 117, 115, 59, 25230, 256, 103, 112, 4987, 4991, 111, 110, 59, 16754, 102, 59, 49152, 55349, 56652, 1024, 65, 68, 69, 84, 97, 100, 112, 115, 5013, 5038, 5048, 5060, 1e3, 5074, 5079, 5107, 114, 114, 111, 119, 384, 59, 66, 68, 4432, 5024, 5028, 97, 114, 59, 26898, 111, 119, 110, 65, 114, 114, 111, 119, 59, 25029, 111, 119, 110, 65, 114, 114, 111, 119, 59, 24981, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 26990, 101, 101, 256, 59, 65, 5067, 5068, 25253, 114, 114, 111, 119, 59, 24997, 111, 119, 110, 225, 1011, 101, 114, 256, 76, 82, 5086, 5096, 101, 102, 116, 65, 114, 114, 111, 119, 59, 24982, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 24983, 105, 256, 59, 108, 5113, 5114, 17362, 111, 110, 59, 17317, 105, 110, 103, 59, 16750, 99, 114, 59, 49152, 55349, 56496, 105, 108, 100, 101, 59, 16744, 109, 108, 32827, 220, 16604, 1152, 68, 98, 99, 100, 101, 102, 111, 115, 118, 5159, 5164, 5168, 5171, 5182, 5253, 5258, 5264, 5270, 97, 115, 104, 59, 25259, 97, 114, 59, 27371, 121, 59, 17426, 97, 115, 104, 256, 59, 108, 5179, 5180, 25257, 59, 27366, 256, 101, 114, 5187, 5189, 59, 25281, 384, 98, 116, 121, 5196, 5200, 5242, 97, 114, 59, 24598, 256, 59, 105, 5199, 5205, 99, 97, 108, 512, 66, 76, 83, 84, 5217, 5221, 5226, 5236, 97, 114, 59, 25123, 105, 110, 101, 59, 16508, 101, 112, 97, 114, 97, 116, 111, 114, 59, 26456, 105, 108, 100, 101, 59, 25152, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 24586, 114, 59, 49152, 55349, 56601, 112, 102, 59, 49152, 55349, 56653, 99, 114, 59, 49152, 55349, 56497, 100, 97, 115, 104, 59, 25258, 640, 99, 101, 102, 111, 115, 5287, 5292, 5297, 5302, 5308, 105, 114, 99, 59, 16756, 100, 103, 101, 59, 25280, 114, 59, 49152, 55349, 56602, 112, 102, 59, 49152, 55349, 56654, 99, 114, 59, 49152, 55349, 56498, 512, 102, 105, 111, 115, 5323, 5328, 5330, 5336, 114, 59, 49152, 55349, 56603, 59, 17310, 112, 102, 59, 49152, 55349, 56655, 99, 114, 59, 49152, 55349, 56499, 1152, 65, 73, 85, 97, 99, 102, 111, 115, 117, 5361, 5365, 5369, 5373, 5380, 5391, 5396, 5402, 5408, 99, 121, 59, 17455, 99, 121, 59, 17415, 99, 121, 59, 17454, 99, 117, 116, 101, 32827, 221, 16605, 256, 105, 121, 5385, 5389, 114, 99, 59, 16758, 59, 17451, 114, 59, 49152, 55349, 56604, 112, 102, 59, 49152, 55349, 56656, 99, 114, 59, 49152, 55349, 56500, 109, 108, 59, 16760, 1024, 72, 97, 99, 100, 101, 102, 111, 115, 5429, 5433, 5439, 5451, 5455, 5469, 5472, 5476, 99, 121, 59, 17430, 99, 117, 116, 101, 59, 16761, 256, 97, 121, 5444, 5449, 114, 111, 110, 59, 16765, 59, 17431, 111, 116, 59, 16763, 498, 5460, 0, 5467, 111, 87, 105, 100, 116, 232, 2777, 97, 59, 17302, 114, 59, 24872, 112, 102, 59, 24868, 99, 114, 59, 49152, 55349, 56501, 3041, 5507, 5514, 5520, 0, 5552, 5558, 5567, 0, 0, 0, 0, 5574, 5595, 5611, 5727, 5741, 0, 5781, 5787, 5810, 5817, 0, 5822, 99, 117, 116, 101, 32827, 225, 16609, 114, 101, 118, 101, 59, 16643, 768, 59, 69, 100, 105, 117, 121, 5532, 5533, 5537, 5539, 5544, 5549, 25150, 59, 49152, 8766, 819, 59, 25151, 114, 99, 32827, 226, 16610, 116, 101, 32955, 180, 774, 59, 17456, 108, 105, 103, 32827, 230, 16614, 256, 59, 114, 178, 5562, 59, 49152, 55349, 56606, 114, 97, 118, 101, 32827, 224, 16608, 256, 101, 112, 5578, 5590, 256, 102, 112, 5583, 5588, 115, 121, 109, 59, 24885, 232, 5587, 104, 97, 59, 17329, 256, 97, 112, 5599, 99, 256, 99, 108, 5604, 5607, 114, 59, 16641, 103, 59, 27199, 612, 5616, 0, 0, 5642, 640, 59, 97, 100, 115, 118, 5626, 5627, 5631, 5633, 5639, 25127, 110, 100, 59, 27221, 59, 27228, 108, 111, 112, 101, 59, 27224, 59, 27226, 896, 59, 101, 108, 109, 114, 115, 122, 5656, 5657, 5659, 5662, 5695, 5711, 5721, 25120, 59, 27044, 101, 187, 5657, 115, 100, 256, 59, 97, 5669, 5670, 25121, 1121, 5680, 5682, 5684, 5686, 5688, 5690, 5692, 5694, 59, 27048, 59, 27049, 59, 27050, 59, 27051, 59, 27052, 59, 27053, 59, 27054, 59, 27055, 116, 256, 59, 118, 5701, 5702, 25119, 98, 256, 59, 100, 5708, 5709, 25278, 59, 27037, 256, 112, 116, 5716, 5719, 104, 59, 25122, 187, 185, 97, 114, 114, 59, 25468, 256, 103, 112, 5731, 5735, 111, 110, 59, 16645, 102, 59, 49152, 55349, 56658, 896, 59, 69, 97, 101, 105, 111, 112, 4801, 5755, 5757, 5762, 5764, 5767, 5770, 59, 27248, 99, 105, 114, 59, 27247, 59, 25162, 100, 59, 25163, 115, 59, 16423, 114, 111, 120, 256, 59, 101, 4801, 5778, 241, 5763, 105, 110, 103, 32827, 229, 16613, 384, 99, 116, 121, 5793, 5798, 5800, 114, 59, 49152, 55349, 56502, 59, 16426, 109, 112, 256, 59, 101, 4801, 5807, 241, 648, 105, 108, 100, 101, 32827, 227, 16611, 109, 108, 32827, 228, 16612, 256, 99, 105, 5826, 5832, 111, 110, 105, 110, 244, 626, 110, 116, 59, 27153, 2048, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 5869, 5873, 5936, 5948, 5955, 5960, 6008, 6013, 6112, 6118, 6201, 6224, 5901, 6461, 6472, 6512, 111, 116, 59, 27373, 256, 99, 114, 5878, 5918, 107, 512, 99, 101, 112, 115, 5888, 5893, 5901, 5907, 111, 110, 103, 59, 25164, 112, 115, 105, 108, 111, 110, 59, 17398, 114, 105, 109, 101, 59, 24629, 105, 109, 256, 59, 101, 5914, 5915, 25149, 113, 59, 25293, 374, 5922, 5926, 101, 101, 59, 25277, 101, 100, 256, 59, 103, 5932, 5933, 25349, 101, 187, 5933, 114, 107, 256, 59, 116, 4956, 5943, 98, 114, 107, 59, 25526, 256, 111, 121, 5889, 5953, 59, 17457, 113, 117, 111, 59, 24606, 640, 99, 109, 112, 114, 116, 5971, 5979, 5985, 5988, 5992, 97, 117, 115, 256, 59, 101, 266, 265, 112, 116, 121, 118, 59, 27056, 115, 233, 5900, 110, 111, 245, 275, 384, 97, 104, 119, 5999, 6001, 6003, 59, 17330, 59, 24886, 101, 101, 110, 59, 25196, 114, 59, 49152, 55349, 56607, 103, 896, 99, 111, 115, 116, 117, 118, 119, 6029, 6045, 6067, 6081, 6101, 6107, 6110, 384, 97, 105, 117, 6036, 6038, 6042, 240, 1888, 114, 99, 59, 26095, 112, 187, 4977, 384, 100, 112, 116, 6052, 6056, 6061, 111, 116, 59, 27136, 108, 117, 115, 59, 27137, 105, 109, 101, 115, 59, 27138, 625, 6073, 0, 0, 6078, 99, 117, 112, 59, 27142, 97, 114, 59, 26117, 114, 105, 97, 110, 103, 108, 101, 256, 100, 117, 6093, 6098, 111, 119, 110, 59, 26045, 112, 59, 26035, 112, 108, 117, 115, 59, 27140, 101, 229, 5188, 229, 5293, 97, 114, 111, 119, 59, 26893, 384, 97, 107, 111, 6125, 6182, 6197, 256, 99, 110, 6130, 6179, 107, 384, 108, 115, 116, 6138, 1451, 6146, 111, 122, 101, 110, 103, 101, 59, 27115, 114, 105, 97, 110, 103, 108, 101, 512, 59, 100, 108, 114, 6162, 6163, 6168, 6173, 26036, 111, 119, 110, 59, 26046, 101, 102, 116, 59, 26050, 105, 103, 104, 116, 59, 26040, 107, 59, 25635, 433, 6187, 0, 6195, 434, 6191, 0, 6193, 59, 26002, 59, 26001, 52, 59, 26003, 99, 107, 59, 25992, 256, 101, 111, 6206, 6221, 256, 59, 113, 6211, 6214, 49152, 61, 8421, 117, 105, 118, 59, 49152, 8801, 8421, 116, 59, 25360, 512, 112, 116, 119, 120, 6233, 6238, 6247, 6252, 102, 59, 49152, 55349, 56659, 256, 59, 116, 5067, 6243, 111, 109, 187, 5068, 116, 105, 101, 59, 25288, 1536, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 6277, 6294, 6314, 6331, 6359, 6363, 6380, 6399, 6405, 6410, 6416, 6433, 512, 76, 82, 108, 114, 6286, 6288, 6290, 6292, 59, 25943, 59, 25940, 59, 25942, 59, 25939, 640, 59, 68, 85, 100, 117, 6305, 6306, 6308, 6310, 6312, 25936, 59, 25958, 59, 25961, 59, 25956, 59, 25959, 512, 76, 82, 108, 114, 6323, 6325, 6327, 6329, 59, 25949, 59, 25946, 59, 25948, 59, 25945, 896, 59, 72, 76, 82, 104, 108, 114, 6346, 6347, 6349, 6351, 6353, 6355, 6357, 25937, 59, 25964, 59, 25955, 59, 25952, 59, 25963, 59, 25954, 59, 25951, 111, 120, 59, 27081, 512, 76, 82, 108, 114, 6372, 6374, 6376, 6378, 59, 25941, 59, 25938, 59, 25872, 59, 25868, 640, 59, 68, 85, 100, 117, 1725, 6391, 6393, 6395, 6397, 59, 25957, 59, 25960, 59, 25900, 59, 25908, 105, 110, 117, 115, 59, 25247, 108, 117, 115, 59, 25246, 105, 109, 101, 115, 59, 25248, 512, 76, 82, 108, 114, 6425, 6427, 6429, 6431, 59, 25947, 59, 25944, 59, 25880, 59, 25876, 896, 59, 72, 76, 82, 104, 108, 114, 6448, 6449, 6451, 6453, 6455, 6457, 6459, 25858, 59, 25962, 59, 25953, 59, 25950, 59, 25916, 59, 25892, 59, 25884, 256, 101, 118, 291, 6466, 98, 97, 114, 32827, 166, 16550, 512, 99, 101, 105, 111, 6481, 6486, 6490, 6496, 114, 59, 49152, 55349, 56503, 109, 105, 59, 24655, 109, 256, 59, 101, 5914, 5916, 108, 384, 59, 98, 104, 6504, 6505, 6507, 16476, 59, 27077, 115, 117, 98, 59, 26568, 364, 6516, 6526, 108, 256, 59, 101, 6521, 6522, 24610, 116, 187, 6522, 112, 384, 59, 69, 101, 303, 6533, 6535, 59, 27310, 256, 59, 113, 1756, 1755, 3297, 6567, 0, 6632, 6673, 6677, 6706, 0, 6711, 6736, 0, 0, 6836, 0, 0, 6849, 0, 0, 6945, 6958, 6989, 6994, 0, 7165, 0, 7180, 384, 99, 112, 114, 6573, 6578, 6621, 117, 116, 101, 59, 16647, 768, 59, 97, 98, 99, 100, 115, 6591, 6592, 6596, 6602, 6613, 6617, 25129, 110, 100, 59, 27204, 114, 99, 117, 112, 59, 27209, 256, 97, 117, 6607, 6610, 112, 59, 27211, 112, 59, 27207, 111, 116, 59, 27200, 59, 49152, 8745, 65024, 256, 101, 111, 6626, 6629, 116, 59, 24641, 238, 1683, 512, 97, 101, 105, 117, 6640, 6651, 6657, 6661, 496, 6645, 0, 6648, 115, 59, 27213, 111, 110, 59, 16653, 100, 105, 108, 32827, 231, 16615, 114, 99, 59, 16649, 112, 115, 256, 59, 115, 6668, 6669, 27212, 109, 59, 27216, 111, 116, 59, 16651, 384, 100, 109, 110, 6683, 6688, 6694, 105, 108, 32955, 184, 429, 112, 116, 121, 118, 59, 27058, 116, 33024, 162, 59, 101, 6701, 6702, 16546, 114, 228, 434, 114, 59, 49152, 55349, 56608, 384, 99, 101, 105, 6717, 6720, 6733, 121, 59, 17479, 99, 107, 256, 59, 109, 6727, 6728, 26387, 97, 114, 107, 187, 6728, 59, 17351, 114, 896, 59, 69, 99, 101, 102, 109, 115, 6751, 6752, 6754, 6763, 6820, 6826, 6830, 26059, 59, 27075, 384, 59, 101, 108, 6761, 6762, 6765, 17094, 113, 59, 25175, 101, 609, 6772, 0, 0, 6792, 114, 114, 111, 119, 256, 108, 114, 6780, 6785, 101, 102, 116, 59, 25018, 105, 103, 104, 116, 59, 25019, 640, 82, 83, 97, 99, 100, 6802, 6804, 6806, 6810, 6815, 187, 3911, 59, 25800, 115, 116, 59, 25243, 105, 114, 99, 59, 25242, 97, 115, 104, 59, 25245, 110, 105, 110, 116, 59, 27152, 105, 100, 59, 27375, 99, 105, 114, 59, 27074, 117, 98, 115, 256, 59, 117, 6843, 6844, 26211, 105, 116, 187, 6844, 748, 6855, 6868, 6906, 0, 6922, 111, 110, 256, 59, 101, 6861, 6862, 16442, 256, 59, 113, 199, 198, 621, 6873, 0, 0, 6882, 97, 256, 59, 116, 6878, 6879, 16428, 59, 16448, 384, 59, 102, 108, 6888, 6889, 6891, 25089, 238, 4448, 101, 256, 109, 120, 6897, 6902, 101, 110, 116, 187, 6889, 101, 243, 589, 487, 6910, 0, 6919, 256, 59, 100, 4795, 6914, 111, 116, 59, 27245, 110, 244, 582, 384, 102, 114, 121, 6928, 6932, 6935, 59, 49152, 55349, 56660, 111, 228, 596, 33024, 169, 59, 115, 341, 6941, 114, 59, 24855, 256, 97, 111, 6949, 6953, 114, 114, 59, 25013, 115, 115, 59, 26391, 256, 99, 117, 6962, 6967, 114, 59, 49152, 55349, 56504, 256, 98, 112, 6972, 6980, 256, 59, 101, 6977, 6978, 27343, 59, 27345, 256, 59, 101, 6985, 6986, 27344, 59, 27346, 100, 111, 116, 59, 25327, 896, 100, 101, 108, 112, 114, 118, 119, 7008, 7020, 7031, 7042, 7084, 7124, 7161, 97, 114, 114, 256, 108, 114, 7016, 7018, 59, 26936, 59, 26933, 624, 7026, 0, 0, 7029, 114, 59, 25310, 99, 59, 25311, 97, 114, 114, 256, 59, 112, 7039, 7040, 25014, 59, 26941, 768, 59, 98, 99, 100, 111, 115, 7055, 7056, 7062, 7073, 7077, 7080, 25130, 114, 99, 97, 112, 59, 27208, 256, 97, 117, 7067, 7070, 112, 59, 27206, 112, 59, 27210, 111, 116, 59, 25229, 114, 59, 27205, 59, 49152, 8746, 65024, 512, 97, 108, 114, 118, 7093, 7103, 7134, 7139, 114, 114, 256, 59, 109, 7100, 7101, 25015, 59, 26940, 121, 384, 101, 118, 119, 7111, 7124, 7128, 113, 624, 7118, 0, 0, 7122, 114, 101, 227, 7027, 117, 227, 7029, 101, 101, 59, 25294, 101, 100, 103, 101, 59, 25295, 101, 110, 32827, 164, 16548, 101, 97, 114, 114, 111, 119, 256, 108, 114, 7150, 7155, 101, 102, 116, 187, 7040, 105, 103, 104, 116, 187, 7101, 101, 228, 7133, 256, 99, 105, 7169, 7175, 111, 110, 105, 110, 244, 503, 110, 116, 59, 25137, 108, 99, 116, 121, 59, 25389, 2432, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 7224, 7227, 7231, 7261, 7273, 7285, 7306, 7326, 7340, 7351, 7419, 7423, 7437, 7547, 7569, 7595, 7611, 7622, 7629, 114, 242, 897, 97, 114, 59, 26981, 512, 103, 108, 114, 115, 7240, 7245, 7250, 7252, 103, 101, 114, 59, 24608, 101, 116, 104, 59, 24888, 242, 4403, 104, 256, 59, 118, 7258, 7259, 24592, 187, 2314, 363, 7265, 7271, 97, 114, 111, 119, 59, 26895, 97, 227, 789, 256, 97, 121, 7278, 7283, 114, 111, 110, 59, 16655, 59, 17460, 384, 59, 97, 111, 818, 7292, 7300, 256, 103, 114, 703, 7297, 114, 59, 25034, 116, 115, 101, 113, 59, 27255, 384, 103, 108, 109, 7313, 7316, 7320, 32827, 176, 16560, 116, 97, 59, 17332, 112, 116, 121, 118, 59, 27057, 256, 105, 114, 7331, 7336, 115, 104, 116, 59, 27007, 59, 49152, 55349, 56609, 97, 114, 256, 108, 114, 7347, 7349, 187, 2268, 187, 4126, 640, 97, 101, 103, 115, 118, 7362, 888, 7382, 7388, 7392, 109, 384, 59, 111, 115, 806, 7370, 7380, 110, 100, 256, 59, 115, 806, 7377, 117, 105, 116, 59, 26214, 97, 109, 109, 97, 59, 17373, 105, 110, 59, 25330, 384, 59, 105, 111, 7399, 7400, 7416, 16631, 100, 101, 33024, 247, 59, 111, 7399, 7408, 110, 116, 105, 109, 101, 115, 59, 25287, 110, 248, 7415, 99, 121, 59, 17490, 99, 623, 7430, 0, 0, 7434, 114, 110, 59, 25374, 111, 112, 59, 25357, 640, 108, 112, 116, 117, 119, 7448, 7453, 7458, 7497, 7509, 108, 97, 114, 59, 16420, 102, 59, 49152, 55349, 56661, 640, 59, 101, 109, 112, 115, 779, 7469, 7479, 7485, 7490, 113, 256, 59, 100, 850, 7475, 111, 116, 59, 25169, 105, 110, 117, 115, 59, 25144, 108, 117, 115, 59, 25108, 113, 117, 97, 114, 101, 59, 25249, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 229, 250, 110, 384, 97, 100, 104, 4398, 7517, 7527, 111, 119, 110, 97, 114, 114, 111, 119, 243, 7299, 97, 114, 112, 111, 111, 110, 256, 108, 114, 7538, 7542, 101, 102, 244, 7348, 105, 103, 104, 244, 7350, 354, 7551, 7557, 107, 97, 114, 111, 247, 3906, 623, 7562, 0, 0, 7566, 114, 110, 59, 25375, 111, 112, 59, 25356, 384, 99, 111, 116, 7576, 7587, 7590, 256, 114, 121, 7581, 7585, 59, 49152, 55349, 56505, 59, 17493, 108, 59, 27126, 114, 111, 107, 59, 16657, 256, 100, 114, 7600, 7604, 111, 116, 59, 25329, 105, 256, 59, 102, 7610, 6166, 26047, 256, 97, 104, 7616, 7619, 114, 242, 1065, 97, 242, 4006, 97, 110, 103, 108, 101, 59, 27046, 256, 99, 105, 7634, 7637, 121, 59, 17503, 103, 114, 97, 114, 114, 59, 26623, 2304, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 7681, 7689, 7705, 7736, 1400, 7740, 7753, 7777, 7806, 7845, 7855, 7869, 7905, 7978, 7991, 8004, 8014, 8026, 256, 68, 111, 7686, 7476, 111, 244, 7305, 256, 99, 115, 7694, 7700, 117, 116, 101, 32827, 233, 16617, 116, 101, 114, 59, 27246, 512, 97, 105, 111, 121, 7714, 7719, 7729, 7734, 114, 111, 110, 59, 16667, 114, 256, 59, 99, 7725, 7726, 25174, 32827, 234, 16618, 108, 111, 110, 59, 25173, 59, 17485, 111, 116, 59, 16663, 256, 68, 114, 7745, 7749, 111, 116, 59, 25170, 59, 49152, 55349, 56610, 384, 59, 114, 115, 7760, 7761, 7767, 27290, 97, 118, 101, 32827, 232, 16616, 256, 59, 100, 7772, 7773, 27286, 111, 116, 59, 27288, 512, 59, 105, 108, 115, 7786, 7787, 7794, 7796, 27289, 110, 116, 101, 114, 115, 59, 25575, 59, 24851, 256, 59, 100, 7801, 7802, 27285, 111, 116, 59, 27287, 384, 97, 112, 115, 7813, 7817, 7831, 99, 114, 59, 16659, 116, 121, 384, 59, 115, 118, 7826, 7827, 7829, 25093, 101, 116, 187, 7827, 112, 256, 49, 59, 7837, 7844, 307, 7841, 7843, 59, 24580, 59, 24581, 24579, 256, 103, 115, 7850, 7852, 59, 16715, 112, 59, 24578, 256, 103, 112, 7860, 7864, 111, 110, 59, 16665, 102, 59, 49152, 55349, 56662, 384, 97, 108, 115, 7876, 7886, 7890, 114, 256, 59, 115, 7882, 7883, 25301, 108, 59, 27107, 117, 115, 59, 27249, 105, 384, 59, 108, 118, 7898, 7899, 7903, 17333, 111, 110, 187, 7899, 59, 17397, 512, 99, 115, 117, 118, 7914, 7923, 7947, 7971, 256, 105, 111, 7919, 7729, 114, 99, 187, 7726, 617, 7929, 0, 0, 7931, 237, 1352, 97, 110, 116, 256, 103, 108, 7938, 7942, 116, 114, 187, 7773, 101, 115, 115, 187, 7802, 384, 97, 101, 105, 7954, 7958, 7962, 108, 115, 59, 16445, 115, 116, 59, 25183, 118, 256, 59, 68, 565, 7968, 68, 59, 27256, 112, 97, 114, 115, 108, 59, 27109, 256, 68, 97, 7983, 7987, 111, 116, 59, 25171, 114, 114, 59, 26993, 384, 99, 100, 105, 7998, 8001, 7928, 114, 59, 24879, 111, 244, 850, 256, 97, 104, 8009, 8011, 59, 17335, 32827, 240, 16624, 256, 109, 114, 8019, 8023, 108, 32827, 235, 16619, 111, 59, 24748, 384, 99, 105, 112, 8033, 8036, 8039, 108, 59, 16417, 115, 244, 1390, 256, 101, 111, 8044, 8052, 99, 116, 97, 116, 105, 111, 238, 1369, 110, 101, 110, 116, 105, 97, 108, 229, 1401, 2529, 8082, 0, 8094, 0, 8097, 8103, 0, 0, 8134, 8140, 0, 8147, 0, 8166, 8170, 8192, 0, 8200, 8282, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 241, 7748, 121, 59, 17476, 109, 97, 108, 101, 59, 26176, 384, 105, 108, 114, 8109, 8115, 8129, 108, 105, 103, 59, 32768, 64259, 617, 8121, 0, 0, 8125, 103, 59, 32768, 64256, 105, 103, 59, 32768, 64260, 59, 49152, 55349, 56611, 108, 105, 103, 59, 32768, 64257, 108, 105, 103, 59, 49152, 102, 106, 384, 97, 108, 116, 8153, 8156, 8161, 116, 59, 26221, 105, 103, 59, 32768, 64258, 110, 115, 59, 26033, 111, 102, 59, 16786, 496, 8174, 0, 8179, 102, 59, 49152, 55349, 56663, 256, 97, 107, 1471, 8183, 256, 59, 118, 8188, 8189, 25300, 59, 27353, 97, 114, 116, 105, 110, 116, 59, 27149, 256, 97, 111, 8204, 8277, 256, 99, 115, 8209, 8274, 945, 8218, 8240, 8248, 8261, 8264, 0, 8272, 946, 8226, 8229, 8231, 8234, 8236, 0, 8238, 32827, 189, 16573, 59, 24915, 32827, 188, 16572, 59, 24917, 59, 24921, 59, 24923, 435, 8244, 0, 8246, 59, 24916, 59, 24918, 692, 8254, 8257, 0, 0, 8259, 32827, 190, 16574, 59, 24919, 59, 24924, 53, 59, 24920, 438, 8268, 0, 8270, 59, 24922, 59, 24925, 56, 59, 24926, 108, 59, 24644, 119, 110, 59, 25378, 99, 114, 59, 49152, 55349, 56507, 2176, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 8322, 8329, 8351, 8357, 8368, 8372, 8432, 8437, 8442, 8447, 8451, 8466, 8504, 791, 8510, 8530, 8606, 256, 59, 108, 1613, 8327, 59, 27276, 384, 99, 109, 112, 8336, 8341, 8349, 117, 116, 101, 59, 16885, 109, 97, 256, 59, 100, 8348, 7386, 17331, 59, 27270, 114, 101, 118, 101, 59, 16671, 256, 105, 121, 8362, 8366, 114, 99, 59, 16669, 59, 17459, 111, 116, 59, 16673, 512, 59, 108, 113, 115, 1598, 1602, 8381, 8393, 384, 59, 113, 115, 1598, 1612, 8388, 108, 97, 110, 244, 1637, 512, 59, 99, 100, 108, 1637, 8402, 8405, 8421, 99, 59, 27305, 111, 116, 256, 59, 111, 8412, 8413, 27264, 256, 59, 108, 8418, 8419, 27266, 59, 27268, 256, 59, 101, 8426, 8429, 49152, 8923, 65024, 115, 59, 27284, 114, 59, 49152, 55349, 56612, 256, 59, 103, 1651, 1563, 109, 101, 108, 59, 24887, 99, 121, 59, 17491, 512, 59, 69, 97, 106, 1626, 8460, 8462, 8464, 59, 27282, 59, 27301, 59, 27300, 512, 69, 97, 101, 115, 8475, 8477, 8489, 8500, 59, 25193, 112, 256, 59, 112, 8483, 8484, 27274, 114, 111, 120, 187, 8484, 256, 59, 113, 8494, 8495, 27272, 256, 59, 113, 8494, 8475, 105, 109, 59, 25319, 112, 102, 59, 49152, 55349, 56664, 256, 99, 105, 8515, 8518, 114, 59, 24842, 109, 384, 59, 101, 108, 1643, 8526, 8528, 59, 27278, 59, 27280, 33536, 62, 59, 99, 100, 108, 113, 114, 1518, 8544, 8554, 8558, 8563, 8569, 256, 99, 105, 8549, 8551, 59, 27303, 114, 59, 27258, 111, 116, 59, 25303, 80, 97, 114, 59, 27029, 117, 101, 115, 116, 59, 27260, 640, 97, 100, 101, 108, 115, 8580, 8554, 8592, 1622, 8603, 496, 8585, 0, 8590, 112, 114, 111, 248, 8350, 114, 59, 27e3, 113, 256, 108, 113, 1599, 8598, 108, 101, 115, 243, 8328, 105, 237, 1643, 256, 101, 110, 8611, 8621, 114, 116, 110, 101, 113, 113, 59, 49152, 8809, 65024, 197, 8618, 1280, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 8644, 8647, 8689, 8693, 8698, 8728, 8733, 8751, 8808, 8829, 114, 242, 928, 512, 105, 108, 109, 114, 8656, 8660, 8663, 8667, 114, 115, 240, 5252, 102, 187, 8228, 105, 108, 244, 1705, 256, 100, 114, 8672, 8676, 99, 121, 59, 17482, 384, 59, 99, 119, 2292, 8683, 8687, 105, 114, 59, 26952, 59, 25005, 97, 114, 59, 24847, 105, 114, 99, 59, 16677, 384, 97, 108, 114, 8705, 8718, 8723, 114, 116, 115, 256, 59, 117, 8713, 8714, 26213, 105, 116, 187, 8714, 108, 105, 112, 59, 24614, 99, 111, 110, 59, 25273, 114, 59, 49152, 55349, 56613, 115, 256, 101, 119, 8739, 8745, 97, 114, 111, 119, 59, 26917, 97, 114, 111, 119, 59, 26918, 640, 97, 109, 111, 112, 114, 8762, 8766, 8771, 8798, 8803, 114, 114, 59, 25087, 116, 104, 116, 59, 25147, 107, 256, 108, 114, 8777, 8787, 101, 102, 116, 97, 114, 114, 111, 119, 59, 25001, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25002, 102, 59, 49152, 55349, 56665, 98, 97, 114, 59, 24597, 384, 99, 108, 116, 8815, 8820, 8824, 114, 59, 49152, 55349, 56509, 97, 115, 232, 8692, 114, 111, 107, 59, 16679, 256, 98, 112, 8834, 8839, 117, 108, 108, 59, 24643, 104, 101, 110, 187, 7259, 2785, 8867, 0, 8874, 0, 8888, 8901, 8910, 0, 8917, 8947, 0, 0, 8952, 8994, 9063, 9058, 9087, 0, 9094, 9130, 9140, 99, 117, 116, 101, 32827, 237, 16621, 384, 59, 105, 121, 1905, 8880, 8885, 114, 99, 32827, 238, 16622, 59, 17464, 256, 99, 120, 8892, 8895, 121, 59, 17461, 99, 108, 32827, 161, 16545, 256, 102, 114, 927, 8905, 59, 49152, 55349, 56614, 114, 97, 118, 101, 32827, 236, 16620, 512, 59, 105, 110, 111, 1854, 8925, 8937, 8942, 256, 105, 110, 8930, 8934, 110, 116, 59, 27148, 116, 59, 25133, 102, 105, 110, 59, 27100, 116, 97, 59, 24873, 108, 105, 103, 59, 16691, 384, 97, 111, 112, 8958, 8986, 8989, 384, 99, 103, 116, 8965, 8968, 8983, 114, 59, 16683, 384, 101, 108, 112, 1823, 8975, 8979, 105, 110, 229, 1934, 97, 114, 244, 1824, 104, 59, 16689, 102, 59, 25271, 101, 100, 59, 16821, 640, 59, 99, 102, 111, 116, 1268, 9004, 9009, 9021, 9025, 97, 114, 101, 59, 24837, 105, 110, 256, 59, 116, 9016, 9017, 25118, 105, 101, 59, 27101, 100, 111, 244, 8985, 640, 59, 99, 101, 108, 112, 1879, 9036, 9040, 9051, 9057, 97, 108, 59, 25274, 256, 103, 114, 9045, 9049, 101, 114, 243, 5475, 227, 9037, 97, 114, 104, 107, 59, 27159, 114, 111, 100, 59, 27196, 512, 99, 103, 112, 116, 9071, 9074, 9078, 9083, 121, 59, 17489, 111, 110, 59, 16687, 102, 59, 49152, 55349, 56666, 97, 59, 17337, 117, 101, 115, 116, 32827, 191, 16575, 256, 99, 105, 9098, 9103, 114, 59, 49152, 55349, 56510, 110, 640, 59, 69, 100, 115, 118, 1268, 9115, 9117, 9121, 1267, 59, 25337, 111, 116, 59, 25333, 256, 59, 118, 9126, 9127, 25332, 59, 25331, 256, 59, 105, 1911, 9134, 108, 100, 101, 59, 16681, 491, 9144, 0, 9148, 99, 121, 59, 17494, 108, 32827, 239, 16623, 768, 99, 102, 109, 111, 115, 117, 9164, 9175, 9180, 9185, 9191, 9205, 256, 105, 121, 9169, 9173, 114, 99, 59, 16693, 59, 17465, 114, 59, 49152, 55349, 56615, 97, 116, 104, 59, 16951, 112, 102, 59, 49152, 55349, 56667, 483, 9196, 0, 9201, 114, 59, 49152, 55349, 56511, 114, 99, 121, 59, 17496, 107, 99, 121, 59, 17492, 1024, 97, 99, 102, 103, 104, 106, 111, 115, 9227, 9238, 9250, 9255, 9261, 9265, 9269, 9275, 112, 112, 97, 256, 59, 118, 9235, 9236, 17338, 59, 17392, 256, 101, 121, 9243, 9248, 100, 105, 108, 59, 16695, 59, 17466, 114, 59, 49152, 55349, 56616, 114, 101, 101, 110, 59, 16696, 99, 121, 59, 17477, 99, 121, 59, 17500, 112, 102, 59, 49152, 55349, 56668, 99, 114, 59, 49152, 55349, 56512, 2944, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 9328, 9345, 9350, 9357, 9361, 9486, 9533, 9562, 9600, 9806, 9822, 9829, 9849, 9853, 9882, 9906, 9944, 10077, 10088, 10123, 10176, 10241, 10258, 384, 97, 114, 116, 9335, 9338, 9340, 114, 242, 2502, 242, 917, 97, 105, 108, 59, 26907, 97, 114, 114, 59, 26894, 256, 59, 103, 2452, 9355, 59, 27275, 97, 114, 59, 26978, 2403, 9381, 0, 9386, 0, 9393, 0, 0, 0, 0, 0, 9397, 9402, 0, 9414, 9416, 9421, 0, 9465, 117, 116, 101, 59, 16698, 109, 112, 116, 121, 118, 59, 27060, 114, 97, 238, 2124, 98, 100, 97, 59, 17339, 103, 384, 59, 100, 108, 2190, 9409, 9411, 59, 27025, 229, 2190, 59, 27269, 117, 111, 32827, 171, 16555, 114, 1024, 59, 98, 102, 104, 108, 112, 115, 116, 2201, 9438, 9446, 9449, 9451, 9454, 9457, 9461, 256, 59, 102, 2205, 9443, 115, 59, 26911, 115, 59, 26909, 235, 8786, 112, 59, 25003, 108, 59, 26937, 105, 109, 59, 26995, 108, 59, 24994, 384, 59, 97, 101, 9471, 9472, 9476, 27307, 105, 108, 59, 26905, 256, 59, 115, 9481, 9482, 27309, 59, 49152, 10925, 65024, 384, 97, 98, 114, 9493, 9497, 9501, 114, 114, 59, 26892, 114, 107, 59, 26482, 256, 97, 107, 9506, 9516, 99, 256, 101, 107, 9512, 9514, 59, 16507, 59, 16475, 256, 101, 115, 9521, 9523, 59, 27019, 108, 256, 100, 117, 9529, 9531, 59, 27023, 59, 27021, 512, 97, 101, 117, 121, 9542, 9547, 9558, 9560, 114, 111, 110, 59, 16702, 256, 100, 105, 9552, 9556, 105, 108, 59, 16700, 236, 2224, 226, 9513, 59, 17467, 512, 99, 113, 114, 115, 9571, 9574, 9581, 9597, 97, 59, 26934, 117, 111, 256, 59, 114, 3609, 5958, 256, 100, 117, 9586, 9591, 104, 97, 114, 59, 26983, 115, 104, 97, 114, 59, 26955, 104, 59, 25010, 640, 59, 102, 103, 113, 115, 9611, 9612, 2441, 9715, 9727, 25188, 116, 640, 97, 104, 108, 114, 116, 9624, 9636, 9655, 9666, 9704, 114, 114, 111, 119, 256, 59, 116, 2201, 9633, 97, 233, 9462, 97, 114, 112, 111, 111, 110, 256, 100, 117, 9647, 9652, 111, 119, 110, 187, 1114, 112, 187, 2406, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 25031, 105, 103, 104, 116, 384, 97, 104, 115, 9677, 9686, 9694, 114, 114, 111, 119, 256, 59, 115, 2292, 2215, 97, 114, 112, 111, 111, 110, 243, 3992, 113, 117, 105, 103, 97, 114, 114, 111, 247, 8688, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 25291, 384, 59, 113, 115, 9611, 2451, 9722, 108, 97, 110, 244, 2476, 640, 59, 99, 100, 103, 115, 2476, 9738, 9741, 9757, 9768, 99, 59, 27304, 111, 116, 256, 59, 111, 9748, 9749, 27263, 256, 59, 114, 9754, 9755, 27265, 59, 27267, 256, 59, 101, 9762, 9765, 49152, 8922, 65024, 115, 59, 27283, 640, 97, 100, 101, 103, 115, 9779, 9785, 9789, 9801, 9803, 112, 112, 114, 111, 248, 9414, 111, 116, 59, 25302, 113, 256, 103, 113, 9795, 9797, 244, 2441, 103, 116, 242, 9356, 244, 2459, 105, 237, 2482, 384, 105, 108, 114, 9813, 2273, 9818, 115, 104, 116, 59, 27004, 59, 49152, 55349, 56617, 256, 59, 69, 2460, 9827, 59, 27281, 353, 9833, 9846, 114, 256, 100, 117, 9650, 9838, 256, 59, 108, 2405, 9843, 59, 26986, 108, 107, 59, 25988, 99, 121, 59, 17497, 640, 59, 97, 99, 104, 116, 2632, 9864, 9867, 9873, 9878, 114, 242, 9665, 111, 114, 110, 101, 242, 7432, 97, 114, 100, 59, 26987, 114, 105, 59, 26106, 256, 105, 111, 9887, 9892, 100, 111, 116, 59, 16704, 117, 115, 116, 256, 59, 97, 9900, 9901, 25520, 99, 104, 101, 187, 9901, 512, 69, 97, 101, 115, 9915, 9917, 9929, 9940, 59, 25192, 112, 256, 59, 112, 9923, 9924, 27273, 114, 111, 120, 187, 9924, 256, 59, 113, 9934, 9935, 27271, 256, 59, 113, 9934, 9915, 105, 109, 59, 25318, 1024, 97, 98, 110, 111, 112, 116, 119, 122, 9961, 9972, 9975, 10010, 10031, 10049, 10055, 10064, 256, 110, 114, 9966, 9969, 103, 59, 26604, 114, 59, 25085, 114, 235, 2241, 103, 384, 108, 109, 114, 9983, 9997, 10004, 101, 102, 116, 256, 97, 114, 2534, 9991, 105, 103, 104, 116, 225, 2546, 97, 112, 115, 116, 111, 59, 26620, 105, 103, 104, 116, 225, 2557, 112, 97, 114, 114, 111, 119, 256, 108, 114, 10021, 10025, 101, 102, 244, 9453, 105, 103, 104, 116, 59, 25004, 384, 97, 102, 108, 10038, 10041, 10045, 114, 59, 27013, 59, 49152, 55349, 56669, 117, 115, 59, 27181, 105, 109, 101, 115, 59, 27188, 353, 10059, 10063, 115, 116, 59, 25111, 225, 4942, 384, 59, 101, 102, 10071, 10072, 6144, 26058, 110, 103, 101, 187, 10072, 97, 114, 256, 59, 108, 10084, 10085, 16424, 116, 59, 27027, 640, 97, 99, 104, 109, 116, 10099, 10102, 10108, 10117, 10119, 114, 242, 2216, 111, 114, 110, 101, 242, 7564, 97, 114, 256, 59, 100, 3992, 10115, 59, 26989, 59, 24590, 114, 105, 59, 25279, 768, 97, 99, 104, 105, 113, 116, 10136, 10141, 2624, 10146, 10158, 10171, 113, 117, 111, 59, 24633, 114, 59, 49152, 55349, 56513, 109, 384, 59, 101, 103, 2482, 10154, 10156, 59, 27277, 59, 27279, 256, 98, 117, 9514, 10163, 111, 256, 59, 114, 3615, 10169, 59, 24602, 114, 111, 107, 59, 16706, 33792, 60, 59, 99, 100, 104, 105, 108, 113, 114, 2091, 10194, 9785, 10204, 10208, 10213, 10218, 10224, 256, 99, 105, 10199, 10201, 59, 27302, 114, 59, 27257, 114, 101, 229, 9714, 109, 101, 115, 59, 25289, 97, 114, 114, 59, 26998, 117, 101, 115, 116, 59, 27259, 256, 80, 105, 10229, 10233, 97, 114, 59, 27030, 384, 59, 101, 102, 10240, 2349, 6171, 26051, 114, 256, 100, 117, 10247, 10253, 115, 104, 97, 114, 59, 26954, 104, 97, 114, 59, 26982, 256, 101, 110, 10263, 10273, 114, 116, 110, 101, 113, 113, 59, 49152, 8808, 65024, 197, 10270, 1792, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 10304, 10309, 10370, 10382, 10387, 10400, 10405, 10408, 10458, 10466, 10468, 2691, 10483, 10498, 68, 111, 116, 59, 25146, 512, 99, 108, 112, 114, 10318, 10322, 10339, 10365, 114, 32827, 175, 16559, 256, 101, 116, 10327, 10329, 59, 26178, 256, 59, 101, 10334, 10335, 26400, 115, 101, 187, 10335, 256, 59, 115, 4155, 10344, 116, 111, 512, 59, 100, 108, 117, 4155, 10355, 10359, 10363, 111, 119, 238, 1164, 101, 102, 244, 2319, 240, 5073, 107, 101, 114, 59, 26030, 256, 111, 121, 10375, 10380, 109, 109, 97, 59, 27177, 59, 17468, 97, 115, 104, 59, 24596, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 187, 5670, 114, 59, 49152, 55349, 56618, 111, 59, 24871, 384, 99, 100, 110, 10415, 10420, 10441, 114, 111, 32827, 181, 16565, 512, 59, 97, 99, 100, 5220, 10429, 10432, 10436, 115, 244, 5799, 105, 114, 59, 27376, 111, 116, 32955, 183, 437, 117, 115, 384, 59, 98, 100, 10450, 6403, 10451, 25106, 256, 59, 117, 7484, 10456, 59, 27178, 355, 10462, 10465, 112, 59, 27355, 242, 8722, 240, 2689, 256, 100, 112, 10473, 10478, 101, 108, 115, 59, 25255, 102, 59, 49152, 55349, 56670, 256, 99, 116, 10488, 10493, 114, 59, 49152, 55349, 56514, 112, 111, 115, 187, 5533, 384, 59, 108, 109, 10505, 10506, 10509, 17340, 116, 105, 109, 97, 112, 59, 25272, 3072, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 10562, 10579, 10622, 10633, 10648, 10714, 10729, 10773, 10778, 10840, 10845, 10883, 10901, 10916, 10920, 11012, 11015, 11076, 11135, 11182, 11316, 11367, 11388, 11497, 256, 103, 116, 10567, 10571, 59, 49152, 8921, 824, 256, 59, 118, 10576, 3023, 49152, 8811, 8402, 384, 101, 108, 116, 10586, 10610, 10614, 102, 116, 256, 97, 114, 10593, 10599, 114, 114, 111, 119, 59, 25037, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25038, 59, 49152, 8920, 824, 256, 59, 118, 10619, 3143, 49152, 8810, 8402, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25039, 256, 68, 100, 10638, 10643, 97, 115, 104, 59, 25263, 97, 115, 104, 59, 25262, 640, 98, 99, 110, 112, 116, 10659, 10663, 10668, 10673, 10700, 108, 97, 187, 734, 117, 116, 101, 59, 16708, 103, 59, 49152, 8736, 8402, 640, 59, 69, 105, 111, 112, 3460, 10684, 10688, 10693, 10696, 59, 49152, 10864, 824, 100, 59, 49152, 8779, 824, 115, 59, 16713, 114, 111, 248, 3460, 117, 114, 256, 59, 97, 10707, 10708, 26222, 108, 256, 59, 115, 10707, 2872, 499, 10719, 0, 10723, 112, 32955, 160, 2871, 109, 112, 256, 59, 101, 3065, 3072, 640, 97, 101, 111, 117, 121, 10740, 10750, 10755, 10768, 10771, 496, 10745, 0, 10747, 59, 27203, 111, 110, 59, 16712, 100, 105, 108, 59, 16710, 110, 103, 256, 59, 100, 3454, 10762, 111, 116, 59, 49152, 10861, 824, 112, 59, 27202, 59, 17469, 97, 115, 104, 59, 24595, 896, 59, 65, 97, 100, 113, 115, 120, 2962, 10793, 10797, 10811, 10817, 10821, 10832, 114, 114, 59, 25047, 114, 256, 104, 114, 10803, 10806, 107, 59, 26916, 256, 59, 111, 5106, 5104, 111, 116, 59, 49152, 8784, 824, 117, 105, 246, 2915, 256, 101, 105, 10826, 10830, 97, 114, 59, 26920, 237, 2968, 105, 115, 116, 256, 59, 115, 2976, 2975, 114, 59, 49152, 55349, 56619, 512, 69, 101, 115, 116, 3013, 10854, 10873, 10876, 384, 59, 113, 115, 3004, 10861, 3041, 384, 59, 113, 115, 3004, 3013, 10868, 108, 97, 110, 244, 3042, 105, 237, 3050, 256, 59, 114, 2998, 10881, 187, 2999, 384, 65, 97, 112, 10890, 10893, 10897, 114, 242, 10609, 114, 114, 59, 25006, 97, 114, 59, 27378, 384, 59, 115, 118, 3981, 10908, 3980, 256, 59, 100, 10913, 10914, 25340, 59, 25338, 99, 121, 59, 17498, 896, 65, 69, 97, 100, 101, 115, 116, 10935, 10938, 10942, 10946, 10949, 10998, 11001, 114, 242, 10598, 59, 49152, 8806, 824, 114, 114, 59, 24986, 114, 59, 24613, 512, 59, 102, 113, 115, 3131, 10958, 10979, 10991, 116, 256, 97, 114, 10964, 10969, 114, 114, 111, 247, 10945, 105, 103, 104, 116, 97, 114, 114, 111, 247, 10896, 384, 59, 113, 115, 3131, 10938, 10986, 108, 97, 110, 244, 3157, 256, 59, 115, 3157, 10996, 187, 3126, 105, 237, 3165, 256, 59, 114, 3125, 11006, 105, 256, 59, 101, 3098, 3109, 105, 228, 3472, 256, 112, 116, 11020, 11025, 102, 59, 49152, 55349, 56671, 33152, 172, 59, 105, 110, 11033, 11034, 11062, 16556, 110, 512, 59, 69, 100, 118, 2953, 11044, 11048, 11054, 59, 49152, 8953, 824, 111, 116, 59, 49152, 8949, 824, 481, 2953, 11059, 11061, 59, 25335, 59, 25334, 105, 256, 59, 118, 3256, 11068, 481, 3256, 11073, 11075, 59, 25342, 59, 25341, 384, 97, 111, 114, 11083, 11107, 11113, 114, 512, 59, 97, 115, 116, 2939, 11093, 11098, 11103, 108, 108, 101, 236, 2939, 108, 59, 49152, 11005, 8421, 59, 49152, 8706, 824, 108, 105, 110, 116, 59, 27156, 384, 59, 99, 101, 3218, 11120, 11123, 117, 229, 3237, 256, 59, 99, 3224, 11128, 256, 59, 101, 3218, 11133, 241, 3224, 512, 65, 97, 105, 116, 11144, 11147, 11165, 11175, 114, 242, 10632, 114, 114, 384, 59, 99, 119, 11156, 11157, 11161, 24987, 59, 49152, 10547, 824, 59, 49152, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 187, 11157, 114, 105, 256, 59, 101, 3275, 3286, 896, 99, 104, 105, 109, 112, 113, 117, 11197, 11213, 11225, 11012, 2936, 11236, 11247, 512, 59, 99, 101, 114, 3378, 11206, 3383, 11209, 117, 229, 3397, 59, 49152, 55349, 56515, 111, 114, 116, 621, 11013, 0, 0, 11222, 97, 114, 225, 11094, 109, 256, 59, 101, 3438, 11231, 256, 59, 113, 3444, 3443, 115, 117, 256, 98, 112, 11243, 11245, 229, 3320, 229, 3339, 384, 98, 99, 112, 11254, 11281, 11289, 512, 59, 69, 101, 115, 11263, 11264, 3362, 11268, 25220, 59, 49152, 10949, 824, 101, 116, 256, 59, 101, 3355, 11275, 113, 256, 59, 113, 3363, 11264, 99, 256, 59, 101, 3378, 11287, 241, 3384, 512, 59, 69, 101, 115, 11298, 11299, 3423, 11303, 25221, 59, 49152, 10950, 824, 101, 116, 256, 59, 101, 3416, 11310, 113, 256, 59, 113, 3424, 11299, 512, 103, 105, 108, 114, 11325, 11327, 11333, 11335, 236, 3031, 108, 100, 101, 32827, 241, 16625, 231, 3139, 105, 97, 110, 103, 108, 101, 256, 108, 114, 11346, 11356, 101, 102, 116, 256, 59, 101, 3098, 11354, 241, 3110, 105, 103, 104, 116, 256, 59, 101, 3275, 11365, 241, 3287, 256, 59, 109, 11372, 11373, 17341, 384, 59, 101, 115, 11380, 11381, 11385, 16419, 114, 111, 59, 24854, 112, 59, 24583, 1152, 68, 72, 97, 100, 103, 105, 108, 114, 115, 11407, 11412, 11417, 11422, 11427, 11440, 11446, 11475, 11491, 97, 115, 104, 59, 25261, 97, 114, 114, 59, 26884, 112, 59, 49152, 8781, 8402, 97, 115, 104, 59, 25260, 256, 101, 116, 11432, 11436, 59, 49152, 8805, 8402, 59, 49152, 62, 8402, 110, 102, 105, 110, 59, 27102, 384, 65, 101, 116, 11453, 11457, 11461, 114, 114, 59, 26882, 59, 49152, 8804, 8402, 256, 59, 114, 11466, 11469, 49152, 60, 8402, 105, 101, 59, 49152, 8884, 8402, 256, 65, 116, 11480, 11484, 114, 114, 59, 26883, 114, 105, 101, 59, 49152, 8885, 8402, 105, 109, 59, 49152, 8764, 8402, 384, 65, 97, 110, 11504, 11508, 11522, 114, 114, 59, 25046, 114, 256, 104, 114, 11514, 11517, 107, 59, 26915, 256, 59, 111, 5095, 5093, 101, 97, 114, 59, 26919, 4691, 6805, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11565, 0, 11576, 11592, 11616, 11621, 11634, 11652, 6919, 0, 0, 11661, 11691, 0, 11720, 11726, 0, 11740, 11801, 11819, 11838, 11843, 256, 99, 115, 11569, 6807, 117, 116, 101, 32827, 243, 16627, 256, 105, 121, 11580, 11589, 114, 256, 59, 99, 6814, 11586, 32827, 244, 16628, 59, 17470, 640, 97, 98, 105, 111, 115, 6816, 11602, 11607, 456, 11610, 108, 97, 99, 59, 16721, 118, 59, 27192, 111, 108, 100, 59, 27068, 108, 105, 103, 59, 16723, 256, 99, 114, 11625, 11629, 105, 114, 59, 27071, 59, 49152, 55349, 56620, 879, 11641, 0, 0, 11644, 0, 11650, 110, 59, 17115, 97, 118, 101, 32827, 242, 16626, 59, 27073, 256, 98, 109, 11656, 3572, 97, 114, 59, 27061, 512, 97, 99, 105, 116, 11669, 11672, 11685, 11688, 114, 242, 6784, 256, 105, 114, 11677, 11680, 114, 59, 27070, 111, 115, 115, 59, 27067, 110, 229, 3666, 59, 27072, 384, 97, 101, 105, 11697, 11701, 11705, 99, 114, 59, 16717, 103, 97, 59, 17353, 384, 99, 100, 110, 11712, 11717, 461, 114, 111, 110, 59, 17343, 59, 27062, 112, 102, 59, 49152, 55349, 56672, 384, 97, 101, 108, 11732, 11735, 466, 114, 59, 27063, 114, 112, 59, 27065, 896, 59, 97, 100, 105, 111, 115, 118, 11754, 11755, 11758, 11784, 11789, 11792, 11798, 25128, 114, 242, 6790, 512, 59, 101, 102, 109, 11767, 11768, 11778, 11781, 27229, 114, 256, 59, 111, 11774, 11775, 24884, 102, 187, 11775, 32827, 170, 16554, 32827, 186, 16570, 103, 111, 102, 59, 25270, 114, 59, 27222, 108, 111, 112, 101, 59, 27223, 59, 27227, 384, 99, 108, 111, 11807, 11809, 11815, 242, 11777, 97, 115, 104, 32827, 248, 16632, 108, 59, 25240, 105, 364, 11823, 11828, 100, 101, 32827, 245, 16629, 101, 115, 256, 59, 97, 475, 11834, 115, 59, 27190, 109, 108, 32827, 246, 16630, 98, 97, 114, 59, 25405, 2785, 11870, 0, 11901, 0, 11904, 11933, 0, 11938, 11961, 0, 0, 11979, 3740, 0, 12051, 0, 0, 12075, 12220, 0, 12232, 114, 512, 59, 97, 115, 116, 1027, 11879, 11890, 3717, 33024, 182, 59, 108, 11885, 11886, 16566, 108, 101, 236, 1027, 617, 11896, 0, 0, 11899, 109, 59, 27379, 59, 27389, 121, 59, 17471, 114, 640, 99, 105, 109, 112, 116, 11915, 11919, 11923, 6245, 11927, 110, 116, 59, 16421, 111, 100, 59, 16430, 105, 108, 59, 24624, 101, 110, 107, 59, 24625, 114, 59, 49152, 55349, 56621, 384, 105, 109, 111, 11944, 11952, 11956, 256, 59, 118, 11949, 11950, 17350, 59, 17365, 109, 97, 244, 2678, 110, 101, 59, 26126, 384, 59, 116, 118, 11967, 11968, 11976, 17344, 99, 104, 102, 111, 114, 107, 187, 8189, 59, 17366, 256, 97, 117, 11983, 11999, 110, 256, 99, 107, 11989, 11997, 107, 256, 59, 104, 8692, 11995, 59, 24846, 246, 8692, 115, 1152, 59, 97, 98, 99, 100, 101, 109, 115, 116, 12019, 12020, 6408, 12025, 12029, 12036, 12038, 12042, 12046, 16427, 99, 105, 114, 59, 27171, 105, 114, 59, 27170, 256, 111, 117, 7488, 12034, 59, 27173, 59, 27250, 110, 32955, 177, 3741, 105, 109, 59, 27174, 119, 111, 59, 27175, 384, 105, 112, 117, 12057, 12064, 12069, 110, 116, 105, 110, 116, 59, 27157, 102, 59, 49152, 55349, 56673, 110, 100, 32827, 163, 16547, 1280, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 3784, 12095, 12097, 12100, 12103, 12161, 12169, 12178, 12158, 12214, 59, 27315, 112, 59, 27319, 117, 229, 3801, 256, 59, 99, 3790, 12108, 768, 59, 97, 99, 101, 110, 115, 3784, 12121, 12127, 12134, 12136, 12158, 112, 112, 114, 111, 248, 12099, 117, 114, 108, 121, 101, 241, 3801, 241, 3790, 384, 97, 101, 115, 12143, 12150, 12154, 112, 112, 114, 111, 120, 59, 27321, 113, 113, 59, 27317, 105, 109, 59, 25320, 105, 237, 3807, 109, 101, 256, 59, 115, 12168, 3758, 24626, 384, 69, 97, 115, 12152, 12176, 12154, 240, 12149, 384, 100, 102, 112, 3820, 12185, 12207, 384, 97, 108, 115, 12192, 12197, 12202, 108, 97, 114, 59, 25390, 105, 110, 101, 59, 25362, 117, 114, 102, 59, 25363, 256, 59, 116, 3835, 12212, 239, 3835, 114, 101, 108, 59, 25264, 256, 99, 105, 12224, 12229, 114, 59, 49152, 55349, 56517, 59, 17352, 110, 99, 115, 112, 59, 24584, 768, 102, 105, 111, 112, 115, 117, 12250, 8930, 12255, 12261, 12267, 12273, 114, 59, 49152, 55349, 56622, 112, 102, 59, 49152, 55349, 56674, 114, 105, 109, 101, 59, 24663, 99, 114, 59, 49152, 55349, 56518, 384, 97, 101, 111, 12280, 12297, 12307, 116, 256, 101, 105, 12286, 12293, 114, 110, 105, 111, 110, 243, 1712, 110, 116, 59, 27158, 115, 116, 256, 59, 101, 12304, 12305, 16447, 241, 7961, 244, 3860, 2688, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 12352, 12369, 12373, 12377, 12512, 12558, 12587, 12615, 12642, 12658, 12686, 12806, 12821, 12836, 12841, 12888, 12910, 12914, 12944, 12976, 12983, 384, 97, 114, 116, 12359, 12362, 12364, 114, 242, 4275, 242, 989, 97, 105, 108, 59, 26908, 97, 114, 242, 7269, 97, 114, 59, 26980, 896, 99, 100, 101, 110, 113, 114, 116, 12392, 12405, 12408, 12415, 12431, 12436, 12492, 256, 101, 117, 12397, 12401, 59, 49152, 8765, 817, 116, 101, 59, 16725, 105, 227, 4462, 109, 112, 116, 121, 118, 59, 27059, 103, 512, 59, 100, 101, 108, 4049, 12425, 12427, 12429, 59, 27026, 59, 27045, 229, 4049, 117, 111, 32827, 187, 16571, 114, 1408, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 4060, 12460, 12463, 12471, 12473, 12476, 12478, 12480, 12483, 12487, 12490, 112, 59, 26997, 256, 59, 102, 4064, 12468, 115, 59, 26912, 59, 26931, 115, 59, 26910, 235, 8797, 240, 10030, 108, 59, 26949, 105, 109, 59, 26996, 108, 59, 24995, 59, 24989, 256, 97, 105, 12497, 12501, 105, 108, 59, 26906, 111, 256, 59, 110, 12507, 12508, 25142, 97, 108, 243, 3870, 384, 97, 98, 114, 12519, 12522, 12526, 114, 242, 6117, 114, 107, 59, 26483, 256, 97, 107, 12531, 12541, 99, 256, 101, 107, 12537, 12539, 59, 16509, 59, 16477, 256, 101, 115, 12546, 12548, 59, 27020, 108, 256, 100, 117, 12554, 12556, 59, 27022, 59, 27024, 512, 97, 101, 117, 121, 12567, 12572, 12583, 12585, 114, 111, 110, 59, 16729, 256, 100, 105, 12577, 12581, 105, 108, 59, 16727, 236, 4082, 226, 12538, 59, 17472, 512, 99, 108, 113, 115, 12596, 12599, 12605, 12612, 97, 59, 26935, 100, 104, 97, 114, 59, 26985, 117, 111, 256, 59, 114, 526, 525, 104, 59, 25011, 384, 97, 99, 103, 12622, 12639, 3908, 108, 512, 59, 105, 112, 115, 3960, 12632, 12635, 4252, 110, 229, 4283, 97, 114, 244, 4009, 116, 59, 26029, 384, 105, 108, 114, 12649, 4131, 12654, 115, 104, 116, 59, 27005, 59, 49152, 55349, 56623, 256, 97, 111, 12663, 12678, 114, 256, 100, 117, 12669, 12671, 187, 1147, 256, 59, 108, 4241, 12676, 59, 26988, 256, 59, 118, 12683, 12684, 17345, 59, 17393, 384, 103, 110, 115, 12693, 12793, 12796, 104, 116, 768, 97, 104, 108, 114, 115, 116, 12708, 12720, 12738, 12760, 12772, 12782, 114, 114, 111, 119, 256, 59, 116, 4060, 12717, 97, 233, 12488, 97, 114, 112, 111, 111, 110, 256, 100, 117, 12731, 12735, 111, 119, 238, 12670, 112, 187, 4242, 101, 102, 116, 256, 97, 104, 12746, 12752, 114, 114, 111, 119, 243, 4074, 97, 114, 112, 111, 111, 110, 243, 1361, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 25033, 113, 117, 105, 103, 97, 114, 114, 111, 247, 12491, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 25292, 103, 59, 17114, 105, 110, 103, 100, 111, 116, 115, 101, 241, 7986, 384, 97, 104, 109, 12813, 12816, 12819, 114, 242, 4074, 97, 242, 1361, 59, 24591, 111, 117, 115, 116, 256, 59, 97, 12830, 12831, 25521, 99, 104, 101, 187, 12831, 109, 105, 100, 59, 27374, 512, 97, 98, 112, 116, 12850, 12861, 12864, 12882, 256, 110, 114, 12855, 12858, 103, 59, 26605, 114, 59, 25086, 114, 235, 4099, 384, 97, 102, 108, 12871, 12874, 12878, 114, 59, 27014, 59, 49152, 55349, 56675, 117, 115, 59, 27182, 105, 109, 101, 115, 59, 27189, 256, 97, 112, 12893, 12903, 114, 256, 59, 103, 12899, 12900, 16425, 116, 59, 27028, 111, 108, 105, 110, 116, 59, 27154, 97, 114, 242, 12771, 512, 97, 99, 104, 113, 12923, 12928, 4284, 12933, 113, 117, 111, 59, 24634, 114, 59, 49152, 55349, 56519, 256, 98, 117, 12539, 12938, 111, 256, 59, 114, 532, 531, 384, 104, 105, 114, 12951, 12955, 12960, 114, 101, 229, 12792, 109, 101, 115, 59, 25290, 105, 512, 59, 101, 102, 108, 12970, 4185, 6177, 12971, 26041, 116, 114, 105, 59, 27086, 108, 117, 104, 97, 114, 59, 26984, 59, 24862, 3425, 13013, 13019, 13023, 13100, 13112, 13169, 0, 13178, 13220, 0, 0, 13292, 13296, 0, 13352, 13384, 13402, 13485, 13489, 13514, 13553, 0, 13846, 0, 0, 13875, 99, 117, 116, 101, 59, 16731, 113, 117, 239, 10170, 1280, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 4589, 13043, 13045, 13055, 13058, 13067, 13071, 13087, 13094, 13097, 59, 27316, 496, 13050, 0, 13052, 59, 27320, 111, 110, 59, 16737, 117, 229, 4606, 256, 59, 100, 4595, 13063, 105, 108, 59, 16735, 114, 99, 59, 16733, 384, 69, 97, 115, 13078, 13080, 13083, 59, 27318, 112, 59, 27322, 105, 109, 59, 25321, 111, 108, 105, 110, 116, 59, 27155, 105, 237, 4612, 59, 17473, 111, 116, 384, 59, 98, 101, 13108, 7495, 13109, 25285, 59, 27238, 896, 65, 97, 99, 109, 115, 116, 120, 13126, 13130, 13143, 13147, 13150, 13155, 13165, 114, 114, 59, 25048, 114, 256, 104, 114, 13136, 13138, 235, 8744, 256, 59, 111, 2614, 2612, 116, 32827, 167, 16551, 105, 59, 16443, 119, 97, 114, 59, 26921, 109, 256, 105, 110, 13161, 240, 110, 117, 243, 241, 116, 59, 26422, 114, 256, 59, 111, 13174, 8277, 49152, 55349, 56624, 512, 97, 99, 111, 121, 13186, 13190, 13201, 13216, 114, 112, 59, 26223, 256, 104, 121, 13195, 13199, 99, 121, 59, 17481, 59, 17480, 114, 116, 621, 13209, 0, 0, 13212, 105, 228, 5220, 97, 114, 97, 236, 11887, 32827, 173, 16557, 256, 103, 109, 13224, 13236, 109, 97, 384, 59, 102, 118, 13233, 13234, 13234, 17347, 59, 17346, 1024, 59, 100, 101, 103, 108, 110, 112, 114, 4779, 13253, 13257, 13262, 13270, 13278, 13281, 13286, 111, 116, 59, 27242, 256, 59, 113, 4785, 4784, 256, 59, 69, 13267, 13268, 27294, 59, 27296, 256, 59, 69, 13275, 13276, 27293, 59, 27295, 101, 59, 25158, 108, 117, 115, 59, 27172, 97, 114, 114, 59, 26994, 97, 114, 242, 4413, 512, 97, 101, 105, 116, 13304, 13320, 13327, 13335, 256, 108, 115, 13309, 13316, 108, 115, 101, 116, 109, 233, 13162, 104, 112, 59, 27187, 112, 97, 114, 115, 108, 59, 27108, 256, 100, 108, 5219, 13332, 101, 59, 25379, 256, 59, 101, 13340, 13341, 27306, 256, 59, 115, 13346, 13347, 27308, 59, 49152, 10924, 65024, 384, 102, 108, 112, 13358, 13363, 13378, 116, 99, 121, 59, 17484, 256, 59, 98, 13368, 13369, 16431, 256, 59, 97, 13374, 13375, 27076, 114, 59, 25407, 102, 59, 49152, 55349, 56676, 97, 256, 100, 114, 13389, 1026, 101, 115, 256, 59, 117, 13396, 13397, 26208, 105, 116, 187, 13397, 384, 99, 115, 117, 13408, 13433, 13471, 256, 97, 117, 13413, 13423, 112, 256, 59, 115, 4488, 13419, 59, 49152, 8851, 65024, 112, 256, 59, 115, 4532, 13429, 59, 49152, 8852, 65024, 117, 256, 98, 112, 13439, 13455, 384, 59, 101, 115, 4503, 4508, 13446, 101, 116, 256, 59, 101, 4503, 13453, 241, 4509, 384, 59, 101, 115, 4520, 4525, 13462, 101, 116, 256, 59, 101, 4520, 13469, 241, 4526, 384, 59, 97, 102, 4475, 13478, 1456, 114, 357, 13483, 1457, 187, 4476, 97, 114, 242, 4424, 512, 99, 101, 109, 116, 13497, 13502, 13506, 13509, 114, 59, 49152, 55349, 56520, 116, 109, 238, 241, 105, 236, 13333, 97, 114, 230, 4542, 256, 97, 114, 13518, 13525, 114, 256, 59, 102, 13524, 6079, 26118, 256, 97, 110, 13530, 13549, 105, 103, 104, 116, 256, 101, 112, 13539, 13546, 112, 115, 105, 108, 111, 238, 7904, 104, 233, 11951, 115, 187, 10322, 640, 98, 99, 109, 110, 112, 13563, 13662, 4617, 13707, 13710, 1152, 59, 69, 100, 101, 109, 110, 112, 114, 115, 13582, 13583, 13585, 13589, 13598, 13603, 13612, 13617, 13622, 25218, 59, 27333, 111, 116, 59, 27325, 256, 59, 100, 4570, 13594, 111, 116, 59, 27331, 117, 108, 116, 59, 27329, 256, 69, 101, 13608, 13610, 59, 27339, 59, 25226, 108, 117, 115, 59, 27327, 97, 114, 114, 59, 27001, 384, 101, 105, 117, 13629, 13650, 13653, 116, 384, 59, 101, 110, 13582, 13637, 13643, 113, 256, 59, 113, 4570, 13583, 101, 113, 256, 59, 113, 13611, 13608, 109, 59, 27335, 256, 98, 112, 13658, 13660, 59, 27349, 59, 27347, 99, 768, 59, 97, 99, 101, 110, 115, 4589, 13676, 13682, 13689, 13691, 13094, 112, 112, 114, 111, 248, 13050, 117, 114, 108, 121, 101, 241, 4606, 241, 4595, 384, 97, 101, 115, 13698, 13704, 13083, 112, 112, 114, 111, 248, 13082, 113, 241, 13079, 103, 59, 26218, 1664, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 13737, 13740, 13743, 4636, 13746, 13748, 13760, 13769, 13781, 13786, 13791, 13800, 13805, 32827, 185, 16569, 32827, 178, 16562, 32827, 179, 16563, 59, 27334, 256, 111, 115, 13753, 13756, 116, 59, 27326, 117, 98, 59, 27352, 256, 59, 100, 4642, 13765, 111, 116, 59, 27332, 115, 256, 111, 117, 13775, 13778, 108, 59, 26569, 98, 59, 27351, 97, 114, 114, 59, 27003, 117, 108, 116, 59, 27330, 256, 69, 101, 13796, 13798, 59, 27340, 59, 25227, 108, 117, 115, 59, 27328, 384, 101, 105, 117, 13812, 13833, 13836, 116, 384, 59, 101, 110, 4636, 13820, 13826, 113, 256, 59, 113, 4642, 13746, 101, 113, 256, 59, 113, 13799, 13796, 109, 59, 27336, 256, 98, 112, 13841, 13843, 59, 27348, 59, 27350, 384, 65, 97, 110, 13852, 13856, 13869, 114, 114, 59, 25049, 114, 256, 104, 114, 13862, 13864, 235, 8750, 256, 59, 111, 2603, 2601, 119, 97, 114, 59, 26922, 108, 105, 103, 32827, 223, 16607, 3041, 13905, 13917, 13920, 4814, 13939, 13945, 0, 13950, 14018, 0, 0, 0, 0, 0, 14043, 14083, 0, 14089, 14188, 0, 0, 0, 14215, 626, 13910, 0, 0, 13915, 103, 101, 116, 59, 25366, 59, 17348, 114, 235, 3679, 384, 97, 101, 121, 13926, 13931, 13936, 114, 111, 110, 59, 16741, 100, 105, 108, 59, 16739, 59, 17474, 108, 114, 101, 99, 59, 25365, 114, 59, 49152, 55349, 56625, 512, 101, 105, 107, 111, 13958, 13981, 14005, 14012, 498, 13963, 0, 13969, 101, 256, 52, 102, 4740, 4737, 97, 384, 59, 115, 118, 13976, 13977, 13979, 17336, 121, 109, 59, 17361, 256, 99, 110, 13986, 14002, 107, 256, 97, 115, 13992, 13998, 112, 112, 114, 111, 248, 4801, 105, 109, 187, 4780, 115, 240, 4766, 256, 97, 115, 14010, 13998, 240, 4801, 114, 110, 32827, 254, 16638, 492, 799, 14022, 8935, 101, 115, 33152, 215, 59, 98, 100, 14031, 14032, 14040, 16599, 256, 59, 97, 6415, 14037, 114, 59, 27185, 59, 27184, 384, 101, 112, 115, 14049, 14051, 14080, 225, 10829, 512, 59, 98, 99, 102, 1158, 14060, 14064, 14068, 111, 116, 59, 25398, 105, 114, 59, 27377, 256, 59, 111, 14073, 14076, 49152, 55349, 56677, 114, 107, 59, 27354, 225, 13154, 114, 105, 109, 101, 59, 24628, 384, 97, 105, 112, 14095, 14098, 14180, 100, 229, 4680, 896, 97, 100, 101, 109, 112, 115, 116, 14113, 14157, 14144, 14161, 14167, 14172, 14175, 110, 103, 108, 101, 640, 59, 100, 108, 113, 114, 14128, 14129, 14134, 14144, 14146, 26037, 111, 119, 110, 187, 7611, 101, 102, 116, 256, 59, 101, 10240, 14142, 241, 2350, 59, 25180, 105, 103, 104, 116, 256, 59, 101, 12970, 14155, 241, 4186, 111, 116, 59, 26092, 105, 110, 117, 115, 59, 27194, 108, 117, 115, 59, 27193, 98, 59, 27085, 105, 109, 101, 59, 27195, 101, 122, 105, 117, 109, 59, 25570, 384, 99, 104, 116, 14194, 14205, 14209, 256, 114, 121, 14199, 14203, 59, 49152, 55349, 56521, 59, 17478, 99, 121, 59, 17499, 114, 111, 107, 59, 16743, 256, 105, 111, 14219, 14222, 120, 244, 6007, 104, 101, 97, 100, 256, 108, 114, 14231, 14240, 101, 102, 116, 97, 114, 114, 111, 247, 2127, 105, 103, 104, 116, 97, 114, 114, 111, 119, 187, 3933, 2304, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 14288, 14291, 14295, 14308, 14320, 14332, 14350, 14364, 14371, 14388, 14417, 14429, 14443, 14505, 14540, 14546, 14570, 14582, 114, 242, 1005, 97, 114, 59, 26979, 256, 99, 114, 14300, 14306, 117, 116, 101, 32827, 250, 16634, 242, 4432, 114, 483, 14314, 0, 14317, 121, 59, 17502, 118, 101, 59, 16749, 256, 105, 121, 14325, 14330, 114, 99, 32827, 251, 16635, 59, 17475, 384, 97, 98, 104, 14339, 14342, 14347, 114, 242, 5037, 108, 97, 99, 59, 16753, 97, 242, 5059, 256, 105, 114, 14355, 14360, 115, 104, 116, 59, 27006, 59, 49152, 55349, 56626, 114, 97, 118, 101, 32827, 249, 16633, 353, 14375, 14385, 114, 256, 108, 114, 14380, 14382, 187, 2391, 187, 4227, 108, 107, 59, 25984, 256, 99, 116, 14393, 14413, 623, 14399, 0, 0, 14410, 114, 110, 256, 59, 101, 14405, 14406, 25372, 114, 187, 14406, 111, 112, 59, 25359, 114, 105, 59, 26104, 256, 97, 108, 14422, 14426, 99, 114, 59, 16747, 32955, 168, 841, 256, 103, 112, 14434, 14438, 111, 110, 59, 16755, 102, 59, 49152, 55349, 56678, 768, 97, 100, 104, 108, 115, 117, 4427, 14456, 14461, 4978, 14481, 14496, 111, 119, 110, 225, 5043, 97, 114, 112, 111, 111, 110, 256, 108, 114, 14472, 14476, 101, 102, 244, 14381, 105, 103, 104, 244, 14383, 105, 384, 59, 104, 108, 14489, 14490, 14492, 17349, 187, 5114, 111, 110, 187, 14490, 112, 97, 114, 114, 111, 119, 115, 59, 25032, 384, 99, 105, 116, 14512, 14532, 14536, 623, 14518, 0, 0, 14529, 114, 110, 256, 59, 101, 14524, 14525, 25373, 114, 187, 14525, 111, 112, 59, 25358, 110, 103, 59, 16751, 114, 105, 59, 26105, 99, 114, 59, 49152, 55349, 56522, 384, 100, 105, 114, 14553, 14557, 14562, 111, 116, 59, 25328, 108, 100, 101, 59, 16745, 105, 256, 59, 102, 14128, 14568, 187, 6163, 256, 97, 109, 14575, 14578, 114, 242, 14504, 108, 32827, 252, 16636, 97, 110, 103, 108, 101, 59, 27047, 1920, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 14620, 14623, 14633, 14637, 14773, 14776, 14781, 14815, 14820, 14824, 14835, 14841, 14845, 14849, 14880, 114, 242, 1015, 97, 114, 256, 59, 118, 14630, 14631, 27368, 59, 27369, 97, 115, 232, 993, 256, 110, 114, 14642, 14647, 103, 114, 116, 59, 27036, 896, 101, 107, 110, 112, 114, 115, 116, 13539, 14662, 14667, 14674, 14685, 14692, 14742, 97, 112, 112, 225, 9237, 111, 116, 104, 105, 110, 231, 7830, 384, 104, 105, 114, 13547, 11976, 14681, 111, 112, 244, 12213, 256, 59, 104, 5047, 14690, 239, 12685, 256, 105, 117, 14697, 14701, 103, 109, 225, 13235, 256, 98, 112, 14706, 14724, 115, 101, 116, 110, 101, 113, 256, 59, 113, 14717, 14720, 49152, 8842, 65024, 59, 49152, 10955, 65024, 115, 101, 116, 110, 101, 113, 256, 59, 113, 14735, 14738, 49152, 8843, 65024, 59, 49152, 10956, 65024, 256, 104, 114, 14747, 14751, 101, 116, 225, 13980, 105, 97, 110, 103, 108, 101, 256, 108, 114, 14762, 14767, 101, 102, 116, 187, 2341, 105, 103, 104, 116, 187, 4177, 121, 59, 17458, 97, 115, 104, 187, 4150, 384, 101, 108, 114, 14788, 14802, 14807, 384, 59, 98, 101, 11754, 14795, 14799, 97, 114, 59, 25275, 113, 59, 25178, 108, 105, 112, 59, 25326, 256, 98, 116, 14812, 5224, 97, 242, 5225, 114, 59, 49152, 55349, 56627, 116, 114, 233, 14766, 115, 117, 256, 98, 112, 14831, 14833, 187, 3356, 187, 3417, 112, 102, 59, 49152, 55349, 56679, 114, 111, 240, 3835, 116, 114, 233, 14772, 256, 99, 117, 14854, 14859, 114, 59, 49152, 55349, 56523, 256, 98, 112, 14864, 14872, 110, 256, 69, 101, 14720, 14870, 187, 14718, 110, 256, 69, 101, 14738, 14878, 187, 14736, 105, 103, 122, 97, 103, 59, 27034, 896, 99, 101, 102, 111, 112, 114, 115, 14902, 14907, 14934, 14939, 14932, 14945, 14954, 105, 114, 99, 59, 16757, 256, 100, 105, 14912, 14929, 256, 98, 103, 14917, 14921, 97, 114, 59, 27231, 101, 256, 59, 113, 5626, 14927, 59, 25177, 101, 114, 112, 59, 24856, 114, 59, 49152, 55349, 56628, 112, 102, 59, 49152, 55349, 56680, 256, 59, 101, 5241, 14950, 97, 116, 232, 5241, 99, 114, 59, 49152, 55349, 56524, 2787, 6030, 14983, 0, 14987, 0, 14992, 15003, 0, 0, 15005, 15016, 15019, 15023, 0, 0, 15043, 15054, 0, 15064, 6108, 6111, 116, 114, 233, 6097, 114, 59, 49152, 55349, 56629, 256, 65, 97, 14996, 14999, 114, 242, 963, 114, 242, 2550, 59, 17342, 256, 65, 97, 15009, 15012, 114, 242, 952, 114, 242, 2539, 97, 240, 10003, 105, 115, 59, 25339, 384, 100, 112, 116, 6052, 15029, 15038, 256, 102, 108, 15034, 6057, 59, 49152, 55349, 56681, 105, 109, 229, 6066, 256, 65, 97, 15047, 15050, 114, 242, 974, 114, 242, 2561, 256, 99, 113, 15058, 6072, 114, 59, 49152, 55349, 56525, 256, 112, 116, 6102, 15068, 114, 233, 6100, 1024, 97, 99, 101, 102, 105, 111, 115, 117, 15088, 15101, 15112, 15116, 15121, 15125, 15131, 15137, 99, 256, 117, 121, 15094, 15099, 116, 101, 32827, 253, 16637, 59, 17487, 256, 105, 121, 15106, 15110, 114, 99, 59, 16759, 59, 17483, 110, 32827, 165, 16549, 114, 59, 49152, 55349, 56630, 99, 121, 59, 17495, 112, 102, 59, 49152, 55349, 56682, 99, 114, 59, 49152, 55349, 56526, 256, 99, 109, 15142, 15145, 121, 59, 17486, 108, 32827, 255, 16639, 1280, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 15170, 15176, 15188, 15192, 15204, 15209, 15213, 15220, 15226, 15232, 99, 117, 116, 101, 59, 16762, 256, 97, 121, 15181, 15186, 114, 111, 110, 59, 16766, 59, 17463, 111, 116, 59, 16764, 256, 101, 116, 15197, 15201, 116, 114, 230, 5471, 97, 59, 17334, 114, 59, 49152, 55349, 56631, 99, 121, 59, 17462, 103, 114, 97, 114, 114, 59, 25053, 112, 102, 59, 49152, 55349, 56683, 99, 114, 59, 49152, 55349, 56527, 256, 106, 110, 15237, 15239, 59, 24589, 106, 59, 24588]);

  // node_modules/.pnpm/entities@4.3.1/node_modules/entities/lib/esm/generated/decode-data-xml.js
  var decode_data_xml_default = new Uint16Array([512, 97, 103, 108, 113, 9, 21, 24, 27, 621, 15, 0, 0, 18, 112, 59, 16422, 111, 115, 59, 16423, 116, 59, 16446, 116, 59, 16444, 117, 111, 116, 59, 16418]);

  // node_modules/.pnpm/entities@4.3.1/node_modules/entities/lib/esm/decode_codepoint.js
  var _a;
  var decodeMap = /* @__PURE__ */ new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  var fromCodePoint = (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  };
  function replaceCodePoint(codePoint) {
    var _a2;
    if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
      return 65533;
    }
    return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
  }
  function decodeCodePoint(codePoint) {
    return fromCodePoint(replaceCodePoint(codePoint));
  }

  // node_modules/.pnpm/entities@4.3.1/node_modules/entities/lib/esm/decode.js
  var CharCodes;
  (function(CharCodes3) {
    CharCodes3[CharCodes3["NUM"] = 35] = "NUM";
    CharCodes3[CharCodes3["SEMI"] = 59] = "SEMI";
    CharCodes3[CharCodes3["ZERO"] = 48] = "ZERO";
    CharCodes3[CharCodes3["NINE"] = 57] = "NINE";
    CharCodes3[CharCodes3["LOWER_A"] = 97] = "LOWER_A";
    CharCodes3[CharCodes3["LOWER_F"] = 102] = "LOWER_F";
    CharCodes3[CharCodes3["LOWER_X"] = 120] = "LOWER_X";
    CharCodes3[CharCodes3["To_LOWER_BIT"] = 32] = "To_LOWER_BIT";
  })(CharCodes || (CharCodes = {}));
  var BinTrieFlags;
  (function(BinTrieFlags2) {
    BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
  })(BinTrieFlags || (BinTrieFlags = {}));
  function getDecoder(decodeTree) {
    return function decodeHTMLBinary(str, strict) {
      let ret = "";
      let lastIdx = 0;
      let strIdx = 0;
      while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
        ret += str.slice(lastIdx, strIdx);
        lastIdx = strIdx;
        strIdx += 1;
        if (str.charCodeAt(strIdx) === CharCodes.NUM) {
          let start = strIdx + 1;
          let base = 10;
          let cp = str.charCodeAt(start);
          if ((cp | CharCodes.To_LOWER_BIT) === CharCodes.LOWER_X) {
            base = 16;
            strIdx += 1;
            start += 1;
          }
          do
            cp = str.charCodeAt(++strIdx);
          while (cp >= CharCodes.ZERO && cp <= CharCodes.NINE || base === 16 && (cp | CharCodes.To_LOWER_BIT) >= CharCodes.LOWER_A && (cp | CharCodes.To_LOWER_BIT) <= CharCodes.LOWER_F);
          if (start !== strIdx) {
            const entity = str.substring(start, strIdx);
            const parsed = parseInt(entity, base);
            if (str.charCodeAt(strIdx) === CharCodes.SEMI) {
              strIdx += 1;
            } else if (strict) {
              continue;
            }
            ret += decodeCodePoint(parsed);
            lastIdx = strIdx;
          }
          continue;
        }
        let resultIdx = 0;
        let excess = 1;
        let treeIdx = 0;
        let current = decodeTree[treeIdx];
        for (; strIdx < str.length; strIdx++, excess++) {
          treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
          if (treeIdx < 0)
            break;
          current = decodeTree[treeIdx];
          const masked = current & BinTrieFlags.VALUE_LENGTH;
          if (masked) {
            if (!strict || str.charCodeAt(strIdx) === CharCodes.SEMI) {
              resultIdx = treeIdx;
              excess = 0;
            }
            const valueLength = (masked >> 14) - 1;
            if (valueLength === 0)
              break;
            treeIdx += valueLength;
          }
        }
        if (resultIdx !== 0) {
          const valueLength = (decodeTree[resultIdx] & BinTrieFlags.VALUE_LENGTH) >> 14;
          ret += valueLength === 1 ? String.fromCharCode(decodeTree[resultIdx] & ~BinTrieFlags.VALUE_LENGTH) : valueLength === 2 ? String.fromCharCode(decodeTree[resultIdx + 1]) : String.fromCharCode(decodeTree[resultIdx + 1], decodeTree[resultIdx + 2]);
          lastIdx = strIdx - excess + 1;
        }
      }
      return ret + str.slice(lastIdx);
    };
  }
  function determineBranch(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    if (branchCount === 0) {
      return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    }
    if (jumpOffset) {
      const value = char - jumpOffset;
      return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
    }
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while (lo <= hi) {
      const mid = lo + hi >>> 1;
      const midVal = decodeTree[mid];
      if (midVal < char) {
        lo = mid + 1;
      } else if (midVal > char) {
        hi = mid - 1;
      } else {
        return decodeTree[mid + branchCount];
      }
    }
    return -1;
  }
  var htmlDecoder = getDecoder(decode_data_html_default);
  var xmlDecoder = getDecoder(decode_data_xml_default);

  // node_modules/.pnpm/htmlparser2@8.0.1/node_modules/htmlparser2/lib/esm/Tokenizer.js
  var CharCodes2;
  (function(CharCodes3) {
    CharCodes3[CharCodes3["Tab"] = 9] = "Tab";
    CharCodes3[CharCodes3["NewLine"] = 10] = "NewLine";
    CharCodes3[CharCodes3["FormFeed"] = 12] = "FormFeed";
    CharCodes3[CharCodes3["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes3[CharCodes3["Space"] = 32] = "Space";
    CharCodes3[CharCodes3["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes3[CharCodes3["Num"] = 35] = "Num";
    CharCodes3[CharCodes3["Amp"] = 38] = "Amp";
    CharCodes3[CharCodes3["SingleQuote"] = 39] = "SingleQuote";
    CharCodes3[CharCodes3["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes3[CharCodes3["Dash"] = 45] = "Dash";
    CharCodes3[CharCodes3["Slash"] = 47] = "Slash";
    CharCodes3[CharCodes3["Zero"] = 48] = "Zero";
    CharCodes3[CharCodes3["Nine"] = 57] = "Nine";
    CharCodes3[CharCodes3["Semi"] = 59] = "Semi";
    CharCodes3[CharCodes3["Lt"] = 60] = "Lt";
    CharCodes3[CharCodes3["Eq"] = 61] = "Eq";
    CharCodes3[CharCodes3["Gt"] = 62] = "Gt";
    CharCodes3[CharCodes3["Questionmark"] = 63] = "Questionmark";
    CharCodes3[CharCodes3["UpperA"] = 65] = "UpperA";
    CharCodes3[CharCodes3["LowerA"] = 97] = "LowerA";
    CharCodes3[CharCodes3["UpperF"] = 70] = "UpperF";
    CharCodes3[CharCodes3["LowerF"] = 102] = "LowerF";
    CharCodes3[CharCodes3["UpperZ"] = 90] = "UpperZ";
    CharCodes3[CharCodes3["LowerZ"] = 122] = "LowerZ";
    CharCodes3[CharCodes3["LowerX"] = 120] = "LowerX";
    CharCodes3[CharCodes3["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
  })(CharCodes2 || (CharCodes2 = {}));
  var State;
  (function(State2) {
    State2[State2["Text"] = 1] = "Text";
    State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
    State2[State2["InTagName"] = 3] = "InTagName";
    State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
    State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State2[State2["InAttributeName"] = 9] = "InAttributeName";
    State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
    State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State2[State2["InDeclaration"] = 16] = "InDeclaration";
    State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    State2[State2["BeforeComment"] = 18] = "BeforeComment";
    State2[State2["CDATASequence"] = 19] = "CDATASequence";
    State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
    State2[State2["InCommentLike"] = 21] = "InCommentLike";
    State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State2[State2["SpecialStartSequence"] = 23] = "SpecialStartSequence";
    State2[State2["InSpecialTag"] = 24] = "InSpecialTag";
    State2[State2["BeforeEntity"] = 25] = "BeforeEntity";
    State2[State2["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
    State2[State2["InNamedEntity"] = 27] = "InNamedEntity";
    State2[State2["InNumericEntity"] = 28] = "InNumericEntity";
    State2[State2["InHexEntity"] = 29] = "InHexEntity";
  })(State || (State = {}));
  function isWhitespace(c) {
    return c === CharCodes2.Space || c === CharCodes2.NewLine || c === CharCodes2.Tab || c === CharCodes2.FormFeed || c === CharCodes2.CarriageReturn;
  }
  function isEndOfTagSection(c) {
    return c === CharCodes2.Slash || c === CharCodes2.Gt || isWhitespace(c);
  }
  function isNumber(c) {
    return c >= CharCodes2.Zero && c <= CharCodes2.Nine;
  }
  function isASCIIAlpha(c) {
    return c >= CharCodes2.LowerA && c <= CharCodes2.LowerZ || c >= CharCodes2.UpperA && c <= CharCodes2.UpperZ;
  }
  function isHexDigit(c) {
    return c >= CharCodes2.UpperA && c <= CharCodes2.UpperF || c >= CharCodes2.LowerA && c <= CharCodes2.LowerF;
  }
  var QuoteType;
  (function(QuoteType2) {
    QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
    QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
    QuoteType2[QuoteType2["Single"] = 2] = "Single";
    QuoteType2[QuoteType2["Double"] = 3] = "Double";
  })(QuoteType || (QuoteType = {}));
  var Sequences = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
  };
  var Tokenizer = class {
    constructor({ xmlMode = false, decodeEntities = true }, cbs) {
      this.cbs = cbs;
      this.state = State.Text;
      this.buffer = "";
      this.sectionStart = 0;
      this.index = 0;
      this.baseState = State.Text;
      this.isSpecial = false;
      this.running = true;
      this.offset = 0;
      this.sequenceIndex = 0;
      this.trieIndex = 0;
      this.trieCurrent = 0;
      this.entityResult = 0;
      this.entityExcess = 0;
      this.xmlMode = xmlMode;
      this.decodeEntities = decodeEntities;
      this.entityTrie = xmlMode ? decode_data_xml_default : decode_data_html_default;
    }
    reset() {
      this.state = State.Text;
      this.buffer = "";
      this.sectionStart = 0;
      this.index = 0;
      this.baseState = State.Text;
      this.currentSequence = void 0;
      this.running = true;
      this.offset = 0;
    }
    write(chunk) {
      this.offset += this.buffer.length;
      this.buffer = chunk;
      this.parse();
    }
    end() {
      if (this.running)
        this.finish();
    }
    pause() {
      this.running = false;
    }
    resume() {
      this.running = true;
      if (this.index < this.buffer.length + this.offset) {
        this.parse();
      }
    }
    getIndex() {
      return this.index;
    }
    getSectionStart() {
      return this.sectionStart;
    }
    stateText(c) {
      if (c === CharCodes2.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes2.Lt)) {
        if (this.index > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, this.index);
        }
        this.state = State.BeforeTagName;
        this.sectionStart = this.index;
      } else if (this.decodeEntities && c === CharCodes2.Amp) {
        this.state = State.BeforeEntity;
      }
    }
    stateSpecialStartSequence(c) {
      const isEnd = this.sequenceIndex === this.currentSequence.length;
      const isMatch = isEnd ? isEndOfTagSection(c) : (c | 32) === this.currentSequence[this.sequenceIndex];
      if (!isMatch) {
        this.isSpecial = false;
      } else if (!isEnd) {
        this.sequenceIndex++;
        return;
      }
      this.sequenceIndex = 0;
      this.state = State.InTagName;
      this.stateInTagName(c);
    }
    stateInSpecialTag(c) {
      if (this.sequenceIndex === this.currentSequence.length) {
        if (c === CharCodes2.Gt || isWhitespace(c)) {
          const endOfText = this.index - this.currentSequence.length;
          if (this.sectionStart < endOfText) {
            const actualIndex = this.index;
            this.index = endOfText;
            this.cbs.ontext(this.sectionStart, endOfText);
            this.index = actualIndex;
          }
          this.isSpecial = false;
          this.sectionStart = endOfText + 2;
          this.stateInClosingTagName(c);
          return;
        }
        this.sequenceIndex = 0;
      }
      if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
        this.sequenceIndex += 1;
      } else if (this.sequenceIndex === 0) {
        if (this.currentSequence === Sequences.TitleEnd) {
          if (this.decodeEntities && c === CharCodes2.Amp) {
            this.state = State.BeforeEntity;
          }
        } else if (this.fastForwardTo(CharCodes2.Lt)) {
          this.sequenceIndex = 1;
        }
      } else {
        this.sequenceIndex = Number(c === CharCodes2.Lt);
      }
    }
    stateCDATASequence(c) {
      if (c === Sequences.Cdata[this.sequenceIndex]) {
        if (++this.sequenceIndex === Sequences.Cdata.length) {
          this.state = State.InCommentLike;
          this.currentSequence = Sequences.CdataEnd;
          this.sequenceIndex = 0;
          this.sectionStart = this.index + 1;
        }
      } else {
        this.sequenceIndex = 0;
        this.state = State.InDeclaration;
        this.stateInDeclaration(c);
      }
    }
    fastForwardTo(c) {
      while (++this.index < this.buffer.length + this.offset) {
        if (this.buffer.charCodeAt(this.index - this.offset) === c) {
          return true;
        }
      }
      this.index = this.buffer.length + this.offset - 1;
      return false;
    }
    stateInCommentLike(c) {
      if (c === this.currentSequence[this.sequenceIndex]) {
        if (++this.sequenceIndex === this.currentSequence.length) {
          if (this.currentSequence === Sequences.CdataEnd) {
            this.cbs.oncdata(this.sectionStart, this.index, 2);
          } else {
            this.cbs.oncomment(this.sectionStart, this.index, 2);
          }
          this.sequenceIndex = 0;
          this.sectionStart = this.index + 1;
          this.state = State.Text;
        }
      } else if (this.sequenceIndex === 0) {
        if (this.fastForwardTo(this.currentSequence[0])) {
          this.sequenceIndex = 1;
        }
      } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
        this.sequenceIndex = 0;
      }
    }
    isTagStartChar(c) {
      return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
      this.isSpecial = true;
      this.currentSequence = sequence;
      this.sequenceIndex = offset;
      this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
      if (c === CharCodes2.ExclamationMark) {
        this.state = State.BeforeDeclaration;
        this.sectionStart = this.index + 1;
      } else if (c === CharCodes2.Questionmark) {
        this.state = State.InProcessingInstruction;
        this.sectionStart = this.index + 1;
      } else if (this.isTagStartChar(c)) {
        const lower = c | 32;
        this.sectionStart = this.index;
        if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
          this.startSpecial(Sequences.TitleEnd, 3);
        } else {
          this.state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
        }
      } else if (c === CharCodes2.Slash) {
        this.state = State.BeforeClosingTagName;
      } else {
        this.state = State.Text;
        this.stateText(c);
      }
    }
    stateInTagName(c) {
      if (isEndOfTagSection(c)) {
        this.cbs.onopentagname(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = State.BeforeAttributeName;
        this.stateBeforeAttributeName(c);
      }
    }
    stateBeforeClosingTagName(c) {
      if (isWhitespace(c)) {
      } else if (c === CharCodes2.Gt) {
        this.state = State.Text;
      } else {
        this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
        this.sectionStart = this.index;
      }
    }
    stateInClosingTagName(c) {
      if (c === CharCodes2.Gt || isWhitespace(c)) {
        this.cbs.onclosetag(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = State.AfterClosingTagName;
        this.stateAfterClosingTagName(c);
      }
    }
    stateAfterClosingTagName(c) {
      if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
        this.state = State.Text;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeAttributeName(c) {
      if (c === CharCodes2.Gt) {
        this.cbs.onopentagend(this.index);
        if (this.isSpecial) {
          this.state = State.InSpecialTag;
          this.sequenceIndex = 0;
        } else {
          this.state = State.Text;
        }
        this.baseState = this.state;
        this.sectionStart = this.index + 1;
      } else if (c === CharCodes2.Slash) {
        this.state = State.InSelfClosingTag;
      } else if (!isWhitespace(c)) {
        this.state = State.InAttributeName;
        this.sectionStart = this.index;
      }
    }
    stateInSelfClosingTag(c) {
      if (c === CharCodes2.Gt) {
        this.cbs.onselfclosingtag(this.index);
        this.state = State.Text;
        this.baseState = State.Text;
        this.sectionStart = this.index + 1;
        this.isSpecial = false;
      } else if (!isWhitespace(c)) {
        this.state = State.BeforeAttributeName;
        this.stateBeforeAttributeName(c);
      }
    }
    stateInAttributeName(c) {
      if (c === CharCodes2.Eq || isEndOfTagSection(c)) {
        this.cbs.onattribname(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = State.AfterAttributeName;
        this.stateAfterAttributeName(c);
      }
    }
    stateAfterAttributeName(c) {
      if (c === CharCodes2.Eq) {
        this.state = State.BeforeAttributeValue;
      } else if (c === CharCodes2.Slash || c === CharCodes2.Gt) {
        this.cbs.onattribend(QuoteType.NoValue, this.index);
        this.state = State.BeforeAttributeName;
        this.stateBeforeAttributeName(c);
      } else if (!isWhitespace(c)) {
        this.cbs.onattribend(QuoteType.NoValue, this.index);
        this.state = State.InAttributeName;
        this.sectionStart = this.index;
      }
    }
    stateBeforeAttributeValue(c) {
      if (c === CharCodes2.DoubleQuote) {
        this.state = State.InAttributeValueDq;
        this.sectionStart = this.index + 1;
      } else if (c === CharCodes2.SingleQuote) {
        this.state = State.InAttributeValueSq;
        this.sectionStart = this.index + 1;
      } else if (!isWhitespace(c)) {
        this.sectionStart = this.index;
        this.state = State.InAttributeValueNq;
        this.stateInAttributeValueNoQuotes(c);
      }
    }
    handleInAttributeValue(c, quote) {
      if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.cbs.onattribend(quote === CharCodes2.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index);
        this.state = State.BeforeAttributeName;
      } else if (this.decodeEntities && c === CharCodes2.Amp) {
        this.baseState = this.state;
        this.state = State.BeforeEntity;
      }
    }
    stateInAttributeValueDoubleQuotes(c) {
      this.handleInAttributeValue(c, CharCodes2.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
      this.handleInAttributeValue(c, CharCodes2.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
      if (isWhitespace(c) || c === CharCodes2.Gt) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.cbs.onattribend(QuoteType.Unquoted, this.index);
        this.state = State.BeforeAttributeName;
        this.stateBeforeAttributeName(c);
      } else if (this.decodeEntities && c === CharCodes2.Amp) {
        this.baseState = this.state;
        this.state = State.BeforeEntity;
      }
    }
    stateBeforeDeclaration(c) {
      if (c === CharCodes2.OpeningSquareBracket) {
        this.state = State.CDATASequence;
        this.sequenceIndex = 0;
      } else {
        this.state = c === CharCodes2.Dash ? State.BeforeComment : State.InDeclaration;
      }
    }
    stateInDeclaration(c) {
      if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
        this.cbs.ondeclaration(this.sectionStart, this.index);
        this.state = State.Text;
        this.sectionStart = this.index + 1;
      }
    }
    stateInProcessingInstruction(c) {
      if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
        this.cbs.onprocessinginstruction(this.sectionStart, this.index);
        this.state = State.Text;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeComment(c) {
      if (c === CharCodes2.Dash) {
        this.state = State.InCommentLike;
        this.currentSequence = Sequences.CommentEnd;
        this.sequenceIndex = 2;
        this.sectionStart = this.index + 1;
      } else {
        this.state = State.InDeclaration;
      }
    }
    stateInSpecialComment(c) {
      if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
        this.cbs.oncomment(this.sectionStart, this.index, 0);
        this.state = State.Text;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeSpecialS(c) {
      const lower = c | 32;
      if (lower === Sequences.ScriptEnd[3]) {
        this.startSpecial(Sequences.ScriptEnd, 4);
      } else if (lower === Sequences.StyleEnd[3]) {
        this.startSpecial(Sequences.StyleEnd, 4);
      } else {
        this.state = State.InTagName;
        this.stateInTagName(c);
      }
    }
    stateBeforeEntity(c) {
      this.entityExcess = 1;
      this.entityResult = 0;
      if (c === CharCodes2.Num) {
        this.state = State.BeforeNumericEntity;
      } else if (c === CharCodes2.Amp) {
      } else {
        this.trieIndex = 0;
        this.trieCurrent = this.entityTrie[0];
        this.state = State.InNamedEntity;
        this.stateInNamedEntity(c);
      }
    }
    stateInNamedEntity(c) {
      this.entityExcess += 1;
      this.trieIndex = determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
      if (this.trieIndex < 0) {
        this.emitNamedEntity();
        this.index--;
        return;
      }
      this.trieCurrent = this.entityTrie[this.trieIndex];
      const masked = this.trieCurrent & BinTrieFlags.VALUE_LENGTH;
      if (masked) {
        const valueLength = (masked >> 14) - 1;
        if (!this.allowLegacyEntity() && c !== CharCodes2.Semi) {
          this.trieIndex += valueLength;
        } else {
          const entityStart = this.index - this.entityExcess + 1;
          if (entityStart > this.sectionStart) {
            this.emitPartial(this.sectionStart, entityStart);
          }
          this.entityResult = this.trieIndex;
          this.trieIndex += valueLength;
          this.entityExcess = 0;
          this.sectionStart = this.index + 1;
          if (valueLength === 0) {
            this.emitNamedEntity();
          }
        }
      }
    }
    emitNamedEntity() {
      this.state = this.baseState;
      if (this.entityResult === 0) {
        return;
      }
      const valueLength = (this.entityTrie[this.entityResult] & BinTrieFlags.VALUE_LENGTH) >> 14;
      switch (valueLength) {
        case 1:
          this.emitCodePoint(this.entityTrie[this.entityResult] & ~BinTrieFlags.VALUE_LENGTH);
          break;
        case 2:
          this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
          break;
        case 3: {
          this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
          this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
        }
      }
    }
    stateBeforeNumericEntity(c) {
      if ((c | 32) === CharCodes2.LowerX) {
        this.entityExcess++;
        this.state = State.InHexEntity;
      } else {
        this.state = State.InNumericEntity;
        this.stateInNumericEntity(c);
      }
    }
    emitNumericEntity(strict) {
      const entityStart = this.index - this.entityExcess - 1;
      const numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
      if (numberStart !== this.index) {
        if (entityStart > this.sectionStart) {
          this.emitPartial(this.sectionStart, entityStart);
        }
        this.sectionStart = this.index + Number(strict);
        this.emitCodePoint(replaceCodePoint(this.entityResult));
      }
      this.state = this.baseState;
    }
    stateInNumericEntity(c) {
      if (c === CharCodes2.Semi) {
        this.emitNumericEntity(true);
      } else if (isNumber(c)) {
        this.entityResult = this.entityResult * 10 + (c - CharCodes2.Zero);
        this.entityExcess++;
      } else {
        if (this.allowLegacyEntity()) {
          this.emitNumericEntity(false);
        } else {
          this.state = this.baseState;
        }
        this.index--;
      }
    }
    stateInHexEntity(c) {
      if (c === CharCodes2.Semi) {
        this.emitNumericEntity(true);
      } else if (isNumber(c)) {
        this.entityResult = this.entityResult * 16 + (c - CharCodes2.Zero);
        this.entityExcess++;
      } else if (isHexDigit(c)) {
        this.entityResult = this.entityResult * 16 + ((c | 32) - CharCodes2.LowerA + 10);
        this.entityExcess++;
      } else {
        if (this.allowLegacyEntity()) {
          this.emitNumericEntity(false);
        } else {
          this.state = this.baseState;
        }
        this.index--;
      }
    }
    allowLegacyEntity() {
      return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
    }
    cleanup() {
      if (this.running && this.sectionStart !== this.index) {
        if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
          this.cbs.ontext(this.sectionStart, this.index);
          this.sectionStart = this.index;
        } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart = this.index;
        }
      }
    }
    shouldContinue() {
      return this.index < this.buffer.length + this.offset && this.running;
    }
    parse() {
      while (this.shouldContinue()) {
        const c = this.buffer.charCodeAt(this.index - this.offset);
        if (this.state === State.Text) {
          this.stateText(c);
        } else if (this.state === State.SpecialStartSequence) {
          this.stateSpecialStartSequence(c);
        } else if (this.state === State.InSpecialTag) {
          this.stateInSpecialTag(c);
        } else if (this.state === State.CDATASequence) {
          this.stateCDATASequence(c);
        } else if (this.state === State.InAttributeValueDq) {
          this.stateInAttributeValueDoubleQuotes(c);
        } else if (this.state === State.InAttributeName) {
          this.stateInAttributeName(c);
        } else if (this.state === State.InCommentLike) {
          this.stateInCommentLike(c);
        } else if (this.state === State.InSpecialComment) {
          this.stateInSpecialComment(c);
        } else if (this.state === State.BeforeAttributeName) {
          this.stateBeforeAttributeName(c);
        } else if (this.state === State.InTagName) {
          this.stateInTagName(c);
        } else if (this.state === State.InClosingTagName) {
          this.stateInClosingTagName(c);
        } else if (this.state === State.BeforeTagName) {
          this.stateBeforeTagName(c);
        } else if (this.state === State.AfterAttributeName) {
          this.stateAfterAttributeName(c);
        } else if (this.state === State.InAttributeValueSq) {
          this.stateInAttributeValueSingleQuotes(c);
        } else if (this.state === State.BeforeAttributeValue) {
          this.stateBeforeAttributeValue(c);
        } else if (this.state === State.BeforeClosingTagName) {
          this.stateBeforeClosingTagName(c);
        } else if (this.state === State.AfterClosingTagName) {
          this.stateAfterClosingTagName(c);
        } else if (this.state === State.BeforeSpecialS) {
          this.stateBeforeSpecialS(c);
        } else if (this.state === State.InAttributeValueNq) {
          this.stateInAttributeValueNoQuotes(c);
        } else if (this.state === State.InSelfClosingTag) {
          this.stateInSelfClosingTag(c);
        } else if (this.state === State.InDeclaration) {
          this.stateInDeclaration(c);
        } else if (this.state === State.BeforeDeclaration) {
          this.stateBeforeDeclaration(c);
        } else if (this.state === State.BeforeComment) {
          this.stateBeforeComment(c);
        } else if (this.state === State.InProcessingInstruction) {
          this.stateInProcessingInstruction(c);
        } else if (this.state === State.InNamedEntity) {
          this.stateInNamedEntity(c);
        } else if (this.state === State.BeforeEntity) {
          this.stateBeforeEntity(c);
        } else if (this.state === State.InHexEntity) {
          this.stateInHexEntity(c);
        } else if (this.state === State.InNumericEntity) {
          this.stateInNumericEntity(c);
        } else {
          this.stateBeforeNumericEntity(c);
        }
        this.index++;
      }
      this.cleanup();
    }
    finish() {
      if (this.state === State.InNamedEntity) {
        this.emitNamedEntity();
      }
      if (this.sectionStart < this.index) {
        this.handleTrailingData();
      }
      this.cbs.onend();
    }
    handleTrailingData() {
      const endIndex = this.buffer.length + this.offset;
      if (this.state === State.InCommentLike) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, endIndex, 0);
        } else {
          this.cbs.oncomment(this.sectionStart, endIndex, 0);
        }
      } else if (this.state === State.InNumericEntity && this.allowLegacyEntity()) {
        this.emitNumericEntity(false);
      } else if (this.state === State.InHexEntity && this.allowLegacyEntity()) {
        this.emitNumericEntity(false);
      } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
      } else {
        this.cbs.ontext(this.sectionStart, endIndex);
      }
    }
    emitPartial(start, endIndex) {
      if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
        this.cbs.onattribdata(start, endIndex);
      } else {
        this.cbs.ontext(start, endIndex);
      }
    }
    emitCodePoint(cp) {
      if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
        this.cbs.onattribentity(cp);
      } else {
        this.cbs.ontextentity(cp);
      }
    }
  };

  // node_modules/.pnpm/htmlparser2@8.0.1/node_modules/htmlparser2/lib/esm/Parser.js
  var formTags = /* @__PURE__ */ new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
  ]);
  var pTag = /* @__PURE__ */ new Set(["p"]);
  var tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
  var ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
  var rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
  var openImpliesClose = /* @__PURE__ */ new Map([
    ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
    ["th", /* @__PURE__ */ new Set(["th"])],
    ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
    ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
    ["li", /* @__PURE__ */ new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", /* @__PURE__ */ new Set(["option"])],
    ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags]
  ]);
  var voidElements = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]);
  var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
  var htmlIntegrationElements = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title"
  ]);
  var reNameEnd = /\s|\//;
  var Parser = class {
    constructor(cbs, options = {}) {
      var _a2, _b, _c, _d, _e;
      this.options = options;
      this.startIndex = 0;
      this.endIndex = 0;
      this.openTagStart = 0;
      this.tagname = "";
      this.attribname = "";
      this.attribvalue = "";
      this.attribs = null;
      this.stack = [];
      this.foreignContext = [];
      this.buffers = [];
      this.bufferOffset = 0;
      this.writeIndex = 0;
      this.ended = false;
      this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
      this.lowerCaseTagNames = (_a2 = options.lowerCaseTags) !== null && _a2 !== void 0 ? _a2 : !options.xmlMode;
      this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
      this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer)(this.options, this);
      (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    ontext(start, endIndex) {
      var _a2, _b;
      const data = this.getSlice(start, endIndex);
      this.endIndex = endIndex - 1;
      (_b = (_a2 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a2, data);
      this.startIndex = endIndex;
    }
    ontextentity(cp) {
      var _a2, _b;
      const idx = this.tokenizer.getSectionStart();
      this.endIndex = idx - 1;
      (_b = (_a2 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a2, fromCodePoint(cp));
      this.startIndex = idx;
    }
    isVoidElement(name) {
      return !this.options.xmlMode && voidElements.has(name);
    }
    onopentagname(start, endIndex) {
      this.endIndex = endIndex;
      let name = this.getSlice(start, endIndex);
      if (this.lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      this.emitOpenTag(name);
    }
    emitOpenTag(name) {
      var _a2, _b, _c, _d;
      this.openTagStart = this.startIndex;
      this.tagname = name;
      const impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
      if (impliesClose) {
        while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
          const el = this.stack.pop();
          (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, el, true);
        }
      }
      if (!this.isVoidElement(name)) {
        this.stack.push(name);
        if (foreignContextElements.has(name)) {
          this.foreignContext.push(true);
        } else if (htmlIntegrationElements.has(name)) {
          this.foreignContext.push(false);
        }
      }
      (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
      if (this.cbs.onopentag)
        this.attribs = {};
    }
    endOpenTag(isImplied) {
      var _a2, _b;
      this.startIndex = this.openTagStart;
      if (this.attribs) {
        (_b = (_a2 = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a2, this.tagname, this.attribs, isImplied);
        this.attribs = null;
      }
      if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
        this.cbs.onclosetag(this.tagname, true);
      }
      this.tagname = "";
    }
    onopentagend(endIndex) {
      this.endIndex = endIndex;
      this.endOpenTag(false);
      this.startIndex = endIndex + 1;
    }
    onclosetag(start, endIndex) {
      var _a2, _b, _c, _d, _e, _f;
      this.endIndex = endIndex;
      let name = this.getSlice(start, endIndex);
      if (this.lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
        this.foreignContext.pop();
      }
      if (!this.isVoidElement(name)) {
        const pos = this.stack.lastIndexOf(name);
        if (pos !== -1) {
          if (this.cbs.onclosetag) {
            let count = this.stack.length - pos;
            while (count--) {
              this.cbs.onclosetag(this.stack.pop(), count !== 0);
            }
          } else
            this.stack.length = pos;
        } else if (!this.options.xmlMode && name === "p") {
          this.emitOpenTag("p");
          this.closeCurrentTag(true);
        }
      } else if (!this.options.xmlMode && name === "br") {
        (_b = (_a2 = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a2, "br");
        (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
        (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
      }
      this.startIndex = endIndex + 1;
    }
    onselfclosingtag(endIndex) {
      this.endIndex = endIndex;
      if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
        this.closeCurrentTag(false);
        this.startIndex = endIndex + 1;
      } else {
        this.onopentagend(endIndex);
      }
    }
    closeCurrentTag(isOpenImplied) {
      var _a2, _b;
      const name = this.tagname;
      this.endOpenTag(isOpenImplied);
      if (this.stack[this.stack.length - 1] === name) {
        (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, name, !isOpenImplied);
        this.stack.pop();
      }
    }
    onattribname(start, endIndex) {
      this.startIndex = start;
      const name = this.getSlice(start, endIndex);
      this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
    }
    onattribdata(start, endIndex) {
      this.attribvalue += this.getSlice(start, endIndex);
    }
    onattribentity(cp) {
      this.attribvalue += fromCodePoint(cp);
    }
    onattribend(quote, endIndex) {
      var _a2, _b;
      this.endIndex = endIndex;
      (_b = (_a2 = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a2, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
      if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
        this.attribs[this.attribname] = this.attribvalue;
      }
      this.attribvalue = "";
    }
    getInstructionName(value) {
      const idx = value.search(reNameEnd);
      let name = idx < 0 ? value : value.substr(0, idx);
      if (this.lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      return name;
    }
    ondeclaration(start, endIndex) {
      this.endIndex = endIndex;
      const value = this.getSlice(start, endIndex);
      if (this.cbs.onprocessinginstruction) {
        const name = this.getInstructionName(value);
        this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
      }
      this.startIndex = endIndex + 1;
    }
    onprocessinginstruction(start, endIndex) {
      this.endIndex = endIndex;
      const value = this.getSlice(start, endIndex);
      if (this.cbs.onprocessinginstruction) {
        const name = this.getInstructionName(value);
        this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
      }
      this.startIndex = endIndex + 1;
    }
    oncomment(start, endIndex, offset) {
      var _a2, _b, _c, _d;
      this.endIndex = endIndex;
      (_b = (_a2 = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a2, this.getSlice(start, endIndex - offset));
      (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
      this.startIndex = endIndex + 1;
    }
    oncdata(start, endIndex, offset) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      this.endIndex = endIndex;
      const value = this.getSlice(start, endIndex - offset);
      if (this.options.xmlMode || this.options.recognizeCDATA) {
        (_b = (_a2 = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a2);
        (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
        (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
      } else {
        (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
        (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
      }
      this.startIndex = endIndex + 1;
    }
    onend() {
      var _a2, _b;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (let i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true))
          ;
      }
      (_b = (_a2 = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a2);
    }
    reset() {
      var _a2, _b, _c, _d;
      (_b = (_a2 = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a2);
      this.tokenizer.reset();
      this.tagname = "";
      this.attribname = "";
      this.attribs = null;
      this.stack.length = 0;
      this.startIndex = 0;
      this.endIndex = 0;
      (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
      this.buffers.length = 0;
      this.bufferOffset = 0;
      this.writeIndex = 0;
      this.ended = false;
    }
    parseComplete(data) {
      this.reset();
      this.end(data);
    }
    getSlice(start, end) {
      while (start - this.bufferOffset >= this.buffers[0].length) {
        this.shiftBuffer();
      }
      let str = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
      while (end - this.bufferOffset > this.buffers[0].length) {
        this.shiftBuffer();
        str += this.buffers[0].slice(0, end - this.bufferOffset);
      }
      return str;
    }
    shiftBuffer() {
      this.bufferOffset += this.buffers[0].length;
      this.writeIndex--;
      this.buffers.shift();
    }
    write(chunk) {
      var _a2, _b;
      if (this.ended) {
        (_b = (_a2 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a2, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(chunk);
      if (this.tokenizer.running) {
        this.tokenizer.write(chunk);
        this.writeIndex++;
      }
    }
    end(chunk) {
      var _a2, _b;
      if (this.ended) {
        (_b = (_a2 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a2, Error(".end() after done!"));
        return;
      }
      if (chunk)
        this.write(chunk);
      this.ended = true;
      this.tokenizer.end();
    }
    pause() {
      this.tokenizer.pause();
    }
    resume() {
      this.tokenizer.resume();
      while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      }
      if (this.ended)
        this.tokenizer.end();
    }
    parseChunk(chunk) {
      this.write(chunk);
    }
    done(chunk) {
      this.end(chunk);
    }
  };

  // node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    CDATA: () => CDATA,
    Comment: () => Comment,
    Directive: () => Directive,
    Doctype: () => Doctype,
    ElementType: () => ElementType,
    Root: () => Root,
    Script: () => Script,
    Style: () => Style,
    Tag: () => Tag,
    Text: () => Text,
    isTag: () => isTag
  });
  var ElementType;
  (function(ElementType2) {
    ElementType2["Root"] = "root";
    ElementType2["Text"] = "text";
    ElementType2["Directive"] = "directive";
    ElementType2["Comment"] = "comment";
    ElementType2["Script"] = "script";
    ElementType2["Style"] = "style";
    ElementType2["Tag"] = "tag";
    ElementType2["CDATA"] = "cdata";
    ElementType2["Doctype"] = "doctype";
  })(ElementType || (ElementType = {}));
  function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
  }
  var Root = ElementType.Root;
  var Text = ElementType.Text;
  var Directive = ElementType.Directive;
  var Comment = ElementType.Comment;
  var Script = ElementType.Script;
  var Style = ElementType.Style;
  var Tag = ElementType.Tag;
  var CDATA = ElementType.CDATA;
  var Doctype = ElementType.Doctype;

  // node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js
  var Node = class {
    constructor() {
      this.parent = null;
      this.prev = null;
      this.next = null;
      this.startIndex = null;
      this.endIndex = null;
    }
    get parentNode() {
      return this.parent;
    }
    set parentNode(parent) {
      this.parent = parent;
    }
    get previousSibling() {
      return this.prev;
    }
    set previousSibling(prev) {
      this.prev = prev;
    }
    get nextSibling() {
      return this.next;
    }
    set nextSibling(next) {
      this.next = next;
    }
    cloneNode(recursive = false) {
      return cloneNode(this, recursive);
    }
  };
  var DataNode = class extends Node {
    constructor(data) {
      super();
      this.data = data;
    }
    get nodeValue() {
      return this.data;
    }
    set nodeValue(data) {
      this.data = data;
    }
  };
  var Text2 = class extends DataNode {
    constructor() {
      super(...arguments);
      this.type = ElementType.Text;
    }
    get nodeType() {
      return 3;
    }
  };
  var Comment2 = class extends DataNode {
    constructor() {
      super(...arguments);
      this.type = ElementType.Comment;
    }
    get nodeType() {
      return 8;
    }
  };
  var ProcessingInstruction = class extends DataNode {
    constructor(name, data) {
      super(data);
      this.name = name;
      this.type = ElementType.Directive;
    }
    get nodeType() {
      return 1;
    }
  };
  var NodeWithChildren = class extends Node {
    constructor(children) {
      super();
      this.children = children;
    }
    get firstChild() {
      var _a2;
      return (_a2 = this.children[0]) !== null && _a2 !== void 0 ? _a2 : null;
    }
    get lastChild() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    get childNodes() {
      return this.children;
    }
    set childNodes(children) {
      this.children = children;
    }
  };
  var CDATA2 = class extends NodeWithChildren {
    constructor() {
      super(...arguments);
      this.type = ElementType.CDATA;
    }
    get nodeType() {
      return 4;
    }
  };
  var Document = class extends NodeWithChildren {
    constructor() {
      super(...arguments);
      this.type = ElementType.Root;
    }
    get nodeType() {
      return 9;
    }
  };
  var Element = class extends NodeWithChildren {
    constructor(name, attribs, children = [], type = name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag) {
      super(children);
      this.name = name;
      this.attribs = attribs;
      this.type = type;
    }
    get nodeType() {
      return 1;
    }
    get tagName() {
      return this.name;
    }
    set tagName(name) {
      this.name = name;
    }
    get attributes() {
      return Object.keys(this.attribs).map((name) => {
        var _a2, _b;
        return {
          name,
          value: this.attribs[name],
          namespace: (_a2 = this["x-attribsNamespace"]) === null || _a2 === void 0 ? void 0 : _a2[name],
          prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
        };
      });
    }
  };
  function isTag2(node) {
    return isTag(node);
  }
  function isCDATA(node) {
    return node.type === ElementType.CDATA;
  }
  function isText(node) {
    return node.type === ElementType.Text;
  }
  function isComment(node) {
    return node.type === ElementType.Comment;
  }
  function isDirective(node) {
    return node.type === ElementType.Directive;
  }
  function isDocument(node) {
    return node.type === ElementType.Root;
  }
  function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
  }
  function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) {
      result = new Text2(node.data);
    } else if (isComment(node)) {
      result = new Comment2(node.data);
    } else if (isTag2(node)) {
      const children = recursive ? cloneChildren(node.children) : [];
      const clone = new Element(node.name, { ...node.attribs }, children);
      children.forEach((child) => child.parent = clone);
      if (node.namespace != null) {
        clone.namespace = node.namespace;
      }
      if (node["x-attribsNamespace"]) {
        clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
      }
      if (node["x-attribsPrefix"]) {
        clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
      }
      result = clone;
    } else if (isCDATA(node)) {
      const children = recursive ? cloneChildren(node.children) : [];
      const clone = new CDATA2(children);
      children.forEach((child) => child.parent = clone);
      result = clone;
    } else if (isDocument(node)) {
      const children = recursive ? cloneChildren(node.children) : [];
      const clone = new Document(children);
      children.forEach((child) => child.parent = clone);
      if (node["x-mode"]) {
        clone["x-mode"] = node["x-mode"];
      }
      result = clone;
    } else if (isDirective(node)) {
      const instruction = new ProcessingInstruction(node.name, node.data);
      if (node["x-name"] != null) {
        instruction["x-name"] = node["x-name"];
        instruction["x-publicId"] = node["x-publicId"];
        instruction["x-systemId"] = node["x-systemId"];
      }
      result = instruction;
    } else {
      throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
      result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
  }
  function cloneChildren(childs) {
    const children = childs.map((child) => cloneNode(child, true));
    for (let i = 1; i < children.length; i++) {
      children[i].prev = children[i - 1];
      children[i - 1].next = children[i];
    }
    return children;
  }

  // node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js
  var defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
  };
  var DomHandler = class {
    constructor(callback, options, elementCB) {
      this.dom = [];
      this.root = new Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }
      if (typeof callback === "object") {
        options = callback;
        callback = void 0;
      }
      this.callback = callback !== null && callback !== void 0 ? callback : null;
      this.options = options !== null && options !== void 0 ? options : defaultOpts;
      this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser) {
      this.parser = parser;
    }
    onreset() {
      this.dom = [];
      this.root = new Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    }
    onend() {
      if (this.done)
        return;
      this.done = true;
      this.parser = null;
      this.handleCallback(null);
    }
    onerror(error) {
      this.handleCallback(error);
    }
    onclosetag() {
      this.lastNode = null;
      const elem = this.tagStack.pop();
      if (this.options.withEndIndices) {
        elem.endIndex = this.parser.endIndex;
      }
      if (this.elementCB)
        this.elementCB(elem);
    }
    onopentag(name, attribs) {
      const type = this.options.xmlMode ? ElementType.Tag : void 0;
      const element = new Element(name, attribs, void 0, type);
      this.addNode(element);
      this.tagStack.push(element);
    }
    ontext(data) {
      const { lastNode } = this;
      if (lastNode && lastNode.type === ElementType.Text) {
        lastNode.data += data;
        if (this.options.withEndIndices) {
          lastNode.endIndex = this.parser.endIndex;
        }
      } else {
        const node = new Text2(data);
        this.addNode(node);
        this.lastNode = node;
      }
    }
    oncomment(data) {
      if (this.lastNode && this.lastNode.type === ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }
      const node = new Comment2(data);
      this.addNode(node);
      this.lastNode = node;
    }
    oncommentend() {
      this.lastNode = null;
    }
    oncdatastart() {
      const text = new Text2("");
      const node = new CDATA2([text]);
      this.addNode(node);
      text.parent = node;
      this.lastNode = text;
    }
    oncdataend() {
      this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
      const node = new ProcessingInstruction(name, data);
      this.addNode(node);
    }
    handleCallback(error) {
      if (typeof this.callback === "function") {
        this.callback(error, this.dom);
      } else if (error) {
        throw error;
      }
    }
    addNode(node) {
      const parent = this.tagStack[this.tagStack.length - 1];
      const previousSibling2 = parent.children[parent.children.length - 1];
      if (this.options.withStartIndices) {
        node.startIndex = this.parser.startIndex;
      }
      if (this.options.withEndIndices) {
        node.endIndex = this.parser.endIndex;
      }
      parent.children.push(node);
      if (previousSibling2) {
        node.prev = previousSibling2;
        previousSibling2.next = node;
      }
      node.parent = parent;
      this.lastNode = null;
    }
  };

  // node_modules/.pnpm/domutils@3.0.1/node_modules/domutils/lib/esm/index.js
  var esm_exports2 = {};
  __export(esm_exports2, {
    DocumentPosition: () => DocumentPosition,
    append: () => append,
    appendChild: () => appendChild,
    compareDocumentPosition: () => compareDocumentPosition,
    existsOne: () => existsOne,
    filter: () => filter,
    find: () => find,
    findAll: () => findAll,
    findOne: () => findOne,
    findOneChild: () => findOneChild,
    getAttributeValue: () => getAttributeValue,
    getChildren: () => getChildren,
    getElementById: () => getElementById,
    getElements: () => getElements,
    getElementsByTagName: () => getElementsByTagName,
    getElementsByTagType: () => getElementsByTagType,
    getFeed: () => getFeed,
    getInnerHTML: () => getInnerHTML,
    getName: () => getName,
    getOuterHTML: () => getOuterHTML,
    getParent: () => getParent,
    getSiblings: () => getSiblings,
    getText: () => getText,
    hasAttrib: () => hasAttrib,
    hasChildren: () => hasChildren,
    innerText: () => innerText,
    isCDATA: () => isCDATA,
    isComment: () => isComment,
    isDocument: () => isDocument,
    isTag: () => isTag2,
    isText: () => isText,
    nextElementSibling: () => nextElementSibling,
    prepend: () => prepend,
    prependChild: () => prependChild,
    prevElementSibling: () => prevElementSibling,
    removeElement: () => removeElement,
    removeSubsets: () => removeSubsets,
    replaceElement: () => replaceElement,
    testElement: () => testElement,
    textContent: () => textContent,
    uniqueSort: () => uniqueSort
  });

  // node_modules/.pnpm/entities@4.3.1/node_modules/entities/lib/esm/escape.js
  var xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var xmlCodeMap = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  var getCodePoint = String.prototype.codePointAt != null ? (str, index) => str.codePointAt(index) : (c, index) => (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
  function encodeXML(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while ((match = xmlReplacer.exec(str)) !== null) {
      const i = match.index;
      const char = str.charCodeAt(i);
      const next = xmlCodeMap.get(char);
      if (next !== void 0) {
        ret += str.substring(lastIdx, i) + next;
        lastIdx = i + 1;
      } else {
        ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
        lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
      }
    }
    return ret + str.substr(lastIdx);
  }
  function getEscaper(regex, map) {
    return function escape3(data) {
      let match;
      let lastIdx = 0;
      let result = "";
      while (match = regex.exec(data)) {
        if (lastIdx !== match.index) {
          result += data.substring(lastIdx, match.index);
        }
        result += map.get(match[0].charCodeAt(0));
        lastIdx = match.index + 1;
      }
      return result + data.substring(lastIdx);
    };
  }
  var escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
  var escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ]));
  var escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));

  // node_modules/.pnpm/entities@4.3.1/node_modules/entities/lib/esm/index.js
  var EntityLevel;
  (function(EntityLevel2) {
    EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
    EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
  })(EntityLevel || (EntityLevel = {}));
  var DecodingMode;
  (function(DecodingMode2) {
    DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
    DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  })(DecodingMode || (DecodingMode = {}));
  var EncodingMode;
  (function(EncodingMode2) {
    EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
    EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
    EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
    EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
    EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
  })(EncodingMode || (EncodingMode = {}));

  // node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/foreignNames.js
  var elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
  ].map((val) => [val.toLowerCase(), val]));
  var attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
  ].map((val) => [val.toLowerCase(), val]));

  // node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/index.js
  var unencodedElements = /* @__PURE__ */ new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
  ]);
  function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
  }
  function formatAttributes(attributes2, opts) {
    var _a2;
    if (!attributes2)
      return;
    const encode = ((_a2 = opts.encodeEntities) !== null && _a2 !== void 0 ? _a2 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
    return Object.keys(attributes2).map((key2) => {
      var _a3, _b;
      const value = (_a3 = attributes2[key2]) !== null && _a3 !== void 0 ? _a3 : "";
      if (opts.xmlMode === "foreign") {
        key2 = (_b = attributeNames.get(key2)) !== null && _b !== void 0 ? _b : key2;
      }
      if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
        return key2;
      }
      return `${key2}="${encode(value)}"`;
    }).join(" ");
  }
  var singleTag = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]);
  function render(node, options = {}) {
    const nodes = "length" in node ? node : [node];
    let output = "";
    for (let i = 0; i < nodes.length; i++) {
      output += renderNode(nodes[i], options);
    }
    return output;
  }
  var esm_default = render;
  function renderNode(node, options) {
    switch (node.type) {
      case Root:
        return render(node.children, options);
      case Doctype:
      case Directive:
        return renderDirective(node);
      case Comment:
        return renderComment(node);
      case CDATA:
        return renderCdata(node);
      case Script:
      case Style:
      case Tag:
        return renderTag(node, options);
      case Text:
        return renderText(node, options);
    }
  }
  var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
  ]);
  var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
  function renderTag(elem, opts) {
    var _a2;
    if (opts.xmlMode === "foreign") {
      elem.name = (_a2 = elementNames.get(elem.name)) !== null && _a2 !== void 0 ? _a2 : elem.name;
      if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
        opts = { ...opts, xmlMode: false };
      }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
      opts = { ...opts, xmlMode: "foreign" };
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
      tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
      if (!opts.xmlMode)
        tag += " ";
      tag += "/>";
    } else {
      tag += ">";
      if (elem.children.length > 0) {
        tag += render(elem.children, opts);
      }
      if (opts.xmlMode || !singleTag.has(elem.name)) {
        tag += `</${elem.name}>`;
      }
    }
    return tag;
  }
  function renderDirective(elem) {
    return `<${elem.data}>`;
  }
  function renderText(elem, opts) {
    var _a2;
    let data = elem.data || "";
    if (((_a2 = opts.encodeEntities) !== null && _a2 !== void 0 ? _a2 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
      data = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data) : escapeText(data);
    }
    return data;
  }
  function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
  }
  function renderComment(elem) {
    return `<!--${elem.data}-->`;
  }

  // node_modules/.pnpm/domutils@3.0.1/node_modules/domutils/lib/esm/stringify.js
  function getOuterHTML(node, options) {
    return esm_default(node, options);
  }
  function getInnerHTML(node, options) {
    return hasChildren(node) ? node.children.map((node2) => getOuterHTML(node2, options)).join("") : "";
  }
  function getText(node) {
    if (Array.isArray(node))
      return node.map(getText).join("");
    if (isTag2(node))
      return node.name === "br" ? "\n" : getText(node.children);
    if (isCDATA(node))
      return getText(node.children);
    if (isText(node))
      return node.data;
    return "";
  }
  function textContent(node) {
    if (Array.isArray(node))
      return node.map(textContent).join("");
    if (hasChildren(node) && !isComment(node)) {
      return textContent(node.children);
    }
    if (isText(node))
      return node.data;
    return "";
  }
  function innerText(node) {
    if (Array.isArray(node))
      return node.map(innerText).join("");
    if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) {
      return innerText(node.children);
    }
    if (isText(node))
      return node.data;
    return "";
  }

  // node_modules/.pnpm/domutils@3.0.1/node_modules/domutils/lib/esm/traversal.js
  function getChildren(elem) {
    return hasChildren(elem) ? elem.children : [];
  }
  function getParent(elem) {
    return elem.parent || null;
  }
  function getSiblings(elem) {
    const parent = getParent(elem);
    if (parent != null)
      return getChildren(parent);
    const siblings = [elem];
    let { prev, next } = elem;
    while (prev != null) {
      siblings.unshift(prev);
      ({ prev } = prev);
    }
    while (next != null) {
      siblings.push(next);
      ({ next } = next);
    }
    return siblings;
  }
  function getAttributeValue(elem, name) {
    var _a2;
    return (_a2 = elem.attribs) === null || _a2 === void 0 ? void 0 : _a2[name];
  }
  function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
  }
  function getName(elem) {
    return elem.name;
  }
  function nextElementSibling(elem) {
    let { next } = elem;
    while (next !== null && !isTag2(next))
      ({ next } = next);
    return next;
  }
  function prevElementSibling(elem) {
    let { prev } = elem;
    while (prev !== null && !isTag2(prev))
      ({ prev } = prev);
    return prev;
  }

  // node_modules/.pnpm/domutils@3.0.1/node_modules/domutils/lib/esm/manipulation.js
  function removeElement(elem) {
    if (elem.prev)
      elem.prev.next = elem.next;
    if (elem.next)
      elem.next.prev = elem.prev;
    if (elem.parent) {
      const childs = elem.parent.children;
      childs.splice(childs.lastIndexOf(elem), 1);
    }
  }
  function replaceElement(elem, replacement) {
    const prev = replacement.prev = elem.prev;
    if (prev) {
      prev.next = replacement;
    }
    const next = replacement.next = elem.next;
    if (next) {
      next.prev = replacement;
    }
    const parent = replacement.parent = elem.parent;
    if (parent) {
      const childs = parent.children;
      childs[childs.lastIndexOf(elem)] = replacement;
      elem.parent = null;
    }
  }
  function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
      const sibling = elem.children[elem.children.length - 2];
      sibling.next = child;
      child.prev = sibling;
    } else {
      child.prev = null;
    }
  }
  function append(elem, next) {
    removeElement(next);
    const { parent } = elem;
    const currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
      currNext.prev = next;
      if (parent) {
        const childs = parent.children;
        childs.splice(childs.lastIndexOf(currNext), 0, next);
      }
    } else if (parent) {
      parent.children.push(next);
    }
  }
  function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
      const sibling = elem.children[1];
      sibling.prev = child;
      child.next = sibling;
    } else {
      child.next = null;
    }
  }
  function prepend(elem, prev) {
    removeElement(prev);
    const { parent } = elem;
    if (parent) {
      const childs = parent.children;
      childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
      elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
  }

  // node_modules/.pnpm/domutils@3.0.1/node_modules/domutils/lib/esm/querying.js
  function filter(test, node, recurse = true, limit = Infinity) {
    if (!Array.isArray(node))
      node = [node];
    return find(test, node, recurse, limit);
  }
  function find(test, nodes, recurse, limit) {
    const result = [];
    for (const elem of nodes) {
      if (test(elem)) {
        result.push(elem);
        if (--limit <= 0)
          break;
      }
      if (recurse && hasChildren(elem) && elem.children.length > 0) {
        const children = find(test, elem.children, recurse, limit);
        result.push(...children);
        limit -= children.length;
        if (limit <= 0)
          break;
      }
    }
    return result;
  }
  function findOneChild(test, nodes) {
    return nodes.find(test);
  }
  function findOne(test, nodes, recurse = true) {
    let elem = null;
    for (let i = 0; i < nodes.length && !elem; i++) {
      const checked = nodes[i];
      if (!isTag2(checked)) {
        continue;
      } else if (test(checked)) {
        elem = checked;
      } else if (recurse && checked.children.length > 0) {
        elem = findOne(test, checked.children, true);
      }
    }
    return elem;
  }
  function existsOne(test, nodes) {
    return nodes.some((checked) => isTag2(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children)));
  }
  function findAll(test, nodes) {
    var _a2;
    const result = [];
    const stack = nodes.filter(isTag2);
    let elem;
    while (elem = stack.shift()) {
      const children = (_a2 = elem.children) === null || _a2 === void 0 ? void 0 : _a2.filter(isTag2);
      if (children && children.length > 0) {
        stack.unshift(...children);
      }
      if (test(elem))
        result.push(elem);
    }
    return result;
  }

  // node_modules/.pnpm/domutils@3.0.1/node_modules/domutils/lib/esm/legacy.js
  var Checks = {
    tag_name(name) {
      if (typeof name === "function") {
        return (elem) => isTag2(elem) && name(elem.name);
      } else if (name === "*") {
        return isTag2;
      }
      return (elem) => isTag2(elem) && elem.name === name;
    },
    tag_type(type) {
      if (typeof type === "function") {
        return (elem) => type(elem.type);
      }
      return (elem) => elem.type === type;
    },
    tag_contains(data) {
      if (typeof data === "function") {
        return (elem) => isText(elem) && data(elem.data);
      }
      return (elem) => isText(elem) && elem.data === data;
    }
  };
  function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
      return (elem) => isTag2(elem) && value(elem.attribs[attrib]);
    }
    return (elem) => isTag2(elem) && elem.attribs[attrib] === value;
  }
  function combineFuncs(a, b) {
    return (elem) => a(elem) || b(elem);
  }
  function compileTest(options) {
    const funcs = Object.keys(options).map((key2) => {
      const value = options[key2];
      return Object.prototype.hasOwnProperty.call(Checks, key2) ? Checks[key2](value) : getAttribCheck(key2, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
  }
  function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
  }
  function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? filter(test, nodes, recurse, limit) : [];
  }
  function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes))
      nodes = [nodes];
    return findOne(getAttribCheck("id", id), nodes, recurse);
  }
  function getElementsByTagName(tagName16, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_name"](tagName16), nodes, recurse, limit);
  }
  function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_type"](type), nodes, recurse, limit);
  }

  // node_modules/.pnpm/domutils@3.0.1/node_modules/domutils/lib/esm/helpers.js
  function removeSubsets(nodes) {
    let idx = nodes.length;
    while (--idx >= 0) {
      const node = nodes[idx];
      if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
        nodes.splice(idx, 1);
        continue;
      }
      for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
        if (nodes.includes(ancestor)) {
          nodes.splice(idx, 1);
          break;
        }
      }
    }
    return nodes;
  }
  var DocumentPosition;
  (function(DocumentPosition2) {
    DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
  })(DocumentPosition || (DocumentPosition = {}));
  function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
      return 0;
    }
    let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
    while (current) {
      aParents.unshift(current);
      current = current.parent;
    }
    current = hasChildren(nodeB) ? nodeB : nodeB.parent;
    while (current) {
      bParents.unshift(current);
      current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
      idx++;
    }
    if (idx === 0) {
      return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
      if (sharedParent === nodeB) {
        return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
      }
      return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
      return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
  }
  function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr) => !arr.includes(node, i + 1));
    nodes.sort((a, b) => {
      const relative = compareDocumentPosition(a, b);
      if (relative & DocumentPosition.PRECEDING) {
        return -1;
      } else if (relative & DocumentPosition.FOLLOWING) {
        return 1;
      }
      return 0;
    });
    return nodes;
  }

  // node_modules/.pnpm/domutils@3.0.1/node_modules/domutils/lib/esm/feeds.js
  function getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
  }
  function getAtomFeed(feedRoot) {
    var _a2;
    const childs = feedRoot.children;
    const feed = {
      type: "atom",
      items: getElementsByTagName("entry", childs).map((item) => {
        var _a3;
        const { children } = item;
        const entry = { media: getMediaElements(children) };
        addConditionally(entry, "id", "id", children);
        addConditionally(entry, "title", "title", children);
        const href2 = (_a3 = getOneElement("link", children)) === null || _a3 === void 0 ? void 0 : _a3.attribs["href"];
        if (href2) {
          entry.link = href2;
        }
        const description = fetch2("summary", children) || fetch2("content", children);
        if (description) {
          entry.description = description;
        }
        const pubDate = fetch2("updated", children);
        if (pubDate) {
          entry.pubDate = new Date(pubDate);
        }
        return entry;
      })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a2 = getOneElement("link", childs)) === null || _a2 === void 0 ? void 0 : _a2.attribs["href"];
    if (href) {
      feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch2("updated", childs);
    if (updated) {
      feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
  }
  function getRssFeed(feedRoot) {
    var _a2, _b;
    const childs = (_b = (_a2 = getOneElement("channel", feedRoot.children)) === null || _a2 === void 0 ? void 0 : _a2.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
      type: feedRoot.name.substr(0, 3),
      id: "",
      items: getElementsByTagName("item", feedRoot.children).map((item) => {
        const { children } = item;
        const entry = { media: getMediaElements(children) };
        addConditionally(entry, "id", "guid", children);
        addConditionally(entry, "title", "title", children);
        addConditionally(entry, "link", "link", children);
        addConditionally(entry, "description", "description", children);
        const pubDate = fetch2("pubDate", children);
        if (pubDate)
          entry.pubDate = new Date(pubDate);
        return entry;
      })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch2("lastBuildDate", childs);
    if (updated) {
      feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
  }
  var MEDIA_KEYS_STRING = ["url", "type", "lang"];
  var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
  ];
  function getMediaElements(where) {
    return getElementsByTagName("media:content", where).map((elem) => {
      const { attribs } = elem;
      const media = {
        medium: attribs["medium"],
        isDefault: !!attribs["isDefault"]
      };
      for (const attrib of MEDIA_KEYS_STRING) {
        if (attribs[attrib]) {
          media[attrib] = attribs[attrib];
        }
      }
      for (const attrib of MEDIA_KEYS_INT) {
        if (attribs[attrib]) {
          media[attrib] = parseInt(attribs[attrib], 10);
        }
      }
      if (attribs["expression"]) {
        media.expression = attribs["expression"];
      }
      return media;
    });
  }
  function getOneElement(tagName16, node) {
    return getElementsByTagName(tagName16, node, true, 1)[0];
  }
  function fetch2(tagName16, where, recurse = false) {
    return textContent(getElementsByTagName(tagName16, where, recurse, 1)).trim();
  }
  function addConditionally(obj, prop2, tagName16, where, recurse = false) {
    const val = fetch2(tagName16, where, recurse);
    if (val)
      obj[prop2] = val;
  }
  function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
  }

  // node_modules/.pnpm/htmlparser2@8.0.1/node_modules/htmlparser2/lib/esm/index.js
  function parseDocument(data, options) {
    const handler4 = new DomHandler(void 0, options);
    new Parser(handler4, options).end(data);
    return handler4.root;
  }
  function parseDOM(data, options) {
    return parseDocument(data, options).children;
  }
  function createDomStream(cb, options, elementCb) {
    const handler4 = new DomHandler(cb, options, elementCb);
    return new Parser(handler4, options);
  }
  function parseFeed(feed, options = { xmlMode: true }) {
    return getFeed(parseDOM(feed, options));
  }

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/constants.js
  var NODE_END = -1;
  var ELEMENT_NODE = 1;
  var ATTRIBUTE_NODE = 2;
  var TEXT_NODE = 3;
  var COMMENT_NODE = 8;
  var DOCUMENT_NODE = 9;
  var DOCUMENT_TYPE_NODE = 10;
  var DOCUMENT_FRAGMENT_NODE = 11;
  var BLOCK_ELEMENTS = /* @__PURE__ */ new Set(["ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "COL", "COLGROUP", "DD", "DIV", "DL", "DT", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL", "P"]);
  var SHOW_ALL = -1;
  var SHOW_ELEMENT = 1;
  var SHOW_TEXT = 4;
  var SHOW_COMMENT = 128;
  var DOCUMENT_POSITION_DISCONNECTED = 1;
  var DOCUMENT_POSITION_PRECEDING = 2;
  var DOCUMENT_POSITION_FOLLOWING = 4;
  var DOCUMENT_POSITION_CONTAINS = 8;
  var DOCUMENT_POSITION_CONTAINED_BY = 16;
  var DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
  var SVG_NAMESPACE = "http://www.w3.org/2000/svg";

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/object.js
  var {
    assign,
    create,
    defineProperties,
    entries,
    getOwnPropertyDescriptors,
    keys,
    setPrototypeOf
  } = Object;

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/utils.js
  var $String = String;
  var getEnd = (node) => node.nodeType === ELEMENT_NODE ? node[END] : node;
  var ignoreCase = ({ ownerDocument }) => ownerDocument[MIME].ignoreCase;
  var knownAdjacent = (prev, next) => {
    prev[NEXT] = next;
    next[PREV] = prev;
  };
  var knownBoundaries = (prev, current, next) => {
    knownAdjacent(prev, current);
    knownAdjacent(getEnd(current), next);
  };
  var knownSegment = (prev, start, end, next) => {
    knownAdjacent(prev, start);
    knownAdjacent(getEnd(end), next);
  };
  var knownSiblings = (prev, current, next) => {
    knownAdjacent(prev, current);
    knownAdjacent(current, next);
  };
  var localCase = ({ localName, ownerDocument }) => {
    return ownerDocument[MIME].ignoreCase ? localName.toUpperCase() : localName;
  };
  var setAdjacent = (prev, next) => {
    if (prev)
      prev[NEXT] = next;
    if (next)
      next[PREV] = prev;
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/shadow-roots.js
  var shadowRoots = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/custom-element-registry.js
  var reactive = false;
  var Classes = /* @__PURE__ */ new WeakMap();
  var customElements = /* @__PURE__ */ new WeakMap();
  var attributeChangedCallback = (element, attributeName, oldValue, newValue) => {
    if (reactive && customElements.has(element) && element.attributeChangedCallback && element.constructor.observedAttributes.includes(attributeName)) {
      element.attributeChangedCallback(attributeName, oldValue, newValue);
    }
  };
  var createTrigger = (method, isConnected2) => (element) => {
    if (customElements.has(element)) {
      const info = customElements.get(element);
      if (info.connected !== isConnected2 && element.isConnected === isConnected2) {
        info.connected = isConnected2;
        if (method in element)
          element[method]();
      }
    }
  };
  var triggerConnected = createTrigger("connectedCallback", true);
  var connectedCallback = (element) => {
    if (reactive) {
      triggerConnected(element);
      if (shadowRoots.has(element))
        element = shadowRoots.get(element).shadowRoot;
      let { [NEXT]: next, [END]: end } = element;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE)
          triggerConnected(next);
        next = next[NEXT];
      }
    }
  };
  var triggerDisconnected = createTrigger("disconnectedCallback", false);
  var disconnectedCallback = (element) => {
    if (reactive) {
      triggerDisconnected(element);
      if (shadowRoots.has(element))
        element = shadowRoots.get(element).shadowRoot;
      let { [NEXT]: next, [END]: end } = element;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE)
          triggerDisconnected(next);
        next = next[NEXT];
      }
    }
  };
  var CustomElementRegistry = class {
    constructor(ownerDocument) {
      this.ownerDocument = ownerDocument;
      this.registry = /* @__PURE__ */ new Map();
      this.waiting = /* @__PURE__ */ new Map();
      this.active = false;
    }
    define(localName, Class, options = {}) {
      const { ownerDocument, registry, waiting } = this;
      if (registry.has(localName))
        throw new Error("unable to redefine " + localName);
      if (Classes.has(Class))
        throw new Error("unable to redefine the same class: " + Class);
      this.active = reactive = true;
      const { extends: extend } = options;
      Classes.set(Class, {
        ownerDocument,
        options: { is: extend ? localName : "" },
        localName: extend || localName
      });
      const check = extend ? (element) => {
        return element.localName === extend && element.getAttribute("is") === localName;
      } : (element) => element.localName === localName;
      registry.set(localName, { Class, check });
      if (waiting.has(localName)) {
        for (const resolve of waiting.get(localName))
          resolve(Class);
        waiting.delete(localName);
      }
      ownerDocument.querySelectorAll(
        extend ? `${extend}[is="${localName}"]` : localName
      ).forEach(this.upgrade, this);
    }
    upgrade(element) {
      if (customElements.has(element))
        return;
      const { ownerDocument, registry } = this;
      const ce = element.getAttribute("is") || element.localName;
      if (registry.has(ce)) {
        const { Class, check } = registry.get(ce);
        if (check(element)) {
          const { attributes: attributes2, isConnected: isConnected2 } = element;
          for (const attr of attributes2)
            element.removeAttributeNode(attr);
          const values = entries(element);
          for (const [key2] of values)
            delete element[key2];
          setPrototypeOf(element, Class.prototype);
          ownerDocument[UPGRADE] = { element, values };
          new Class(ownerDocument, ce);
          customElements.set(element, { connected: isConnected2 });
          for (const attr of attributes2)
            element.setAttributeNode(attr);
          if (isConnected2 && element.connectedCallback)
            element.connectedCallback();
        }
      }
    }
    whenDefined(localName) {
      const { registry, waiting } = this;
      return new Promise((resolve) => {
        if (registry.has(localName))
          resolve(registry.get(localName).Class);
        else {
          if (!waiting.has(localName))
            waiting.set(localName, []);
          waiting.get(localName).push(resolve);
        }
      });
    }
    get(localName) {
      const info = this.registry.get(localName);
      return info && info.Class;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/parse-from-string.js
  var { Parser: Parser2 } = esm_exports3;
  var notParsing = true;
  var append2 = (self, node, active) => {
    const end = self[END];
    node.parentNode = self;
    knownBoundaries(end[PREV], node, end);
    if (active && node.nodeType === ELEMENT_NODE)
      connectedCallback(node);
    return node;
  };
  var attribute = (element, end, attribute2, value, active) => {
    attribute2[VALUE] = value;
    attribute2.ownerElement = element;
    knownSiblings(end[PREV], attribute2, end);
    if (attribute2.name === "class")
      element.className = value;
    if (active)
      attributeChangedCallback(element, attribute2.name, null, value);
  };
  var parseFromString = (document2, isHTML, markupLanguage) => {
    const { active, registry } = document2[CUSTOM_ELEMENTS];
    let node = document2;
    let ownerSVGElement = null;
    notParsing = false;
    const content = new Parser2({
      onprocessinginstruction(name, data) {
        if (name.toLowerCase() === "!doctype")
          document2.doctype = data.slice(name.length).trim();
      },
      onopentag(name, attributes2) {
        let create3 = true;
        if (isHTML) {
          if (ownerSVGElement) {
            node = append2(node, document2.createElementNS(SVG_NAMESPACE, name), active);
            node.ownerSVGElement = ownerSVGElement;
            create3 = false;
          } else if (name === "svg" || name === "SVG") {
            ownerSVGElement = document2.createElementNS(SVG_NAMESPACE, name);
            node = append2(node, ownerSVGElement, active);
            create3 = false;
          } else if (active) {
            const ce = name.includes("-") ? name : attributes2.is || "";
            if (ce && registry.has(ce)) {
              const { Class } = registry.get(ce);
              node = append2(node, new Class(), active);
              delete attributes2.is;
              create3 = false;
            }
          }
        }
        if (create3)
          node = append2(node, document2.createElement(name), false);
        let end = node[END];
        for (const name2 of keys(attributes2))
          attribute(node, end, document2.createAttribute(name2), attributes2[name2], active);
      },
      oncomment(data) {
        append2(node, document2.createComment(data), active);
      },
      ontext(text) {
        append2(node, document2.createTextNode(text), active);
      },
      onclosetag() {
        if (isHTML && node === ownerSVGElement)
          ownerSVGElement = null;
        node = node.parentNode;
      }
    }, {
      lowerCaseAttributeNames: false,
      decodeEntities: true,
      xmlMode: !isHTML
    });
    content.write(markupLanguage);
    content.end();
    notParsing = true;
    return document2;
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/register-html-class.js
  var htmlClasses = /* @__PURE__ */ new Map();
  var registerHTMLClass = (names, Class) => {
    for (const name of [].concat(names)) {
      htmlClasses.set(name, Class);
      htmlClasses.set(name.toUpperCase(), Class);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/document.js
  var import_perf_hooks = __toESM(require_perf_hooks(), 1);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/jsdon.js
  var loopSegment = ({ [NEXT]: next, [END]: end }, json) => {
    while (next !== end) {
      switch (next.nodeType) {
        case ATTRIBUTE_NODE:
          attrAsJSON(next, json);
          break;
        case TEXT_NODE:
        case COMMENT_NODE:
          characterDataAsJSON(next, json);
          break;
        case ELEMENT_NODE:
          elementAsJSON(next, json);
          next = getEnd(next);
          break;
        case DOCUMENT_TYPE_NODE:
          documentTypeAsJSON(next, json);
          break;
      }
      next = next[NEXT];
    }
    const last = json.length - 1;
    const value = json[last];
    if (typeof value === "number" && value < 0)
      json[last] += NODE_END;
    else
      json.push(NODE_END);
  };
  var attrAsJSON = (attr, json) => {
    json.push(ATTRIBUTE_NODE, attr.name);
    const value = attr[VALUE].trim();
    if (value)
      json.push(value);
  };
  var characterDataAsJSON = (node, json) => {
    const value = node[VALUE];
    if (value.trim())
      json.push(node.nodeType, value);
  };
  var nonElementAsJSON = (node, json) => {
    json.push(node.nodeType);
    loopSegment(node, json);
  };
  var documentTypeAsJSON = ({ name, publicId, systemId }, json) => {
    json.push(DOCUMENT_TYPE_NODE, name);
    if (publicId)
      json.push(publicId);
    if (systemId)
      json.push(systemId);
  };
  var elementAsJSON = (element, json) => {
    json.push(ELEMENT_NODE, element.localName);
    loopSegment(element, json);
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/mutation-observer.js
  var createRecord = (type, target, addedNodes, removedNodes, attributeName, oldValue) => ({ type, target, addedNodes, removedNodes, attributeName, oldValue });
  var queueAttribute = (observer, target, attributeName, attributeFilter, attributeOldValue, oldValue) => {
    if (!attributeFilter || attributeFilter.includes(attributeName)) {
      const { callback, records, scheduled } = observer;
      records.push(createRecord(
        "attributes",
        target,
        [],
        [],
        attributeName,
        attributeOldValue ? oldValue : void 0
      ));
      if (!scheduled) {
        observer.scheduled = true;
        Promise.resolve().then(() => {
          observer.scheduled = false;
          callback(records.splice(0), observer);
        });
      }
    }
  };
  var attributeChangedCallback2 = (element, attributeName, oldValue) => {
    const { ownerDocument } = element;
    const { active, observers } = ownerDocument[MUTATION_OBSERVER];
    if (active) {
      for (const observer of observers) {
        for (const [
          target,
          {
            childList,
            subtree,
            attributes: attributes2,
            attributeFilter,
            attributeOldValue
          }
        ] of observer.nodes) {
          if (childList) {
            if (subtree && (target === ownerDocument || target.contains(element)) || !subtree && target.children.includes(element)) {
              queueAttribute(
                observer,
                element,
                attributeName,
                attributeFilter,
                attributeOldValue,
                oldValue
              );
              break;
            }
          } else if (attributes2 && target === element) {
            queueAttribute(
              observer,
              element,
              attributeName,
              attributeFilter,
              attributeOldValue,
              oldValue
            );
            break;
          }
        }
      }
    }
  };
  var moCallback = (element, parentNode) => {
    const { ownerDocument } = element;
    const { active, observers } = ownerDocument[MUTATION_OBSERVER];
    if (active) {
      for (const observer of observers) {
        for (const [target, { subtree, childList, characterData }] of observer.nodes) {
          if (childList) {
            if (parentNode && (target === parentNode || subtree && target.contains(parentNode)) || !parentNode && (subtree && (target === ownerDocument || target.contains(element)) || !subtree && target[characterData ? "childNodes" : "children"].includes(element))) {
              const { callback, records, scheduled } = observer;
              records.push(createRecord(
                "childList",
                target,
                parentNode ? [] : [element],
                parentNode ? [element] : []
              ));
              if (!scheduled) {
                observer.scheduled = true;
                Promise.resolve().then(() => {
                  observer.scheduled = false;
                  callback(records.splice(0), observer);
                });
              }
              break;
            }
          }
        }
      }
    }
  };
  var MutationObserverClass = class {
    constructor(ownerDocument) {
      const observers = /* @__PURE__ */ new Set();
      this.observers = observers;
      this.active = false;
      this.class = class MutationObserver {
        constructor(callback) {
          this.callback = callback;
          this.nodes = /* @__PURE__ */ new Map();
          this.records = [];
          this.scheduled = false;
        }
        disconnect() {
          this.records.splice(0);
          this.nodes.clear();
          observers.delete(this);
          ownerDocument[MUTATION_OBSERVER].active = !!observers.size;
        }
        observe(target, options = {
          subtree: false,
          childList: false,
          attributes: false,
          attributeFilter: null,
          attributeOldValue: false,
          characterData: false
        }) {
          if ("attributeOldValue" in options || "attributeFilter" in options)
            options.attributes = true;
          options.childList = !!options.childList;
          options.subtree = !!options.subtree;
          this.nodes.set(target, options);
          observers.add(this);
          ownerDocument[MUTATION_OBSERVER].active = true;
        }
        takeRecords() {
          return this.records.splice(0);
        }
      };
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/attributes.js
  var emptyAttributes = /* @__PURE__ */ new Set([
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "class",
    "contenteditable",
    "controls",
    "default",
    "defer",
    "disabled",
    "draggable",
    "formnovalidate",
    "hidden",
    "id",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "style",
    "truespeed"
  ]);
  var setAttribute = (element, attribute2) => {
    const { [VALUE]: value, name } = attribute2;
    attribute2.ownerElement = element;
    knownSiblings(element, attribute2, element[NEXT]);
    if (name === "class")
      element.className = value;
    attributeChangedCallback2(element, name, null);
    attributeChangedCallback(element, name, null, value);
  };
  var removeAttribute = (element, attribute2) => {
    const { [VALUE]: value, name } = attribute2;
    knownAdjacent(attribute2[PREV], attribute2[NEXT]);
    attribute2.ownerElement = attribute2[PREV] = attribute2[NEXT] = null;
    if (name === "class")
      element[CLASS_LIST] = null;
    attributeChangedCallback2(element, name, value);
    attributeChangedCallback(element, name, value, null);
  };
  var booleanAttribute = {
    get(element, name) {
      return element.hasAttribute(name);
    },
    set(element, name, value) {
      if (value)
        element.setAttribute(name, "");
      else
        element.removeAttribute(name);
    }
  };
  var numericAttribute = {
    get(element, name) {
      return parseFloat(element.getAttribute(name) || 0);
    },
    set(element, name, value) {
      element.setAttribute(name, value);
    }
  };
  var stringAttribute = {
    get(element, name) {
      return element.getAttribute(name) || "";
    },
    set(element, name, value) {
      element.setAttribute(name, value);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/event-target.js
  var wm = /* @__PURE__ */ new WeakMap();
  function dispatch(event, listener) {
    if (typeof listener === "function")
      listener.call(event.target, event);
    else
      listener.handleEvent(event);
    return event._stopImmediatePropagationFlag;
  }
  function invokeListeners({ currentTarget, target }) {
    const map = wm.get(currentTarget);
    if (map && map.has(this.type)) {
      const listeners = map.get(this.type);
      if (currentTarget === target) {
        this.eventPhase = this.AT_TARGET;
      } else {
        this.eventPhase = this.BUBBLING_PHASE;
      }
      this.currentTarget = currentTarget;
      this.target = target;
      for (const [listener, options] of listeners) {
        if (options && options.once)
          listeners.delete(listener);
        if (dispatch(this, listener))
          break;
      }
      delete this.currentTarget;
      delete this.target;
      return this.cancelBubble;
    }
  }
  var DOMEventTarget = class {
    constructor() {
      wm.set(this, /* @__PURE__ */ new Map());
    }
    _getParent() {
      return null;
    }
    addEventListener(type, listener, options) {
      const map = wm.get(this);
      if (!map.has(type))
        map.set(type, /* @__PURE__ */ new Map());
      map.get(type).set(listener, options);
    }
    removeEventListener(type, listener) {
      const map = wm.get(this);
      if (map.has(type)) {
        const listeners = map.get(type);
        if (listeners.delete(listener) && !listeners.size)
          map.delete(type);
      }
    }
    dispatchEvent(event) {
      let node = this;
      event.eventPhase = event.CAPTURING_PHASE;
      while (node) {
        if (node.dispatchEvent)
          event._path.push({ currentTarget: node, target: this });
        node = event.bubbles && node._getParent && node._getParent();
      }
      event._path.some(invokeListeners, event);
      event._path = [];
      event.eventPhase = event.NONE;
      return !event.defaultPrevented;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/node-list.js
  var NodeList = class extends Array {
    item(i) {
      return i < this.length ? this[i] : null;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/node.js
  var getParentNodeCount = ({ parentNode }) => {
    let count = 0;
    while (parentNode) {
      count++;
      parentNode = parentNode.parentNode;
    }
    return count;
  };
  var Node2 = class extends DOMEventTarget {
    static get ELEMENT_NODE() {
      return ELEMENT_NODE;
    }
    static get ATTRIBUTE_NODE() {
      return ATTRIBUTE_NODE;
    }
    static get TEXT_NODE() {
      return TEXT_NODE;
    }
    static get COMMENT_NODE() {
      return COMMENT_NODE;
    }
    static get DOCUMENT_NODE() {
      return DOCUMENT_NODE;
    }
    static get DOCUMENT_FRAGMENT_NODE() {
      return DOCUMENT_FRAGMENT_NODE;
    }
    static get DOCUMENT_TYPE_NODE() {
      return DOCUMENT_TYPE_NODE;
    }
    constructor(ownerDocument, localName, nodeType) {
      super();
      this.ownerDocument = ownerDocument;
      this.localName = localName;
      this.nodeType = nodeType;
      this.parentNode = null;
      this[NEXT] = null;
      this[PREV] = null;
    }
    get ELEMENT_NODE() {
      return ELEMENT_NODE;
    }
    get ATTRIBUTE_NODE() {
      return ATTRIBUTE_NODE;
    }
    get TEXT_NODE() {
      return TEXT_NODE;
    }
    get COMMENT_NODE() {
      return COMMENT_NODE;
    }
    get DOCUMENT_NODE() {
      return DOCUMENT_NODE;
    }
    get DOCUMENT_FRAGMENT_NODE() {
      return DOCUMENT_FRAGMENT_NODE;
    }
    get DOCUMENT_TYPE_NODE() {
      return DOCUMENT_TYPE_NODE;
    }
    get baseURI() {
      const ownerDocument = this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument;
      if (ownerDocument) {
        const base = ownerDocument.querySelector("base");
        if (base)
          return base.getAttribute("href");
        const { location } = ownerDocument.defaultView;
        if (location)
          return location.href;
      }
      return null;
    }
    get isConnected() {
      return false;
    }
    get nodeName() {
      return this.localName;
    }
    get parentElement() {
      return null;
    }
    get previousSibling() {
      return null;
    }
    get previousElementSibling() {
      return null;
    }
    get nextSibling() {
      return null;
    }
    get nextElementSibling() {
      return null;
    }
    get childNodes() {
      return new NodeList();
    }
    get firstChild() {
      return null;
    }
    get lastChild() {
      return null;
    }
    get nodeValue() {
      return null;
    }
    set nodeValue(value) {
    }
    get textContent() {
      return null;
    }
    set textContent(value) {
    }
    normalize() {
    }
    cloneNode() {
      return null;
    }
    contains() {
      return false;
    }
    insertBefore(newNode, referenceNode) {
      return newNode;
    }
    appendChild(child) {
      return child;
    }
    replaceChild(newChild, oldChild) {
      return oldChild;
    }
    removeChild(child) {
      return child;
    }
    toString() {
      return "";
    }
    hasChildNodes() {
      return !!this.lastChild;
    }
    isSameNode(node) {
      return this === node;
    }
    compareDocumentPosition(target) {
      let result = 0;
      if (this !== target) {
        let self = getParentNodeCount(this);
        let other = getParentNodeCount(target);
        if (self < other) {
          result += DOCUMENT_POSITION_FOLLOWING;
          if (this.contains(target))
            result += DOCUMENT_POSITION_CONTAINED_BY;
        } else if (other < self) {
          result += DOCUMENT_POSITION_PRECEDING;
          if (target.contains(this))
            result += DOCUMENT_POSITION_CONTAINS;
        } else if (self && other) {
          const { childNodes } = this.parentNode;
          if (childNodes.indexOf(this) < childNodes.indexOf(target))
            result += DOCUMENT_POSITION_FOLLOWING;
          else
            result += DOCUMENT_POSITION_PRECEDING;
        }
        if (!self || !other) {
          result += DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
          result += DOCUMENT_POSITION_DISCONNECTED;
        }
      }
      return result;
    }
    isEqualNode(node) {
      if (this === node)
        return true;
      if (this.nodeType === node.nodeType) {
        switch (this.nodeType) {
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE: {
            const aNodes = this.childNodes;
            const bNodes = node.childNodes;
            return aNodes.length === bNodes.length && aNodes.every((node2, i) => node2.isEqualNode(bNodes[i]));
          }
        }
        return this.toString() === node.toString();
      }
      return false;
    }
    _getParent() {
      return this.parentNode;
    }
    getRootNode() {
      let root = this;
      while (root.parentNode)
        root = root.parentNode;
      return root.nodeType === DOCUMENT_NODE ? root.documentElement : root;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/attr.js
  var QUOTE = /"/g;
  var Attr = class extends Node2 {
    constructor(ownerDocument, name, value = "") {
      super(ownerDocument, "#attribute", ATTRIBUTE_NODE);
      this.ownerElement = null;
      this.name = $String(name);
      this[VALUE] = $String(value);
      this[CHANGED] = false;
    }
    get value() {
      return this[VALUE];
    }
    set value(newValue) {
      const { [VALUE]: oldValue, name, ownerElement } = this;
      this[VALUE] = $String(newValue);
      this[CHANGED] = true;
      if (ownerElement) {
        attributeChangedCallback2(ownerElement, name, oldValue);
        attributeChangedCallback(ownerElement, name, oldValue, this[VALUE]);
      }
    }
    cloneNode() {
      const { ownerDocument, name, [VALUE]: value } = this;
      return new Attr(ownerDocument, name, value);
    }
    toString() {
      const { name, [VALUE]: value } = this;
      return emptyAttributes.has(name) && !value ? name : `${name}="${value.replace(QUOTE, "&quot;")}"`;
    }
    toJSON() {
      const json = [];
      attrAsJSON(this, json);
      return json;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/node.js
  var isConnected = ({ ownerDocument, parentNode }) => {
    while (parentNode) {
      if (parentNode === ownerDocument)
        return true;
      parentNode = parentNode.parentNode || parentNode.host;
    }
    return false;
  };
  var parentElement = ({ parentNode }) => {
    if (parentNode) {
      switch (parentNode.nodeType) {
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          return null;
      }
    }
    return parentNode;
  };
  var previousSibling = ({ [PREV]: prev }) => {
    switch (prev ? prev.nodeType : 0) {
      case NODE_END:
        return prev[START];
      case TEXT_NODE:
      case COMMENT_NODE:
        return prev;
    }
    return null;
  };
  var nextSibling = (node) => {
    const next = getEnd(node)[NEXT];
    return next && (next.nodeType === NODE_END ? null : next);
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/mixin/non-document-type-child-node.js
  var nextElementSibling2 = (node) => {
    let next = nextSibling(node);
    while (next && next.nodeType !== ELEMENT_NODE)
      next = nextSibling(next);
    return next;
  };
  var previousElementSibling = (node) => {
    let prev = previousSibling(node);
    while (prev && prev.nodeType !== ELEMENT_NODE)
      prev = previousSibling(prev);
    return prev;
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/mixin/child-node.js
  var asFragment = (ownerDocument, nodes) => {
    const fragment = ownerDocument.createDocumentFragment();
    fragment.append(...nodes);
    return fragment;
  };
  var before = (node, nodes) => {
    const { ownerDocument, parentNode } = node;
    if (parentNode)
      parentNode.insertBefore(
        asFragment(ownerDocument, nodes),
        node
      );
  };
  var after = (node, nodes) => {
    const { ownerDocument, parentNode } = node;
    if (parentNode)
      parentNode.insertBefore(
        asFragment(ownerDocument, nodes),
        getEnd(node)[NEXT]
      );
  };
  var replaceWith = (node, nodes) => {
    const { ownerDocument, parentNode } = node;
    if (parentNode) {
      parentNode.insertBefore(
        asFragment(ownerDocument, nodes),
        node
      );
      node.remove();
    }
  };
  var remove = (prev, current, next) => {
    const { parentNode, nodeType } = current;
    if (prev || next) {
      setAdjacent(prev, next);
      current[PREV] = null;
      getEnd(current)[NEXT] = null;
    }
    if (parentNode) {
      current.parentNode = null;
      moCallback(current, parentNode);
      if (nodeType === ELEMENT_NODE)
        disconnectedCallback(current);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/character-data.js
  var CharacterData = class extends Node2 {
    constructor(ownerDocument, localName, nodeType, data) {
      super(ownerDocument, localName, nodeType);
      this[VALUE] = $String(data);
    }
    get isConnected() {
      return isConnected(this);
    }
    get parentElement() {
      return parentElement(this);
    }
    get previousSibling() {
      return previousSibling(this);
    }
    get nextSibling() {
      return nextSibling(this);
    }
    get previousElementSibling() {
      return previousElementSibling(this);
    }
    get nextElementSibling() {
      return nextElementSibling2(this);
    }
    before(...nodes) {
      before(this, nodes);
    }
    after(...nodes) {
      after(this, nodes);
    }
    replaceWith(...nodes) {
      replaceWith(this, nodes);
    }
    remove() {
      remove(this[PREV], this, this[NEXT]);
    }
    get data() {
      return this[VALUE];
    }
    set data(value) {
      this[VALUE] = $String(value);
      moCallback(this, this.parentNode);
    }
    get nodeValue() {
      return this.data;
    }
    set nodeValue(value) {
      this.data = value;
    }
    get textContent() {
      return this.data;
    }
    set textContent(value) {
      this.data = value;
    }
    get length() {
      return this.data.length;
    }
    substringData(offset, count) {
      return this.data.substr(offset, count);
    }
    appendData(data) {
      this.data += data;
    }
    insertData(offset, data) {
      const { data: t } = this;
      this.data = t.slice(0, offset) + data + t.slice(offset);
    }
    deleteData(offset, count) {
      const { data: t } = this;
      this.data = t.slice(0, offset) + t.slice(offset + count);
    }
    replaceData(offset, count, data) {
      const { data: t } = this;
      this.data = t.slice(0, offset) + data + t.slice(offset + count);
    }
    toJSON() {
      const json = [];
      characterDataAsJSON(this, json);
      return json;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/comment.js
  var Comment3 = class extends CharacterData {
    constructor(ownerDocument, data = "") {
      super(ownerDocument, "#comment", COMMENT_NODE, data);
    }
    cloneNode() {
      const { ownerDocument, [VALUE]: data } = this;
      return new Comment3(ownerDocument, data);
    }
    toString() {
      return `<!--${this[VALUE]}-->`;
    }
  };

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/index.js
  var import_boolbase6 = __toESM(require_boolbase(), 1);

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/compile.js
  var import_css_what4 = __toESM(require_commonjs(), 1);
  var import_boolbase5 = __toESM(require_boolbase(), 1);

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/sort.js
  var import_css_what = __toESM(require_commonjs(), 1);
  var procedure = /* @__PURE__ */ new Map([
    [import_css_what.SelectorType.Universal, 50],
    [import_css_what.SelectorType.Tag, 30],
    [import_css_what.SelectorType.Attribute, 1],
    [import_css_what.SelectorType.Pseudo, 0]
  ]);
  function isTraversal(token) {
    return !procedure.has(token.type);
  }
  var attributes = /* @__PURE__ */ new Map([
    [import_css_what.AttributeAction.Exists, 10],
    [import_css_what.AttributeAction.Equals, 8],
    [import_css_what.AttributeAction.Not, 7],
    [import_css_what.AttributeAction.Start, 6],
    [import_css_what.AttributeAction.End, 6],
    [import_css_what.AttributeAction.Any, 5]
  ]);
  function sortByProcedure(arr) {
    const procs = arr.map(getProcedure);
    for (let i = 1; i < arr.length; i++) {
      const procNew = procs[i];
      if (procNew < 0)
        continue;
      for (let j = i - 1; j >= 0 && procNew < procs[j]; j--) {
        const token = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = token;
        procs[j + 1] = procs[j];
        procs[j] = procNew;
      }
    }
  }
  function getProcedure(token) {
    var _a2, _b;
    let proc = (_a2 = procedure.get(token.type)) !== null && _a2 !== void 0 ? _a2 : -1;
    if (token.type === import_css_what.SelectorType.Attribute) {
      proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
      if (token.action === import_css_what.AttributeAction.Equals && token.name === "id") {
        proc = 9;
      }
      if (token.ignoreCase) {
        proc >>= 1;
      }
    } else if (token.type === import_css_what.SelectorType.Pseudo) {
      if (!token.data) {
        proc = 3;
      } else if (token.name === "has" || token.name === "contains") {
        proc = 0;
      } else if (Array.isArray(token.data)) {
        proc = Math.min(...token.data.map((d) => Math.min(...d.map(getProcedure))));
        if (proc < 0) {
          proc = 0;
        }
      } else {
        proc = 2;
      }
    }
    return proc;
  }

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/attributes.js
  var import_boolbase = __toESM(require_boolbase(), 1);
  var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
  function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
  }
  var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink"
  ]);
  function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
  }
  var attributeRules = {
    equals(next, data, options) {
      const { adapter: adapter2 } = options;
      const { name } = data;
      let { value } = data;
      if (shouldIgnoreCase(data, options)) {
        value = value.toLowerCase();
        return (elem) => {
          const attr = adapter2.getAttributeValue(elem, name);
          return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
        };
      }
      return (elem) => adapter2.getAttributeValue(elem, name) === value && next(elem);
    },
    hyphen(next, data, options) {
      const { adapter: adapter2 } = options;
      const { name } = data;
      let { value } = data;
      const len = value.length;
      if (shouldIgnoreCase(data, options)) {
        value = value.toLowerCase();
        return function hyphenIC(elem) {
          const attr = adapter2.getAttributeValue(elem, name);
          return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
        };
      }
      return function hyphen(elem) {
        const attr = adapter2.getAttributeValue(elem, name);
        return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
      };
    },
    element(next, data, options) {
      const { adapter: adapter2 } = options;
      const { name, value } = data;
      if (/\s/.test(value)) {
        return import_boolbase.default.falseFunc;
      }
      const regex = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data, options) ? "i" : "");
      return function element(elem) {
        const attr = adapter2.getAttributeValue(elem, name);
        return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
      };
    },
    exists(next, { name }, { adapter: adapter2 }) {
      return (elem) => adapter2.hasAttrib(elem, name) && next(elem);
    },
    start(next, data, options) {
      const { adapter: adapter2 } = options;
      const { name } = data;
      let { value } = data;
      const len = value.length;
      if (len === 0) {
        return import_boolbase.default.falseFunc;
      }
      if (shouldIgnoreCase(data, options)) {
        value = value.toLowerCase();
        return (elem) => {
          const attr = adapter2.getAttributeValue(elem, name);
          return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
        };
      }
      return (elem) => {
        var _a2;
        return !!((_a2 = adapter2.getAttributeValue(elem, name)) === null || _a2 === void 0 ? void 0 : _a2.startsWith(value)) && next(elem);
      };
    },
    end(next, data, options) {
      const { adapter: adapter2 } = options;
      const { name } = data;
      let { value } = data;
      const len = -value.length;
      if (len === 0) {
        return import_boolbase.default.falseFunc;
      }
      if (shouldIgnoreCase(data, options)) {
        value = value.toLowerCase();
        return (elem) => {
          var _a2;
          return ((_a2 = adapter2.getAttributeValue(elem, name)) === null || _a2 === void 0 ? void 0 : _a2.substr(len).toLowerCase()) === value && next(elem);
        };
      }
      return (elem) => {
        var _a2;
        return !!((_a2 = adapter2.getAttributeValue(elem, name)) === null || _a2 === void 0 ? void 0 : _a2.endsWith(value)) && next(elem);
      };
    },
    any(next, data, options) {
      const { adapter: adapter2 } = options;
      const { name, value } = data;
      if (value === "") {
        return import_boolbase.default.falseFunc;
      }
      if (shouldIgnoreCase(data, options)) {
        const regex = new RegExp(escapeRegex(value), "i");
        return function anyIC(elem) {
          const attr = adapter2.getAttributeValue(elem, name);
          return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
      }
      return (elem) => {
        var _a2;
        return !!((_a2 = adapter2.getAttributeValue(elem, name)) === null || _a2 === void 0 ? void 0 : _a2.includes(value)) && next(elem);
      };
    },
    not(next, data, options) {
      const { adapter: adapter2 } = options;
      const { name } = data;
      let { value } = data;
      if (value === "") {
        return (elem) => !!adapter2.getAttributeValue(elem, name) && next(elem);
      } else if (shouldIgnoreCase(data, options)) {
        value = value.toLowerCase();
        return (elem) => {
          const attr = adapter2.getAttributeValue(elem, name);
          return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
        };
      }
      return (elem) => adapter2.getAttributeValue(elem, name) !== value && next(elem);
    }
  };

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/pseudo-selectors/index.js
  var import_css_what2 = __toESM(require_commonjs(), 1);

  // node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/parse.js
  var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
  var ZERO = "0".charCodeAt(0);
  var NINE = "9".charCodeAt(0);
  function parse(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
      return [2, 0];
    } else if (formula === "odd") {
      return [2, 1];
    }
    let idx = 0;
    let a = 0;
    let sign = readSign();
    let number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
      idx++;
      a = sign * (number !== null && number !== void 0 ? number : 1);
      skipWhitespace();
      if (idx < formula.length) {
        sign = readSign();
        skipWhitespace();
        number = readNumber();
      } else {
        sign = number = 0;
      }
    }
    if (number === null || idx < formula.length) {
      throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
    }
    return [a, sign * number];
    function readSign() {
      if (formula.charAt(idx) === "-") {
        idx++;
        return -1;
      }
      if (formula.charAt(idx) === "+") {
        idx++;
      }
      return 1;
    }
    function readNumber() {
      const start = idx;
      let value = 0;
      while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
        value = value * 10 + (formula.charCodeAt(idx) - ZERO);
        idx++;
      }
      return idx === start ? null : value;
    }
    function skipWhitespace() {
      while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
        idx++;
      }
    }
  }

  // node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/compile.js
  var import_boolbase2 = __toESM(require_boolbase(), 1);
  function compile(parsed) {
    const a = parsed[0];
    const b = parsed[1] - 1;
    if (b < 0 && a <= 0)
      return import_boolbase2.default.falseFunc;
    if (a === -1)
      return (index) => index <= b;
    if (a === 0)
      return (index) => index === b;
    if (a === 1)
      return b < 0 ? import_boolbase2.default.trueFunc : (index) => index >= b;
    const absA = Math.abs(a);
    const bMod = (b % absA + absA) % absA;
    return a > 1 ? (index) => index >= b && index % absA === bMod : (index) => index <= b && index % absA === bMod;
  }

  // node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/index.js
  function nthCheck(formula) {
    return compile(parse(formula));
  }

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/pseudo-selectors/filters.js
  var import_boolbase3 = __toESM(require_boolbase(), 1);
  function getChildFunc(next, adapter2) {
    return (elem) => {
      const parent = adapter2.getParent(elem);
      return parent != null && adapter2.isTag(parent) && next(elem);
    };
  }
  var filters = {
    contains(next, text, { adapter: adapter2 }) {
      return function contains(elem) {
        return next(elem) && adapter2.getText(elem).includes(text);
      };
    },
    icontains(next, text, { adapter: adapter2 }) {
      const itext = text.toLowerCase();
      return function icontains(elem) {
        return next(elem) && adapter2.getText(elem).toLowerCase().includes(itext);
      };
    },
    "nth-child"(next, rule, { adapter: adapter2, equals }) {
      const func = nthCheck(rule);
      if (func === import_boolbase3.default.falseFunc)
        return import_boolbase3.default.falseFunc;
      if (func === import_boolbase3.default.trueFunc)
        return getChildFunc(next, adapter2);
      return function nthChild(elem) {
        const siblings = adapter2.getSiblings(elem);
        let pos = 0;
        for (let i = 0; i < siblings.length; i++) {
          if (equals(elem, siblings[i]))
            break;
          if (adapter2.isTag(siblings[i])) {
            pos++;
          }
        }
        return func(pos) && next(elem);
      };
    },
    "nth-last-child"(next, rule, { adapter: adapter2, equals }) {
      const func = nthCheck(rule);
      if (func === import_boolbase3.default.falseFunc)
        return import_boolbase3.default.falseFunc;
      if (func === import_boolbase3.default.trueFunc)
        return getChildFunc(next, adapter2);
      return function nthLastChild(elem) {
        const siblings = adapter2.getSiblings(elem);
        let pos = 0;
        for (let i = siblings.length - 1; i >= 0; i--) {
          if (equals(elem, siblings[i]))
            break;
          if (adapter2.isTag(siblings[i])) {
            pos++;
          }
        }
        return func(pos) && next(elem);
      };
    },
    "nth-of-type"(next, rule, { adapter: adapter2, equals }) {
      const func = nthCheck(rule);
      if (func === import_boolbase3.default.falseFunc)
        return import_boolbase3.default.falseFunc;
      if (func === import_boolbase3.default.trueFunc)
        return getChildFunc(next, adapter2);
      return function nthOfType(elem) {
        const siblings = adapter2.getSiblings(elem);
        let pos = 0;
        for (let i = 0; i < siblings.length; i++) {
          const currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            break;
          if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === adapter2.getName(elem)) {
            pos++;
          }
        }
        return func(pos) && next(elem);
      };
    },
    "nth-last-of-type"(next, rule, { adapter: adapter2, equals }) {
      const func = nthCheck(rule);
      if (func === import_boolbase3.default.falseFunc)
        return import_boolbase3.default.falseFunc;
      if (func === import_boolbase3.default.trueFunc)
        return getChildFunc(next, adapter2);
      return function nthLastOfType(elem) {
        const siblings = adapter2.getSiblings(elem);
        let pos = 0;
        for (let i = siblings.length - 1; i >= 0; i--) {
          const currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            break;
          if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === adapter2.getName(elem)) {
            pos++;
          }
        }
        return func(pos) && next(elem);
      };
    },
    root(next, _rule, { adapter: adapter2 }) {
      return (elem) => {
        const parent = adapter2.getParent(elem);
        return (parent == null || !adapter2.isTag(parent)) && next(elem);
      };
    },
    scope(next, rule, options, context) {
      const { equals } = options;
      if (!context || context.length === 0) {
        return filters["root"](next, rule, options);
      }
      if (context.length === 1) {
        return (elem) => equals(context[0], elem) && next(elem);
      }
      return (elem) => context.includes(elem) && next(elem);
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive")
  };
  function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, { adapter: adapter2 }) {
      const func = adapter2[name];
      if (typeof func !== "function") {
        return import_boolbase3.default.falseFunc;
      }
      return function active(elem) {
        return func(elem) && next(elem);
      };
    };
  }

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js
  var pseudos = {
    empty(elem, { adapter: adapter2 }) {
      return !adapter2.getChildren(elem).some((elem2) => adapter2.isTag(elem2) || adapter2.getText(elem2) !== "");
    },
    "first-child"(elem, { adapter: adapter2, equals }) {
      if (adapter2.prevElementSibling) {
        return adapter2.prevElementSibling(elem) == null;
      }
      const firstChild = adapter2.getSiblings(elem).find((elem2) => adapter2.isTag(elem2));
      return firstChild != null && equals(elem, firstChild);
    },
    "last-child"(elem, { adapter: adapter2, equals }) {
      const siblings = adapter2.getSiblings(elem);
      for (let i = siblings.length - 1; i >= 0; i--) {
        if (equals(elem, siblings[i]))
          return true;
        if (adapter2.isTag(siblings[i]))
          break;
      }
      return false;
    },
    "first-of-type"(elem, { adapter: adapter2, equals }) {
      const siblings = adapter2.getSiblings(elem);
      const elemName = adapter2.getName(elem);
      for (let i = 0; i < siblings.length; i++) {
        const currentSibling = siblings[i];
        if (equals(elem, currentSibling))
          return true;
        if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === elemName) {
          break;
        }
      }
      return false;
    },
    "last-of-type"(elem, { adapter: adapter2, equals }) {
      const siblings = adapter2.getSiblings(elem);
      const elemName = adapter2.getName(elem);
      for (let i = siblings.length - 1; i >= 0; i--) {
        const currentSibling = siblings[i];
        if (equals(elem, currentSibling))
          return true;
        if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === elemName) {
          break;
        }
      }
      return false;
    },
    "only-of-type"(elem, { adapter: adapter2, equals }) {
      const elemName = adapter2.getName(elem);
      return adapter2.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter2.isTag(sibling) || adapter2.getName(sibling) !== elemName);
    },
    "only-child"(elem, { adapter: adapter2, equals }) {
      return adapter2.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter2.isTag(sibling));
    }
  };
  function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
      if (func.length > argIndex) {
        throw new Error(`Pseudo-class :${name} requires an argument`);
      }
    } else if (func.length === argIndex) {
      throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
    }
  }

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/pseudo-selectors/aliases.js
  var aliases = {
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])"
  };

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js
  var import_boolbase4 = __toESM(require_boolbase(), 1);
  var PLACEHOLDER_ELEMENT = {};
  function ensureIsTag(next, adapter2) {
    if (next === import_boolbase4.default.falseFunc)
      return import_boolbase4.default.falseFunc;
    return (elem) => adapter2.isTag(elem) && next(elem);
  }
  function getNextSiblings(elem, adapter2) {
    const siblings = adapter2.getSiblings(elem);
    if (siblings.length <= 1)
      return [];
    const elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1)
      return [];
    return siblings.slice(elemIndex + 1).filter(adapter2.isTag);
  }
  function copyOptions(options) {
    return {
      xmlMode: !!options.xmlMode,
      lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
      lowerCaseTags: !!options.lowerCaseTags,
      quirksMode: !!options.quirksMode,
      cacheResults: !!options.cacheResults,
      pseudos: options.pseudos,
      adapter: options.adapter,
      equals: options.equals
    };
  }
  var is = (next, token, options, context, compileToken2) => {
    const func = compileToken2(token, copyOptions(options), context);
    return func === import_boolbase4.default.trueFunc ? next : func === import_boolbase4.default.falseFunc ? import_boolbase4.default.falseFunc : (elem) => func(elem) && next(elem);
  };
  var subselects = {
    is,
    matches: is,
    where: is,
    not(next, token, options, context, compileToken2) {
      const func = compileToken2(token, copyOptions(options), context);
      return func === import_boolbase4.default.falseFunc ? next : func === import_boolbase4.default.trueFunc ? import_boolbase4.default.falseFunc : (elem) => !func(elem) && next(elem);
    },
    has(next, subselect, options, _context, compileToken2) {
      const { adapter: adapter2 } = options;
      const opts = copyOptions(options);
      opts.relativeSelector = true;
      const context = subselect.some((s) => s.some(isTraversal)) ? [PLACEHOLDER_ELEMENT] : void 0;
      const compiled = compileToken2(subselect, opts, context);
      if (compiled === import_boolbase4.default.falseFunc)
        return import_boolbase4.default.falseFunc;
      const hasElement = ensureIsTag(compiled, adapter2);
      if (context && compiled !== import_boolbase4.default.trueFunc) {
        const { shouldTestNextSiblings = false } = compiled;
        return (elem) => {
          if (!next(elem))
            return false;
          context[0] = elem;
          const childs = adapter2.getChildren(elem);
          const nextElements = shouldTestNextSiblings ? [...childs, ...getNextSiblings(elem, adapter2)] : childs;
          return adapter2.existsOne(hasElement, nextElements);
        };
      }
      return (elem) => next(elem) && adapter2.existsOne(hasElement, adapter2.getChildren(elem));
    }
  };

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/pseudo-selectors/index.js
  function compilePseudoSelector(next, selector, options, context, compileToken2) {
    var _a2;
    const { name, data } = selector;
    if (Array.isArray(data)) {
      if (!(name in subselects)) {
        throw new Error(`Unknown pseudo-class :${name}(${data})`);
      }
      return subselects[name](next, data, options, context, compileToken2);
    }
    const userPseudo = (_a2 = options.pseudos) === null || _a2 === void 0 ? void 0 : _a2[name];
    const stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases[name];
    if (typeof stringPseudo === "string") {
      if (data != null) {
        throw new Error(`Pseudo ${name} doesn't have any arguments`);
      }
      const alias = (0, import_css_what2.parse)(stringPseudo);
      return subselects["is"](next, alias, options, context, compileToken2);
    }
    if (typeof userPseudo === "function") {
      verifyPseudoArgs(userPseudo, name, data, 1);
      return (elem) => userPseudo(elem, data) && next(elem);
    }
    if (name in filters) {
      return filters[name](next, data, options, context);
    }
    if (name in pseudos) {
      const pseudo = pseudos[name];
      verifyPseudoArgs(pseudo, name, data, 2);
      return (elem) => pseudo(elem, options, data) && next(elem);
    }
    throw new Error(`Unknown pseudo-class :${name}`);
  }

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/general.js
  var import_css_what3 = __toESM(require_commonjs(), 1);
  function getElementParent(node, adapter2) {
    const parent = adapter2.getParent(node);
    if (parent && adapter2.isTag(parent)) {
      return parent;
    }
    return null;
  }
  function compileGeneralSelector(next, selector, options, context, compileToken2) {
    const { adapter: adapter2, equals } = options;
    switch (selector.type) {
      case import_css_what3.SelectorType.PseudoElement: {
        throw new Error("Pseudo-elements are not supported by css-select");
      }
      case import_css_what3.SelectorType.ColumnCombinator: {
        throw new Error("Column combinators are not yet supported by css-select");
      }
      case import_css_what3.SelectorType.Attribute: {
        if (selector.namespace != null) {
          throw new Error("Namespaced attributes are not yet supported by css-select");
        }
        if (!options.xmlMode || options.lowerCaseAttributeNames) {
          selector.name = selector.name.toLowerCase();
        }
        return attributeRules[selector.action](next, selector, options);
      }
      case import_css_what3.SelectorType.Pseudo: {
        return compilePseudoSelector(next, selector, options, context, compileToken2);
      }
      case import_css_what3.SelectorType.Tag: {
        if (selector.namespace != null) {
          throw new Error("Namespaced tag names are not yet supported by css-select");
        }
        let { name } = selector;
        if (!options.xmlMode || options.lowerCaseTags) {
          name = name.toLowerCase();
        }
        return function tag(elem) {
          return adapter2.getName(elem) === name && next(elem);
        };
      }
      case import_css_what3.SelectorType.Descendant: {
        if (options.cacheResults === false || typeof WeakSet === "undefined") {
          return function descendant(elem) {
            let current = elem;
            while (current = getElementParent(current, adapter2)) {
              if (next(current)) {
                return true;
              }
            }
            return false;
          };
        }
        const isFalseCache = /* @__PURE__ */ new WeakSet();
        return function cachedDescendant(elem) {
          let current = elem;
          while (current = getElementParent(current, adapter2)) {
            if (!isFalseCache.has(current)) {
              if (adapter2.isTag(current) && next(current)) {
                return true;
              }
              isFalseCache.add(current);
            }
          }
          return false;
        };
      }
      case "_flexibleDescendant": {
        return function flexibleDescendant(elem) {
          let current = elem;
          do {
            if (next(current))
              return true;
          } while (current = getElementParent(current, adapter2));
          return false;
        };
      }
      case import_css_what3.SelectorType.Parent: {
        return function parent(elem) {
          return adapter2.getChildren(elem).some((elem2) => adapter2.isTag(elem2) && next(elem2));
        };
      }
      case import_css_what3.SelectorType.Child: {
        return function child(elem) {
          const parent = adapter2.getParent(elem);
          return parent != null && adapter2.isTag(parent) && next(parent);
        };
      }
      case import_css_what3.SelectorType.Sibling: {
        return function sibling(elem) {
          const siblings = adapter2.getSiblings(elem);
          for (let i = 0; i < siblings.length; i++) {
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter2.isTag(currentSibling) && next(currentSibling)) {
              return true;
            }
          }
          return false;
        };
      }
      case import_css_what3.SelectorType.Adjacent: {
        if (adapter2.prevElementSibling) {
          return function adjacent(elem) {
            const previous = adapter2.prevElementSibling(elem);
            return previous != null && next(previous);
          };
        }
        return function adjacent(elem) {
          const siblings = adapter2.getSiblings(elem);
          let lastElement;
          for (let i = 0; i < siblings.length; i++) {
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter2.isTag(currentSibling)) {
              lastElement = currentSibling;
            }
          }
          return !!lastElement && next(lastElement);
        };
      }
      case import_css_what3.SelectorType.Universal: {
        if (selector.namespace != null && selector.namespace !== "*") {
          throw new Error("Namespaced universal selectors are not yet supported by css-select");
        }
        return next;
      }
    }
  }

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/compile.js
  function compile2(selector, options, context) {
    const next = compileUnsafe(selector, options, context);
    return ensureIsTag(next, options.adapter);
  }
  function compileUnsafe(selector, options, context) {
    const token = typeof selector === "string" ? (0, import_css_what4.parse)(selector) : selector;
    return compileToken(token, options, context);
  }
  function includesScopePseudo(t) {
    return t.type === import_css_what4.SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data) => data.some(includesScopePseudo)));
  }
  var DESCENDANT_TOKEN = { type: import_css_what4.SelectorType.Descendant };
  var FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant"
  };
  var SCOPE_TOKEN = {
    type: import_css_what4.SelectorType.Pseudo,
    name: "scope",
    data: null
  };
  function absolutize(token, { adapter: adapter2 }, context) {
    const hasContext = !!(context === null || context === void 0 ? void 0 : context.every((e) => {
      const parent = adapter2.isTag(e) && adapter2.getParent(e);
      return e === PLACEHOLDER_ELEMENT || parent && adapter2.isTag(parent);
    }));
    for (const t of token) {
      if (t.length > 0 && isTraversal(t[0]) && t[0].type !== import_css_what4.SelectorType.Descendant) {
      } else if (hasContext && !t.some(includesScopePseudo)) {
        t.unshift(DESCENDANT_TOKEN);
      } else {
        continue;
      }
      t.unshift(SCOPE_TOKEN);
    }
  }
  function compileToken(token, options, context) {
    var _a2;
    token.forEach(sortByProcedure);
    context = (_a2 = options.context) !== null && _a2 !== void 0 ? _a2 : context;
    const isArrayContext = Array.isArray(context);
    const finalContext = context && (Array.isArray(context) ? context : [context]);
    if (options.relativeSelector !== false) {
      absolutize(token, options, finalContext);
    } else if (token.some((t) => t.length > 0 && isTraversal(t[0]))) {
      throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    let shouldTestNextSiblings = false;
    const query2 = token.map((rules) => {
      if (rules.length >= 2) {
        const [first, second] = rules;
        if (first.type !== import_css_what4.SelectorType.Pseudo || first.name !== "scope") {
        } else if (isArrayContext && second.type === import_css_what4.SelectorType.Descendant) {
          rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
        } else if (second.type === import_css_what4.SelectorType.Adjacent || second.type === import_css_what4.SelectorType.Sibling) {
          shouldTestNextSiblings = true;
        }
      }
      return compileRules(rules, options, finalContext);
    }).reduce(reduceRules, import_boolbase5.default.falseFunc);
    query2.shouldTestNextSiblings = shouldTestNextSiblings;
    return query2;
  }
  function compileRules(rules, options, context) {
    var _a2;
    return rules.reduce((previous, rule) => previous === import_boolbase5.default.falseFunc ? import_boolbase5.default.falseFunc : compileGeneralSelector(previous, rule, options, context, compileToken), (_a2 = options.rootFunc) !== null && _a2 !== void 0 ? _a2 : import_boolbase5.default.trueFunc);
  }
  function reduceRules(a, b) {
    if (b === import_boolbase5.default.falseFunc || a === import_boolbase5.default.trueFunc) {
      return a;
    }
    if (a === import_boolbase5.default.falseFunc || b === import_boolbase5.default.trueFunc) {
      return b;
    }
    return function combine(elem) {
      return a(elem) || b(elem);
    };
  }

  // node_modules/.pnpm/css-select@5.1.0/node_modules/css-select/lib/esm/index.js
  var defaultEquals = (a, b) => a === b;
  var defaultOptions = {
    adapter: esm_exports2,
    equals: defaultEquals
  };
  function convertOptionFormats(options) {
    var _a2, _b, _c, _d;
    const opts = options !== null && options !== void 0 ? options : defaultOptions;
    (_a2 = opts.adapter) !== null && _a2 !== void 0 ? _a2 : opts.adapter = esm_exports2;
    (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
    return opts;
  }
  function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
      const opts = convertOptionFormats(options);
      return func(selector, opts, context);
    };
  }
  var compile3 = wrapCompile(compile2);
  var _compileUnsafe = wrapCompile(compileUnsafe);
  var _compileToken = wrapCompile(compileToken);
  function getSelectorFunc(searchFunc) {
    return function select(query2, elements, options) {
      const opts = convertOptionFormats(options);
      if (typeof query2 !== "function") {
        query2 = compileUnsafe(query2, opts, elements);
      }
      const filteredElements = prepareContext(elements, opts.adapter, query2.shouldTestNextSiblings);
      return searchFunc(query2, filteredElements, opts);
    };
  }
  function prepareContext(elems, adapter2, shouldTestNextSiblings = false) {
    if (shouldTestNextSiblings) {
      elems = appendNextSiblings(elems, adapter2);
    }
    return Array.isArray(elems) ? adapter2.removeSubsets(elems) : adapter2.getChildren(elems);
  }
  function appendNextSiblings(elem, adapter2) {
    const elems = Array.isArray(elem) ? elem.slice(0) : [elem];
    const elemsLength = elems.length;
    for (let i = 0; i < elemsLength; i++) {
      const nextSiblings = getNextSiblings(elems[i], adapter2);
      elems.push(...nextSiblings);
    }
    return elems;
  }
  var selectAll = getSelectorFunc((query2, elems, options) => query2 === import_boolbase6.default.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query2, elems));
  var selectOne = getSelectorFunc((query2, elems, options) => query2 === import_boolbase6.default.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query2, elems));
  function is2(elem, query2, options) {
    const opts = convertOptionFormats(options);
    return (typeof query2 === "function" ? query2 : compile2(query2, opts))(elem);
  }

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/matches.js
  var { isArray } = Array;
  var isTag3 = ({ nodeType }) => nodeType === ELEMENT_NODE;
  var existsOne2 = (test, elements) => elements.some(
    (element) => isTag3(element) && (test(element) || existsOne2(test, getChildren2(element)))
  );
  var getAttributeValue2 = (element, name) => name === "class" ? element.classList.value : element.getAttribute(name);
  var getChildren2 = ({ childNodes }) => childNodes;
  var getName2 = (element) => {
    const { localName } = element;
    return ignoreCase(element) ? localName.toLowerCase() : localName;
  };
  var getParent2 = ({ parentNode }) => parentNode;
  var getSiblings2 = (element) => {
    const { parentNode } = element;
    return parentNode ? getChildren2(parentNode) : element;
  };
  var getText2 = (node) => {
    if (isArray(node))
      return node.map(getText2).join("");
    if (isTag3(node))
      return getText2(getChildren2(node));
    if (node.nodeType === TEXT_NODE)
      return node.data;
    return "";
  };
  var hasAttrib2 = (element, name) => element.hasAttribute(name);
  var removeSubsets2 = (nodes) => {
    let { length } = nodes;
    while (length--) {
      const node = nodes[length];
      if (length && -1 < nodes.lastIndexOf(node, length - 1)) {
        nodes.splice(length, 1);
        continue;
      }
      for (let { parentNode } = node; parentNode; parentNode = parentNode.parentNode) {
        if (nodes.includes(parentNode)) {
          nodes.splice(length, 1);
          break;
        }
      }
    }
    return nodes;
  };
  var findAll2 = (test, nodes) => {
    const matches2 = [];
    for (const node of nodes) {
      if (isTag3(node)) {
        if (test(node))
          matches2.push(node);
        matches2.push(...findAll2(test, getChildren2(node)));
      }
    }
    return matches2;
  };
  var findOne2 = (test, nodes) => {
    for (let node of nodes)
      if (test(node) || (node = findOne2(test, getChildren2(node))))
        return node;
    return null;
  };
  var adapter = {
    isTag: isTag3,
    existsOne: existsOne2,
    getAttributeValue: getAttributeValue2,
    getChildren: getChildren2,
    getName: getName2,
    getParent: getParent2,
    getSiblings: getSiblings2,
    getText: getText2,
    hasAttrib: hasAttrib2,
    removeSubsets: removeSubsets2,
    findAll: findAll2,
    findOne: findOne2
  };
  var prepareMatch = (element, selectors) => compile3(
    selectors,
    {
      context: selectors.includes(":scope") ? element : void 0,
      xmlMode: !ignoreCase(element),
      adapter
    }
  );
  var matches = (element, selectors) => is2(
    element,
    selectors,
    {
      strict: true,
      context: selectors.includes(":scope") ? element : void 0,
      xmlMode: !ignoreCase(element),
      adapter
    }
  );

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/text-escaper.js
  var { replace } = "";
  var ca = /[<>&\xA0]/g;
  var esca = {
    "\xA0": "&nbsp;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };
  var pe = (m) => esca[m];
  var escape2 = (es) => replace.call(es, ca, pe);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/text.js
  var Text3 = class extends CharacterData {
    constructor(ownerDocument, data = "") {
      super(ownerDocument, "#text", TEXT_NODE, data);
    }
    get wholeText() {
      const text = [];
      let { previousSibling: previousSibling2, nextSibling: nextSibling2 } = this;
      while (previousSibling2) {
        if (previousSibling2.nodeType === TEXT_NODE)
          text.unshift(previousSibling2[VALUE]);
        else
          break;
        previousSibling2 = previousSibling2.previousSibling;
      }
      text.push(this[VALUE]);
      while (nextSibling2) {
        if (nextSibling2.nodeType === TEXT_NODE)
          text.push(nextSibling2[VALUE]);
        else
          break;
        nextSibling2 = nextSibling2.nextSibling;
      }
      return text.join("");
    }
    cloneNode() {
      const { ownerDocument, [VALUE]: data } = this;
      return new Text3(ownerDocument, data);
    }
    toString() {
      return escape2(this[VALUE]);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/mixin/parent-node.js
  var isNode = (node) => node instanceof Node2;
  var insert = (parentNode, child, nodes) => {
    const { ownerDocument } = parentNode;
    for (const node of nodes)
      parentNode.insertBefore(
        isNode(node) ? node : new Text3(ownerDocument, node),
        child
      );
  };
  var ParentNode = class extends Node2 {
    constructor(ownerDocument, localName, nodeType) {
      super(ownerDocument, localName, nodeType);
      this[PRIVATE] = null;
      this[NEXT] = this[END] = {
        [NEXT]: null,
        [PREV]: this,
        [START]: this,
        nodeType: NODE_END,
        ownerDocument: this.ownerDocument,
        parentNode: null
      };
    }
    get childNodes() {
      const childNodes = new NodeList();
      let { firstChild } = this;
      while (firstChild) {
        childNodes.push(firstChild);
        firstChild = nextSibling(firstChild);
      }
      return childNodes;
    }
    get children() {
      const children = new NodeList();
      let { firstElementChild } = this;
      while (firstElementChild) {
        children.push(firstElementChild);
        firstElementChild = nextElementSibling2(firstElementChild);
      }
      return children;
    }
    get firstChild() {
      let { [NEXT]: next, [END]: end } = this;
      while (next.nodeType === ATTRIBUTE_NODE)
        next = next[NEXT];
      return next === end ? null : next;
    }
    get firstElementChild() {
      let { firstChild } = this;
      while (firstChild) {
        if (firstChild.nodeType === ELEMENT_NODE)
          return firstChild;
        firstChild = nextSibling(firstChild);
      }
      return null;
    }
    get lastChild() {
      const prev = this[END][PREV];
      switch (prev.nodeType) {
        case NODE_END:
          return prev[START];
        case ATTRIBUTE_NODE:
          return null;
      }
      return prev === this ? null : prev;
    }
    get lastElementChild() {
      let { lastChild } = this;
      while (lastChild) {
        if (lastChild.nodeType === ELEMENT_NODE)
          return lastChild;
        lastChild = previousSibling(lastChild);
      }
      return null;
    }
    get childElementCount() {
      return this.children.length;
    }
    prepend(...nodes) {
      insert(this, this.firstChild, nodes);
    }
    append(...nodes) {
      insert(this, this[END], nodes);
    }
    replaceChildren(...nodes) {
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end && next.nodeType === ATTRIBUTE_NODE)
        next = next[NEXT];
      while (next !== end) {
        const after2 = getEnd(next)[NEXT];
        next.remove();
        next = after2;
      }
      if (nodes.length)
        insert(this, end, nodes);
    }
    getElementsByClassName(className) {
      const elements = new NodeList();
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && next.hasAttribute("class") && next.classList.has(className))
          elements.push(next);
        next = next[NEXT];
      }
      return elements;
    }
    getElementsByTagName(tagName16) {
      const elements = new NodeList();
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && (next.localName === tagName16 || localCase(next) === tagName16))
          elements.push(next);
        next = next[NEXT];
      }
      return elements;
    }
    querySelector(selectors) {
      const matches2 = prepareMatch(this, selectors);
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && matches2(next))
          return next;
        next = next[NEXT];
      }
      return null;
    }
    querySelectorAll(selectors) {
      const matches2 = prepareMatch(this, selectors);
      const elements = new NodeList();
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && matches2(next))
          elements.push(next);
        next = next[NEXT];
      }
      return elements;
    }
    appendChild(node) {
      return this.insertBefore(node, this[END]);
    }
    contains(node) {
      let parentNode = node;
      while (parentNode && parentNode !== this)
        parentNode = parentNode.parentNode;
      return parentNode === this;
    }
    insertBefore(node, before2 = null) {
      if (node === before2)
        return node;
      if (node === this)
        throw new Error("unable to append a node to itself");
      const next = before2 || this[END];
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node.remove();
          node.parentNode = this;
          knownBoundaries(next[PREV], node, next);
          moCallback(node, null);
          connectedCallback(node);
          break;
        case DOCUMENT_FRAGMENT_NODE: {
          let { [PRIVATE]: parentNode, firstChild, lastChild } = node;
          if (firstChild) {
            knownSegment(next[PREV], firstChild, lastChild, next);
            knownAdjacent(node, node[END]);
            if (parentNode)
              parentNode.replaceChildren();
            do {
              firstChild.parentNode = this;
              moCallback(firstChild, null);
              if (firstChild.nodeType === ELEMENT_NODE)
                connectedCallback(firstChild);
            } while (firstChild !== lastChild && (firstChild = nextSibling(firstChild)));
          }
          break;
        }
        case TEXT_NODE:
        case COMMENT_NODE:
          node.remove();
        default:
          node.parentNode = this;
          knownSiblings(next[PREV], node, next);
          moCallback(node, null);
          break;
      }
      return node;
    }
    normalize() {
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        const { [NEXT]: $next, [PREV]: $prev, nodeType } = next;
        if (nodeType === TEXT_NODE) {
          if (!next[VALUE])
            next.remove();
          else if ($prev && $prev.nodeType === TEXT_NODE) {
            $prev.textContent += next.textContent;
            next.remove();
          }
        }
        next = $next;
      }
    }
    removeChild(node) {
      if (node.parentNode !== this)
        throw new Error("node is not a child");
      node.remove();
      return node;
    }
    replaceChild(node, replaced) {
      const next = getEnd(replaced)[NEXT];
      replaced.remove();
      this.insertBefore(node, next);
      return replaced;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/mixin/non-element-parent-node.js
  var NonElementParentNode = class extends ParentNode {
    getElementById(id) {
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === ELEMENT_NODE && next.id === id)
          return next;
        next = next[NEXT];
      }
      return null;
    }
    cloneNode(deep) {
      const { ownerDocument, constructor } = this;
      const nonEPN = new constructor(ownerDocument);
      if (deep) {
        const { [END]: end } = nonEPN;
        for (const node of this.childNodes)
          nonEPN.insertBefore(node.cloneNode(deep), end);
      }
      return nonEPN;
    }
    toString() {
      const { childNodes, localName } = this;
      return `<${localName}>${childNodes.join("")}</${localName}>`;
    }
    toJSON() {
      const json = [];
      nonElementAsJSON(this, json);
      return json;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/document-fragment.js
  var DocumentFragment = class extends NonElementParentNode {
    constructor(ownerDocument) {
      super(ownerDocument, "#document-fragment", DOCUMENT_FRAGMENT_NODE);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/document-type.js
  var DocumentType = class extends Node2 {
    constructor(ownerDocument, name, publicId = "", systemId = "") {
      super(ownerDocument, "#document-type", DOCUMENT_TYPE_NODE);
      this.name = name;
      this.publicId = publicId;
      this.systemId = systemId;
    }
    cloneNode() {
      const { ownerDocument, name, publicId, systemId } = this;
      return new DocumentType(ownerDocument, name, publicId, systemId);
    }
    toString() {
      const { name, publicId, systemId } = this;
      const hasPublic = 0 < publicId.length;
      const str = [name];
      if (hasPublic)
        str.push("PUBLIC", `"${publicId}"`);
      if (systemId.length) {
        if (!hasPublic)
          str.push("SYSTEM");
        str.push(`"${systemId}"`);
      }
      return `<!DOCTYPE ${str.join(" ")}>`;
    }
    toJSON() {
      const json = [];
      documentTypeAsJSON(this, json);
      return json;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/mixin/inner-html.js
  var getInnerHtml = (node) => node.childNodes.join("");
  var setInnerHtml = (node, html) => {
    const { ownerDocument } = node;
    const { constructor } = ownerDocument;
    const document2 = new constructor();
    document2[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
    const { childNodes } = parseFromString(document2, ignoreCase(node), html);
    node.replaceChildren(...childNodes);
  };

  // node_modules/.pnpm/uhyphen@0.1.0/node_modules/uhyphen/esm/index.js
  var esm_default2 = (camel) => camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g, "$2$5-$3$6").toLowerCase();

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/dom/string-map.js
  var refs = /* @__PURE__ */ new WeakMap();
  var key = (name) => `data-${esm_default2(name)}`;
  var prop = (name) => name.slice(5).replace(/-([a-z])/g, (_, $1) => $1.toUpperCase());
  var handler = {
    get(dataset, name) {
      if (name in dataset)
        return refs.get(dataset).getAttribute(key(name));
    },
    set(dataset, name, value) {
      dataset[name] = value;
      refs.get(dataset).setAttribute(key(name), value);
      return true;
    },
    deleteProperty(dataset, name) {
      if (name in dataset)
        refs.get(dataset).removeAttribute(key(name));
      return delete dataset[name];
    }
  };
  var DOMStringMap = class {
    constructor(ref) {
      for (const { name, value } of ref.attributes) {
        if (/^data-/.test(name))
          this[prop(name)] = value;
      }
      refs.set(this, ref);
      return new Proxy(this, handler);
    }
  };
  setPrototypeOf(DOMStringMap.prototype, null);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/dom/token-list.js
  var { add } = Set.prototype;
  var addTokens = (self, tokens) => {
    for (const token of tokens) {
      if (token)
        add.call(self, token);
    }
  };
  var update = ({ [OWNER_ELEMENT]: ownerElement, value }) => {
    const attribute2 = ownerElement.getAttributeNode("class");
    if (attribute2)
      attribute2.value = value;
    else
      setAttribute(
        ownerElement,
        new Attr(ownerElement.ownerDocument, "class", value)
      );
  };
  var DOMTokenList = class extends Set {
    constructor(ownerElement) {
      super();
      this[OWNER_ELEMENT] = ownerElement;
      const attribute2 = ownerElement.getAttributeNode("class");
      if (attribute2)
        addTokens(this, attribute2.value.split(/\s+/));
    }
    get length() {
      return this.size;
    }
    get value() {
      return [...this].join(" ");
    }
    add(...tokens) {
      addTokens(this, tokens);
      update(this);
    }
    contains(token) {
      return this.has(token);
    }
    remove(...tokens) {
      for (const token of tokens)
        this.delete(token);
      update(this);
    }
    toggle(token, force) {
      if (this.has(token)) {
        if (force)
          return true;
        this.delete(token);
        update(this);
      } else if (force || arguments.length === 1) {
        super.add(token);
        update(this);
        return true;
      }
      return false;
    }
    replace(token, newToken) {
      if (this.has(token)) {
        this.delete(token);
        super.add(newToken);
        update(this);
        return true;
      }
      return false;
    }
    supports() {
      return true;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/css-style-declaration.js
  var refs2 = /* @__PURE__ */ new WeakMap();
  var getKeys = (style) => [...style.keys()].filter((key2) => key2 !== PRIVATE);
  var updateKeys = (style) => {
    const attr = refs2.get(style).getAttributeNode("style");
    if (!attr || attr[CHANGED] || style.get(PRIVATE) !== attr) {
      style.clear();
      if (attr) {
        style.set(PRIVATE, attr);
        for (const rule of attr[VALUE].split(/\s*;\s*/)) {
          let [key2, ...rest] = rule.split(":");
          if (rest.length > 0) {
            key2 = key2.trim();
            const value = rest.join(":").trim();
            if (key2 && value)
              style.set(key2, value);
          }
        }
      }
    }
    return attr;
  };
  var handler2 = {
    get(style, name) {
      if (name in prototype)
        return style[name];
      updateKeys(style);
      if (name === "length")
        return getKeys(style).length;
      if (/^\d+$/.test(name))
        return getKeys(style)[name];
      return style.get(esm_default2(name));
    },
    set(style, name, value) {
      if (name === "cssText")
        style[name] = value;
      else {
        let attr = updateKeys(style);
        if (value == null)
          style.delete(esm_default2(name));
        else
          style.set(esm_default2(name), value);
        if (!attr) {
          const element = refs2.get(style);
          attr = element.ownerDocument.createAttribute("style");
          element.setAttributeNode(attr);
          style.set(PRIVATE, attr);
        }
        attr[CHANGED] = false;
        attr[VALUE] = style.toString();
      }
      return true;
    }
  };
  var CSSStyleDeclaration = class extends Map {
    constructor(element) {
      super();
      refs2.set(this, element);
      return new Proxy(this, handler2);
    }
    get cssText() {
      return this.toString();
    }
    set cssText(value) {
      refs2.get(this).setAttribute("style", value);
    }
    getPropertyValue(name) {
      const self = this[PRIVATE];
      return handler2.get(self, name);
    }
    setProperty(name, value) {
      const self = this[PRIVATE];
      handler2.set(self, name, value);
    }
    removeProperty(name) {
      const self = this[PRIVATE];
      handler2.set(self, name, null);
    }
    [Symbol.iterator]() {
      const keys2 = getKeys(this[PRIVATE]);
      const { length } = keys2;
      let i = 0;
      return {
        next() {
          const done = i === length;
          return { done, value: done ? null : keys2[i++] };
        }
      };
    }
    get [PRIVATE]() {
      return this;
    }
    toString() {
      const self = this[PRIVATE];
      updateKeys(self);
      const cssText = [];
      self.forEach(push, cssText);
      return cssText.join(";");
    }
  };
  var { prototype } = CSSStyleDeclaration;
  function push(value, key2) {
    if (key2 !== PRIVATE)
      this.push(`${key2}:${value}`);
  }

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/event.js
  var BUBBLING_PHASE = 3;
  var AT_TARGET = 2;
  var CAPTURING_PHASE = 1;
  var NONE = 0;
  var GlobalEvent = class {
    static get BUBBLING_PHASE() {
      return BUBBLING_PHASE;
    }
    static get AT_TARGET() {
      return AT_TARGET;
    }
    static get CAPTURING_PHASE() {
      return CAPTURING_PHASE;
    }
    static get NONE() {
      return NONE;
    }
    constructor(type, eventInitDict = {}) {
      this.type = type;
      this.bubbles = !!eventInitDict.bubbles;
      this.cancelBubble = false;
      this._stopImmediatePropagationFlag = false;
      this.cancelable = !!eventInitDict.cancelable;
      this.eventPhase = this.NONE;
      this.timeStamp = Date.now();
      this.defaultPrevented = false;
      this.originalTarget = null;
      this.returnValue = null;
      this.srcElement = null;
      this.target = null;
      this._path = [];
    }
    get BUBBLING_PHASE() {
      return BUBBLING_PHASE;
    }
    get AT_TARGET() {
      return AT_TARGET;
    }
    get CAPTURING_PHASE() {
      return CAPTURING_PHASE;
    }
    get NONE() {
      return NONE;
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
    composedPath() {
      return this._path;
    }
    stopPropagation() {
      this.cancelBubble = true;
    }
    stopImmediatePropagation() {
      this.stopPropagation();
      this._stopImmediatePropagationFlag = true;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/named-node-map.js
  var NamedNodeMap = class extends Array {
    constructor(ownerElement) {
      super();
      this.ownerElement = ownerElement;
    }
    getNamedItem(name) {
      return this.ownerElement.getAttributeNode(name);
    }
    setNamedItem(attr) {
      this.ownerElement.setAttributeNode(attr);
      this.unshift(attr);
    }
    removeNamedItem(name) {
      const item = this.getNamedItem(name);
      this.ownerElement.removeAttribute(name);
      this.splice(this.indexOf(item), 1);
    }
    item(index) {
      return index < this.length ? this[index] : null;
    }
    getNamedItemNS(_, name) {
      return this.getNamedItem(name);
    }
    setNamedItemNS(_, attr) {
      return this.setNamedItem(attr);
    }
    removeNamedItemNS(_, name) {
      return this.removeNamedItem(name);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/shadow-root.js
  var ShadowRoot = class extends NonElementParentNode {
    constructor(host) {
      super(host.ownerDocument, "#shadow-root", DOCUMENT_FRAGMENT_NODE);
      this.host = host;
    }
    get innerHTML() {
      return getInnerHtml(this);
    }
    set innerHTML(html) {
      setInnerHtml(this, html);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/element.js
  var attributesHandler = {
    get(target, key2) {
      return key2 in target ? target[key2] : target.find(({ name }) => name === key2);
    }
  };
  var create2 = (ownerDocument, element, localName) => {
    if ("ownerSVGElement" in element) {
      const svg = ownerDocument.createElementNS(SVG_NAMESPACE, localName);
      svg.ownerSVGElement = element.ownerSVGElement;
      return svg;
    }
    return ownerDocument.createElement(localName);
  };
  var isVoid = ({ localName, ownerDocument }) => {
    return ownerDocument[MIME].voidElements.test(localName);
  };
  var Element2 = class extends ParentNode {
    constructor(ownerDocument, localName) {
      super(ownerDocument, localName, ELEMENT_NODE);
      this[CLASS_LIST] = null;
      this[DATASET] = null;
      this[STYLE] = null;
    }
    get isConnected() {
      return isConnected(this);
    }
    get parentElement() {
      return parentElement(this);
    }
    get previousSibling() {
      return previousSibling(this);
    }
    get nextSibling() {
      return nextSibling(this);
    }
    get previousElementSibling() {
      return previousElementSibling(this);
    }
    get nextElementSibling() {
      return nextElementSibling2(this);
    }
    before(...nodes) {
      before(this, nodes);
    }
    after(...nodes) {
      after(this, nodes);
    }
    replaceWith(...nodes) {
      replaceWith(this, nodes);
    }
    remove() {
      remove(this[PREV], this, this[END][NEXT]);
    }
    get id() {
      return stringAttribute.get(this, "id");
    }
    set id(value) {
      stringAttribute.set(this, "id", value);
    }
    get className() {
      return this.classList.value;
    }
    set className(value) {
      const { classList } = this;
      classList.clear();
      classList.add(...value.split(/\s+/));
    }
    get nodeName() {
      return localCase(this);
    }
    get tagName() {
      return localCase(this);
    }
    get classList() {
      return this[CLASS_LIST] || (this[CLASS_LIST] = new DOMTokenList(this));
    }
    get dataset() {
      return this[DATASET] || (this[DATASET] = new DOMStringMap(this));
    }
    get nonce() {
      return stringAttribute.get(this, "nonce");
    }
    set nonce(value) {
      stringAttribute.set(this, "nonce", value);
    }
    get style() {
      return this[STYLE] || (this[STYLE] = new CSSStyleDeclaration(this));
    }
    get tabIndex() {
      return numericAttribute.get(this, "tabindex") || -1;
    }
    set tabIndex(value) {
      numericAttribute.set(this, "tabindex", value);
    }
    get innerText() {
      const text = [];
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === TEXT_NODE) {
          text.push(next.textContent.replace(/\s+/g, " "));
        } else if (text.length && next[NEXT] != end && BLOCK_ELEMENTS.has(next.tagName)) {
          text.push("\n");
        }
        next = next[NEXT];
      }
      return text.join("");
    }
    get textContent() {
      const text = [];
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        if (next.nodeType === TEXT_NODE)
          text.push(next.textContent);
        next = next[NEXT];
      }
      return text.join("");
    }
    set textContent(text) {
      this.replaceChildren();
      if (text)
        this.appendChild(new Text3(this.ownerDocument, text));
    }
    get innerHTML() {
      return getInnerHtml(this);
    }
    set innerHTML(html) {
      setInnerHtml(this, html);
    }
    get outerHTML() {
      return this.toString();
    }
    set outerHTML(html) {
      const template = this.ownerDocument.createElement("");
      template.innerHTML = html;
      this.replaceWith(...template.childNodes);
    }
    get attributes() {
      const attributes2 = new NamedNodeMap(this);
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        attributes2.push(next);
        next = next[NEXT];
      }
      return new Proxy(attributes2, attributesHandler);
    }
    focus() {
      this.dispatchEvent(new GlobalEvent("focus"));
    }
    getAttribute(name) {
      if (name === "class")
        return this.className;
      const attribute2 = this.getAttributeNode(name);
      return attribute2 && attribute2.value;
    }
    getAttributeNode(name) {
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        if (next.name === name)
          return next;
        next = next[NEXT];
      }
      return null;
    }
    getAttributeNames() {
      const attributes2 = new NodeList();
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        attributes2.push(next.name);
        next = next[NEXT];
      }
      return attributes2;
    }
    hasAttribute(name) {
      return !!this.getAttributeNode(name);
    }
    hasAttributes() {
      return this[NEXT].nodeType === ATTRIBUTE_NODE;
    }
    removeAttribute(name) {
      if (name === "class" && this[CLASS_LIST])
        this[CLASS_LIST].clear();
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        if (next.name === name) {
          removeAttribute(this, next);
          return;
        }
        next = next[NEXT];
      }
    }
    removeAttributeNode(attribute2) {
      let next = this[NEXT];
      while (next.nodeType === ATTRIBUTE_NODE) {
        if (next === attribute2) {
          removeAttribute(this, next);
          return;
        }
        next = next[NEXT];
      }
    }
    setAttribute(name, value) {
      if (name === "class")
        this.className = value;
      else {
        const attribute2 = this.getAttributeNode(name);
        if (attribute2)
          attribute2.value = value;
        else
          setAttribute(this, new Attr(this.ownerDocument, name, value));
      }
    }
    setAttributeNode(attribute2) {
      const { name } = attribute2;
      const previously = this.getAttributeNode(name);
      if (previously !== attribute2) {
        if (previously)
          this.removeAttributeNode(previously);
        const { ownerElement } = attribute2;
        if (ownerElement)
          ownerElement.removeAttributeNode(attribute2);
        setAttribute(this, attribute2);
      }
      return previously;
    }
    toggleAttribute(name, force) {
      if (this.hasAttribute(name)) {
        if (!force) {
          this.removeAttribute(name);
          return false;
        }
        return true;
      } else if (force || arguments.length === 1) {
        this.setAttribute(name, "");
        return true;
      }
      return false;
    }
    get shadowRoot() {
      if (shadowRoots.has(this)) {
        const { mode, shadowRoot } = shadowRoots.get(this);
        if (mode === "open")
          return shadowRoot;
      }
      return null;
    }
    attachShadow(init2) {
      if (shadowRoots.has(this))
        throw new Error("operation not supported");
      const shadowRoot = new ShadowRoot(this);
      shadowRoot.append(...this.childNodes);
      shadowRoots.set(this, {
        mode: init2.mode,
        shadowRoot
      });
      return shadowRoot;
    }
    matches(selectors) {
      return matches(this, selectors);
    }
    closest(selectors) {
      let parentElement2 = this;
      const matches2 = prepareMatch(parentElement2, selectors);
      while (parentElement2 && !matches2(parentElement2))
        parentElement2 = parentElement2.parentElement;
      return parentElement2;
    }
    insertAdjacentElement(position, element) {
      const { parentElement: parentElement2 } = this;
      switch (position) {
        case "beforebegin":
          if (parentElement2) {
            parentElement2.insertBefore(element, this);
            break;
          }
          return null;
        case "afterbegin":
          this.insertBefore(element, this.firstChild);
          break;
        case "beforeend":
          this.insertBefore(element, null);
          break;
        case "afterend":
          if (parentElement2) {
            parentElement2.insertBefore(element, this.nextSibling);
            break;
          }
          return null;
      }
      return element;
    }
    insertAdjacentHTML(position, html) {
      const template = this.ownerDocument.createElement("template");
      template.innerHTML = html;
      this.insertAdjacentElement(position, template.content);
    }
    insertAdjacentText(position, text) {
      const node = this.ownerDocument.createTextNode(text);
      this.insertAdjacentElement(position, node);
    }
    cloneNode(deep = false) {
      const { ownerDocument, localName } = this;
      const addNext = (next2) => {
        next2.parentNode = parentNode;
        knownAdjacent($next, next2);
        $next = next2;
      };
      const clone = create2(ownerDocument, this, localName);
      let parentNode = clone, $next = clone;
      let { [NEXT]: next, [END]: prev } = this;
      while (next !== prev && (deep || next.nodeType === ATTRIBUTE_NODE)) {
        switch (next.nodeType) {
          case NODE_END:
            knownAdjacent($next, parentNode[END]);
            $next = parentNode[END];
            parentNode = parentNode.parentNode;
            break;
          case ELEMENT_NODE: {
            const node = create2(ownerDocument, next, next.localName);
            addNext(node);
            parentNode = node;
            break;
          }
          case ATTRIBUTE_NODE:
          case TEXT_NODE:
          case COMMENT_NODE:
            addNext(next.cloneNode(deep));
            break;
        }
        next = next[NEXT];
      }
      knownAdjacent($next, clone[END]);
      return clone;
    }
    toString() {
      const out = [];
      const { [END]: end } = this;
      let next = { [NEXT]: this };
      let isOpened = false;
      do {
        next = next[NEXT];
        switch (next.nodeType) {
          case ATTRIBUTE_NODE: {
            const attr = " " + next;
            switch (attr) {
              case " id":
              case " class":
              case " style":
                break;
              default:
                out.push(attr);
            }
            break;
          }
          case NODE_END: {
            const start = next[START];
            if (isOpened) {
              if ("ownerSVGElement" in start)
                out.push(" />");
              else if (isVoid(start))
                out.push(ignoreCase(start) ? ">" : " />");
              else
                out.push(`></${start.localName}>`);
              isOpened = false;
            } else
              out.push(`</${start.localName}>`);
            break;
          }
          case ELEMENT_NODE:
            if (isOpened)
              out.push(">");
            if (next.toString !== this.toString) {
              out.push(next.toString());
              next = next[END];
              isOpened = false;
            } else {
              out.push(`<${next.localName}`);
              isOpened = true;
            }
            break;
          case TEXT_NODE:
          case COMMENT_NODE:
            out.push((isOpened ? ">" : "") + next);
            isOpened = false;
            break;
        }
      } while (next !== end);
      return out.join("");
    }
    toJSON() {
      const json = [];
      elementAsJSON(this, json);
      return json;
    }
    getAttributeNS(_, name) {
      return this.getAttribute(name);
    }
    getElementsByTagNameNS(_, name) {
      return this.getElementsByTagName(name);
    }
    hasAttributeNS(_, name) {
      return this.hasAttribute(name);
    }
    removeAttributeNS(_, name) {
      this.removeAttribute(name);
    }
    setAttributeNS(_, name, value) {
      this.setAttribute(name, value);
    }
    setAttributeNodeNS(attr) {
      return this.setAttributeNode(attr);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/svg/element.js
  var classNames = /* @__PURE__ */ new WeakMap();
  var handler3 = {
    get(target, name) {
      return target[name];
    },
    set(target, name, value) {
      target[name] = value;
      return true;
    }
  };
  var SVGElement = class extends Element2 {
    constructor(ownerDocument, localName, ownerSVGElement = null) {
      super(ownerDocument, localName);
      this.ownerSVGElement = ownerSVGElement;
    }
    get className() {
      if (!classNames.has(this))
        classNames.set(this, new Proxy({ baseVal: "", animVal: "" }, handler3));
      return classNames.get(this);
    }
    set className(value) {
      const { classList } = this;
      classList.clear();
      classList.add(...value.split(/\s+/));
    }
    getAttribute(name) {
      return name === "class" ? [...this.classList].join(" ") : super.getAttribute(name);
    }
    setAttribute(name, value) {
      if (name === "class")
        this.className = value;
      else if (name === "style") {
        const { className } = this;
        className.baseVal = className.animVal = value;
      }
      super.setAttribute(name, value);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/facades.js
  var illegalConstructor = () => {
    throw new TypeError("Illegal constructor");
  };
  function Attr2() {
    illegalConstructor();
  }
  setPrototypeOf(Attr2, Attr);
  Attr2.prototype = Attr.prototype;
  function CharacterData2() {
    illegalConstructor();
  }
  setPrototypeOf(CharacterData2, CharacterData);
  CharacterData2.prototype = CharacterData.prototype;
  function Comment4() {
    illegalConstructor();
  }
  setPrototypeOf(Comment4, Comment3);
  Comment4.prototype = Comment3.prototype;
  function DocumentFragment2() {
    illegalConstructor();
  }
  setPrototypeOf(DocumentFragment2, DocumentFragment);
  DocumentFragment2.prototype = DocumentFragment.prototype;
  function DocumentType2() {
    illegalConstructor();
  }
  setPrototypeOf(DocumentType2, DocumentType);
  DocumentType2.prototype = DocumentType.prototype;
  function Element3() {
    illegalConstructor();
  }
  setPrototypeOf(Element3, Element2);
  Element3.prototype = Element2.prototype;
  function Node3() {
    illegalConstructor();
  }
  setPrototypeOf(Node3, Node2);
  Node3.prototype = Node2.prototype;
  function ShadowRoot2() {
    illegalConstructor();
  }
  setPrototypeOf(ShadowRoot2, ShadowRoot);
  ShadowRoot2.prototype = ShadowRoot.prototype;
  function Text4() {
    illegalConstructor();
  }
  setPrototypeOf(Text4, Text3);
  Text4.prototype = Text3.prototype;
  function SVGElement2() {
    illegalConstructor();
  }
  setPrototypeOf(SVGElement2, SVGElement);
  SVGElement2.prototype = SVGElement.prototype;
  var Facades = {
    Attr: Attr2,
    CharacterData: CharacterData2,
    Comment: Comment4,
    DocumentFragment: DocumentFragment2,
    DocumentType: DocumentType2,
    Element: Element3,
    Node: Node3,
    ShadowRoot: ShadowRoot2,
    Text: Text4,
    SVGElement: SVGElement2
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/element.js
  var Level0 = /* @__PURE__ */ new WeakMap();
  var level0 = {
    get(element, name) {
      return Level0.has(element) && Level0.get(element)[name] || null;
    },
    set(element, name, value) {
      if (!Level0.has(element))
        Level0.set(element, {});
      const handlers = Level0.get(element);
      const type = name.slice(2);
      if (handlers[name])
        element.removeEventListener(type, handlers[name], false);
      if (handlers[name] = value)
        element.addEventListener(type, value, false);
    }
  };
  var HTMLElement = class extends Element2 {
    static get observedAttributes() {
      return [];
    }
    constructor(ownerDocument = null, localName = "") {
      super(ownerDocument, localName);
      const ownerLess = !ownerDocument;
      let options;
      if (ownerLess) {
        const { constructor: Class } = this;
        if (!Classes.has(Class))
          throw new Error("unable to initialize this Custom Element");
        ({ ownerDocument, localName, options } = Classes.get(Class));
      }
      if (ownerDocument[UPGRADE]) {
        const { element, values } = ownerDocument[UPGRADE];
        ownerDocument[UPGRADE] = null;
        for (const [key2, value] of values)
          element[key2] = value;
        return element;
      }
      if (ownerLess) {
        this.ownerDocument = this[END].ownerDocument = ownerDocument;
        this.localName = localName;
        customElements.set(this, { connected: false });
        if (options.is)
          this.setAttribute("is", options.is);
      }
    }
    blur() {
      this.dispatchEvent(new GlobalEvent("blur"));
    }
    click() {
      this.dispatchEvent(new GlobalEvent("click"));
    }
    get accessKeyLabel() {
      const { accessKey } = this;
      return accessKey && `Alt+Shift+${accessKey}`;
    }
    get isContentEditable() {
      return this.hasAttribute("contenteditable");
    }
    get contentEditable() {
      return booleanAttribute.get(this, "contenteditable");
    }
    set contentEditable(value) {
      booleanAttribute.set(this, "contenteditable", value);
    }
    get draggable() {
      return booleanAttribute.get(this, "draggable");
    }
    set draggable(value) {
      booleanAttribute.set(this, "draggable", value);
    }
    get hidden() {
      return booleanAttribute.get(this, "hidden");
    }
    set hidden(value) {
      booleanAttribute.set(this, "hidden", value);
    }
    get spellcheck() {
      return booleanAttribute.get(this, "spellcheck");
    }
    set spellcheck(value) {
      booleanAttribute.set(this, "spellcheck", value);
    }
    get accessKey() {
      return stringAttribute.get(this, "accesskey");
    }
    set accessKey(value) {
      stringAttribute.set(this, "accesskey", value);
    }
    get dir() {
      return stringAttribute.get(this, "dir");
    }
    set dir(value) {
      stringAttribute.set(this, "dir", value);
    }
    get lang() {
      return stringAttribute.get(this, "lang");
    }
    set lang(value) {
      stringAttribute.set(this, "lang", value);
    }
    get title() {
      return stringAttribute.get(this, "title");
    }
    set title(value) {
      stringAttribute.set(this, "title", value);
    }
    get onabort() {
      return level0.get(this, "onabort");
    }
    set onabort(value) {
      level0.set(this, "onabort", value);
    }
    get onblur() {
      return level0.get(this, "onblur");
    }
    set onblur(value) {
      level0.set(this, "onblur", value);
    }
    get oncancel() {
      return level0.get(this, "oncancel");
    }
    set oncancel(value) {
      level0.set(this, "oncancel", value);
    }
    get oncanplay() {
      return level0.get(this, "oncanplay");
    }
    set oncanplay(value) {
      level0.set(this, "oncanplay", value);
    }
    get oncanplaythrough() {
      return level0.get(this, "oncanplaythrough");
    }
    set oncanplaythrough(value) {
      level0.set(this, "oncanplaythrough", value);
    }
    get onchange() {
      return level0.get(this, "onchange");
    }
    set onchange(value) {
      level0.set(this, "onchange", value);
    }
    get onclick() {
      return level0.get(this, "onclick");
    }
    set onclick(value) {
      level0.set(this, "onclick", value);
    }
    get onclose() {
      return level0.get(this, "onclose");
    }
    set onclose(value) {
      level0.set(this, "onclose", value);
    }
    get oncontextmenu() {
      return level0.get(this, "oncontextmenu");
    }
    set oncontextmenu(value) {
      level0.set(this, "oncontextmenu", value);
    }
    get oncuechange() {
      return level0.get(this, "oncuechange");
    }
    set oncuechange(value) {
      level0.set(this, "oncuechange", value);
    }
    get ondblclick() {
      return level0.get(this, "ondblclick");
    }
    set ondblclick(value) {
      level0.set(this, "ondblclick", value);
    }
    get ondrag() {
      return level0.get(this, "ondrag");
    }
    set ondrag(value) {
      level0.set(this, "ondrag", value);
    }
    get ondragend() {
      return level0.get(this, "ondragend");
    }
    set ondragend(value) {
      level0.set(this, "ondragend", value);
    }
    get ondragenter() {
      return level0.get(this, "ondragenter");
    }
    set ondragenter(value) {
      level0.set(this, "ondragenter", value);
    }
    get ondragleave() {
      return level0.get(this, "ondragleave");
    }
    set ondragleave(value) {
      level0.set(this, "ondragleave", value);
    }
    get ondragover() {
      return level0.get(this, "ondragover");
    }
    set ondragover(value) {
      level0.set(this, "ondragover", value);
    }
    get ondragstart() {
      return level0.get(this, "ondragstart");
    }
    set ondragstart(value) {
      level0.set(this, "ondragstart", value);
    }
    get ondrop() {
      return level0.get(this, "ondrop");
    }
    set ondrop(value) {
      level0.set(this, "ondrop", value);
    }
    get ondurationchange() {
      return level0.get(this, "ondurationchange");
    }
    set ondurationchange(value) {
      level0.set(this, "ondurationchange", value);
    }
    get onemptied() {
      return level0.get(this, "onemptied");
    }
    set onemptied(value) {
      level0.set(this, "onemptied", value);
    }
    get onended() {
      return level0.get(this, "onended");
    }
    set onended(value) {
      level0.set(this, "onended", value);
    }
    get onerror() {
      return level0.get(this, "onerror");
    }
    set onerror(value) {
      level0.set(this, "onerror", value);
    }
    get onfocus() {
      return level0.get(this, "onfocus");
    }
    set onfocus(value) {
      level0.set(this, "onfocus", value);
    }
    get oninput() {
      return level0.get(this, "oninput");
    }
    set oninput(value) {
      level0.set(this, "oninput", value);
    }
    get oninvalid() {
      return level0.get(this, "oninvalid");
    }
    set oninvalid(value) {
      level0.set(this, "oninvalid", value);
    }
    get onkeydown() {
      return level0.get(this, "onkeydown");
    }
    set onkeydown(value) {
      level0.set(this, "onkeydown", value);
    }
    get onkeypress() {
      return level0.get(this, "onkeypress");
    }
    set onkeypress(value) {
      level0.set(this, "onkeypress", value);
    }
    get onkeyup() {
      return level0.get(this, "onkeyup");
    }
    set onkeyup(value) {
      level0.set(this, "onkeyup", value);
    }
    get onload() {
      return level0.get(this, "onload");
    }
    set onload(value) {
      level0.set(this, "onload", value);
    }
    get onloadeddata() {
      return level0.get(this, "onloadeddata");
    }
    set onloadeddata(value) {
      level0.set(this, "onloadeddata", value);
    }
    get onloadedmetadata() {
      return level0.get(this, "onloadedmetadata");
    }
    set onloadedmetadata(value) {
      level0.set(this, "onloadedmetadata", value);
    }
    get onloadstart() {
      return level0.get(this, "onloadstart");
    }
    set onloadstart(value) {
      level0.set(this, "onloadstart", value);
    }
    get onmousedown() {
      return level0.get(this, "onmousedown");
    }
    set onmousedown(value) {
      level0.set(this, "onmousedown", value);
    }
    get onmouseenter() {
      return level0.get(this, "onmouseenter");
    }
    set onmouseenter(value) {
      level0.set(this, "onmouseenter", value);
    }
    get onmouseleave() {
      return level0.get(this, "onmouseleave");
    }
    set onmouseleave(value) {
      level0.set(this, "onmouseleave", value);
    }
    get onmousemove() {
      return level0.get(this, "onmousemove");
    }
    set onmousemove(value) {
      level0.set(this, "onmousemove", value);
    }
    get onmouseout() {
      return level0.get(this, "onmouseout");
    }
    set onmouseout(value) {
      level0.set(this, "onmouseout", value);
    }
    get onmouseover() {
      return level0.get(this, "onmouseover");
    }
    set onmouseover(value) {
      level0.set(this, "onmouseover", value);
    }
    get onmouseup() {
      return level0.get(this, "onmouseup");
    }
    set onmouseup(value) {
      level0.set(this, "onmouseup", value);
    }
    get onmousewheel() {
      return level0.get(this, "onmousewheel");
    }
    set onmousewheel(value) {
      level0.set(this, "onmousewheel", value);
    }
    get onpause() {
      return level0.get(this, "onpause");
    }
    set onpause(value) {
      level0.set(this, "onpause", value);
    }
    get onplay() {
      return level0.get(this, "onplay");
    }
    set onplay(value) {
      level0.set(this, "onplay", value);
    }
    get onplaying() {
      return level0.get(this, "onplaying");
    }
    set onplaying(value) {
      level0.set(this, "onplaying", value);
    }
    get onprogress() {
      return level0.get(this, "onprogress");
    }
    set onprogress(value) {
      level0.set(this, "onprogress", value);
    }
    get onratechange() {
      return level0.get(this, "onratechange");
    }
    set onratechange(value) {
      level0.set(this, "onratechange", value);
    }
    get onreset() {
      return level0.get(this, "onreset");
    }
    set onreset(value) {
      level0.set(this, "onreset", value);
    }
    get onresize() {
      return level0.get(this, "onresize");
    }
    set onresize(value) {
      level0.set(this, "onresize", value);
    }
    get onscroll() {
      return level0.get(this, "onscroll");
    }
    set onscroll(value) {
      level0.set(this, "onscroll", value);
    }
    get onseeked() {
      return level0.get(this, "onseeked");
    }
    set onseeked(value) {
      level0.set(this, "onseeked", value);
    }
    get onseeking() {
      return level0.get(this, "onseeking");
    }
    set onseeking(value) {
      level0.set(this, "onseeking", value);
    }
    get onselect() {
      return level0.get(this, "onselect");
    }
    set onselect(value) {
      level0.set(this, "onselect", value);
    }
    get onshow() {
      return level0.get(this, "onshow");
    }
    set onshow(value) {
      level0.set(this, "onshow", value);
    }
    get onstalled() {
      return level0.get(this, "onstalled");
    }
    set onstalled(value) {
      level0.set(this, "onstalled", value);
    }
    get onsubmit() {
      return level0.get(this, "onsubmit");
    }
    set onsubmit(value) {
      level0.set(this, "onsubmit", value);
    }
    get onsuspend() {
      return level0.get(this, "onsuspend");
    }
    set onsuspend(value) {
      level0.set(this, "onsuspend", value);
    }
    get ontimeupdate() {
      return level0.get(this, "ontimeupdate");
    }
    set ontimeupdate(value) {
      level0.set(this, "ontimeupdate", value);
    }
    get ontoggle() {
      return level0.get(this, "ontoggle");
    }
    set ontoggle(value) {
      level0.set(this, "ontoggle", value);
    }
    get onvolumechange() {
      return level0.get(this, "onvolumechange");
    }
    set onvolumechange(value) {
      level0.set(this, "onvolumechange", value);
    }
    get onwaiting() {
      return level0.get(this, "onwaiting");
    }
    set onwaiting(value) {
      level0.set(this, "onwaiting", value);
    }
    get onauxclick() {
      return level0.get(this, "onauxclick");
    }
    set onauxclick(value) {
      level0.set(this, "onauxclick", value);
    }
    get ongotpointercapture() {
      return level0.get(this, "ongotpointercapture");
    }
    set ongotpointercapture(value) {
      level0.set(this, "ongotpointercapture", value);
    }
    get onlostpointercapture() {
      return level0.get(this, "onlostpointercapture");
    }
    set onlostpointercapture(value) {
      level0.set(this, "onlostpointercapture", value);
    }
    get onpointercancel() {
      return level0.get(this, "onpointercancel");
    }
    set onpointercancel(value) {
      level0.set(this, "onpointercancel", value);
    }
    get onpointerdown() {
      return level0.get(this, "onpointerdown");
    }
    set onpointerdown(value) {
      level0.set(this, "onpointerdown", value);
    }
    get onpointerenter() {
      return level0.get(this, "onpointerenter");
    }
    set onpointerenter(value) {
      level0.set(this, "onpointerenter", value);
    }
    get onpointerleave() {
      return level0.get(this, "onpointerleave");
    }
    set onpointerleave(value) {
      level0.set(this, "onpointerleave", value);
    }
    get onpointermove() {
      return level0.get(this, "onpointermove");
    }
    set onpointermove(value) {
      level0.set(this, "onpointermove", value);
    }
    get onpointerout() {
      return level0.get(this, "onpointerout");
    }
    set onpointerout(value) {
      level0.set(this, "onpointerout", value);
    }
    get onpointerover() {
      return level0.get(this, "onpointerover");
    }
    set onpointerover(value) {
      level0.set(this, "onpointerover", value);
    }
    get onpointerup() {
      return level0.get(this, "onpointerup");
    }
    set onpointerup(value) {
      level0.set(this, "onpointerup", value);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/template-element.js
  var tagName = "template";
  var HTMLTemplateElement = class extends HTMLElement {
    constructor(ownerDocument) {
      super(ownerDocument, tagName);
      const content = this.ownerDocument.createDocumentFragment();
      (this[CONTENT] = content)[PRIVATE] = this;
    }
    get content() {
      if (this.hasChildNodes() && !this[CONTENT].hasChildNodes()) {
        for (const node of this.childNodes)
          this[CONTENT].appendChild(node.cloneNode(true));
      }
      return this[CONTENT];
    }
  };
  registerHTMLClass(tagName, HTMLTemplateElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/html-element.js
  var HTMLHtmlElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "html") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/text-element.js
  var { toString } = HTMLElement.prototype;
  var TextElement = class extends HTMLElement {
    get innerHTML() {
      return this.textContent;
    }
    set innerHTML(html) {
      this.textContent = html;
    }
    toString() {
      const outerHTML = toString.call(this.cloneNode());
      return outerHTML.replace(/></, `>${this.textContent}<`);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/script-element.js
  var tagName2 = "script";
  var HTMLScriptElement = class extends TextElement {
    constructor(ownerDocument, localName = tagName2) {
      super(ownerDocument, localName);
    }
    get type() {
      return stringAttribute.get(this, "type");
    }
    set type(value) {
      stringAttribute.set(this, "type", value);
    }
    get src() {
      return stringAttribute.get(this, "src");
    }
    set src(value) {
      stringAttribute.set(this, "src", value);
    }
    get defer() {
      return booleanAttribute.get(this, "defer");
    }
    set defer(value) {
      booleanAttribute.set(this, "defer", value);
    }
    get crossOrigin() {
      return stringAttribute.get(this, "crossorigin");
    }
    set crossOrigin(value) {
      stringAttribute.set(this, "crossorigin", value);
    }
    get nomodule() {
      return booleanAttribute.get(this, "nomodule");
    }
    set nomodule(value) {
      booleanAttribute.set(this, "nomodule", value);
    }
    get referrerPolicy() {
      return stringAttribute.get(this, "referrerpolicy");
    }
    set referrerPolicy(value) {
      stringAttribute.set(this, "referrerpolicy", value);
    }
    get nonce() {
      return stringAttribute.get(this, "nonce");
    }
    set nonce(value) {
      stringAttribute.set(this, "nonce", value);
    }
    get async() {
      return booleanAttribute.get(this, "async");
    }
    set async(value) {
      booleanAttribute.set(this, "async", value);
    }
  };
  registerHTMLClass(tagName2, HTMLScriptElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/frame-element.js
  var HTMLFrameElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "frame") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/i-frame-element.js
  var tagName3 = "iframe";
  var HTMLIFrameElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName3) {
      super(ownerDocument, localName);
    }
    get src() {
      return stringAttribute.get(this, "src");
    }
    set src(value) {
      stringAttribute.set(this, "src", value);
    }
  };
  registerHTMLClass(tagName3, HTMLIFrameElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/object-element.js
  var HTMLObjectElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "object") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/head-element.js
  var HTMLHeadElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "head") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/body-element.js
  var HTMLBodyElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "body") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/style-element.js
  var import_cssom = __toESM(require_lib(), 1);
  var tagName4 = "style";
  var HTMLStyleElement = class extends TextElement {
    constructor(ownerDocument, localName = tagName4) {
      super(ownerDocument, localName);
      this[SHEET] = null;
    }
    get sheet() {
      const sheet = this[SHEET];
      if (sheet !== null) {
        return sheet;
      }
      return this[SHEET] = (0, import_cssom.parse)(this.textContent);
    }
    get innerHTML() {
      return super.innerHTML || "";
    }
    set innerHTML(value) {
      super.textContent = value;
      this[SHEET] = null;
    }
    get innerText() {
      return super.innerText || "";
    }
    set innerText(value) {
      super.textContent = value;
      this[SHEET] = null;
    }
    get textContent() {
      return super.textContent || "";
    }
    set textContent(value) {
      super.textContent = value;
      this[SHEET] = null;
    }
  };
  registerHTMLClass(tagName4, HTMLStyleElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/time-element.js
  var HTMLTimeElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "time") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/field-set-element.js
  var HTMLFieldSetElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "fieldset") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/embed-element.js
  var HTMLEmbedElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "embed") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/hr-element.js
  var HTMLHRElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "hr") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/progress-element.js
  var HTMLProgressElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "progress") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/paragraph-element.js
  var HTMLParagraphElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "p") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/table-element.js
  var HTMLTableElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "table") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/frame-set-element.js
  var HTMLFrameSetElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "frameset") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/li-element.js
  var HTMLLIElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "li") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/base-element.js
  var HTMLBaseElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "base") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/data-list-element.js
  var HTMLDataListElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "datalist") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/input-element.js
  var tagName5 = "input";
  var HTMLInputElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName5) {
      super(ownerDocument, localName);
    }
    get autofocus() {
      return booleanAttribute.get(this, "autofocus") || -1;
    }
    set autofocus(value) {
      booleanAttribute.set(this, "autofocus", value);
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    set name(value) {
      this.setAttribute("name", value);
    }
    get placeholder() {
      return this.getAttribute("placeholder");
    }
    set placeholder(value) {
      this.setAttribute("placeholder", value);
    }
    get type() {
      return this.getAttribute("type");
    }
    set type(value) {
      this.setAttribute("type", value);
    }
  };
  registerHTMLClass(tagName5, HTMLInputElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/param-element.js
  var HTMLParamElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "param") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/media-element.js
  var HTMLMediaElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "media") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/audio-element.js
  var HTMLAudioElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "audio") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/heading-element.js
  var tagName6 = "h1";
  var HTMLHeadingElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName6) {
      super(ownerDocument, localName);
    }
  };
  registerHTMLClass([tagName6, "h2", "h3", "h4", "h5", "h6"], HTMLHeadingElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/directory-element.js
  var HTMLDirectoryElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "dir") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/quote-element.js
  var HTMLQuoteElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "quote") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/canvas-element.js
  var import_canvas = __toESM(require_canvas(), 1);
  var { createCanvas } = import_canvas.default;
  var tagName7 = "canvas";
  var HTMLCanvasElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName7) {
      super(ownerDocument, localName);
      this[IMAGE] = createCanvas(300, 150);
    }
    get width() {
      return this[IMAGE].width;
    }
    set width(value) {
      numericAttribute.set(this, "width", value);
      this[IMAGE].width = value;
    }
    get height() {
      return this[IMAGE].height;
    }
    set height(value) {
      numericAttribute.set(this, "height", value);
      this[IMAGE].height = value;
    }
    getContext(type) {
      return this[IMAGE].getContext(type);
    }
    toDataURL(...args) {
      return this[IMAGE].toDataURL(...args);
    }
  };
  registerHTMLClass(tagName7, HTMLCanvasElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/legend-element.js
  var HTMLLegendElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "legend") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/option-element.js
  var HTMLOptionElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "option") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/span-element.js
  var HTMLSpanElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "span") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/meter-element.js
  var HTMLMeterElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "meter") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/video-element.js
  var HTMLVideoElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "video") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/table-cell-element.js
  var HTMLTableCellElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "td") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/title-element.js
  var tagName8 = "title";
  var HTMLTitleElement = class extends TextElement {
    constructor(ownerDocument, localName = tagName8) {
      super(ownerDocument, localName);
    }
  };
  registerHTMLClass(tagName8, HTMLTitleElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/output-element.js
  var HTMLOutputElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "output") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/table-row-element.js
  var HTMLTableRowElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "tr") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/data-element.js
  var HTMLDataElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "data") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/menu-element.js
  var HTMLMenuElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "menu") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/select-element.js
  var tagName9 = "select";
  var HTMLSelectElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName9) {
      super(ownerDocument, localName);
    }
    get options() {
      let children = new NodeList();
      let { firstElementChild } = this;
      while (firstElementChild) {
        if (firstElementChild.tagName === "OPTGROUP")
          children.push(...firstElementChild.children);
        else
          children.push(firstElementChild);
        firstElementChild = firstElementChild.nextElementSibling;
      }
      return children;
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    set name(value) {
      this.setAttribute("name", value);
    }
  };
  registerHTMLClass(tagName9, HTMLSelectElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/br-element.js
  var HTMLBRElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "br") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/button-element.js
  var tagName10 = "button";
  var HTMLButtonElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName10) {
      super(ownerDocument, localName);
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    set name(value) {
      this.setAttribute("name", value);
    }
    get type() {
      return this.getAttribute("type");
    }
    set type(value) {
      this.setAttribute("type", value);
    }
  };
  registerHTMLClass(tagName10, HTMLButtonElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/map-element.js
  var HTMLMapElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "map") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/opt-group-element.js
  var HTMLOptGroupElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "optgroup") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/d-list-element.js
  var HTMLDListElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "dl") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/text-area-element.js
  var tagName11 = "textarea";
  var HTMLTextAreaElement = class extends TextElement {
    constructor(ownerDocument, localName = tagName11) {
      super(ownerDocument, localName);
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    set name(value) {
      this.setAttribute("name", value);
    }
    get placeholder() {
      return this.getAttribute("placeholder");
    }
    set placeholder(value) {
      this.setAttribute("placeholder", value);
    }
    get type() {
      return this.getAttribute("type");
    }
    set type(value) {
      this.setAttribute("type", value);
    }
    get value() {
      return this.textContent;
    }
    set value(content) {
      this.textContent = content;
    }
  };
  registerHTMLClass(tagName11, HTMLTextAreaElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/font-element.js
  var HTMLFontElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "font") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/div-element.js
  var HTMLDivElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "div") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/link-element.js
  var tagName12 = "link";
  var HTMLLinkElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName12) {
      super(ownerDocument, localName);
    }
    get disabled() {
      return booleanAttribute.get(this, "disabled");
    }
    set disabled(value) {
      booleanAttribute.set(this, "disabled", value);
    }
    get href() {
      return stringAttribute.get(this, "href");
    }
    set href(value) {
      stringAttribute.set(this, "href", value);
    }
    get hreflang() {
      return stringAttribute.get(this, "hreflang");
    }
    set hreflang(value) {
      stringAttribute.set(this, "hreflang", value);
    }
    get media() {
      return stringAttribute.get(this, "media");
    }
    set media(value) {
      stringAttribute.set(this, "media", value);
    }
    get rel() {
      return stringAttribute.get(this, "rel");
    }
    set rel(value) {
      stringAttribute.set(this, "rel", value);
    }
    get type() {
      return stringAttribute.get(this, "type");
    }
    set type(value) {
      stringAttribute.set(this, "type", value);
    }
  };
  registerHTMLClass(tagName12, HTMLLinkElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/slot-element.js
  var HTMLSlotElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "slot") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/form-element.js
  var HTMLFormElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "form") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/image-element.js
  var tagName13 = "img";
  var HTMLImageElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName13) {
      super(ownerDocument, localName);
    }
    get alt() {
      return stringAttribute.get(this, "alt");
    }
    set alt(value) {
      stringAttribute.set(this, "alt", value);
    }
    get sizes() {
      return stringAttribute.get(this, "sizes");
    }
    set sizes(value) {
      stringAttribute.set(this, "sizes", value);
    }
    get src() {
      return stringAttribute.get(this, "src");
    }
    set src(value) {
      stringAttribute.set(this, "src", value);
    }
    get srcset() {
      return stringAttribute.get(this, "srcset");
    }
    set srcset(value) {
      stringAttribute.set(this, "srcset", value);
    }
    get title() {
      return stringAttribute.get(this, "title");
    }
    set title(value) {
      stringAttribute.set(this, "title", value);
    }
    get width() {
      return numericAttribute.get(this, "width");
    }
    set width(value) {
      numericAttribute.set(this, "width", value);
    }
    get height() {
      return numericAttribute.get(this, "height");
    }
    set height(value) {
      numericAttribute.set(this, "height", value);
    }
  };
  registerHTMLClass(tagName13, HTMLImageElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/pre-element.js
  var HTMLPreElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "pre") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/u-list-element.js
  var HTMLUListElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "ul") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/meta-element.js
  var HTMLMetaElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "meta") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/picture-element.js
  var HTMLPictureElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "picture") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/area-element.js
  var HTMLAreaElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "area") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/o-list-element.js
  var HTMLOListElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "ol") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/table-caption-element.js
  var HTMLTableCaptionElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "caption") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/anchor-element.js
  var tagName14 = "a";
  var HTMLAnchorElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName14) {
      super(ownerDocument, localName);
    }
    get href() {
      return encodeURI(stringAttribute.get(this, "href"));
    }
    set href(value) {
      stringAttribute.set(this, "href", decodeURI(value));
    }
    get download() {
      return encodeURI(stringAttribute.get(this, "download"));
    }
    set download(value) {
      stringAttribute.set(this, "download", decodeURI(value));
    }
    get target() {
      return stringAttribute.get(this, "target");
    }
    set target(value) {
      stringAttribute.set(this, "target", value);
    }
    get type() {
      return stringAttribute.get(this, "type");
    }
    set type(value) {
      stringAttribute.set(this, "type", value);
    }
  };
  registerHTMLClass(tagName14, HTMLAnchorElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/label-element.js
  var HTMLLabelElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "label") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/unknown-element.js
  var HTMLUnknownElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "unknown") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/mod-element.js
  var HTMLModElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "mod") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/details-element.js
  var HTMLDetailsElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "details") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/source-element.js
  var tagName15 = "source";
  var HTMLSourceElement = class extends HTMLElement {
    constructor(ownerDocument, localName = tagName15) {
      super(ownerDocument, localName);
    }
    get src() {
      return stringAttribute.get(this, "src");
    }
    set src(value) {
      stringAttribute.set(this, "src", value);
    }
    get srcset() {
      return stringAttribute.get(this, "srcset");
    }
    set srcset(value) {
      stringAttribute.set(this, "srcset", value);
    }
    get sizes() {
      return stringAttribute.get(this, "sizes");
    }
    set sizes(value) {
      stringAttribute.set(this, "sizes", value);
    }
    get type() {
      return stringAttribute.get(this, "type");
    }
    set type(value) {
      stringAttribute.set(this, "type", value);
    }
  };
  registerHTMLClass(tagName15, HTMLSourceElement);

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/track-element.js
  var HTMLTrackElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "track") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/marquee-element.js
  var HTMLMarqueeElement = class extends HTMLElement {
    constructor(ownerDocument, localName = "marquee") {
      super(ownerDocument, localName);
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/html-classes.js
  var HTMLClasses = {
    HTMLElement,
    HTMLTemplateElement,
    HTMLHtmlElement,
    HTMLScriptElement,
    HTMLFrameElement,
    HTMLIFrameElement,
    HTMLObjectElement,
    HTMLHeadElement,
    HTMLBodyElement,
    HTMLStyleElement,
    HTMLTimeElement,
    HTMLFieldSetElement,
    HTMLEmbedElement,
    HTMLHRElement,
    HTMLProgressElement,
    HTMLParagraphElement,
    HTMLTableElement,
    HTMLFrameSetElement,
    HTMLLIElement,
    HTMLBaseElement,
    HTMLDataListElement,
    HTMLInputElement,
    HTMLParamElement,
    HTMLMediaElement,
    HTMLAudioElement,
    HTMLHeadingElement,
    HTMLDirectoryElement,
    HTMLQuoteElement,
    HTMLCanvasElement,
    HTMLLegendElement,
    HTMLOptionElement,
    HTMLSpanElement,
    HTMLMeterElement,
    HTMLVideoElement,
    HTMLTableCellElement,
    HTMLTitleElement,
    HTMLOutputElement,
    HTMLTableRowElement,
    HTMLDataElement,
    HTMLMenuElement,
    HTMLSelectElement,
    HTMLBRElement,
    HTMLButtonElement,
    HTMLMapElement,
    HTMLOptGroupElement,
    HTMLDListElement,
    HTMLTextAreaElement,
    HTMLFontElement,
    HTMLDivElement,
    HTMLLinkElement,
    HTMLSlotElement,
    HTMLFormElement,
    HTMLImageElement,
    HTMLPreElement,
    HTMLUListElement,
    HTMLMetaElement,
    HTMLPictureElement,
    HTMLAreaElement,
    HTMLOListElement,
    HTMLTableCaptionElement,
    HTMLAnchorElement,
    HTMLLabelElement,
    HTMLUnknownElement,
    HTMLModElement,
    HTMLDetailsElement,
    HTMLSourceElement,
    HTMLTrackElement,
    HTMLMarqueeElement
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/mime.js
  var voidElements2 = { test: () => true };
  var Mime = {
    "text/html": {
      docType: "<!DOCTYPE html>",
      ignoreCase: true,
      voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
    },
    "image/svg+xml": {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements: voidElements2
    },
    "text/xml": {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements: voidElements2
    },
    "application/xml": {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements: voidElements2
    },
    "application/xhtml+xml": {
      docType: '<?xml version="1.0" encoding="utf-8"?>',
      ignoreCase: false,
      voidElements: voidElements2
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/custom-event.js
  var GlobalCustomEvent = typeof CustomEvent === "function" ? CustomEvent : class CustomEvent2 extends GlobalEvent {
    constructor(type, eventInitDict = {}) {
      super(type, eventInitDict);
      this.detail = eventInitDict.detail;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/input-event.js
  var InputEvent = class extends GlobalEvent {
    constructor(type, inputEventInit = {}) {
      super(type, inputEventInit);
      this.inputType = inputEventInit.inputType;
      this.data = inputEventInit.data;
      this.dataTransfer = inputEventInit.dataTransfer;
      this.isComposing = inputEventInit.isComposing || false;
      this.ranges = inputEventInit.ranges;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/image.js
  var ImageClass = (ownerDocument) => class Image extends HTMLImageElement {
    constructor(width, height) {
      super(ownerDocument);
      switch (arguments.length) {
        case 1:
          this.height = width;
          this.width = width;
          break;
        case 2:
          this.height = height;
          this.width = width;
          break;
      }
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/range.js
  var deleteContents = ({ [START]: start, [END]: end }, fragment = null) => {
    setAdjacent(start[PREV], end[NEXT]);
    do {
      const after2 = getEnd(start);
      const next = after2 === end ? after2 : after2[NEXT];
      if (fragment)
        fragment.insertBefore(start, fragment[END]);
      else
        start.remove();
      start = next;
    } while (start !== end);
  };
  var Range = class {
    constructor() {
      this[START] = null;
      this[END] = null;
      this.commonAncestorContainer = null;
    }
    insertNode(newNode) {
      this[END].parentNode.insertBefore(newNode, this[START]);
    }
    selectNode(node) {
      this[START] = node;
      this[END] = getEnd(node);
    }
    surroundContents(parentNode) {
      parentNode.replaceChildren(this.extractContents());
    }
    setStartBefore(node) {
      this[START] = node;
    }
    setStartAfter(node) {
      this[START] = node.nextSibling;
    }
    setEndBefore(node) {
      this[END] = getEnd(node.previousSibling);
    }
    setEndAfter(node) {
      this[END] = getEnd(node);
    }
    cloneContents() {
      let { [START]: start, [END]: end } = this;
      const fragment = start.ownerDocument.createDocumentFragment();
      while (start !== end) {
        fragment.insertBefore(start.cloneNode(true), fragment[END]);
        start = getEnd(start);
        if (start !== end)
          start = start[NEXT];
      }
      return fragment;
    }
    deleteContents() {
      deleteContents(this);
    }
    extractContents() {
      const fragment = this[START].ownerDocument.createDocumentFragment();
      deleteContents(this, fragment);
      return fragment;
    }
    createContextualFragment(html) {
      const template = this.commonAncestorContainer.createElement("template");
      template.innerHTML = html;
      this.selectNode(template.content);
      return template.content;
    }
    cloneRange() {
      const range = new Range();
      range[START] = this[START];
      range[END] = this[END];
      return range;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/tree-walker.js
  var isOK = ({ nodeType }, mask) => {
    switch (nodeType) {
      case ELEMENT_NODE:
        return mask & SHOW_ELEMENT;
      case TEXT_NODE:
        return mask & SHOW_TEXT;
      case COMMENT_NODE:
        return mask & SHOW_COMMENT;
    }
    return 0;
  };
  var TreeWalker = class {
    constructor(root, whatToShow = SHOW_ALL) {
      this.root = root;
      this.currentNode = root;
      this.whatToShow = whatToShow;
      let { [NEXT]: next, [END]: end } = root;
      if (root.nodeType === DOCUMENT_NODE) {
        const { documentElement } = root;
        next = documentElement;
        end = documentElement[END];
      }
      const nodes = [];
      while (next !== end) {
        if (isOK(next, whatToShow))
          nodes.push(next);
        next = next[NEXT];
      }
      this[PRIVATE] = { i: 0, nodes };
    }
    nextNode() {
      const $ = this[PRIVATE];
      this.currentNode = $.i < $.nodes.length ? $.nodes[$.i++] : null;
      return this.currentNode;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/interface/document.js
  var query = (method, ownerDocument, selectors) => {
    let { [NEXT]: next, [END]: end } = ownerDocument;
    return method.call({ ownerDocument, [NEXT]: next, [END]: end }, selectors);
  };
  var globalExports = assign(
    {},
    Facades,
    HTMLClasses,
    {
      CustomEvent: GlobalCustomEvent,
      Event: GlobalEvent,
      EventTarget: DOMEventTarget,
      InputEvent,
      NamedNodeMap,
      NodeList
    }
  );
  var window = /* @__PURE__ */ new WeakMap();
  var Document2 = class extends NonElementParentNode {
    constructor(type) {
      super(null, "#document", DOCUMENT_NODE);
      this[CUSTOM_ELEMENTS] = { active: false, registry: null };
      this[MUTATION_OBSERVER] = { active: false, class: null };
      this[MIME] = Mime[type];
      this[DOCTYPE] = null;
      this[DOM_PARSER] = null;
      this[GLOBALS] = null;
      this[IMAGE] = null;
      this[UPGRADE] = null;
    }
    get defaultView() {
      if (!window.has(this))
        window.set(this, new Proxy(globalThis, {
          set: (target, name, value) => {
            switch (name) {
              case "addEventListener":
              case "removeEventListener":
              case "dispatchEvent":
                this[EVENT_TARGET][name] = value;
                break;
              default:
                target[name] = value;
                break;
            }
            return true;
          },
          get: (globalThis2, name) => {
            switch (name) {
              case "addEventListener":
              case "removeEventListener":
              case "dispatchEvent":
                if (!this[EVENT_TARGET]) {
                  const et = this[EVENT_TARGET] = new DOMEventTarget();
                  et.dispatchEvent = et.dispatchEvent.bind(et);
                  et.addEventListener = et.addEventListener.bind(et);
                  et.removeEventListener = et.removeEventListener.bind(et);
                }
                return this[EVENT_TARGET][name];
              case "document":
                return this;
              case "navigator":
                return {
                  userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
                };
              case "window":
                return window.get(this);
              case "customElements":
                if (!this[CUSTOM_ELEMENTS].registry)
                  this[CUSTOM_ELEMENTS] = new CustomElementRegistry(this);
                return this[CUSTOM_ELEMENTS];
              case "performance":
                return import_perf_hooks.performance;
              case "DOMParser":
                return this[DOM_PARSER];
              case "Image":
                if (!this[IMAGE])
                  this[IMAGE] = ImageClass(this);
                return this[IMAGE];
              case "MutationObserver":
                if (!this[MUTATION_OBSERVER].class)
                  this[MUTATION_OBSERVER] = new MutationObserverClass(this);
                return this[MUTATION_OBSERVER].class;
            }
            return this[GLOBALS] && this[GLOBALS][name] || globalExports[name] || globalThis2[name];
          }
        }));
      return window.get(this);
    }
    get doctype() {
      const docType = this[DOCTYPE];
      if (docType)
        return docType;
      const { firstChild } = this;
      if (firstChild && firstChild.nodeType === DOCUMENT_TYPE_NODE)
        return this[DOCTYPE] = firstChild;
      return null;
    }
    set doctype(value) {
      if (/^([a-z:]+)(\s+system|\s+public(\s+"([^"]+)")?)?(\s+"([^"]+)")?/i.test(value)) {
        const { $1: name, $4: publicId, $6: systemId } = RegExp;
        this[DOCTYPE] = new DocumentType(this, name, publicId, systemId);
        knownSiblings(this, this[DOCTYPE], this[NEXT]);
      }
    }
    get documentElement() {
      return this.firstElementChild;
    }
    get isConnected() {
      return true;
    }
    _getParent() {
      return this[EVENT_TARGET];
    }
    createAttribute(name) {
      return new Attr(this, name);
    }
    createComment(textContent2) {
      return new Comment3(this, textContent2);
    }
    createDocumentFragment() {
      return new DocumentFragment(this);
    }
    createDocumentType(name, publicId, systemId) {
      return new DocumentType(this, name, publicId, systemId);
    }
    createElement(localName) {
      return new Element2(this, localName);
    }
    createRange() {
      const range = new Range();
      range.commonAncestorContainer = this;
      return range;
    }
    createTextNode(textContent2) {
      return new Text3(this, textContent2);
    }
    createTreeWalker(root, whatToShow = -1) {
      return new TreeWalker(root, whatToShow);
    }
    createNodeIterator(root, whatToShow = -1) {
      return this.createTreeWalker(root, whatToShow);
    }
    createEvent(name) {
      const event = create(name === "Event" ? new GlobalEvent("") : new GlobalCustomEvent(""));
      event.initEvent = event.initCustomEvent = (type, canBubble = false, cancelable = false, detail) => {
        defineProperties(event, {
          type: { value: type },
          canBubble: { value: canBubble },
          cancelable: { value: cancelable },
          detail: { value: detail }
        });
      };
      return event;
    }
    cloneNode(deep = false) {
      const {
        constructor,
        [CUSTOM_ELEMENTS]: customElements2,
        [DOCTYPE]: doctype
      } = this;
      const document2 = new constructor();
      document2[CUSTOM_ELEMENTS] = customElements2;
      if (deep) {
        const end = document2[END];
        const { childNodes } = this;
        for (let { length } = childNodes, i = 0; i < length; i++)
          document2.insertBefore(childNodes[i].cloneNode(true), end);
        if (doctype)
          document2[DOCTYPE] = childNodes[0];
      }
      return document2;
    }
    importNode(externalNode) {
      const deep = 1 < arguments.length && !!arguments[1];
      const node = externalNode.cloneNode(deep);
      const { [CUSTOM_ELEMENTS]: customElements2 } = this;
      const { active } = customElements2;
      const upgrade = (element) => {
        const { ownerDocument, nodeType } = element;
        element.ownerDocument = this;
        if (active && ownerDocument !== this && nodeType === ELEMENT_NODE)
          customElements2.upgrade(element);
      };
      upgrade(node);
      if (deep) {
        switch (node.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE: {
            let { [NEXT]: next, [END]: end } = node;
            while (next !== end) {
              if (next.nodeType === ELEMENT_NODE)
                upgrade(next);
              next = next[NEXT];
            }
            break;
          }
        }
      }
      return node;
    }
    toString() {
      return this.childNodes.join("");
    }
    querySelector(selectors) {
      return query(super.querySelector, this, selectors);
    }
    querySelectorAll(selectors) {
      return query(super.querySelectorAll, this, selectors);
    }
    getElementsByTagNameNS(_, name) {
      return this.getElementsByTagName(name);
    }
    createAttributeNS(_, name) {
      return this.createAttribute(name);
    }
    createElementNS(nsp, localName, options) {
      return nsp === SVG_NAMESPACE ? new SVGElement(this, localName, null) : this.createElement(localName, options);
    }
  };
  setPrototypeOf(
    globalExports.Document = function Document3() {
      illegalConstructor();
    },
    Document2
  ).prototype = Document2.prototype;

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/html/document.js
  var createHTMLElement = (ownerDocument, builtin, localName, options) => {
    if (!builtin && htmlClasses.has(localName)) {
      const Class = htmlClasses.get(localName);
      return new Class(ownerDocument, localName);
    }
    const { [CUSTOM_ELEMENTS]: { active, registry } } = ownerDocument;
    if (active) {
      const ce = builtin ? options.is : localName;
      if (registry.has(ce)) {
        const { Class } = registry.get(ce);
        const element = new Class(ownerDocument, localName);
        customElements.set(element, { connected: false });
        return element;
      }
    }
    return new HTMLElement(ownerDocument, localName);
  };
  var HTMLDocument = class extends Document2 {
    constructor() {
      super("text/html");
    }
    get all() {
      const nodeList = new NodeList();
      let { [NEXT]: next, [END]: end } = this;
      while (next !== end) {
        switch (next.nodeType) {
          case ELEMENT_NODE:
            nodeList.push(next);
            break;
        }
        next = next[NEXT];
      }
      return nodeList;
    }
    get head() {
      const { documentElement } = this;
      let { firstElementChild } = documentElement;
      if (!firstElementChild || firstElementChild.tagName !== "HEAD") {
        firstElementChild = this.createElement("head");
        documentElement.prepend(firstElementChild);
      }
      return firstElementChild;
    }
    get body() {
      const { head } = this;
      let { nextElementSibling: nextElementSibling3 } = head;
      if (!nextElementSibling3 || nextElementSibling3.tagName !== "BODY") {
        nextElementSibling3 = this.createElement("body");
        head.after(nextElementSibling3);
      }
      return nextElementSibling3;
    }
    get title() {
      const { head } = this;
      let title = head.getElementsByTagName("title").shift();
      return title ? title.textContent : "";
    }
    set title(textContent2) {
      const { head } = this;
      let title = head.getElementsByTagName("title").shift();
      if (title)
        title.textContent = textContent2;
      else {
        head.insertBefore(
          this.createElement("title"),
          head.firstChild
        ).textContent = textContent2;
      }
    }
    createElement(localName, options) {
      const builtin = !!(options && options.is);
      const element = createHTMLElement(this, builtin, localName, options);
      if (builtin)
        element.setAttribute("is", options.is);
      return element;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/svg/document.js
  var SVGDocument = class extends Document2 {
    constructor() {
      super("image/svg+xml");
    }
    toString() {
      return this[MIME].docType + super.toString();
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/xml/document.js
  var XMLDocument = class extends Document2 {
    constructor() {
      super("text/xml");
    }
    toString() {
      return this[MIME].docType + super.toString();
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/dom/parser.js
  var DOMParser = class {
    parseFromString(markupLanguage, mimeType, globals = null) {
      let isHTML = false, document2;
      if (mimeType === "text/html") {
        isHTML = true;
        document2 = new HTMLDocument();
      } else if (mimeType === "image/svg+xml")
        document2 = new SVGDocument();
      else
        document2 = new XMLDocument();
      document2[DOM_PARSER] = DOMParser;
      if (globals)
        document2[GLOBALS] = globals;
      return markupLanguage ? parseFromString(document2, isHTML, markupLanguage) : document2;
    }
  };

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/shared/parse-json.js
  var { parse: parse5 } = JSON;

  // node_modules/.pnpm/linkedom@0.14.12/node_modules/linkedom/esm/index.js
  var parseHTML = (html, globals = null) => new DOMParser().parseFromString(
    html,
    "text/html",
    globals
  ).defaultView;
  function Document4() {
    illegalConstructor();
  }
  setPrototypeOf(Document4, Document2).prototype = Document2.prototype;

  // src/jsxFactory.ts
  var { document } = parseHTML("");
  var h = (type, props = {}, ...children) => {
    if (typeof type === "function")
      return type({ ...props, children });
    const node = document.createElement(type);
    if (props?.class) {
      props.className = props.class;
      delete props.class;
    }
    if (props?.style) {
      Object.assign(node.style, props.style);
      delete props.style;
    }
    Object.assign(node, props);
    node.append(...children.flat());
    return node;
  };

  // src/utils/getArticleDetails.ts
  var getArticleDetails = (article) => article._embedded["wp:term"].reduce(
    (acc, next) => Object.assign(
      acc,
      next.reduce((acc2, next2) => {
        acc2[next2.taxonomy] = next2.name;
        return acc2;
      }, {})
    ),
    {}
  );

  // src/components/BlogCard.tsx
  var BlogCard = ({ article }) => {
    const { category, post_tag, topic, group } = getArticleDetails(article);
    return /* @__PURE__ */ h("div", {
      class: "col-4 col-medium-2 p-card u-align--left p-card--highlighted p-card__post flex-column card-border__top"
    }, /* @__PURE__ */ h("p", {
      class: "p-muted-heading"
    }, group ?? topic ?? post_tag), /* @__PURE__ */ h("hr", {
      class: "u-sv1"
    }), /* @__PURE__ */ h("div", {
      class: "flex-column full-height"
    }, /* @__PURE__ */ h("img", {
      class: "p-card__image",
      src: article.featured_media,
      width: "16",
      height: "9"
    }), /* @__PURE__ */ h("a", {
      href: article.link
    }, /* @__PURE__ */ h("h2", {
      class: "p-heading--3 weight-base"
    }, article.title.rendered)), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("em", null, "By", " ", /* @__PURE__ */ h("a", {
      href: article._embedded.author[0].link
    }, article._embedded.author[0].name), " ", "on", " ", new Date(article.date_gmt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })))), /* @__PURE__ */ h("hr", {
      class: "u-sv1"
    }), /* @__PURE__ */ h("span", null, category));
  };

  // src/components/BlogList.tsx
  var BlogList = ({ articles }) => /* @__PURE__ */ h("div", {
    class: "u-align--center u-vertically-center min-h-screen"
  }, /* @__PURE__ */ h("div", {
    class: "grid"
  }, /* @__PURE__ */ h("div", {
    class: "row"
  }, articles.map((article) => /* @__PURE__ */ h(BlogCard, {
    article
  })))));

  // src/index.tsx
  var import_promises = __require("node:fs/promises");

  // src/utils/getArticles.ts
  var getArticles = async () => {
    try {
      const response = await fetch(
        "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json",
        {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        }
      );
      if (!response.ok)
        throw new Error(response.statusText);
      const articles = await response.json();
      return articles;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  // src/index.tsx
  var init = async () => {
    const articles = await getArticles();
    const content = (/* @__PURE__ */ h(BlogList, {
      articles
    })).outerHTML;
    const index = await (0, import_promises.readFile)("./src/static/index.html", "utf8");
    await (0, import_promises.writeFile)(
      "./dist/index.html",
      index.replace("{{ content_for_body }}", content)
    );
  };
  init();
})();
