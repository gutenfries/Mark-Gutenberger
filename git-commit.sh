#! /bin/bash

function git-commitf ( committer_name, committer_email, commit_message ) {
      git config user.name ${committer_name}
      git config user.email ${committer_email}
      git add -A .
      # git commit -m "DevOps: Generate 3D Contrib svgs"
      # git push
      git diff --quiet 
      git diff --staged --quiet || git commit -am ${commit_message}

}