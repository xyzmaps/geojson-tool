#!/bin/bash

envName=$1
lowerCaseEnvName=$(echo "$envName" | awk '{print tolower($0)}')

cp .env.$lowerCaseEnvName .env
npm install
npm run-script build
