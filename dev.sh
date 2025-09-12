#!/bin/bash

docker build -t blog . && docker run -it --rm -v "$PWD":/app -p 4000:4000 -p 35729:35729 blog
