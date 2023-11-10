# using the node:18 image because vercel currently uses node18 to build.
# I could also start from a base image that doesn't have node, then run `pnpm env use --global 18` in post-create.sh. It's fine, but "FROM node:18" right on top is more declarative.
# In the past, I also experimented starting with a base image that doesn't have node, and specify a node version in .npmrc which is read by pnpm, then pnpm will install that node version for this project. But the problem is pnpm only supports pinpoint a exact node version, and install that version, when when the repo is deployed to vercel, vercel would run `pnpm install` in the cloud, which will unnecessarily fetch that exact node version again, as opposed to use the node version that vercel already has. Not only is it slow, but I also encountered compatibility issues leading to build fail.
FROM node:18

# Stuff below is commented out because the node base image already includes things like curl, wget, etc, which is needed for installing pnpm, deno, etc. It also already has git.
# If using a more minimalistic image, may need to apt-get these things first.

# apt-get update and apt-get install should be in the same RUN command to ensure they're either both cached or both re-run.
# packages should be sorted alphabetically to avoid duplicates. Use command palette "Sort Lines" to do it.
# remove apt-get lists in the end to reduce image size. See https://docs.docker.com/develop/develop-images/instructions/#apt-get https://unix.stackexchange.com/questions/217369/clear-apt-get-list
# RUN apt-get update \
#   && apt-get install -y \
#   git \
#   wget \
#   && rm -rf /var/lib/apt/lists/*

# install pnpm; use the script intended for Alpine: https://pnpm.io/installation#on-alpine-linux
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

# install deno:
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
