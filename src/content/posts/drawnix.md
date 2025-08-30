---
title: 🎨把白板搬进你的 NAS：Drawnix 部署全流程指南
published: 2025-08-03
description: 一款开源免费、一体化的在线白板工具，支持思维导图、流程图和自由绘画，让你在家庭私有云环境里也能畅快涂鸦和协作
tags: [Drawnix, 白板工具, 思维导图, docker]
category: 工具软件
draft: false
pinned: 0
customSlug: KLKNsEI1
---

嘿，大家好，「**青柠炸机店**」又和大家见面了。

> 这次给大家带来的是如何在NAS上部署 `Drawnix`，一款开源免费、一体化的在线白板工具，支持思维导图、流程图和自由绘画，让你在家庭私有云环境里也能畅快**涂鸦**和协作。
## 🧠 什么是 Drawnix？

Drawnix 建立在 Plait 画图框架之上，定位为一个开箱即用的免费开源白板软件，集成了绘画、流程图、思维导图等功能，非常适合团队或个人使用。

核心特点如下：

- 支持**思维导图、流程图和自由绘制**，一应俱全；
- 界面简洁、操作流畅，适合新手上手；
- 内置自动保存，画布无限缩放与滚动；
- 可以导出为 PNG 或 .drawnix 设定格式；
- 插件架构灵活，未来扩展性强。

---
## ✅ 在 NAS 上部署 Drawnix

### 使用 Docker 快速启动

可以直接使用已经构建好的 Docker 镜像，例如 **ydxian/drawnix:latest**，在 NAS 上运行类似以下配置：

```yml
version: '3'

services:
  drawnix:
    image: ydxian/drawnix:latest
    container_name: drawnix
    ports:
      - "8200:80"
    restart: always

```

**然后访问 http://NAS_IP:8200 即可进入 Drawnix 主界面。**

## 🌟 Drawnix 使用演示

接下来贴出几张常见界面的截图，方便你直观了解其功能和美观程度。

**主界面**
![drawnix首页](https://oss.qnloft.com/ob-img/2025/08/03/drawnix%E9%A6%96%E9%A1%B5.png)
**思维导图样式设置**
![drawnix设置思维导图样式](https://oss.qnloft.com/ob-img/2025/08/03/drawnix%E8%AE%BE%E7%BD%AE%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE%E6%A0%B7%E5%BC%8F.png)
**字体颜色替换**
![drawnix更换字体颜色](https://oss.qnloft.com/ob-img/2025/08/03/drawnix%E6%9B%B4%E6%8D%A2%E5%AD%97%E4%BD%93%E9%A2%9C%E8%89%B2.png)
**背景皮肤主题设置**
![drawnix更换背景皮肤](https://oss.qnloft.com/ob-img/2025/08/03/drawnix%E6%9B%B4%E6%8D%A2%E8%83%8C%E6%99%AF%E7%9A%AE%E8%82%A4.png)
**菜单栏模块说明**
![drawnix菜单栏说明](https://oss.qnloft.com/ob-img/2025/08/03/drawnix%E8%8F%9C%E5%8D%95%E6%A0%8F%E8%AF%B4%E6%98%8E.png)

## 💡 使用建议与应用场景

场景 优势 团队协作 多人实时编辑，便于头脑风暴与会议同步 教学演示 实时绘画 + 导图，提高互动性 项目规划 绘制流程图、关系图等直观规划工具 个人笔记与整理 灵活记录思路，随时导出保存

---
## 总结

- **免费开源**：零成本上手；
- **部署灵活**：Docker 或源码均支持；
- **远程访问**：配合内网穿透，可实现外网协作；
- **功能全面**：导图、流程图、画笔等一体化体验；
- **主题可定制**：支持字体、颜色、皮肤等个性化设置。

> 如果你想在私有云（特别是 NAS）中搭建一个高效灵活的白板协作环境，Drawnix 是非常值得尝试的选择。