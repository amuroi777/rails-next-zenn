#!/bin/bash
set -e

# Railsのソケットファイルが作成されるまで待機する
SOCKET_PATH=/myapp/tmp/sockets/puma.sock
echo "Waiting for Puma socket at: $SOCKET_PATH"

while [ ! -S $SOCKET_PATH ]; do
  echo "Socket not found. Sleeping for 1 second..."
  sleep 1
done

echo "Puma socket found. Starting Nginx..."

# Nginxをフォアグラウンドで実行
exec nginx -g "daemon off;"