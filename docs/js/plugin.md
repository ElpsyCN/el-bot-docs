# 插件系统

EBJ 使用了 [node-mirai](https://github.com/RedBeanN/node-mirai)，所以你可以参照该 SDK 文档为你的机器人自定义插件。

你可以暴露两个函数。

- `onMessage`: 监听消息，默认传入 [message](https://redbean.tech/node-mirai-sdk/global.html#message) 类型参数
- `on`: 监听事件，默认传入 mirai 机器人实例

## 如何编写插件？

我将示范如何新建一个名为 test 的自定义插件。

在 `config/custom` 下新建 `plugins` 文件夹，新建 `test.js` 文件。

> 你的文件名将是你的插件名。

```js
// 你可以在这里对收到的消息进行处理
function onMessage(msg) {
  console.log("on message");
  console.log(msg);
  // msg.reply(ans.reply);
}

// 事件订阅说明
// https://github.com/RedBeanN/node-mirai/blob/master/event.md
function on(bot) {
  console.log("on other event");
  console.log(bot);
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
