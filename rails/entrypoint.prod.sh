#!/bin/bash
set -e

echo "Start entrypoint.prod.sh"

echo "mkdir -p /myapp/tmp/sockets"
mkdir -p /myapp/tmp/sockets

echo "rm -f /myapp/tmp/pids/server.pid"
rm -f /myapp/tmp/pids/server.pid

# ★ 修正点: データベースコマンドを追加 ★
echo "bundle exec rails db:create RAILS_ENV=production"
bundle exec rails db:create RAILS_ENV=production

echo "bundle exec rails db:migrate RAILS_ENV=production"
bundle exec rails db:migrate RAILS_ENV=production

# echo "bundle exec rails db:seed RAILS_ENV=production"
# bundle exec rails db:seed RAILS_ENV=production

echo "exec bundle exec puma -C config/puma.rb"
exec bundle exec puma -C config/puma.rb