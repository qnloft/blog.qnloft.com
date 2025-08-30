---
title: 极空间群晖配置Docker镜像下载地址教程
published: 2024-07-05
description: 炎炎夏日，DockerHub无法下载镜像，更更让人心烦意乱！不过还好我搞定了 Docker Hub无法下载镜像问题 极空间配置。
tags: [极空间, 群晖, docker]
category: 科普文章
draft: false
pinned: 0
customSlug: VmzVIMwx
---

> 炎炎夏日，DockerHub无法下载镜像，更更让人心烦意乱！不过还好我搞定了  
Docker Hub无法下载镜像问题  

## 极空间配置
ㅤ  
- 此加速地址为临时地址，可能会出现不可用的情况；  
- 限境内机器使用；  
- 请勿恶意刷流量；  
- 可以关注下 1Panel 软件，很好用；  
ㅤ  
![iShot 2024 06 12 15.56.28](https://oss.qnloft.com/ob-img/2024/07/05/IZ8saULQWUjlKNdIisVxiShot_2024-06-12_15.56.28.png)

![iShot 2024 06 12 15.57.04](https://oss.qnloft.com/ob-img/2024/07/05/DwQO0vETMeQsp4Q9ZWVUiShot_2024-06-12_15.57.04.png)


## 群晖配置

- **第一步**：在SSH命令中，执行 `sudo docker info 2>/dev/null | grep "Registry"` 看一下自己机器现在所用的镜像地址；  
- **第二步**：结合自己的镜像地址，按照图中方式配置；  
- **第三步**：配置完成后，再SSH执行一下：`sudo docker info`，看一下现在配置是否正确！  
- **第四步**：重新打开 `Container Manager` 的注册表，这时候应该就可能正常看到镜像啦！

![群晖docker0.5](https://oss.qnloft.com/ob-img/2024/07/05/NU0Bvi1YqOwdsLKp6KPj%E7%BE%A4%E6%99%96docker0.5.jpg)

![群晖docker1 需要水印 副本](https://oss.qnloft.com/ob-img/2024/07/05/3SNnIMmYwpcuJkV2KdLU%E7%BE%A4%E6%99%96docker1-%E9%9C%80%E8%A6%81%E6%B0%B4%E5%8D%B0_%E5%89%AF%E6%9C%AC.png)

![群晖docker2 需要水印 副本](https://oss.qnloft.com/ob-img/2024/07/05/LwjugO3VXPprvGWtmpML%E7%BE%A4%E6%99%96docker2-%E9%9C%80%E8%A6%81%E6%B0%B4%E5%8D%B0_%E5%89%AF%E6%9C%AC.png)

![群晖docker3 需要水印 副本](https://oss.qnloft.com/ob-img/2024/07/05/vzTEaayA5deQijN7DtpT%E7%BE%A4%E6%99%96docker3-%E9%9C%80%E8%A6%81%E6%B0%B4%E5%8D%B0_%E5%89%AF%E6%9C%AC.png)

![群晖docker4 需要水印 副本](https://oss.qnloft.com/ob-img/2024/07/05/ZHNExGo30Tv7lfKnfuio%E7%BE%A4%E6%99%96docker4-%E9%9C%80%E8%A6%81%E6%B0%B4%E5%8D%B0_%E5%89%AF%E6%9C%AC.png)

## 写在最后

> 因为一颗老鼠屎搞的，不知道是临时还是长期，这个地址也不能确保一直可用，这个事情我会保持关注，有问题我会发文章通知大家！