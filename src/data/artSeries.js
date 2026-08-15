export const artSeries = [
  {
    slug: 'objects',
    index: '01',
    title: '《造物》',
    entryType: 'image',
    cover: '/art/human-and-object-01.jpg',
    description: '无言是器物原本的模样，在不断使用中承载故事、被赋予价值与意义，便自此拥有了生命。',
    images: [
      { src: '/art/human-and-object-01.jpg', alt: '《造物》系列：镜面、手臂与枯花' },
      { src: '/art/human-and-object-02.jpg', alt: '《造物》系列：手臂、镜面与台灯' },
    ],
  },
  {
    slug: 'moments',
    index: '02',
    title: '《瞬间》',
    entryType: 'image',
    cover: '/art/winter-observation-01.jpg',
    description: '停留、起飞、掠过，时间被羽翼轻轻切开。镜头所能留下的，只是自由经过时的一点余温。',
    images: [
      { src: '/art/winter-observation-01.jpg', alt: '《瞬间》系列：栏杆上的鸟' },
      { src: '/art/winter-observation-02.jpg', alt: '《瞬间》系列：枝条与建筑之间的鸟' },
      { src: '/art/winter-observation-03.jpg', alt: '《瞬间》系列：飞鸟与路灯' },
    ],
  },
  {
    slug: 'interweave',
    index: '03',
    title: '《交织》',
    entryType: 'image',
    cover: '/art/line-study-side.jpg',
    description: '充满偶然的遇见，就像随性勾勒的线条，我们无法预判何时何地何人，但无形中命运早已写好了彼此的牵绊。',
    images: [
      { src: '/art/line-study-side.jpg', alt: '《交织》系列线条作品' },
      { src: '/art/line-study-woman.jpg', alt: '《交织》系列线条作品' },
      { src: '/art/line-study-elephant.jpg', alt: '《交织》系列线条作品' },
      { src: '/art/line-study-bird.jpg', alt: '《交织》系列线条作品' },
    ],
  },
  {
    slug: 'motion',
    index: '04',
    title: '动态影像',
    entryType: 'text',
    entryNote: '手机、花瓣、心脏与血液，拥有各自流动的速度。',
    description: '让静止的画面开始呼吸。',
    images: [
      {
        src: '/art/digital-story.gif',
        alt: '《吞噬》动态影像',
        title: '《吞噬》',
        description: '手机带来便利，也悄然吞噬面对面的交流。人们沉入屏幕，得到短暂的愉悦，也渐渐松开与家人、朋友和自身的连接。屏幕之外，仍有值得抬头看见的生活。',
      },
      {
        src: '/art/heart-petals.gif',
        alt: '《流动中的故事》动态影像',
        title: '《流动中的故事》',
        description: '花的生长隐喻人的生命历程，盛放与凋零都指向时间的流动。心脏与血液在画面中持续跳动，成为生命向前的微小证词。',
      },
    ],
  },
  {
    slug: 'society',
    index: '05',
    title: '社团活动与内容',
    entryType: 'text',
    entryNote: '栏目、活动、社群与视觉物料。',
    description: '参与表演社与合作社团的栏目、活动和视觉物料。',
    groups: [
      {
        index: '01',
        kicker: '栏目 · 公众号',
        title: '美食特急',
        description: '围绕维多利亚本地餐厅做探店内容，为新生提供附近美食信息，也帮助餐厅获得校园社群里的曝光。',
        links: [
          ['001', '看韩剧当然要配韩料啊', 'http://mp.weixin.qq.com/s?__biz=MzUzMzMxMDQ5MA==&mid=2247485097&idx=1&sn=e5f362995e50b7ac79a2991064c111ce&chksm=faa4bbdccdd332ca82b7cab0965d497334b1a1bc94a466a24ab87dd47911808939f38801c953&scene=126&sessionid=0#rd'],
          ['002', '新学期美食指南', 'https://mp.weixin.qq.com/s/LAgEMOj4Kgg-h3O-AR6XTw'],
          ['003', '创新 · 融合 · 美味', 'https://mp.weixin.qq.com/s/o2V-johTT6-ber622c9-5w'],
        ],
      },
      {
        index: '02',
        kicker: '联合活动 · 内容',
        title: '大型活动联办',
        description: '参与跨社团活动。',
        links: [
          ['HALLOWEEN', '沉浸式剧场「最后一堂课」', 'http://mp.weixin.qq.com/s?__biz=MzUzMzMxMDQ5MA==&mid=2247485050&idx=1&sn=250ff6c9917f0d33ee169c540e55c1dd&chksm=faa4bb0fcdd33390c488e38508f5ce12c1a6&scene=126&sessionid=0#rd'],
          ['NEW YEAR', '分享你在维多利亚的春节', 'http://mp.weixin.qq.com/s?__biz=MzUzMzMxMDQ5MA==&mid=2247485344&idx=1&sn=ce55ef6b913d2c4b063434f53dd37597&chksm=faa4bad5cdd332198ffe3845c18ac8cd0e8114d55a3397586f775684a304d7865b32c6824a6ce0&scene=126&sessionid=0#rd'],
        ],
      },
      {
        index: '03',
        kicker: '说唱工作室 · 联合创办',
        title: 'AX Studio',
        description: '参与说唱工作室的创立与活动组织，连接原创音乐、表演和校园社群。',
        links: [['EVENT', '嘻哈俱乐部狂欢夜', 'https://mp.weixin.qq.com/s/3XqDNxTOPtgWqzZnbaxCsw']],
      },
    ],
    visuals: [
      { src: '/art/ax-studio.jpg', alt: 'AX Studio 视觉标识' },
      { src: '/art/recruit-poster.jpg', alt: '表演社招新海报' },
      { src: '/art/performance-recruit-poster.jpg', alt: 'UVIC 表演社招新海报' },
      { src: '/art/hiphop-night-poster.jpg', alt: '嘻哈狂欢夜活动海报' },
    ],
  },
];

export const findArtSeries = (slug) => artSeries.find((series) => series.slug === slug);
