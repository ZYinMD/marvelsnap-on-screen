#!/bin/bash
set -e

chmod +x .devcontainer/git-hooks/post-commit

git config core.hooksPath "./.devcontainer/git-hooks"


# install dependencies (node_modules) for ui. This will also install the node version specified in .npmrc (the image itself doesn't have any node installed)
cd ui && pnpm install
