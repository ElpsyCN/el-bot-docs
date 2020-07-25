# 指南

## 使用

你需要自行使用 [miraiOK](https://github.com/LXY1226/miraiOK) 启动 [mirai](https://github.com/mamoe/mirai) 与 [mirai-api-http](https://github.com/mamoe/mirai-api-http) 插件。

::: tip
你也可以直接参考或使用 [el-bot-template](https://github.com/ElpsyCN/el-bot-template)。它内置了如何安装与启动 mirai 的脚本。
:::

```sh
npm install el-bot
# yarn add el-bot
```

::: tip

因为国内速度较慢，你可以考虑切换为淘宝镜像源：

```sh
npm config set registry https://registry.npm.taobao.org
```

:::

```js
const Bot = require("el-bot").default
const el = require("../el")

const bot = new Bot({
  qq: 114514,
  setting: {
    host: 'localhost',
    port: 4859,
    authKey: 'el-psy-congroo',
    enableWebsocket: true,
  },
  // config: ...
})
bot.start()
```

So easy! Right?

## 配置

你可以使用 JSON 编写配置文件，也可以考虑以下简洁而强大的 [YAML](https://baike.baidu.com/item/YAML/1067697)。

> [YAML 语言教程](https://www.ruanyifeng.com/blog/2016/07/yaml.html)

`YAML` 是一种专攻配置的语言，可读性高（JSON 有时确实让人眼花缭乱不是么？）。（ `mirai-api-http` 同样也使用该语言配置。）

当然你还可以自由组合你的配置。

譬如：

```txt
.
├── index.js
└── index.yml
```

```js
  
require("dotenv").config()
const { resolve } = require("path")
const config = require("el-bot/dist/utils/config")

module.exports = {
  qq: parseInt(process.env.BOT_QQ),
  setting: {
    enableWebsocket: true,
  },
  config: {
    plugins: config.parse(resolve(__dirname, "./index.yml")),
  }
}
```

**编写配置时，请务必注意你的层级和缩进。**

## 升级

```sh
npm install el-bot@latest
# yarn add el-bot@latest
```

el-bot 只是一个依赖库，意味着你可以基于此以任意的方式定制你的机器人。

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >新需求来了</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">🐦 新功能下午上线</chat-message>
  <chat-message :id="712727945" nickname="小云" >Link Start!</chat-message>
</chat-panel>
