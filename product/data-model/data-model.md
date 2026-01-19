# Data Model

## Entities

### Supplier
Represents the vendors providing stock. Contains logistics details like sales rep, route (RTE), and stop (STP) information.

### Product
The master definition of a liquor item. Includes static details like UPC, description, bottle size, and pack configuration (units per case).

### Invoice
The primary document for stock intake. Captures financial and scheduling details including P.O. number, due date, payment terms, and special delivery instructions.

### InvoiceItem
Individual line items extracted from an invoice. Tracks specific quantities (cases/bottles), unit costs, discounts, and extended amounts for a transaction.

### Inventory
The live record of stock on hand for each product. Updates based on processed invoices (inflow) and sales data (outflow).

### Insight
AI-generated recommendations for business actions, such as reorder alerts or discount suggestions based on stock velocity and sales trends.

## Relationships

- Supplier issues many Invoices
- Invoice contains many InvoiceItems
- InvoiceItem references a single Product
- Inventory belongs to a Product
- Insight references specific Products or Inventory levels
