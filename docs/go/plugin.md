# 插件

<!-- **因插件系统正在开发，本页面暂时停用。** -->

## 支持的语言

本机器人支持下列语言编写的插件
+ Java: 需要提供`.jar`文件
+ Python: 需要提供`.py`文件
+ JavaScript: 需要提供`.js`文件
+ 任何可以编译到机器码的语言所编译出来的二进制文件

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

## 实时处理型插件

即插件通过机器人获取接收到的信息，并生成要发送的信息提供给机器人，由机器人将信息发送。

### 通信方式

+ 插件由机器人启动。
+ 插件和机器人使用 WebSocket 进行通信。
+ 机器人的通信地址将作为插件的第一个启动参数。
+ 一个随机的 key 将作为插件的第二个启动参数。

### 调试方式

为了便于调试，机器人默认支持一个`test`作为 key，通信地址默认为`http://127.0.0.1:9999`，开发者可以据此调试自行启动插件进行调试，无需让机器人自动启动插件。

### 心跳信息

+ 插件需要在 15 秒内向插件发送至少一次 ping，机器人收到 ping 之后会回复 pong。
+ 下列接口均需要分别进行心跳通信
    + `sendMessage`
    + `sendOperation`
    + `sendControl`

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
            "type": "MemberMute",
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
    "path":"配置相对于目录 config/ 的路径"
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

这个功能是由插件`plugins/compile/javaScript/ElpsyCN-echo/start.js`实现，该插件对对应的配置为(`config/default.yml`)

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
            regex: 'echo\s(.+)'
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

### 开发插件

本机器人对插件所支持的配置无任何要求，只要插件可以将其转化为机器人可支持的配置。

### 注意事项

+ 对于`keyword`相同多个插件，机器人只会加载其中一个。
+ 机器人支持的配置格式目前支持提供`YAML`格式，见[配置语法](config-syntax.md)，其可以轻易地与`JSON`格式对应。开发者只需要简单了解`YAML`即可将其转化为`JSON`。

