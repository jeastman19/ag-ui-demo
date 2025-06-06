export type UIMessage =
  | { type: "user_message"; text: string }
  | { type: "agent_response"; text: string }
  | { type: "ui_action"; action: UIAction };

export type UIAction =
  | { type: "show_form"; fields: { name: string; label: string }[] }
  | { type: "show_options"; options: string[] };
