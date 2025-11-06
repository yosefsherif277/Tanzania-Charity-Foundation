# دليل الألوان المخصصة - مدرسة الزيات

## الألوان المتاحة

### الألوان الرئيسية (Primary Colors)

- `bg-primary` - الأزرق الأساسي (#2563eb)
- `bg-primary-dark` - أزرق داكن (#1d4ed8)
- `bg-primary-light` - أزرق فاتح (#3b82f6)
- `text-primary` - نص باللون الأزرق

### الألوان الثانوية (Secondary Colors)

- `bg-secondary` - الأخضر الزمردي (#059669)
- `bg-secondary-dark` - أخضر داكن (#047857)
- `bg-secondary-light` - أخضر فاتح (#10b981)
- `text-secondary` - نص باللون الأخضر

### الألوان المميزة (Accent Colors)

- `bg-accent` - البنفسجي (#7c3aed)
- `bg-accent-light` - بنفسجي فاتح (#8b5cf6)
- `text-accent` - نص باللون البنفسجي

### ألوان الحالة (Status Colors)

- `bg-success` - أخضر للنجاح (#10b981)
- `bg-warning` - برتقالي للتحذير (#f59e0b)
- `bg-info` - سماوي للمعلومات (#06b6d4)
- `bg-destructive` - أحمر للخطأ (#ef4444)
- `text-success`, `text-warning`, `text-info`, `text-destructive` - نصوص بألوان الحالة

## أمثلة على الاستخدام

### الخلفيات (Backgrounds)

```html
<div className="bg-primary">خلفية زرقاء</div>
<div className="bg-secondary">خلفية خضراء</div>
<div className="bg-success">خلفية خضراء</div>
```

### النصوص (Text Colors)

```html
<h1 className="text-primary">عنوان باللون الأزرق</h1>
<p className="text-secondary">نص باللون الأخضر</p>
<span className="text-success">رسالة نجاح</span>
```

### الأزرار (Buttons)

```html
<button className="bg-primary text-white hover:bg-primary-dark">
  زر أساسي
</button>
<button className="bg-secondary text-black hover:bg-secondary-dark">
  زر ثانوي
</button>
```

### الحدود (Borders)

```html
<div className="border border-primary">حدود زرقاء</div>
<div className="border-2 border-secondary">حدود خضراء سميكة</div>
```

## كيفية إضافة ألوان جديدة

لإضافة ألوان جديدة، قم بتعديل ملف `src/app/globals.css`:

1. أضف المتغير في قسم `:root`:

```css
:root {
  --new-color: #your-color-code;
}
```

2. أضف المتغير في قسم `@theme`:

```css
@theme inline {
  --color-new-color: var(--new-color);
}
```

3. استخدم اللون الجديد:

```html
<div className="bg-new-color">خلفية باللون الجديد</div>
<div className="text-new-color">نص باللون الجديد</div>
```

## ملاحظات مهمة

- جميع الألوان متوافقة مع معايير الوصول (Accessibility)
- الألوان تم اختيارها لتكون مناسبة للبيئة التعليمية الحديثة
- يمكن استخدام هذه الألوان مع جميع فئات Tailwind CSS (hover, focus, active, etc.)
