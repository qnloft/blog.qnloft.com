import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};
	pinned: {
		icon: string;
		text: string;
		showIcon: boolean;
		showText: boolean;
	};
	ads: {
		enable: boolean;
		position: "right" | "left" | "bottom" | "sidebar";
		ads: {
			id: string;
			title: string;
			description: string;
			image: string;
			link: string;
			buttonText?: string; // 可选字段，为空时不显示按钮
			show: boolean;
		}[];
	};
	carousel: {
		enable: boolean;
		height: string;
		autoplay: boolean;
		autoplaySpeed: number;
		showDots: boolean;
		showArrows: boolean;
		loop: boolean;
		slides: {
			image: string;
			title: string;
			description: string;
			link: string;
		}[];
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};

	favicon: Favicon[];
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string; // 可以是图片路径或文字
	nameImage?: string; // 新增：用于显示图片形式的名称
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	pinned?: number; // 置顶标识：0为默认，1为置顶
	customSlug?: string; // 自定义文章链接
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};
