#!/bin/bash
cd /home/sahil/Projects/whatsAppBot/
timeout 50m bdfr download ./posts  --opts operation.yaml --disable-module 'YoutubeDlFallback ,Youtube ,Redgifs' -v
timeout 20m node index.js