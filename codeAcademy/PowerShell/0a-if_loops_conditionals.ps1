$var = 5
if ($var -eq 5) {
  Write-Host "It's a match"
}

--------------------------------------------------------------------------------
$var = 19
if ($var -gt 10) { 
	Write-Host "Larger than 10"
} elseif ($var -gt 5) {
  Write-Host "Larger than even 5!"
} elseif ($var -gt 0) {
  Write-Host "Larger than nothing!"
} else {
  Write-Host "This is at the most nothing"
}

-------------------------------------------------------------------------------
$var = 5
switch ($var) {
  {$_ -eq 5} {
    Write-Host "Is equal to 5"
  }
  {$_ -lt 0} {
    Write-Host "Is less than 0"
  }
  {$_ -gt 0} {
    Write-Host "Is more than nothing"
  }
  default {
    Write-Host "Is this a number? No."
  }
}

--------------------------------------------------------------------------------
for ($i = 1; $i -le 100; $i++) {
  $square = $i * $i
  Write-Host "The square of" $i "is" $square
}

--------------------------------------------------------------------------------
$recipe = "flour", "sugar", "salt", "oil"
foreach ($ingredient in $recipe) {
  Write-Host "My recipe includes" $ingredient
}

--------------------------------------------------------------------------------
$count = 0
while ($count -le 30){
  $count += 3
  Write-Host $count
}
Write-Host "I can count by 3."

--------------------------------------------------------------------------------
$position = 10
$goal = 0
do {
  $position--
  Write-Host "Position: " $position "Goal: " $goal
} until ($position -eq $goal) {
}

--------------------------------------------------------------------------------
$count = 0
while ($count -lt 5) {
  $count++
  if ($count -eq 3) {
    break
  }
  Write-Host "While loop:" $count
}

for ($i = 0; $i -lt 10; $i++) {
  if ($i % 2 -eq 0) {
    continue
  }
  Write-Host "For loop:" $i
}

$number = 9
switch ($number) {
  {$_ -gt 5} {
    Write-Host "Greater than 5"
    break
  }
  {$_ -gt 0} {
    Write-Host "Greater than 0"
  }
  default {
    Write-Host "Less than or equal to 0"
  }
}

--------------------------------------------------------------------------------