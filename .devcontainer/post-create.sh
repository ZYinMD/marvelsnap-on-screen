#!/bin/bash
set -e

# change the default git hook path to our own hooks folder in the repo
git config core.hooksPath "./.devcontainer/git-hooks"
chmod +x .devcontainer/git-hooks/post-commit # make our post-commit hook executable

# install dependencies (node_modules) for ui. This will also install the node version specified in .npmrc (the image itself doesn't have any node installed)
cd ui && pnpm install
