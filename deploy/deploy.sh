#!/bin/bash

SERVICE=template
HOME=/storage/services/common-group/$SERVICE

if [ "$LIFECYCLE_EVENT" == "BeforeInstall" ]
then
    sudo systemctl stop nginx
fi

if [ "$LIFECYCLE_EVENT" == "ApplicationStart" ]
then
    ln -sfT $HOME/artifacts/dist $HOME/html && sudo systemctl start nginx
fi
