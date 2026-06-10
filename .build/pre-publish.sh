#!/usr/bin/env bash
set -ex

NPMRC="${NPM_CONFIG_USERCONFIG:-~/.npmrc}"
echo "//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}" >> "${NPMRC}"
echo "strict-ssl=false" >> "${NPMRC}"
npm whoami --registry https://npm.pkg.github.com || echo "whoami check failed (non-fatal), proceeding with publish"
