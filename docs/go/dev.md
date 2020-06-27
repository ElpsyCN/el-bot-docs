# 开发文档

## 层次图

![](/images/ebg/hierarchy.jpg)

## IPO 表

### Controller

+ 模块描述：主控制器，用来协调多个模块的功能完成机器人的工作。
+ 被调用模块
    + 主函数
+ 调用模块
    + ConfigReader
    + GoMirai.Bot
    + CronChecker
    + IHandler
    + IDoer
    + CronChecker
    + RssListener
    + FreqMonitor
    + PluginServer
+ 公开方法
    + NewController
        + 功能：构造一个控制器
        + 输入参数：
            + bot：由`gomirai`提供的机器人对象。
            + configReader：为已经调用过`Load()`方法的 ConfigReader 类。
        + 输出参数：
            + *Controller：指向 Controller 的指针。
    + Commit
        + 功能：将机器人接收到的消息提交给控制器，由控制器做出相应的动作，如回复消息等。
        + 输入参数：
            + gomirai.InEvent: 由`gomirai`提供的事件。
        + 输出参数：无。

### ConfigReader

+ 模块描述：配置读取类，用来读取 mirai-api-http 的配置文件，本机器人的配指文件和本机器人所有的插件信息。
+ 被调用模块：
    + 主函数
    + Controller
+ 调用模块
    + Compiler
    + PluginReader
+ 公开方法
    + NewConfigReader(folder string) (*ConfigReader, error)
        + 功能：构造一个 ConfigReader
        + 输入参数：
            + folder：配置所在的文件夹，如果为`default`则读取默认配置，即`config/default.yml`。
        + 输出参数：
            + *ConfigReader：指向 ConfigReader 的指针。
            + error：表示构造过程是否有误。
    + Load(isDebug bool)
        + 功能：读取插件信息，读取配置信息，以及读取 mirai-api-http 的配置信息。
        + 输入参数：
            + isDebug：是否为调试模式，如果为调试模型，则会将配置的编译结果输出到`config/obj/obj.yml`中，反之则不输出。
        + 输出参数：无。

### Compiler

+ 模块描述：主要通过插件来协助进行配置的预处理工作。
+ 被调用模块：
    + ConfigReader
+ 调用模块：
    + PluginReader
+ 公开方法：
    + NewCompiler(folder string) (*Compiler, error)
        + 功能：构造一个 Compiler
        + 输入参数：
            + folder：配置所在的文件夹，如果为`default`则预处理默认配置，即`config/default.yml`。
        + 输出参数：
            + *Compiler：指向 Compiler 的指针。
            + error：表示构造过程是否有误。
    + Compile()
        + 功能：对配置进行预处理。
        + 输入参数：无。
        + 输出参数：无。
    + WriteFile() string
        + 功能：将预处理结果写入临时文件。
        + 输入参数：无。
        + 输出参数：
            + string: 表示临时文件的相对路径。

### PluginReader

+ 模块描述：读取所有的插件信息。
+ 被调用模块：
    + Compiler
    + PluginServer
+ 调用模块：无。
+ 公开方法：
    + NewPluginReader() (*PluginReader, error)
        + 功能：构造一个 PluginReader
        + 输入参数：无。
        + 输出参数：
            + *PluginReader：指向PluginReader 的指针。
            + error：表示构造过程是否有误。
    + ReadAllPlugin()
        + 功能：读取所有的插件信息。
        + 输入参数：无。
        + 输出参数：无。
**未完······**