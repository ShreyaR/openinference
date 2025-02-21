/**
 * Semantic conventions for OpenInference tracing
 */

export const SemanticAttributePrefixes = {
  input: "input",
  output: "output",
  llm: "llm",
  retrieval: "retrieval",
  reranker: "reranker",
  messages: "messages",
  message: "message",
  document: "document",
  embedding: "embedding",
  tool: "tool",
  tool_call: "tool_call",
  metadata: "metadata",
  tag: "tag",
  session: "session",
  user: "user",
  openinference: "openinference",
  message_content: "message_content",
  image: "image",
} as const;

export const LLMAttributePostfixes = {
  model_name: "model_name",
  token_count: "token_count",
  input_messages: "input_messages",
  output_messages: "output_messages",
  invocation_parameters: "invocation_parameters",
  prompts: "prompts",
  prompt_template: "prompt_template",
  function_call: "function_call",
} as const;

export const LLMPromptTemplateAttributePostfixes = {
  variables: "variables",
  template: "template",
} as const;

export const RetrievalAttributePostfixes = {
  documents: "documents",
} as const;

export const RerankerAttributePostfixes = {
  input_documents: "input_documents",
  output_documents: "output_documents",
  query: "query",
  model_name: "model_name",
  top_k: "top_k",
} as const;

export const EmbeddingAttributePostfixes = {
  embeddings: "embeddings",
  text: "text",
  model_name: "model_name",
  vector: "vector",
} as const;

export const ToolAttributePostfixes = {
  name: "name",
  description: "description",
  parameters: "parameters",
} as const;

export const MessageAttributePostfixes = {
  role: "role",
  content: "content",
  contents: "contents",
  name: "name",
  function_call_name: "function_call_name",
  function_call_arguments_json: "function_call_arguments_json",
  tool_calls: "tool_calls",
} as const;

export const MessageContentsAttributePostfixes = {
  type: "type",
  text: "text",
  image: "image",
} as const;

export const ImageAttributesPostfixes = {
  url: "url",
} as const;

export const ToolCallAttributePostfixes = {
  function_name: "function.name",
  function_arguments_json: "function.arguments",
} as const;

export const DocumentAttributePostfixes = {
  id: "id",
  content: "content",
  score: "score",
  metadata: "metadata",
} as const;

export const TagAttributePostfixes = {
  tags: "tags",
} as const;

export const SessionAttributePostfixes = {
  id: "id",
} as const;

export const UserAttributePostfixes = {
  id: "id",
} as const;

/**
 * The input to any span
 */
export const INPUT_VALUE = `${SemanticAttributePrefixes.input}.value` as const;
export const INPUT_MIME_TYPE =
  `${SemanticAttributePrefixes.input}.mime_type` as const;
/**
 * The output of any span
 */
export const OUTPUT_VALUE =
  `${SemanticAttributePrefixes.output}.value` as const;
export const OUTPUT_MIME_TYPE =
  `${SemanticAttributePrefixes.output}.mime_type` as const;
/**
 * The messages sent to the LLM for completions
 * Typically seen in OpenAI chat completions
 * @see https://beta.openai.com/docs/api-reference/completions/create
 */
export const LLM_INPUT_MESSAGES =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.input_messages}` as const;

/**
 * The prompts sent to the LLM for completions
 * Typically seen in OpenAI legacy completions
 * @see https://beta.openai.com/docs/api-reference/completions/create
 */
export const LLM_PROMPTS =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.prompts}` as const;

/**
 * The JSON representation of the parameters passed to the LLM
 */
export const LLM_INVOCATION_PARAMETERS =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.invocation_parameters}` as const;

/**
 * The messages received from the LLM for completions
 * Typically seen in OpenAI chat completions
 * @see https://platform.openai.com/docs/api-reference/chat/object#choices-message
 */
export const LLM_OUTPUT_MESSAGES =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.output_messages}` as const;

/**
 * The name of the LLM model
 */
export const LLM_MODEL_NAME =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.model_name}` as const;

/** Token count for the completion by the llm */
export const LLM_TOKEN_COUNT_COMPLETION =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.token_count}.completion` as const;

/** Token count for the prompt to the llm */
export const LLM_TOKEN_COUNT_PROMPT =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.token_count}.prompt` as const;

/** Token count for the entire transaction with the llm */
export const LLM_TOKEN_COUNT_TOTAL =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.token_count}.total` as const;
/**
 * The role that the LLM assumes the message is from
 * during the LLM invocation
 */
export const MESSAGE_ROLE =
  `${SemanticAttributePrefixes.message}.${MessageAttributePostfixes.role}` as const;

/**
 * The name of the message. This is only used for role 'function' where the name
 * of the function is captured in the name field and the parameters are captured in the
 * content.
 */
export const MESSAGE_NAME =
  `${SemanticAttributePrefixes.message}.${MessageAttributePostfixes.name}` as const;

/**
 * The tool calls generated by the model, such as function calls.
 */
export const MESSAGE_TOOL_CALLS =
  `${SemanticAttributePrefixes.message}.${MessageAttributePostfixes.tool_calls}` as const;

/**
 * tool_call.function.name
 */
export const TOOL_CALL_FUNCTION_NAME =
  `${SemanticAttributePrefixes.tool_call}.${ToolCallAttributePostfixes.function_name}` as const;

/**
 * tool_call.function.argument (JSON string)
 */
export const TOOL_CALL_FUNCTION_ARGUMENTS_JSON =
  `${SemanticAttributePrefixes.tool_call}.${ToolCallAttributePostfixes.function_arguments_json}` as const;

/**
 * The LLM function call function name
 */
export const MESSAGE_FUNCTION_CALL_NAME =
  `${SemanticAttributePrefixes.message}.${MessageAttributePostfixes.function_call_name}` as const;

/**
 * The LLM function call function arguments in a json string
 */
export const MESSAGE_FUNCTION_CALL_ARGUMENTS_JSON =
  `${SemanticAttributePrefixes.message}.${MessageAttributePostfixes.function_call_arguments_json}` as const;
/**
 * The content of the message sent to the LLM
 */
export const MESSAGE_CONTENT =
  `${SemanticAttributePrefixes.message}.${MessageAttributePostfixes.content}` as const;
/**
 * The array of contents for the message sent to the LLM. Each element of the array is
 * an `message_content` object.
 */
export const MESSAGE_CONTENTS =
  `${SemanticAttributePrefixes.message}.${MessageAttributePostfixes.contents}` as const;
/**
 * The type of content sent to the LLM
 */
export const MESSAGE_CONTENT_TYPE =
  `${SemanticAttributePrefixes.message_content}.${MessageContentsAttributePostfixes.type}` as const;
/**
 * The text content of the message sent to the LLM
 */
export const MESSAGE_CONTENT_TEXT =
  `${SemanticAttributePrefixes.message_content}.${MessageContentsAttributePostfixes.text}` as const;
/**
 * The image content of the message sent to the LLM
 */
export const MESSAGE_CONTENT_IMAGE =
  `${SemanticAttributePrefixes.message_content}.${MessageContentsAttributePostfixes.image}` as const;
/**
 * The http or base64 link to the image
 */
export const IMAGE_URL =
  `${SemanticAttributePrefixes.image}.${ImageAttributesPostfixes.url}` as const;

export const DOCUMENT_ID =
  `${SemanticAttributePrefixes.document}.${DocumentAttributePostfixes.id}` as const;

export const DOCUMENT_CONTENT =
  `${SemanticAttributePrefixes.document}.${DocumentAttributePostfixes.content}` as const;

export const DOCUMENT_SCORE =
  `${SemanticAttributePrefixes.document}.${DocumentAttributePostfixes.score}` as const;

export const DOCUMENT_METADATA =
  `${SemanticAttributePrefixes.document}.${DocumentAttributePostfixes.metadata}` as const;

/**
 * The text that was embedded to create the vector
 */
export const EMBEDDING_TEXT =
  `${SemanticAttributePrefixes.embedding}.${EmbeddingAttributePostfixes.text}` as const;

/**
 * The name of the model that was used to create the vector
 */
export const EMBEDDING_MODEL_NAME =
  `${SemanticAttributePrefixes.embedding}.${EmbeddingAttributePostfixes.model_name}` as const;

/**
 * The embedding vector. Typically a high dimensional vector of floats or ints
 */
export const EMBEDDING_VECTOR =
  `${SemanticAttributePrefixes.embedding}.${EmbeddingAttributePostfixes.vector}` as const;

/**
 * The embedding list root
 */
export const EMBEDDING_EMBEDDINGS =
  `${SemanticAttributePrefixes.embedding}.${EmbeddingAttributePostfixes.embeddings}` as const;

/**
 * The retrieval documents list root
 */
export const RETRIEVAL_DOCUMENTS =
  `${SemanticAttributePrefixes.retrieval}.${RetrievalAttributePostfixes.documents}` as const;

const PROMPT_TEMPLATE_PREFIX =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.prompt_template}` as const;

/**
 * The JSON representation of the variables used in the prompt template
 */
export const PROMPT_TEMPLATE_VARIABLES =
  `${PROMPT_TEMPLATE_PREFIX}.variables` as const;

/**
 * A prompt template
 */
export const PROMPT_TEMPLATE_TEMPLATE =
  `${PROMPT_TEMPLATE_PREFIX}.template` as const;

/**
 * The JSON representation of a function call of an LLM
 */
export const LLM_FUNCTION_CALL =
  `${SemanticAttributePrefixes.llm}.${LLMAttributePostfixes.function_call}` as const;

/**
 * The name of a tool
 */
export const TOOL_NAME =
  `${SemanticAttributePrefixes.tool}.${ToolAttributePostfixes.name}` as const;

/**
 * The description of a tool
 */
export const TOOL_DESCRIPTION =
  `${SemanticAttributePrefixes.tool}.${ToolAttributePostfixes.description}` as const;

/**
 * The session id of a trace. Used to correlate spans in a single session.
 */
export const SESSION_ID =
  `${SemanticAttributePrefixes.session}.${SessionAttributePostfixes.id}` as const;

/**
 * The user id of a trace. Used to correlate spans for a single user.
 */
export const USER_ID =
  `${SemanticAttributePrefixes.user}.${UserAttributePostfixes.id}` as const;

export const SemanticConventions = {
  INPUT_VALUE,
  INPUT_MIME_TYPE,
  OUTPUT_VALUE,
  OUTPUT_MIME_TYPE,
  LLM_INPUT_MESSAGES,
  LLM_OUTPUT_MESSAGES,
  LLM_MODEL_NAME,
  LLM_PROMPTS,
  LLM_INVOCATION_PARAMETERS,
  LLM_TOKEN_COUNT_COMPLETION,
  LLM_TOKEN_COUNT_PROMPT,
  LLM_TOKEN_COUNT_TOTAL,
  MESSAGE_ROLE,
  MESSAGE_NAME,
  MESSAGE_TOOL_CALLS,
  TOOL_CALL_FUNCTION_NAME,
  TOOL_CALL_FUNCTION_ARGUMENTS_JSON,
  MESSAGE_FUNCTION_CALL_NAME,
  MESSAGE_FUNCTION_CALL_ARGUMENTS_JSON,
  MESSAGE_CONTENT,
  DOCUMENT_ID,
  DOCUMENT_CONTENT,
  DOCUMENT_SCORE,
  DOCUMENT_METADATA,
  EMBEDDING_EMBEDDINGS,
  EMBEDDING_TEXT,
  EMBEDDING_MODEL_NAME,
  EMBEDDING_VECTOR,
  TOOL_DESCRIPTION,
  TOOL_NAME,
  PROMPT_TEMPLATE_VARIABLES,
  PROMPT_TEMPLATE_TEMPLATE,
  LLM_FUNCTION_CALL,
  RETRIEVAL_DOCUMENTS,
  SESSION_ID,
  USER_ID,
  // OpenInference steps
  OPENINFERENCE_SPAN_KIND: `${SemanticAttributePrefixes.openinference}.span.kind`,
} as const;

export enum OpenInferenceSpanKind {
  LLM = "llm",
  CHAIN = "chain",
  TOOL = "tool",
  RETRIEVER = "retriever",
  RERANKER = "reranker",
  EMBEDDING = "embedding",
  AGENT = "agent",
  GUARDRAIL = "guardrail",
}

export enum MimeType {
  TEXT = "text/plain",
  JSON = "application/json",
}
