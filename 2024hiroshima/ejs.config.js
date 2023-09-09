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
    guestSpeakers: [
      {
        photo: "images/",
        name: "杜甫々",
        name_en: "Tohoho",
        title: "株式会社はてな 取締役 組織・基盤開発本部長",
        description:
          "「とほほのWWW入門」サイト管理者。1988年大学卒業後IT関連会社に入社。1996年から個人活動としてWebに関わる技術情報の発信サイト「とほほのWWW入門」を運営してきました。HTML/JavaScript/CSS、各種プログラミング言語、フレームワークなどの入門情報を発信しています。最近はWeb技術もネタが尽きてきて陶磁器、洋楽、中国語、韓国語、タイ料理など様々な「○○入門」の発信に手を出しつつあります。",
      },
    ],
    jobboards,
    sponsors: [],
    staff,
    individualSponsors,
  },
};
