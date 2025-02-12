import re

def calculate_sale(items):
    total_original = 0.0
    total_sale = 0.0
    
    for item in items.split(","):
        match = re.search(r"\$([\d]+(?:\.\d+)?)\s*(\d+)%", item)
        if match:
            price = float(match.group(1))
            discount = int(match.group(2))
            sale_price = price * (1 - discount / 100)
            
            total_original += price
            total_sale += sale_price
    
    amount_saved = total_original - total_sale
    
    return (f"Total Original Price:${total_original:.2f};"
            f"Total sale price:${total_sale:.2f};"
            f"Amount saved:${amount_saved:.2f};")

# Example usage
inputs = [
    "Jacket $34 12%, Hoodie $25 5%, Shirt $12 50%",
    "Pants --$20-10%, Shorts -$15 -10%",
    "Sweater $36 12%, Shirt 12 50%",
    "Bag $25.50 10%"
]

for inp in inputs:
    print(calculate_sale(inp))