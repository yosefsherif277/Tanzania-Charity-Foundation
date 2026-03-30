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
  price: number;
}

export interface SadakaRow {
  desc: "goat" | "sheep" | "cow";
  size: "std" | "big";
  price: number;
}

export interface GeneralProjectRow {
  desc: string;
  price: number | "ask" | string;
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
    headerKeys: ["features", "depth", "beneficiaries", "price"],
    rows: [
      // آبار سطحية (Shallow Wells)
      {
        type: "well_shallow",
        feature: "pulley",
        opt: ROMAN[0],
        depth: [5, 15],
        people: 300,
        plus: false,
        price: 1200,
      },
      {
        type: "well_shallow",
        feature: "pump_local",
        opt: ROMAN[1],
        depth: [10, 30],
        people: 500,
        plus: true,
        price: 1200,
      },
      {
        type: "well_shallow",
        feature: "pump_indian_2",
        opt: ROMAN[2],
        depth: [10, 30],
        people: 500,
        plus: true,
        price: 1800,
      },

      // آبار متوسطة (Mid-Depth Wells)
      {
        type: "well_mid",
        feature: "pump_indian_2",
        opt: ROMAN[0],
        depth: [40, 60],
        people: 800,
        plus: true,
        price: 2500,
      },
      {
        type: "well_mid",
        feature: "pump_indian_3",
        opt: ROMAN[1],
        depth: [40, 60],
        people: 800,
        plus: true,
        price: 3200,
      },

      // آبار عميقة (Deep Wells)
      {
        type: "well_deep",
        feature: "pump_indian_2",
        opt: ROMAN[0],
        depth: [80, 120],
        people: 1200,
        plus: true,
        price: 4500,
      },
      {
        type: "well_deep",
        feature: "pump_indian_3",
        opt: ROMAN[1],
        depth: [80, 120],
        people: 1500,
        plus: true,
        price: 5500,
      },
      {
        type: "well_deep",
        feature: "pump_electric",
        opt: ROMAN[2],
        depth: [80, 120],
        people: 2000,
        plus: true,
        price: 6500,
      },

      // آبار طاقة شمسية (Solar Wells)
      {
        type: "well_solar",
        feature: "system_small",
        opt: ROMAN[0],
        depth: [100, 150],
        people: 2000,
        plus: true,
        price: 5500,
      },
      {
        type: "well_solar",
        feature: "system_medium",
        opt: ROMAN[1],
        depth: [100, 150],
        people: 2500,
        plus: true,
        price: 7500,
      },
      {
        type: "well_solar",
        feature: "system_large",
        opt: ROMAN[2],
        depth: [150, 200],
        people: 3000,
        plus: true,
        price: 8500,
      },
    ],
  },
  {
    id: "sadaka",
    headerKeys: ["description", "price"],
    rows: [
      { desc: "goat", size: "std", price: 40 },
      { desc: "goat", size: "big", price: 60 },
      { desc: "sheep", size: "std", price: 40 },
      { desc: "sheep", size: "big", price: 60 },
      { desc: "cow", size: "std", price: 300 },
      { desc: "cow", size: "big", price: 350 },
    ],
  },
  {
    id: "health",
    headerKeys: ["description", "price"],
    rows: [
      { desc: "medical_camp", price: "ask" },
      { desc: "cataract_surgery", price: "ask" },
      { desc: "dispensary_completion", price: "ask" },
    ],
  },
  {
    id: "education",
    headerKeys: ["description", "price"],
    rows: [
      { desc: "school_wash", price: "ask" },
      { desc: "school_completion", price: "ask" },
      { desc: "school_classes", price: "ask" },
      { desc: "new_school", price: "ask" },
    ],
  },
  {
    id: "masjid",
    headerKeys: ["description", "price_unit"],
    rows: [
      { desc: "new_mosque", price: "per_sqm_250" },
      { desc: "mosque_completion", price: "ask" },
    ],
  },
  {
    id: "livelihood",
    headerKeys: ["description", "price"],
    rows: [
      { desc: "goats_keeping", price: "per_unit_50" },
      { desc: "dairy_cows", price: "ask" },
      { desc: "small_shops", price: 1250 },
      { desc: "beekeeping", price: 220 },
    ],
  },
];
