Function VacationPicker{
    $vacationTypes = @("Beach","Cruise","Camping","Road Trip","Sightseeing","Adventure","Historical Location","Skiing","Foreign Country")
    $vacationTypes | get-random
}

Function UserFeedback{
    Param ($UserName = "Newcomer",$PercentComplete = 0)
    Write-Host "You're doing great, $UserName!"
    Write-Host "You're $PercentComplete% done!"
}
UserFeedback "Yukio" "40"
UserFeedback "Yukio"