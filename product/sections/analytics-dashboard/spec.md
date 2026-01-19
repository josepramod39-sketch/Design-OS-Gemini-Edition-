# Analytics Dashboard Specification

## Overview
A comprehensive dashboard providing visual insights into business performance. It helps owners track sales velocity, monitor stock health, and identify top-performing products through interactive charts and key metrics.

## User Flows
- **View Dashboard:** User lands on the dashboard to see high-level KPIs (Total Stock Value, Monthly Sales, Low Stock Count).
- **Analyze Trends:** User views a line chart of sales vs. restocking costs over time to understand cash flow.
- **Category Breakdown:** User views a pie/bar chart showing sales distribution by category (e.g., Whiskey vs. Vodka).
- **Top Movers:** User views a list/table of top-selling items and "dead stock" (items not selling).
- **Filter Data:** User toggles between "Last 7 Days", "Last 30 Days", and "Year to Date".

## UI Requirements
- **KPI Cards:** Top row displaying 3-4 critical numbers (with percentage change indicators).
- **Main Chart:** Large area chart for Sales Trends.
- **Category Chart:** Donut or Bar chart for sales by category.
- **Top/Bottom Lists:** Compact tables showing "Top Sellers" and "Slow Movers".
- **Date Range Picker:** To filter all data on the dashboard.

## Configuration
- shell: true
