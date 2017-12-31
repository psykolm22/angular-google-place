#!/bin/bash
PACKAGE_VERSION=$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')
PACKAGE_NAME=$(grep -m1 name package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')
sed -e "s/{version}/${PACKAGE_VERSION}/" -e "s#{pkg-name}#${PACKAGE_NAME}#" src/lib/package.tpl.json > src/lib/package.json
