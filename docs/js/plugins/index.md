# 插件系统

EBJ 使用了 [mirai-ts](https://github.com/YunYouJun/mirai-ts)。

因此你在编写插件时，可以通过 `ctx.mirai.api` 的方式直接使用 mirai-ts 的 API 进行编写，同时不要处理登录、加载插件等问题。

mirai-ts 也提供了许多字符匹配、彩色日志等辅助小工具。

> [Mirai-api-http 事件类型一览](https://github.com/project-mirai/mirai-api-http/blob/master/EventType.md)  
> [Mirai-api-http 消息类型一览](https://github.com/project-mirai/mirai-api-http/blob/master/MessageType.md)

具体例子见下方。

::: tip
如果你觉得某个插件的功能非常有用受众很广，可以考虑直接为 [el-bot-js](https://github.com/ElpsyCN/el-bot-js) 提 PR。

我们也建立了一个仓库 [el-bot-js-plugins](https://github.com/ElpsyCN/el-bot-js-plugins) 专门收集社区中有趣的插件（对部分群体有用但不是必须的）。
:::

插件主要分为三种类型：

- `default`: 内置插件
- `community`: 社区插件
- `custom`: 自定义插件

## 如何编写

我将示范如何新建一个名为 `test` 的自定义插件。

在 `config/custom` 下新建 `plugins` 文件夹，新建 `test.js` 文件。

> **你的文件名将是你的插件名。**

默认传入机器人上下文 ctx。

- ctx 是机器人的实例本身
- 通过 `ctx.el.config` 获取机器人相关的配置（即你写在配置文件中的配置）
- 通过 `ctx.mirai` 获取 mirai 实例（即 mirai-ts 的实例）

插件默认导出一个函数，你无需操心它的加载问题，只需后续在配置文件中写上该插件的名字，将会自动加载。

> [async 和 await:让异步编程更简单](https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/Async_await)

test.js

```js
// 这里因为后续用到了异步编程g关键字 await，如果你用不着，此处无需添加 async 关键字。
// 而应该使用
// export default function(ctx) {
export default async function(ctx) {
  const mirai = ctx.mirai;

  // 对收到的消息进行处理
  // message 本质相当于同时绑定了 FriendMessage GroupMessage TempMessage
  // 你也可以单独对某一类消息进行监听
  mirai.on("message", (msg) => {
    console.log("on message");
    console.log(msg);
    // 复读
    msg.reply(msg.messageChain);
  });

  // 调用 mirai-ts 封装的 mirai-api-http 发送指令
  console.log("send command help");
  const data = await mirai.api.command.send("help", []);
  console.log("帮助信息:" + data);

  // 处理各种事件类型
  // 事件订阅说明（名称均与 mirai-api-http 中时间名一致）
  // https://github.com/RedBeanN/node-mirai/blob/master/event.md
  console.log("on other event");
  // https://github.com/project-mirai/mirai-api-http/blob/master/EventType.md#群消息撤回
  mirai.on("GroupRecallEvent", ({ operator }) => {
    const text = `${operator.memberName} 撤回了一条消息，并拜托你不要再发色图了。`;
    console.log(text);
    mirai.api.sendGroupMessage(text, res.group.id);
  });
}
```

### 辅助函数

- `isListening(sender, listen)`: 传入 配置讲解 处 `listen` 的格式，可以快速判断是否在监听。
- `sendMessageByConfig(messageChain, target)`: 传入 配置讲解处 `target` 的格式，可以快速发送给多个指定对象。

```js
import { isListening, sendMessageByConfig } from "../../src/utils/message";

const canForward = isListening(msg.sender, item.listen);
if (canForward) {
  sendMessageByConfig(msg.messageChain, item.target);
}
```

## 加载插件

编写完，你还需要在你的自定义配置文件 `config/custom/index.yml` 中加载它。

```yaml
plugins:
  # default:
  #   - answer
  #   - cli
  #   - forward
  #   - rss
  custom:
    - test
```

mirai-ts 实现了一个事件队列，对应的监听事件将会推入对应事件的列表，并在收到对应类型的消息时执行。

自定义插件将会在默认插件之后进入事件队列，自定义插件的加载顺序取决于你的配置顺序。

你可以覆盖 `plugins.default` 来只加载你想加载的默认插件。

### 社区插件

[el-bot-js-plugins](https://github.com/ElpsyCN/el-bot-js-plugins) 是 EBJ 的社区插件集中地，它提供了许多有趣的插件。

同时也欢迎你为其提交插件，来给更多人使用。

```sh
# 即放到 el-bot-js 的 packages 目录下
git clone https://github.com/ElpsyCN/el-bot-js-plugins packages/el-bot-js-plugins
```

譬如加载 `niubi` 插件：

```yaml
plugins:
  community:
    - niubi
```
