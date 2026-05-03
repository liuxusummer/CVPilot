// A4 可用高度（mm）：297mm 减去 @page 上下 margin（各 4mm）
const A4_CONTENT_HEIGHT_MM = 297 - 4 * 2;
const MM_TO_PX = 96 / 25.4;

export function printResume() {
  if (typeof window === "undefined") {
    return;
  }

  // 注册 beforeprint：在进入打印前即时测量和注入，保证样式生效
  const handleBeforePrint = () => applyAutofit();
  const handleAfterPrint = () => {
    cleanupAutofit();
    window.removeEventListener("beforeprint", handleBeforePrint);
    window.removeEventListener("afterprint", handleAfterPrint);
  };
  window.addEventListener("beforeprint", handleBeforePrint);
  window.addEventListener("afterprint", handleAfterPrint);

  // 也立即应用一次，兼容不触发 beforeprint 的环境
  applyAutofit();
  window.print();
}

function applyAutofit() {
  cleanupAutofit();

  const paper = document.querySelector<HTMLElement>(".preview-paper");
  const template = paper?.firstElementChild as HTMLElement | null;
  if (!paper || !template) return;

  const targetHeight = A4_CONTENT_HEIGHT_MM * MM_TO_PX;
  const contentHeight = template.getBoundingClientRect().height;
  if (contentHeight <= 0 || contentHeight >= targetHeight) return;

  // 找到包含最多 section 的容器作为拉伸目标
  const container = findMainSectionContainer(template);
  if (!container) return;

  const gapCount = Math.max(container.children.length - 1, 0);
  if (gapCount === 0) return;

  const extraPerGap = (targetHeight - contentHeight) / gapCount;
  const children = Array.from(container.children) as HTMLElement[];
  children.forEach((child, idx) => {
    if (idx === 0) return;
    child.dataset.printAutofit = child.style.marginTop || "";
    child.style.marginTop = `${extraPerGap}px`;
  });
}

function cleanupAutofit() {
  document.querySelectorAll<HTMLElement>("[data-print-autofit]").forEach((el) => {
    el.style.marginTop = el.dataset.printAutofit || "";
    delete el.dataset.printAutofit;
  });
}

// 在模板子树中找到 section 最多的直接父容器
function findMainSectionContainer(root: HTMLElement): HTMLElement | null {
  let best: HTMLElement | null = null;
  let bestCount = 1;
  const visit = (el: HTMLElement) => {
    const sectionCount = Array.from(el.children).filter(
      (c) => c.tagName === "SECTION",
    ).length;
    if (sectionCount > bestCount) {
      best = el;
      bestCount = sectionCount;
    }
    Array.from(el.children).forEach((c) => visit(c as HTMLElement));
  };
  visit(root);
  return best;
}
