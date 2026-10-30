[Int]$num_1 = 42
[Int]$num_2 = "forty two"
$name, $color, [datetime]$date = "Yukio", "Shiny", (get-date).DateTime
$date_data_type = $date.GetType().Name
# Initialize variables above

Write-Host "Value of num_1 is $num_1"
Write-Host "Hello, my name is $name!"
Write-Host "My favorite color is $color."
Write-Host "Today is $date"
Write-Host "The data type for 'date' is '$date_data_type'`n"