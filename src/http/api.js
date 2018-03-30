// import {baseUrl,ossService,wechat,staticPath,openFire} from './base';
import {WANUrl as url, other} from './base.js';
const {baseUrl, ossService, wechat, staticPath, openFire} = url;
const api = {
  // eg
  /* 视频管理模块================start */
  getMemberVideoList: baseUrl + 'post/manager/MemberVideoService/getMemberVideoList',
  /* 视频管理模块================end */

  /* 首页========================start */
  getPrivateProductStoreList: baseUrl + 'get/crm/mainhomepage/MainHomePageService/getPrivateProductStoreList', // 首页获取产品列表
  getMainHomePageMenuConfig: baseUrl + 'get/crm/mainhomepage/MainHomePageService/getMainHomePageMenuConfig', // 首页配置菜单接口
  getAdvertisementList: baseUrl + 'get/crm/advertisemodule/AdvertiseService/getAdvertisementList', // 通用广告模块
  checkMemProduct: baseUrl + 'get/crm/productmodule/MemberProductService/checkMemProduct', // 获取用户点击产品时的跳转类型
  /* 首页========================end */

  /* 登录模块========================start */
  necyLoginWithCode: baseUrl + 'post/crm/membermodule/MemberService/necyLoginWithCode',
  realNameVerified: baseUrl + 'post/crm/membermodule/MemberService/realNameVerified',
  /* 登录模块========================end */

  /* 系统反馈====================start */
  recordMemberFeedback: baseUrl + 'post/crm/membermodule/MemberFeedbackService/recordMemberFeedback',
  /* 系统反馈====================end */

  /* OSS模块======================start */
  // 获取OSS签名
  getObjectPolicy: ossService + 'getObjectPolicy',
  /* OSS模块======================end */

  /* 短线聚牛========================start */
  // 巨景投顾 - 短线聚牛研报/操作提醒分页
  getReportOrRemindByPaging: baseUrl + 'get/crm/combinationmodule/StockPoolService/getReportOrRemindByPaging',
  // 巨景投顾 - 短线聚牛列表分页接口
  getStockPoolByPaging: baseUrl + 'get/crm/combinationmodule/StockPoolService/getStockPoolByPaging',
  // 巨景投顾 - 短线聚牛研报详情
  getReportDetail: baseUrl + 'get/crm/combinationmodule/StockPoolService/getReportDetail',
  // 巨景投顾 - 短线聚牛个股页详情
  getStockPoolDetail: baseUrl + 'get/crm/combinationmodule/StockPoolService/getStockPoolDetail',
  // 巨景投顾 - 短线聚牛是否购买
  getIsBuyStockPool: baseUrl + 'get/crm/combinationmodule/StockPoolService/isBuyStockPool',
  /* 短线聚牛========================end */

  /* 机构跟投========================start */
  //机构跟投
  getOrganizationFollowByPaging: baseUrl + 'get/crm/combinationmodule/OrganizationFollowService/getOrganizationFollowByPaging',
  //机构跟投 组合详情接口
  getOrganizationFollowDetail: baseUrl + 'get/crm/combinationmodule/OrganizationFollowService/getOrganizationFollowDetail',
  //机构跟投 研报列表
  getResearchReportByPaging: baseUrl + 'get/crm/combinationmodule/OrganizationFollowService/getResearchReportByPaging',
  //机构跟投 研报详情 necy/
  getTransferPositionsDetail: baseUrl + 'get/crm/combinationmodule/OrganizationFollowService/getTransferPositionsDetail',
  //机构跟投调仓列表
  getTransferPositionsByPaging: baseUrl + 'get/crm/combinationmodule/OrganizationFollowService/getTransferPositionsByPaging',
  //通过类型获取对应全部评论
  getAllCommentListByType: baseUrl + 'get/crm/textbroadcastmodule/TextBroadcastCommenService/getAllCommentListByType',
  //发表评论
  publicComment: baseUrl + 'post/crm/membermodule/MemberCommentService/publicComment',
  //点赞或者取消点赞
  clickOrCancelBest: baseUrl + 'get/crm/membermodule/MemberBestService/clickOrCancelBest',
  //-获取更多回复接口
  getCommentMost: baseUrl + 'get/crm/textbroadcastmodule/TextBroadcastCommenService/getCommentMost',
  //机构跟投判断是否购买
  isBuyOrganization: baseUrl + 'get/crm/combinationmodule/OrganizationFollowService/isBuyOrganization',

  /* 机构跟投========================end */

  /* 私人订制========================start */
  //获取私人订制主页信息
  getPersonalDesign: baseUrl + 'get/crm/combinationmodule/PersonalDesignService/getPersonalDesign',
  //获取私人订制内容列表（专案组、老师，俱乐部）
  getPersonalDesignList: baseUrl + 'get/crm/combinationmodule/PersonalDesignService/getPersonalDesignList',
  //获取老师简介信息
  getTeacherIntroduction: baseUrl + 'get/crm/mainhomepage/MainHomePageService/getTeacherIntroduction',
  //获取私人订制  广告
  advertisement: baseUrl + 'get/crm/advertisemodule/AdvertiseService/getAdvertisement',
  applyPersonalDesign: baseUrl + 'post/crm/combinationmodule/PersonalDesignService/applyPersonalDesign', // 用户申请理财师、聊天室
  /* 私人订制========================end */

  /* 合同模块========================start */
  getMemberContractList: baseUrl + 'get/crm/productmodule/MemberContractService/getMemberContractList', //获取用户合同列表
  getContract: baseUrl + 'get/crm/productmodule/MemberContractService/getContract', // 获取用户合同详情
  getNoSignMemberContractList: baseUrl + 'get/crm/productmodule/MemberContractService/getNoSignMemberContractList', // 获取未签约用户合同列表
  ContractToPdf: baseUrl + 'post/crm/productmodule/MemberContractService/ContractToPdf', // 上传合同
  // 提交合同
  /* 合同模块========================end */

  /* 我的模块=========================start */
  getMemberProduct: baseUrl + 'get/crm/productmodule/MemberProductService/getMemberProduct', // 获取我的产品
  rebindPhone: baseUrl + 'post/crm/membermodule/MemberService/rebindPhone', // 重新绑定手机
  /* 我的模块=========================end */

  /* 订单模块=========================start */
  getOrderList: baseUrl + 'get/crm/productmodule/MemberProductService/getOrderList',
  getMemOrderList: baseUrl + 'get/crm/productmodule/MemberProductService/getMemOrderList', // 获取我的订单列表
  /* 订单模块=========================end */

  /* 测评模块=========================start */
  getMemberEvaluateReault: baseUrl + 'get/crm/mainhomepage/MainHomePageService/getMemberEvaluateReault', // 获取最近一次测评结果
  getMemEvaluateReault: baseUrl + 'get/crm/mainhomepage/MainHomePageService/getMemEvaluateReault', // 获取测评结果列表
  uploadMemberEvaluateReault: baseUrl + 'post/crm/productmodule/MemberContractService/uploadMemberEvaluateReault', // 上传测评结果
  uploadRiskBook: baseUrl + 'post/crm/productmodule/MemberContractService/uploadRiskBook', // 上传风险揭示书
  checkProductRate: baseUrl + 'get/crm/productmodule/MemberContractService/checkProductRate', // 检测测评结果
  /* 测评模块=========================end */

  /* 微信授权模块======================start */
  wechatAppId: wechat.APPID, // 微信appid
  wechatRedirect: wechat.REDIRECTURL, // 微信授权重定向地址
  getOpenId: wechat.getOpenId, // 获取openId
  wechatState: wechat.state, // 微信重定向额外参数
  getWechatToken: 'https://api.weixin.qq.com/sns/oauth2/access_token', // 获取access_token
  refreshWechatToken: 'https://api.weixin.qq.com/sns/oauth2/refresh_token', // 刷新access_token
  checkWechatToken: 'https://api.weixin.qq.com/sns/auth', // 检验授权凭证
  getWechatInfo: 'https://api.weixin.qq.com/sns/userinfo', // 拉取用户信息
  /* 微信授权模块======================end */

  /* 验证码==========================start */
  sendPostSmsLoginCode: baseUrl + 'post/crm/membermodule/MemberService/sendPostSmsLoginCode', // 获取验证码
  /* 验证码==========================end */

  /* 外部链接==========================start */
  checkMemberProduct: baseUrl + 'get/crm/productmodule/MemberProductService/checkMemberProduct', // 获取用户购买产品对应跳转链接
  /* 外部链接==========================end */

  /* 聊天模块==========================start */
  openFireService: openFire.serviceUrl, // openFire服务器地址
  openFireConnect: 'http://' + openFire.serviceUrl + ':7070/http-bind/',
  getChatRecordList: baseUrl + 'chat/getChatRecordList', // 获取聊天
  // getChatRecordList: 'http://192.168.57.52:8081/sy_web/chat/getChatRecordList?from=57ea45cd107ac06aa673c547&pageNo=1&pageSize=20&type=1&to=57ea2932107ac06aa673c3ec', // 获取聊天记录(单聊)
  initChatInfo: baseUrl + 'chat/initChatInfo', // 初始化聊天界面数据
  download: baseUrl + 'chat/download', // 下载聊天文件
  updateUnRead: baseUrl + 'chat/updateUnRead', // 更新未读消息数

  /* 聊天模块==========================end */

  /*公共资源============================start*/
  staticPath: staticPath, // 公共资源地址
  checkMemProductByType: baseUrl + 'get/crm/productmodule/MemberProductService/checkMemProductByType', // 是否购买过某种产品
  /*公共资源============================end*/

}

export default api
