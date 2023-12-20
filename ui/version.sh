#!/bin/bash
set -e

pnpm build
git commit -am "$npm_package_name: v$npm_package_version"
git push . dev:main  # merge (ff only) dev into main regardless of what the current checked-out branch  is
git push origin main # push main, which will trigger vercel build and deploy
git tag "v$npm_package_version"
git push --tags
