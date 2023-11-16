# using the deno image because I've found that installing deno in Dockerfile isn't easy. The doc gives an install script with curl, but it seems only work in interactive shell, or something like that.
#
FROM denoland/deno:latest

# Install git, also wget which is needed for installing pnpm.
# If I was using the node:18 image, git and wget would have been provided.
# apt-get update and apt-get install should be in the same RUN command to ensure they're either both cached or both re-run.
# Packages should be sorted alphabetically to avoid duplicates. Use command palette "Sort Lines" to do it.
# remove apt-get lists in the end to reduce image size. See https://docs.docker.com/develop/develop-images/instructions/#apt-get https://unix.stackexchange.com/questions/217369/clear-apt-get-list
RUN apt-get update \
  && apt-get install -y \
  git \
  wget \
  && rm -rf /var/lib/apt/lists/*

# install pnpm; use the script intended for Alpine: https://pnpm.io/installation#on-alpine-linux
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
