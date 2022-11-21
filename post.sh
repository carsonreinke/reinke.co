#!/bin/bash

if [[ $# -ne 1 ]]; then
    echo 'Usage: ./post-n-tweet.sh [URL]'
    exit 1
fi

export URL=$1

export NPM_BIN=$(which npm)
export GIT_BIN=$(which git)
export OPEN=$(which xdg-open)

#
echo 'Creating Jekyll post'
export POST_URL=$($NPM_BIN run post-url --silent $URL)
if [[ $? -ne 0 ]]; then
    exit $?
fi

#Commit and push changes up
echo 'Updating GitHub with post'
$GIT_BIN checkout --quiet master >/dev/null
if [[ $? -ne 0 ]]; then
    exit $?
fi
$GIT_BIN add _posts >/dev/null
if [[ $? -ne 0 ]]; then
    exit $?
fi
$GIT_BIN commit --quiet --message="Added post about $URL" >/dev/null
if [[ $? -ne 0 ]]; then
    exit $?
fi
$GIT_BIN push --quiet origin
if [[ $? -ne 0 ]]; then
    exit $?
fi

#Wait for GitHub cache to be updated
echo 'Waiting for GitHub cache'
sleep 60

$OPEN $POST_URL >/dev/null