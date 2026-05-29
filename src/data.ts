import { User, Post } from "./types";

export const CURRENT_DATE = new Date("2026-05-29T08:38:25Z");
export const UNIVERSITY_SEASON = "백사대학교 1학기 대동제(축제) 기간";

export const USERS: Record<string, User> = {
  baeksa_council: {
    id: "u1",
    username: "baeksa_council",
    name: "백사대학교 학생회",
    avatar: "https://placehold.co/150x150/003366/ffffff?text=BSU",
    bio: "백사대학교 총학생회 공식 계정입니다. \n#백사대 #총학생회 #2026",
    link: "linktr.ee/baeksa_univ",
    followers: 12400,
    following: 12,
    postsCount: 1,
    highlights: [
      {
        id: "h1",
        title: "캠퍼스 맵",
        coverImage: "https://i.postimg.cc/1z9KCdfL/kempeoseumaeb.png",
        fullImage: "https://i.postimg.cc/1z9KCdfL/kempeoseumaeb.png",
      },
      {
        id: "h2",
        title: "축제 안내",
        coverImage: "https://placehold.co/150x150/ff9999/ffffff?text=Festival",
        fullImage: "https://placehold.co/1080x1920/ff9999/ffffff?text=[축제안내+이미지]",
      },
    ],
  },
  yohan_17: {
    id: "u2",
    username: "yohan_17",
    name: "백요한",
    avatar: "https://i.postimg.cc/8zdHbGPf/yhpr.png",
    bio: "† Michael\n🏒 @Baeksa Frost No.17 (LW)",
    followers: 4320,
    following: 342,
    postsCount: 3,
    highlights: [
      {
        id: "hy1",
        title: "Hockey",
        coverImage: "https://placehold.co/150x150/111111/ffffff?text=Ice",
        images: [
          "https://i.postimg.cc/MpG4PtXm/YHH.jpg",
          "https://i.postimg.cc/CL7Xs9M2/YHHH.jpg",
          "https://i.postimg.cc/VLgpW2sT/YHHK.jpg"
        ]
      }
    ],
    stories: [
      {
        id: "sy1",
        imageUrl: "https://i.postimg.cc/W4x0Lp8Z/yohanseutoli-sin-uligeulaem.jpg",
      }
    ]
  },
  ha5w1m: {
    id: "u3",
    username: "ha5w1m",
    name: "백하랑",
    avatar: "https://i.postimg.cc/PrwKPYGh/hrpr.png",
    bio: "🌊 @Baeksa Razors",
    followers: 5100,
    following: 412,
    postsCount: 1,
  },
  "beaksinwoo.1": {
    id: "u4",
    username: "beaksinwoo.1",
    name: "백신우",
    avatar: "https://placehold.co/150x150/cccccc/ffffff?text=S",
    bio: "🏐 @Baeksa Zenith No.1 (MB)",
    followers: 2890,
    following: 120,
    postsCount: 0,
    stories: [
      {
        id: "ss1",
        imageUrl: "https://i.postimg.cc/15MCx6q6/sin-u-inseuta.png",
      }
    ]
  },
  shh_baeksa_club: {
    id: "u5",
    username: "shh_baeksa_club",
    name: "비밀 모임",
    avatar: "https://placehold.co/150x150/000000/ffffff?text=Secret",
    bio: "쉿!! 비밀 정보들 🤫 (SECRET)\n관계자 외 출입 금지.",
    followers: 4,
    following: 4,
    postsCount: 0,
    isSecret: true,
    highlights: [
      {
        id: "hs1",
        title: "백가네",
        coverImage: "https://placehold.co/150x150/333333/ffffff?text=House",
        fullImage: "https://placehold.co/1080x1920/333333/ffffff?text=[백가네+외관+사진+삽입]",
      }
    ]
  },
};

export const POSTS: Post[] = [
  {
    id: "p1",
    username: "yohan_17",
    imageUrl: "https://i.postimg.cc/FHbZxvsd/yh-fe.png",
    caption: "☀️ 날씨 좋다",
    likes: 5420,
    timestamp: "5시간 전",
    comments: [
      {
        id: "c1",
        username: "ha5w1m",
        text: "누구랑 갔어?",
        timestamp: "4시간 전",
      },
      {
        id: "c2",
        username: "yohan_17",
        text: "비밀~",
        timestamp: "3시간 전",
      }
    ]
  },
  {
    id: "p2",
    username: "yohan_17",
    imageUrl: "https://i.postimg.cc/c4nTrwq4/yh-fe-(2).png",
    caption: "🥇",
    likes: 8320,
    commentCount: 323,
    timestamp: "1주일 전",
    comments: [
      {
        id: "c3",
        username: "baeksa_council",
        text: "우승을 축하드립니다!",
        timestamp: "1주일 전",
      }
    ]
  },
  {
    id: "p3",
    username: "yohan_17",
    imageUrl: "https://i.postimg.cc/nhKk1xcm/yh-fee3.png",
    caption: "",
    likes: 12050,
    commentCount: 1425,
    timestamp: "3주일 전",
    comments: [
      {
        id: "c4",
        username: "beaksinwoo.1",
        text: "아... 개싫다",
        timestamp: "3주일 전",
      },
      {
        id: "c5",
        username: "ha5w1m",
        text: "거울 혼자 쓰나~ ㅎㅎ",
        timestamp: "3주일 전",
      }
    ]
  },
  {
    id: "p4",
    username: "ha5w1m",
    imageUrl: "https://i.postimg.cc/BZyMSNVp/hr-fe.png",
    caption: "올해 분위기 좋네 🏊‍♂️✨",
    likes: 6712,
    timestamp: "2일 전",
    comments: [
      {
        id: "c6",
        username: "yohan_17",
        text: "야 다 끝나면 일단 @shh_baeksa_club 여기로 모여라ㅋㅋ 오늘 술 마시자",
        timestamp: "1일 전",
      },
      {
        id: "c7",
        username: "beaksinwoo.1",
        text: "형 좀 ;",
        timestamp: "1일 전",
      },
      {
        id: "c8",
        username: "ha5w1m",
        text: "ㅎㅎ 신우 화났네. 요한이 형 빨리 지워. 난 방금 수영 끝났어, 금방 갈게~",
        timestamp: "1일 전",
      },
      {
        id: "c9",
        username: "yohan_17",
        text: "@beaksinwoo.1 아 쏘리쏘리ㅋㅋ 근데 어차피 이 계정 아무도 안 봄. 꼬우면 빨리 와서 지우던가~ 사촌동생 사랑한다❤️",
        timestamp: "23시간 전",
      },
      {
        id: "c10",
        username: "beaksinwoo.1",
        text: "@yohan_17 ...가고 있으니까 조용히 하고 있어.",
        timestamp: "22시간 전",
      }
    ]
  },
  {
    id: "p5",
    username: "baeksa_council",
    imageUrl: "https://i.postimg.cc/5txm7r6D/hagsailjeong.png",
    caption: "[2026학년도 백사대학교 1학기 학사일정 및 대동제 안내]\n\n학우 여러분 안녕하십니까! 5월 말 대동제가 시작됩니다. 자세한 일정과 캠퍼스 맵은 카드뉴스를 확인해주세요. 즐거운 축제 되시길 바랍니다!",
    likes: 1205,
    timestamp: "4일 전",
    comments: [],
  }
];
