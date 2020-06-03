# 预定义变量

## 使用范围

预定义变量只允许在`do`下使用，禁止在`when`下使用

## 使用方法

使用`{}`包裹变量名使用即可，如`text: 本次接收到的消息为：{el-message-text}`。

## 变量列表

+ el-message-text: 接收到的文本消息。忽略文本中穿插的表情/图片等非文本信息。如接收到的消息为「测试[图片]消息」，则 `el-message-text='测试消息'`
+ el-message-xml: 本次接收到的 XML 消息。通常在手机 QQ 上合并转发的多条消息为 XML 格式。
+ el-message-image-url-n: 接收到的消息中所包含的第 n + 1 个图片的 URL，从 0 开始计数。
+ el-sender-group-id: 消息来源群的群号。
+ el-sender-group-name: 消息来源群的群名称。
+ el-sender-user-id: 消息发送者的 QQ 号。
+ el-sender-user-name: 如果消息来源是好友则是消息发送者的昵称；如果消息来源是群成员则是群成员的群名片。
+ el-operator-group-id: 做出操作的成员所在群的群号。
+ el-operator-group-name: 做出操作的成员所在群的群名称。
+ el-operator-user-id: 做出操作的好友/成员的QQ号。
+ el-operator-user-name: 做出操作的群成员的群名片。
+ el-target-group-id: 某些事件/操作的目标成员所在群的群号。
+ el-target-group-name: 某些事件/操作的目标成员所在群的群名称。
+ el-target-user-id: 某些事件/操作的目标成员的QQ号。
+ el-target-user-name: 某些事件/操作的目标成员的群名片/昵称。
+ el-regex-n: 表示`regex`关键字中指定的「子表达式」的值，从0开始计数。
+ el-rss-title: 表示文章的标题
+ el-rss-link: 表示文章的链接
+ el-rss-author: 表示文章的作者
+ el-rss-year: 文章最后一次更新日期-年
+ el-rss-month: 文章最后一次更新日期-月
+ el-rss-day: 文章最后一次更新日期-日
+ el-rss-hour: 文章最后一次更新日期-小时
+ el-rss-minute: 文章最后一次更新日期-分钟
+ el-rss-second: 文章最后一次更新日期-秒


上面所提到的**操作和事件**包括：
+ 禁言
+ 解除禁言
+ 全员禁言
+ 解除全员禁言
+ 移除群成员
+ 新成员入群
+ At 某成员
+ At全体成员