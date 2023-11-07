# denoland/deno
FROM denoland/deno:latest

# install wget, git, pnpm
RUN apt-get update \
  && apt-get install -y wget git \
  && wget -qO- https://get.pnpm.io/install.sh | bash -
