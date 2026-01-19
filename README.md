# Design OS (Gemini Edition)

![Design OS](https://github.com/user-attachments/assets/a9c04258-7b9a-45b6-8475-3431cdf5dbe9)

**The missing design process between your idea and your codebase.**

[Design OS](https://buildermethods.com/design-os) is a product planning and design tool that helps you define your product vision, structure your data model, design your UI, and export production-ready components for implementation.

> **Note**: This is a port of the original Design OS by Brian Casel, adapted to work natively with the **Google Gemini CLI**.

---

## Getting Started

1. **Install Gemini CLI**:

    ```bash
    npm install -g @google/gemini-cli
    ```

2. **Authenticate**:
    Run `gemini login` to authenticate with your Google account.
3. **Start the Design Server**:
    In a separate terminal, start the local React development server so you can view your designs:

    ```bash
    npm run dev
    ```

4. **Launch Gemini**:
    Start the Gemini CLI in the project root:

    ```bash
    gemini
    ```

    Gemini will automatically detect the `GEMINI.md` file and enable the interactive workflow.

---

## The Workflow

Design OS powers a guided design and architecture process. You + AI, working together through structured steps. Run these commands inside the `gemini` CLI:

### 1. Vision & Roadmap

* `/product-vision` — Define what you're building. Gemini will interview you to capture your product goals.
* `/product-roadmap` — Break your product into 3-5 buildable sections.

### 2. Foundation

* `/data-model` — Define the core "nouns" (Entities) and their relationships.
* `/design-system` — Choose your color palette (Tailwind) and typography.

### 3. Application Shell

* `/design-shell` — Design the global navigation sidebar/topbar that wraps your app.

### 4. Section Design (Repeat for each section)

* `/shape-section` — Define the features and screens for a specific section.
* `/sample-data` — Generate realistic JSON data for your designs.
* `/design-screen` — Generate the actual React code for the screens. You can iterate: "Make the button larger", "Use a card layout", etc.
* `/screenshot-design` — Take a screenshot of the finished design for the export package.

### 5. Hand-off

* `/export-product` — Generate a complete "Product Plan" folder (`product-plan/`) containing everything a coding agent needs to build your real app.

---

## File Structure

```text
product/                           # Product definition (portable)
├── product-overview.md            # Product description
├── product-roadmap.md             # List of sections
├── data-model/                    # Global data model
├── design-system/                 # Design tokens (colors, fonts)
├── shell/                         # Application shell spec
└── sections/                      # Section specs, data, types, screenshots

src/                               # Design OS Application Code
├── shell/                         # Shell design components
└── sections/                      # Exportable section components

product-plan/                      # Export package (generated)
├── prompts/                       # Ready-to-use prompts for coding agents
├── instructions/                  # Implementation instructions
├── design-system/                 # Tokens, colors, fonts
└── sections/                      # Section components (with tests.md each)
```

---

## Original Credits

Created by **Brian Casel** @ [Builder Methods](https://buildermethods.com).
Design OS helps professional software developers and teams build with AI.
