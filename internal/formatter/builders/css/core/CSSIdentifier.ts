import {CSSIdentifier} from "@internal/ast";
import {Builder, Token} from "@internal/formatter";

export default function CSSIdentifier(
	builder: Builder,
	node: CSSIdentifier,
): Token {
	return node.value;
}
