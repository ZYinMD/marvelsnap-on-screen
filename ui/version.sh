#!/bin/bash
set -e

pnpm check-all
git commit -am "$npm_package_name: v$npm_package_version"
git tag "v$npm_package_version"
git push # after push, vercel will run "build", so I don't need to build locally
git push --tags
