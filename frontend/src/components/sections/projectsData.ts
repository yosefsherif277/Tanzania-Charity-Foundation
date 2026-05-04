// رابط الصورة الموحد للمعاينة
const previewImg =
  "https://ik.imagekit.io/wmg2uikfnk/Ponte%20Marka.%20L'armonia%20del%20Buono-193-1770891556.jpeg?updatedAt=1771405412771";

// مصفوفة الأرقام الرومانية للخيارات المتكررة
const ROMAN = ["I", "II", "III", "IV", "V"];
export interface WaterWellRow {
  type: "well_shallow" | "well_mid" | "well_deep" | "well_solar";
  feature: string;
  opt: string;
  depth: [number, number];
  people: number;
  plus: boolean;
}

export interface SadakaRow {
  desc: "goat" | "sheep" | "cow";
  size: "std" | "big";
}

export interface GeneralProjectRow {
  desc: string;
}

export type ProjectRow = WaterWellRow | SadakaRow | GeneralProjectRow;

export interface ProjectCategory {
  id: string;
  headerKeys: string[];
  rows: ProjectRow[];
}

export const projectsData: ProjectCategory[] = [
  {
    id: "water_wells",
    headerKeys: ["features", "depth", "beneficiaries"],
    rows: [
      // آبار سطحية (Shallow Wells)
      {
        type: "well_shallow",
        feature: "pulley",
        opt: ROMAN[0],
        depth: [5, 15],
        people: 300,
        plus: false,
      },
      {
        type: "well_shallow",
        feature: "pump_local",
        opt: ROMAN[1],
        depth: [10, 30],
        people: 500,
        plus: true,
      },
      {
        type: "well_shallow",
        feature: "pump_indian_2",
        opt: ROMAN[2],
        depth: [10, 30],
        people: 500,
        plus: true,
      },

      // آبار متوسطة (Mid-Depth Wells)
      {
        type: "well_mid",
        feature: "pump_indian_2",
        opt: ROMAN[0],
        depth: [40, 60],
        people: 800,
        plus: true,
      },
      {
        type: "well_mid",
        feature: "pump_indian_3",
        opt: ROMAN[1],
        depth: [40, 60],
        people: 800,
        plus: true,
      },

      // آبار عميقة (Deep Wells)
      {
        type: "well_deep",
        feature: "pump_indian_2",
        opt: ROMAN[0],
        depth: [80, 120],
        people: 1200,
        plus: true,
      },
      {
        type: "well_deep",
        feature: "pump_indian_3",
        opt: ROMAN[1],
        depth: [80, 120],
        people: 1500,
        plus: true,
      },
      {
        type: "well_deep",
        feature: "pump_electric",
        opt: ROMAN[2],
        depth: [80, 120],
        people: 2000,
        plus: true,
      },

      // آبار طاقة شمسية (Solar Wells)
      {
        type: "well_solar",
        feature: "system_small",
        opt: ROMAN[0],
        depth: [100, 150],
        people: 2000,
        plus: true,
      },
      {
        type: "well_solar",
        feature: "system_medium",
        opt: ROMAN[1],
        depth: [100, 150],
        people: 2500,
        plus: true,
      },
      {
        type: "well_solar",
        feature: "system_large",
        opt: ROMAN[2],
        depth: [150, 200],
        people: 3000,
        plus: true,
      },
    ],
  },
  {
    id: "sadaka",
    headerKeys: ["description"],
    rows: [
      { desc: "goat", size: "std" },
      { desc: "goat", size: "big" },
      { desc: "sheep", size: "std" },
      { desc: "sheep", size: "big" },
      { desc: "cow", size: "std" },
      { desc: "cow", size: "big" },
    ],
  },
  {
    id: "health",
    headerKeys: ["description"],
    rows: [
      { desc: "medical_camp" },
      { desc: "cataract_surgery" },
      { desc: "dispensary_completion" },
    ],
  },
  {
    id: "education",
    headerKeys: ["description"],
    rows: [
      { desc: "school_wash" },
      { desc: "school_completion" },
      { desc: "school_classes" },
      { desc: "new_school" },
    ],
  },
  {
    id: "masjid",
    headerKeys: ["description"],
    rows: [
      { desc: "new_mosque"},
      { desc: "mosque_completion" },
    ],
  },
  {
    id: "livelihood",
    headerKeys: ["description"],
    rows: [
      { desc: "goats_keeping"},
      { desc: "dairy_cows" },
      { desc: "small_shops" },
      { desc: "beekeeping"},
    ],
  },
];
