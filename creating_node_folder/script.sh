#!/usr/bin/bash
echo "starting update"
apt update
echo "starting install of nodejs and npm"
apt install nodejs npm
echo "starting file creation and typescript installation with the latest typescript version"
mkdir nodefile && cd ./nodefile && npm init -y && npm install typescript@latest
echo "checking if it is working"
node -v
cd ./nodefile && npx tsc -v



