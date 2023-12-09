export default {
  nav: {
    id: "nav",
    Title: "IP 工具箱",
    IPinfo: "IP 信息",
    Connectivity: "网络连通性",
    WebRTC: "WebRTC 测试",
    DNSLeakTest: "DNS 泄漏测试",
    SpeedTest: "网速测试",
  },
  ipInfos: {
    id: "ipinfos",
    Title: "IP 信息",
    Notes:
      "将会从 6 个来源检查 IP 数据，如果当前 IP 栈只有 1 个，则没有数据的来源会显示为空。",
    Simple: "简约",
    Map: "地图",
    MapUnavailable: "地图不可用",
    Source: "来源",
    IP: "IP 地址",
    Country: "国家",
    Region: "地区",
    City: "城市",
    ISP: "ISP",
    ASN: "ASN",
    IPv4Error: "获取失败或不存在 IPv4 地址",
    IPv6Error: "获取失败或不存在 IPv6 地址",
  },
  connectivity: {
    id: "connectivity",
    Title: "网络连通性",
    Note: "通过加载对应网站上的小图片进行测试，延迟值仅供参考，实际会更小。",
    StatusWait: "待检测",
    StatusAvailable: "可用",
    StatusUnavailable: "不可用",
    StatusTimeout: "超时或不可用",
    checking: "检查中...",
  },
  webrtc: {
    id: "webrtc",
    Title: "WebRTC 测试",
    Note: "WebRTC 往往通过 UDP 直连进行建立，如果测试返回了真实 IP，则意味着你的代理设置没有覆盖这些连接。",
    StatusWait: "待检测或连接错误",
    StatusError: "测试出错",
  },
  dnsleaktest: {
    id: "dnsleaktest",
    Name: "测试",
    Title: "DNS 泄漏测试",
    Note: "DNS 泄露（DNS Leaks）的意思是，当你挂上 VPN/代理后，你解析域名时，依然通过当地的运营商进行解析，这时就有 DNS 泄露的风险。",
    Note2:
      "泄露测试的方法是通过访问新生成的域名，检测你是通过哪个地区的 DNS 出口进行解析，如果返回的出口区域和你当地的运营商区域相同，则有 DNS 泄露风险，你可能需要修改 VPN/代理设置。",
    Endpoint: "DNS 出口",
    EndpointCountry: "出口地区",
    StatusWait: "待检测",
    StatusError: "测试出错",
  },
  speedtest: {
    id: "speedtest",
    Title: "网速测试",
    Note: "将从 Cloudflare 使用边沿网络进行速度测试，时间可能较长。如果你的网络位于中国大陆，数据可能会有较大的偏差。测速结果仅供参考，实际速度会更快。",
    Download: "下载",
    Upload: "上传",
    Latency: "延迟",
    Jitter: "抖动",
    Unit: "Mbps",
    StatusWait: "--",
    StatusError: "测试出错",
    videoStreaming: "在线视频：",
    gaming: " 分，在线游戏：",
    rtc: " 分，视频会议：",
    score: "根据网速测试，得出你以下质量分数：",
    resultNote: " 分。分数仅供参考。",
  },
  ipcheck: {
    id: "ipcheck",
    Title: "IP 查询",
    Placeholder: "请输入 IP 地址",
    Button: "查询",
    Error: "请输入有效的 IPv4 或 IPv6 地址。",
  },
  alert: {
    id: "alert",
    refreshEverythingMessage: "正在刷新所有数据，请等待...",
    refreshEverythingTitle: "正在刷新",
    OhNo: "糟糕！",
    Congrats: "恭喜呀！",
    OhNo_Message: "连通性检测没有通过，部分网站无法访问。",
    Congrats_Message: "所有的连通性检测均通过，你可以访问所有网站。",
    maskedInfoTitle_1: "IP 隐藏成功",
    maskedInfoMessage_1: "IP 信息已隐藏，截图时请注意隐私。",
    maskedInfoTitle: "全部隐藏成功",
    maskedInfoMessage: "所有信息已隐藏，现在可以安心截图了。",
    unmaskedInfoTitle: "取消隐藏",
    unmaskedInfoMessage: "信息已显示，截图时请注意隐私。",
  },
  shortcutKeys: {
    id: "shortcutKeys",
    GoToTop: "回到顶部",
    GoToBottom: "回到底部",
    ToggleDarkMode: "切换深色模式",
    RefreshEverything: "刷新所有数据",
    RefreshIPCard: "刷新某张 IP 卡片",
    RefreshConnectivityTests: "刷新连通性测试",
    RefreshWebRTC: "刷新 WebRTC 测试",
    RefreshDNSLeakTest: "刷新 DNS 泄漏测试",
    ToggleMaps: "切换地图显示",
    IPCheck: "IP 查询",
    AddBingMapKey: "添加 Bing Map API Key",
    ToggleInfoMask: "切换信息隐藏",
    Help: "显示快捷键",
    HelpNote: "使用快捷键的人，是喜欢效率的人，你真棒！",
  },
  page: {
    title:
      "查看我的 IP 地址 | 查询本机 IP 地址及归属地 | 查看 WebRTC 连接 IP ｜ DNS 泄露检测 | 网速测试 | Jason Ng 阿禅开源作品",
    footerName: "Creators: Jason Ng, Seven Yu & ChatGPT",
    footerLink: "https://github.com/jason5ng32/MyIP",
  },
  addBingMapKey: {
    Title: "添加 Bing Map API Key",
    Note: "添加后，可以在 IP 信息中显示地图。API Key 只会在当前浏览器中保存，方便下次使用，不会上传到服务器。",
    Placeholder: "请输入 Bing Map API Key",
    Button: "保存",
    removeButton: "删除",
    Error: "请输入有效的 Bing Map API Key。",
  },
  helpModal: {
    Title: "快捷键",
  },
};
