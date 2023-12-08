#!/bin/bash

# generate a koan,
# USAGE: ./gen_koan.sh 1_basics 1_5_array_slicing

set -e
echo "$1/$2"
mkdir $1/$2
pushd $1/$2
cp -rv ../../.sample_koan/* .
popd