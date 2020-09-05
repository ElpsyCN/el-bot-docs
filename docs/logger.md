# 日志系统

```js
const { default: Bot } = require("el-bot");
/*
 * @param {Bot} ctx
 */
module.exports = (ctx) => {
  ctx.logger.success("整挺好！");
};
```

```sh
# 输出消息
[SUCCESS] 整挺好！
# [SUCCESS] 为绿色
```

## 类型

- success: 成功信息
- warning: 警告信息
- error: 错误信息
- info: 提示信息
