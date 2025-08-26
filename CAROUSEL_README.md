# 轮播组件使用说明

## 概述

本项目已经成功集成了 Embla Carousel 轮播组件，替换了原来的 banner 功能。轮播组件位于主页的导航栏下方，主内容区域上方。

## 配置

轮播组件的配置位于 `src/config.ts` 文件中的 `siteConfig.carousel` 部分：

```typescript
carousel: {
  enable: true,                    // 是否启用轮播
  height: "400px",                 // 轮播高度
  autoplay: true,                  // 是否自动播放
  autoplaySpeed: 5000,             // 自动播放间隔（毫秒）
  showDots: true,                  // 显示指示点
  showArrows: true,                // 显示导航箭头
  loop: true,                      // 循环播放
  slides: [                        // 轮播幻灯片配置
    {
      image: "assets/images/demo-banner.png",
      title: "欢迎来到青柠炸机店",
      description: "专注于为家庭与企业打造安全、可控的私有数据中心",
      link: "/about"
    },
    {
      image: "assets/images/demo-avatar.png", 
      title: "技术分享",
      description: "分享最新的技术资讯和解决方案",
      link: "/archive"
    }
  ]
}
```

## 功能特性

### 1. 自动播放
- 支持自动轮播功能
- 可配置播放间隔时间
- 鼠标悬停时暂停自动播放

### 2. 导航控制
- 左右箭头按钮用于手动切换
- 底部指示点显示当前幻灯片位置
- 点击指示点可直接跳转到对应幻灯片

### 3. 响应式设计
- 在移动设备上自动调整按钮大小
- 文字大小会根据屏幕尺寸自适应

### 4. 视觉效果
- 渐变遮罩效果，确保文字清晰可读
- 平滑的过渡动画
- 悬停效果增强用户体验

## 自定义轮播内容

要添加或修改轮播内容，请编辑 `src/config.ts` 文件中的 `slides` 数组：

```typescript
slides: [
  {
    image: "你的图片路径",           // 图片路径（相对于 src 目录）
    title: "幻灯片标题",            // 显示在图片上的标题
    description: "幻灯片描述",      // 显示在图片上的描述文字
    link: "/目标页面路径"           // 点击幻灯片跳转的链接
  }
  // 可以添加更多幻灯片...
]
```

## 样式自定义

轮播组件的样式定义在 `src/components/EmblaCarousel.astro` 文件中。主要样式类包括：

- `.embla-carousel-wrapper`: 轮播容器
- `.embla__slide`: 单个幻灯片
- `.slide-overlay`: 文字遮罩层
- `.embla__button`: 导航按钮
- `.embla__dots`: 指示点容器

## 技术实现

- 使用 **Embla Carousel** 作为轮播库
- 支持 **embla-carousel-autoplay** 插件实现自动播放
- 使用 **Astro** 框架的组件系统
- 支持 **TypeScript** 类型检查

## 依赖项

确保以下依赖已安装：

```bash
pnpm add embla-carousel embla-carousel-autoplay
```

## 注意事项

1. 图片路径需要相对于 `src` 目录
2. 建议使用合适尺寸的图片以获得最佳显示效果
3. 轮播组件会自动处理图片的缩放和裁剪
4. 如果不需要轮播功能，可以将 `enable` 设置为 `false`
