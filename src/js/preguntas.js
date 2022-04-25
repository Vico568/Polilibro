const preguntas = [
  [
    {
      titulo: "Example of web containers",
      opciones: [
        { textoRespuesta: "JSP Pages", isCorrect: true },
        { textoRespuesta: "Database", isCorrect: false },
        { textoRespuesta: "EJB CONTAINERS", isCorrect: false },
        { textoRespuesta: "Class", isCorrect: false },
      ],
    },
    {
      titulo: "What is a server?",
      opciones: [
        { textoRespuesta: "Environment for coding applications", isCorrect: false },
        { textoRespuesta: "Environment in which applications can run.", isCorrect: true },
        { textoRespuesta: "Settings file", isCorrect: false },
        { textoRespuesta: "Database administrator", isCorrect: false },
      ],
    },
    {
      titulo: "Example of servers",
      opciones: [
        { textoRespuesta: "All of the above", isCorrect: true },
        { textoRespuesta: "GlassFish", isCorrect: false },
        { textoRespuesta: "Oracle Fusion Middleware", isCorrect: false },
        { textoRespuesta: "Apache TomEE", isCorrect: false },
      ],
    },
    {
      titulo: "Type of configuration and packaging files used by JAVA EE?",
      opciones: [
        { textoRespuesta: "WAR and JAR", isCorrect: false },
        { textoRespuesta: "EAR, ZIP and JAN", isCorrect: false },
        { textoRespuesta: "WAR, JAR, RAR and EAR", isCorrect: true },
        { textoRespuesta: "JPG, JAR, RAR", isCorrect: true },
      ],
    },
    {
      titulo: "What is the extension of the configuration file?",
      opciones: [
        { textoRespuesta: ".JSON", isCorrect: false },
        { textoRespuesta: ".CLASS", isCorrect: false },
        { textoRespuesta: ".CONFIG", isCorrect: true },
        { textoRespuesta: ".XML", isCorrect: true },
      ],
    },
  ],
  [
    {
      titulo: "How does the HTTP protocol intervene in the client-server architecture?",
      opciones: [
        { textoRespuesta: "transferring files", isCorrect: false },
        { textoRespuesta: "does not intervene", isCorrect: false },
        { textoRespuesta: "Communicate to client and server", isCorrect: true },
      ],
    },
    {
      titulo: "Structure of the Uniform Resource Locator",
      opciones: [
        { textoRespuesta: "protocol://path/host:port", isCorrect: false },
        { textoRespuesta: "protocol://host:port/path/file", isCorrect: true },
        { textoRespuesta: "host:port/path/file/protocol", isCorrect: false },
        { textoRespuesta: "protocol://port:host/file", isCorrect: false },
      ],
    },
    {
      titulo: "This type of request adds form data to the requested URL and sends it as a packet.",
      opciones: [
        { textoRespuesta: "get", isCorrect: true },
        { textoRespuesta: "post", isCorrect: false },
        { textoRespuesta: "put", isCorrect: false },
        { textoRespuesta: "head", isCorrect: false },
      ],
    },
    {
      titulo: "¿This type of request first sends a packet containing header information and then sends a separate packet containing the form data.",
      opciones: [
        { textoRespuesta: "put", isCorrect: false },
        { textoRespuesta: "get", isCorrect: false },
        { textoRespuesta: "head", isCorrect: false },
        { textoRespuesta: "post", isCorrect: true },
      ],
    },
    {
      titulo: "What is a servlet?",
      opciones: [
        { textoRespuesta: "It is a java program that allows to generate dynamic content and interact with the customer.", isCorrect: true },
        { textoRespuesta: "Transfer protocol", isCorrect: false },
        { textoRespuesta: "A server", isCorrect: false },
        { textoRespuesta: "Environment for developing web applications", isCorrect: false },
      ],
    },
  ],
  [
    {
      titulo: "What is a jsp?",
      opciones: [
        { textoRespuesta: "Extensible web technology that uses custom elements, scripting languages, and java server objects", isCorrect: true },
        { textoRespuesta: "Environment for developing web applications", isCorrect: false },
        { textoRespuesta: "Is a java program that allows to generate dynamic content and interact with the client.", isCorrect: false },
        { textoRespuesta: "Transfer protocol", isCorrect: false },
      ],
    },
    {
      titulo: "JSP content types",
      opciones: [
        { textoRespuesta: "None", isCorrect: false },
        { textoRespuesta: "Static content", isCorrect: false },
        { textoRespuesta: "Static content and dinamic content", isCorrect: true },
        { textoRespuesta: "Dynamic Content", isCorrect: false },
      ],
    },
    {
      titulo: "JSP elements",
      opciones: [
        { textoRespuesta: "Directives, cookies, expressions", isCorrect: false },
        { textoRespuesta: "Actions, petitions and objects", isCorrect: false },
        { textoRespuesta: "Directives, declarations, scriplets, expressions", isCorrect: false },
        { textoRespuesta: "directives, declarations, scriplets, expressions, actions", isCorrect: true },
      ],
    },
    {
      titulo: "What are taglibs?",
      opciones: [
        { textoRespuesta: "Data collection", isCorrect: false },
        { textoRespuesta: "Custom JAVA tag sets that allow you to encapsulate certain actions", isCorrect: false },
        { textoRespuesta: "Different types of requests", isCorrect: false },
        { textoRespuesta: "Sets of custom HTML tags that allow you to encapsulate certain actions", isCorrect: true },
      ],
    },
    {
      titulo: "HTML pages is an example of?",
      opciones: [
        { textoRespuesta: "Static content", isCorrect: true },
        { textoRespuesta: "Dynamic content", isCorrect: false },
        { textoRespuesta: "Directives", isCorrect: false },
        { textoRespuesta: "Taglib", isCorrect: false },
      ],
    },
  ],
  [
    {
      titulo: "¿Cuál es el mejor lenguaje de programación?",
      opciones: [
        { textoRespuesta: "JavaScript", isCorrect: true },
        { textoRespuesta: "PHP", isCorrect: false },
        { textoRespuesta: "C++", isCorrect: false },
        { textoRespuesta: "Kotlin", isCorrect: false },
      ],
    },
    {
      titulo: "Con Lasfito aprendes de tutoriales...?",
      opciones: [
        { textoRespuesta: "sin contenido", isCorrect: false },
        { textoRespuesta: "sin relleno", isCorrect: true },
        { textoRespuesta: "sin gracia :v", isCorrect: false },
        { textoRespuesta: "sin código", isCorrect: false },
      ],
    },
    {
      titulo: "¿Cuánto es `11`+ 1 en JavaScript?",
      opciones: [
        { textoRespuesta: "111", isCorrect: true },
        { textoRespuesta: "12", isCorrect: false },
        { textoRespuesta: "Syntax Error", isCorrect: false },
        { textoRespuesta: "`11`1", isCorrect: false },
      ],
    },
    {
      titulo: "¿En qué año fue creado JavaScript?",
      opciones: [
        { textoRespuesta: "1997", isCorrect: false },
        { textoRespuesta: "2001", isCorrect: false },
        { textoRespuesta: "1987", isCorrect: false },
        { textoRespuesta: "1995", isCorrect: true },
      ],
    },
  ],
];

export default preguntas;
