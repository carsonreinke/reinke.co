#!/bin/bash

if [[ $# -ne 1 ]]; then
    echo 'Usage: ./generate-cv.sh [URL]'
    exit 1
fi

export URL=$1

docker build -t cv-pdf ./_cv
if [[ $? -ne 0 ]]; then
    exit $?
fi

curl -s $URL | docker run --rm -i cv-pdf > ./files/cv.pdf
