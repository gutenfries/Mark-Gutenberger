#! /bin/bash

function git-commitf() {
      git config user.name "$1"
      git config user.email "$2"
      git add -A .
      # git commit -m "DevOps: Generate 3D Contrib svgs"
      # git push
      git diff --quiet
      git diff --staged --quiet || git commit -m "$3"
}
