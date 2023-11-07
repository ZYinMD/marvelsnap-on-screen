#!/bin/bash
set -e

bun upgrade
# install dependencies (node_modules) for ui:
cd ui && bun install
