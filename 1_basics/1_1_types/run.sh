#!/bin/bash
set -e
docker build -t 1_1_types .
docker run --name 1_1_types 1_1_types