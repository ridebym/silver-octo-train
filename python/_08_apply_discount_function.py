#You should define a function named apply_discount.

#The apply_discount function should take exactly two parameters: price and discount.

#If price is not a number (int or float), the function should return the string The price should be a number.

#If discount is not a number (int or float), the function should return the string The discount should be a number.

#If price is less than or equal to 0, the function should return the string The price should be greater than 0.

#If discount is less than 0 or greater than 100, the function should return the string The discount should be between 0 and 100.

#If both inputs are valid, the function should calculate the discount as a percentage of the price.

#The function should return the final price after applying the discount.Here is the implementation of the `apply_discount` function based on the provided requirements:

def apply_discount(price, discount):    
    # Check if price is a number
    if not isinstance(price, (int, float)):
        return "The price should be a number."
    
    # Check if discount is a number
    if not isinstance(discount, (int, float)):
        return "The discount should be a number."
    
    # Check if price is greater than 0
    if price <= 0:
        return "The price should be greater than 0."
    
    # Check if discount is between 0 and 100
    if discount < 0 or discount > 100:
        return "The discount should be between 0 and 100."
    
    # Calculate the final price after applying the discount
    final_price = price * (1 - discount / 100)
    
    return final_price