# 插件系统

<!-- **因插件系统正在开发，本页面暂时停用。** -->

## 支持的语言

本机器人支持下列语言编写的插件
+ Java: 需要提供`.jar`文件，本地需要有`Java`运行环境。
+ Python: 需要提供`.py`文件，本地需要有`Python`运行环境。
+ JavaScript: 需要提供`.js`文件，本地需要有`NodeJS`运行环境。
+ 任何可以编译到机器码的语言所编译出来的二进制文件，本地需要有对应的`Runtime`。

## 安装

将下载好的插件拷贝到对应目录下即可。

### 插件打包方式

+ 每个插件必须有一个属于自己的目录
+ 目录名规定的格式命名
+ 目录下必须包含一个名为`start.xxx`的文件用来启动插件
  + `start.jar`: 使用 Java 编写
  + `start.js`: 使用 JavaScript 编写 且使用 nodejs 运行
  + `start.py`: 使用 Python 编写
  + `start.exe`: 使用 其他语言 编写，仅允许出现在 Windows 平台下。
  + `start.bin`: 使用 其他语言 编写，允许出现在除 Windows 平台下的任意一个平台。

### 目录结构

```
plugins
<!-- 配置编译型插件 compile 目录下 -->
├─compile
│  ├─darwin
│  │  ├─386
│  │  └─amd64
│  ├─freebsd
│  │  ├─386
│  │  └─amd64
│  ├─java
│  ├─javaScript
│  ├─linux
│  │  ├─386
│  │  └─amd64
│  ├─python
│  └─windows
│      ├─386
│      └─amd64
<!-- 实时处理型插件放到 msgproc 目录下 -->
└─msgproc
    ├─darwin
    │  ├─386
    │  └─amd64
    ├─freebsd
    │  ├─386
    │  └─amd64
    ├─java
    ├─javaScript
    ├─linux
    │  ├─386
    │  └─amd64
    ├─python
    └─windows
        ├─386
```

+ java: 存放包含`start.jar`的插件包。
+ javaScript: 存放包含`start.js`的插件包。
+ python: 存放包含`start.py`的插件包。
+ windows: 存放包含`start.exe`的插件包。386 和 amd64 代表插件的目标处理器架构，如一个插件的的目标处理器架构是 amd64，则应存放在 amd64 下。
+ darwin: 存放包含`start.bin`的插件包。386 和 amd64 代表插件的目标处理器架构，如一个插件的的目标处理器架构是 amd64，则应存放在 amd64 下。
+ linux: 存放包含`start.bin`的插件包。386 和 amd64 代表插件的目标处理器架构，如一个插件的的目标处理器架构是 amd64，则应存放在 amd64 下。
+ freebsd: 存放包含`start.bin`的插件包。386 和 amd64 代表插件的目标处理器架构，如一个插件的的目标处理器架构是 amd64，则应存放在 amd64 下。

## 实时消息处理型插件

即插件通过机器人获取接收到的信息，并生成要发送的信息提供给机器人，由机器人将信息发送。

### 通信方式

+ 插件由机器人启动。
+ 插件和机器人使用 WebSocket 进行通信。
+ 机器人的通信地址将作为插件的第一个启动参数。
+ 一个随机的 key 将作为插件的第二个启动参数。

### 调试方式

为了便于调试，机器人默认支持一个`test`作为 key，通信地址默认为`http://127.0.0.1:9999`，开发者可以据此调试自行启动插件进行调试，无需让机器人自动启动插件。但是要保证不会有多个插件使用`test`这个 key。

### 心跳信息

+ 插件需要在 15 秒内向机器人发送至少一次`ping`，机器人收到`ping`之后会回复`pong`。
+ 下列接口均需要分别进行心跳通信
    + `fetchEvent`
    + `sendMessage`
    + `sendOperation`
    + `sendControl`

### 获取事件

`/fetchEvent?key=启动参数中获取的随机的key`

#### 群消息

```json
{
    "message": {
        // 机器人是否被 At
        "at": false,
        "detail": [
            {
                "text": "文本消息内容",
                "type": "Plain"
            }
        ],
        "messageID": 2586
    },
    "senderGroup": {
        // 群号
        "id": "123456789",
        "name": "群名称"
    },
    "senderUser": {
        // 群成员 QQ 号
        "id": "123456789",
        "name": "群名片"
    },
    "type": "GroupMessage"
}
```

#### 好友消息

```json
{
    "message": {
        // 机器人是否被 At
        "at": false,
        "detail": [
            {
                "text": "文本消息",
                "type": "Plain"
            }
        ],
        // 消息 ID，用于引用。
        "messageID": "123456789"
    },
    "senderUser": {
        "id": "123456789",
        "name": "群名称"
    },
    "type": "GroupMessage"
}
```

#### 成员被禁言

```json
{
    "operation": [
        {
            "groupID": "123456789",
            "groupName": "群名称",
            "operatorID": "123456789",
            "operatorName": "管理员群名片",
            "type": "MemberMute",
            "userID": "123456789",
            "userName": "被禁言的成员的群名片"
        }
    ],
    "type": "MemberMute"
}
```

#### 成员被解除禁言

```json
{
    "operation": [
        {
            "groupID": "123456789",
            "groupName": "群名称",
            "operatorID": "123456789",
            "operatorName": "管理员群名片",
            "type": "MemberUnMute",
            "userID": "123456789",
            "userName": "解除禁言的成员的群名片"
        }
    ],
    "type": "MemberUnMute"
}
```

#### 全员禁言

```json
{
    "operation": [
        {
            "groupID": "123456789",
            "groupName": "群名称",
            "operatorID": "123456789",
            "operatorName": "管理员群名片",
            "type": "GroupMuteAll"
        }
    ],
    "type": "GroupMuteAll"
}
```

#### 关闭全员禁言

```json
{
    "operation": [
        {
            "groupID": "123456789",
            "groupName": "群名称",
            "operatorID": "123456789",
            "operatorName": "管理员群名片",
            "type": "GroupUnMuteAll"
        }
    ],
    "type": "GroupUnMuteAll"
}
```

#### 新成员入群

```json
{
    "operation": [
        {
            "groupID": "123456789",
            "groupName": "群名称",
            "type": "MemberJoin",
            "userID": "123456789",
            "userName": "新成员群名片"
        }
    ],
    "type": "MemberJoin"
}
```

#### 成员被移除

```json
{
    "operation": [
        {
            "groupID": "123456789",
            "groupName": "群名称",
            "operatorID": "123456789",
            "operatorName": "管理员群名片",
            "type": "MemberLeaveByKick",
            "userID": "123456789",
            "userName": "被移除的成员的群名片"
        }
    ],
    "type": "MemberLeaveByKick"
}
```

#### 成员主动退群

```json
{
    "operation": [
        {
            "groupID": "123456789",
            "groupName": "群名称",
            "type": "MemberLeaveByQuit",
            "userID": "123456789",
            "userName": "主动退群的成员的群名片"
        }
    ],
    "type": "MemberLeaveByQuit"
}
```

### 发送消息

`/sendMessage?key=启动参数中获取的随机的key`

```json
{  
    // 被引用的消息的 ID，如果不引用消息则为0
    "quoteID": 0,
    "receiver":{
        // 接收消息的群号
        "group":[],
        // 接收消息的好友 QQ 号
        "user":[]
    },
    "detail":[
        // 文本消息
        {"type":"Plain", "text": "文本消息"},
        // 图片消息
        {"type":"Image", "url": "https://xxxx"},
        // 表情消息
        {"type":"Face", "faceName":"piezui"}
    ]
}
```

### 发送操作

`/sendOperation?key=启动参数中获取的随机的key`

#### At

```json
{  
    "type":"At",
    // 目标成员所在群群号
    "groupID": "123456789",
    // 目标成员 QQ 号
    "userID": "123456789"
}
```

#### AtAll

```json
{  
    "type":"AtAll",
    // 目标群号
    "groupID": "123456789",
}
```

#### 禁言

```json
{  
    "type":"MemberMute",
    // 目标成员所在群群号
    "groupID": "123456789",
    // 目标成员 QQ 号
    "userID": "123456789",
    // 禁言时长（秒）
    "second": "15"
}
```

#### 解除禁言

```json
{  
    "type":"MemberUnMute",
    // 目标成员所在群群号
    "groupID": "123456789",
    // 目标成员 QQ 号
    "userID": "123456789",
}
```

#### 全员禁言

```json
{  
    "type":"GroupMuteAll",
    // 目标群号
    "groupID": "123456789",
}
```

#### 解除全员禁言

```json
{  
    "type":"GroupUnMuteAll",
    // 目标群号
    "groupID": "123456789",
}
```

### 发送机器人控制信息

`/sendControl?key=启动参数中获取的随机的key`

#### 暂停机器人

```json
{  
    "type":"Suspend"
}
```

#### 从暂停中恢复

```json
{  
    "type":"Active"
}
```

#### 切换配置

```json
{  
    "type":"EnterConfig",
    "path":"配置所在目录（相对于目录 config/ 的路径）"
}
```

#### 回到上一个配置

```json
{  
    "type":"BackToPrevConfig"
}
```

#### 暂时屏蔽某些消息发送者

```json
{  
    "type":"Block",
    // 被暂时屏蔽的群号
    "group":[],
    // 被暂时屏蔽的好友 QQ 号
    "user":[]
}
```

#### 取消屏蔽某些消息发送者

```json
{  
    "type":"Unblock",
    // 被取消屏蔽的群号
    "group":[],
    // 被取消屏蔽的好友 QQ 号
    "user":[]
}
```


## 配置编译型插件

### 简介

插件的功能主要是对配置进行预处理，因为机器人支持的配置语法比较繁琐，所以需要插件来简化配置的书写。看下面的例子

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">echo 插件</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">插件</chat-message>
</chat-panel>

这个功能是由插件`plugins/compile/javaScript/ElpsyCN-echo/start.js`实现，该插件对对应的配置为(`config/default.yml`)，使用此插件需要保证本地有`NodeJS`的运行环境。

```yml
echo:
  enable: true
```

插件将其转化为机器人支持的配置

```yml
global:
  - when:
      message:
        detail:
          - type: Plain
            regex: '\Aecho\s(?s:(.+))\z'
    do:
      message:
        detail:
          - type: Plain
            text: '{el-regex-0}'
```

**由此可见配置编译型插件的功能就是将简单的配置转化为机器人支持的复杂的配置。**

### 目录名格式

`xxxx-keyword`

+ `xxxx`: 由任意字符构成，可随意使用。
+ `keyword`: 配置文件中的顶级关键字

> 顶级关键字：如果读者了解`YAML`格式大概可以猜出来，即没有上层关键字的关键字，也可以说是`YAML`文件中”最左边“的哪些关键字。

如 `plugins/compile/javaScript/ElpsyCN-echo/` 表示其对应的顶级关键字为`echo`。

### 通信方式

1. 机器人主动启动插件。
2. 插件的第一个启动参数为插件指定的顶级关键字下的内容的 JSON 字符串。
3. 插件处理完毕后应将处理结果以 JSON 字符串的形式输出到 `stdout` 并立即结束所有进程。 

## 开发插件

+ 由于插件是由机器人启动的，所以插件启动后其`当前目录\运行目录`不是插件程序所在的目录，而是`src/main`，请注意。

### 配置编译型插件

#### 开发步骤

1. 按照下列规则建立目录名
    1. 目录名行为为`xxxxx-keyword`
    2. `xxxxx`为任意字符串，可按照喜好决定。
    3. `keyword`为配置文件中的顶级关键字
        + > 顶级关键字：如果读者了解`YAML`格式大概可以猜出来，即没有上层关键字的关键字，也可以说是`YAML`文件中”最左边“的哪些关键字。
        + 如 `ElpsyCN-echo` 表示其对应的顶级关键字为`echo`。
        + 其配置文件举例
            ```yml
            echo:
                enable: true
            ```
2. 在目录下防止文件`start.xxx`作为插件的入口文件。
    + `xxx`只能为这些取值中一个，`js`、`py、``jar`、`py``exe`和`bin`。
    + 除了`start.xxx`文件，其它对其它文件的格式无任何要求。
3. 通过第一个自动参数来获得等待处理的配置信息，配置信息格式为 JSON 字符串。
    1. 
        ```yml
        echo:
            enable: true
        ```
    2. 如果配置内容如上，则启动参数为`"{"enable":true}"`
4. 将等待处理的配置信息转化为机器人支持的通用配置后输出到`stdout`，然后自行退出。
5. 将目录放置到指定的目录下。

#### Demo

+ [`plugins/compile/javaScript/ElpsyCN-echo/`](https://github.com/ElpsyCN/el-bot-go/tree/master/plugins/compile/javaScript/ElpsyCN-echo)
+ [`plugins/compile/javaScript/ElpsyCN-answer/`](https://github.com/ElpsyCN/el-bot-go/tree/master/plugins/compile/javaScript/ElpsyCN-answer)

#### 注意事项

+ 对于`keyword`相同多个插件，机器人只会加载其中一个。
+ 机器人支持的配置格式目前支持提供`YAML`格式，见[配置语法](config-syntax.md)，其可以轻易地与`JSON`格式对应。开发者只需要简单了解`YAML`即可将其转化为`JSON`。

### 实时消息处理型插件

#### 开发步骤

1. 新建一个目录，完全按照自己的喜好命名。
2. 在目录下防止文件`start.xxx`作为插件的入口文件。
    + `xxx`只能为这些取值中一个，`js`、`py、``jar`、`py``exe`和`bin`。
    + 除了`start.xxx`文件，其它对其它文件的格式无任何要求。
3. 通过第一个参数获取和机器人的通信地址，通过第二参数获取用于验证身份的`randkey`。
4. 按需与下列的接口建立`websocket`连接。
    + `fetchEvent?key=randkey`：用于获取机器人接收到的消息和事件
    + `sendMessage?key=randkey`：用于发送消息。
    + `sendOperation?key=randkey`：用于发送操作，如禁言。
    + `sendControl?key=randkey`：用于控制机器人，如挂起。
5. 与对应接口建立连接后，需要在 15 秒内至少向机器人发送一次`ping`信息，机器人收到后会回复`pong`。注意，每个接口的心跳检测是互相独立的，所以如果与多个接口建立了连接，则每个接口都要但是进行心跳通信。
6. 按照需求编写处理消息的代码。
7. 将目录拷贝到对应的位置。

#### SDK

目前在`dev`分支提供了 JavaScript 的 SDK，下面给出一段 Demo，功能是当有人发送的群消息为`sdk`时，机器人发送文本消息`JavaScript`。

##### start.js

```js
var PluginClient = require("../../../../sdk/javaScript/client")
var Message = require("../../../../sdk/javaScript/message")

var args = process.argv.splice(2);
var client = new PluginClient(args[0], args[1]);

client.on("GroupMessage", function (event) {
    try {
        if (!event.message.detail) {
            return;
        }
        if (!event.message.detail[0].text) {
            return;
        }
        if (event.message.detail[0].type != "Plain") {
            return;
        }
        let text = event.message.detail[0].text
        if (text === "sdk") {
            client.sendGroupMessage(event.senderGroup.id, [
                Message.Plain("JavaScript");
            ])
        }
    } catch (error) {

    }
})

client.start();
```
#### 注意事项

+ 机器人退出时不会自动结束插件进程，需要插件自行通过心跳信息判断机器人是否退出并退出自身。
+ 当超时没有收到心跳信息后机器人会自动关闭对应的连接，并不会尝试重连，如果插件有重连需求需要自己重连。

