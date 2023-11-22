#!/bin/sh
# Change to the correct directory
cd /etc/koans;
# Run hardhat
npm run start:local &
sleep 2
npm run deploy:local;
