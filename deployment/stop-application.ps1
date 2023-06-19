param (
    [string]${env-file} = ""
)

$projectPath = Split-Path -Path (Get-Location).Path -Parent
$composeFile = "$($projectPath)\deployment\docker-compose.yml" 

if (${env-file}.Length -eq 0) {
    
    $defaultPostgresEnv = "$($projectPath)\deployment\.env.postgres"

    docker-compose -f $composeFile --env-file $defaultPostgresEnv down --rmi all -v
}
else {
    docker-compose -f $composeFile --env-file ${env-file} down --rmi all -v
}
