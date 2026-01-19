# Milestone 3: Analytics Dashboard

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 2 complete

---

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

## Done When

- [ ] Tests written and passing
- [ ] Dashboard loads with real aggregated data
- [ ] Date filtering updates all charts
- [ ] Empty states handled (e.g., no sales in range)
