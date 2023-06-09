import { TextDocuments } from "vscode-languageserver/node.js";
import { TextDocument } from "vscode-languageserver-textdocument";
import { DocumentInfo } from "./yaml/parser/parser.js";

export const documents = {
    manager: new TextDocuments(TextDocument),
    list: new Map<string, DocumentInfo>(),
    getDocument(uri: string) {
        return this.list.get(uri);
    },
    set(doc: DocumentInfo) {
        this.list.set(doc.base.uri, doc);
    }
};
