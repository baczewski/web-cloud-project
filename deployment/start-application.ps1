param (
    [string]${env-file} = ""
)

$projectPath = Split-Path -Path (Get-Location).Path -Parent
$composeFile = "$($projectPath)\deployment\docker-compose.yml" 

if (${env-file}.Length -eq 0) {
    
    $defaultPostgresEnv = "$($projectPath)\deployment\.env.postgres"
    $defaultPGadminEnv = "$($projectPath)\deployment\.env.pgadmin"

    docker-compose -f $composeFile --env-file $defaultPostgresEnv --env-file $defaultPGadminEnv up --build
}
else {
    docker-compose -f $composeFile --env-file ${env-file} up --build
}
