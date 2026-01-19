# Predictive Insights

## Overview
An intelligent "feed" of actionable business recommendations. It presents AI-driven insights (reorders, discounts, seasonal trends) in a modern, Instagram-style card format, allowing users to make high-impact decisions with single-tap actions.

## User Flows
- **View Insight Feed:** User scrolls through a vertical feed of "Insight Cards," each addressing a specific opportunity or risk.
- **Act on Insight:** User clicks a primary action button (e.g., "Reorder", "Discount") on a card to execute the suggestion.
- **Dismiss/Archive:** User dismisses an insight they don't want to act on, removing it from the feed.
- **Drill Down:** User clicks the card body to see more data backing the insight (e.g., a mini sales chart).

## Design Decisions
- Feed-style layout for mobile-first engagement.
- High-contrast visuals with category-specific colors (Red for alert, Green for opportunity).
- Action-oriented design (big buttons).

## Data Used
- Insight
- Product

## Components Provided
- `InsightsFeed`
- `InsightCard`

## Callback Props
See `types.ts` for full list.
