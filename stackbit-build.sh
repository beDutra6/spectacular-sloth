#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5eabdf6a4d73f7001bfb1d68/webhook/build/pull > /dev/null
if [[ -z "${STACKBIT_API_KEY}" ]]; then
    echo "WARNING: No STACKBIT_API_KEY environment variable set, skipping stackbit-pull"
else
    npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5eabdf6a4d73f7001bfb1d68 
fi
curl -s -X POST https://api.stackbit.com/project/5eabdf6a4d73f7001bfb1d68/webhook/build/ssgbuild > /dev/null
gatsby build
./inject-netlify-identity-widget.js public
curl -s -X POST https://api.stackbit.com/project/5eabdf6a4d73f7001bfb1d68/webhook/build/publish > /dev/null
