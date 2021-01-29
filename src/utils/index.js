
//一维数组转二维数组方法

export const arrChange = (arr,num) => {
  console.log('经过');
  const newArr = []
  arr.forEach((item,index) => {
    const page = Math.floor(index / num)
    if(!newArr[page]){
      newArr[page] = []
    }
    newArr[page].push(item)
  })

  return newArr
}

export const newSongType = (name) => {
  switch (name) {
      case '华语':
        return 7;
      case '欧美':
        return 96;
      case '日本':
        return 8;
      case '韩国':
        return 16;
      default:
          break;
  }
}

export const newDiscType = (name) => {
  switch (name) {
      case '华语':
        return 'ZH';
      case '欧美':
        return 'EA';
      case '日本':
        return 'JP';
      case '韩国':
        return 'KR';
      default:
          break;
  }
}

/**
 * Object.freeze(
        [
        [
          {
            id: 5461106410,
            type: 0,
            name: "声音安徒生｜歌词里的虚拟奇幻童话世界",
            copywriter: "编辑推荐：很久很久以前，有一个美丽富饶的王国",
            picUrl:
              "https://p1.music.126.net/rhzNj1EmxpQqEDmFl1GJIQ==/109951165623776870.jpg",
            canDislike: false,
            trackNumberUpdateTime: 1610437570051,
            playCount: 200246,
            trackCount: 27,
            highQuality: false,
            alg: "featured",
          },
          {
            id: 5456446464,
            type: 0,
            name: "中国摇滚 | 内心流淌着狂放不羁的血液",
            copywriter:
              "编辑推荐：中国摇滚史是部需要几代甚至是几十代人去完成的巨著",
            picUrl:
              "https://p1.music.126.net/AachLc6JDZrbytNBoEjE3A==/109951165622463068.jpg",
            canDislike: false,
            trackNumberUpdateTime: 1611458681575,
            playCount: 138825,
            trackCount: 86,
            highQuality: false,
            alg: "featured",
          },
          {
            id: 5051447966,
            type: 0,
            name: "神仙翻唱 | 这些翻唱这么火大概就是好听吧",
            copywriter: "热门推荐",
            picUrl:
              "https://p1.music.126.net/ns0C_DgZp8SAxwWLjtJ_7Q==/109951165137169029.jpg",
            canDislike: true,
            trackNumberUpdateTime: 1611311721982,
            playCount: 5115020,
            trackCount: 63,
            highQuality: false,
            alg: "cityLevel_unknow",
          },
          {
            id: 5068534740,
            type: 0,
            name: "还好大雾四起 藏匿难言爱意",
            copywriter: "热门推荐",
            picUrl:
              "https://p1.music.126.net/UDv_LqXIRs91911xBuVhhg==/109951165612512203.jpg",
            canDislike: true,
            trackNumberUpdateTime: 1610498961711,
            playCount: 777863,
            trackCount: 173,
            highQuality: false,
            alg: "cityLevel_unknow",
          },
          {
            id: 5375524904,
            type: 0,
            name: "没必要把怀念弄得比经历还长",
            copywriter: "热门推荐",
            picUrl:
              "https://p1.music.126.net/S7yXlJ1dEXfK6B2LE-ngPg==/109951165536149847.jpg",
            canDislike: true,
            trackNumberUpdateTime: 1611426800228,
            playCount: 319349,
            trackCount: 78,
            highQuality: false,
            alg: "cityLevel_unknow",
          },
        ],
        [
          {
            id: 597592921,
            type: 0,
            name: "「粤语」若你知我苦衷 何以没一点感动",
            copywriter: "热门推荐",
            picUrl:
              "https://p1.music.126.net/JqcjsT2bqtLqnpe8W7didg==/109951163680713819.jpg",
            canDislike: true,
            trackNumberUpdateTime: 1552690285321,
            playCount: 2221990,
            trackCount: 43,
            highQuality: false,
            alg: "cityLevel_unknow",
          },
          {
            id: 3092900085,
            type: 0,
            name: "那些民谣诗人到过的城市",
            copywriter: "热门推荐",
            picUrl:
              "https://p1.music.126.net/8V5DyUXYDQ5GC4-pKo9AHg==/109951165617304362.jpg",
            canDislike: true,
            trackNumberUpdateTime: 1608524994967,
            playCount: 386642,
            trackCount: 72,
            highQuality: false,
            alg: "cityLevel_unknow",
          },
          {
            id: 5312159651,
            type: 0,
            name: "请 用 动 物 的 本 能 缠 绕 住 我",
            copywriter: "热门推荐",
            picUrl:
              "https://p1.music.126.net/5udP0vh4pSTVYTDVOWU7HA==/109951165426321817.jpg",
            canDislike: true,
            trackNumberUpdateTime: 1611244983706,
            playCount: 252981,
            trackCount: 66,
            highQuality: false,
            alg: "cityLevel_unknow",
          },
          {
            id: 3169343562,
            type: 0,
            name: "超好听的翻唱集|网络热歌|伤感歌|百听不厌",
            copywriter: "热门推荐",
            picUrl:
              "https://p1.music.126.net/a_lQ4bvW1qRzdZruVOLYRw==/109951165620350669.jpg",
            canDislike: true,
            trackNumberUpdateTime: 1611654839703,
            playCount: 16193619,
            trackCount: 298,
            highQuality: false,
            alg: "cityLevel_unknow",
          },
          {
            id: 5463651140,
            type: 0,
            name: "「古风」岁月失语 惟石能言",
            copywriter: "热门推荐",
            picUrl:
              "https://p1.music.126.net/1dxU-lV0kuZbObq1WypilQ==/109951165627164952.jpg",
            canDislike: true,
            trackNumberUpdateTime: 1610552741693,
            playCount: 205013,
            trackCount: 68,
            highQuality: false,
            alg: "cityLevel_unknow",
          },
        ],
      ]
      )
 */