#!/bin/bash
DOCKER_BUILD_NAME=1_3_byte_arrays
docker kill $DOCKER_BUILD_NAME
docker rm $DOCKER_BUILD_NAME
set -e
docker build -t $DOCKER_BUILD_NAME .
docker run --name $DOCKER_BUILD_NAME $DOCKER_BUILD_NAME