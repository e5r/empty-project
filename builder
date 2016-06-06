#!/bin/sh

# Copyright (c) E5R Development Team. All rights reserved.
# Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

local SH_PROGRAM=`basename $SHELL`
local SH_SCRIPTFILE=`readlink -f ${0}`
local SH_SCRIPTDIR=`dirname $SH_SCRIPTFILE`
local SH_BUILDERPATH="$SH_SCRIPTDIR/_builder"
local SH_CHECK="$SH_BUILDERPATH/check.sh"
local SH_BOOT="$SH_BUILDERPATH/boot.sh"
local SH_BUILD="$SH_SCRIPTDIR/node_modules/.bin/gulp"

if [ ! $SH_PROGRAM = 'sh' ]; then
    echo ""
    echo "Usage: sh builder [tasks]"
fi

local SH_CHECKED=false

if sh $SH_CHECK; then
    SH_CHECKED=true
fi

if [ "$SH_CHECKED" = false -a ! sh $SH_BOOT ]; then
    echo Boot failed. Check prerequisites.
    exit 1
fi

shift
if ! sh $SH_BUILD %*; then
    echo Build failed.
    exit 1
fi
