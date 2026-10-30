Write-Host "Hello, $Env:USERS!"
Write-Host "We can access environment variables in scripts."
Get-ChildItem
Get-ChildItem Env:
$Env:USERS = "Yukio"
(Get-ChildItem Env:USERS).Value