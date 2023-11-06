# install dependencies (node_modules) for ui:
set -e

cd ui
bun install # this normally should exist in post-create, not post-start, but it only takes miliseconds, and creates one less interactive shell post-create, which is nice
# bun dev
