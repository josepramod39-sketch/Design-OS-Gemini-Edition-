# Test Instructions: Inventory & Scanning

## Overview
Test the core inventory browsing, searching, and the critical invoice scanning/review flow.

---

## User Flow Tests

### Flow 1: Scan and Review Invoice

**Scenario:** User uploads an invoice image and reviews the extracted data.

#### Success Path

**Setup:**
- User is on the Inventory page.

**Steps:**
1. User clicks "Upload Invoice" button.
2. (Mock the upload completion)
3. **Review Modal** appears with title "Review Scanned Invoice".
4. User sees list of extracted items (e.g., "Jack Daniel's").
5. User clicks "Confirm & Update Inventory".

**Expected Results:**
- [ ] `onConfirmInvoice` callback is fired with the invoice object.
- [ ] Modal closes.

#### Failure Path: Discard Scan

**Steps:**
1. User opens the Review Modal.
2. User clicks "Discard" or the Close icon.

**Expected Results:**
- [ ] `onDiscardInvoice` callback is fired.
- [ ] Modal closes.

---

### Flow 2: Update Stock Manually

**Scenario:** User manually adjusts the stock count for an item.

**Steps:**
1. User clicks the "Adjust Stock" action on an `InventoryCard`.
2. (Assuming a dialog or prompt opens, or immediate action)

**Expected Results:**
- [ ] `onUpdateStock` callback is fired with the item ID and new values.

---

## Empty State Tests

### Primary Empty State

**Scenario:** No inventory items exist.

**Setup:**
- `inventory` prop is `[]`.

**Expected Results:**
- [ ] "No inventory items found" message is visible.
- [ ] "Scan New" button is still accessible.

---

## Component Interaction Tests

### InventoryCard

**Visuals:**
- [ ] Displays product image, name, and stock count.
- [ ] Shows "Low Stock" badge if status is 'Low Stock'.

**Interactions:**
- [ ] Clicking the card fires `onViewDetails`.
- [ ] Clicking the menu > "Adjust Stock" fires `onUpdateStock`.
