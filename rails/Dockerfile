FROM ruby:3.1.2

# 必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    vim \
    pkg-config \
    libxml2-dev \
    libxslt-dev \
    curl

RUN mkdir /myapp
WORKDIR /myapp

# Gemfileをコピー
COPY Gemfile Gemfile.lock /myapp/

# bundlerを更新
RUN gem update --system
RUN gem install bundler

# gemをインストール（Gemfile.lockが存在しない場合は新しく作成）
RUN bundle install --jobs 4 --retry 3

# アプリケーションのコードをコピー
COPY . /myapp

# entrypoint.shをコピーして実行権限を付与
COPY entrypoint.prod.sh /usr/bin/
# スクリプト名が entrypoint.prod.sh の場合はこちらを使用
RUN chmod +x /usr/bin/entrypoint.prod.sh 

# ポート3002を公開
EXPOSE 3002

ENTRYPOINT ["entrypoint.prod.sh"]
CMD []