$inputDir = "$PSScriptRoot/downloaded"
$outputDir = "$PSScriptRoot/../../ui/static/card-images"

# this is run after all card images are downloaded. It uses the official webp cil to re-comrepss the images and put the into ui/static. The result is about 75% in sise, but visually very similar. I also tried to reduce the resolution, but decided not to, because the 512 resolution is actually needed in retina, based on my calculation.
Get-ChildItem $inputDir | ForEach-Object {
  $filename = $PSItem.Name
  if (Test-Path "$outputDir/$filename") {
    Write-Host "$filename already exists"
  } else {
    cwebp $PSItem -preset picture -o "$outputDir/$filename"
  }
}
