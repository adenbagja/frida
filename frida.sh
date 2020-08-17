#!/bin/bash

if [[ $1 -eq 0 ]] ; then
    echo 'jangan lupa nama package'
    exit 1
fi

frida -l pinning.js -U -f $1 --no-pause