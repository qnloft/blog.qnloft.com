---
title: 🔥无需付费！隐私优先！一键搭建全能工具箱：Omni-Tools自托管全攻略
published: 2025-04-01
description: 简单的视频或图片处理，不是收费就是要看广告？还有担心敏感数据的隐私泄露？这款软件来帮你！
tags: [Omni-Tools, 图片出来, docker]
category: 工具软件
draft: false
pinned: 0
customSlug: tx9Kd8jt
---

> 亲爱的极客小伙伴们，我是你们的老朋友，「青柠炸机店」。简单的视频或图片处理，不是收费就是要看广告？还有担心敏感数据的隐私泄露？今天要给大家种草的**Omni-Tools**，一款用于日常任务的强大网络工具的自托管集合。无广告，无跟踪，只需从浏览器快速访问实用程序就能对图片和视频进行简单的处理。

![iShot 2025 03 31 16.01.31](https://oss.qnloft.com/ob-img/2025/04/01/skkci268NlObCnJr5ngliShot_2025-03-31_16.01.31.png)

-----
## 🛠️ 超硬核功能实测

#### ▶️ 视频工作流革命

- 4K视频裁剪：通过设置起点和终点来修剪视频。
- 视频旋转一键生成：将视频旋转 90 度、180 度或 270 度。
- 视频压缩：通过将视频缩放到不同的分辨率（如 240p、480p、720p 等）来压缩视频。此工具有助于减小文件大小，同时保持可接受的质量。支持 MP4、WebM 和 OGG 等常见视频格式。

![Pasted image 20250331180901](https://oss.qnloft.com/ob-img/2025/04/01/LLgruUKrRPN7yCVi3U3vPasted%20image%2020250331180901.png)

#### 🖼️ 图片处理黑科技

- 证件照换底色。
- 抠图、照片变透明。
- jpg转PNG以及图像剪裁。
![Pasted image 20250331173859](https://oss.qnloft.com/ob-img/2025/04/01/Jg90lTK9tXkjVj7ssWBoPasted%20image%2020250331173859.png)

#### 💻 更多工具，等你探索

- 文本工具：将文本转换为图像、查找和替换文本、将文本拆分成片段、连接文本行、重复文本等等，📝 文本大师！
- 开发者必备的JSON工具、CSV工具等，🔧 工程师的好帮手！
- 处理GIF动画的工具，🎥 动态效果轻松搞定！

…持续更新中，🔄 让我们一起期待更多惊喜！🎉

-----
## 🐳 3分钟极速部署指南

#### 方案一：Docker单命令部署


```
docker run -d --name omni-tools \   
--restart unless-stopped \  
-p 8080:80 \  
-v /your/config/path:/app/config \  # 持久化配置  
--memory 128m \  # 内存限制  
iib0011/omni-tools:latest
```


#### 方案二：飞牛OS图形化部署

1. Docker → 镜像仓库 → 搜索 `iib0011/omni-tools`
2. 端口映射设置80 → 自己的端口号
3. 持久化数据文件夹
4. 启动镜像

![Pasted image 20250331190203](https://oss.qnloft.com/ob-img/2025/04/01/9eRFqvyihXGh4gBPt7QiPasted%20image%2020250331190203.png)
![Pasted image 20250331190130](https://oss.qnloft.com/ob-img/2025/04/01/lLamug8A0OCsIWHBBSOBPasted%20image%2020250331190130.png)

#### 方案三：Docker-compose 安装

```yaml
version: '3.9'
services:
    omni-tools:
        image: 'iib0011/omni-tools:latest'
        volumes:
            - '/your/config/path:/app/config'
        ports:
            - '8080:80'
        restart: unless-stopped
        container_name: omni-tools

```


🔥立即行动：[GitHub仓库](https://github.com/iib0011/omni-tools) │ [在线体验](https://omnitools.app/) 

