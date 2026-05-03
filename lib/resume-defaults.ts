import type {
  ResumeData,
  ResumeEducationItem,
  ResumeExperienceItem,
  ResumeLink,
  ResumeProjectItem,
  ResumeSkillItem,
} from "@/types/resume";

function createItemId(prefix: string) {
  if (typeof globalThis.crypto !== "undefined" && typeof globalThis.crypto.randomUUID === "function") {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function createEmptyEducationItem(): ResumeEducationItem {
  return {
    id: createItemId("edu"),
    school: "",
    major: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: "",
  };
}

export function createEmptyExperienceItem(): ResumeExperienceItem {
  return {
    id: createItemId("exp"),
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  };
}

export function createEmptyProjectItem(): ResumeProjectItem {
  return {
    id: createItemId("proj"),
    name: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
    techStack: "",
  };
}

export function createEmptySkillItem(): ResumeSkillItem {
  return {
    id: createItemId("skill"),
    name: "",
    level: "",
    category: "",
  };
}

export function createEmptyLinkItem(): ResumeLink {
  return {
    id: createItemId("link"),
    label: "",
    url: "",
  };
}

export function createSampleResume(): ResumeData {
  return {
    profile: {
      name: "林小明",
      title: "资深前端架构师",
      phone: "138-0000-0000",
      email: "linxiaoming@example.com",
      city: "中国，上海",
      summary:
        "拥有7年以上前端开发与架构经验，精通 React、Vue 生态及 TypeScript，深入理解前端工程化与微前端架构。曾主导多个千万级日活的复杂企业级应用和 SaaS 平台从 0 到 1 的建设与性能调优。具备优秀的团队管理与跨部门协作能力，致力于通过技术创新提升研发效能，推动业务高速发展。对新技术保持敏锐嗅觉，热衷于开源社区贡献。",
      photo: "/avatar.jpeg",
    },
    education: [
      {
        id: "edu-1",
        school: "浙江大学",
        major: "软件工程",
        degree: "硕士",
        startDate: "2014.09",
        endDate: "2016.06",
        description: "",
      },
      {
        id: "edu-2",
        school: "武汉大学",
        major: "计算机科学与技术",
        degree: "本科",
        startDate: "2010.09",
        endDate: "2014.06",
        description: "",
      },
    ],
    experience: [
      {
        id: "exp-1",
        company: "字节跳动（ByteDance）",
        role: "前端架构师",
        startDate: "2021.03",
        endDate: "至今",
        description:
          "负责核心商业化中台的前端架构设计与演进，带领 15 人前端团队完成多个重点项目交付\n落地基于 qiankun 的微前端架构，将 10+ 个独立业务系统无缝集成，页面加载速度提升 40%，内存占用降低 20%\n研发并开源内部 UI 组件库与 CLI 工具链，统一全公司 50+ 项目的设计规范，研发效率提升 30%\n建立前端性能监控与异常报警平台，实现线上问题分钟级定位，核心页面首屏时间（FCP）控制在 0.8s 以内",
      },
      {
        id: "exp-2",
        company: "蚂蚁集团（Ant Group）",
        role: "高级前端开发工程师",
        startDate: "2018.07",
        endDate: "2021.03",
        description:
          "参与支付宝核心金融业务线的前端开发，负责高并发场景下的 H5 营销活动与小程序研发\n深度参与 Ant Design 体系建设，贡献多个复杂业务组件，提升中后台系统开发体验\n优化 Node.js BFF 层架构，引入 GraphQL 聚合底层微服务接口，减少 50% 的网络请求体积，显著提升弱网环境下的用户体验\n推动前端自动化测试（Jest + Cypress）覆盖率达到 85% 以上，保障核心链路零 P0 级故障",
      },
      {
        id: "exp-3",
        company: "网易（NetEase）",
        role: "前端开发工程师",
        startDate: "2016.07",
        endDate: "2018.06",
        description:
          "负责网易云音乐 Web 端及内嵌 H5 页面的日常迭代与维护，熟练运用 Vue.js 全家桶\n实现复杂的音频播放器核心逻辑与歌词同步滚动算法，保障多端一致的流畅体验\n参与前端工程化改造，从 Grunt 迁移至 Webpack，构建速度提升 3 倍\n主导移动端适配方案重构，解决 200+ 个兼容性 Bug，用户评分从 3.8 提升至 4.6",
      },
    ],
    projects: [
      {
        id: "proj-1",
        name: "企业级低代码可视化搭建平台",
        role: "核心开发者 / 架构设计",
        startDate: "2022.01",
        endDate: "2022.12",
        description:
          "设计并实现了一套基于 React + TypeScript 的低代码引擎，支持拖拽式页面搭建与复杂逻辑编排\n创新性地引入 JSON Schema 驱动的表单渲染机制，支持 50+ 种物料组件的动态加载与配置\n平台上线后，支撑了公司内部 80% 的营销活动与中后台页面产出，研发成本降低 60%\n实现组件级沙箱隔离与版本管理机制，保障多团队协作时的稳定性与可维护性",
        techStack: "React、TypeScript、JSON Schema",
      },
      {
        id: "proj-2",
        name: "实时数据可视化大屏系统",
        role: "技术负责人",
        startDate: "2020.06",
        endDate: "2020.12",
        description:
          "基于 ECharts + WebGL 构建高性能数据可视化引擎，支持百万级数据点的实时渲染\n设计并实现 WebSocket 数据推送与增量更新机制，将大屏刷新延迟从 3s 降低至 200ms\n封装 30+ 种业务图表组件，形成标准化可视化资产库，被 10+ 个业务线复用",
        techStack: "ECharts、WebGL、WebSocket",
      },
      {
        id: "proj-3",
        name: "跨端组件库 Monorepo 工程化改造",
        role: "主导开发者",
        startDate: "2019.03",
        endDate: "2019.09",
        description:
          "将分散在 5 个仓库的组件库迁移至统一 Monorepo，基于 Lerna + Yarn Workspaces 管理\n搭建自动化发布流水线，支持语义化版本控制与变更日志自动生成，发布效率提升 70%\n引入 Storybook 作为组件文档与调试平台，降低新人上手成本 50% 以上",
        techStack: "Lerna、Yarn Workspaces、Storybook",
      },
    ],
    skills: [
      { id: "skill-1", name: "React", level: "" },
      { id: "skill-2", name: "Vue.js", level: "" },
      { id: "skill-3", name: "TypeScript", level: "" },
      { id: "skill-4", name: "Node.js", level: "" },
      { id: "skill-5", name: "Webpack / Vite", level: "" },
      { id: "skill-6", name: "微前端 (qiankun)", level: "" },
      { id: "skill-7", name: "GraphQL", level: "" },
      { id: "skill-8", name: "Tailwind CSS", level: "" },
      { id: "skill-9", name: "前端工程化", level: "" },
      { id: "skill-10", name: "性能调优", level: "" },
      { id: "skill-11", name: "CI/CD", level: "" },
      { id: "skill-12", name: "Jest", level: "" },
    ],
    links: [],
    settings: {
      template: "classic",
      accentColor: "#2563eb",
    },
    hiddenSections: [],
  };
}

export function createEmptyResume(): ResumeData {
  return {
    profile: {
      name: "",
      title: "",
      phone: "",
      email: "",
      city: "",
      summary: "",
      photo: "",
    },
    education: [],
    experience: [],
    projects: [],
    skills: [],
    links: [],
    settings: {
      template: "classic",
      accentColor: "#2563eb",
    },
    hiddenSections: [],
  };
}

export const sampleResume: ResumeData = createSampleResume();
