#!/bin/bash
set -e

# install dependencies (node_modules) for ui. This will also install the node version specified in .npmrc (the image itself doesn't have any node installed)
cd ui && pnpm install
