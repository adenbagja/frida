#!/bin/bash

if [[ $1 -eq 0 ]] ; then
    echo 'jangan lupa nama package'
    exit 1
fi

objection -g $1 explore -q