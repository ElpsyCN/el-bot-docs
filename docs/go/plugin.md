# 插件

请确保系统中具有上述语言的运行环境。

## 安装插件

将下载好的插件拷贝到对应目录下即可。

### 目录结构

```
plugins
│
├─darwin
│  │
│  ├─386
│  │
│  └─amd64
│
├─freebsd
│  │
│  ├─386
│  │
│  └─amd64
│
├─java
│
├─javaScript
│      ElpsyCN-echo.js
│
├─linux
│  │
│  ├─386
│  │
│  └─amd64
│
├─python
│
└─windows
    │
    ├─386
    │
    └─amd64
```

+ java: 存放`.jar`文件。
+ javaScript: 存放`.js`文件。
+ python: 存放`.py`文件。
+ windows: 存放 Windows 下的二进制形式的插件，386 和 amd64 代表插件的目标处理器架构，如一个插件的的目标处理器架构是 amd64，则应存放在 amd64 下。
+ darwin: 类似 windows。
+ linux: 类似 windows。
+ freebsd: 类似 windows。

## 开发插件

### 支持的语言

本机器人支持下列语言编写的插件
+ Java: 需要提供`.jar`文件
+ Python: 需要提供`.py`文件
+ JavaScript: 需要提供`.js`文件
+ 任何可以编译到机器码的语言所编译出来的二进制文件

### 功能

插件的功能主要是对配置进行预处理，因为机器人支持的配置语法比较繁琐，所以需要插件来简化配置的书写。看下面的例子

<chat-panel title="聊天记录（群聊或好友聊天）">
  <chat-message nickname="ADD-SP" avatar="https://s1.ax1x.com/2020/06/03/td4S76.jpg">echo 插件</chat-message>
  <chat-message nickname="Bot" avatar="https://s1.ax1x.com/2020/06/03/tdho7V.jpg">插件</chat-message>
</chat-panel>

这个功能是由插件`plugins/javaScript/ElpsyCN-echo.js`实现，该插件对对应的配置为(`config/default.yml`)

```yml
echo:
  enable: true
```

插件将其转化为机器人支持的配置

```yml
global:
  - when:
      message:
        detail:
          - type: Plain
            regex: 'echo\s(.+)'
    do:
      message:
        detail:
          - type: Plain
            text: '{el-regex-0}'
```

**由此可见本机器人插件的功能就是将简单的配置转化为机器人支持的复杂的配置。**

### 插件命名规则

`xxx`: 表示任何可见字符，也包括`-`。

`keyword`: 为插件所使用的配置的顶级关键字。

如 `ElpsyCN-echo.js`，表示其使用的顶级关键字为 `echo`。

那么机器人在调用插件的之后就会将`echo`下的所有内容以`JSON`字符串的形式传递给插件。

> 顶级关键字: 在`yml`文件中，顶级关键字就是不带任何缩进的关键字，即「最左边」的关键字。

#### java

`xxx-keyword.jar`

#### Python

`xxx-keyword.py`

#### JavaScript

`xxx-keyword.js`

#### 任何可以编译到机器码的语言所编译出来的二进制文件

##### On Unix Like

`xxx-keyword.bin`

##### On Windows

`xxx-keyword.exe`

### 插件与机器人的通信方式

机器人会将插件对应的配置内容转化为`JSON`字符串，然后作为传递个插件的第一个自动参数，插件只需要读取启动参数即可获取。

插件将其对应的配置转化为机器人支持的配置后，需要在`stdout`输出机器人支持的配置对应的`JSON`字符串，如果没有转话为对应的配置，则输出空字符串，然后退出。

示例插件可见 `plugins/javaScript/ElpsyCN-echo.js`

### 注意事项

+ 对于`keyword`相同多个插件，机器人只会加载其中一个。
+ 机器人支持的配置格式目前支持提供`YAML`格式，见[配置语法](config-syntax.md)，其可以轻易地与`JSON`格式对应。开发者只需要简单了解`YAML`即可将其转化为`JSON`。