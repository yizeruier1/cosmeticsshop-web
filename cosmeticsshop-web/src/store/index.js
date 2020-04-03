import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsData: [
      {
        categoryName: '粉底液',
        categoryId: 0,
        data: [
          {
            id: 1,
            name: '阿玛尼大师粉底液',
            price: '450',
            img: 'http://www.gostephen.cn/apis/nancy/fen-di-ye/1.jpg',
            desc: ''
          },
          {
            id: 2,
            name: '芭比布朗粉底液',
            price: '388',
            img: 'http://www.gostephen.cn/apis/nancy/fen-di-ye/2.jpg',
            desc: ''
          },
          {
            id: 3,
            name: '圣罗兰逆龄女神粉底液',
            price: '450',
            img: 'http://www.gostephen.cn/apis/nancy/fen-di-ye/3.jpg',
            desc: ''
          },
          {
            id: 4,
            name: '雅诗兰黛DW粉底液',
            price: '298',
            img: 'http://www.gostephen.cn/apis/nancy/fen-di-ye/4.jpg',
            desc: ''
          }
        ],
        img: ''
      },
      {
        categoryName: '精华',
        categoryId: 1,
        data: [
          {
            id: 5,
            name: 'SK2小灯泡',
            price: '1200',
            img: 'http://www.gostephen.cn/apis/nancy/jing-hua/1.jpg',
            desc: ''
          },
          {
            id: 6,
            name: '后密贴精华',
            price: '799',
            img: 'http://www.gostephen.cn/apis/nancy/jing-hua/2.jpg',
            desc: ''
          },
          {
            id: 7,
            name: '兰蔻小黑瓶',
            price: '900',
            img: 'http://www.gostephen.cn/apis/nancy/jing-hua/3.jpg',
            desc: ''
          },
          {
            id: 8,
            name: '欧莱雅小黑瓶',
            price: '165',
            img: 'http://www.gostephen.cn/apis/nancy/jing-hua/4.jpg',
            desc: ''
          },
          {
            id: 9,
            name: '雅诗兰黛小棕瓶',
            price: '850',
            img: 'http://www.gostephen.cn/apis/nancy/jing-hua/5.jpg',
            desc: ''
          },
          {
            id: 10,
            name: '资生堂红腰子',
            price: '1000',
            img: 'http://www.gostephen.cn/apis/nancy/jing-hua/6.jpg',
            desc: ''
          }
        ],
        img: ''
      },
      {
        categoryName: '水乳',
        categoryId: 2,
        data: [
          {
            id: 11,
            name: 'AHC神仙水套',
            price: '180',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/1.jpg',
            desc: ''
          },
          {
            id: 12,
            name: '拱辰享',
            price: '750',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/2.jpg',
            desc: ''
          },
          {
            id: 13,
            name: '后雪',
            price: '820',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/3.jpg',
            desc: ''
          },
          {
            id: 14,
            name: '呼吸惊喜水分',
            price: '550',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/4.jpg',
            desc: ''
          },
          {
            id: 15,
            name: '呼吸惊喜水分带安瓶',
            price: '620',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/5.jpg',
            desc: ''
          },
          {
            id: 16,
            name: '呼吸时光能量',
            price: '520',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/6.jpg',
            desc: ''
          },
          {
            id: 17,
            name: '津率享',
            price: '880',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/7.jpg',
            desc: ''
          },
          {
            id: 18,
            name: '兰蔻粉水400ml',
            price: '320',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/8.jpg',
            desc: ''
          },
          {
            id: 19,
            name: '水妍',
            price: '680',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/9.jpg',
            desc: ''
          },
          {
            id: 20,
            name: '天气丹',
            price: '1350',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/10.jpg',
            desc: ''
          },
          {
            id: 21,
            name: '雪花秀两件套',
            price: '520',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/11.jpg',
            desc: ''
          },
          {
            id: 22,
            name: '雪花秀三件套',
            price: '650',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/12.jpg',
            desc: ''
          },
          {
            id: 23,
            name: '雪花秀三件套',
            price: '950',
            img: 'http://www.gostephen.cn/apis/nancy/shui-ru/13.jpg',
            desc: ''
          }
        ],
        img: ''
      },
      {
        categoryName: '洗面奶',
        categoryId: 3,
        data: [
          {
            id: 24,
            name: 'CPB洁面',
            price: '360',
            img: 'http://www.gostephen.cn/apis/nancy/xi-mian-nai/1.jpg',
            desc: ''
          },
          {
            id: 25,
            name: 'SK2洁面',
            price: '380',
            img: 'http://www.gostephen.cn/apis/nancy/xi-mian-nai/2.jpg',
            desc: ''
          },
          {
            id: 26,
            name: 'VIDIVICI女神洁面',
            price: '128',
            img: 'http://www.gostephen.cn/apis/nancy/xi-mian-nai/3.jpg',
            desc: ''
          },
          {
            id: 27,
            name: '科颜氏高保湿洁面',
            price: '180',
            img: 'http://www.gostephen.cn/apis/nancy/xi-mian-nai/4.jpg',
            desc: ''
          },
          {
            id: 28,
            name: '香奈儿山茶花洁面',
            price: '380',
            img: 'http://www.gostephen.cn/apis/nancy/xi-mian-nai/5.jpg',
            desc: ''
          },
          {
            id: 29,
            name: '雅诗兰黛红石榴洁面',
            price: '190',
            img: 'http://www.gostephen.cn/apis/nancy/xi-mian-nai/6.jpg',
            desc: ''
          }
        ],
        img: ''
      },
      {
        categoryName: '眼霜',
        categoryId: 4,
        data: [
          {
            id: 30,
            name: '兰蔻大眼精华',
            price: '368',
            img: 'http://www.gostephen.cn/apis/nancy/yan-shuang/1.jpg',
            desc: ''
          },
          {
            id: 31,
            name: '兰蔻小黑瓶眼霜',
            price: '350',
            img: 'http://www.gostephen.cn/apis/nancy/yan-shuang/2.jpg',
            desc: ''
          },
          {
            id: 32,
            name: '雅诗兰黛二合一眼精华',
            price: '368',
            img: 'http://www.gostephen.cn/apis/nancy/yan-shuang/3.jpg',
            desc: ''
          },
          {
            id: 33,
            name: '雅诗兰黛抗蓝光眼霜',
            price: '368',
            img: 'http://www.gostephen.cn/apis/nancy/yan-shuang/4.jpg',
            desc: ''
          }
        ],
        img: ''
      },
    ]
  },
  mutations: {
  },
  actions: {
  }
})
