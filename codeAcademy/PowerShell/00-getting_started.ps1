write-host "Today's date is: "
get-date
# This script uses the `write-host` cmdlet to display a message indicating that it will show today's date. The `get-date` cmdlet is then called to retrieve and display the current date and time. When you run this script, it will output something like:
# Today's date is:
# 6/15/2024 10:30:00 AM
# -----------------------------------------------------------------------------

<#
# PowerShell Basics

PowerShell combines a command-line shell with a scripting language. Commands are
called *cmdlets* and usually use the `Verb-Noun` naming convention. Cmdlets
accept parameters, return objects, and can pass those objects to other commands.

## Useful cmdlets

- `Get-Help Get-Date` — read help for a cmdlet; add `-Examples` for examples.
- `Get-Command` — find available cmdlets, functions, and aliases.
- `Get-Date` — retrieve the current date and time.
- `Write-Output "Hello"` — send a value to the pipeline or the console.
- `Write-Host "Hello"` — write text directly to the console.
- `Get-ChildItem` — list files and folders (often aliased as `ls` or `dir`).
- `Set-Location C:\Temp` — change the current directory (often aliased as `cd`).

## Variables and the pipeline

Variable names begin with `$`. The pipe (`|`) sends objects from one cmdlet to
the next; for example, this lists the names of PowerShell files in a folder:

```powershell
$files = Get-ChildItem -Filter *.ps1
$files | Select-Object -ExpandProperty Name
```

## Basic control flow

Use `if` to choose between actions, `foreach` to process each item, and
`function` to define reusable commands:

```powershell
if (Test-Path .\notes.txt) {
	Write-Output "The file exists."
}

foreach ($file in Get-ChildItem -Filter *.ps1) {
	Write-Output $file.Name
}

function Get-Greeting {
	param([string]$Name)
	"Hello, $Name!"
}
```

Run a script from its directory with `./00-getting_started.ps1`. If script
execution is restricted, follow your organization's PowerShell policy rather
than changing security settings blindly.
#>
