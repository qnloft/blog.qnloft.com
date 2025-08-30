---
title: MrDoc 「觅思文档」 一款好用的文档管理软件
published: 2025-05-08
description: 在这个信息爆炸的时代，如何高效地管理、沉淀和利用我们的知识，成为了每个追求进步的个人和组织都必须面对的课题。
tags: [MrDoc, docker]
category: 工具软件
draft: false
pinned: 0
customSlug: mrdoc
---


> 嘿，这里是「**青柠炸机店**」！在这个信息爆炸的时代，如何高效地管理、沉淀和利用我们的知识，成为了每个追求进步的个人和组织都必须面对的课题。而今天，我要给大家介绍一个强大的知识管理利器——**MrDoc 「觅思文档」**，它不仅能帮助你构建私有化的知识库，还能让你的知识沉淀更加系统化、有序化。接下来，就让我们一起探索觅思文档吧！

如果文章对你有帮助，别忘了**三连**+**关注**支持一下哈!

**知识库横评文章看这里！！！⏬️ ⏬️ ⏬️**

## 初识 MrDoc
> 初次邂逅 MrDoc 「觅思文档」，便被其简洁直观的界面所吸引。没有繁复的花哨设计，一切都以实用性和高效性为出发点，这正契合了技术工作者追求极致、回归本质的诉求。

📢：MrDoc分为 **免费版（开源版）**和 **专业版**，演示使用的是免费版（开源版），如果你觉得好用，也欢迎👏🏻升级成专业版，专业版在功能方面还是有很多亮点的。

### 直观易懂的界面布局

![Pasted image 20250506173647](https://oss.qnloft.com/ob-img/2025/05/08/fwIUhw8tAeRFUaWjF66XPasted%20image%2020250506173647.png)
MrDoc 的界面设计遵循了极简主义原则，功能分区清晰明了。上方是导航栏，可以快速访问个人中心、后台管理、新建文集和文档等核心区域；中间是文档展示区域，以块状结构呈现文档的层级关系，一目了然；

![Pasted image 20250506173832](https://oss.qnloft.com/ob-img/2025/05/08/Um6NVOUcS4l2MMgOlNDXPasted%20image%2020250506173832.png)
**后台管理系统**功能也即为丰富，不仅可以管理文集和文章、还有用户管理、图片和附件管理、模版管理等。而且还有一个较为美观的统计界面，这点确实难能可贵。

### 高效的文档编辑器
![Pasted image 20250507105007](https://oss.qnloft.com/ob-img/2025/05/08/Ua9golhYDxtz7F4Tng7pPasted%20image%2020250507105007.png)
MrDoc 支持Markdown、富文本、在线表格及思维导图，内置Mermaid语法实现流程图、时序图绘制。而且 **Vditor 编辑器还支持一键复制文字到 公众号和知乎。**
![Pasted image 20250507134505](https://oss.qnloft.com/ob-img/2025/05/08/VML7oFtdxbtYfnjFVpXvPasted%20image%2020250507134505.png)

-----
## MrDoc 进阶探索
### API 接口

![Pasted image 20250507151428](https://oss.qnloft.com/ob-img/2025/05/08/Uj6yYxEk0fVZXgHpoP19Pasted%20image%2020250507151428.png)
通过Token实现自动化文档上传、文集管理，支持与外部系统集成。可以在 MrDoc 的【个人中心】-->【Token 管理】页面生成或获取用户 token。

假设 MrDoc 地址为 `https://doc.mrdoc.pro`，用户 token 为 `123456`，那么：

- 获取文集列表的 url 为：`https://doc.mrdoc.pro/api/get_projects/?token=123456`
- 新建文档的 url 为：`https://doc.mrdoc.pro/api/create_doc/?token=123456`
- 上传图片的 url 为：`https://doc.mrdoc.pro/api/upload_img/?token=123456`

### 客户端插件

MrDoc 有桌面客户端（支持 Windows、Linux 和 macOS），浏览器插件，安卓手机APP，并且支持Obsidian离线编辑与在线同步，兼顾安全性与便捷性。[Obsidian安装方式看这里](https://doc.mrdoc.pro/doc/45650/)
![Pasted image 20250506174200](https://oss.qnloft.com/ob-img/2025/05/08/sPKhth4SnDDNBj12RUsePasted%20image%2020250506174200.png)

### 免费版（开源版）部署

```shell
mkdir /opt
cd /opt
git clone https://gitee.com/zmister/MrDoc

docker run -d --name mrdoc \
-p 10086:10086 \
-v /opt/MrDoc:/app/MrDoc \
jonnyan404/mrdoc:latest
```
- 默认用户：admin
- 默认密码:请执行 `docker logs mrdoc 2>&1|grep pwd` 获取

-----
## 总结

MrDoc以**私有化部署**为核心，结合**全平台适配**与**协作生态**，成为中小团队及个人知识管理的轻量化解决方案。其开源属性与商业化扩展的平衡，使其在灵活性与功能性上具备独特竞争力。更多功能可以自行尝试。

🔗链接： | [官网直达](https://mrdoc.pro/) | [教程手册](https://doc.mrdoc.pro/) | [项目地址](https://gitee.com/zmister/MrDoc.git)








