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
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">el echo 你好</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">你好</chat-message>
</chat-panel>

### ElpsyCN-hitokoto（仅开发版）

调用一言接口发送随机的句子

#### 配置语法

```yml
hitokoto:
  enable: true
  when: el say
  line: gloabl
  maxlength:
  minlength:
  types:
    - a
    - b
```

| 关键字    | 必要 | 类型          | 说明                                                         |      |
| --------- | ---- | ------------- | ------------------------------------------------------------ | ---- |
| enable    | 是   | Bool          | 是否启用插件                                                 |      |
| types     | 否   | Array[String] | 表示[句子类型](https://developer.hitokoto.cn/sentence/#%E5%8F%A5%E5%AD%90%E7%B1%BB%E5%9E%8B%EF%BC%88%E5%8F%82%E6%95%B0%EF%BC%89) |      |
| line      | 否   | String        | 表示接口线路，`global`表示国际线路，不写或其它表示国内线路   |      |
| when      | 是   | String        | 表示触发动作的文本                                           |      |
| maxlength | 否   | Interger      | 返回句子的最大长度（包含）                                   |      |
| minlength | 否   | Interger      | 返回句子的最小长度（包含）                                   |      |

#### 查看效果

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">el say</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">{一段随机句子}\n——{来源}</chat-message>
</chat-panel>

### ElpsyCN-answer

可以比较快捷地编辑机器人的行为。

#### 配置语法

##### 基本结构

```yml
answer:
  enable: true
  global:
    - is: hello
      reply: Hello World!
    - is:
        - 无双！
        - 阵中战将，可留姓名！
      reply: 
        - 我乃
        - 常山赵子龙也
        - ！
    - re: 早上好|哦哈呦|起床啦
      reply: 早
  friend:
  group:
```

| 关键字 | 必要                    | 类型                 | 说明                                                  |
| ------ | ----------------------- | -------------------- | ----------------------------------------------------- |
| enable | 是                      | Bool                 | 是否启用插件                                          |
| global | 否                      | Array[Object]        | 此关键字下的规则对群聊和好友聊天均生效                |
| friend | 否                      | Array[Object]        | 此关键字下的规则对好友聊天生效                        |
| group  | 否                      | Array[Object]        | 此关键字下的规则对于群聊生效                          |
| is     | `is`/`re`至少有一个出现 | String/Array[String] | 当接收到与之完全匹配的文本消息时触发`reply`           |
| re     | `is`/`re`至少有一个出现 | String/Array[String] | 当接受要能被指定正则表达式匹配的文本消息时触发`reply` |
| reply  | 是                      | String/Array[String] | 回复的文本消息内容                                    |

> 正则标准为`RE2`标准，但是不支持`\C`。

##### 效果

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">hello</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">Hello World!</chat-message>
</chat-panel>

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">无双！</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">我乃常山赵子龙也！</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">阵中战将，可留姓名！</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">我乃常山赵子龙也！</chat-message>
</chat-panel>

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">早上好</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">哦哈呦</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">起床啦</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">早</chat-message>
</chat-panel>

## 实时消息处理型插件