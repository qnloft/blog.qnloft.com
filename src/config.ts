import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "青柠炸机店-Blog",
	subtitle:
		"您的私有云专家：从NAS选购到Docker实战",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 50, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	carousel: {
		enable: true,
		height: "260px", // 轮播高度（默认更紧凑）
		autoplay: true, // 自动播放
		autoplaySpeed: 5000, // 自动播放间隔（毫秒）
		showDots: true, // 显示指示点
		showArrows: true, // 显示箭头
		loop: true, // 循环播放
		slides: [
			{
				image: "assets/images/demo-banner.png",
				title: "欢迎来到青柠炸机店",
				description: "专注于为家庭与企业打造安全、可控的私有数据中心",
				link: "/about",
			},
			{
				image: "assets/images/demo-avatar.png",
				title: "技术分享",
				description: "分享最新的技术资讯和解决方案",
				link: "/archive",
			},
		],
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/qnloft/blog.qnloft.com", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "青柠炸机店",
	nameImage: "assets/images/qnloft-logo.png", // 新增：名称图片路径
	bio: "覆盖 **群晖**、**威联通**、**极空间**、**绿联**、**飞牛OS**及**🐳Docker** 提供从入门到精通的实战教程📚",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "B站",
			icon: "fa6-brands:bilibili",
			url: "https://store.steampowered.com",
		},
		{
			name: "公众号",
			icon: "fa6-brands:weixin",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
