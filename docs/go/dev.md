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
    + Commit
        + 功能：将机器人接收到的消息提交给控制器，由控制器做出相应的动作，如回复消息等。
        + 输入参数：GoMirai.InEvent
        + 输入说明：Native 事件
        + 输出参数：无
        + 输出说明：无

**未完······**