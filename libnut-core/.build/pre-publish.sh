#!/usr/bin/env bash
set -ex

echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" > ~/.npmrc
npm whoami
