const cdnDomain = 'https://junxio-static.oss-cn-shenzhen.aliyuncs.com/static'

export const pageData = {
  Home: {
    avatarUrl: process.env.VUE_APP_URL_ALI_OSS + '/assets/code200.png',
    myName: 'JunXiong.Zhong',
    greeting: 'Hi，good to see you.',
  },
  Introduce: {
    pageTitle: 'About',
    brief: '热爱前端，熟悉`JavaScript`、`Vue`、`React`、`TypeScript`等',
    birth: {
      iconUrl: `${cdnDomain}/info/cake.svg`,
      text: '1996.02.25',
    },
    university: {
      iconUrl: `${cdnDomain}/info/university.svg`,
      text: 'DGUT',
    },
    home: {
      iconUrl: `${cdnDomain}/info/pin.svg`,
      text: 'ShenZhen',
    },
    mail: {
      iconUrl: `${cdnDomain}/info/mail.svg`,
      text: 'junxio220@gmail.com',
    },
    tel: {
      iconUrl: `${cdnDomain}/info/phone.svg`,
      text: '13049896626',
    },
    major: {
      iconUrl: `${cdnDomain}/info/cap.svg`,
      text: '计算机科学与技术',
    },
  },
  // Skill: {
  //   pageTitle: '技能',
  //   list: [
  //     {
  //       iconUrl: `${cdnDomain}/pocket_monster/bullbasaur.svg`,
  //       text: 'javaScript',
  //     },
  //     {
  //       iconUrl: `${cdnDomain}/pocket_monster/caterpie.svg`,
  //       text: 'css',
  //     },
  //     {
  //       iconUrl: `${cdnDomain}/pocket_monster/mankey.svg`,
  //       text: 'html',
  //     },
  //     {
  //       iconUrl: `${cdnDomain}/pocket_monster/pidgey.svg`,
  //       text: 'jquery',
  //     },
  //     {
  //       iconUrl: `${cdnDomain}/pocket_monster/pikachu.svg`,
  //       text: 'vue',
  //     },
  //     {
  //       iconUrl: `${cdnDomain}/pocket_monster/psyduck.svg`,
  //       text: 'node',
  //     },
  //     {
  //       iconUrl: `${cdnDomain}/pocket_monster/snorlax.svg`,
  //       text: 'ps',
  //     },
  //     {
  //       iconUrl: `${cdnDomain}/pocket_monster/squirtle.svg`,
  //       text: 'less',
  //     },
  //   ],
  // },
  // Project: {
  //   pageTitle: '项目',
  // },
}
