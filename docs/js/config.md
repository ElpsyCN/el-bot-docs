# 功能配置

## 转发

forward 下可配置多个数组

- `listen`: 监听的对象
  - `friend`: 监听的 QQ
  - `group`: 监听的群
- `target`: 接收转发的目标
  - `friend`: 接收转发的 QQ
  - `group`: 接收转发的群

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

> [rss-parser](https://github.com/rbren/rss-parser)

默认包含的变量：

feed:

| Name          | Type   | Example                  |
| ------------- | ------ | ------------------------ |
| author        | Object | {name: ['云游君']}       |
| updated       | String | 2020-05-31T12:00:00.000Z |
| link          | String | /atom.xml                |
| feedUrl       | String | /atom.xml                |
| title         | String | 云游君的小站             |
| lastBuildDate | String | 2020-05-31T12:00:00.000Z |

link:

| Name    | Type   | Example                                            |
| ------- | ------ | -------------------------------------------------- |
| title   | String | hexo-theme-yun 制作笔记                            |
| link    | String | https://www.yunyoujun.cn/note/make-hexo-theme-yun/ |
| pubDate | String | 2019-04-27T04:00:00.000Z                           |
| id      | String | https://www.yunyoujun.cn/note/make-hexo-theme-yun/ |
| isoDate | String | 2019-04-27T04:00:00.000Z                           |

默认每 15 分钟获取一次，仅发送最新的一篇提示。
