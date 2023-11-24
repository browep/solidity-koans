#!/bin/bash

set -e
echo "$1/$2"
mkdir $1/$2
pushd $1/$2
cp -rv ../../.sample_koan/* .
popd