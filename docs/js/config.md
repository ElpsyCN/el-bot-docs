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
