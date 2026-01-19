# Milestone 2: Inventory & Scanning

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

---

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

Before implementing this section, **write tests first** based on the test specifications provided.

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

## Done When

- [ ] Tests written and passing
- [ ] Users can see real inventory data
- [ ] Uploading an image triggers the review modal with parsed data
- [ ] Confirming an invoice updates actual stock levels
