require "rails_helper"

RSpec.describe "Api::V1::Articles", type: :request do
  describe "GET api/v1/articles" do
    subject { get(api_v1_articles_path, params: params) }

    before do
      create_list(:article, 25, status: :published)
      create_list(:article, 8, status: :draft)
    end

    context "pageをparamsで送信しない場合" do
      let(:params) { nil }

      it "1ページ目のレコードを10件取得できること" do
        subject
        res = JSON.parse(response.body)
        expect(res.keys).to eq ["articles", "meta"]
        expect(res["articles"].length).to eq 10
        expect(res["articles"][0].keys).to eq ["id", "title", "content", "created_at", "from_today", "user"]
        expect(res["articles"][0]["user"].keys).to eq ["name"]
        expect(res["meta"].keys).to eq ["current_page", "total_page"]
        expect(res["meta"]["current_page"]).to eq 1
        expect(res["meta"]["total_page"]).to eq 3
        expect(response).to have_http_status(:ok)
      end
    end

    context "pageをparamsで送信した時" do
      let(:params) { { page: 2 } }

      it "該当ページ目のレコードを10件取得できる" do
        subject
        res = JSON.parse(response.body)
        expect(res.keys).to eq ["articles", "meta"]
        expect(res["articles"].length).to eq 10
        expect(res["articles"][0].keys).to eq ["id", "title", "content", "created_at", "from_today", "user"]
        expect(res["articles"][0]["user"].keys).to eq ["name"]
        expect(res["meta"].keys).to eq ["current_page", "total_page"]
        expect(res["meta"]["current_page"]).to eq 2
        expect(res["meta"]["total_page"]).to eq 3
        expect(response).to have_http_status(:ok)
      end
    end

    # rubocop:disable RSpec/NestedGroups
    describe "GET api/v1/articles/:id" do
      subject { get(api_v1_article_path(article_id)) }

      let(:article) { create(:article, status:) }

      context "article_id に対応する articles レコードが存在する場合" do
        let(:article_id) { article.id }

        context "articles レコードのステータスが公開中の場合" do
          let(:status) { :published }

          it "正常にレコードを取得できること" do
            subject
            res = JSON.parse(response.body)
            expect(res.keys).to eq ["id", "title", "content", "created_at", "from_today", "user"]
            expect(res["user"].keys).to eq ["name"]
            expect(response).to have_http_status(:ok)
          end
        end

        context "articlesレコードのステータスが下書きの場合" do
          let(:status) { :draft }

          it "404エラーが返ること" do
            subject
            expect(response).to have_http_status(:not_found)
          end
        end

        context "ActiveRecord::RecordNotFound エラーが返ること" do
          let(:article_id) { 10_000_000_000 }

          it "404エラーが返る" do
            subject
            expect(response).to have_http_status(:not_found)
          end
        end
      end
    end
    # rubocop:enable RSpec/NestedGroups
  end
end
