---
title: "示例项目"
slug: example-project
published: 1970-01-01
draft: true
order: 100
description: "本文档介绍项目集合的 Frontmatter 字段与状态键值，供你在 src/content/projects/ 下编写项目时参考。"
image: ""
status: "planning"
tags:
  - 文档
  - 指南
---

## 项目展示页使用指南

在 `src/content/projects/` 下新建一个 `.md` 或 `.mdx` 文件即可创建一个项目。
**正文就是项目 README**，渲染在详情页底部；**frontmatter** 里的字段则用于列表卡片与详情页顶部展示。

> 本文件是**示例与字段说明**，已设置 `draft: true`，因此不会出现在站点上。
> 编写自己的项目时，可以照抄下面的字段结构，或直接删除本文件。

## Frontmatter 字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `title` | string | 是 | 项目标题 |
| `slug` | string | 否 | URL 片段，留空则按文件名生成 |
| `published` | date | 是 | 发布日期，如 `2026-05-18` |
| `draft` | boolean | 否 | 为 `true` 时不参与构建（默认 `false`） |
| `order` | number | 否 | 列表排序权重，数字越大越靠前 |
| `description` | string | 否 | 卡片与详情页的简介 |
| `image` | string | 否 | 封面图路径，相对本文件所在目录 |
| `status` | string | 否 | 项目状态键值，见下表 |
| `tags` | string[] | 否 | 标签列表 |
| `link` | 数组 | 否 | 详情页顶部的链接按钮，每项含 `label`、`icon`、`value` |
| `lang` | string | 否 | 语言标记 |

## 状态键值（`status`）

| 值 | 含义 |
| --- | --- |
| `planning` | 计划中 |
| `in-progress` | 进行中 |
| `completed` | 已完成 |
| `archived` | 已归档 |
| `published` | 已发布 |
| `paused` | 已暂停 |

## 示例

```yaml
---
title: "我的新项目"
slug: my-project
published: 2026-05-18
description: "一句话介绍这个项目。"
image: "images/my-project.avif"
status: "in-progress"
tags:
  - Astro
  - TypeScript
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/example/repo"
---
```
