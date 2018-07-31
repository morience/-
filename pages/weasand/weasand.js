Page({
  data: {
    list: [{
      description: '如果患者是成年人，还能说话，表明气管没有被完全卡住，这时可拍打他的背部，让他用力咳嗽，看能否将异物咳出来。',
      src: '../../assets/images/sun.jpg',
    }, {
        description: '如患者自觉卡住的位置比较高，就让他尽量张大嘴，观察是否能直接从口腔里看到异物的所在，如果可以，就想办法帮他取出来。',
      src: '../../assets/images/zz.jpg',
    }, {
        description: '当患者已经说不出话了，说明气道已完全梗阻，此时施救者应站在患者的背后，一手握拳置于患者剑突下缘（拳头下缘在肚脐上方的位置），另一手覆在拳头上，然后猛地向上向内按压，以求令体内气道的压力突然增加将异物冲出。',
      src: '../../assets/images/ya.jpg',
    }, {
        description: '如患者为小儿，施救者可坐在凳子上，将小儿趴在一条腿的大腿上，让他头朝下，然后拍打他的背部，帮助他把异物咳出来。',
      src: '../../assets/images/ke.jpg',
    }, {
        description: '假如上述急救方法都无效，则应立即拨打120电话，尽快将患者送往医院进行治疗。',
     
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
});
