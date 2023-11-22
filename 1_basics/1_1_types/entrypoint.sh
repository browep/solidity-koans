#!/bin/sh
# Change to the correct directory
cd /etc/koans;
# Run hardhat
npm run start:local;
# Keep node alive
set -e
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi
exec "$@"
npm run deploy:local;
