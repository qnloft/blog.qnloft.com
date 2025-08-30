---
title: Qbittorrent 软件安装和使用指南
published: 2024-03-22
description: PT资源如何下载，怎么做种，今天这篇文章告诉你，为铁铁们答疑解惑一下！
tags: [Qbittorrent, docker]
category: 装机必备
draft: false
pinned: 0
customSlug: 5UtivndD
---

> 群里收到很多铁铁的咨询，都在问PT资源如何下载，怎么做种，今天我就录一个视频，为铁铁们答疑解惑一下！

PT下载主流工具是 `Transmission`、`QBittorrent`，一些NAS会自己封装PT下载器，就比如 `极空间`、`群辉`；

为什么不使用`极空间`、`群辉`自带的下载器，而是要是用`QBittorrent`，主要原因就是为 `NAS-Tools`服务，因为自带的影视资源管理器无法去多个PT网站进行影片检索，还有很多 `NAS-Tools` 的好用功能无法使用；如果你不使用`NAS-Tools`，那么完全可以使用自带下载器。

## 使用 `Qbittorrent` 下载

> 绿联、威联通、华硕、联想等NAS使用`docker`安装 `Qbittorrent`进行PT下载！极空间和群辉可选择使用自带下载器或者 `Qbittorrent`

#### 第一步：下载镜像

查找和安装`Dockert Qbittorrent`镜像，这个就不多说了，直接看图吧，简单的很！

![Pasted image 20240316172748](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240316172748.png)

#### 第二步：添加进行并配置

对 `Qbittorrent`进行一些配置，首先是路径映射，一个是配置路径，一个是下载路径，注意大小写！网络这里选择 `host`，在环境配置中新增三个项目，照着抄啊，别写错了！！！
![Pasted image 20250217154427](https://oss.qnloft.com/ob-img/2025/08/30/Pasted%20image%2020250217154427.png)
![Pasted image 20250217154646](https://oss.qnloft.com/ob-img/2025/08/30/Pasted%20image%2020250217154646.png)
![Pasted image 20250217155601](https://oss.qnloft.com/ob-img/2025/08/30/Pasted%20image%2020250217155601.png)


#### 第三步：启动镜像和寻找登录密码

启动`Qbittorrent`镜像，在日志中寻找登录的用户名和密码！

飞牛：
![Pasted image 20250217155749](https://oss.qnloft.com/ob-img/2025/08/30/Pasted%20image%2020250217155749.png)

极空间：
![Pasted image 20240321110911](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240321110911.png)
![Pasted image 20240321110939](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240321110939.png)

#### 第四步：登录

有了用户名和密码，我们该干什么了？对... 登录啊，现在打开浏览器，输入 http://NAS的IP:WEBUI_PORT设置的那个端口号  ，然后出现下面这个页面就对了！
![Pasted image 20240321111227](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240321111227.png)

#### 第五步：对`Qbittorrent`进行配置

> 修改配置项目
> 
比如设置中文啊，做种端口号啊等等！别忘了把端口号做外网映射啊！

![Pasted image 20240321112602](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240321112602.png)

#### 第六步：开始下载和做种

好了，现在可以进行PT种子下载和做种啦！要下完进度100%，才能开始做种啊~！！
![Pasted image 20240321112905](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240321112905.png)

-----

## 极空间下载器

> 如果你的NAS事极空间，可以选择不安装`Dockert Qbittorrent`，极空间下载器其实就是 `Transmission`的封装，将很多复杂的功能简单化，界面化！使用起来更加方便。

![Pasted image 20240316173025](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240316173025.png)

1. 第一步：打开软件的 **设置面板** ，对 **下载文件存放路径** 和 **种子文件存放路径** 进行配置，两个可以设置成一个目录，不过为了便于整理，我选择了分开存放；

![Pasted image 20240316173103](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240316173103.png)

2. 第二步：如果你的`51413`端口没有占用，就保持现状，如果你想更改，我也同意哈~！之后别忘了用你自己的方式，将端口进行外网映射啊，如果不知道怎么映射，可以看我的文章啊，老铁；

![Pasted image 20240316173958](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240316173958.png)

4. 第三步：去PT网站上，找到自己喜欢的种子，复制链接地址，放入图中点击后出现的框框中，这里注意一下，如果你的**下载文件存放路径** 和 **种子文件存放路径** 不是一个，别忘了修改一下路径啊；

![Pasted image 20240319170524](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240319170524.png)

5. 下载完种子后，等一小会儿，会自动开始下载资源；
6. 资源下载成功后，即进入做种阶段，去PT网站中也可以看到我们当前的做种；

![Pasted image 20240319161919](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240319161919.png)

![Pasted image 20240319161734](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240319161734.png)

![Pasted image 20240319163026](https://oss.qnloft.com/ob-img/2024/03/27/Pasted%20image%2020240319163026.png)

-----

## 使用 Docker-Compose 安装

```shell
version: "3"
services:
  qbittorrent:
    image: linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=0
      - PGID=0
      - TZ=Asia/Shanghai 
      - UMASK_SET=022
      - WEBUI_PORT=8006  # Web UI端口
      - TORRENTING_PORT=26881 # 监听端口，默认6881，修改为20000-65535区间值，下同
    volumes:
      - /vol1/1000/docker/qbittorrent/config:/config  # 冒号左侧修改参照上文
      - /vol2/1000/pt_download:/downloads
    ports:
      - 8006:8006  # 同上面Web UI端口一致
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped
```


![Pasted image 20250426111033](https://oss.qnloft.com/ob-img/2025/08/30/Pasted%20image%2020250426111033.png)
![Pasted image 20250426111312](https://oss.qnloft.com/ob-img/2025/08/30/Pasted%20image%2020250426111312.png)