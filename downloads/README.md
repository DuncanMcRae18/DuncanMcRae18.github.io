PDFcombine

This folder contains the PDFcombine distribution.

Files:
- PDFcombine.zip — zip archive containing the PDFcombine executable and README.
- PDFcombine.zip.sha256 — SHA256 checksum for the zip file.

Verification
1) Compute SHA256 locally and compare:
   - PowerShell: Get-FileHash -Algorithm SHA256 .\PDFcombine.zip | Format-List
   - Linux/macOS: sha256sum PDFcombine.zip

2) Verify checksum matches the contents of PDFcombine.zip.sha256.

Safety notes
- This is an unsigned executable packaged as a zip. Scan it with VirusTotal before running.
- Only run the executable if you trust the author.

Contact: dunc360+web@hotmail.com