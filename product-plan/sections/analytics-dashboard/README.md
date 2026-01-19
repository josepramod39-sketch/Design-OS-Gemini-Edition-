# Analytics Dashboard

## Overview
A comprehensive dashboard providing visual insights into business performance. It helps owners track sales velocity, monitor stock health, and identify top-performing products through interactive charts and key metrics.

## User Flows
- **View Dashboard:** User lands on the dashboard to see high-level KPIs (Total Stock Value, Monthly Sales, Low Stock Count).
- **Analyze Trends:** User views a line chart of sales vs. restocking costs over time to understand cash flow.
- **Category Breakdown:** User views a pie/bar chart showing sales distribution by category (e.g., Whiskey vs. Vodka).
- **Top Movers:** User views a list/table of top-selling items and "dead stock" (items not selling).
- **Filter Data:** User toggles between "Last 7 Days", "Last 30 Days", and "Year to Date".

## Design Decisions
- Custom SVG chart for portability (no library dependencies).
- High-contrast card design for metrics.
- Minimalist lists for top/slow movers.

## Data Used
- KpiStats
- SalesTrend
- CategoryStat
- ProductPerformance

## Components Provided
- `DashboardView`
- `KpiCard`
- `SalesChart`
- `TopMoversTable`

## Callback Props
See `types.ts` for full list.
