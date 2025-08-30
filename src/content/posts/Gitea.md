---
title: Gitea安装，私域文件or代码版本管理工具
published: 2024-02-22
description: 一个轻量级全功能的 DevSecOps 平台软件。从开发计划到产品成型的整个软件生命周期,他都能够高效而轻松的帮助团队和开发者。
tags: [Gitea, docker]
category: 工具软件
draft: false
pinned: 0
customSlug: faGRTnZz
---

## 什么是Gitea

> **_Gitea_ 是一个轻量级全功能的 DevSecOps 平台软件。从开发计划到产品成型的整个软件生命周期,他都能够高效而轻松的帮助团队和开发者**

## 为什么需要Gitea

![为什么需要Gitea 横版](https://oss.qnloft.com/ob-img/2024/02/26/%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81Gitea-%E6%A8%AA%E7%89%88.png)

## Docker镜像下载

> 以极空间NAS为例：

![Pasted image 20240219232855](https://oss.qnloft.com/ob-img/2024/02/23/Pasted%20image%2020240219232855.png)

## Docker配置

> 镜像文件夹映射
![Pasted image 20240219165447](https://oss.qnloft.com/ob-img/2024/02/23/Pasted%20image%2020240219165447.png)

> 端口设置
![Pasted image 20240219165501](https://oss.qnloft.com/ob-img/2024/02/23/Pasted%20image%2020240219165501.png)

> 权限配置
在环境中加入两个配置项目：增加`PUID`和`PGID`，值设置成`0`

** PS：PUID和PGID，这个参数对应的是linux中运行的用户，将PUID和PGID改为0，即使用root账号权限。**



## 初始化设置
> 打开浏览器，输入我们的IP地址+刚才设置的端口，比如我这里设置的端口是7017，我的NAS的IP地址是：192.168.1.202，那我就在浏览器中输入：`192.168.1.202:7017`，之后进入初始化配置页面，按照自己的实际情况进行填写
![gitea.qnloft.com ](https://oss.qnloft.com/ob-img/2024/02/23/gitea.qnloft.com_.png)

## 登录和创建仓库

初始化设置完成后，进入gitea登录界面：

这时候我们点击右上角的`加号➕` 进行新建项目操作：

![Pasted image 20240220000945](https://oss.qnloft.com/ob-img/2024/02/23/Pasted%20image%2020240220000945.png)

> **PS：** 这里注意，有两个选项，我解释一下：
>- **创建仓库**：指的是我打算存自己的代码，或者文件，这个选项我就不展开讲解了，有需要的朋友可以留言私聊；
>- **迁移外部仓库**：指的是将别人的项目保存到我的Gitea下面，供我使用；

下面就以为迁移`jdpro` 项目为例子，进行演示操作：

![Pasted image 20240220003212](https://oss.qnloft.com/ob-img/2024/02/23/Pasted%20image%2020240220003212.png)
![github镜像](https://oss.qnloft.com/ob-img/2024/02/23/github%E9%95%9C%E5%83%8F.png)

PS：下载完成后，点击设置按钮，可以设置镜像同步的间隔时间。

## 其它设置

#### 上传大文件限制

> 如果在上传项目时候出现如下错误：
>POST git-receive-pack (chunked) error: unable to rewind rpc post data - try increasing http.postBuffer error: RPC failed; 
>curl 65 HTTP/2 stream 7 was reset send-pack: unexpected disconnect while reading sideband packet fatal: the remote end hung up unexpectedly Everything up-to-date

>或者提示：returned error: 413 Request Entity Too Large

说明上传文件过大，超出文件缓冲区，这时候需要增加缓冲区的大小，做如下配置
1. 找到配置文件：`/data/gitea/conf/app.ini`；
2. 在配置文件中新增 `FILE_MAX_SIZE = 200`，意思是 **单个文件最大200MB**；
![Pasted image 20240220100432](https://oss.qnloft.com/ob-img/2024/02/23/Pasted%20image%2020240220100432.png)

PS：如果还是无法上传，请检查Nginx配置文件中是否存在 `client_max_body_size`配置项，如果存在，则需要修改改配置项的大小。

> 如果在上传项目时候出现如下错误：
> POST git-receive-pack (chunked)
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
Everything up-to-date

进入本机项目目录下，执行如下命令：

```shell
# 注意这里的单位是Byte, 将缓冲区增大到 1048576000B 就是 1G
git config --global http.postBuffer 1048576000
```
