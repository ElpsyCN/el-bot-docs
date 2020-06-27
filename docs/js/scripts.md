# 常用脚本

## Webhook

懂得人都懂（

### 配置

你需要将你的配置放在 git 仓库中，并设置 Webhooks。

> https://github.com/用户名/仓库/settings/hooks

- `Payload URL`: 填写你的服务器地址加端口号加 `/webhook`（默认 7777）
  > 例如：`http://1.2.3.4:7777/webhook`
- `Content type`: application/json

收到推送后，将会自动拉取新的配置并重启机器人。

### Command

- `yarn webhook`: 只监听配置更新
- `yarn webhook:all`: 同时监听配置更新和机器人仓库的更新推送