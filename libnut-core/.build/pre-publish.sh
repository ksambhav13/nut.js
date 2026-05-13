#!/usr/bin/env bash
set -ex

echo "//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}" > ~/.npmrc
npm whoami
