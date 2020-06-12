# 快速开始

## 安装 Golang

至少安装 `go v1.14.4` 版本。

## 安装 JRE

若使用图形界面, 至少需要 JRE 11 并带有 JavaFX 11, 且不推荐使用 12 或更高版本.

若使用命令行或终端, 至少需要 JRE 8.

## 下载项目

### 稳定版

```shell
git clone https://github.com/ElpsyCN/el-bot-go.git
```

### 开发板（支持插件）

```shell
git clone -b dev https://github.com/ElpsyCN/el-bot-go.git
```

## 下载依赖

### On Unix Like

```shell
sh install.sh
```

### On Windows

下载[mirai-console-wrapper-1.3.0-all](https://github.com/mamoe/mirai-console-wrapper/releases/download/1.3.0/mirai-console-wrapper-1.3.0-all.jar)到`mirai/`

下载[mirai-api-http-v1.7.2](https://github.com/mamoe/mirai-api-http/releases/download/v1.7.2/mirai-api-http-v1.7.2.jar)到`mirai/plugins/`

## 创建 setting.yml

在`plugins/MiraiAPIHTTP/setting.yml`中填入下面的内容，如果路径和文件不存在则创建。

```yml
authKey: qwertyuiop
port: 8080
enableWebsocket: false
```

## 启动 mirai-console

### On Unix Like

```shell
sh start-console.sh
```

然后按照提示进行操作完成 QQ 登录操作。

### On Windows(Powershell)

```powershell
./start-console.bat
```

然后按照提示进行操作完成 QQ 登录操作。

## 启动 el-bot-go

如果执行下列操作的时候出现 package 下载失败的情况，建议前往[releases](https://github.com/ElpsyCN/el-bot-go/releases)下载对应的二进制文件到`bin`目录下再执行下面的操作。

### On Unix Like

```shell
sh start-el-bot.sh 机器人QQ号 default
```

- 机器人 QQ 号：为在`启动 mirai-console`这步中登录的 QQ 号，将作为 shell 脚本的第一个参数。
- 自定义配置目录：不使用自定义配置的话则为`default`。机器人支持读取包含自定义配置的目录，目录路径相对于`config`。假如我在`config/custom`下创建了若干的自定义配置文件，则此参数为`custom`。本参数将作为 shell 脚本的第二个参数。

### On Windows

```powershell
# 请根据需要选择对应的 bat 脚本

./start-el-bot-386.bat 机器人QQ号 default

./start-el-bot-amd64.bat 机器人QQ号 default
```

- 机器人 QQ 号：为在`启动 mirai-console`这步中登录的 QQ 号，将作为 bat 脚本的第一个参数。
- 自定义配置目录：不使用自定义配置的话则为`default`。机器人支持读取包含自定义配置的目录，目录路径相对于`config`。假如我在`config/custom`下创建了若干的自定义配置文件，则此参数为`custom`。本参数将作为 bat 脚本的第二个参数。

## 查看效果

<!-- https://s1.ax1x.com/2020/06/03/tdho7V.jpg -->
<!-- https://s1.ax1x.com/2020/06/03/td4S76.jpg -->

- 当群内发生下列事件的时候会机器人会有对应的回复
  - 成员被禁言/解除禁言
  - 全员禁言/解除全员禁言
  - 新成员入群
  - 成员被移除
  - 成员自行退群

<chat-panel title="聊天记录（好友聊天或群聊）">
  <chat-message :id="910426929" nickname="云游君" >echo 欢迎使用 el-bot</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">欢迎使用 el-bot</chat-message>
</chat-panel>

<chat-panel title="聊天记录（好友聊天或群聊）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">hello</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">Hello World!</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">你好</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">Hello World!</chat-message>
</chat-panel>

<chat-panel title="聊天记录（群聊）">
  <chat-message :id="910426929" nickname="云游君" >say</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">[一段随机的句子]</chat-message>
  <chat-message :id="910426929" nickname="云游君" >jsay</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">[一段随机的句子]——[出处]</chat-message>
</chat-panel>
