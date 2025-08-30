---
title: 群晖 Docker镜像丝滑升级与管理攻略
published: 2024-06-26
description: 本文将介绍watchtower软件和群晖定时任务来对Docker进行升级操作。
image: ""
tags: [docker, 群晖]
category: 工具软件
draft: false
pinned: 0
customSlug: WEAu9QFj
---

## `watchtower` 介绍

> `Watchtower` 是一款应用程序，它将监控您正在运行的 `Docker` 容器并监视这些容器与最初启动时所用的镜像是否发生变化。如果 `watchtower` 检测到镜像已发生更改，它将使用新镜像自动重启容器。

**用手机APP更新来举例讲解一下**：`App store` （就相当于`Docker-Hub`）  ，每天我们手机系统（就相当于`Watchtower`）会去 `AppStore` 中检测手机中装的 `APP` （就相当于`Dcoker` 镜像）是否有可用更新，如果发现更新，则根据我们的设置（发现更新提醒我、立即更新、某一个时间集中更新）对 `APP` 进行操作。

**PS**：[watchtower官方文档](https://containrrr.dev/watchtower/)

## `watchtower` 的使用

> **注意**：镜像更新只能更新版本是 `latest` 的镜像，无法更新带版本号的镜像！
> ![Pasted image 20240628003234](https://oss.qnloft.com/ob-img/2024/06/28/Pasted%20image%2020240628003234.png)

#### 更新镜像的几种模式

> 以下这几种模式各有利弊，按照自己需求进行选择哈！

1. 发现更新提醒我，然后由我手动选择更新；

&emsp;&emsp;这种模式的问题在于，发现更新镜像后，虽然提醒我们了，**但是还需要我们去使用SSH手动执行命令来进行镜像更新**，非常的不方便，时间久了就懒得更新了。

2. 立即更新全部可更新镜像；

&emsp;&emsp;这种模式的问题在于，**不想更新的镜像，也会给更新了**，就比如某个镜像我就想用指定的版本，但是使用这种模式，会强制自动更新最新的镜像。

3. 某一个时间集中更新指定的应用；

&emsp;&emsp;这种模式相对友好，**不过需要每次新增镜像后，也同时更新一下镜像更新配置**，这样即可发现指定镜像需要更新后，自动集中更新。

#### 更新提醒

使用群晖自带任务提醒发邮件。

#### 自动更新镜像

```shell
sudo docker run -d \ 
--name watchtower \ 
-v /var/run/docker.sock:/var/run/docker.sock \ 
containrrr/watchtower
```

使用上面命令，可以部署 `watchtower`，会自动监控全部镜像是否有可用更新，当有可用更新时，自动更新。

#### 更新指定镜像

> 检查更新 `linuxserver-radarr-1`和 `portainer` ，并且更新好之后退出本次运行创建的 `Watch­tower` 容器然后删除镜像文件，多个容器在后面加空格隔开即可
> **注意** ： `linuxserver-radarr-1`和 `portainer`  这两个名称，是容器的名称，或在SSH中使用 `sudo docker ps` 查看。
> ![Pasted image 20240628002648](https://oss.qnloft.com/ob-img/2024/06/28/Pasted%20image%2020240628002648.png)

```shell
sudo docker run --rm -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once linuxserver-radarr-1 portainer
```

#### 镜像清理


```shell
sudo docker run -d —name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower —cleanup XXXX
```

#### 查看更新日志


```shell
sudo docker logs -f watchtower
```

## 在群晖中配置

> 以 **每日定时** 检查 **指定镜像**，并进行更新为例，做一个演示

- 依次打开：`控制面板` - `任务计划`，在 `任务计划` 中

![Pasted image 20240626235929](https://oss.qnloft.com/ob-img/2024/06/27/Pasted%20image%2020240626235929.png)

- 点击 `新增` - `计划的任务` - `用户定义的脚本`

![Pasted image 20240627000024](https://oss.qnloft.com/ob-img/2024/06/27/Pasted%20image%2020240627000024.png)

- 在常规设置中，任务名称可以自己随便起，不过必须是英文和数字，用户选择root；

![Pasted image 20240627000143](https://oss.qnloft.com/ob-img/2024/06/27/Pasted%20image%2020240627000143.png)

在计划设置中，设置任务运行的周期以及时间，想每天更新的可以选择每天重复，我觉得没有必要每天都去更新，就选择了每周二的凌晨2:00进行更新，因为这个时间我不会使用Docker，避免更新而造成的使用的中断；
![Pasted image 20240627000337](https://oss.qnloft.com/ob-img/2024/06/27/Pasted%20image%2020240627000337.png)

在任务设置中，输入我们的命令，其中`qinglong` 和 `netdata` 是指定要更新的容器的名称；**注意：** 如果为空的话是全部更新，我只是指定了我需要更新的容器，避免一些重要的Docker因更新造成运行不稳定。如果多个容器需要更新，可填写多个名称，中间用空格隔开；

![Pasted image 20240627000502](https://oss.qnloft.com/ob-img/2024/06/27/Pasted%20image%2020240627000502.png)

- 将结果输入到日志文件中

如何我们不想发送邮件，可以使用查看日志的方式，了解任务的执行情况，将上面的脚步该项一下，📢 **注意**，这里的`/volume2/docker/docker_bak/`日志路径换成你自己机器上面的哈！

```shell
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once --trace qinglong-1 showdoc > /volume2/docker/docker_bak/watchtower.log 2>&1
```



## 补充知识

> **利用 API 接口对镜像进行更新操作**。要启用此模式，请使用标志`--http-api-update`，默认情况下，启用此模式可防止定期轮询（即使用`--interval`或指定的轮询`--schedule`）。要运行定期更新，请传递`--http-api-periodic-polls`。

请注意，有一个名为 `WATCHTOWER_HTTP_API_TOKEN` 的环境变量。为了防止外部服务意外触发镜像更新，所有请求都必须在其标头中包含一个 “Token” 字段，其值为 `WATCHTOWER_HTTP_API_TOKEN` 中定义的令牌。在这种情况下，有一个端口绑定到主机，允许请求 `localhost:8080` 到达 `Watchtower`。


```
version: '3'

services:
  app-monitored-by-watchtower:
    image: myapps/monitored-by-watchtower
    labels:
      - "com.centurylinklabs.watchtower.enable=true"

  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --debug --http-api-update
    environment:
      - WATCHTOWER_HTTP_API_TOKEN=定义一个Token
    labels:
      - "com.centurylinklabs.watchtower.enable=false"
    ports:
      - 8080:8080
```

1. 触发全部镜像的更新

```shell
curl -H "Authorization: Bearer 上面定义的Token" localhost:8080/v1/update
```

2. 更新指定镜像

```shell
curl -H "Authorization: Bearer 上面定义的Token" localhost:8080/v1/update?image=foo/bar,foo/baz
```

## 总结

> 上篇文章介绍了极空间和绿联的Docker升级方式，相对那种图形界面的升级，这种方式更加适合懒人，不想打开界面，只想定时程序自动完成任务的情形！