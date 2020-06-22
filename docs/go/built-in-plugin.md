# 内置插件

本机器人内置的一些插件。

## 配置编译型插件

### ElpsyCN-echo

用来测试机器人是否正常工作。

#### 配置语法

```yml
echo:
  enable: true
```

#### 查看效果

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">echo 你好</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">你好</chat-message>
</chat-panel>

### ElpsyCN-answer

可以比较快捷地编辑机器人的行为。

#### 配置语法

##### 基本结构

```yml
answer:
  - listen:
    is:
    re:
    reply:
```

##### listen

###### 消息来源为群和好友

```yml
listen: global
```

###### 消息来源为好友

```yml
listen: friend
```

###### 消息来源为群

```yml
listen: group
```

###### 消息来源为特定的用户和群

```yml
listen: 
  friend:
    - QQ 号
    - QQ 号
  group:
    - 群号
    - 群号
```

`friend`下指定的用户不限于好友，比如某个群的某个用户发了一条消息，如果其 QQ 号被写到`friend`下，依然会被识别。

##### target

规定要回复的消息的接收者，不写此项则代表回复给本次接收到的消息的的发送者（群聊或好友）。

```yml
target:
  friend:
    - QQ 号
  group:
    - 群号
```


##### is

字符串数组或字符串，当接收到的文本消息与其中一项完全相同时触发动作。

```yml
is: 早啊
```

或

```yml
is:
  - 早啊
  - 早上好
```


> 不能和`re`同时出现

##### re

字符串，当接收到的文本消息可以被正则表达式匹配时触发动作。

> 不能和`is`同时出现

> 正则标准为`RE2`标准，但是没有实现`\C`。

##### reply

被触发时执行的动作，支持多条消息，但是会被合并为一条消息。

##### 发送文本消息

```yml
reply:
  - type: Plain
    text: 文本消息
  - 文本消息
```

或

```yml
reply: 文本消息
```

##### 发送图片消息

```yml
reply:
  - type: Image
    path: 图片的相对路径（相对与 mirai/plugins/MiraiAPIHTTP/images/）
  - type: Image
    url: 图片 URL
```

#### 查看效果

##### 示例配置

```yml
answer:
  - re: 早|哦哈呦|起床啦
    reply:
      - type: Plain
        text: 早
  - is:
      - Hello
      - 你好
    reply:
      - type: Plain
        text: 你
      - type: Plain
        text: 好
  - listen: 
      friend: 
        - ADD-SP 的 QQ 号
    is:
      - 在吗
    reply:
      - type: Plain
        text: 在
```

##### 效果

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">早上好</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">哦哈呦</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">起床啦</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
</chat-panel>

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">早上好</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">哦哈呦</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">起床啦</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
</chat-panel>


<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">在吗</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">在</chat-message>
  <chat-message :id="910426929" nickname="云游君" >在吗</chat-message>
</chat-panel>

## 实时消息处理型插件