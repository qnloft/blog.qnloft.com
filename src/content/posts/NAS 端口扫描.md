---
title: 必备软件：轻松掌握局域网/NAS/Docker端口使用情况
published: 2025-01-23
description: RustScan一款非常强大的端口扫描工具
tags: [RustScan, 端口扫描, docker]
category: 装机必备
draft: false
pinned: 0
customSlug: 4a9v72d9
---

## RustScan

> 关于 `RustScan`：默认情况下，RustScan 每秒扫描 3000 个端口。是一款非常强大的端口扫描工具。
> - 优点：扫描速度非常快，并且呈现的结果特别齐全。
> - 缺点：需要懂一些Linux命令才能使用，没有图形化界面。


1. 使用pull，或者去docker镜像中心下载镜像。
2. 使用`alias`，为命令创建一个容易记忆的别名。比如这里，如果不创建别名，每次都需要执行一个很长的命令，才能进行端口扫描，创建`rustscan`别名后，每次执行会简短很多。

```sh
# 下载docker镜像
docker pull rustscan/rustscan:latest

# 使用 `alias` 命令，为长或复杂的命令创建简短且易记的别名
alias rustscan='docker run -it --rm --name rustscan rustscan/rustscan:latest'

# 执行扫描命令
rustscan --addresses IP地址 -t 500 -b 1500 -- -A

# 如果不创建别名，可以执行这个长的命令
docker run -it --rm --name rustscan rustscan/rustscan:latest --addresses IP地址 -t 500 -b 1500 -- -A

```

**参数解释：**
- `-b 1500`：每次扫描 1500 个端口；
- `-t 500`：意味着将在端口上等待响应最多 0.5 秒；
- `-- -A`：打印出端口全部详细情况；（如果检测端口范围过大，建议不加这个参数）

> 关于`IP地址`
> - 可以扫描一个网段，也可以扫描局域网中一台指定的机器。
> - 扫描一台机器：`192.168.9.100`（扫描 192.168.9.100 ）
> - 扫描多台机器：`192.168.9.100,192.168.9.101`（扫描 192.168.9.100 和 101 机器）
> - 扫描一个网段：`192.168.9.0/24`（扫描 192.168.9.1 ~ 192.168.9.255 网段）

**其它高级用法：**

```sh
# 扫描指定的多个端口
rustscan -a IP地址 -t 500 -b 1500 -p 53,80,121,65535 -- -A

# 扫描一个端口范围（端口 1~1000）
rustscan -a IP地址 -t 500 -b 1500 --range 1-1000 -- -A

# 扫描域名的端口
rustscan -a www.google.com

# 以随机顺序扫描端口（这将有助于不触发防火墙）
rustscan -a IP地址 --range 1-1000 --scan-order "Random"
```

**使用效果如图：**

![PixPin 2025 01 16 00 57 54](https://oss.qnloft.com/ob-img/2025/01/16/ZEIhjgMWir84tTFTXYfQPixPin_2025-01-16_00-57-54.png)

![PixPin 2025 01 16 00 56 38](https://oss.qnloft.com/ob-img/2025/01/16/B3ptPHypQluGEDrwaxm4PixPin_2025-01-16_00-56-38.png)


## watchYourPorts


> 如果对Linux不熟悉的朋友，可以使用 `watchYourPorts`，它是一个图形化的端口扫描工具，操作非常简单，不过遗憾的是暂时不支持中文。
> - 优点：有图形化界面，操作简单方便。
> - 缺点：端口信息太少，没有中文界面，端口扫描方式相对功能太单一。

**docker 图形化面板安装：**

![Pasted image 20250116172401 1](https://oss.qnloft.com/ob-img/2025/01/16/KS65OJ0ZaexDvlQOIo0oPasted%20image%2020250116172401%201.png)

**docker 命令行安装：**

```shell
docker run --name wyp \
-e "TZ=Asia/Shanghai" \
-v /volume2/docker/WatchYourPorts:/data/WatchYourPorts \
-p 8853:8853 \
aceberg/watchyourports
```

**使用截图：**

![Pasted image 20250116160709 1](https://oss.qnloft.com/ob-img/2025/01/16/65RADa2aejypxiZ4RBzjPasted%20image%2020250116160709%201.png)

![Pasted image 20250116160819 1](https://oss.qnloft.com/ob-img/2025/01/16/XJhOCCZU6cPZoHhXlF2fPasted%20image%2020250116160819%201.png)

![Pasted image 20250116160846 1](https://oss.qnloft.com/ob-img/2025/01/16/5R9OfepzHw3oboFzvw2IPasted%20image%2020250116160846%201.png)

![Pasted image 20250116162837 1](https://oss.qnloft.com/ob-img/2025/01/16/8UFqTiKqy9sMXvpDrfHsPasted%20image%2020250116162837%201.png)