#!/bin/sh

# this script is run after every commit. See more in postCreate.sh

# auto push up to HEAD~1, so that the remote branch is always behind by 1 commit. See https://stackoverflow.com/questions/77455698/is-it-possible-to-git-auto-push-after-commit-but-only-up-to-head2-so-that-rem.

 echo "push!!"
git push origin HEAD~1:"$(git branch --show-current)"