# el-bot

[![docs](https://github.com/ElpsyCN/el-bot-docs/workflows/docs/badge.svg)](https://docs.bot.elpsy.cn/js/)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/ElpsyCN/el-bot)](https://githu.com/ElpsyCN/el-bot)
[![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/ElpsyCN/el-bot/mirai-ts)](https://github.com/YunYouJun/mirai-ts)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ElpsyCN/el-bot)](https://github.com/ElpsyCN/el-bot)
[![GitHub](https://img.shields.io/github/license/ElpsyCN/el-bot)](https://github.com/ElpsyCN/el-bot/blob/master/LICENSE)
[![QQ Group](https://img.shields.io/badge/qq%20group-707408530-12B7F5)](https://shang.qq.com/wpa/qunwpa?idkey=5b0eef3e3256ce23981f3b0aa2457175c66ca9194efd266fd0e9a7dbe43ed653)

> 这是啥？

一个基于 [mirai-ts](https://github.com/YunYouJun/mirai-ts) 实现的配置型 QQ 机器人（框架？）。

el-bot 的 js（~~女子小学生~~）版本。适合于认为 JavaScript/TypeScript 是世界上最好的语言的用户。

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

## 快速开始

首先，你必须得有 [Java](https://www.java.com/zh_CN/) 与 [Node.js](https://nodejs.org/zh-cn/download/) 环境。

### 安装

```sh
# 使用稳定版 el-bot
git clone -b master https://github.com/ElpsyCN/el-bot

# 尝试最新版 el-bot
# git clone -b dev https://github.com/ElpsyCN/el-bot

cd el-bot

# 安装依赖
npm install

# 安装 mirai 依赖，会显示交互命令行，选择对应版本下载即可。
npm run install:mirai
```

因为国内速度较慢，你可以考虑切换为淘宝镜像源：

```sh
npm config set registry https://registry.npm.taobao.org
```

> 本质对 [miraiOK](https://github.com/LXY1226/miraiOK) 再进行了一层包裹，可通过命令行选择对应版本并下载。
> 你也可以手动下载 [mirai-console-wrapper](https://github.com/mamoe/mirai-console-wrapper/releases) 和 [mirai-api-http](https://github.com/mamoe/mirai-api-http/releases)。
> 因为国内行情，mirai-api-http 可能下载较慢，你也可以进群 707408530，从群文件中获取。

并放置如下：

- `el-bot/mirai-console-wrapper-*.jar`
- `el-bot/plugins/mirai-api-http-*.jar`

### 配置

复制 `.env.example` 文件为 `.env`。

填写你的 QQ。（用来告诉 el-bot 你是要登录哪个 QQ）

```bash
BOT_QQ=123456
```

> 当然，你手动登录也可以

复制 `plugins/MiraiAPIHTTP/setting.example.yml` 文件为 `plugins/MiraiAPIHTTP/setting.yml`。

记得修改你的 `authKey`，这很重要，否则你的机器人将很可能被 [NTR](https://zh.moegirl.org/zh-hans/NTR)。

```yaml
authKey: el-psy-congroo
```

#### 自定义配置

`config` 目录下新建一个 `custom` 文件夹，并新建 `index.yml` 文件。（用于书写后续的自定义配置）

### 运行

#### 启动全部

> 第一次最好别这么干，因为你还要在 mirai 控制台里验证登录什么的。

执行该脚本等价于同时启动下文描述的 mirai 和 el-bot。（此时两者的输出信息将显示在同一个终端中。）

```sh
npm run start
```

#### 启动 mirai 控制台

::: warning
Windows 用户不用执行下述脚本，直接在文件夹中双击打开 miraiOK 开头的 exe 文件即可。
:::

```sh
npm run start:mirai
```

> 此时 `miraiOK` 会自动下载 `mirai-console-wrapper`、 `mirai-console` 和 `mirai-core-qqandroid` 的 jar 包，并放到对应位置。
> 如果下载失败。你可以进群 `707408530` 从群文件中获取，并手动放置到 content 文件夹下。

::: tip
miraiOK 提供了自动登录功能，你可以先 `npm run start:mirai` 启动，生成 `config.txt` 文件。
进入 `config.txt`，在末尾添加：

```sh
login 你的QQ 你的密码
```

:::

#### 启动 el-bot

记得新建一个终端，并确保你的 mirai 控制台已经保持打开。

> 检测控制台是否可以正常使用的一个方式是访问 <localhost:4859/about> 查看是否有信息返回。（如果你修改了端口号，记得替换。）

```sh
npm run start:bot
```

此时，你的 QQ 机器人就已经成功运行起来了。并将附带一些默认的功能。

然后？然后参照左侧的文档目录，继续编写你的自定义配置文件 `config/custom/index.yml` 即可。

### 更新

```sh
# 拉取最新版本
git pull
# 安装依赖包
npm install
```

### 开发

```sh
# 开发模式 el-bot
npm run dev
```

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >祝你玩的愉快！</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">Have fun!</chat-message>
</chat-panel>
