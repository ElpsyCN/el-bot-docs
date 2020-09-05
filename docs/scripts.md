# 常用脚本

请参见 [el-bot-template/package.json](https://github.com/ElpsyCN/el-bot-template/blob/master/package.json) `scripts` 字段。

## 全局安装

你也可以通过全局安装 el-bot 的方式以使用 el-bot 的命令行。

```sh
npm install -g el-bot
# yarn global add el-bot
```

```sh
# 安装 mirai
el install mirai

# 启动 mirai
el start mirai

# 启动机器人
el bot
```

## Webhook

推送自己的机器人时，服务器将监听 GitHub 仓库消息，并拉取代码重启机器人。

### 配置

你需要将你的配置放在 git 仓库中，并设置 Webhooks。

> https://github.com/用户名/仓库/settings/hooks

- `Payload URL`: 填写你的服务器地址加端口号加 `/webhook`（默认 7777）
  > 例如：`http://1.2.3.4:7777/webhook`
- `Content type`: application/json

收到推送后，将会自动拉取新的配置并重启机器人。

### Command

- `npm run webhook`: 监听并拉取更新
