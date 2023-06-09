import { DocumentInfo } from "../yaml/parser/parser.js";
import { Highlighter } from "./highlighter.js";
import { Parser } from "./parser.js";
import { Expr } from "./parserExpressions.js";
import { MythicScanner } from "./scanner.js";

export function getAst(source: string) {
    return new Parser(new MythicScanner(source).scanTokens()).parse();
}
