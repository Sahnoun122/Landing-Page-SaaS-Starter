⚠️ Warnings: 1 seul warning mineur (custom fonts - non bloquant)

# ====================================
# SaaS Starter Package Creator
# ====================================
# This script creates a clean ZIP package for marketplace submission

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  SaaS Starter Package Creator" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$projectPath = "C:\Users\khadi\OneDrive\Desktop\projectPRO\Landing Page SaaS Starter"
$outputPath = "C:\Users\khadi\OneDrive\Desktop\projectPRO"
$zipName = "saas-landing-starter-v1.0.0.zip"
$tempDir = "temp-package"

# Navigate to output directory
Set-Location $outputPath

# Step 1: Clean old files
Write-Host "[1/6] Cleaning old files..." -ForegroundColor Yellow
if (Test-Path $zipName) {
    Remove-Item $zipName -Force
    Write-Host "  ✓ Removed old ZIP" -ForegroundColor Green
}
if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force
    Write-Host "  ✓ Removed temp directory" -ForegroundColor Green
}

# Step 2: Create temp directory
Write-Host "[2/6] Creating temp directory..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path $tempDir | Out-Null
Write-Host "  ✓ Temp directory created" -ForegroundColor Green

# Step 3: Copy files (excluding unwanted directories)
Write-Host "[3/6] Copying project files..." -ForegroundColor Yellow
$exclude = @('node_modules', '.next', '.git', 'dist', '.vscode', 'temp-package', '.github')

Get-ChildItem $projectPath | Where-Object {
    $_.Name -notin $exclude
} | ForEach-Object {
    Copy-Item $_.FullName -Destination $tempDir -Recurse -Force
    Write-Host "  ✓ Copied: $($_.Name)" -ForegroundColor Gray
}

# Step 4: Remove any .env files (keep only .env.example)
Write-Host "[4/6] Cleaning sensitive files..." -ForegroundColor Yellow
Get-ChildItem $tempDir -Filter ".env*" -Recurse | Where-Object {
    $_.Name -ne ".env.example"
} | ForEach-Object {
    Remove-Item $_.FullName -Force
    Write-Host "  ✓ Removed: $($_.Name)" -ForegroundColor Gray
}

# Step 5: Create ZIP
Write-Host "[5/6] Creating ZIP archive..." -ForegroundColor Yellow
Compress-Archive -Path "$tempDir\*" -DestinationPath $zipName -Force
Write-Host "  ✓ ZIP created successfully" -ForegroundColor Green

# Step 6: Clean up temp directory
Write-Host "[6/6] Cleaning up..." -ForegroundColor Yellow
Remove-Item $tempDir -Recurse -Force
Write-Host "  ✓ Temp directory removed" -ForegroundColor Green

# Display results
Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Package Created Successfully!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

$zipFile = Get-Item $zipName
$sizeMB = [math]::Round($zipFile.Length/1MB, 2)

Write-Host "📦 File: $zipName" -ForegroundColor White
Write-Host "📊 Size: $sizeMB MB" -ForegroundColor White
Write-Host "📍 Location: $outputPath" -ForegroundColor White
Write-Host ""

# Verification
Write-Host "✅ Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Test the ZIP by extracting it" -ForegroundColor White
Write-Host "  2. Run 'npm install' in extracted folder" -ForegroundColor White
Write-Host "  3. Run 'npm run build' to verify" -ForegroundColor White
Write-Host "  4. Upload to ThemeForest/Codester" -ForegroundColor White
Write-Host ""

# Optional: Open Explorer to show the file
$openExplorer = Read-Host "Open folder in Explorer? (Y/N)"
if ($openExplorer -eq "Y" -or $openExplorer -eq "y") {
    Start-Process "explorer.exe" -ArgumentList $outputPath
}

Write-Host ""
Write-Host "🎉 Ready for marketplace submission!" -ForegroundColor Cyan
Write-Host ""
