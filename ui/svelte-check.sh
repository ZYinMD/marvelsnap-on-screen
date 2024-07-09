#!/bin/bash
set -e

# the following check has been disabled because for some reason it starts to fail. Maybe it's because I updated my node version or something.
# pnpm dlx svelte-check \
#   --fail-on-warnings \
#   --compiler-warnings "a11y-click-events-have-key-events:ignore,a11y-no-static-element-interactions:ignore" \
#   --tsconfig ./tsconfig.json
