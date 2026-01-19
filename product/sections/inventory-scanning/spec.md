# Inventory & Scanning Specification

## Overview
The core module for tracking stock and processing intake. It features a card-based inventory list with voice-optimized search and provides a dual-method input (Camera/Upload) for processing invoices via AI, followed by a modal-based review step.

## User Flows
- **View Inventory:** User sees a searchable grid of inventory cards showing key details (Name, Stock, Price, Last Updated).
- **Scan/Upload Invoice:** User taps "Camera" or "Upload" -> AI processes the image -> Results open in a Review Modal -> User confirms/edits data -> Stock is updated.
- **Manual Edit:** User clicks an inventory card -> Navigates to a detailed view/table -> Manually adjusts stock levels (audit log saved in background).
- **Voice Search:** User uses voice commands to filter the inventory list (e.g., "Show me low stock whiskeys").

## UI Requirements
- **Top Action Bar:** Prominent "Camera" and "Upload File" buttons.
- **Inventory Cards:** Display Name, Stock Level, Price, Last Updated. Click to view details.
- **Review Modal:** A focused modal to verify extracted invoice data before saving.
- **Search:** Text input + Voice integration; Filters for "Low Stock", "Recently Added".

## Configuration
- shell: true
