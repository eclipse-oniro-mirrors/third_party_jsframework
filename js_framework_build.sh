#!/bin/bash
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

set -e
echo "copy source code..."
prebuilts_path=${11}
# copy dependency file to generate dir of gn
# the params come from .gn


# With an explicit css-what input, stage runtime entries separately so a stale
# runtime/src link is never followed. The source tree and producer output stay
# unchanged, including in standalone builds.
if [ -n "${13}" ]; then
  runtime_source=$(cd "$2" && pwd -P)
  css_source=$(cd "${13}" && pwd -P)
  output_root=$(cd "$8" && pwd -P)
  runtime_target="$output_root/runtime"
  if [ -d "$runtime_target" ]; then
    runtime_target=$(cd "$runtime_target" && pwd -P)
  fi
  for source_path in "$runtime_source" "$css_source"; do
    case "$runtime_target/" in
      "$source_path/"*) echo "runtime output overlaps an input directory" >&2; exit 1 ;;
    esac
    case "$source_path/" in
      "$runtime_target/"*) echo "runtime output overlaps an input directory" >&2; exit 1 ;;
    esac
  done
  mkdir -p "$8/runtime"
  css_runtime_path=${13%/}
  css_runtime_name=${css_runtime_path##*/}
  shopt -s dotglob nullglob
  for runtime_entry in "$2"/*; do
    if [ "${runtime_entry##*/}" = "$css_runtime_name" ]; then
      continue
    fi
    if [ "${10}" = true ]; then
      cp -R -L "$runtime_entry" "$8/runtime/"
    else
      cp -r -L "$runtime_entry" "$8/runtime/"
    fi
  done
  shopt -u dotglob nullglob
  if [ "${10}" = true ]; then
    cp -R -L "${13}" "$8/runtime/"
  else
    cp -r -L "${13}" "$8/runtime/"
  fi
elif [ "${10}" = true ]; then
  cp -R -L "$2" "$8"
else
  cp -r -L "$2" "$8"
fi

# $2 => node $4 => node_modules
cp -f $4 $8

if [ -d "$prebuilts_path" ]; then
  echo "copy node_modules..."
  if [ "${10}" == 'true' ];then
    cp -R $3 $8
  else
    cp -r $3 $8
  fi
else
  echo "download node_modules..."
  npm install
  cp -r ./node_modules ../../third_party/jsframework
fi

cp -f $5 $8
cp -f $6 $8
cp -f ${9} $8
cp -f ${12} $8
cp -r $7 $8
if [ -d "$prebuilts_path" ]; then
  echo "prebuilts exists"
  # address problme of parallzing compile
  rm -rf "$8/current"
  link_path=$(realpath $1)
  ln -s $link_path "$8/current"
  cd $8
  if [ "${10}" == 'true' ];then
    ./current/bin/node build_strip_native_min.js || exit 1 &
    # run unit test
    ./current/bin/node node_modules/.bin/mocha -r ts-node/register test/lib.ts test/ut/**/*.ts test/ut/*.ts || exit 1 &
    wait
  else
    ./current/bin/node build_strip_native_min.js || exit 1 &
    # run unit test
    ./current/bin/node node_modules/.bin/mocha -r ts-node/register test/lib.ts test/ut/**/*.ts test/ut/*.ts || exit 1&
    wait
  fi
else
  npm run build
  # run unit test
  npm run test:unit
fi

# after running, remove dependency file
rm -rf ./node_modules
if [ "${10}" == 'true' ];then
  rm -rf ./current
else
  rm -rf ./current
fi
rm -rf ./runtime
rm -rf ./tsconfig.json
rm -rf build_strip_native_min.js
rm -rf ./test
rm -rf ./.eslintrc
rm -rf ./.babelrc
rm -rf ./package.json
