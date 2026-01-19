# Test Instructions: Analytics Dashboard

## Overview
Test the data visualization components and filtering logic.

---

## User Flow Tests

### Flow 1: Filter Dashboard by Date

**Scenario:** User changes the date range filter.

#### Success Path

**Setup:**
- Dashboard is loaded with default "30d" data.

**Steps:**
1. User clicks the Date Range dropdown (Select).
2. User selects "Last 7 Days".

**Expected Results:**
- [ ] `onDateRangeChange` callback is fired with "7d".
- [ ] (Integration) Data should refresh.

---

### Flow 2: View Full Report

**Scenario:** User exports the dashboard data.

**Steps:**
1. User clicks "Export Report" button.

**Expected Results:**
- [ ] `onViewFullReport` callback is fired.

---

## Empty State Tests

### Empty Charts

**Scenario:** No sales data available for the selected range.

**Setup:**
- `salesTrends` is `[]`.

**Expected Results:**
- [ ] Chart component should render an empty state or "No data available" message (instead of crashing).

---

## Component Interaction Tests

### KpiCard

**Visuals:**
- [ ] Displays label, value, and percentage change.
- [ ] Arrow icon matches the trend (Up/Down/Neutral).
- [ ] Color coding matches the trend (Green/Red/Gray).
