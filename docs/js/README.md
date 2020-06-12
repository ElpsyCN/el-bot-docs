# el-bot-js

![GitHub package.json version](https://img.shields.io/github/package-json/v/ElpsyCN/el-bot-js)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ElpsyCN/el-bot-js)](https://github.com/ElpsyCN/el-bot-js)
[![GitHub](https://img.shields.io/github/license/ElpsyCN/el-bot-js)](https://github.com/ElpsyCN/el-bot-js/blob/master/LICENSE)

> 这是啥？

一个基于 mirai 实现的配置型 QQ 机器人。

el-bot 的 js（~~女子小学生~~）版本。适合于认为 JavaScript 是世界上最好的语言的用户。

## 快速开始

> 首先，你必须得有 [Java](https://www.java.com/zh_CN/) 环境。
> 其次，是 [Node.js](https://nodejs.org/zh-cn/download/) 环境。

### 配置

复制 `.env.example` 文件为 `.env`。

填写你的 QQ 和密码。（脚本将会自动读取，并在启动控制台后登录）

> 当然，你手动登录也可以

```bash
BOT_QQ=123456
BOT_PASSWORD=******
```

复制 `plugins/MiraiAPIHTTP/setting.example.yml` 文件为 `plugins/MiraiAPIHTTP/setting.yml`。

自定义你的 `authKey`，这很重要，否则你的机器人将很可能被 [NTR](https://zh.moegirl.org/zh-hans/NTR)。

```yaml
authKey: el-bot-js
```

### 运行

> 如果你不想安装使用 [yarn](https://www.yarnpkg.com/zh-Hans/)，那么你可以使用下方注释的 npm 命令。

```sh
# 安装依赖
yarn
# npm install

# 安装 mirai 依赖
yarn install:mirai
# npm run install:mirai

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
