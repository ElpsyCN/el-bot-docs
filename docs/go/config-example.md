# 认识配置文件

本机器人的一大优势就是无需编程即可配置机器人的行为，取而代之的是编写配置文件，虽然依旧有一定的门槛，但是门槛比学习 SDK 要低一些。

## 文本消息

### Hello World

还记得下面这段聊天记录么？

<chat-panel title="聊天记录（好友聊天或群聊）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">hello</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">Hello World!</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">你好</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">Hello World!</chat-message>
</chat-panel>

其对应的配置为

```yml
global:
  - when:
      message:
        detail:
          - type: Plain
            text: hello
          - type: Plain
            text: 你好
    do:
      message:
        detail:
          - type: Plain
            text: Hello
          - type: Plain
            text:  World!

```

+ global: 表示配置的生效范围，global 表示群聊和私聊均生效；group 表示仅群聊生效；friend 仅好友聊天生效。
+ when: 此关键字下的内容为配置的触发条件。
+ do: 此关键字下的内容为配置触发后执行的动作。
+ message：表示文本消息、图片消息、XML 消息和表情消息。
+ detail: 表示 message 的所代表的消息的详情
+ Plain: 表示文本消息
+ text: 表示文本的内容

读者到这里应该可以将上面的配置转化为下面的伪代码。这段伪代码和上面的配置是等价的。

```js
if 消息来源 == 群聊 || 消息来源 == 好友 {
    if 接收到的文本消息 == "hello" || 接收到的文本消息 == "你好" {
        回复文本消息给消息来源("Hello" + " World");
    }
}
```

### 从 URL 获取文本

机器人的行为取决于提前写死的配置文件，为了让机器人不那么”死板“，本项目做出了一些努力。看下面这段聊天记录

<chat-panel title="聊天记录（群聊）">
  <chat-message :id="910426929" nickname="云游君" >say</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">[一段随机的句子]</chat-message>
  <chat-message :id="910426929" nickname="云游君" >jsay</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">[一段随机的句子]——[出处]</chat-message>
</chat-panel>

#### 对应配置

```yml
group:
  - when:
      message:
        detail:
          - type: Plain
            text: say
    do:
      message:
        detail:
          - type: Plain
            url: https://v1.hitokoto.cn?encode=text
            text: '{el-url-text}'
  - when:
      message:
        detail:
          - type: Plain
            text: jsay
    do:
      message:
        detail:
          - type: Plain
            url: https://v1.hitokoto.cn?encode=json&charset=utf-8
            text: '{hitokoto} ——— {from}'
            json: true
```

+ url: 表示要从此 URL 获取文本
+ json: 表示从 URL 获取的文本是否为 JSON 格式
+ {el-url-text}: 表示本次从 URL 获取的文本内容。

本机器人称用`{}`包裹的字符串为预定义变量。详情见[预定义变量列表](pre-def-var.md)

#### 等价伪码

```js
if 消息来源 == 群聊 {
    if 接收到的文本消息 == "say" {
        urlText = Http.Get(url);
        回复文本消息给消息来源(urlText);
    }
    if 接收到的文本消息 == "jsay" {
        urlText = Http.Get(url);
        jsonObj = ToJsonObj(urlText)
        回复文本消息给消息来源(jsonObj.hitokoto + " ——— " + jsonObj.from);
    } 
}
```

### 通过正则文本消息

实际情况中消息更为复杂，本机器人支持通过正则表达式来匹配文本消息。

<chat-panel title="聊天记录（群聊）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">又出 bug 了，感觉头发不保。</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">手持两把锟斤拷，口中疾呼烫烫烫。</chat-message>
  <chat-message :id="910426929" nickname="云游君">我的代码不可能有 bug</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">手持两把锟斤拷，口中疾呼烫烫烫。</chat-message>
</chat-panel>

#### 对应配置

```yml
group:
  - when:
      message:
        detail:
          - type: Plain
            regex: .*bug.*
    do:
      message:
        detail:
          - type: Plain
            text: 手持两把锟斤拷，口中疾呼烫烫烫。
```

+ regex: 表示用于匹配的正则表达式

#### 等价伪码

```js
if 消息来源 == 群聊 {
    if Regex.IsMatch(".*bug.*", 接收到的文本消息) {
        回复文本消息给消息来源("手持两把锟斤拷，口中疾呼烫烫烫。");
    }
}
```


## 图片消息

### 发送本地图片

<chat-panel title="聊天记录（群聊）">
  <chat-message :id="910426929" nickname="云游君" >我要图</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">[图片]</chat-message>
</chat-panel>

#### 对应配置

```yml
group:
  - when:
      message:
        detail:
          - type: Plain
            text: 我要图
    do:
      message:
        detail:
          - type: Image
            path: image.jpg
```

+ path: 图片的相对路径，相对于`plugins/MiraiAPIHTTP/images/`

#### 等价伪码

```js
if 消息来源 == 群聊 {
    if 接收到的文本消息 == "我要图" {
        image = GetImageFromFile(path);
        回复图片消息给消息来源(image);
    }
}
```

### 发送网络图片

<chat-panel title="聊天记录（群聊）">
  <chat-message :id="910426929" nickname="云游君" >我要图</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">[图片]</chat-message>
</chat-panel>

#### 对应配置

```yml
group:
  - when:
      message:
        detail:
          - type: Plain
            text: 我要图
    do:
      message:
        detail:
          - type: Image
            url: https://xxxxx
            reDirect: false
```

+ url: 图片的 URL
+ reDirect: 某些 URL 返回的图片是不确定的，最典型的就是随机图片的 URL，如果要使用这种 URL 请将 reDirect 设置为 true，反之忽略即可。

#### 等价伪码

```js
if 消息来源 == 群聊 {
    if 接收到的文本消息 == "我要图" {
        image = GetImageFromeUrl(url);
        回复图片消息给消息来源(image);
    }
}
```

## 表情消息

<chat-panel title="聊天记录（好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">/撇嘴</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">/微笑</chat-message>
</chat-panel>

### 对应配置

```yml
friend:
  - when:
      message:
        detail:
          - type: Face
            faceName: piezui
    do:
      message:
        detail:
          - type: Face
            faceName: weixiao
```

+ faceName: 表情名

### 等价伪码

```js
if 消息来源 == 群聊 {
    if 接收到的表情消息 == piezui {
        回复表情消息给消息来源(weixiao);
    }
}
```

## 事件/操作

本机器人支持识别一些事件和执行一些操作。

### 禁言

<chat-panel title="聊天记录（好友聊天）">
  <chat-message nickname="系统消息" >路人甲 被管理员禁言一分钟</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">「路人甲」喜提禁言套餐</chat-message>
</chat-panel>

#### 对应配置

```yml
group:
  - when:
      operation:
        - type: MemberMute
    do:
      message:
        detail:
          - type: Plain
            text: 「{el-target-user-name}」喜提禁言套餐
```

+ operation: 表示某些事件
    + 成员被禁言/解除禁言
    + 全员禁言/解除全员禁言
    + 新成员入群
    + 成员被移除
    + 成员自行退群
+ {el-target-user-name}: 表示本次事件/操作的目标用户的名称

#### 等价伪码

```js
if 消息来源 == 群聊 {
    if 某成员被禁言 {
        回复表情消息给消息来源("「" + 被禁言的成员名称 + "」" + "喜提禁言套餐");
    }
}
```

## 指定消息来源

有时机器人只需要对特定群或者特定好友的消息做出反应。当不指定消息的发送者时不会检查消息的发送者。

<chat-panel title="聊天记录（群号 123）">
  <chat-message :id="910426929" nickname="云游君" >say</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">[一段随机的句子]</chat-message>
</chat-panel>

<chat-panel title="聊天记录（群号 456）">
  <chat-message :id="910426929" nickname="云游君" >say</chat-message>
</chat-panel>

### 对应配置

```yml
global:
  - when:
      message:
        sender:
          group:
            - 123
        detail:
          - type: Plain
            text: say
    do:
      message:
        detail:
          - type: Plain
            url: https://v1.hitokoto.cn?encode=text
            text: '{el-url-text}'

```

### 等价伪码

```js
if 消息来源 == 群聊 {
    for each groupID in sender.group {
        if 群号 == groupID  && 接收到的文本消息 == "say"{
            urlText = Http.Get(url);
            回复文本消息给消息来源(urlText);
        }
    }
}
```

## 指定消息接收者

有时我们不需要把消息回复给消息来源，而是回复到其它地方。

### 对应配置

```yml
global:
  - when:
      message:
        sender:
          user:
            - 你的QQ号
        detail:
          - type: Plain
            text: 替我打招呼
    do:
      message:
        receiver:
          user:
            - 好友QQ号
        detail:
          - type: Plain
            text: 你好啊

```

### 等价伪码

```js
if 消息来源 == 好友聊天 {
    for each userID in sender.user {
        if 接收到的文本消息 == "替我打招呼" {
            回复文本消息给指定的接收者(userID, "你好啊");
        }
    }
}
```

## Bot 控制

有时我们回想让机器人暂停服务却因为如不在电脑前等原因无法关闭机器人，本机器人也提供了对应的功能：
+ 暂时 & 恢复
+ 暂时忽略某些群的消息 & 取消忽略
+ 切换到指定配置 & 恢复到上一个配置
+ 退出机器人

下面我们以暂停机器人举例

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message :id="910426929" nickname="云游君" >echo 我在运行</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">我在运行</chat-message>
  <chat-message :id="910426929" nickname="云游君" >暂停</chat-message>
  <chat-message :id="910426929" nickname="云游君" >echo 我在运行</chat-message>
</chat-panel>

### 对应配置

```yml
echo:
  enable: true
global:
  - when:
      message:
        detail:
          - type: Plain
            text: 暂停
    do:
      contorl:
        - type: Suspend
```

### 对应伪码

```cpp
if 接收到的文本消息 == "暂停" {
    暂停机器人();
}
```


## 更多配置

+ [配置语法](config-syntax.md)
+ [预定义变量列表](pre-def-var.md)