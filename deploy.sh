#!/usr/bin/env sh

# abort on errors
set -e

# build
echo "building project..."
npm run build

echo "adding dist folder to commit"
git add dist && git commit -m "adding dist subtree"

# deploy project
echo "deploying subtree to gh-pages..."
git subtree push --prefix dist origin gh-pages
