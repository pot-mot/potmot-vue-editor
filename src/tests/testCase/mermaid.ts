import {mermaidGraphList} from "../../constants/mermaidGraph";

export const mermaidTestCase = mermaidGraphList.map(item => `\`\`\`mermaid\n${item.value}\n\`\`\`\n\n`)