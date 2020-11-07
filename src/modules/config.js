global.INFO_PROJECT = [
  {
    title: '交互式简历',
    content: '在移动端网页上展示我的简历，展示过程采取电话接听、微信聊天等引领用户了解我，用户可通过一些操作一步步阅读我的简历，是使用原生JS、CSS等辅助库编写的单页应用。',
    detail: ['使用单例、发布订阅模式开发。','CSS3，使用animation等属性，animate动画库等控制动画。','HTML5语义标签，页面结构更清晰。','预加载。','部分优化。'],
    link: `https://github.com/${githubUsername}/resume`,
    capture: "https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/project/mobile_resume_capture.png",
    viewerUrl: "https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/QRcode/mobile_qr_code.png"
  }, {
    title: 'QQ音乐播放页面',
    content: '为了锻炼js正则，自己模仿QQ音乐移动端网页版播放页面，实现通过ajax获取歌词并用正则解析歌词放置页面展示，功能：自动播放歌曲，歌词自动滚动，暂停与续播歌曲。',
    detail: ['加载页面适配。','less','ajax获取歌词，js正则解析歌词。','用Zepto控制歌词滚动，歌词与音乐同步，进度条显示。','后端使用express监听并处理请求。'],
    link: `https://github.com/${githubUsername}/qqmusic`,
    capture: "https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/project/qqmusic_capture.png",
    viewerUrl: "https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/QRcode/music_qr_code.png"
  }, {
    title: '去哪儿网',
    content: '学习完vue后利用vue-cli、vue-router、vuex做的小项目，目的是为了利用所学的vue知识实现去哪儿网部分功能,例如：首页与详情页展示、星星评分、切换/搜索城市、图片相册的轮播功能等等，是一次对vue基本知识的实践,通过项目查清弥补自己vue知识的缺漏',
    detail: ['vue-router对页面路由，首页组件缓存','swiper轮播首页广告以及相册展示。','localstorage缓存数据，保证下次打开仍显示当前城市。','iscoll解决移动端滚动功能。','ajax获取数据，数据存放在json，后台express处理请求。','less编写样式,提高效率','图标优化，使用阿里iconfont、svg展示图标。','已在阿里云服务器部署。'],
    link: `https://github.com/${githubUsername}/qunar-touch`,
    capture: "https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/project/qunar_capture.png",
    viewerUrl: "https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static/QRcode/qunar_qr_code.png"
  }
]