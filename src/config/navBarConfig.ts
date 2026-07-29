import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// 扁平导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "主页",
			url: "/",
			icon: "material-symbols:home",
		},
		{
			name: "归档",
			url: "/archive/",
			icon: "material-symbols:archive",
		},
		{
			name: "关于",
			url: "/about/",
			icon: "material-symbols:person",
		},
		{
			name: "GitHub",
			url: "https://github.com/lzxcr",
			external: true,
			icon: "fa7-brands:github",
		},
	],
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
