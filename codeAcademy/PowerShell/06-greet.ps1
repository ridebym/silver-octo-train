$dog = New-Object -TypeName PSCustomObject
$dog | Add-Member -MemberType NoteProperty -Name "Name" -Value "Nala"
$dog | Add-Member -MemberType NoteProperty -Name "Age" -Value 7
$dog | Add-Member -MemberType ScriptMethod -Name "speak" -Value { Write-Host "Arf-Arf!"}
--------------------------------------------------------------------------------
#$dog = New_Object -TypeName PSCustomObject
$person = New-Object -TypeName PSCustomObject
#$dog | Add-Member -MemberType NoteProperty -Name "Name" -Value "Nala"
$person | Add-Member -MemberType NoteProperty -Name "FirstName" -Value "Yukio"
#$dog | Add-Member -MemberType NoteProperty -Name "Age" -Value 7
#$dog | Add-Member -MemberType ScriptMethod -Name "speak" -Value { Write-Host "Arf-Arf!"}
$person | Add-Member -MemberType ScriptMethod -Name "greeting" -Value {Write-Host "Greetings and salutations!"}
$person.greeting()