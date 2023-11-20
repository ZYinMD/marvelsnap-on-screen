#!/bin/bash
set -e

pnpm dlx svelte-check \
--fail-on-warnings \
--compiler-warnings "a11y-click-events-have-key-events:ignore,a11y-no-static-element-interactions:ignore" \
--tsconfig ./tsconfig.json
