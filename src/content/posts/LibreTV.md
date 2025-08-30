---
title: 解锁🔓「NAS看电影」的新姿势 - [LibreTV] 私有化部署以及接口
published: 2025-04-16
description: 曾几何时咱们得跪求PT站邀请码，下个电影还要做种考核？今天教你用LibreTV+开放API实现自由「在线观影」！无需下载，不占硬盘，NAS秒变全网资源直通车。
tags: [LibreTV, 免费电影, docker]
category: 装机必备
draft: false
pinned: 0
customSlug: grIKMKp8
---

🔍【青柠の黑科技】PT站邀请码劝退？NAS直连观影新姿势！LibreTV + CMS V10 API（评论区附 接口寻找方式）

嘿，这里是「青柠炸机店」的硬核观影方案~ 曾几何时咱们得跪求PT站邀请码，下个电影还要做种考核？今天教你用LibreTV+开放API实现自由「在线观影」！无需下载/不占硬盘，NAS秒变全网资源直通车。理论上来说，只要能找到API接口，任何资源都可以在线观看，📢注意：**是任何自由呦....😏**

![Libretv 1](https://oss.qnloft.com/ob-img/2025/04/13/UTnXTynCiM7bVwks5PV7Libretv_1.png)

## 🚩 观影新姿势：从磁力链到API直读的跨越

（✨告别下载焦虑！✨）  
以前追剧流程：PT站找资源→挂QBittorrent→等三天做种→整理元数据...  
现在LibreTV新姿势：选片→API直读云盘/在线资源→秒开播！  

![Libretv 2 1](https://oss.qnloft.com/ob-img/2025/04/13/QTRSbTVEvwiJHfPpYkeeLibretv_2%201.png)

---
## 🔧 极速部署


1️⃣ 飞牛部署安装教程：  

从镜像仓库中找到 `libretv` 镜像，下载后，设置一下端口号即可运行啦。非常简单‼️

![Libretv 3](https://oss.qnloft.com/ob-img/2025/04/13/eAiYawYLcDRHqtGkTFVhLibretv_3.png)
![Libretv 4](https://oss.qnloft.com/ob-img/2025/04/13/fIvjCn0LOK6lR0ZKD1QsLibretv_4.png)

2️⃣ Docker安装命令：

```sehll
docker run -d \
  --name libretv \
  -p 8899:80 \
  -e PASSWORD=your_password_here \
  bestzwei/libretv:latest
```


3️⃣ Docker-Compose 安装：  

```sehll
version: '3'
services:
  libretv:
    image: bestzwei/libretv:latest
    container_name: libretv
    ports:
      - "8899:80"
    environment:
      - PASSWORD=111111
    restart: unless-stopped
```

注意：要为您的 LibreTV 实例添加密码保护，可以在部署平台上设置环境变量：**环境变量名**: `PASSWORD` **值**: 您想设置的密码

---
### 🎬 实战演示

（⚠️多图预警）  
▶️ **场景1** 使用自带API源搜索电影，注意一个小细节

![Libretv 5](https://oss.qnloft.com/ob-img/2025/04/13/MmcAdekZMHsvtUG1hU6eLibretv_5.png)

![Libretv 6](https://oss.qnloft.com/ob-img/2025/04/13/UGvwfQznBPmnGgdTqKMALibretv_6.jpg)

▶️ **场景2** 自定义API，观看热播短视频。在自定义API中，新增短视频API地址和名称，将其他源的地址勾选掉，只勾选我们刚才新增的地址，再进行🔍搜索，即可出现热播短视频了。

![Libretv 7](https://oss.qnloft.com/ob-img/2025/04/13/uY3kKcULFCyfrAzVtlPELibretv_7.png)
![Libretv 8](https://oss.qnloft.com/ob-img/2025/04/13/0HjlywBtZWFCOu5DPHhOLibretv_8.png)
![Libretv 9](https://oss.qnloft.com/ob-img/2025/04/13/ciR16lSggcKq3d44NgpDLibretv_9.png)

-----
[CMS V10 API 采集网聚合发布平台](https://www.yszzq.com/ziyuan/api/index.html)

> **资源采集网站使用方式**：
1. 寻找采集站点；
2. 将采集站点加入到LibreTV自定义API中；

![iShot 2025 04 16 15.13.36](https://oss.qnloft.com/ob-img/2025/04/16/OgMPRqNcQWXk7iCuamw6iShot_2025-04-16_15.13.36.png)
![iShot 2025 04 16 15.21.32](https://oss.qnloft.com/ob-img/2025/04/16/LlQIzux60pvULk6jB4NLiShot_2025-04-16_15.21.32.png)
