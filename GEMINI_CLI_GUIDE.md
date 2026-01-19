# Using Design OS with Google Gemini CLI

Design OS has been fully ported to work natively with the Google Gemini CLI. This guide will help you get started.

## Prerequisites

1. **Install Gemini CLI**:

    ```bash
    npm install -g @google/gemini-cli
    ```

2. **Authenticate**:
    Run `gemini login` to authenticate with your Google account.

## Getting Started

1. **Open the Project**:
    Navigate to the project directory in your terminal:

    ```bash
    cd e:\Dos\design-os
    ```

2. **Start the Design Server**:
    In a separate terminal, start the local React development server so you can view your designs:

    ```bash
    npm run dev
    ```

3. **Launch Gemini**:
    Start the Gemini CLI in the project root:

    ```bash
    gemini
    ```

    Gemini will automatically detect the `GEMINI.md` file and understand the project context, rules, and custom commands.

## The Workflow

Follow this step-by-step process to design your product.

### 1. Vision & Roadmap

* **Command**: `/product-vision`
  * **Goal**: Define what you're building. Gemini will interview you to capture your product goals.
* **Command**: `/product-roadmap`
  * **Goal**: Break your product into 3-5 buildable sections.

### 2. Foundation

* **Command**: `/data-model`
  * **Goal**: Define the core "nouns" (Entities) and their relationships.
* **Command**: `/design-system`
  * **Goal**: Choose your color palette (Tailwind) and typography.

### 3. Application Shell

* **Command**: `/design-shell`
  * **Goal**: Design the global navigation sidebar/topbar that wraps your app.

### 4. Section Design (Repeat for each section)

* **Command**: `/shape-section`
  * **Goal**: Define the features and screens for a specific section.
* **Command**: `/sample-data`
  * **Goal**: Generate realistic JSON data for your designs.
* **Command**: `/design-screen`
  * **Goal**: Generate the actual React code for the screens. You can iterate: "Make the button larger", "Use a card layout", etc.
* **Command**: `/screenshot-design`
  * **Goal**: Take a screenshot of the finished design for the export package.

### 5. Hand-off

* **Command**: `/export-product`
  * **Goal**: Generate a complete "Product Plan" folder (`product-plan/`) containing everything a coding agent needs to build your real app.

## Tips for Success

* **Be Conversational**: Design OS is designed to be interactive. Treat Gemini like a partner, not just a tool.
* **Iterate**: If a screen design isn't quite right, just ask Gemini to change it. "Move the search bar to the top", "Make the list items more compact".
* **Check `GEMINI.md`**: This file contains the "brain" of the integration. If you want to customize how Gemini behaves, you can edit this file.
