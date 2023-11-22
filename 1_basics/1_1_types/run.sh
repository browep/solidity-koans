#!/bin/bash
set -e
docker build -t 0_sanity_check .
docker run -v $PWD:/etc/koans 0_sanity_check