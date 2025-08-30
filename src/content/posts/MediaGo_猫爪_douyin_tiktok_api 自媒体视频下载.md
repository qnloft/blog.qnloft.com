---
title: 零成本打造全网资源下载神器：三款免费工具解锁B站/抖音/m3u8视频下载备份
published: 2025-02-26
description: 今天分享一套零成本方案视频下载方案使  
用GitHub开源工具+浏览器插件，实现抖音/B站/其他网站视频自动化备份，小白也能10分钟搞定！
tags: [mediago, douyin_tiktok_api, 视频下载, docker]
category: 工具软件
draft: false
pinned: 0
customSlug: PeLN0LIB
---

## 一、三大痛点
**「省流版前言」**  
今天分享一套零成本方案：  
✅ m3u8视频 ✅ 自媒体平台视频 ✅ 无水印收藏  
用GitHub开源工具+浏览器插件，实现抖音/B站/其他网站视频自动化备份，小白也能10分钟搞定！

---

## 二、工具全家桶实测对比

| 工具名称                | 适合场景             | 操作难度 | 推荐指数 |
|-------------------------|----------------------|----------|----------|
| mediago | 跨平台视频提取工具：支持流媒体下载、视频下载、m3u8 下载及 B站视频下载。   | ⭐⭐☆    | ❤️❤️❤️🤍 |
| douyin_tiktok_api | 开箱即用的高性能异步抖音、快手、TikTok、Bilibili数据爬取工具，支持API调用。     | ⭐⭐⭐⭐☆  | ❤️❤️🤍 |
| 猫爪chrome插件 | 网页任意视频抓取。    | ⭐☆      | ❤️❤️❤️❤️🤍 |

**▶ 粉丝专属提示**  

**阿里云轻量服务器**，峰值`200M`带宽机器，每月仅需35元(**如果装FRPS，推荐1核1G版本**)，[使用连接购买，新首购再优惠10%](https://www.aliyun.com/minisite/goods?userCode=h3ahvjio) 

---

## 三、手把手保姆级教程

### 猫爪chrome插件

#### 猫爪 安装

❶ 在 `chrome` 应用商店 搜索 

![[Pasted image 20250216120018.png]]

❷ crx安装`chrome`插件
- 访问 [github项目releases](https://github.com/xifangczy/cat-catch/releases) 下载对应浏览器 crx 文件;
- 扩展管理页面 打开 "开发者模式"；
- 将`crx文件`拖入扩展程序页面即可。


#### 猫爪 使用

打开视频网站，点击浏览器右上角中的**猫爪插件**，在页面中找到嗅探出的视频，点击下载即可。

![[Pasted image 20250216120740.png]]

---

### mediago

>  `mediago` 主要特色是夸平台性，不仅支持 `Windows` 和 `Mac` 桌面客户端，而且支持私有化部署。
#### mediago 安装

> 以为飞牛OS为例。
- 安装方式1：在docker中搜索 `mediago`。
- 安装方式2：使用`docker-compose`安装。

❶ 使用镜像进行安装

![[Pasted image 20250216125222.png]]

![[Pasted image 20250216125648.png]]

❷ 使用 docker-compose.yml 进行安装

📣 注意：`/vol1/1000/docker/mediago`，是视频下载后存放的位置，根据实际情况进行修改！

```yml
version: '3.9'
services:
    caorushizi:
        image: 'registry.cn-beijing.aliyuncs.com/caorushizi/mediago:v3.0.0'
        volumes:
            - '/vol1/1000/docker/mediago:/root/mediago'
        ports:
            - '8899:8899'
        container_name: mediago

```


#### mediago 使用和高级玩法

mediago 基本的使用，其实就非常简单了，安装完镜像后，使用浏览器打开页面，点击新建下载，选择下载的来源 `m3u8` or `哔哩哔哩`。即可进行下载了~！

![[Pasted image 20250216130407.png]]

🔜 再介绍一个高级玩法，`mediago +  猫爪` 浏览器插件，直接将 **视频下载到 NAS中**。

右键点击 `猫爪` 浏览器插件 ➡️ 找到 **选项** ，打开选项 ➡️ 找到 **调用程序** ➡️填入如下配置：
📣 注意：`http://192.168.9.100:8899` 根据你自己的IP进行填写，也可以**填写外网IP**，这样在任何地方都可以使用了。

```url
http://192.168.9.100:8899?n=true&name=${title}&url=${url}&headers=${referer|exists:'Referer:*'|to:urlEncode}&type=m3u8&silent=true
```

![[Pasted image 20250216131054.png]]

---

### douyin_tiktok_api

> 🚷 不会 `linux命令` 的朋友，这款软件可以不用看了。因为要修改参数，无法越过，即便越过也非常的麻烦。接下来我就简单的说下这款软件的功能吧，应该会 `linux命令` 也不需要我过多的介绍软件的安装了。

✳️ 功能介绍：

- 在web界面中，可以对抖音和youtub的视频进行批量下载（需要先配置cookie）
- API调用：获取抖音、TikTok、B站 博主视主页、视频、直播等数据，并可以针对相关内容进行下载

#### douyin_tiktok_api 安装和使用

1. 使用 IT-Tools，将 Docker Run 命令，转换成 docker-compose 命令；
	
```shell
docker run -d --name douyin_tiktok_api -p 8005:80 \
  -v 修改成自己的文件路径/data:/data \
  -e MY_ENV_VAR=my_value \
  evil0ctal/douyin_tiktok_download_api
```

2. 将 生成的 docker-compose 命令 复制到飞牛OS中执行；
3. 如果构建失败，参考我的这篇文章  ，修改docker数据源。
4. 使用浏览器打开 NAS_IP/8005，访问软件界面

![[Pasted image 20250213111757.png]]

![[Pasted image 20250213111946.png]]

![[Pasted image 20250213133552.png]]

![[Pasted image 20250213144404.png]]

---

## 其他资料

- `mediago` 项目地址 [👉️ 传送门 🚪](https://github.com/caorushizi/mediago)
- `douyin_tiktok_api` 项目地址 [👉️ 传送门🚪](https://github.com/Evil0ctal/Douyin_TikTok_Download_API)
- `猫爪` 项目地址 [👉️ 传送门🚪](https://github.com/xifangczy/cat-catch)，[下载地址 👉️ 传送门🚪](https://github.com/xifangczy/cat-catch/releases)