"use client";
import { useState, useMemo } from "react";
import { useTranslation } from "@/i18n/client";
import { Locale } from "@/i18n/settings";
import {
  projectsData,
  WaterWellRow,
  SadakaRow,
  GeneralProjectRow,
} from "./projectsData";

export default function ProjectsContent({ lng }: { lng: Locale }) {
  const { t } = useTranslation(lng, "common");
  const isRtl = lng === "ar";

  // نستخدم الـ ID للحالة لضمان استقرار الاختيار
  const [activeCategoryId, setActiveCategoryId] = useState(projectsData[0].id);

  // البحث عن الفئة النشطة بناءً على الـ ID
  const activeCategory = useMemo(
    () =>
      projectsData.find((cat) => cat.id === activeCategoryId) ||
      projectsData[0],
    [activeCategoryId],
  );

  // دالة المعالجة المطابقة لمفاتيح الترجمة في الـ JSON
  const renderCell = (
    key: string,
    row: WaterWellRow | SadakaRow | GeneralProjectRow,
  ) => {
    switch (key) {
      case "features": {
        const r = row as WaterWellRow;
        return (
          <div className="flex flex-col">
            <span className="font-bold text-charcoal">
              {t(`projects.well_types.${r.type}`)} (
              {t(`projects.option_label`, { num: r.opt })})
            </span>
            <span className="text-sm text-charcoal/60">
              {t(`projects.features.${r.feature}`)}
            </span>
          </div>
        );
      }

      case "description": {
        // فحص ما إذا كان الصف يخص قسم الصدقة (يحتوي على size)
        if ("size" in row) {
          const r = row as SadakaRow;
          return `${t(`projects.items.${r.desc}`)} - ${t(`projects.items.${r.size}`)}`;
        }
        // الأقسام العامة (صحة، تعليم، إلخ)
        const r = row as GeneralProjectRow;
        return t(`projects.items.${r.desc}`);
      }

      case "depth": {
        const r = row as WaterWellRow;
        return t("projects.labels.depth_range", {
          min: r.depth[0],
          max: r.depth[1],
        });
      }

      case "beneficiaries": {
        const r = row as WaterWellRow;
        return r.plus
          ? t("projects.labels.people_plus", { count: r.people })
          : t("projects.labels.people_count", { count: r.people });
      }

      case "price":
      case "price_unit": {
        if (row.price === "ask") return t("projects.labels.ask");
        if (row.price === "per_sqm_250") return t("projects.labels.per_sqm");
        if (
          typeof row.price === "string" &&
          row.price.startsWith("per_unit_")
        ) {
          const amount = row.price.split("_").pop();
          return t("projects.labels.per_unit", { amount });
        }
        return `$${row.price}`;
      }

      default:
        return "---";
    }
  };

  return (
    <div className="min-h-screen bg-sand/20 py-12" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* العناوين */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            {t(`projects.categories.${activeCategory.id}`)}
          </h1>
        </div>

        {/* اختيار الفئة - Mobile */}
        <div className="mb-8 md:hidden">
          <select
            className="w-full p-4 rounded-xl bg-white shadow-md outline-none"
            value={activeCategoryId}
            onChange={(e) => setActiveCategoryId(e.target.value)}
          >
            {projectsData.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {t(`projects.categories.${cat.id}`)}
              </option>
            ))}
          </select>
        </div>

        {/* اختيار الفئة - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
          {projectsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCategoryId === cat.id
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "bg-white text-charcoal/60 hover:bg-primary/10"
              }`}
            >
              {t(`projects.categories.${cat.id}`)}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* الجدول المحدث */}
          <div className="w-full overflow-hidden rounded-2xl bg-white shadow-lg border border-charcoal/5">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/5 text-primary">
                    {activeCategory.headerKeys.map((key) => (
                      <th
                        key={key}
                        className={`p-5 font-bold border-b ${isRtl ? "text-right" : "text-left"}`}
                      >
                        {t(`projects.headers.${key}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {activeCategory.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-b border-charcoal/5 last:border-0 hover:bg-primary/5 transition-colors"
                    >
                      {/* التعديل الجوهري: الخرائط على المفاتيح وليس الصف */}
                      {activeCategory.headerKeys.map((key) => (
                        <td
                          key={key}
                          className={`p-5 ${isRtl ? "text-right" : "text-left"}`}
                        >
                          {renderCell(key, row)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
