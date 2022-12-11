#!/bin/bash
timeout 5m bdfr download ./posts  --opts operation.yaml --disable-module 'SelfPost ,VReddit ,YoutubeDlFallback ,Youtube ,Redgifs ,Gfycat' -v
timout 8m node index.js