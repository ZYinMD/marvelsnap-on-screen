#!/bin/bash
set -e


echo -e "\e[34m\nReady. To start: cd ui && pnpm dev\e[0m"

# Don't auto start a service here in this script, because it makes vscode treat the startup process as unfinished, show an everlasting spinner in the status bar, and also don't stop the "vsc-volume-bootstrap" container, may even not exit this container on disconnect and on rebuild'.
