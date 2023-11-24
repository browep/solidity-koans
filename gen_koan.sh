#!/bin/bash

set -e
mkdir $1/$2
pushd $1/$2
cp -rv ../../.sample_koan .
popd