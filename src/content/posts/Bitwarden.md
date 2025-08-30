---
title: Bitwarden 我愿称之为最好用的密码管理工具
published: 2024-05-16
description: 装机必备多平台密码管理工具，懒人当的福音啊~！ 
tags: [Bitwarden, docker]
category: 装机必备
draft: false
pinned: 0
customSlug: k1qY9XyG
---

> 这两个镜像的区别：
> ![Pasted image 20240509160623](https://oss.qnloft.com/ob-img/2024/05/20/Pasted%20image%2020240509160623.png)

- **bitwarden/server**：是官方镜像，.net编写，使用mysql数据库，所以对系统要求较高，CUP最低`x64，1.4GHz`，推荐`x64、2GHz 双核`，内存最低`2GB`，推荐`4GB`。
- **vaultwarden/server**：比官方更轻量，使用 `Rust` 编写，改用 `SQLite` 数据库（现在也支持 `MySQL` 和 `PostgreSQL`），运行时只需要 `10M` 内存，可以说对硬件基本没有要求。

对比之下，**Vaultwarden** 优势非常的明显，无脑使用 **VaultWarden** 即可。

==PS：`bitwarden` 自建有风险，尽量请使用官方同步！==

## 安装前准备工作

> 以下三个缺一不可

1. 域名一个；
2. HTTPS证书；
3. 内网穿透；

如何没有域名，https证书就没有主体，如果没有证书，在注册账户时候就会出现以下错误：

![Pasted image 20240512185037](https://oss.qnloft.com/ob-img/2024/05/20/Pasted%20image%2020240512185037.png)

## `Vaultwarden` 安装

安装`Bitwarden`浏览器插件或者客户端工具，[官方下载地址](https://bitwarden.com/download/#downloads-web-browser)

安装完成后，将地址绑定上域名，然后使用`HTTPS`域名打开后进行注册操作！

![Pasted image 20240512185132](https://oss.qnloft.com/ob-img/2024/05/20/Pasted%20image%2020240512185132.png)

注册账户完毕后，我们使用`Bitwarden`浏览器插件进行自托管操作！

![Pasted image 20240512190830](https://oss.qnloft.com/ob-img/2024/05/20/Pasted%20image%2020240512190830.png)

## `Bitwarden` 使用

新增账号和密码：在网站登录或者注册后`Bitwarden` 浏览器插件会弹出保存账户和密码提示，点击保存，即可将账户密码保存到服务器中，自动同步给全部账号。

![Pasted image 20240520002646](https://oss.qnloft.com/ob-img/2024/05/20/Pasted%20image%2020240520002646.png)

使用账号和密码：在打开一个之前保存过账户和密码的网站时，`Bitwarden` 浏览器插件上面会有数字提示，这个提示代表该网站有几个账户，点击插件，选择我们要登录的账户，`Bitwarden`会自动将账户和密码填充到指定位置，非常方便！

![Pasted image 20240520002517](https://oss.qnloft.com/ob-img/2024/05/20/Pasted%20image%2020240520002517.png)
