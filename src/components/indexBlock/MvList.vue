<template>
  <div>
    <index-block title="MV" :navlist="arealist">
      <div class="playlist-wrapper">
        <play-list-swiper
          :listinfo="mvlist" :iteminfo="iteminfo"
        />
      </div>
    </index-block>
  </div>
</template>

<script>
import IndexBlock from "./IndexBlock.vue";
import PlayListSwiper from '../common/PlayListSwiper'
export default {
  components: { IndexBlock,PlayListSwiper },
  data() {
    return {
      mvlist: Object.freeze([
        [
          {
            id: 5359212,
            cover:
              "http://p1.music.126.net/8psrmKaW9WEY8boqbp1KSA==/3402988500122446.jpg",
            name: "电影《从你的全世界路过》“猪头的爱情”特辑",
            playCount: 1947036,
            briefDesc: null,
            desc: null,
            artistName: "群星",
            artistId: 122455,
            duration: 187000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 122455,
                name: "群星",
                alias: ["原声带", "Various Artists", "华语群星"],
                transNames: null,
              },
            ],
          },
          {
            id: 10780204,
            cover:
              "http://p1.music.126.net/rKYzwJ8q_q5-lnQp8_QDnA==/109951163539298940.jpg",
            name: "毛不易数字专辑850万首独家福利",
            playCount: 2250096,
            briefDesc: null,
            desc: null,
            artistName: "毛不易",
            artistId: 12138269,
            duration: 46000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 12138269,
                name: "毛不易",
                alias: ["王维家", "毛毛", "业余巨星", "毛怼怼"],
                transNames: null,
              },
            ],
          },
          {
            id: 5404140,
            cover:
              "http://p1.music.126.net/H8S0r6Wh7Px7lyRQJOgaKA==/18744474231953102.jpg",
            name: "中国摇滚三十年纪录片 - 少年心气",
            playCount: 674393,
            briefDesc: "三十年的中国摇滚，有辉煌有低谷。",
            desc: null,
            artistName: "群星",
            artistId: 122455,
            duration: 4002000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 122455,
                name: "群星",
                alias: ["原声带", "Various Artists", "华语群星"],
                transNames: null,
              },
            ],
          },
          {
            id: 5328112,
            cover:
              "http://p1.music.126.net/2UUNDWEG56llC9EmEtCOxA==/1401877336733110.jpg",
            name: "电影《大鱼海棠》“+源起版”预告",
            playCount: 781561,
            briefDesc: "神秘世界再露冰山一角！",
            desc: null,
            artistName: "群星",
            artistId: 122455,
            duration: 92000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 122455,
                name: "群星",
                alias: ["原声带", "Various Artists", "华语群星"],
                transNames: null,
              },
            ],
          },
          {
            id: 5364908,
            cover:
              "http://p1.music.126.net/3alkgIW21jEUfTXKxoLT7A==/3302932936514757.jpg",
            name: "开心往前飞",
            playCount: 615080,
            briefDesc: null,
            desc: null,
            artistName: "vivi",
            artistId: 0,
            duration: 76000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 0,
                name: "vivi",
                alias: [],
                transNames: [],
              },
            ],
          },
          {
            id: 247024,
            cover:
              "http://p1.music.126.net/xWvUcgWWJll36FuYwDwr8Q==/354042744179598.jpg",
            name: "We are young(2014北京电视台春节联欢晚会)",
            playCount: 739264,
            briefDesc: null,
            desc: null,
            artistName: "华晨宇",
            artistId: 861777,
            duration: 124000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 861777,
                name: "华晨宇",
                alias: ["花花"],
                transNames: null,
              },
            ],
          },
          {
            id: 5843472,
            cover:
              "http://p1.music.126.net/O80mk3i1eYH2GZqoUK1nUw==/109951163192465030.jpg",
            name: "宋茜《屋顶着火》舞蹈版MV",
            playCount: 3422615,
            briefDesc: null,
            desc: null,
            artistName: "宋茜",
            artistId: 1051004,
            duration: 213000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 1051004,
                name: "宋茜",
                alias: ["Victoria", "f(x)"],
                transNames: null,
              },
            ],
          },
          {
            id: 5436693,
            cover:
              "http://p1.music.126.net/zA2vvN7mBMmXfJ5OH4Ya8g==/18806046883262958.jpg",
            name: "少年梦",
            playCount: 108742,
            briefDesc: null,
            desc: null,
            artistName: "麦子杰",
            artistId: 4496,
            duration: 116000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 4496,
                name: "麦子杰",
                alias: [],
                transNames: null,
              },
            ],
          },
          {
            id: 5393160,
            cover:
              "http://p1.music.126.net/M3EWCeYMHA_-qvq9Sa0Ffg==/2946691248832864.jpg",
            name: "偏爱",
            playCount: 3581740,
            briefDesc: null,
            desc: null,
            artistName: "张芸京",
            artistId: 10572,
            duration: 209000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 10572,
                name: "张芸京",
                alias: ["Jing Chang", "张芸菁"],
                transNames: null,
              },
            ],
          },
          {
            id: 397216,
            cover:
              "http://p1.music.126.net/FCY1sp0Cg_9PeaUtOz2g0g==/2902710697930003.jpg",
            name: "TFBOYS组合：请陪我们一起变强大",
            playCount: 1088678,
            briefDesc: null,
            desc: null,
            artistName: "TF BOYS",
            artistId: 827728,
            duration: 370000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 827728,
                name: "TFBOYS",
                alias: [
                  "The Fighting Boys",
                  "TF boys",
                  "tfboys",
                  "加油男孩",
                  "加油少年",
                  "三小只",
                  "加油男孩组合",
                  "添福宝",
                ],
                transNames: null,
              },
            ],
          }
        ],
        [
          {
            id: 613,
            cover:
              "http://p1.music.126.net/MvT7mNwpo7Ij3dQABGGQCA==/424411488356584.jpg",
            name: "逆战",
            playCount: 3595762,
            briefDesc: null,
            desc: null,
            artistName: "张杰",
            artistId: 6472,
            duration: 275073,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 6472,
                name: "张杰",
                alias: ["Jason Zhang", "杰哥"],
                transNames: null,
              },
            ],
          },
          {
            id: 10841267,
            cover:
              "http://p1.music.126.net/Uu1OsNhptyoNRLgYNcAEug==/109951163752798459.jpg",
            name: "[IDOL RADIO]乐华七子NEXT随机舞蹈挑战！",
            playCount: 269241,
            briefDesc: null,
            desc: null,
            artistName: "乐华七子NEXT",
            artistId: 15021290,
            duration: 279000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 15021290,
                name: "NEXT",
                alias: ["乐华七子", "七子"],
                transNames: null,
              },
            ],
          },
          {
            id: 5674174,
            cover:
              "http://p1.music.126.net/1yG2ZYfUJ41PkK4Lzbjtuw==/109951163037715845.jpg",
            name: "《微光》华晨宇-花好月圆·为美而生-2017中秋晚会",
            playCount: 829427,
            briefDesc: null,
            desc: null,
            artistName: "华晨宇",
            artistId: 861777,
            duration: 220000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 861777,
                name: "华晨宇",
                alias: ["花花"],
                transNames: null,
              },
            ],
          },
          {
            id: 5372010,
            cover:
              "http://p1.music.126.net/SASW47DDJwASC1h3LtlpIw==/18778559091442558.jpg",
            name: "阴阳师X极乐净土 你们的男神都在我这里",
            playCount: 3888184,
            briefDesc: null,
            desc: null,
            artistName: "群星",
            artistId: 122455,
            duration: 219000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 122455,
                name: "群星",
                alias: ["原声带", "Various Artists", "华语群星"],
                transNames: null,
              },
            ],
          },
          {
            id: 5620024,
            cover:
              "http://p1.music.126.net/QhOKmWshQ1vRG4w5RHXSMg==/19031446765460048.jpg",
            name: "新鸳鸯蝴蝶梦 (青年晚报北京场Live)",
            playCount: 2824147,
            briefDesc: null,
            desc: null,
            artistName: "许嵩",
            artistId: 5771,
            duration: 224000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 5771,
                name: "许嵩",
                alias: ["Vae"],
                transNames: null,
              },
            ],
          },
          {
            id: 5403178,
            cover:
              "http://p1.music.126.net/n_cY06e7fkiG4SJeQHaLIw==/18594940650588582.jpg",
            name: "kiqikip",
            playCount: 1343250,
            briefDesc: null,
            desc: null,
            artistName: "阿力木江·托合提",
            artistId: 1058073,
            duration: 264000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 1058073,
                name: "阿力木江·托合提",
                alias: ["alimjan tohti"],
                transNames: null,
              },
            ],
          },
          {
            id: 5678755,
            cover:
              "http://p1.music.126.net/QxL3_FyECU90IERJIJRu0Q==/109951163057150942.jpg",
            name: "那不勒斯的黎明 剧情版",
            playCount: 961361,
            briefDesc: null,
            desc: null,
            artistName: "SNH48",
            artistId: 794014,
            duration: 943000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 794014,
                name: "SNH48",
                alias: ["SNH Forty-eight", "上海48"],
                transNames: null,
              },
            ],
          },
          {
            id: 5330761,
            cover:
              "http://p1.music.126.net/lFVbUsxs_tRinDHpAqiIFA==/3420580694900742.jpg",
            name: "va Nigora Oppogoy",
            playCount: 613374,
            briefDesc: null,
            desc: null,
            artistName: "Oybek",
            artistId: 0,
            duration: 285000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 0,
                name: "Oybek",
                alias: [],
                transNames: [],
              },
            ],
          },
          {
            id: 10808650,
            cover:
              "http://p1.music.126.net/iK4l5wH9LKHLaUnFkv8vlQ==/109951163659660525.jpg",
            name: "2018网易云音乐·国风极乐夜音乐盛典",
            playCount: 2930191,
            briefDesc: "国风极乐夜音乐盛典全场！",
            desc: null,
            artistName: "许嵩",
            artistId: 5771,
            duration: 11847000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 5771,
                name: "许嵩",
                alias: ["Vae"],
                transNames: null,
              },
              {
                id: 4130,
                name: "李玉刚",
                alias: [],
                transNames: null,
              },
              {
                id: 10204,
                name: "杨千嬅",
                alias: ["杨千桦", "Miriam Yeung"],
                transNames: null,
              },
              {
                id: 6066,
                name: "杨宗纬",
                alias: ["Aska", "杨宗伟", "Aska Yang"],
                transNames: null,
              },
              {
                id: 906118,
                name: "洛天依",
                alias: [],
                transNames: null,
              },
              {
                id: 791534,
                name: "戴荃",
                alias: [],
                transNames: null,
              },
              {
                id: 15021290,
                name: "NEXT",
                alias: ["乐华七子", "七子"],
                transNames: null,
              },
              {
                id: 3249,
                name: "河图",
                alias: ["田卓"],
                transNames: null,
              },
              {
                id: 12025552,
                name: "双笙",
                alias: null,
                transNames: null,
              },
              {
                id: 8327,
                name: "李宇春",
                alias: ["Chris Lee", "春春", "小宇", "小葱"],
                transNames: null,
              },
              {
                id: 4723,
                name: "潘玮柏",
                alias: ["Will Pan", "Wilber Pan", "Will Pan 潘玮柏", "潘帅"],
                transNames: null,
              },
            ],
          },
          {
            id: 5958037,
            cover:
              "http://p1.music.126.net/b1Xi9mcMCNuJF8vJ9kmFrg==/109951163365394864.jpg",
            name: "乐华七子NEXT 新专辑即将上线",
            playCount: 896975,
            briefDesc: "乐华七子NEXT 新专辑即将上线",
            desc: null,
            artistName: "乐华七子NEXT",
            artistId: 15021290,
            duration: 21000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 15021290,
                name: "NEXT",
                alias: ["乐华七子", "七子"],
                transNames: null,
              },
            ],
          }
        ],
        [
          {
            id: 10833303,
            cover:
              "http://p1.music.126.net/Wvj4pXA0wYIwLTxRo0YMWg==/109951163667623805.jpg",
            name: "郭顶 & 山形瑞秋 23秒前导片",
            playCount: 637107,
            briefDesc: null,
            desc: null,
            artistName: "郭顶",
            artistId: 2843,
            duration: 23000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 2843,
                name: "郭顶",
                alias: [],
                transNames: null,
              },
              {
                id: 72720,
                name: "Rachael Yamagata",
                alias: ["山形瑞秋", "Rachael Yamagata"],
                transNames: ["山形瑞秋"],
              },
            ],
          },
          {
            id: 5470075,
            cover:
              "http://p1.music.126.net/Yt0N-y_Uwp1QAG5-F2uC1g==/18902803904776043.jpg",
            name: "独家专访 马頔：我从来就不是民谣歌手",
            playCount: 1112467,
            briefDesc: null,
            desc: null,
            artistName: "马頔",
            artistId: 4592,
            duration: 343000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 4592,
                name: "马頔",
                alias: ["麻油叶", "马由页"],
                transNames: null,
              },
            ],
          },
          {
            id: 5341430,
            cover:
              "http://p1.music.126.net/oz6kL52C8ifkSB4B7KLiEA==/3401888984151825.jpg",
            name: "我好像在哪见过你 剧情版",
            playCount: 1776830,
            briefDesc: "电影《精灵王座》主题曲剧情版MV",
            desc: null,
            artistName: "薛之谦",
            artistId: 5781,
            duration: 176000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 5781,
                name: "薛之谦",
                alias: ["Joker Xue", "谦谦"],
                transNames: null,
              },
            ],
          },
          {
            id: 592,
            cover:
              "http://p1.music.126.net/aZcRbViLrwrsgeUY0R6KJA==/6051711999279127.jpg",
            name: "兄弟抱一下",
            playCount: 1218267,
            briefDesc: null,
            desc: null,
            artistName: "庞龙",
            artistId: 33735944,
            duration: 274000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 33735944,
                name: "庞龙",
                alias: null,
                transNames: null,
              },
            ],
          },
          {
            id: 5368160,
            cover:
              "http://p1.music.126.net/eun5iPnQYdKvQ6EfuXxz9Q==/1399678318335653.jpg",
            name: "听妈妈的话 ",
            playCount: 326731,
            briefDesc: "黄子韬翻唱周杰伦经典歌曲",
            desc: null,
            artistName: "黄子韬",
            artistId: 1025202,
            duration: 365000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 1025202,
                name: "黄子韬",
                alias: ["TAO", "타오", "韬韬", "Z.TAO黄子韬"],
                transNames: ["TAO"],
              },
            ],
          },
          {
            id: 365003,
            cover:
              "http://p1.music.126.net/BErnTSFXu_3UhD0RfgO3YQ==/3236962233044498.jpg",
            name: "企鹅舞完整教学版",
            playCount: 493144,
            briefDesc: null,
            desc: null,
            artistName: "UNIQ",
            artistId: 1015121,
            duration: 192000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 1015121,
                name: "UNIQ",
                alias: ["유니크"],
                transNames: ["유니크"],
              },
            ],
          },
          {
            id: 384398,
            cover:
              "http://p1.music.126.net/8N03CY4S_Sj-ExtNlD8pvA==/2540971374930588.jpg",
            name: "采蘑菇的小姑娘(贝瓦儿歌)",
            playCount: 2360223,
            briefDesc: null,
            desc: null,
            artistName: "群星",
            artistId: 122455,
            duration: 81000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 122455,
                name: "群星",
                alias: ["原声带", "Various Artists", "华语群星"],
                transNames: null,
              },
            ],
          },
          {
            id: 5647328,
            cover:
              "http://p1.music.126.net/DMd1ciReJDMawKa2my3kQA==/109951163014184308.jpg",
            name: "李荣浩问候云村网友预告新歌",
            playCount: 917231,
            briefDesc: null,
            desc: null,
            artistName: "李荣浩",
            artistId: 4292,
            duration: 45000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 4292,
                name: "李荣浩",
                alias: [],
                transNames: null,
              },
            ],
          },
          {
            id: 417015,
            cover:
              "http://p1.music.126.net/Ge4rMFumV7HVvehi5vexkg==/7816428162706544.jpg",
            name: "盛夏好声音 舞蹈版",
            playCount: 384932,
            briefDesc: null,
            desc: null,
            artistName: "SNH48",
            artistId: 794014,
            duration: 275000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 794014,
                name: "SNH48",
                alias: ["SNH Forty-eight", "上海48"],
                transNames: null,
              },
            ],
          },
          {
            id: 5439368,
            cover:
              "http://p1.music.126.net/uiLu6qGWrt8TrJMKIxxiXw==/18629025511211721.jpg",
            name: "甜甜的 (cover:周杰伦)",
            playCount: 437670,
            briefDesc: null,
            desc: null,
            artistName: "安子与九妹",
            artistId: 12002183,
            duration: 206000,
            mark: 0,
            subed: false,
            artists: [
              {
                id: 12002183,
                name: "安子与九妹",
                alias: ["An9"],
                transNames: null,
              },
            ],
          }
        ]
      ]),
      arealist:['内地','港台','欧美','韩国','日本']
    }
  },
  computed:{
    iteminfo(){
      return {
        picwidth:224,
        picheight:126,
        percent:'20%',
        type:'mv'
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";
.playlist-wrapper{
  width: 1220px;
  margin-bottom: 20px;
  margin-right: -20px;
  position: relative;
}

</style>