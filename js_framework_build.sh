# Copyright (c) 2021 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#! /bin/bash
set -e
echo "copy source code..."
prebuiltsPath="../../prebuilts"

# copy dependency file to generate dir of gn
# the params come from .gn

# $2 => node $4 => node_modules
cp -r $3 ./
cp -f $5 ./

if [ -d "$prebuiltsPath" ]; then
  echo "copy node_modules..."
  cp -r $4 ./
else
  echo "download node_modules..."
  npm install
  cp -r ./node_modules ../../third_party/jsframework
fi

cp -f $6 ./
cp -f $7 ./
cp -f $1 ./
cp -r $8 ./

if [ -d "$prebuiltsPath" ]; then
  echo "prebuilts exists"
  $2 build.js
  # run unit test
  $2 ./node_modules/.bin/mocha -r ts-node/register test/lib.ts test/ut/**/*.ts test/ut/*.ts
else
  npm run build
  # run unit test
  npm run test:unit
fi

# after running, remove dependency file
rm -rf ./node_modules
rm -rf ./runtime
rm -rf ./tsconfig.json
rm -rf ./build.js
rm -rf ./test
rm -rf ./.eslintrc
rm -rf ./package.json
