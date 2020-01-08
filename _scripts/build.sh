#!/usr/bin/env bash
npm run prod

echo $PWD

if [ ! -d "deploy" ]; then
  mkdir deploy
fi

cp dist/*.* deploy
cp public/index.deploy.html deploy/index.html
cp nginx.conf deploy

docker build -t rustic-ui .

