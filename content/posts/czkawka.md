---
title: czkawka - 帮你查找重复照片和文件
published: 2024-07-13
description: 一款跨平台的（Linux, Windows, macOS, FreeBSD and many more），重复的、超大的、损坏的文件查找、对比和处理软件。
tags: [czkawka, docker]
category: 工具软件
draft: false
pinned: 0
customSlug: FRBc3Hqs
---

> czkawka，是一款跨平台的（Linux, Windows, macOS, FreeBSD and many more），重复的、超大的、损坏的文件查找、对比和处理软件。

## czkawka的优势

1. 不仅可以查找重复的图片，还可以进行文件和音视频的查重，可谓是功能非常强；
2. 可以直观的查看重复文件的情况，对比；
3. 可以使用多种筛选条件，对重复文件进行选择；
4. 支持批量处理文件；
5. 还可以查找和清理损坏的文件；

## NAS中的安装

![Pasted image 20240713162448](https://oss.qnloft.com/ob-img/2024/07/13/Pasted%20image%2020240713162448.png)

**注意注意**：这里 ② 的 storage 目录要选择硬盘的根目录，这样才能更好的扫描我们的硬盘哈！

![Pasted image 20240713162555](https://oss.qnloft.com/ob-img/2024/07/13/Pasted%20image%2020240713162555.png)

这两个端口可以选择一个配置，①表示使用网页打开软件，②表示使用VNC直连模式（推荐）。

环境配置里面注意两个配置项：

1. **LANG**：`zh_CN.UTF-8`  将软件语言设置成中文；
2. **ENABLE_CJK_FONT**：设置为 `1` 时，将安装开源计算机字体`WenQuanYi Zen Hei`。此字体包含大量中文/日文/韩文字符。

## 软件使用

![Pasted image 20240713163907](https://oss.qnloft.com/ob-img/2024/07/13/Pasted%20image%2020240713163907.png)

1. 添加要扫描的文件夹；
2. 添加后对文件夹进行勾选操作；
3. 选择 相似图像模块；
4. 点击搜索；

![Pasted image 20240711151106](https://oss.qnloft.com/ob-img/2024/07/13/Pasted%20image%2020240711151106.png)

照片查找速度取决于硬盘的读写速度，文件的数量，算法等，所以理论上和极空间用时是差不多的。

来看一张官网的演示效果图：

![145280350 506f7e94 4db0 4de7 a68d 6e7c26bbd2bf](https://oss.qnloft.com/ob-img/2024/07/13/145280350-506f7e94-4db0-4de7-a68d-6e7c26bbd2bf.gif)


