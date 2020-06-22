# 编写插件

EBJ 使用了 [mirai-ts](https://github.com/ElpsyCN/el-bot-js/tree/dev/packages/mirai-ts)，尚未完全开发完成，足够完善后将会发布成 npm 包。

你可以暴露两个函数。

- `onMessage`: 监听消息，默认传入 MessageType.Message 类型参数
- `on`: 监听事件，默认传入 mirai 机器人实例

::: tip
如果你觉得某个插件的功能非常有用受众很广，可以考虑直接为 [el-bot-js](https://github.com/ElpsyCN/el-bot-js) 提 PR。

我们也打算建立一个仓库专门收集第三方插件（对部分群体有用但不是必须的）。
:::

## 如何编写插件？

我将示范如何新建一个名为 test 的自定义插件。

在 `config/custom` 下新建 `plugins` 文件夹，新建 `test.js` 文件。

> 你的文件名将是你的插件名。

你可以通过 `global.el.config` 获取全局配置，通过 `global.bot.mirai` 获取机器人实例。

```js
// 你可以在这里对收到的消息进行处理
function onMessage(msg) {
  console.log("on message");
  console.log(msg);
  // msg.reply(ans.reply);
}

// 事件订阅说明
// https://github.com/project-mirai/mirai-api-http/blob/master/EventType.md
function on() {
  // const bot = global.bot.mirai;
  console.log("on other event");
  // console.log(bot);
  // bot.on(eventName, callback);
  // bot.on('mute', ({ operator }) => console.log(`我被${operator.memberName}禁言啦！`));
}

// 导出这两个函数
module.exports = {
  onMessage,
  on,
};
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

自定义插件将会在默认插件之后执行，自定义插件的加载顺序取决于你的配置顺序。

你可以覆盖 `plugins.default` 来只加载你想加载的默认插件。
