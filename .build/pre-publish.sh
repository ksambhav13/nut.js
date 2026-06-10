#!/usr/bin/env bash
set -ex

NPMRC="${NPM_CONFIG_USERCONFIG:-~/.npmrc}"
echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" >> "${NPMRC}"
echo "strict-ssl=false" >> "${NPMRC}"
npm whoami --registry https://registry.npmjs.org || echo "whoami check failed (non-fatal), proceeding with publish"
