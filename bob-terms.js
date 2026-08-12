/** IBM Bob–only glossary: product, workflow, security, best practices. */
window.VIBE_CATEGORIES = {
  product: "מוצר ומצבים",
  commands: "פקודות Slash מובנות",
  config: "הגדרה והרחבה",
  workflow: "זרימת עבודה מומלצת",
  security: "אבטחה ובקרה",
  quality: "איכות ו־Review",
  antipatterns: "Anti-patterns",
};

window.VIBE_CATEGORY_ORDER = [
  "product",
  "commands",
  "config",
  "workflow",
  "security",
  "quality",
  "antipatterns",
];

window.VIBE_TERMS = [
  {
    id: "ibm-bob",
    category: "product",
    term: "IBM Bob",
    explanation:
      "סביבת פיתוח מבוססת AI של IBM שמלווה את מחזור הפיתוח: תכנון, כתיבה, בדיקות, תיעוד ומודרניזציה. Bob עובד כסוכן עם כלים, מצבים (Modes), Skills ו־MCP — לא רק כהשלמת קוד בצ'אט. קיימים Bob IDE ו־Bob Shell.",
    meaning:
      "הגישה הייחודית: מהירות עם בקרה. אתם מגדירים כוונה והקשר; Bob מבצע; אתם מאשרים Diff ובדיקות. אל תתייחסו אליו כ־autocomplete — תתייחסו אליו כשותף סוכני שדורש Guardrails.",
  },
  {
    id: "bob-ide",
    category: "product",
    term: "Bob IDE",
    explanation:
      "ממשק העבודה הגרפי של Bob בתוך ה־IDE: צ'אט סוכני, עריכת קבצים, Inline Diff, Modes, Skills ו־Literate Coding. רוב העבודה היומיומית על קוד קיים מתבצעת כאן מול ה־Workspace הפתוח.",
    meaning:
      "השתמשו ב־IDE כשאתם צריכים ראות מלאה לשינויים. סקרו כל Diff לפני Accept, והתאימו Mode לסוג המשימה. זה המקום לבנות הרגלי Human in the Loop.",
  },
  {
    id: "bob-shell",
    category: "product",
    term: "Bob Shell",
    explanation:
      "ממשק שורת פקודה של Bob לעבודה אינטראקטיבית, סקריפטים ואוטומציה גם מחוץ ל־IDE — כולל שילוב בצינורות CI/CD. משתף רעיונות כמו Slash Commands ומצבים, אך רץ בהקשר טרמינל ותיקיות מהימנות.",
    meaning:
      "מתאים לאוטומציה חוזרת ולסביבות שרת. הקפידו על Trusted Folders, הגבלת Auto-approve, וסקירת פקודות לפני הרצה. Shell = יכולת גבוהה וסיכון גבוה יותר.",
  },
  {
    id: "workspace-bob",
    category: "product",
    term: "Workspace",
    explanation:
      "שורש הפרויקט והקבצים ש־Bob רואה כסביבת עבודה פעילה. פעולות רבות מוגבלות ל־Workspace; קבצים מחוץ לשורש או חסומים ב־`.bobignore` אינם חלק מההקשר התפעולי הרגיל.",
    meaning:
      "פתחו תמיד את ה־Workspace הנכון לפני תחילת משימה. ודאו ש־`.bob/`, `.bobignore` וכללי הפרויקט נמצאים בשורש. Workspace שגוי = שינויים במקום הלא נכון.",
  },
  {
    id: "modes",
    category: "product",
    term: "Modes",
    explanation:
      "מצבי הפעלה שמגדירים את תפקיד Bob ואת סט הכלים/ההתנהגות — למשל Ask, Code, Debug או מצבים מותאמים. מעבר Mode משנה הקשר תפעולי, לא רק מוסיף טקסט לשיחה. מצבים מופיעים גם כ־Slash Commands.",
    meaning:
      "בחרו Mode לפי המטרה: שאלה בלי כתיבה, מימוש, או דיבאג. Mode שגוי גורם לכתיבה מיותרת או לחקירה בלי כלים. בדקו איזה Mode פעיל לפני בקשות מסוכנות.",
  },
  {
    id: "ask-mode",
    category: "product",
    term: "Ask Mode",
    explanation:
      "מצב שמיועד לשאלות, הסברים וחקירה בלי לבצע שינויי קוד משמעותיים. מתאים להבנת מערכת, השוואת גישות, או קבלת המלצה לפני תכנון. שומר על סיכון נמוך כשעדיין לא מוכנים לערוך.",
    meaning:
      "התחילו ב־Ask כשאינכם בטוחים מה לשנות. אחרי שהבנתם — עברו ל־Plan/Code. Anti-pattern: לבקש מימוש כבד בזמן שאתם עדיין בשיחת חקירה פתוחה.",
  },
  {
    id: "code-mode",
    category: "product",
    term: "Code Mode",
    explanation:
      "מצב מימוש שבו Bob יכול לערוך קבצים ולהריץ כלים כדי להשלים משימת פיתוח. כאן נוצרים Diffs שדורשים סקירה. מתאים אחרי שיש Scope ו־Acceptance Criteria ברורים.",
    meaning:
      "היכנסו ל־Code רק עם משימה ממוקדת. דרשו Minimal Change, עקבו אחרי Diff, והריצו Verification בסוף. אל תשאירו Code Mode פתוח למשימות חקירה ארוכות בלי גבול.",
  },
  {
    id: "debug-mode",
    category: "product",
    term: "Debug Mode",
    explanation:
      "מצב ממוקד באיתור תקלות: ניתוח שגיאות, לוגים, השערות ובדיקות. Bob אמור לקבל ראיות (stack trace, צעדי שחזור) ולא רק בקשה כללית \"תתקן\".",
    meaning:
      "העבירו שגיאה מלאה וצעדי שחזור. בקשו השערה אחת ותיקון אחד בכל איטרציה. הימנעו משינויים מרובים שמסתירים את הסיבה האמיתית.",
  },
  {
    id: "planning-mode",
    category: "product",
    term: "Planning Mode",
    explanation:
      "מצב/שלב שבו Bob מגבש הבנה, חוקר ומציע תוכנית לפני שינוי קוד. המטרה לייצר Spec/Plan שניתן לאשר או לתקן בזול. קריטי למשימות בינוניות ומעלה ולמודרניזציה.",
    meaning:
      "למשימות לא טריוויאליות — אל תדלגו על תכנון. אשרו את ה־Plan במפורש, ואז עברו למימוש. תיקון כיוון בתוכנית זול יותר מתיקון Diff ענק.",
  },
  {
    id: "advanced-mode",
    category: "product",
    term: "Advanced Mode",
    explanation:
      "מצב מתקדם שבו זמינים כלים רחבים יותר לזרימות מורכבות. Skills זמינים ב־Advanced Mode כדי לאפשר לסוכן להריץ מתכונים עם גישה מלאה יחסית לכלים.",
    meaning:
      "הפעילו Advanced כשצריך Skills או אוטומציה עמוקה, אבל שמרו אישורים ו־ignore. אל תשאירו הרשאות רחבות כברירת מחדל לכל משימה שגרתית.",
  },
  {
    id: "custom-modes",
    category: "product",
    term: "Custom Modes",
    explanation:
      "מצבים מותאמים (למשל ב־YAML) עם תפקיד, הוראות והגבלות כלים לצוות או לפרויקט — Mode ל־Review, Security או Modernization. ניתנים להגדרה גלובלית או פר־פרויקט ומופיעים כפקודות Mode.",
    meaning:
      "צרו Custom Mode לזרימות חוזרות במקום להדביק אותן הוראות בכל שיחה. שלבו עם Skills כשהזרימה ארוכה ומפורטת. תעדו לצוות מתי להשתמש בכל Mode.",
  },
  {
    id: "literate-coding",
    category: "product",
    term: "Literate Coding",
    explanation:
      "מצב שבו כותבים הוראות בשפה טבעית או פסאודו־קוד ישירות בקובץ המקור (מסומנות ויזואלית). ב־Generate, Bob ממיר לקוד ומציג Inline Diff לסקירה — בלי לקפוץ כל הזמן בין צ'אט לקובץ.",
    meaning:
      "שימושי כשאתם כבר בתוך הקובץ ויודעים איפה השינוי. כתבו בלוקים ממוקדים, סקרו Diff, ואז Accept. לא מחליף בדיקות — מקצר את מעגל הכתיבה.",
  },
  {
    id: "inline-diff",
    category: "product",
    term: "Inline Diff",
    explanation:
      "תצוגת Diff בתוך העורך שמציגה שינוי מוצע של Bob ליד הקוד הקיים. מאפשרת לקבל או לדחות שינויים אחרי ראייה בהקשר המלא של הקובץ — במיוחד ב־Literate Coding.",
    meaning:
      "Accept רק אחרי קריאת Diff בהקשר. חפשו שינוי מחוץ ל־Scope, מחיקות מפתיעות, וסטייה מסגנון מקומי. זה כלי הבקרה הוויזואלי המרכזי.",
  },
  {
    id: "agents-subagents",
    category: "product",
    term: "Agents & Sub-agents",
    explanation:
      "Bob יכול להפעיל סוכנים ממוקדים ותת־סוכנים עם הקשר וכלים משלהם למשימות מקבילות או ארוכות, ולהחזיר רק את מה שחשוב. זה חלק מהגישה הסוכנית של המוצר לפרויקטים גדולים.",
    meaning:
      "פרקו עבודה גדולה: מחקר / מימוש / בדיקה. בקשו סיכומים קצרים מה־Sub-agent במקום להעמיס הכול על החלון הראשי. שמרו Scope לכל סוכן.",
  },
  {
    id: "mcp-bob",
    category: "product",
    term: "MCP ב־Bob",
    explanation:
      "Model Context Protocol מאפשר לחבר את Bob לכלים ושירותים חיצוניים דרך ממשק אחיד — תיעוד, מעקב תקלות, מערכות ארגוניות ועוד. מרחיב את הסוכן מעבר לקבצים המקומיים.",
    meaning:
      "חברו רק שרתי MCP מהימנים עם הרשאות מינימליות. זכרו שתוכן חיצוני עלול לכלול Prompt Injection. סקרו אילו כלים באמת דרושים לצוות.",
  },
  {
    id: "bobalytics",
    category: "product",
    term: "Bobalytics",
    explanation:
      "שכבת אנליטיקה ב־Bob שמספקת תובנות על תרומת הכלי לתהליך הפיתוח: השפעה על המאגר, מעקב שימוש/Bobcoin, ואימוץ צוותי בארגון.",
    meaning:
      "השתמשו בנתונים כדי לשפר אימוץ ואיכות — לא רק כדי \"לראות שימוש\". מדדו גם PR quality ובדיקות, לא רק מספר סשנים.",
  },
  {
    id: "modernization-bob",
    category: "product",
    term: "Application Modernization",
    explanation:
      "חבילות ומצבים ייעודיים ב־Bob לשדרוג וחידוש אפליקציות קיימות (למשל Java enterprise, מסלולי מיגרציה). משלבים כללים, Skills וזרימות ייעודיות עם בקרה אנושית — לא רק יצירת קוד מאפס.",
    meaning:
      "מודרניזציה = Plan + בדיקות רגרסיה + Source of Truth. עבדו ב־Branch, עם Checkpoints ושערי איכות. אל תריצו שדרוג רחב בלי Eval של תרחישים קריטיים.",
  },
  {
    id: "bob-folder",
    category: "config",
    term: ".bob/",
    explanation:
      "תיקיית תצורה ברמת הפרויקט להרחבות Bob: `skills/`, `commands/` ועוד. הופכת התנהגות מותאמת לחלק מהמאגר שניתן לשתף. קיימת גם תצורה גלובלית ב־`~/.bob/`.",
    meaning:
      "שמרו ב־`.bob/` רק מה שרלוונטי לצוות ולפרויקט. גרסו Skills ופקודות יחד עם הקוד. אל תשימו שם Secrets.",
  },
  {
    id: "skill",
    category: "config",
    term: "Skill / SKILL.md",
    explanation:
      "מתכון עבודה לשימוש חוזר שמלמד את Bob זרימה מתמחה. מגדירים תיקייה תחת `.bob/skills/` או `~/.bob/skills/` עם `SKILL.md` (YAML front matter + הוראות) וקבצי עזר. Skills זמינים ב־Advanced Mode, נטענים לפי הצורך, ולרוב דורשים אישור הפעלה.",
    meaning:
      "צרו Skill לריוויו, יצירת שירות, בדיקות או מודרניזציה. תיאור מדויק ב־front matter קובע מתי Bob יפעיל אותו. שמרו `SKILL.md` ממוקד והעבירו פירוט לקבצי ייחוס. בדקו ב־Settings שה־Skill נטען.",
  },
  {
    id: "skill-description",
    category: "config",
    term: "Skill Description",
    explanation:
      "שדה החובה ב־front matter שעוזר ל־Bob להחליט מתי להפעיל Skill. בלי description טוב ה־Skill עלול להיות מיותר או לא להתגלות. תיאור טוב מציין מתי להשתמש — לא רק שם כללי.",
    meaning:
      "כתבו: \"Review code for security issues and OWASP risks\" במקום \"review skill\". תיאור מעורפל = הפעלה בזמן הלא נכון או אי־שימוש.",
  },
  {
    id: "slash-commands",
    category: "config",
    term: "Slash Commands",
    explanation:
      "פקודות שמתחילות ב־`/` ומפעילות זרימות מוכנות או מעבר Mode. פקודות מותאמות הן Markdown ב־`.bob/commands/` או `~/.bob/commands/`; שם הקובץ = שם הפקודה. ניתן להוסיף תיאור ו־argument hints.",
    meaning:
      "הפכו פרומפטים צוותיים חוזרים ל־`/review`, `/test`, `/secure`. זכרו: פקודות Mode משנות הקשר תפעולי ולא רק מדביקות טקסט, ולא ניתן לדרוס אותן בפקודה מותאמת באותו שם.",
  },
  {
    id: "frontmatter",
    category: "config",
    term: "YAML Front Matter",
    explanation:
      "בלוק מטא־דאטה בראש Markdown (בין `---`) ל־Skills ופקודות: name, description, argument-hint ועוד. מאפשר ל־Bob להציג, לסנן ולהפעיל נכון את ההרחבות.",
    meaning:
      "השקיעו בתיאורים וב־hints — זה UX של הצוות מול `/`. Front matter גרוע = תפריט מבולגן והפעלות שגויות.",
  },
  {
    id: "bobignore",
    category: "config",
    term: ".bobignore",
    explanation:
      "קובץ בשורש ה־Workspace שחוסם גישת Bob לקבצים/תיקיות דרך הכלים. תחביר כמו `.gitignore`. נטען מחדש אוטומטית; הקובץ עצמו תמיד מחוץ להישג יד של Bob. אינו sandbox מלא, וחלק מפעולות כתיבה עלולות לעקוף.",
    meaning:
      "צעד אבטחה ראשון בכל פרויקט Bob: חסמו Secrets, build artifacts וקבצים רגישים. אל תבלבלו עם `.gitignore` — אחד לגרסאות, אחד להקשר AI. אמתו שהחסימה עובדת בפועל.",
  },
  {
    id: "gitignore-vs-bobignore",
    category: "config",
    term: ".gitignore מול .bobignore",
    explanation:
      "`.gitignore` קובע מה לא נכנס ל־Git. `.bobignore` קובע למה Bob לא ייגש. קובץ יכול להיות במאגר ועדיין חסום ל־Bob, ולהפך. שניהם משלימים זה את זה באבטחת סודות ורעש.",
    meaning:
      "סודות: חסמו בשניהם. ארטיפקטים כבדים: לעיתים די ב־bobignore כדי לא להציף Context גם אם כבר ב־gitignore. בדקו מדיניות צוותית מפורשת.",
  },
  {
    id: "rules-bob",
    category: "config",
    term: "Rules / Project Instructions",
    explanation:
      "כללים קבועים שמנחים איך Bob עובד במאגר: סטנדרטי קוד, מבנה, מגבלות, שפה ו־Source of Truth. חוסכים חזרה על אותן הוראות בכל Prompt ומייצרים עקביות בין סשנים.",
    meaning:
      "כתבו כללים קצרים וחדים: חובה / אסור / איפה האמת. כללים ישנים ומעורפלים מזיקים. עדכנו אותם עם הפרויקט; השלימו עם Skills לזרימות מתמחות.",
  },
  {
    id: "agents-md",
    category: "config",
    term: "AGENTS.md",
    explanation:
      "קובץ הוראות קבוע לסוכנים במאגר (דפוס נפוץ באקוסיסטם AI) — \"מדריך בית\" יציב: פקודות, מבנה, מגבלות. משלים Rules ו־Skills כמקור הנחיה קריא לצוות ולסוכן.",
    meaning:
      "החזיקו קובץ חי בשורש או בתצורה. כתבו מה באמת חשוב. Rules להתנהגות כללית; Skills למתכונים; AGENTS.md כמפת דרכים מהירה.",
  },
  {
    id: "mentions",
    category: "config",
    term: "@ Mentions",
    explanation:
      "אזכור מפורש של קבצים/סמלים בשיחה כדי להכניס אותם להקשר. ב־Bob, אזכור יכול לאפשר התייחסות לקובץ גם במדיניות ignore — כי המשתמש בחר במפורש לשתף.",
    meaning:
      "עדיף לציין במדויק מה רלוונטי. אל תעקפו `.bobignore` בקלות ראש עבור Secrets. @ הוא החלטת אמון שלכם.",
  },
  {
    id: "settings-skills-tab",
    category: "config",
    term: "Skills Settings Tab",
    explanation:
      "מסך ב־Bob Settings לניהול Skills: אילו Skills נטענים, מהיכן (פרויקט/גלובלי), והאם הם מתגלים כראוי. עוזר לאבחן Skills \"שלא עובדים\" בגלל מיקום או תיאור חסר.",
    meaning:
      "אחרי הוספת Skill — בדקו שהוא מופיע בטאב. אם לא — בדקו נתיב, `SKILL.md`, ו־description. אל תניחו שהקובץ במאגר אומר שהמערכת קלטה אותו.",
  },
  {
    id: "plan-first",
    category: "workflow",
    term: "Plan לפני Code",
    explanation:
      "Best practice מרכזי ב־Bob: למשימות לא טריוויאליות קודם חקירה ותוכנית, ורק אחרי אישור — עריכה. מפחית Scope creep, הזיות ו־Diff ענק שאי אפשר לסקור.",
    meaning:
      "בקשו Plan עם רשימת קבצים, סיכונים ו־Acceptance Criteria. אשרו או תקנו, ואז מימוש. אם Bob מתחיל לכתוב מוקדם מדי — עצרו והחזירו לתכנון.",
  },
  {
    id: "small-tasks",
    category: "workflow",
    term: "משימות קטנות וממוקדות",
    explanation:
      "פירוק עבודה ליחידות שניתן לאמת: באג אחד, מסך אחד, חוזה אחד. משימות ענק מעמיסות Context ומגדילות סיכון לכישלון שקט. מתאים במיוחד באימוץ ראשוני של Bob.",
    meaning:
      "העדיפו חמישה סשנים קצרים על סשן אחד של \"תעשה הכול\". כל משימה עם Scope וקריטריון סיום. זה גם מלמד את הצוות איך להנחות סוכן.",
  },
  {
    id: "minimal-change-bob",
    category: "workflow",
    term: "Minimal Change",
    explanation:
      "עקרון: השינוי הקטן ביותר שמשיג את המטרה — בלי Refactor נלווה ובלי \"שיפורי סגנון\". ב־Bob חשוב לציין זאת ב־Prompt וב־Rules כי סוכנים נוטים להרחיב.",
    meaning:
      "כתבו במפורש: \"רק הקבצים האלה, בלי ניקוי\". אם ה־Diff מתרחב — עצרו. שינוי קטן = Review קל, Commit ברור, שחזור פשוט.",
  },
  {
    id: "iterate",
    category: "workflow",
    term: "איטרציות קצרות",
    explanation:
      "מחזור: בקשה → Diff → בדיקה → משוב → שיפור. Vibe Coding עם Bob אינו Prompt אחד מושלם. איטרציה קצרה זולה יותר מתיקון גדול בסוף.",
    meaning:
      "אחרי כל שינוי משמעותי — Verification. אל תצברו עשרה שינויים לפני הרצה ראשונה. תנו משוב מדויק על מה לשמור ומה לתקן.",
  },
  {
    id: "ground-with-evidence",
    category: "workflow",
    term: "Grounding בראיות",
    explanation:
      "עיגון העבודה של Bob בקוד אמיתי, לוגים, בדיקות ותיעוד — לא בזיכרון כללי של המודל. Tool Calls וקריאת קבצים הם חלק מהזרימה, לא אופציה.",
    meaning:
      "צרפו stack trace, ציינו קבצים ב־@, בקשו לקרוא לפני לנחש. אם התשובה לא מפנה לראיה — בקשו Grounding מחדש.",
  },
  {
    id: "acceptance-first",
    category: "workflow",
    term: "Acceptance Criteria קודם",
    explanation:
      "הגדרת תנאי הצלחה לפני מימוש: מה חייב לעבוד, מה לא לשבור, ואיך בודקים. הופך את סוף המשימה לאובייקטיבי ומכוון את Bob.",
    meaning:
      "כתבו 3–5 קריטריונים ברורים בתוכנית. בסוף בקשו מ־Bob לאמת מולם. בלי Criteria אתם מתווכחים על תחושות.",
  },
  {
    id: "branch-workflow",
    category: "workflow",
    term: "Branch לכל משימת Bob",
    explanation:
      "עבודה על ענף ייעודי מבודדת שינויי סוכן מה־main ומקלה על PR ו־Review. רשת ביטחון כשהסוכן מתפזר או כשצריך לזרוק ניסוי.",
    meaning:
      "פתחו Branch לפני סשן משמעותי. קומיטים קטנים לאורך הדרך. אל תתנו ל־Bob לרוץ ישירות על main בלי סיבה חזקה.",
  },
  {
    id: "review-every-diff",
    category: "workflow",
    term: "Review לכל Diff",
    explanation:
      "כל שינוי ש־Bob מציע צריך קריאה אנושית לפני Accept/מיזוג. Diff הוא נקודת הבקרה המרכזית בגישת Bob — לא אחריthought של הצ'אט.",
    meaning:
      "חפשו Scope creep, מחיקות, Secrets, וטיפול שגוי בשגיאות. אם אינכם מבינים שורה — אל תאשרו. Ask Mode יכול לעזור להסביר לפני Accept.",
  },
  {
    id: "close-with-verification",
    category: "workflow",
    term: "סגירה עם Verification",
    explanation:
      "המשימה נגמרת רק אחרי אימות: build, tests, בדיקה ידנית או Checklist מול Acceptance Criteria. יצירת קוד אינה סיום.",
    meaning:
      "בקשו מ־Bob להריץ בדיקות ולדווח תוצאות. תעדו מה נבדק. PR בלי Verification הוא Anti-pattern.",
  },
  {
    id: "team-skills",
    category: "workflow",
    term: "Skills ופקודות ברמת צוות",
    explanation:
      "סטנדרטיזציה של זרימות באמצעות Skills ו־Slash Commands במאגר. כולם מקבלים אותה גישה לריוויו, בדיקות ותיעוד — במקום פרומפטים אישיים מפוזרים.",
    meaning:
      "העלו Skills לפרויקט, תעדו מתי להשתמש, ושפרו לפי תוצאות אמיתיות. התחילו מ־2–3 Skills חזקים, לא מעשרות חצי־אפויים.",
  },
  {
    id: "context-discipline",
    category: "workflow",
    term: "משמעת Context",
    explanation:
      "בחירה מודעת מה נכנס להקשר: קבצים רלוונטיים, כללים, ראיות — בלי Token Maximizing. `.bobignore`, @ mentions ו־Skills הם כלים למשמעת הזו.",
    meaning:
      "פחות רעש = יותר דיוק. סננו לוגים, אל תדביקו ריפו שלם, והעדיפו Source of Truth אחד ברור לכל משימה.",
  },
  {
    id: "human-in-loop-bob",
    category: "security",
    term: "Human in the Loop",
    explanation:
      "עקרון ליבה ב־Bob: אדם מאשר, עוצר ומבין בנקודות חשובות. האחריות על הקוד נשארת אצל המפתח גם כשהסוכן כתב הכול. ממומש דרך Modes, Diffs ואישורי כלים.",
    meaning:
      "אתם האחראים ב־PR. קראו, הבינו, בדקו. אוטומציה בלי בקרה אינה בשלה לייצור ברוב הארגונים.",
  },
  {
    id: "approval-gate-bob",
    category: "security",
    term: "Approval Gate",
    explanation:
      "נקודה שבה Bob חייב אישור לפני פעולה: שינוי רחב, מחיקה, פקודה מסוכנת, או הפעלת Skill. שומר על שליטה גם ב־Advanced Mode.",
    meaning:
      "הגדירו מראש מה דורש שער. אל תסמכו על \"זהירות טבעית\" של המודל. Gate טוב מונע תאונות יקרות.",
  },
  {
    id: "auto-approve",
    category: "security",
    term: "Auto-approve",
    explanation:
      "הגדרה שמאפשרת ל־Bob להריץ פעולות/Skills בלי אישור בכל פעם. מאיץ דמואים ופרוטוטיפים, אך מסיר שכבת בקרה. בתיעוד האבטחה מודגש הסיכון שבאישור אוטומטי רחב.",
    meaning:
      "על קוד קיים וסביבות רגישות — העדיפו אישור ידני. Auto-approve במשורה ובמודע. שלבו עם `.bobignore` ו־Trusted Folders.",
  },
  {
    id: "trusted-folders",
    category: "security",
    term: "Trusted Folders",
    explanation:
      "מנגנון (במיוחד ב־Bob Shell) שמגדיר אילו תיקיות נחשבות מהימנות לפני טעינת תצורות והרצת פעולות — הגנה מפני פרויקטים/הגדרות לא מוכרים.",
    meaning:
      "אל תסמנו Trusted בלי לבדוק תוכן. בפרויקט ממקור לא מוכר — סקירה ידנית קודם. זה שכבת אמון לפני ignore.",
  },
  {
    id: "secrets-bob",
    category: "security",
    term: "Secrets ב־Bob",
    explanation:
      "מפתחות, סיסמאות וטוקנים אסור לחשוף בצ'אט, בקומיט או בלוגים. יש לחסום קבצי `.env` ב־`.gitignore` וב־`.bobignore`, ולהשתמש במנהל סודות/משתני סביבה.",
    meaning:
      "לעולם אל תבקשו מ־Bob להדפיס Secret. אם נחשף — סובבו מפתח. בקשו הפניות לסביבה, לא ערכים אמיתיים בקוד.",
  },
  {
    id: "guardrails-bob",
    category: "security",
    term: "Guardrails",
    explanation:
      "מכלול מגבלות: Modes, approvals, `.bobignore`, Trusted Folders, Rules והרשאות MCP. לא מחליפים שיקול דעת, אך מצמצמים נזק מתאונות או מהתנהגות לא רצויה.",
    meaning:
      "הגדירו Guardrails ביום הראשון לאימוץ Bob, לא אחרי תקרית. התחילו מחסימת סודות ואישור פקודות. זכרו: ignore ≠ sandbox מלא.",
  },
  {
    id: "least-privilege",
    category: "security",
    term: "Least Privilege לסוכן",
    explanation:
      "הענקת ההרשאה המינימלית ש־Bob צריך למשימה: כלים, תיקיות, MCP ו־Auto-approve. תואם Zero Trust — אין אמון מובנה רק כי זה \"בתוך הארגון\".",
    meaning:
      "למשימת UI לא צריך גישה ל־secrets או ל־prod scripts. צמצמו, אשרו, ואז הרחיבו רק אם חייבים. הרשאה רחבה \"לנוחות\" היא Anti-pattern.",
  },
  {
    id: "prompt-injection-bob",
    category: "security",
    term: "Prompt Injection מול Bob",
    explanation:
      "סיכון כשסוכן קורא קבצים, אתרים או פלט MCP שמכילים הוראות זדוניות שמנסות לעקוף מדיניות. הפרדה בין הוראות מהימנות לתוכן לא מהימן היא קריטית.",
    meaning:
      "חשדו בבקשות מוזרות מתוך תוכן חיצוני. הגבילו כלים ו־Auto-approve. אל תתנו לתוכן שנקרא להפוך להוראת־על על הפרויקט.",
  },
  {
    id: "bobignore-limits",
    category: "security",
    term: "מגבלות .bobignore",
    explanation:
      "לפי תיעוד Bob: החסימה חלה על Workspace; אינה sandbox מערכת; הגנת execute_command מוגבלת; וחלק מכלי עריכה עלולים לעקוף בכתיבה הסופית. לכן זו שכבה חשובה — לא יחידה.",
    meaning:
      "אל תבנו אבטחה רק על ignore. שלבו Review, approvals, הפרדת סביבות וניהול Secrets. בדקו התנהגות בפועל אחרי עדכוני מוצר.",
  },
  {
    id: "zero-trust-bob",
    category: "security",
    term: "Zero Trust עם Bob",
    explanation:
      "גישה: אל תסמכו אוטומטית על משתמש, רכיב או סוכן. כל גישה דורשת אימות, הרשאה מינימלית ובקרה. ב־Bob: Trusted Folders, approvals, ignore, וסקירת Diff.",
    meaning:
      "גם כש־Bob \"בטוח בעצמו\" — אמתו. אין קיצורי דרך לפרודקשן. Zero Trust הוא תרבות צוותית, לא רק הגדרה אחת.",
  },
  {
    id: "diff-as-control",
    category: "quality",
    term: "Diff כמנגנון בקרה",
    explanation:
      "בגישת Bob, Diff הוא לא רק תצוגה — הוא שערי הבקרה העיקרי לפני Accept. קריאה שיטתית של Diff מחליפה אמון עיוור בניסוח משכנע בצ'אט.",
    meaning:
      "פיתחו צ'ק־ליסט Diff: Scope, אבטחה, שגיאות, בדיקות, סגנון. אפשר Skill ל־`/review` — אבל האחריות נשארת אצלכם.",
  },
  {
    id: "pr-required",
    category: "quality",
    term: "PR חובה לקוד מ־Bob",
    explanation:
      "כל שינוי משמעותי שנוצר/שונה עם Bob צריך Pull Request עם תיאור, Criteria ותוצאות Verification. נקודת בקרה ארגונית זהה לקוד אנושי — ולעיתים קפדנית יותר.",
    meaning:
      "אל תמזגו כי \"עבד אצלי בסשן\". תעדו מה Bob שינה ולמה. Reviewer אנושי הוא חלק מהמוצר, לא מטרד.",
  },
  {
    id: "tests-with-bob",
    category: "quality",
    term: "בדיקות כחלק מהמשימה",
    explanation:
      "בקשו מ־Bob לכתוב/לעדכן ולהריץ בדיקות יחד עם המימוש — לא כתוספת אופציונלית. קוד AI שנראה נכון עדיין יכול להיות שבור.",
    meaning:
      "Unit + Regression לפי הסיכון. אם אין בדיקות קיימות — הוסיפו כיסוי מינימלי סביב השינוי לפני Refactor נוסף.",
  },
  {
    id: "quality-gates-bob",
    category: "quality",
    term: "שערי איכות",
    explanation:
      "שערי CI/תהליך שחוסמים מיזוג בלי build ירוק, בדיקות, lint או סריקות אבטחה. חלים על קוד Bob כמו על כל קוד אחר — ואף חשובים יותר בגלל קצב השינוי.",
    meaning:
      "אל תעקפו שערים \"רק הפעם\". כשלון שער = ראיה לתיקון עם Bob ועם לוגים. Shift Left: הריצו מקומית לפני ה־PR.",
  },
  {
    id: "security-review-skill",
    category: "quality",
    term: "Security Review Skill",
    explanation:
      "Skill ייעודי שבודק סיכונים (OWASP, Secrets, הרשאות, קלט לא מסונן) ומדווח לפי חומרה. דוגמה קלאסית לערך של Skills ב־Bob מעבר לכתיבת קוד.",
    meaning:
      "הריצו `/security-review` לפני מיזוג פיצ'רים רגישים. אמתו ממצאים ידנית — Skill מסייע, לא מחליף מומחה אבטחה.",
  },
  {
    id: "eval-skills",
    category: "quality",
    term: "Eval ל־Skills ו־Rules",
    explanation:
      "בדיקה שיטתית האם Skill/Rule/Mode באמת משפר תוצאות מול תרחישי מבחן קבועים. מונע תחושת בטן מסשן בודד.",
    meaning:
      "לכל Skill צוותי הגדירו 3–5 תרחישי Eval. מדדו הצלחה לפי Criteria. שפרו description והוראות לפי כשלים חוזרים.",
  },
  {
    id: "source-of-truth-bob",
    category: "quality",
    term: "Source of Truth",
    explanation:
      "המקור הסמכותי למשימה: קוד, ADR, מפרט, סכמת API או מדיניות אבטחה. כשיש סתירה בין הצ'אט למקור — המקור מנצח.",
    meaning:
      "ציינו במפורש מהו Source of Truth בכל משימה עם Bob. עדכנו תיעוד ישן או סמנו שאינו סמכותי. בלי מקור ברור — הסוכן ינחש.",
  },
  {
    id: "adr-bob",
    category: "quality",
    term: "ADR אחרי החלטות עם Bob",
    explanation:
      "Architecture Decision Record קצר שמתעד הקשר, חלופות והחלטה. מונע אובדן ידע מסשן צ'אט ומשמש Source of Truth לסשנים הבאים.",
    meaning:
      "אחרי החלטת ארכיטקטורה — כתבו ADR במאגר והפנו אליו. אל תסמכו על היסטוריית שיחה כזיכרון צוותי.",
  },
  {
    id: "explainability",
    category: "quality",
    term: "Explainability",
    explanation:
      "חלק מגישת Bob: לא רק לייצר קוד מהר, אלא להבין מה השתנה ולמה. Literate Coding, Diffs ומצבי Ask/Plan תומכים בשקיפות מול המפתח.",
    meaning:
      "אם אינכם יכולים להסביר שינוי ב־PR — הוא לא מוכן. בקשו מ־Bob סיכום לשינוי בקשות אנושיות, ואמתו מול Diff.",
  },
  {
    id: "anti-blind-accept",
    category: "antipatterns",
    term: "Accept עיוור",
    explanation:
      "Anti-pattern: אישור כל Diff כי \"נראה בסדר\" או כי הסשן היה ארוך. מבטל את יתרון ה־Human in the Loop של Bob ומייבא באגים/סיכונים בשקט.",
    meaning:
      "עצרו. קראו. שאלו. אם עייפים — אל תאשרו עכשיו. עדיף Commit קטן מובן מאשר Accept גדול עיוור.",
  },
  {
    id: "anti-yolo",
    category: "antipatterns",
    term: "YOLO / Unattended",
    explanation:
      "הרצת Bob עם Auto-approve רחב בלי השגחה — מהיר לדמו, מסוכן למאגר אמיתי. מנוגד לגישת הבקרה של המוצר.",
    meaning:
      "שמרו YOLO לפרוטוטיפ מבודד. על קוד צוותי החזירו approvals, Branch ו־Diff. מהירות בלי בקרה עולה ב־incident.",
  },
  {
    id: "anti-vague-prompt",
    category: "antipatterns",
    term: "Prompt מעורפל בלי Scope",
    explanation:
      "בקשות כמו \"תשפר את האפליקציה\" בלי גבולות, Criteria או קבצים. מובילות להרחבת Scope, שינויים לא רלוונטיים ו־Review בלתי אפשרי.",
    meaning:
      "תמיד: מטרה, Scope, אילוצים, Criteria. אם אינכם יודעים — Ask/Plan קודם. מעורפלות היא דלק להזיות.",
  },
  {
    id: "anti-token-max",
    category: "antipatterns",
    term: "Token Maximizing",
    explanation:
      "דחיפת כמה שיותר קבצים/לוגים ל־Context מתוך אמונה שיותר מידע = דיוק. בפועל: רעש, עלות, ואיבוד פרטים חשובים.",
    meaning:
      "בחרו רלוונטיות. השתמשו ב־@, ignore ו־Skills. מדד הצלחה אינו מספר Tokens אלא איכות Diff ובדיקות.",
  },
  {
    id: "anti-skip-plan",
    category: "antipatterns",
    term: "דילוג על Plan במשימה גדולה",
    explanation:
      "מעבר ישיר לכתיבה במודרניזציה או שינוי רוחבי בלי תוכנית מאושרת. מייצר Diff ענק, סיכונים נסתרים ותחושת התקדמות כוזבת.",
    meaning:
      "Rule צוותי: מעל סף מסוים — Plan חובה לאישור. תיקון כיוון בנייר זול מתיקון ב־main.",
  },
  {
    id: "anti-secret-in-chat",
    category: "antipatterns",
    term: "Secret בצ'אט / בקוד",
    explanation:
      "הדבקת מפתחות ל־Prompt, קומיט של `.env`, או בקשה מ־Bob \"להדפיס את הסיסמה\". דליפה קשה להכלה ונוגדת כל Guardrail.",
    meaning:
      "חסמו, סובבו, למדו. Skills ו־Rules צריכים לאסור במפורש הטמעת Secrets. זה קו אדום, לא המלצה רכה.",
  },
  {
    id: "anti-bypass-gates",
    category: "antipatterns",
    term: "עקיפת שערי איכות",
    explanation:
      "מיזוג למרות CI אדום, דילוג על Review, או כיבוי בדיקות \"רק כדי לעבור\". מבטל את ערך האימות מול פלט AI.",
    meaning:
      "שער אדום = עבודה לא גמורה. תנו ל־Bob לתקן מול הלוג. עקיפה חוזרת היא סימן לכשל תהליך, לא לכשל נקודתי.",
  },
  {
    id: "anti-one-huge-commit",
    category: "antipatterns",
    term: "קומיט ענק אחד מסוכן",
    explanation:
      "צבירת כל שינויי הסשן לקומיט/PR יחיד שאי אפשר לסקור. מאבד את יתרון האיטרציות ו־Checkpoints.",
    meaning:
      "פרקו ליחידות לוגיות. בקשו מ־Bob קומיטים ממוקדים או עשו זאת ידנית אחרי Diffים קטנים.",
  },
  {
    id: "anti-wrong-mode",
    category: "antipatterns",
    term: "Mode לא מתאים",
    explanation:
      "למשל מימוש כבד ב־Ask, או חקירה ארוכה ב־Code עם כתיבות מיותרות. Mode שגוי מייצר תוצאות ותחושת שליטה מטעה.",
    meaning:
      "בדקו Mode לפני כל בקשה גדולה. התאימו Ask → Plan → Code → Debug. לימדו את הצוות את המעברים.",
  },
  {
    id: "anti-ignore-as-sandbox",
    category: "antipatterns",
    term: "להתייחס ל־.bobignore כ־Sandbox",
    explanation:
      "הנחה שגויה ש־`.bobignore` חוסם הכול ברמת מערכת. לפי התיעוד יש מגבלות ועיקופים אפשריים — זו שכבה, לא בידוד מלא.",
    meaning:
      "השתמשו ב־ignore + approvals + הפרדת סביבות + Review. אל תבנו מדיניות אבטחה על קובץ אחד בלבד.",
  },
  {
    id: "bob-unique-approach",
    category: "workflow",
    term: "הגישה הייחודית של Bob",
    explanation:
      "שילוב של סוכנות, Modes, Skills, Literate Coding, MCP ומודרניזציה ארגונית — עם דגש על תכנון, Explainability ו־Human in the Loop. מעבר ל־\"vibe\" מהיר: תהליך מבוקר לאורך ה־SDLC.",
    meaning:
      "אמצו את המחסנית המלאה: Rules + Skills + ignore + Plan + Diff + Gates. Bob מצטיין כשהצוות בונה סביבו משמעת, לא כשמשתמשים בו כקיצור דרך חד־פעמי.",
  },
  {
    id: "scaffold-with-standards",
    category: "workflow",
    term: "Scaffolding לפי סטנדרט",
    explanation:
      "יצירת שלד פרויקט/רכיב עם Bob לפי תבניות הצוות (Skill או דוגמאות), לא לפי סגנון אקראי של המודל. מונע גיוון יתר במבנה המאגר.",
    meaning:
      "לפני \"תשלד שירות\" — הפנו ל־Skill/דוגמה קיימת. סקרו את השלד לפני מילוי לוגיקה. סטנדרט > מהירות רגעית.",
  },
  {
    id: "reverse-eng-bob",
    category: "workflow",
    term: "Reverse Engineering עם Bob",
    explanation:
      "שימוש ב־Ask/Plan לקריאת קוד, מיפוי תלויות והסבר זרימות לפני שינוי במערכת קיימת. חייב Grounding בקבצים אמיתיים — לא בתיאור כללי.",
    meaning:
      "בקשו מפה + הפניות לקבצים, אמתו בהרצה, ורק אז שנו. Reverse Engineering איכותי הוא תנאי ל־Minimal Change נכון.",
  },
  {
    id: "shift-left-bob",
    category: "quality",
    term: "Shift Left עם Bob",
    explanation:
      "הזזת בדיקות, אבטחה ו־Review לשלבים מוקדמים: Criteria, Diff, בדיקות מקומיות ו־Skills — לפני CI ופרודקשן. מתאים לקצב הגבוה של שינויי AI.",
    meaning:
      "אל תחכו לבילד אדום. אמתו אחרי כל איטרציה משמעותית. Shift Left הוא הדרך היחידה לשלוט במהירות של Bob.",
  },
  {
    id: "slash-menu",
    category: "commands",
    term: "תפריט Slash (/)",
    explanation:
      "הקלדת `/` בצ'אט של Bob IDE או Bob Shell פותחת תפריט מאוחד של כל הפקודות הזמינות: פקודות מובנות, פקודות Mode, ופקודות מותאמות מ־`.bob/commands/`. יש Autocomplete, חיפוש מטושטש ותצוגת תיאור; לפקודות Mode יש סימון ויזואלי נפרד.",
    meaning:
      "התחילו תמיד ב־`/` כשאתם מחפשים פעולה סטנדרטית במקום להקליד פרומפט חופשי. למדו את הפקודות המובנות לפני שיוצרים עשרות פקודות מותאמות. Argument hints מופיעים באפור ליד פקודות שמצפות לקלט.",
  },
  {
    id: "cmd-init",
    category: "commands",
    term: "/init",
    explanation:
      "פקודה מובנית שמאתחלת הקשר פרויקט ל־Bob: סורקת את המאגר ומייצרת `AGENTS.md` בשורש, ובנוסף קבצי הקשר לפי Mode תחת `.bob/` (למשל ל־Ask/Plan/Agent). כך Bob מקבל Context עקבי בכל שיחה חדשה בלי לקרוא מחדש את כל הריפו בכל פעם. מומלץ להריץ מחדש אחרי שינויי מבנה גדולים.",
    meaning:
      "הרצו `/init` בתחילת עבודה על פרויקט (או אחרי שינוי ארכיטקטורה משמעותי). סקרו ועדכנו ידנית את `AGENTS.md` בכללים עסקיים ש־Bob לא יגלה לבד. בלי `/init`, כל סשן מתחיל כמעט מאפס — זה יקר ולא מדויק.",
  },
  {
    id: "cmd-review",
    category: "commands",
    term: "/review",
    explanation:
      "פקודה מובנית לסקירת קוד עם ניתוח מקיף: באגים, אבטחה, ביצועים ועקביות סגנון. וריאציות נפוצות: `/review` לשינויים מקומיים שלא קומיטו; `/review <branch>` להשוואה מול ענף; ו־`--issue-coverage` לאימות מול GitHub Issue. ניתן גם לפתוח את Review Panel מהממשק.",
    meaning:
      "הריצו `/review` לפני Commit/PR — במיוחד אחרי סשן Code ארוך. התייחסו לממצאים כרשימת עבודה, לא כחותמת גומי. שלבו עם Review אנושי ושערי CI; `/review` מאיץ Shift Left אבל לא מחליף אחריות.",
  },
  {
    id: "cmd-create-pr",
    category: "commands",
    term: "/create-pr",
    explanation:
      "פקודה מובנית שיוצרת Pull Request עם תיאור שנוצר על ידי AI על בסיס ה־Diff בין ענפים. מטרתה לייצר תיאור מקיף של השינויים ולחסוך כתיבה ידנית של סיכום ה־PR.",
    meaning:
      "השתמשו אחרי `/review` ובדיקות ירוקות. ערכו את תיאור ה־PR לפני הפרסום — הוסיפו Criteria, סיכונים וקישורי Issue. אל תפרסמו PR עם תיאור גנרי בלי לוודא שהוא משקף את ה־Scope האמיתי.",
  },
  {
    id: "cmd-mode",
    category: "commands",
    term: "/mode <mode_slug>",
    explanation:
      "פקודת מעבר Mode מובנית שמשנה את ההקשר התפעולי של Bob (לא רק מדביקה טקסט). לדוגמה `/mode code` או `/mode ask`. ה־argument hint `<mode_slug>` מציין שיש להזין שם מצב כמו code או debug. פקודות Mode מופיעות בתפריט `/` עם סימון נפרד ולא ניתנות לדריסה על ידי קבצי `.bob/commands/` באותו שם.",
    meaning:
      "החליפו Mode במפורש לפני משימה גדולה במקום לערבב חקירה וכתיבה. אם יש Custom Mode עם slug מסוים — הוא יופיע גם כפקודת Mode. בדקו תמיד באיזה Mode אתם אחרי המעבר.",
  },
  {
    id: "cmd-ask",
    category: "commands",
    term: "/ask",
    explanation:
      "פקודת Mode מובנית למעבר ל־Ask Mode — שאלות, הסברים וחקירה עם סיכון נמוך לשינויי קוד. מופיעה בתפריט ה־Slash לצד פקודות Mode אחרות ומשנה את סט ההתנהגות/כלים של הסשן.",
    meaning:
      "התחילו ב־`/ask` כשעדיין מגדירים בעיה או לומדים מערכת. אחרי בהירות — עברו ל־Plan/Code. Anti-pattern: לבקש מימוש כבד בזמן Ask.",
  },
  {
    id: "cmd-code",
    category: "commands",
    term: "/code",
    explanation:
      "פקודת Mode מובנית למעבר ל־Code/Agent Mode — מימוש ועריכת קבצים עם כלים. משנה את ההקשר התפעולי כך ש־Bob יכול לבצע שינויים ממשיים בפרויקט (בכפוף לאישורים ולהגדרות).",
    meaning:
      "היכנסו ל־`/code` רק עם Scope ו־Criteria. אחרי המימוש — `/review` ו־Verification. אל תשאירו Code Mode פתוח לחקירה ארוכה בלי גבול.",
  },
  {
    id: "cmd-plan",
    category: "commands",
    term: "/plan (Plan Mode)",
    explanation:
      "מעבר ל־Plan Mode (דרך תפריט Mode / פקודת Mode) לתכנון לפני עריכה: הבנת מטרה, חקירה והצעת צעדים. `/init` גם יוצר הקשר ייעודי ל־Plan תחת `.bob/` כדי לחזק מוסכמות ארכיטקטוניות במצב הזה.",
    meaning:
      "למשימות בינוניות ומעלה — Plan לפני Code. אשרו את התוכנית במפורש. תיקון כיוון ב־Plan זול יותר מתיקון Diff ענק.",
  },
  {
    id: "cmd-builtin-vs-custom",
    category: "commands",
    term: "Built-in מול Custom Commands",
    explanation:
      "פקודות מובנות (`/init`, `/review`, `/create-pr` ופקודות Mode) מגיעות עם המוצר ומספקות יכולות ליבה. פקודות מותאמות הן קבצי Markdown ב־`.bob/commands/` או `~/.bob/commands/`. פקודות Mode לא ניתנות לדריסה; פקודת פרויקט גוברת על פקודה גלובלית באותו שם.",
    meaning:
      "אל תיצרו `review.md` מותאם שמתחרה ב־`/review` המובנה בלי סיבה — עדיף שם ייחודי כמו `/team-security-review`. שמרו פקודות צוות במאגר; השתמשו במובנות לתהליכי ליבה.",
  },
  {
    id: "cmd-argument-hints",
    category: "commands",
    term: "Argument Hints",
    explanation:
      "רמזים בתפריט `/` (למשל `<mode_slug>`, `<endpoint-name> <http-method>`) שמראים איזה קלט הפקודה מצפה. הרמז הוא ויזואלי בלבד — אחרי בחירת הפקודה צריך להקליד את הערכים האמיתיים. בפקודות מותאמות מגדירים זאת ב־front matter בשדה `argument-hint`.",
    meaning:
      "אל תשאירו את טקסט הרמז כקלט. ל־`/mode` הזינו למשל `code`. בפקודות צוות כתבו hints ברורים כדי שכולם ישתמשו נכון בפעם הראשונה.",
  },
  {
    id: "agents-md-from-init",
    category: "commands",
    term: "AGENTS.md (תוצר של /init)",
    explanation:
      "קובץ סיכום מבנה ומוסכמות שה־`/init` מייצר ו־Bob קורא כהקשר מתמשך. בנוסף לקובץ הראשי בשורש, נוצרים קבצי Mode תחת `.bob/` (למשל Ask/Plan/Agent) שמרחיבים את ההקשר לפי תפקיד המצב. ניתן לערוך ידנית ולהעשיר בכללים עסקיים.",
    meaning:
      "טפלו ב־`AGENTS.md` כ־Source of Truth חי לצוות ולסוכן. אחרי שינוי מבנה — ריצה מחדש של `/init` או עדכון ידני. בלי תחזוקה הקובץ מתיישן ופוגע בדיוק.",
  },
];

// Remove generic/global terms that also exist in the Vibe Coding glossary
// so the IBM Bob quiz stays Bob-focused.
(() => {
  const removeIds = new Set([
    "workspace-bob",
    "minimal-change-bob",
    "source-of-truth-bob",
    "anti-token-max",
  ]);
  window.VIBE_TERMS = Array.isArray(window.VIBE_TERMS)
    ? window.VIBE_TERMS.filter((t) => !removeIds.has(t.id))
    : [];
})();
