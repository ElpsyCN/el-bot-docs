# 配置讲解

EBJ 默认提供了几个最为常用的功能，并可以通过编写配置文件快速实现你的基础需求。

如果你想要更为复杂个性化的功能，那么你可能需要自行编写插件。参见[插件系统](/js/plugin/)。

> 默认的每个功能本质也是一个插件。

## 主人与管理员

终端命令只有主人或者管理员才可以调用。

在应答、转发等插件的 `listen` 配置中你也可以直接使用 master 或 admin 替代，代表只监听该数组列表中的 QQ。

```yaml
master:
  - 123456

admin:
  - 666666
  - 114514
```

## 监听与目标

其中 `listen` 与 `target` 分别代表监听对象和目标对象，是很多插件的通用配置属性。你可以举一反三。

> 注意此处的 listen 和 target 都为在对应数组中对象的字段。此处省略了 `-` 等书写。

### listen

- `listen`: 监听的对象
  - `friend`: 监听的 QQ
  - `group`: 监听的群
- `target`: 接收转发的目标
  - `friend`: 接收转发的 QQ
  - `group`: 接收转发的群

| Name   | Type          | 可选字段                          | Description                                                   |
| ------ | ------------- | --------------------------------- | ------------------------------------------------------------- |
| listen | String        | “master”/“admin”/“friend”/“group” | 可以是字符串                                                  |
| listen | Object        | friend/group                      | 可以下设 friend 和 group 字段，friend 和 group 下则为数组列表 |
| target | String/Object |                                   | 同上                                                          |

::: tip

```yaml
listen:
  friend:
    - 114514
```

这种形式并不代表只监听私聊情况下的 `114514`，而是会对该好友在私聊或者群里的发言进行监听。

:::

看不懂？简而言之，以下几种形式都是可以的。

```yaml
listen: master
```

```yaml
listen: group
```

```yaml
listen:
  friend:
    - 123456
  group:
    - 555555
```

### target

结构基本与 listen 相同。

## 定时任务

拥有定时任务的插件，通常使用 `cron` 作为子选项，并使用 [node-schedule](https://github.com/node-schedule/node-schedule) 实现定时功能。

譬如定时发一句 `一言` 到群中。

```yaml
hitokoto:
  cron: 0 0 * * *
  target:
    group:
      - 389401003
```
