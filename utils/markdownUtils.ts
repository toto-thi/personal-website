interface MarkdownNode {
  type: string;
  value?: string;
  children?: MarkdownNode[];
};

export function extractTextFromBody(body: { children: MarkdownNode[] }): string {
  const extractText = (nodes: MarkdownNode[]): string => {
    return nodes
      .map(node => {
        if (node.type === 'text' && node.value) {
          return node.value;
        } else if (node.type === 'element' && node.children) {
          // Recursively extract text from children if the node is an element
          return extractText(node.children);
        }
        return '';
      })
      .join(' ');
  };

  return extractText(body.children);
};