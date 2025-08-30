---
title: Qbittorrent换肤手把手指南教程：让我的QB颜值飙升
published: 2025-02-18
description: 使用多种方式对QB进行美化，使得QB再也不单调了！
tags: [Qbittorrent, 美化]
category: 装机必备
draft: false
pinned: 0
customSlug: yKCgvKzb
---

## 皮肤安装

> 安装 `Qbittorrent` 皮肤有两种方式，
> - 直接读取 文件夹，一次安装，永久生效；
> - 通过修改 CSS 文件，在当前电脑的浏览器中生效；

💅  **美化效果展示**

![qb demo 1](https://oss.qnloft.com/ob-img/2025/02/18/Ek6q8uZmNjhfGLabov8fqb_demo_1.jpeg)

-----
![qb demo 2](https://oss.qnloft.com/ob-img/2025/02/18/XcpKgeO2ftUnQhuXhZ6qqb_demo_2.png)

#### 最华丽的 QB 皮肤 —— VueTorrent

> `VueTorrent` 的优势是不仅可以使得 `Qbittorrent` 在web端，有一个美观的界面，**同时还支持手机端的适配**。安装和使用方式：

1️⃣ 下载皮肤文件，⏭[下载地址点这里](https://github.com/VueTorrent/VueTorrent)
2️⃣ 将皮肤文件上传装有飞牛的NAS中，并解压到如下目录，📣 **保持目录结构如下图所示的样子**：
![Pasted image 20250217175846](https://oss.qnloft.com/ob-img/2025/02/18/IPsEVPo8rPlDIrKytRG0Pasted%20image%2020250217175846.png)
3️⃣ 使用浏览器访问 Qbittorrent，在设置中找到 webUI，配置如下图：
![Pasted image 20250218135156](https://oss.qnloft.com/ob-img/2025/02/18/xZaQV6h5I03PtpAq2tn8Pasted%20image%2020250218135156.png)
4️⃣ 保存后页面会自动刷新，之后就可能看到效果了。

⚠️⚠️⚠️ **安装后可能遇到的问题**：

> 如果页面出现：`不可接受的文件类型，只允许使用常规文件`

遇事莫慌🤣，解决方式：需要先关闭Qbittorrent 的 Dokcer容器，然后将`/vol1/1000/docker/qbittorrent/config/qBittorrent/qBittorrent.conf` 文件中的
`AlternativeUIEnabled`改为 `false`，删除 `RootFolder` 中的内容。修改后的文件如下：

```conf
WebUI\AlternativeUIEnabled=false
WebUI\RootFolder=
```

修改完成后，再启动Dokcer容器。

#### 简洁大方的皮肤 —— Catppuccin

Catppuccin 的安装方式比较特别，需要用到浏览器插件：`Stylus`，并且配置后，只是在当前电脑中生效，如果更换浏览器或者设备，就无法起到效果了 ‼️

1️⃣ 在Chrome 中 搜索并安装浏览器插件 `Stylus`
![Pasted image 20250218135905](https://oss.qnloft.com/ob-img/2025/02/18/gNKIGDyZnN5jdbXuei53Pasted%20image%2020250218135905.png)
2️⃣ 打开 `Qbittorrent` 网页，点击 刚刚安装好的 `Stylus`，点击 `新建样式 给 xxx`
![Pasted image 20250218140141](https://oss.qnloft.com/ob-img/2025/02/18/YnyfqeFA7UfCoglZzWEyPasted%20image%2020250218140141.png)
3️⃣ 填入 😍喜欢的样式 代码，保存即可。
![Pasted image 20250218140312](https://oss.qnloft.com/ob-img/2025/02/18/e5Ng8XY31FmsQJ8JyvxMPasted%20image%2020250218140312.png)

```html
# latte 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/catppuccin-latte.css";

# frappe 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/catppuccin-frappe.css";

# macchiato 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/catppuccin-macchiato.css";

# mocha 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/catppuccin-mocha.css";
```

皮肤效果可以看这里：⏭ [Catppuccin项目地址](https://github.com/catppuccin/qbittorrent)

🌟🌟🌟 **更多皮肤等你去体验** 😏：

```html
# aquamarine 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/aquamarine.css";

# hotline 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/hotline.css";

# hotpink 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/hotpink.css";

# dracula 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/dracula.css";

# dark 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/dark.css";

# organizr 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/organizr.css";

# space-gray 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/space-gray.css";

# overseerr 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/overseerr.css";

# plex 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/plex.css";

# maroon 皮肤
@import "https://theme-park.dev/css/base/qbittorrent/maroon.css";
```
