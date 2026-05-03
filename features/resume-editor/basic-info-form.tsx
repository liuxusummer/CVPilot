import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import type { ResumeProfile } from "@/types/resume";

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="mb-1.5 block text-xs font-medium text-slate-500">
      {children}
    </label>
  );
}

type BasicInfoFormProps = {
  profile: ResumeProfile;
  onFieldChange: (field: keyof ResumeProfile, value: string) => void;
};

export function BasicInfoForm({ profile, onFieldChange }: BasicInfoFormProps) {
  return (
    <Section
      title="基本信息"
      eyebrow="资料"
      description="用于简历顶部信息区的姓名、职位与联系方式。"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <FieldLabel>姓名</FieldLabel>
          <Input
            value={profile.name}
            aria-label="姓名"
            placeholder="你的姓名"
            onChange={(event) => onFieldChange("name", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel>求职意向</FieldLabel>
          <Input
            value={profile.title}
            aria-label="求职意向"
            placeholder="目标职位"
            onChange={(event) => onFieldChange("title", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel>电话</FieldLabel>
          <Input
            value={profile.phone}
            aria-label="电话"
            placeholder="电话号码"
            onChange={(event) => onFieldChange("phone", event.target.value)}
          />
        </div>
        <div>
          <FieldLabel>邮箱</FieldLabel>
          <Input
            value={profile.email}
            aria-label="邮箱"
            placeholder="邮箱地址"
            onChange={(event) => onFieldChange("email", event.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <FieldLabel>所在地</FieldLabel>
          <Input
            value={profile.city}
            aria-label="所在地"
            placeholder="所在城市"
            onChange={(event) => onFieldChange("city", event.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <FieldLabel>照片</FieldLabel>
          <div className="flex items-center gap-3">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt="照片预览"
                className="h-14 w-14 rounded-sm border border-slate-200 object-cover"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-dashed border-slate-300 bg-slate-50 text-[10px] text-slate-400">
                未上传
              </div>
            )}
            <div className="flex-1 space-y-2">
              <Input
                value={profile.photo ?? ""}
                aria-label="照片链接"
                placeholder="照片 URL 或 Base64"
                onChange={(event) => onFieldChange("photo", event.target.value)}
              />
              <div className="flex items-center gap-2">
                <label className="inline-flex cursor-pointer items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  上传文件
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      event.target.value = "";
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = () => {
                        onFieldChange("photo", String(reader.result ?? ""));
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </label>
                {profile.photo && (
                  <button
                    type="button"
                    className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50"
                    onClick={() => onFieldChange("photo", "")}
                  >
                    移除
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
