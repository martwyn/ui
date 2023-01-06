/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./containers/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "overlay-bg": "var(--overlay-bg)",
        "main-bg": "var(--main-bg)",
        "card-bg": "var(--card-bg)",
        "chat-section-bg": "var(--chat-section-bg)",
        "chat-author-bg": "var(--chat-author-bg)",
        "chat-author-text": "var(--chat-author-text)",
        "chat-bot-bg": "var(--chat-bot-bg)",
        "chat-bot-text": "var(--chat-bot-text)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        icon: "var(--icon)",
        "icon-hover": "var(--icon-hover)",
        "tooltip-bg": "var(--tooltip-bg)",
        "tooltip-text": "var(--tooltip-text)",
        "spinner-bg": "var(--spinner-bg)",
        "spinner-fg": "var(--spinner-fg)",
        "input-bg": "var(--input-bg)",
        "input-focus-border": "var(--input-focus-border)",
        "input-text": "var(--input-text)",
        "button-bg": "var(--button-bg)",
        "button-border": "var(--button-border)",
        "button-text": "var(--button-text)",
        "button-focus-bg": "var(--button-focus-bg)",
        "button-focus-text": "var(--button-focus-text)",
      },
    },
  },
  plugins: [],
};
