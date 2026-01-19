# Milestone 4: Predictive Insights

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 3 complete

---

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

## Done When

- [ ] Tests written and passing
- [ ] Background jobs generate insights based on real data
- [ ] Feed displays active insights
- [ ] Clicking "Reorder" creates a purchase order
- [ ] Dismissing hides the card
