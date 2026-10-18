import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "",

	// 公告内容
	// 注意：公告组件默认在 sidebarConfig.ts 中关闭，需要先在那里把
	// type: "announcement" 的 enable 打开，这段文案才会显示。
	content: "《现代数学丛书》正在撰写中，进度见「系列」页面。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
