---
title: 1Panel 让你从此不再惧怕Linux服务器
published: 2024-01-19
description: 大幅降低了Linux系统的入门成本
tags: [1Panel, docker]
category: 装机必备
draft: false
pinned: 0
customSlug: 6aKEHuCt
---

> 1Panel可以安装在 官网连接🔗：[1panel.cn](https://1panel.cn/)

> [!note] 安装环境要求：
> - **操作系统**：支持主流 Linux 发行版本（基于 Debian / RedHat，包括国产操作系统）；
> - **服务器架构**：x86_64、aarch64、armv7l、ppc64le、s390x；
> - **内存要求**：建议可用内存在 1GB 以上；
> - **浏览器要求**：请使用 Chrome、FireFox、IE10+、Edge等现代浏览器；
> - **可访问互联网**。

**1Panel的意义：** 那为什么还要介绍他呢？书接上回，我说了几种获取公网IP的方式，其中有一种需要购买服务器，但是相信很多朋友并不是开发或者运维出身，windows玩的很溜，但是Linux就很惧怕了，因为我们要控制成本，低配服务器和Linux系统才配呦！那么这个 `1Panel` 的出现，**大幅降低了Linux系统的入门成本！**

## `1Panel` 都能干点啥

- **快速建站**：深度集成 Wordpress 和 Halo，域名绑定、SSL 证书配置等一键搞定；
- **高效管理**：通过 Web 端轻松管理 Linux 服务器，包括应用管理、主机监控、文件管理、数据库管理、容器管理等；
- **安全可靠**：最小漏洞暴露面，提供防火墙和安全审计等功能；
- **一键备份**：支持一键备份和恢复，备份数据云端存储，永不丢失。

> 上面罗列了一推功能，看的云里雾里的，下面总结一下：

1. 如果装在服务器上，最有用的功能：**HTTPS证书申请、系统监控、Nginx解析、Docker管理、防火墙管理、系统文件管理/上传/下载**。
2. 如果装在NAS/mini主机上，最有用的功能：**快速安装应用**，所以不推荐在NAS/mini主机上安装。

简单的说就是，比他功能多的没它使用简单，比它简单的，没它功能实用！

## 使用 `1Panel` 快速安装应用

> 1Panel 应用商店可以一键安装、升级、备份和恢复应用。
> [网页版商店链接点击这里](https://apps.fit2cloud.com/1panel)

都能安装什么应用？

- 网站建设：博客（Halo/WordPress/Typecho/emlog/mBlog）、文档网站（Wiki.js）、社区论坛（Flarum/Discuz/Answer）
- 数据存储：MySQL/Redis/PostgreSQL/MariaDB/MongoDB/Memcached/ClickHouse/Elasticsearch/Prometheus
- Web服务器：OpenResty/OpenLiteSpeed
- 运行环境：PHP/Node.js
- 实用工具、网盘存储、等等共计 **97** 个应用！

## `1Panel` 的安装

- Ubuntu 系统安装 `1Panel`

```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

- RedHat / CentOS 系统安装 `1Panel`


```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```

- Debian 系统安装 `1Panel`


```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

## 其它

#### 数据库性能调优

![[Pasted image 20250320172547.png]]