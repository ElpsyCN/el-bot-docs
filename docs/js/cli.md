# 终端命令

```sh
el <command> [options]
```

> 你可以直接向机器人发送命令来调用
> （终端）代表仅在终端可用

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君">el --help</chat-message>
  <chat-message :id="712727945" nickname="小云">Usage: el &lt;command&gt; [options]<br/><br/>命令：<br/>  el echo &lt;message&gt;  回声<br/>  el sleep           休眠<br/>  el restart         重启<br/><br/>Options:<br/>  --help, -h     显示帮助信息                                             [布尔]<br/>  --version, -v  显示版本号                                               [布尔]<br/>  --about, -a    关于
</chat-message>
</chat-panel>

## Options

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君">el -a</chat-message>
  <chat-message :id="712727945" nickname="小云">GitHub: https://github.com/elpsycn/el-bot-js</chat-message>
</chat-panel>

- `--version`, `-v`: 显示版本号
- `--help`, `-h`: 显示帮助信息
- `--about`,`-a`: 关于

## Commands

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君">el echo 早</chat-message>
  <chat-message :id="712727945" nickname="小云">早</chat-message>
</chat-panel>

- `echo` \<`message`\>: 回声
- `sleep` : 睡眠，此时将只监听终端命令
- `restart` : 重启
