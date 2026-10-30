$food = "pizza", "burrito", "curry", "pho", "fries", "soup"

# Enter your statements below
$favorite = $food[3]
$food[2] = "samosa"
$fast_food = $food[0,1,4]
$reverse_food = $food[5..0]
#PS > $colors.ForEach({ $PSItem.Length })
$fast_food.ForEach({"Fast foods: " + $PSItem})
# Enter your statements above

Write-Host My favorite food is $favorite
Write-Host The foods in reverse:
$reverse_food