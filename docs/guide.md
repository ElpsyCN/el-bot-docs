# 指南

## Project

| Project                                             | Docs                         | 简称 | 说明         |
| --------------------------------------------------- | ---------------------------- | ---- | ------------ |
| [el-bot-go](https://github.com/ElpsyCN/el-bot-go)   | [文档](/go/)                 | EBG  | GO 版 el-bot |
| [el-bot-js](https://github.com/ElpsyCN/el-bot-js)   | [文档](/js/)                 | EBJ  | JS 版 el-bot |
| [el-bot-web](https://github.com/ElpsyCN/el-bot-web) | [预览](https://bot.elpsy.cn) | EBW  | 网页控制台   |

## 使用须知

无论你打算使用 `EBG` 还是 `EBJ`，在此之前你都需要简单了解一下 [YAML](https://baike.baidu.com/item/YAML/1067697)。

> [YAML 语言教程](https://www.ruanyifeng.com/blog/2016/07/yaml.html)

因为他们的配置均通过 `yaml` 这一专攻配置文件的语言书写。

**编写配置时，请务必注意你的层级和缩进。**

一个简单的键值对：

```yaml
name: el-bot
```

```json
{ "name": "el-bot" }
```

一个简单的数组：

```yaml
projects:
  - el-bot-go
  - el-bot-js
  - el-bot-web
```

```json
{
  "projects": ["el-bot-go", "el-bot-js", "el-bot-web"]
}
```

<chat-panel title="聊天记录">
  <chat-message :id="910426929" nickname="云游君" >新需求来了</chat-message>
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">🐦 新功能下午上线</chat-message>
</chat-panel>
