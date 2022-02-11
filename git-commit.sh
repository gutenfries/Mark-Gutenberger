#! /bin/bash

function git-commitf() {
      git config user.name "$1"
      git config user.email "$2"
      git add -A .
      git diff --quiet
      git diff --staged --quiet || git commit -m "$3" && git push
}
