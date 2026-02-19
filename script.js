// Language Dictionary
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.work': 'Work',
        'nav.contact': 'Contact',
        'hero.greeting.start': 'Hello, I\'m ',
        'hero.greeting.end': '',
        'hero.title': 'Korean Interpreter',
        'hero.subtitle': 'based in Myanmar.',
        'hero.resume': 'Resume',
        'about.title': 'about',
        'about.description': 'A responsible and systematic professional with demonstrated success in rapid skill acquisition. I am highly organized and dedicated to creating an effective learning environment, eagerly anticipating opportunities to contribute my expertise, especially in teaching and management roles.',
        'timeline.1.title': 'High School Exam Passed',
        'timeline.1.description': 'Completed high school examination.',
        'timeline.2.title': 'Customer Service at Beexpress Delivery Co., Ltd',
        'timeline.2.description': '1 yr and 2 months - Experienced in customer relationship management and service standards.',
        'timeline.3.title': 'Multiple Roles',
        'timeline.3.role1': 'Korea Interpreter at Panko Bago Co., Ltd (1 yr)',
        'timeline.3.role2': 'Marketing Interpreter at Sequoia Group Myanmar (1 month)',
        'timeline.3.role3': 'Project Manager at IT Wizard (2025.08.01 – Present)',
        'timeline.3.role4': 'Founder and Teacher at Korean with us Korean language school (2025.11.01 – Present)',
        'timeline.3.description': 'Currently focusing on language interpretation, marketing roles, and project management.',
        'work.title': 'work',
        'work.intro': 'My career path demonstrates a strong versatility, ranging from customer relations and professional interpretation to the systematic application of project management principles. This diverse background is complemented by a proactive engagement in web development projects, showcasing proficiency in HTML, JavaScript, and structured design.',
        'work.project1.description': 'A front-end project demonstrating UI/UX principles using JavaScript. Focused on creating a responsive and interactive user interface for information access and navigation.',
        'work.project2.description': 'Developed a language learning resource or application built with TypeScript, emphasizing code quality and maintainability through strong typing.',
        'work.project3.description': 'A basic web platform utilizing HTML for structure and demonstrating fundamental web development practices.',
        'work.project4.description': 'Developed a React Native functional prototype for a fashion application (influencers/users), featuring a complete posting system and tappable monetization links. Showcases core skills in mobile state management and cross-platform UI development.',
        'work.project5.title': 'Job Portal System',
        'work.project5.description': 'Designed a scalable and responsive job portal system UI (Novaliana), focusing on component-based layout architecture, optimized user flow, and modular interface design. Implemented structured job listing presentation, advanced search interaction patterns, and role-based interface separation for admin and public users, demonstrating strong expertise in system design, UI engineering, and usability optimization.',
        'work.project6.title': 'Korean With Us — Admin',
        'work.project6.description': 'Full-stack education management system built with React 18 + TypeScript (frontend) and Node.js + Express + TypeScript (backend). Uses PostgreSQL with Prisma ORM and JWT authentication for secure, role-based access. Scalable admin dashboard for managing courses, enrollments, and financial operations.',
        'work.project7.title': 'Novaliana Dictionary',
        'work.project7.description': 'Multilingual dictionary web application for searching and learning Korean vocabulary with Myanmar and English translations. Features real-time search, categorized word entries, daily conversation tags, and a Word of the Day to enhance vocabulary learning.',
        'work.project8.title': 'Kookie Move On',
        'work.project8.description': 'Motivational web app to track the "No Contact" journey and support emotional healing. Features a streak-based day counter, interactive calendar with color-coded status (No Contact, Contact, Reset), and daily emotion logging with emojis and notes. Searchable and editable records help users understand patterns, build self-control, and visualize healing progress—focusing on habit reinforcement, emotional awareness, and structured personal growth.',
        'contact.title': 'contact',
        'contact.description': 'A dedicated professional and quick learner. For collaboration opportunities, project inquiries, or to verify my technical portfolio, please contact me through the following channels.',
        'footer.rights': 'All rights reserved.'
    },
    kr: {
        'nav.home': '홈',
        'nav.about': '소개',
        'nav.work': '작업',
        'nav.contact': '연락처',
        'hero.greeting.start': '안녕하세요, 저는 ',
        'hero.greeting.end': '입니다.',
        'hero.title': '프로젝트 매니저',
        'hero.subtitle': '미얀마 거주.',
        'hero.resume': '이력서',
        'about.title': '소개',
        'about.description': '빠른 기술 습득에서 입증된 성공을 보여준 책임감 있고 체계적인 전문가입니다. 저는 매우 체계적이며 효과적인 학습 환경을 만드는 데 전념하며, 특히 교육 및 관리 역할에서 전문 지식을 기여할 기회를 열망하고 있습니다.',
        'timeline.1.title': '고등학교 졸업',
        'timeline.1.description': '고등학교 졸업 시험을 완료했습니다.',
        'timeline.2.title': 'Beexpress Delivery Co., Ltd 고객 서비스',
        'timeline.2.description': '1년 2개월 - 고객 관계 관리 및 서비스 표준 경험.',
        'timeline.3.title': '다양한 역할',
        'timeline.3.role1': 'Panko Bago Co., Ltd 한국어 통역사 (1년)',
        'timeline.3.role2': 'Sequoia Group Myanmar 마케팅 통역사 (1개월)',
        'timeline.3.role3': 'IT Wizard 프로젝트 매니저 (2025년.8월.1일 – 현재 근무 중)',
        'timeline.3.role4': 'Korean with us 한국어 학교 설립자 및 교사 (2025년.11월.1일 – 현재 근무 중)',
        'timeline.3.description': '현재 언어 통역, 마케팅 역할 및 프로젝트 관리에 집중하고 있습니다.',
        'work.title': '작업',
        'work.intro': '제 경력 경로는 고객 관계 및 전문 통역부터 프로젝트 관리 원칙의 체계적인 적용에 이르기까지 강한 다양성을 보여줍니다. 이 다양한 배경은 HTML, JavaScript 및 구조화된 디자인에 대한 숙련도를 보여주는 웹 개발 프로젝트에 대한 적극적인 참여로 보완됩니다.',
        'work.project1.description': 'JavaScript를 사용하여 UI/UX 원칙을 보여주는 프론트엔드 프로젝트입니다. 정보 접근 및 탐색을 위한 반응형이고 대화형 사용자 인터페이스 생성에 중점을 둡니다.',
        'work.project2.description': '강력한 타이핑을 통해 코드 품질과 유지보수성을 강조하는 TypeScript로 구축된 언어 학습 리소스 또는 애플리케이션을 개발했습니다.',
        'work.project3.description': '구조를 위한 HTML을 활용하고 기본 웹 개발 관행을 보여주는 기본 웹 플랫폼.',
        'work.project4.description': '패션 애플리케이션(인플루언서/사용자)을 위한 React Native 기능 프로토타입을 개발했습니다. 완전한 게시 시스템과 탭 가능한 수익화 링크를 특징으로 합니다. 모바일 상태 관리 및 크로스 플랫폼 UI 개발의 핵심 기술을 보여줍니다.',
        'work.project5.title': '구인구직 포털 시스템',
        'work.project5.description': '컴포넌트 기반 레이아웃 아키텍처, 최적화된 사용자 흐름, 모듈형 인터페이스 디자인에 중점을 둔 확장 가능하고 반응형 구인구직 포털 시스템 UI(노발리아나)를 설계했습니다. 구조화된 채용 공고 표시, 고급 검색 상호작용 패턴, 관리자 및 일반 사용자를 위한 역할 기반 인터페이스 분리를 구현하여 시스템 설계, UI 엔지니어링 및 사용성 최적화에 대한 전문성을 보여줍니다.',
        'work.project6.title': 'Korean With Us — 관리자',
        'work.project6.description': 'React 18 + TypeScript(프론트엔드)와 Node.js + Express + TypeScript(백엔드)로 구축한 풀스택 교육 관리 시스템. PostgreSQL, Prisma ORM, JWT 인증으로 안전한 역할 기반 접근을 제공합니다. 과정, 등록 및 재무 운영 관리를 위한 확장 가능한 관리자 대시보드.',
        'work.project7.title': '노발리아나 사전',
        'work.project7.description': '미얀마어 및 영어 번역과 함께 한국어 어휘 검색 및 학습이 가능한 다국어 사전 웹 애플리케이션. 실시간 검색, 분류별 단어 항목, 일상 회화 태그, 오늘의 단어 기능으로 어휘 학습을 강화합니다.',
        'work.project8.title': '쿠키 무브 온',
        'work.project8.description': '"노 컨택트" 여정을 추적하고 감정 회복을 돕는 동기 부여 웹 앱. 연속 일수 카운터, 색상으로 구분된 상태(노 컨택트, 컨택트, 리셋)의 인터랙티브 캘린더, 이모지와 메모가 있는 일일 감정 기록. 검색·편집 가능한 기록으로 패턴 이해, 자기 통제, 회복 진행 시각화—습관 강화, 감정 인식, 체계적인 성장에 초점.',
        'contact.title': '연락처',
        'contact.description': '전문적이고 빠른 학습자입니다. 협업 기회, 프로젝트 문의 또는 기술 포트폴리오 확인을 위해 다음 채널을 통해 연락해 주세요.',
        'footer.rights': '모든 권리 보유.'
    },
    mm: {
        'nav.home': 'ပင်မစာမျက်နှာ',
        'nav.about': 'အကြောင်း',
        'nav.work': 'လုပ်ငန်းများ',
        'nav.contact': 'ဆက်သွယ်ရန်',
        'hero.greeting.start': 'မင်္ဂလာပါ၊ ကျွန်တော်က ',
        'hero.greeting.end': ' ဖြစ်ပါတယ်။',
        'hero.title': 'စီမံကိန်းမန်နေဂျာ',
        'hero.subtitle': 'မြန်မာနိုင်ငံတွင်နေထိုင်သည်။',
        'hero.resume': 'ကိုယ်ရေးအကျဉ်း',
        'about.title': 'အကြောင်း',
        'about.description': 'မြန်ဆန်သော ကျွမ်းကျင်မှု ရယူခြင်းတွင် အောင်မြင်မှု ပြသထားသော တာဝန်ယူမှု ရှိပြီး စနစ်ကျသော ပညာရှင်တစ်ဦး ဖြစ်ပါသည်။ ကျွန်တော်သည် အလွန်စနစ်ကျပြီး ထိရောက်သော သင်ယူမှု ပတ်ဝန်းကျင်ကို ဖန်တီးရန် အာရုံစိုက်ထားပြီး၊ အထူးသဖြင့် သင်ကြားရေးနှင့် စီမံခန့်ခွဲမှု အခန်းကဏ္ဍများတွင် ကျွန်တော့် ကျွမ်းကျင်မှုကို ပံ့ပိုးရန် အခွင့်အလမ်းများကို စိတ်အားထက်သန်စွာ မျှော်လင့်နေပါသည်။',
        'timeline.1.title': 'အထက်တန်းစာမေးပွဲ အောင်မြင်ခဲ့သည်',
        'timeline.1.description': 'အထက်တန်းစာမေးပွဲကို အောင်မြင်ခဲ့သည်။',
        'timeline.2.title': 'Beexpress Delivery Co., Ltd တွင် ဖောက်သည်ဝန်ဆောင်မှု',
        'timeline.2.description': '၁ နှစ် ၂ လ - ဖောက်သည်ဆက်ဆံရေးစီမံခန့်ခွဲမှုနှင့် ဝန်ဆောင်မှုစံနှုန်းများတွင် အတွေ့အကြုံရှိသည်။',
        'timeline.3.title': 'အခန်းကဏ္ဍများစွာ',
        'timeline.3.role1': 'Panko Bago Co., Ltd တွင် ကိုရီးယားဘာသာပြန်ဆို (၁ နှစ်)',
        'timeline.3.role2': 'Sequoia Group Myanmar တွင် စျေးကွက်ရှာဖွေရေး ဘာသာပြန်ဆို (၁ လ)',
        'timeline.3.role3': 'IT Wizard တွင် စီမံကိန်းမန်နေဂျာ ( ၂၀၂၅ခုနစ် ဩဂုတ်လ ၁ ရက် – လက်ရှိ အလုပ်လုပ်နေသည်)',
        'timeline.3.role4': 'Korean with us ကိုရီးယားဘာသာစကား ကျောင်း၏ တည်ထောင်သူနှင့် ဆရာ (၂၀၂၅ ခုနစ် နိုဝင်ဘာလ ၁ ရက် – လက်ရှိအလုပ်လုပ်နေသည်)',
        'timeline.3.description': 'လက်ရှိတွင် ဘာသာစကား ဘာသာပြန်ဆိုခြင်း၊ စျေးကွက်ရှာဖွေရေး အခန်းကဏ္ဍများနှင့် စီမံကိန်း စီမံခန့်ခွဲမှုတို့ကို အာရုံစိုက်နေသည်။',
        'work.title': 'လုပ်ငန်းများ',
        'work.intro': 'ကျွန်တော့် လုပ်ငန်းလမ်းကြောင်းသည် ဖောက်သည်ဆက်ဆံရေးနှင့် ပညာရှင်ဆန်သော ဘာသာပြန်ဆိုခြင်းမှ စီမံကိန်း စီမံခန့်ခွဲမှု နိယာမများ၏ စနစ်တကျ အသုံးချမှုအထိ ခိုင်မာသော စွမ်းရည်မျိုးစုံကိုပြသပါသည်။ ဤမတူညီသော နောက်ခံသည် HTML၊ JavaScript နှင့် ဖွဲ့စည်းထားသော ဒီဇိုင်းတွင် ကျွမ်းကျင်မှုကို ပြသသော ဝဘ် ဖွံ့ဖြိုးတိုးတက်မှု စီမံကိန်းများတွင် တက်ကြွစွာ ပါဝင်မှုဖြင့် ဖြည့်စွက်ထားသည်။',
        'work.project1.description': 'JavaScript ကို အသုံးပြု၍ UI/UX နိယာမများကို ပြသသော ရှေ့ဆုံး စီမံကိန်းတစ်ခု ဖြစ်သည်။ အချက်အလက်ရယူခြင်းနှင့် လမ်းညွှန်ခြင်းအတွက် တုံ့ပြန်နိုင်ပြီး အပြန်အလှန် အသုံးပြုနိုင်သော အသုံးပြုသူ အင်တာဖေ့စ်ကို ဖန်တီးရန် အာရုံစိုက်ထားသည်။',
        'work.project2.description': 'TypeScript ဖြင့် တည်ဆောက်ထားသော ဘာသာစကား သင်ယူမှု အရင်းအမြစ် သို့မဟုတ် အက်ပ်လီကေးရှင်းကို ဖွံ့ဖြိုးတိုးတက်စေခဲ့ပြီး၊ ခိုင်မာသော စာရိုက်ခြင်းမှတစ်ဆင့် ကုဒ် အရည်အသွေးနှင့် ထိန်းသိမ်းနိုင်မှုကို အလေးပေးထားသည်။',
        'work.project3.description': 'ဖွဲ့စည်းပုံအတွက် HTML ကို အသုံးပြုသော အခြေခံ ဝဘ် ပလက်ဖောင်းတစ်ခုဖြစ်ပြီး အခြေခံ ဝဘ် ဖွံ့ဖြိုးတိုးတက်မှု လုပ်ထုံးလုပ်နည်းများကို ပြသသည်။',
        'work.project4.description': 'ဖက်ရှင် အက်ပ်လီကေးရှင်း (ဩဇာရှိသူများ/အသုံးပြုသူများ) အတွက် React Native လုပ်ဆောင်ချက် ပုံစံကို ဖွံ့ဖြိုးတိုးတက်စေခဲ့ပြီး၊ ပြီးပြည့်စုံသော ပို့စ်တင်ခြင်း စနစ်နှင့် နှိပ်နိုင်သော ငွေရှာဖွေမှု လင့်ခ်များကို ပါဝင်သည်။ မိုဘိုင်း အခြေအနေ စီမံခန့်ခွဲမှုနှင့် ပလက်ဖောင်းများစွာ UI ဖွံ့ဖြိုးတိုးတက်မှုတွင် အဓိက ကျွမ်းကျင်မှုများကို ပြသသည်။',
        'work.project5.title': 'အလုပ်အကိုင်ပလက်ဖောင်း စနစ်',
        'work.project5.description': 'ကွန်ပြုန်းအခြေခံ လေယာဉ်ပြ ဗိသုကာ၊ အကောင်းဆုံး အသုံးပြုသူ စီးဆင်းမှုနှင့် မော်ဂျူလာ အင်တာဖေ့စ် ဒီဇိုင်းကို အာရုံစိုက်သည့် ချဲ့ထွင်နိုင်ပြီး တုံ့ပြန်သော အလုပ်အကိုင်ပလက်ဖောင်း UI (နိုဗာလီယာနာ) ကို ဒီဇိုင်းပြုလုပ်ခဲ့သည်။ ဖွဲ့စည်းထားသော အလုပ်ကြော်ငြာပြသခြင်း၊ အဆင့်မြင့် ရှာဖွေမှု အပြန်အလှန် ပုံစံများနှင့် စီမံခန့်ခွဲသူနှင့် ပြည်သူ အသုံးပြုသူများအတွက် အခန်းကဏ္ဍအခြေခံ အင်တာဖေ့စ် ခွဲခြားမှုကို အကောင်အထည်ဖော်ခဲ့ပြီး စနစ်ဒီဇိုင်း၊ UI အင်ဂျင်နီယာပညာနှင့် အသုံးပြုနိုင်မှု အကောင်းဆုံးဖြစ်အောင်ပြုလုပ်ထားသည်။',
        'work.project6.title': 'Korean With Us — စီမံခန့်ခွဲရေး',
        'work.project6.description': 'React 18 + TypeScript (ရှေ့ဆုံး) နှင့် Node.js + Express + TypeScript (နောက်ဆုံး) ဖြင့် တည်ဆောက်ထားသော ပြည့်စုံသော ပညာရေး စီမံခန့်ခွဲမှု စနစ်။ PostgreSQL၊ Prisma ORM နှင့် JWT အတည်ပြုခြင်းဖြင့် လုံခြုံသော အခန်းကဏ္ဍအခြေခံ ဝင်ရောက်ခွင့်ပေးသည်။ သင်တန်းများ၊ စာရင်းသွင်းခြင်းများနှင့် ငွေကြေး လုပ်ငန်းများ စီမံခန့်ခွဲရန် ချဲ့ထွင်နိုင်သော စီမံခန့်ခွဲရေး ဒိုင်ခွက်။',
        'work.project7.title': 'နိုဗာလီယာနာ အဘိဓာန်',
        'work.project7.description': 'မြန်မာနှင့် အင်္ဂလိပ် ဘာသာပြန်များဖြင့် ကိုရီးယား ဝေါဟာရ ရှာဖွေခြင်းနှင့် သင်ယူခြင်းအတွက် ဘာသာစကားမျိုးစုံ အဘိဓာန် ဝဘ်အက်ပ်လီကေးရှင်း။ လက်ချင်း ရှာဖွေမှု၊ အမျိုးအစားခွဲ စကားလုံးများ၊ နေ့စဉ် စကားပြောခေါင်းစဉ်များနှင့် ယနေ့၏ စကားလုံး အင်္ဂါရပ်ဖြင့် ဝေါဟာရ သင်ယူမှုကို မြှင့်တင်သည်။',
        'work.project8.title': 'Kookie Move On',
        'work.project8.description': '"ဆက်သွယ်မှုမရှိ" ခရီးကို ခြေရာခံပြီး စိတ်ခံစားမှု ပြန်လည်ကောင်းမွန်ရေး ပံ့ပိုးသည့် စိတ်အားတက်စရာ ဝဘ်အက်ပ်။ ဆက်တိုက်ရက်များ ရေတွက်ခြင်း၊ အရောင်ခွဲထားသော အခြေအနေ (ဆက်သွယ်မှုမရှိ၊ ဆက်သွယ်မှု၊ ပြန်စ) ပါ ပြန်လည်အပြန်အလှန်က္ခဒိန်၊ နေ့စဉ် စိတ်ခံစားမှု မှတ်တမ်း (အီမိုဂျီနှင့် မှတ်စု)။ ရှာဖွေနိုင် ပြင်ဆင်နိုင်သော မှတ်တမ်းများဖြင့် ပုံစံများ နားလည်ခြင်း၊ ကိုယ့်ကိုယ်ထိန်းချုပ်မှု၊ ပြန်ကောင်းမှု တိုးတက်ခြင်း မြင်နိုင်သည်—အကျင့်ခိုင်မာစေခြင်း၊ စိတ်ခံစားမှု သတိပြုခြင်း၊ စနစ်ကျသော ကိုယ်ရေး ကြီးထွားမှုကို အာရုံစိုက်သည်။',
        'contact.title': 'ဆက်သွယ်ရန်',
        'contact.description': 'အာရုံစိုက်ထားသော ပညာရှင်တစ်ဦးနှင့် လျင်မြန်စွာ သင်ယူသူဖြစ်သည်။ ပူးပေါင်းဆောင်ရွက်မှု အခွင့်အလမ်းများ၊ စီမံကိန်း မေးမြန်းချက်များ သို့မဟုတ် ကျွန်တော့် နည်းပညာ ပို့တ်ဖိုလီယိုကို အတည်ပြုရန် အတွက် ကျေးဇူးပြု၍ အောက်ပါ ချန်နယ်များမှတစ်ဆင့် ဆက်သွယ်ပါ။',
        'footer.rights': 'အခွင့်အရေးအားလုံး လက်ဝယ်ရှိသည်။'
    }
};

// Language Switcher Functionality
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language select dropdown value
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = lang;
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
function initLanguage() {
    setLanguage(currentLanguage);
    
    // Add change event listener to language select dropdown
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            const lang = this.value;
            setLanguage(lang);
        });
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher
    initLanguage();
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            if (navMenu && navToggle && navMenu.classList.contains('nav-menu--open')) {
                navMenu.classList.remove('nav-menu--open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navMenu.classList.toggle('nav-menu--open');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 860 && navMenu.classList.contains('nav-menu--open')) {
                navMenu.classList.remove('nav-menu--open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Active navigation link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections and project cards
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

