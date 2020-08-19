#!/usr/bin/env sh

# abort on errors
set -e

# build
echo "building project..."
npm run build

# navigate to build output directory
echo "changing directory..."
cd dist

# intialize and commit repository
echo "initialize and commit project..."
git init
git add -A
git commit -m "deploy"

# deploy project
echo "deploying project..."
git push -f git@github.com:ignatius-mbugua/ignatius-mbugua.github.io.git master

cd -
