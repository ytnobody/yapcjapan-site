const jobboards = require("./data/jobboards.js");
const staff = require("./data/staff.js");
const individualSponsors = require("./data/individual-sponsors.js");

module.exports = {
  locals: {
    site: {
      title: "YAPC::Hiroshima 2024",
      url: "https://yapcjapan.org/2024hiroshima/",
      description:
        "YAPCはYet Another Perl Conferenceの略で、Perlを軸としたITに関わる全ての人のためのカンファレンスです。",
      image: "images/ogp-image.jpg",
    },
    information: [
      {
        date: "2023/09/11",
        title: "スポンサーメニューを公開しました",
        url: "https://fortee.jp/yapc-hiroshima-2024/go/sponsor-menu",
      },
    ],
    guestSpeakers: [
      {
        photo: "images/speakers/tohoho.jpg",
        name: "杜甫々",
        name_en: "Tohoho",
        title: "「とほほのWWW入門」サイト管理者",
        description:
          "1988年大学卒業後IT関連会社に入社。1996年から個人活動としてWebに関わる技術情報の発信サイト「とほほのWWW入門」を運営してきました。HTML/JavaScript/CSS、各種プログラミング言語、フレームワークなどの入門情報を発信しています。最近はWeb技術もネタが尽きてきて陶磁器、洋楽、中国語、韓国語、タイ料理など様々な「○○入門」の発信に手を出しつつあります。",
      },
      {
        photo: "images/speakers/sodai.jpg",
        name: "曽根 壮大",
        name_en: "Taketomo Sone",
        title: "合同会社 Have Fun Tech 代表社員 / 株式会社 Linkage CTO",
        description:
          "数々の業務システム、Webサービスなどの開発・運用を担当し、2017年に株式会社はてなでサービス監視サービス「Mackerel」のCRE（Customer Reliability Engineer）、株式会社オミカレの副社長/CTOなどを経て、合同会社 Have Fun Techを起業。 その後、LinkageのCTOとしてJOINし、HaveFunTechの経営と二足の草鞋を履きこなしている。 コミュニティでは、Microsoft MVPをはじめ、日本PostgreSQLユーザ会の理事として勉強会の開催を担当し、各地で登壇している。 builderscon 2017、YAPC::Kansaiなどのイベントでベストスピーカーを受賞し、分かりやすく実践的な内容のトークに定評がある。 他に、岡山Python勉強会を主催し、オープンラボ備後にも所属。著書に『Software Design』誌で、データベースに関する連載「RDBアンチパターン」をまとめた『失敗から学ぶRDBの正しい歩き方』を執筆",
      },
    ],
    jobboards,
    sponsors: [],
    staff,
    individualSponsors,
  },
};
