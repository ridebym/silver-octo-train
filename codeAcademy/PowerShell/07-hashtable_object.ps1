#$dog = [PSCustomObject]@{
 # Name = "Jenifer Lopez"
  #Age = 4
#}
$person = [PSCustomObject]@{
  Name = "Yukio"
  Age = 35
}
$person | Get-Member -MemberType NoteProperty