# EdithRp — Complete Implementation Instructions

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Backend API endpoints and database schema
- Authentication and authorization
- Data fetching and state management
- Business logic and validation
- Integration of the provided UI components with real data

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper error handling and loading states
- **DO** implement empty states when no records exist (first-time users, after deletions)
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the backend and data layer

---

# Milestone 1: Foundation

## Goal

Set up the foundational elements: design tokens, data model types, routing structure, and application shell.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

### 2. Data Model Types

Create TypeScript interfaces for your core entities:

- See `product-plan/data-model/types.ts` for interface definitions
- See `product-plan/data-model/README.md` for entity relationships

### 3. Routing Structure

Create placeholder routes for each section:

- `/inventory` (Inventory & Scanning)
- `/analytics` (Analytics Dashboard)
- `/insights` (Predictive Insights)
- `/voice` (Voice Command Center)

### 4. Application Shell

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper
- `MainNav.tsx` — Navigation component
- `UserMenu.tsx` — User menu with avatar

**Wire Up Navigation:**

Connect navigation to your routing:
- Inventory & Scanning -> `/inventory`
- Analytics Dashboard -> `/analytics`
- Predictive Insights -> `/insights`
- Voice Command Center -> `/voice`

**User Menu:**

The user menu expects:
- User name
- Avatar URL (optional)
- Logout callback

---

# Milestone 2: Inventory & Scanning

## Goal

Implement the Inventory & Scanning feature — Manage stock levels and automatically update inventory by scanning invoices/receipts.

## Overview

The core module for tracking stock and processing intake. It features a card-based inventory list with voice-optimized search and provides a dual-method input (Camera/Upload) for processing invoices via AI, followed by a modal-based review step.

**Key Functionality:**
- View a searchable grid of inventory cards
- Upload invoice images for AI processing
- Review extracted invoice data in a modal before saving
- Manually adjust stock levels for individual items
- Filter inventory by stock status (Low, Critical)

## Recommended Approach: Test-Driven Development

See `product-plan/sections/inventory-scanning/tests.md` for detailed test-writing instructions.

## What to Implement

### Components

Copy the section components from `product-plan/sections/inventory-scanning/components/`:

- `InventoryView`
- `InventoryCard`
- `ReviewModal`

### Data Layer

The components expect these data shapes:

- `InventoryItem`
- `PendingInvoice`
- `Product`

You'll need to:
- Create API endpoints for fetching inventory
- Implement file upload endpoint for invoices
- Integreate with an OCR/AI service (like Google Gemini or Document AI) to parse invoices
- Create endpoints for updating stock

### Callbacks

Wire up these user actions:

- `onScanUpload`: Trigger file picker
- `onConfirmInvoice`: Save the parsed invoice items to the database and update stock
- `onUpdateStock`: Patch the inventory record
- `onSearch`: Filter the list query

---

# Milestone 3: Analytics Dashboard

## Goal

Implement the Analytics Dashboard — Visualize sales trends, stock turnover, and performance reports.

## Overview

A comprehensive dashboard providing visual insights into business performance. It helps owners track sales velocity, monitor stock health, and identify top-performing products through interactive charts and key metrics.

**Key Functionality:**
- View high-level KPIs (Revenue, Stock Value)
- Visualize sales vs costs over time
- See sales breakdown by category
- Identify top selling and dead stock items
- Filter all data by date range (7d, 30d, YTD)

## Recommended Approach: Test-Driven Development

See `product-plan/sections/analytics-dashboard/tests.md`.

## What to Implement

### Components

Copy from `product-plan/sections/analytics-dashboard/components/`:

- `DashboardView`
- `KpiCard`
- `SalesChart`
- `TopMoversTable`

### Data Layer

The components expect:
- `KpiStats`
- `SalesTrend`
- `CategoryStat`

You'll need to:
- Write complex aggregation queries (SUM, COUNT, GROUP BY) for sales data
- Calculate percentage changes period-over-period
- Optimize these queries for performance

### Callbacks

- `onDateRangeChange`: Refetch data with new start/end dates

---

# Milestone 4: Predictive Insights

## Goal

Implement Predictive Insights — View AI-driven suggestions for reordering stock and applying discounts.

## Overview

An intelligent "feed" of actionable business recommendations. It presents AI-driven insights (reorders, discounts, seasonal trends) in a modern, Instagram-style card format.

**Key Functionality:**
- Scroll through a feed of generated insights
- Act on insights with one click (e.g., "Reorder")
- Dismiss insights to remove them from the feed

## Recommended Approach: Test-Driven Development

See `product-plan/sections/predictive-insights/tests.md`.

## What to Implement

### Components

Copy from `product-plan/sections/predictive-insights/components/`:

- `InsightsFeed`
- `InsightCard`

### Data Layer

- `Insight` entity

You'll need to:
- Implement a background job or scheduled task that analyzes inventory/sales data to generate insights
- Create an API to fetch active insights
- Implement endpoints to "resolve" or "dismiss" insights

### Business Logic

- **Stockout Algorithm:** Check if `stock / daily_velocity < lead_time`
- **Dead Stock Algorithm:** Check if `last_sale_date > 60 days`

---

# Milestone 5: Voice Command Center

## Goal

Implement the Voice Command Center — Search for products and query stock status using natural voice commands.

## Overview

A sophisticated natural language interface for EdithRp. It provides an overlay-based chat experience where users can query stock, analyze sales, and trigger actions using voice.

**Key Functionality:**
- Activate voice listening via UI
- Transcribe speech to text
- Process natural language intent (LLM integration)
- Return rich structured data (Product cards, stats) in the chat

## Recommended Approach: Test-Driven Development

See `product-plan/sections/voice-command-center/tests.md`.

## What to Implement

### Components

Copy from `product-plan/sections/voice-command-center/components/`:

- `VoiceOverlay`
- `VoiceOrb`
- `ChatMessage`

### Data Layer

- `ChatMessage`

You'll need to:
- Integrate a Speech-to-Text API (e.g., OpenAI Whisper, Google STT, or browser native API)
- Integrate an LLM (e.g., Gemini) to interpret the intent:
    - "Check stock for X" -> SQL Query -> Return Product
    - "How were sales?" -> SQL Query -> Return Stats
- Manage conversation state
