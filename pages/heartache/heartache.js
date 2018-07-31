var wxMarkerData = [];
Page({
  data: {
    list: [{
      description: '当遇到突发性的心绞痛时。',
      src: '../../assets/images/heart1.jpg',
    }, {
        description: '应该立即停止工作，然后坐下来休息，最好是平卧，再吃些硝酸甘油片，一般很快就能有效果。',
      src: '../../assets/images/yao.jpg',
    }, {
        description: '如果发病的时候，没有药物在旁边，可以指掐内关穴位，也可以用力压迫手臂酸痛部位，这些都可以算是比较有效的急救方法。',
      src: '../../assets/images/nei.gif',
    },
    {
      description: '如果以上方法都没用，请立即拨打急救电话。',
    }],
  },
calling: function () {
    wx.makePhoneCall({
      phoneNumber: '120', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }

})
