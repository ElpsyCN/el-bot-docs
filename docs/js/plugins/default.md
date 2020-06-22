# 默认插件

默认插件也就是 EBJ 默认携带的功能。

你也可以在你的**自定义**配置文件中如下设置，来只启用某几个默认的插件。

```yaml
plugins:
  default:
    - answer
    - cli
    # - forward
    # - rss
```

::: tip
强烈建议你先阅读 [配置讲解](../config) 部分

其中 `listen` 与 `target` 分别代表监听对象和目标对象，是很多插件的通用配置属性。
:::

## 终端

> 这里的终端并非指传统的终端命令行。而是你和机器人文本信息的命令交互。  
> 本质是将终端命令从控制台移到了 QQ。

没错，实际上终端也是一个插件。

但现在基本为默认功能。还没想好是否和如何开放自定义配置。

咕咕咕！

## 应答

- `reply`: 类型

| Name     | Type                              | Example | Description                                                                                                                     |
| -------- | --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| re       | Object                            | 见代码  | [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)，包含 `pattern` 与 `flags` 属性 |
| is       | String / Array                    | 见代码  | 类型为字符串时，代表消息与文本相同；类型为数组时，代表**或**（即只要有一个完全相同则触发 ）                                     |
| includes | String / Array                    | 见代码  | 类型为字符串时，代表消息包含文本；类型为数组时，代表**与**（即同时包含，才会触发 ）                                             |
| quote    | boolean                           | true    | 是否引用回复的消息内容                                                                                                          |
| reply    | String / MessageType.MessageChain | 见代码  | 消息链 ，匹配则回复（你也可以直接写成文本）                                                                                     |
| else     | String / MessageType.MessageChain | 见代码  | 非当前监听者时，匹配则回复（你也可以直接写成文本）                                                                              |

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >早上好</chat-message>
  <chat-message :id="712727945" nickname="小云" >新的一天也要加油鸭</chat-message>
</chat-panel>

```yaml
# 消息应答
answer:
  - includes: 早上好啊
    reply: 新的一天也要加油鸭
```

---

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >早呀</chat-message>
  <chat-message :id="712727945" nickname="小云" >早</chat-message>
  <chat-message :id="910426929" nickname="云游君" >哦哈呦</chat-message>
  <chat-message :id="712727945" nickname="小云" >早</chat-message>
  <chat-message :id="910426929" nickname="云游君" >起床啦</chat-message>
  <chat-message :id="712727945" nickname="小云" >早</chat-message>
</chat-panel>

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >你好吗</chat-message>
  <chat-message :id="910426929" nickname="云游君" >Hello</chat-message>
  <chat-message :id="712727945" nickname="小云" >你好</chat-message>
  <chat-message :id="910426929" nickname="云游君" >你好</chat-message>
  <chat-message :id="712727945" nickname="小云" >你好</chat-message>
</chat-panel>

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >怎么了</chat-message>
  <chat-message :id="910426929" nickname="云游君" >怎么了啊</chat-message>
  <chat-message :id="712727945" nickname="小云" >不告诉你</chat-message>
</chat-panel>

```yaml
# 消息应答
answer:
  - re:
      pattern: 早|哦哈呦|起床啦
    reply:
      - type: Plain
        text: 早
  # 或
  - is:
      - Hello
      - 你好
    reply:
      - type: Plain
        text: 你好
  # 同时包含
  - includes:
      - 怎么
      - 啊
    reply:
      - type: Plain
        text: 不告诉你
```

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >在吗</chat-message>
  <chat-message :id="712727945" nickname="小云" >主人我在</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">在吗</chat-message>
  <chat-message :id="712727945" nickname="小云" >爪巴</chat-message>
</chat-panel>

```yaml
answer:
  - listen: master
    includes: 在吗
    reply:
      - type: Plain
        text: 主人我在
    else:
      - type: Plain
        text: 爪巴
```

## 转发

譬如：你可以建立一个 `沙雕图转发群`（群成员为你和机器人），监听对象为该群，发送到该群的任何消息将会被转发至其他多个群或好友。

<chat-panel title="沙雕图转发群">
  <chat-message :id="910426929" nickname="云游君" >舔狗日记 6月16日 阴 <br/>今天去修手机，老板说手机没坏，我一把揪住他的领子：“那我怎么收不到她的消息？”</chat-message>
</chat-panel>

<chat-panel title="一号沙雕群">
  <chat-message :id="712727945" nickname="小云" >舔狗日记 6月16日 阴 <br/>今天去修手机，老板说手机没坏，我一把揪住他的领子：“那我怎么收不到她的消息？”</chat-message>
</chat-panel>

<chat-panel title="二号沙雕群">
  <chat-message :id="712727945" nickname="小云" >舔狗日记 6月16日 阴 <br/>今天去修手机，老板说手机没坏，我一把揪住他的领子：“那我怎么收不到她的消息？”</chat-message>
</chat-panel>

> forward 下可配置多个数组

```yaml
forward:
  - listen:
      friend:
        - 123456
      group:
        - 123456
    target:
      friend:
        - 123456
      group:
        - 123456
```

## RSS

> 使用 [rss-parser](https://github.com/rbren/rss-parser) 解析

`rss` 指令可显示当前订阅源，并立即抓取最新 RSS。

<chat-panel title="私人助理">
  <chat-message :id="910426929" nickname="云游君">rss</chat-message>
  <chat-message :id="712727945" nickname="小云">您当前订阅的 RSS 源：<br/>云游君的小站: https://www.yunyoujun.cn/atom.xml<br/>addesp: https://www.addesp.com/atom.xml<br/>el-bot-js: https://github.com/ElpsyCN/el-bot-js/commits.atom</chat-message>
</chat-panel>

| 关键字       | 必要 | 类型   | 示例                | 说明                                                                                                                      |
| ------------ | ---- | ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| name         | 是   | String | 云游君的小站        | 将作为 RSS 订阅的 ID                                                                                                      |
| cron         | 否   | String | "\*/15 \* \* \* \*" | 定时器（类 Unix Cron 语法） \| [node-schedule](https://github.com/node-schedule/node-schedule)                            |
| customFields | 否   | Object | 见代码              | 可参见 [Custom Fields - rss-parser](https://github.com/rbren/rss-parser#custom-fields)，自定义后的变量可在 content 中使用 |
| content      | 否   | Array  | 见代码              | 内容输出形式，可通过 \${item.xxx} 的形式调用变量                                                                          |

默认每 15 分钟获取一次，与本地缓存的 RSS 信息比较，若内容不同时，则发送最新的一篇提示。

<chat-panel title="私人助理">
  <chat-message :id="712727945" nickname="小云" >云游君的小站<br/>标题：hexo-theme-yun 制作笔记<br/>链接：https://www.yunyoujun.cn/note/make-hexo-theme-yun/<br/>时间：2020-05-31 20:00:00<br/>摘要： Hexo-Theme-Yun 绝赞开发中~<br/><br/>#前言<br/>还在用 WordPress 的时候，总是喜新厌旧，经常换主题。且装了一堆插件，速度慢还容易崩。<br/>而迁移到 Hexo 之后（小水管服务器太慢，拿去挂 MC 了。根本原因是没钱），光是 hexo-theme-next 的配置项，便让我花了好一番功夫。<br/>导致觉得自己不一直用下去，感到十分对不起仔细一个一个配置过来的自己。<br/><br/>当然，还是改不了喜新厌旧的毛病。加之 next 主题过于广泛，显得自己泯然众人。心中颇有愤懑。（虽然本就如此）<br/><br/>而如今，诸事已毕，终于腾出空来。<br/>便决定开发一款属于自己的主题。</chat-message>
</chat-panel>

```yaml
rss:
  - name: 云游君的小站
    url: https://www.yunyoujun.cn/atom.xml
    # cron: "*/15 * * * *"
    customFields:
      item:
        - updated
        - summary
    content:
      - 标题：${item.title}
      - 链接：${item.link}
      - 时间：${item.updated}
      - 摘要：${item.summary}
    target:
      friend:
        - 910426929
      group:
        - 1072803190
```

### 默认包含的变量

当字段存在 `summary` 或 `content` 时，会对其内容进行 html 标签的过滤。

譬如：

```html
<p>哎呀</p>
```

会被过滤为：

```md
哎呀
```

#### feed

| Name          | Type   | Example                  |
| ------------- | ------ | ------------------------ |
| author        | Object | {name: ['云游君']}       |
| updated       | String | 2020-05-31T12:00:00.000Z |
| link          | String | /atom.xml                |
| feedUrl       | String | /atom.xml                |
| title         | String | 云游君的小站             |
| lastBuildDate | String | 2020-05-31T12:00:00.000Z |

#### link

| Name    | Type   | Example                                              |
| ------- | ------ | ---------------------------------------------------- |
| title   | String | hexo-theme-yun 制作笔记                              |
| link    | String | "https://www.yunyoujun.cn/note/make-hexo-theme-yun/" |
| pubDate | String | 2019-04-27T04:00:00.000Z                             |
| id      | String | "https://www.yunyoujun.cn/note/make-hexo-theme-yun/" |
| isoDate | String | 2019-04-27T04:00:00.000Z                             |
