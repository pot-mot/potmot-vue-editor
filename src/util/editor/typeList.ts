export const prismLanguageList = [
    'javascript', 'typescript',
    'css', 'css-extras', 'html', 'less', 'sass', 'scss',
    'svg', 'icon',
    'markup',
    'http', 'uri', 'url',
    'c', 'cpp', 'cmake', 'objc',
    'rust',
    'go',
    'php', 'phpdoc',
    'perl',
    'java', 'javadoc', 'groovy', 'kotlin', 'kt', 'kts', 'scala',
    'latex', 'tex', 'matlab',
    'sql', 'graphql', 'mongodb',
    'erlang',
    'lua',
    'python', 'py', 'django', 'jinja2',
    'csharp', 'dotnet',
    'cobol',
    'makefile',
    'json', 'json5', 'jsonp',
    'xml', 'yaml', 'yml', 'ini', 'toml',
    'bash', 'shell', 'batch',
    'docker', 'dockerfile',
    'git',
    'vim',
    'dns-zone',
    'log',
    'qml',
    'scheme',
    'swift'
].sort()

export const mermaidTypeMap = new Map<string, {name: string, example: string}>()
    .set("流程图", {
        name: "graph",
        example: "graph TD;\n" +
            "    A-->B;\n" +
            "    A-->C;\n" +
            "    B-->D;\n" +
            "    C-->D;"
    })
    .set("时序图", {
        name: "sequenceDiagram",
        example: "sequenceDiagram\n" +
            "    participant Alice\n" +
            "    participant Bob\n" +
            "    Alice->>John: Hello John, how are you?\n" +
            "    loop Healthcheck\n" +
            "        John->>John: Fight against hypochondria\n" +
            "    end\n" +
            "    Note right of John: Rational thoughts <br> prevail!\n" +
            "    John-->>Alice: Great!\n" +
            "    John->>Bob: How about you?\n" +
            "    Bob-->>John: Jolly good!"
    })
    .set("甘特图", {
        name: "gantt",
        example: "gantt\n" +
            "dateFormat  YYYY-MM-DD\n" +
            "title Adding GANTT diagram to mermaid\n" +
            "excludes weekdays 2014-01-10\n" +
            "\n" +
            "section A section\n" +
            "Completed task            :done,    des1, 2014-01-06,2014-01-08\n" +
            "Active task               :active,  des2, 2014-01-09, 3d\n" +
            "Future task               :         des3, after des2, 5d\n" +
            "Future task2               :         des4, after des3, 5d"
    })
    .set("类图", {
        name: "classDiagram",
        example: "classDiagram\n" +
            "\tClass01 <|-- AveryLongClass : Cool\n" +
            "\tClass03 *-- Class04\n" +
            "\tClass05 o-- Class06\n" +
            "\tClass07 .. Class08\n" +
            "\tClass09 --> C2 : Where am i?\n" +
            "\tClass09 --* C3\n" +
            "\tClass09 --|> Class07\n" +
            "\tClass07 : equals()\n" +
            "\tClass07 : Object[] elementData\n" +
            "\tClass01 : size()\n" +
            "\tClass01 : int chimp\n" +
            "\tClass01 : int gorilla\n" +
            "\tClass08 <--> C2: Cool label"
    })
    .set("Git 图", {
        name: "gitGraph",
        example: "gitGraph\n" +
            "   commit\n" +
            "   commit\n" +
            "   branch develop\n" +
            "   checkout develop\n" +
            "   commit\n" +
            "   commit\n" +
            "   checkout main\n" +
            "   merge develop\n" +
            "   commit\n" +
            "   commit"
    })
    .set("实体关系图", {
        name: "erDiagram",
        example: "erDiagram\n" +
            "    CUSTOMER ||--o{ ORDER : places\n" +
            "    ORDER ||--|{ LINE-ITEM : contains\n" +
            "    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses"
    })
    .set("旅程图", {
        name: "journey",
        example: "journey\n" +
            "    title My working day\n" +
            "    section Go to work\n" +
            "      Make tea: 5: Me\n" +
            "      Go upstairs: 3: Me\n" +
            "      Do work: 1: Me, Cat\n" +
            "    section Go home\n" +
            "      Go downstairs: 5: Me\n" +
            "      Sit down: 5: Me"
    })
    .set("状态图", {
        name: "stateDiagram-v2",
        example: "stateDiagram-v2\n" +
            "[*] --> Still\n" +
            "Still --> [*]\n" +
            "Still --> Moving\n" +
            "Moving --> Still\n" +
            "Moving --> Crash\n" +
            "Crash --> [*]"
    })
    .set("饼图", {
        name: "pie",
        example: "pie\n" +
            "\"Dogs\" : 386\n" +
            "\"Cats\" : 85\n" +
            "\"Rats\" : 15"
    })
    .set("思维导图", {
        name: "mindmap",
        example: "mindmap\n" +
            "  root((mindmap))\n" +
            "    Origins\n" +
            "      Long history\n" +
            "      ::icon(fa fa-book)\n" +
            "      Popularisation\n" +
            "        British popular psychology author Tony Buzan\n" +
            "    Research\n" +
            "      On effectiveness<br/>and features\n" +
            "      On Automatic creation\n" +
            "        Uses\n" +
            "            Creative techniques\n" +
            "            Strategic planning\n" +
            "            Argument mapping\n" +
            "    Tools\n" +
            "      Pen and paper\n" +
            "      Mermaid"
    })
    .set("时间线", {
        name: "timeline",
        example: "timeline\n" +
            "    title History of Social Media Platform\n" +
            "    2002 : LinkedIn\n" +
            "    2004 : Facebook\n" +
            "         : Google\n" +
            "    2005 : Youtube\n" +
            "    2006 : Twitter"
    })
    .set("关系图", {
        name: "C4Context",
        example: "C4Context\n" +
            "title System Context diagram for Internet Banking System\n" +
            "\n" +
            "Person(customerA, \"Banking Customer A\", \"A customer of the bank, with personal bank accounts.\")\n" +
            "Person(customerB, \"Banking Customer B\")\n" +
            "Person_Ext(customerC, \"Banking Customer C\")\n" +
            "System(SystemAA, \"Internet Banking System\", \"Allows customers to view information about their bank accounts, and make payments.\")\n" +
            "\n" +
            "Person(customerD, \"Banking Customer D\", \"A customer of the bank, <br/> with personal bank accounts.\")\n" +
            "\n" +
            "Enterprise_Boundary(b1, \"BankBoundary\") {\n" +
            "\n" +
            "  SystemDb_Ext(SystemE, \"Mainframe Banking System\", \"Stores all of the core banking information about customers, accounts, transactions, etc.\")\n" +
            "\n" +
            "  System_Boundary(b2, \"BankBoundary2\") {\n" +
            "    System(SystemA, \"Banking System A\")\n" +
            "    System(SystemB, \"Banking System B\", \"A system of the bank, with personal bank accounts.\")\n" +
            "  }\n" +
            "\n" +
            "  System_Ext(SystemC, \"E-mail system\", \"The internal Microsoft Exchange e-mail system.\")\n" +
            "  SystemDb(SystemD, \"Banking System D Database\", \"A system of the bank, with personal bank accounts.\")\n" +
            "\n" +
            "  Boundary(b3, \"BankBoundary3\", \"boundary\") {\n" +
            "    SystemQueue(SystemF, \"Banking System F Queue\", \"A system of the bank, with personal bank accounts.\")\n" +
            "    SystemQueue_Ext(SystemG, \"Banking System G Queue\", \"A system of the bank, with personal bank accounts.\")\n" +
            "  }\n" +
            "}\n" +
            "\n" +
            "BiRel(customerA, SystemAA, \"Uses\")\n" +
            "BiRel(SystemAA, SystemE, \"Uses\")\n" +
            "Rel(SystemAA, SystemC, \"Sends e-mails\", \"SMTP\")\n" +
            "Rel(SystemC, customerA, \"Sends e-mails to\")"
    })

export const mermaidTypeNameList = Array.from(mermaidTypeMap.keys())