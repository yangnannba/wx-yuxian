Page({
  data: {
    imgUrls: [
      '/images/banner_1.jpg',
      '/images/banner_2.jpg',
      '/images/banner_3.jpg',
      '/images/banner_4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    items:[
      { img: "/images/img-1.jpg", text: "华夏圆梦 天下归心",id:1 },
      { img: "/images/img-2.jpg", text: "惟有德者能安居", id: 2 },
      { img: "/images/img-3.jpg", text: "全民共奔梦 中国好棋局", id: 3},
      { img: "/images/img-4.jpg", text: "中华圆梦 万马奔腾", id: 4},
      { img: "/images/img-5.jpg", text: "中华圆梦 鹤翔九天", id: 5 },
      { img: "/images/img-6.jpg", text: "荡起梦想 我有力量", id: 6},
      { img: "/images/img-7.jpg", text: "和国运昌", id: 7 },
      { img: "/images/img-8.jpg", text: "奔梦路上自奋蹄", id: 8}
    ]
  },
  callmy:function(){
    wx.makePhoneCall({
      phoneNumber: '15501253238' 
    })
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
    return {
      title: '蔚县剪纸',
      path: "pages/index/index"
    }
  }
})
