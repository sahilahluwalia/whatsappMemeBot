#!/bin/bash
cd /home/sahil/Projects/whatsAppBot/
timeout 5m bdfr download ./posts  --opts operation.yaml --disable-module 'SelfPost ,VReddit ,YoutubeDlFallback ,Youtube ,Redgifs ,Gfycat' -v
timeout 8m node index.js