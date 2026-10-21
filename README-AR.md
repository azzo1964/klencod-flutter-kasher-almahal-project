# كاشير المحل — نسخة Windows وAndroid

البيانات تُحفظ في ملف خارج البرنامج:
- Windows: `المستندات\KasherAlMahal\data.json` + نسخة يومية تلقائية في مجلد `backups` (آخر 30 يومًا).
- Android: `Documents/KasherAlMahal/data.json` (وإن منع النظام ذلك تُحفظ داخل التطبيق، ويظهر المكان الفعلي في الإعدادات).

## أسهل طريقة للحصول على التطبيقين (بدون تثبيت برامج)
1. أنشئ حسابًا مجانيًا في github.com ثم مستودعًا جديدًا (New repository).
2. ارفع كل محتويات هذا المجلد (Add file ← Upload files). إن لم يُرفع مجلد `.github` فأنشئ ملفًا بالمسار `.github/workflows/build.yml` وانسخ محتواه فيه.
3. افتح تبويب Actions ← build ← Run workflow، وانتظر 5–10 دقائق.
4. من صفحة التشغيل نزّل: `windows-exe` (برنامج Windows) و`android-apk` (تطبيق Android).

## على جهازك مباشرة
- Windows: ثبّت Node.js ثم `npm install` ثم `npm start` للتجربة، و`npx electron-builder --win` لإنشاء ملف exe.
- Android: ثبّت Android Studio ثم `npm install` و`npx cap add android` و`npx cap sync android` و`npx cap open android`.

## نقل بياناتك الحالية
في النسخة القديمة: الإعدادات ← تصدير نسخة. في التطبيق الجديد: الإعدادات ← استيراد.

## ملاحظات
- تثبيت APK يتطلب السماح بالتثبيت من مصدر غير معروف.
- الطباعة وحفظ PDF تعمل في Windows؛ في Android تحتاج إضافة لاحقًا.
- الإدخال الصوتي لا يعمل داخل تطبيق Android. قارئ الباركود الخارجي يعمل، والكاميرا تعتمد على دعم جهازك.
- مكتبة قراءة الباركود بالكاميرا تُحمَّل من الإنترنت، فبدون إنترنت قد لا تعمل الكاميرا على بعض الأجهزة.
