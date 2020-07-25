# el-bot

[![docs](https://github.com/ElpsyCN/el-bot-docs/workflows/docs/badge.svg)](https://docs.bot.elpsy.cn/js/)
![npm](https://img.shields.io/npm/v/el-bot)
[![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/ElpsyCN/el-bot/mirai-ts)](https://github.com/YunYouJun/mirai-ts)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ElpsyCN/el-bot)](https://github.com/ElpsyCN/el-bot)
[![GitHub](https://img.shields.io/github/license/ElpsyCN/el-bot)](https://github.com/ElpsyCN/el-bot/blob/master/LICENSE)
[![QQ Group](https://img.shields.io/badge/qq%20group-707408530-12B7F5)](https://shang.qq.com/wpa/qunwpa?idkey=5b0eef3e3256ce23981f3b0aa2457175c66ca9194efd266fd0e9a7dbe43ed653)

> 这是啥？

一个基于 [mirai-ts](https://github.com/YunYouJun/mirai-ts) 使用 TypeScript 编写实现的配置型 QQ 机器人框架。

~~适合于认为 JavaScript/TypeScript 是世界上最好的语言的用户~~

[一份无关紧要的开发历程](https://www.yunyoujun.cn/note/make-el-bot/)

> [指南](https://docs.bot.elpsy.cn/guide.html) 记得看

## Feature

el-bot 展示了整个 mirai-ts 的使用流程，并内置了一些如自动应答、转发、命令行、RSS 等常用功能（默认插件），开箱即用。

你只需要一些自定义的配置，而不再需要编写繁琐的脚本内容。

但这并不是束缚，在插件系统中你仍然可以调用机器人所有的上下文，并通过编写插件的形式快速实现你想要的功能。

**el-bot 有什么好处？**

- 使用 JavaScript 这一解释型语言，所以可以较为方便地实现运行时动态加载插件。
- 使用函数式编程的思想，专注于实现常用的小功能，并很容易插入你自定义的插件。
- 她还提供了一些常用的脚本，譬如自动下载 mirai 依赖，启动并登录 mirai-console，webhook 等。

## 开始

首先，你必须得有 [Java](https://www.java.com/zh_CN/) 与 [Node.js](https://nodejs.org/zh-cn/download/) 环境。

参考 [el-bot-template](https://github.com/ElpsyCN/el-bot-template) 的说明文档开始吧。

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >祝你玩的愉快！</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">Have fun!</chat-message>
</chat-panel>
