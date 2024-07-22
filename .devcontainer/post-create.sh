#!/bin/sh
set -e

# change the default git hook path to our own hooks folder in the repo
git config core.hooksPath "./.devcontainer/git-hooks"
chmod +x .devcontainer/git-hooks/post-commit # make our post-commit hook executable

# install node
# In the past, I tried to specify a node version in .npmrc which is read by pnpm, then pnpm will install that node version for this project. But the problem is that pnpm requires to pinpoint an exact node version, and install that version, it doesn't support something like "18". When the repo is deployed to vercel, vercel would run `pnpm install` in the cloud, which will unnecessarily fetch that exact node version again, as opposed to use the node version that vercel already has. Not only is it slow, but I also encountered compatibility issues leading to build fail.
pnpm env use --global 18

# install dependencies (node_modules) for ui.
cd ui && pnpm install
