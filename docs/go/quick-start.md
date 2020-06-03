# 快速开始

## 安装 Golang

## 安装 JRE

若使用图形界面, 至少需要 JRE 11 并带有 JavaFX 11, 且不推荐使用 12 或更高版本.
若使用命令行或终端, 至少需要 JRE 8.

## 下载项目

```shell
git clone https://github.com/ElpsyCN/el-bot-go.git
```

## 下载依赖

### On Unix Like

```shell
sh install.sh
```

### On Windows

下载[mirai-console-wrapper-1.2.0-all](https://github.com/mamoe/mirai-console-wrapper/releases/download/1.2.0/mirai-console-wrapper-1.2.0-all.jar)到项目根目录

下载[mirai-api-http-v1.7.1](https://github.com/mamoe/mirai-api-http/releases/download/v1.7.1/mirai-api-http-v1.7.1.jar)到`plugins/`

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

+ 机器人QQ号：为在`启动 mirai-console`这步中登录的QQ号，将作为 shell 脚本的第一个参数。
+ 自定义配置目录：不使用自定义配置的话则为`default`。机器人支持读取包含自定义配置的目录，目录路径相对于`config`。假如我在`config/custom`下创建了若干的自定义配置文件，则此参数为`custom`。本参数将作为 shell 脚本的第二个参数。

### On Windows

```powershell
# 请根据需要选择对应的 bat 脚本

./start-el-bot-386.bat 机器人QQ号 default

./start-el-bot-amd64.bat 机器人QQ号 default
```

+ 机器人QQ号：为在`启动 mirai-console`这步中登录的QQ号，将作为 bat 脚本的第一个参数。
+ 自定义配置目录：不使用自定义配置的话则为`default`。机器人支持读取包含自定义配置的目录，目录路径相对于`config`。假如我在`config/custom`下创建了若干的自定义配置文件，则此参数为`custom`。本参数将作为 bat 脚本的第二个参数。

## 查看效果

此处会放一些聊天记录的图片。