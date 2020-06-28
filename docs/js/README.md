# el-bot-js

![GitHub package.json version](https://img.shields.io/github/package-json/v/ElpsyCN/el-bot-js)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ElpsyCN/el-bot-js)](https://github.com/ElpsyCN/el-bot-js)
[![GitHub](https://img.shields.io/github/license/ElpsyCN/el-bot-js)](https://github.com/ElpsyCN/el-bot-js/blob/master/LICENSE)

> 这是啥？

一个基于 [mirai-ts](https://github.com/YunYouJun/mirai-ts) 实现的配置型 QQ 机器人。

el-bot 的 js（~~女子小学生~~）版本。适合于认为 JavaScript 是世界上最好的语言的用户。

你也可以将其简称为 `EBJ`。

[一份无关紧要的开发历程](https://www.yunyoujun.cn/note/make-el-bot-js/)

## Feature

EBJ 展示了整个 mirai-ts 的使用流程，并内置了一些如自动应答、转发、命令行、RSS 等常用功能（默认插件），开箱即用。

你只需要一些自定义的配置，而不再需要编写繁琐的脚本内容。

但这并不是束缚，在插件系统中你仍然可以调用机器人所有的上下文，并通过编写插件的形式快速实现你想要的功能。

**EBJ 有什么好处？**

EBJ 使用 JavaScript 这一解释型语言，所以可以较为方便地实现运行时动态加载插件。

EBJ 使用函数式编程的思想，专注于实现常用的小功能，并很容易插入你自定义的插件。

她还提供了一些常用的脚本，譬如自动下载 mirai 依赖，启动并登录 mirai-console，webhook 等。

## 快速开始

首先，你必须得有 [Java](https://www.java.com/zh_CN/) 与 [Node.js](https://nodejs.org/zh-cn/download/) 环境。

如果你不想安装使用 [yarn](https://www.yarnpkg.com/zh-Hans/)，那么你可以使用 `npm run` 代替 `yarn` 命令。

### 安装

```sh
# 使用稳定版 el-bot-js
git clone -b master https://github.com/ElpsyCN/el-bot-js

# 尝试最新版 el-bot-js
# git clone -b dev https://github.com/ElpsyCN/el-bot-js

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

填写你的 QQ 和密码。（脚本将会自动读取，并在启动控制台 5s 后自动登录）（后续会优化）

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

#### 自定义配置

`config` 目录下新建一个 `custom` 文件夹，并新建 `index.yml` 文件。（用于书写后续的自定义配置）

### 运行

#### 启动 mirai 控制台

```sh
yarn start:console
# npm run start:console
```

> 此时 `mirai-console-wrapper` 会自动下载 `mirai-console` 和 `mirai-core-qqandroid` 的 jar 包。
> 因为国内行情，可能会下载失败。你可以进群 `707408530` 从群文件中获取，并手动放置到 content 文件夹下。

#### 启动 el-bot-js

> 新建一个终端

```sh
yarn start
# npm run start
```

此时，你的 QQ 机器人就已经成功运行起来了。并将附带一些默认的功能。

然后？然后参照左侧的文档目录，继续编写你的自定义配置文件 `config/custom/index.yml` 即可。

### 更新

```sh
# 拉取最新版本
git pull
# 安装依赖包
yarn
```

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
