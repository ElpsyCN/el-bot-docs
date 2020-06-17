# el-bot-js

![GitHub package.json version](https://img.shields.io/github/package-json/v/ElpsyCN/el-bot-js)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ElpsyCN/el-bot-js)](https://github.com/ElpsyCN/el-bot-js)
[![GitHub](https://img.shields.io/github/license/ElpsyCN/el-bot-js)](https://github.com/ElpsyCN/el-bot-js/blob/master/LICENSE)

> 这是啥？

一个基于 mirai 实现的配置型 QQ 机器人。

el-bot 的 js（~~女子小学生~~）版本。适合于认为 JavaScript 是世界上最好的语言的用户。

你也可以简称 `EBJ`。

## Feature

EBJ 有什么好处？

EBJ 相比 EBG（el-bot-go）配置功能大而全的定位，EBJ 使用 JavaScript 这一解释型语言，所以可以较为方便地实现运行时动态加载插件。

EBJ 函数式编程的思想，专注于实现常用的小功能，并很容易插入你自定义的插件。

## 快速开始

首先，你必须得有 [Java](https://www.java.com/zh_CN/) 与 [Node.js](https://nodejs.org/zh-cn/download/) 环境。

如果你不想安装使用 [yarn](https://www.yarnpkg.com/zh-Hans/)，那么你可以使用 `npm run` 代替 `yarn` 命令。

### 安装

```sh
git clone https://github.com/ElpsyCN/el-bot-js

cd el-bot-js

# 安装依赖
yarn install
# npm install

# 安装 mirai 依赖
yarn install:mirai
# npm run install:mirai
```

> 你也可以手动下载 [mirai-console-wrapper](https://github.com/mamoe/mirai-console-wrapper/releases) 和 [mirai-api-http](https://github.com/mamoe/mirai-api-http/releases)。

并放置如下：

- `el-bot-js/mirai-console-wrapper-*.jar`
- `el-bot-js/plugins/mirai-api-http-*.jar`

### 配置

复制 `.env.example` 文件为 `.env`。

填写你的 QQ 和密码。（脚本将会自动读取，并在启动控制台 5s 后自动登录）

> 当然，你手动登录也可以

```bash
BOT_QQ=123456
BOT_PASSWORD=******
```

复制 `plugins/MiraiAPIHTTP/setting.example.yml` 文件为 `plugins/MiraiAPIHTTP/setting.yml`。

记得修改你的 `authKey`，这很重要，否则你的机器人将很可能被 [NTR](https://zh.moegirl.org/zh-hans/NTR)。

```yaml
authKey: el-bot-js
```

### 运行

```sh
# 启动 mirai 控制台
yarn start:console
# npm run start:console

# 启动 el-bot-js
yarn start
# npm run start
```

此时，你的 QQ 机器人就已经成功运行起来了。并将附带一些默认的功能。

然后？然后参照左侧的文档目录，继续编写你的自定义配置文件 `config/custom/index.yml` 即可。

### 开发

```sh
# 开发模式 el-bot-js
yarn dev
# npm run dev
```

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >祝你玩的愉快！</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">Have fun!</chat-message>
</chat-panel>
