export default {
  sidebar: {
    home: '首页',
    stylegen: '样式生成器',
    help: '帮助',
    projectAddress: '项目地址',
    giftRecordOfficial: '官方打赏记录',
  },
  home: {
    roomIdEmpty: '房间ID不能为空',
    roomIdInteger: '房间ID必须为正整数',

    general: '常规',
    roomId: '房间ID',
    showDanmaku: '显示消息弹幕',
    showSuperchat: '显示醒目留言(SC)',
    showNewMember: '显示新舰长',
    showGift: '显示礼物',
    showGiftInfo: '显示礼物信息',
    mergeSimilarDanmaku: '合并相似弹幕',
    mergeGift: '合并礼物',

    danmakuAtBottom: '弹幕居下',
    tickerAtButtom: '底部显示SC固定栏',

    showTranslateDanmakuOnly: '只显示翻译弹幕',
    translationSign: '翻译弹幕首字符',
    onlyOneCharacter: '只能输入一个字符，如【',
    
    minGiftPrice: '打赏弹幕最低显示价格(元)',
    minTickerPrice: '打赏停驻栏最低显示价格(元)',
    maxNumber: '最大弹幕数',
    fadeOutNum: '预留淡出弹幕数',
    pinTime: '弹幕停留时长(为0时持续停留)',

    imageShowType: '图片插入方式',
    imageShowTypes: [
      {
        id: '0',
        name: '替换关键词(无需符号)'
      },
      {
          id: '1',
          name: '替换关键词(需符号)'
      },
      {
          id: '2',
          name: '在文字消息后添加'
      }
    ],
    maxImage: '最大图片数',

    block: '屏蔽',
    giftDanmaku: '屏蔽礼物弹幕',
    blockLevel: '屏蔽用户等级低于',
    informalUser: '屏蔽非正式会员',
    unverifiedUser: '屏蔽未绑定手机用户',
    blockKeywords: '屏蔽关键词',
    onePerLine: '一行一个',
    blockUsers: '屏蔽用户',
    blockMedalLevel: '屏蔽当前直播间勋章等级低于',

    advanced: '高级',
    relayMessagesByServer: '通过服务器转发消息',
    autoTranslate: '自动翻译弹幕到日语（需要通过服务器转发消息）',
    giftUsernamePronunciation: '标注打赏用户名读音',
    dontShow: '不显示',
    pinyin: '拼音',
    kana: '日文假名',

    testing: '测试',
    minDanmakuInterval: '最小弹幕发送间隔',
    maxDanmakuInterval: '最大弹幕发送间隔',


    roomUrl: '房间URL',
    copy: '复制',
    enterBilibili: '进入B站直播间',
    enterRoom: '进入房间',
    enterTestRoom: '进入测试房间',
    exportConfig: '导出配置',
    importConfig: '导入配置',

    failedToParseConfig: '配置解析失败：'
  },
  stylegen: {
    legacy: '经典',
    lineLike: '仿微信',

    light: '明亮',
    dark: '黑暗',

    global: '全局',
    danmakuAtBottom: '弹幕从底部出现',
    tickerAtButtom: '底部显示SC固定栏',
    
    outlines: '描边',
    showOutlines: '显示描边',
    outlineSize: '描边尺寸',
    outlineColor: '描边颜色',

    avatars: '头像',
    showAvatars: '显示头像',
    avatarSize: '头像尺寸',

    userNames: '用户名',
    showUserNames: '显示用户名',
    randomUserNamesColor: '随机名字颜色',
    font: '字体',
    fontSize: '字体尺寸',
    lineHeight: '行高（0为默认）',
    normalColor: '普通颜色',
    ownerColor: '主播颜色',
    moderatorColor: '房管颜色',
    memberColor: '舰长颜色',
    showBadges: '显示用户勋章',
    showColon: '用户名后显示冒号',

    medal: '粉丝勋章(牌子)',
    showMedal: '显示勋章',
    showOnlyOwnerMedal: '只显示直播主勋章',
    showMedalName: '显示勋章名',
    showMedalLevel: '显示勋章等级',

    messages: '消息',
    color: '颜色',
    onNewLine: '在新行显示',

    time: '时间',
    showTime: '显示时间',

    backgrounds: '背景',
    bgColor: '背景色',
    useBarsInsteadOfBg: '用条代替消息背景',
    messageBgColor: '消息背景色',
    ownerMessageBgColor: '主播消息背景色',
    moderatorMessageBgColor: '房管消息背景色',
    memberMessageBgColor: '舰长消息背景色',

    scAndNewMember: '打赏、舰长',
    firstLineFont: '第一行字体',
    firstLineFontSize: '第一行字体尺寸',
    firstLineLineHeight: '第一行行高（0为默认）',
    firstLineColor: '第一行颜色',
    secondLineFont: '第二行字体',
    secondLineFontSize: '第二行字体尺寸',
    secondLineLineHeight: '第二行行高（0为默认）',
    secondLineColor: '第二行颜色',
    scContentLineFont: 'Super Chat内容字体',
    scContentLineFontSize: 'Super Chat内容字体尺寸',
    scContentLineLineHeight: 'Super Chat内容行高（0为默认）',
    scContentLineColor: 'Super Chat内容颜色',
    showNewMemberBg: '显示新舰长背景',
    showScTicker: '显示Super Chat固定栏',
    showOtherThings: '显示Super Chat固定栏之外的内容',

    animation: '动画',
    animateIn: '进出动画',
    fadeInTime: '淡入时间（毫秒）',
    animateOut: '移除旧消息',
    animateOutWaitTime: '移除前等待时间（秒）',
    fadeOutTime: '淡出时间（毫秒）',
    slide: '滑动',
    reverseSlide: '反向滑动',
    playAnimation: '播放动画',

    result: '结果',
    copy: '复制',
    resetConfig: '恢复默认设置'
  },
  help: {
    help: '帮助',
    p1: '1. 从B站直播间网页复制房间ID',
    p2: '2. 把房间ID输入到首页的房间ID，复制房间URL',
    p3: '3. 使用样式生成器生成样式，复制CSS',
    p4: '4. 在OBS中添加浏览器源',
    p5: '5. URL处输入之前复制的房间URL，自定义CSS处输入之前复制的CSS'
  }
}
