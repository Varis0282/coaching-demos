// Shared bilingual content consumed by all 5 coaching themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export const courses = [
  { icon: "Dna", en: { title: "NEET (11th, 12th & Dropper)", desc: "Complete Physics, Chemistry & Biology preparation with NCERT-line teaching, daily practice and All-India test series." }, hi: { title: "NEET (11वीं, 12वीं व ड्रॉपर)", desc: "NCERT आधारित पढ़ाई, डेली प्रैक्टिस और ऑल-इंडिया टेस्ट सीरीज़ के साथ फिजिक्स, केमिस्ट्री व बायोलॉजी की संपूर्ण तैयारी।" } },
  { icon: "Atom", en: { title: "IIT-JEE (Main + Advanced)", desc: "Concept-first PCM coaching by ex-Kota faculty — problem solving, previous-year analysis and rank-focused strategy." }, hi: { title: "IIT-JEE (मेन + एडवांस्ड)", desc: "एक्स-कोटा फैकल्टी द्वारा कॉन्सेप्ट-आधारित PCM कोचिंग — प्रॉब्लम सॉल्विंग, पिछले वर्षों का विश्लेषण और रैंक-केंद्रित रणनीति।" } },
  { icon: "BookOpen", en: { title: "Foundation (Class 9–10)", desc: "Strong base in Maths & Science plus NTSE/Olympiad exposure — board marks today, NEET/JEE edge tomorrow." }, hi: { title: "फाउंडेशन (कक्षा 9–10)", desc: "गणित व विज्ञान की मज़बूत नींव और NTSE/ओलंपियाड की तैयारी — आज बोर्ड में अंक, कल NEET/JEE में बढ़त।" } },
  { icon: "GraduationCap", en: { title: "Class 11–12 Boards (PCM/PCB)", desc: "MP Board & CBSE — chapter-wise notes, answer-writing practice and pre-board test series for 90%+ scores." }, hi: { title: "कक्षा 11–12 बोर्ड (PCM/PCB)", desc: "MP बोर्ड व CBSE — चैप्टर-वाइज़ नोट्स, उत्तर-लेखन अभ्यास और 90%+ के लिए प्री-बोर्ड टेस्ट सीरीज़।" } },
  { icon: "Landmark", en: { title: "MPPSC (Prelims + Mains)", desc: "Complete syllabus coverage in Hindi & English medium, current affairs, answer writing and interview guidance." }, hi: { title: "MPPSC (प्रारंभिक + मुख्य)", desc: "हिंदी व अंग्रेज़ी माध्यम में पूरा सिलेबस, करेंट अफेयर्स, उत्तर-लेखन और इंटरव्यू मार्गदर्शन।" } },
  { icon: "Briefcase", en: { title: "SSC & Banking", desc: "Quant, Reasoning, English and GK with daily speed tests — for SSC CGL, CHSL, Bank PO and Clerk exams." }, hi: { title: "SSC व बैंकिंग", desc: "क्वांट, रीज़निंग, अंग्रेज़ी व सामान्य ज्ञान, डेली स्पीड टेस्ट के साथ — SSC CGL, CHSL, बैंक PO व क्लर्क के लिए।" } },
  { icon: "Trophy", en: { title: "NTSE & Olympiads", desc: "Special weekend batches for NTSE, IMO, NSO and KVPY-style exams — mentored by our senior faculty." }, hi: { title: "NTSE व ओलंपियाड", desc: "NTSE, IMO, NSO जैसी परीक्षाओं के लिए विशेष वीकेंड बैच — वरिष्ठ फैकल्टी के मार्गदर्शन में।" } },
  { icon: "Target", en: { title: "Crash Courses & Test Series", desc: "45-day revision crash courses and full-length All-India test series with detailed performance analysis." }, hi: { title: "क्रैश कोर्स व टेस्ट सीरीज़", desc: "45-दिवसीय रिवीज़न क्रैश कोर्स और विस्तृत विश्लेषण के साथ फुल-लेंथ ऑल-इंडिया टेस्ट सीरीज़।" } },
];

export const faculty = [
  { id: "vikas-sir", photo: 0, en: { name: "Vikas Tiwari Sir", spec: "Physics (Director)", qual: "M.Sc. Physics, Ex-Kota Faculty", exp: "15+ years experience", bio: "Founder-director. Taught 8 years in Kota's top institutes before returning to Indore. Known for making mechanics and electrodynamics feel easy. 200+ IIT/NIT selections mentored." }, hi: { name: "विकास तिवारी सर", spec: "फिजिक्स (डायरेक्टर)", qual: "M.Sc. फिजिक्स, एक्स-कोटा फैकल्टी", exp: "15+ वर्ष का अनुभव", bio: "संस्थापक-निदेशक। कोटा के शीर्ष संस्थानों में 8 वर्ष पढ़ाने के बाद इंदौर लौटे। मैकेनिक्स और इलेक्ट्रोडायनामिक्स को आसान बनाने के लिए प्रसिद्ध। 200+ IIT/NIT चयन।" }, slots: "NEET & JEE Batches" },
  { id: "anjali-maam", photo: 1, en: { name: "Anjali Deshmukh Ma'am", spec: "Chemistry", qual: "M.Sc. Chemistry, B.Ed.", exp: "12+ years experience", bio: "Organic chemistry specialist. Her reaction-mechanism charts are famous among students. Ex-faculty of a leading Bhopal institute." }, hi: { name: "अंजलि देशमुख मैम", spec: "केमिस्ट्री", qual: "M.Sc. केमिस्ट्री, B.Ed.", exp: "12+ वर्ष का अनुभव", bio: "ऑर्गेनिक केमिस्ट्री विशेषज्ञ। उनके रिएक्शन-मैकेनिज़्म चार्ट छात्रों में प्रसिद्ध हैं। भोपाल के प्रमुख संस्थान की पूर्व फैकल्टी।" }, slots: "NEET, JEE & Boards" },
  { id: "rakesh-sir", photo: 2, en: { name: "Rakesh Yadav Sir", spec: "Mathematics", qual: "M.Sc. Mathematics", exp: "13+ years experience", bio: "JEE Maths mentor with a shortcut for everything — and the proof behind it. Heads our test-series and performance-analysis program." }, hi: { name: "राकेश यादव सर", spec: "गणित", qual: "M.Sc. गणित", exp: "13+ वर्ष का अनुभव", bio: "JEE गणित मेंटर — हर सवाल का शॉर्टकट और उसके पीछे का प्रूफ भी। हमारी टेस्ट-सीरीज़ व परफॉर्मेंस-एनालिसिस प्रोग्राम के प्रमुख।" }, slots: "JEE, Foundation & SSC" },
  { id: "neha-maam", photo: 3, en: { name: "Neha Kulkarni Ma'am", spec: "Biology", qual: "M.Sc. Zoology, NEET Specialist", exp: "10+ years experience", bio: "NEET Biology expert — NCERT line-by-line, diagram practice and 300+ medical selections mentored. Students call her notes 'the Bible'." }, hi: { name: "नेहा कुलकर्णी मैम", spec: "बायोलॉजी", qual: "M.Sc. जूलॉजी, NEET विशेषज्ञ", exp: "10+ वर्ष का अनुभव", bio: "NEET बायोलॉजी विशेषज्ञ — NCERT लाइन-बाय-लाइन, डायग्राम प्रैक्टिस और 300+ मेडिकल चयन। छात्र उनके नोट्स को 'बाइबल' कहते हैं।" }, slots: "NEET & Boards" },
];

export const toppers = [
  { photo: 0, name: "Aryan Patidar", en: { exam: "NEET 2025", result: "AIR 512", detail: "Govt. Medical College, Indore" }, hi: { exam: "NEET 2025", result: "AIR 512", detail: "शासकीय मेडिकल कॉलेज, इंदौर" } },
  { photo: 1, name: "Shruti Sharma", en: { exam: "JEE Advanced 2025", result: "AIR 1,847", detail: "IIT Indore — CSE" }, hi: { exam: "JEE एडवांस्ड 2025", result: "AIR 1,847", detail: "IIT इंदौर — CSE" } },
  { photo: 2, name: "Mohit Verma", en: { exam: "JEE Main 2025", result: "99.1 percentile", detail: "NIT Bhopal" }, hi: { exam: "JEE मेन 2025", result: "99.1 पर्सेंटाइल", detail: "NIT भोपाल" } },
  { photo: 3, name: "Ananya Jain", en: { exam: "MP Board 2025 (12th)", result: "98.2%", detail: "District Topper — PCB" }, hi: { exam: "MP बोर्ड 2025 (12वीं)", result: "98.2%", detail: "ज़िला टॉपर — PCB" } },
  { photo: 4, name: "Rohit Choudhary", en: { exam: "NEET 2024", result: "AIR 923", detail: "MGM Medical College" }, hi: { exam: "NEET 2024", result: "AIR 923", detail: "MGM मेडिकल कॉलेज" } },
  { photo: 5, name: "Priya Solanki", en: { exam: "MPPSC 2024", result: "Rank 38", detail: "Deputy Collector (MP)" }, hi: { exam: "MPPSC 2024", result: "रैंक 38", detail: "डिप्टी कलेक्टर (म.प्र.)" } },
];

export const reviews = [
  { name: "Sanjay Patidar (Parent)", area: "Bhawarkua, Indore", stars: 5, en: "My son's Physics improved from 40% to 85% in one year. Vikas sir personally calls parents after every test. This is why Disha is different.", hi: "एक साल में बेटे की फिजिक्स 40% से 85% हो गई। विकास सर हर टेस्ट के बाद खुद पैरेंट्स को कॉल करते हैं। यही दिशा को अलग बनाता है।" },
  { name: "Shruti Sharma (Student)", area: "IIT Indore, CSE", stars: 5, en: "Small batches mean you can actually ask doubts. I cleared JEE Advanced from Indore itself — no Kota needed.", hi: "छोटे बैच में डाउट पूछना आसान है। मैंने इंदौर से ही JEE एडवांस्ड निकाला — कोटा जाने की ज़रूरत नहीं पड़ी।" },
  { name: "Rekha Choudhary (Parent)", area: "Sudama Nagar, Indore", stars: 5, en: "Weekly test report comes on WhatsApp with rank and weak topics. As a parent I always know exactly where my child stands.", hi: "हर हफ्ते WhatsApp पर रैंक और कमज़ोर टॉपिक्स के साथ रिपोर्ट आती है। पैरेंट होकर मुझे हमेशा पता रहता है कि बच्चा कहाँ खड़ा है।" },
  { name: "Aman Rathore (Student)", area: "MPPSC Batch", stars: 4, en: "Best MPPSC classes in Indore for Hindi medium. Answer-writing practice every Sunday made the real difference in Mains.", hi: "हिंदी माध्यम के लिए इंदौर की सबसे अच्छी MPPSC क्लासेस। हर रविवार उत्तर-लेखन अभ्यास से मेन्स में असली फर्क पड़ा।" },
  { name: "Farida Khan (Parent)", area: "Khajrana, Indore", stars: 5, en: "Fees are half of the big-brand coachings and the teaching is better. Scholarship test gave my daughter 40% off.", hi: "फीस बड़े ब्रांड कोचिंग से आधी है और पढ़ाई बेहतर। स्कॉलरशिप टेस्ट से बेटी को 40% छूट मिली।" },
  { name: "Deepak Malviya (Student)", area: "NEET Dropper Batch", stars: 5, en: "Doubt counter is open till 9 PM every day. Neha ma'am's Biology notes alone are worth the admission.", hi: "डाउट काउंटर रोज़ रात 9 बजे तक खुला रहता है। नेहा मैम के बायोलॉजी नोट्स ही एडमिशन वसूल करा देते हैं।" },
];

export const faqs = [
  { en: { q: "What is the batch size?", a: "Maximum 30 students per batch — so every student gets personal attention and can ask doubts freely. Big-brand coachings run 100+ batches." }, hi: { q: "बैच का साइज़ कितना है?", a: "प्रति बैच अधिकतम 30 छात्र — ताकि हर छात्र पर व्यक्तिगत ध्यान रहे और डाउट पूछना आसान हो। बड़े ब्रांड 100+ के बैच चलाते हैं।" } },
  { en: { q: "Is the demo class really free?", a: "Yes — attend 3 full days of classes free, in the actual batch, with the actual faculty. Take admission only if you feel the difference." }, hi: { q: "क्या डेमो क्लास सच में फ्री है?", a: "हाँ — असली बैच में, असली फैकल्टी के साथ पूरे 3 दिन की क्लास मुफ़्त। फर्क महसूस हो तभी एडमिशन लें।" } },
  { en: { q: "Can fees be paid in installments?", a: "Yes, fees can be paid in up to 4 installments with zero interest. We also run a scholarship test with up to 90% fee waiver." }, hi: { q: "क्या फीस किस्तों में दे सकते हैं?", a: "हाँ, फीस बिना ब्याज 4 किस्तों तक में दी जा सकती है। 90% तक छूट वाला स्कॉलरशिप टेस्ट भी होता है।" } },
  { en: { q: "Is study material included?", a: "Complete printed modules, DPPs (daily practice problems), previous-year papers and online test series are included in the fee. No hidden charges." }, hi: { q: "क्या स्टडी मटेरियल शामिल है?", a: "प्रिंटेड मॉड्यूल, DPP, पिछले वर्षों के पेपर और ऑनलाइन टेस्ट सीरीज़ फीस में शामिल हैं। कोई छिपा शुल्क नहीं।" } },
  { en: { q: "How do parents get progress updates?", a: "After every weekly test, parents receive a WhatsApp report with marks, batch rank and weak topics. Parent-teacher meetings happen every month." }, hi: { q: "पैरेंट्स को प्रगति की जानकारी कैसे मिलती है?", a: "हर साप्ताहिक टेस्ट के बाद WhatsApp पर अंक, बैच रैंक और कमज़ोर टॉपिक्स की रिपोर्ट मिलती है। हर महीने पैरेंट-टीचर मीटिंग होती है।" } },
  { en: { q: "What about doubt solving?", a: "A dedicated doubt counter runs 4–9 PM daily where any student can walk in and clear doubts one-on-one with faculty — not just toppers, everyone." }, hi: { q: "डाउट कैसे हल होते हैं?", a: "रोज़ शाम 4–9 बजे डाउट काउंटर चलता है जहाँ कोई भी छात्र फैकल्टी से वन-टू-वन डाउट पूछ सकता है — सिर्फ टॉपर नहीं, हर छात्र।" } },
];

export const stats = [
  { value: "5,000+", en: "Students Coached", hi: "छात्र पढ़ाए" },
  { value: "850+", en: "Selections (NEET/JEE/Govt.)", hi: "चयन (NEET/JEE/सरकारी)" },
  { value: "12+", en: "Years of Results", hi: "वर्षों के परिणाम" },
  { value: "4.8★", en: "Google Rating", hi: "गूगल रेटिंग" },
];

export const whyUs = [
  { icon: "Users", en: { title: "Small Batches (Max 30)", desc: "Personal attention for every student — not a crowd of 150 where your child disappears." }, hi: { title: "छोटे बैच (अधिकतम 30)", desc: "हर छात्र पर व्यक्तिगत ध्यान — 150 की भीड़ नहीं जिसमें बच्चा खो जाए।" } },
  { icon: "Award", en: { title: "Ex-Kota & Senior Faculty", desc: "Learn from teachers who produced ranks in Kota — now in Indore at half the cost." }, hi: { title: "एक्स-कोटा वरिष्ठ फैकल्टी", desc: "उन शिक्षकों से पढ़ें जिन्होंने कोटा में रैंक बनाई — अब आधी फीस में इंदौर में।" } },
  { icon: "ClipboardCheck", en: { title: "Weekly Tests + Parent Reports", desc: "Every Sunday a test; every Monday a WhatsApp report to parents with rank and weak topics." }, hi: { title: "साप्ताहिक टेस्ट + पैरेंट रिपोर्ट", desc: "हर रविवार टेस्ट; हर सोमवार पैरेंट्स को रैंक व कमज़ोर टॉपिक्स की WhatsApp रिपोर्ट।" } },
  { icon: "Target", en: { title: "Daily Doubt Counter", desc: "One-on-one doubt solving with faculty, 4–9 PM every day. No doubt goes home unsolved." }, hi: { title: "डेली डाउट काउंटर", desc: "रोज़ शाम 4–9 बजे फैकल्टी के साथ वन-टू-वन डाउट सॉल्विंग। कोई डाउट घर नहीं जाता।" } },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", courses: "Courses", faculty: "Faculty", results: "Results", contact: "Admission & Contact", book: "Book Free Demo Class" },
    hero: {
      badge: "Indore's trusted coaching since 2013",
      title: "Your Child's Dream Rank,",
      titleAccent: "Our Responsibility",
      sub: "Ex-Kota faculty, batches of just 30, weekly parent reports and 850+ selections — right here in Bhawarkua, Indore. Book a free 3-day demo class on WhatsApp.",
      cta1: "Book Free Demo Class",
      cta2: "Call Now",
      open: "Admissions Open · New batches from 1st week",
    },
    sections: {
      coursesTitle: "Our Courses",
      coursesSub: "From Class 9 foundation to NEET, JEE and MPPSC — one institute for the full journey.",
      facultyTitle: "Meet Our Faculty",
      facultySub: "The teachers behind 850+ selections.",
      whyTitle: "Why Parents Choose Disha",
      whySub: "12 years, 5,000+ students, one promise — personal attention.",
      resultsTitle: "Our Results Speak",
      resultsSub: "Real students, real ranks — from this very classroom.",
      reviewsTitle: "What Parents & Students Say",
      reviewsSub: "Honest words from families across Indore.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything parents ask before admission.",
      galleryTitle: "Inside Our Campus",
      gallerySub: "Smart classrooms, library and a daily doubt counter.",
      visitTitle: "Visit Us",
      visitSub: "2 minutes from Bhawarkua square — easy for students from every corner of Indore.",
      ctaTitle: "One free demo class can change your child's future.",
      ctaSub: "Book now — 3 full days free, in the real batch. Decide only after that.",
    },
    booking: {
      title: "Book a Free Demo Class",
      sub: "Fill this form — your request goes directly to our WhatsApp. We confirm your demo class within 15 minutes.",
      name: "Student's Name", namePh: "e.g. Aryan Patidar",
      phone: "Mobile Number (Parent/Student)", phonePh: "e.g. 92024 20455",
      doctor: "Select Course", anyDoctor: "Not sure — suggest me a course",
      date: "Preferred Start Date", slot: "Preferred Time",
      note: "Current Class / School (optional)", notePh: "e.g. Class 11, PCB, Shishukunj School",
      submit: "Book Demo on WhatsApp",
      or: "or",
      call: "Call the institute",
      success: "Opening WhatsApp… your demo class request is ready to send!",
      morning: "Morning", evening: "Evening",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Timings", tagline: "Kota-level coaching, Indore-level care." },
    misc: { viewAll: "View All Courses", bookWith: "Join batch of", experience: "Experience", readMore: "Know More", getDirections: "Get Directions", emergency: "Admission Helpline (7 AM – 9 PM)" },
    about: {
      title: "About Disha Classes",
      sub: "12 years of honest teaching in Indore.",
      story1: "Disha Classes was started in 2013 by Vikas Tiwari, who spent 8 years teaching in Kota's biggest institutes and saw one thing clearly — talented students from Madhya Pradesh were leaving home at 15 because their own city didn't offer serious coaching.",
      story2: "What began as one rented classroom in Bhawarkua with 14 students is today a full institute with 4 senior faculty, smart classrooms, a library, daily doubt counter and an All-India online test series — with 850+ selections in NEET, JEE, boards and government exams.",
      story3: "Our promise has never changed: small batches, personal attention, honest fees and a weekly report in every parent's hand. Your child should not have to leave Indore to get a rank.",
      missionTitle: "Our Mission",
      mission: "Kota-quality preparation for every deserving student of Madhya Pradesh — in their own city, at honest fees.",
      values: [
        { title: "Personal Attention", desc: "Max 30 per batch. Every student is known by name, not roll number." },
        { title: "Transparent Fees", desc: "Full fee chart at reception. Installments without interest. Scholarships up to 90%." },
        { title: "Parents as Partners", desc: "Weekly WhatsApp reports and monthly PTMs. You always know where your child stands." },
        { title: "Results Without Pressure", desc: "Counseling support, no public rank-shaming, and mentoring for every level of student." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", courses: "कोर्सेस", faculty: "फैकल्टी", results: "रिज़ल्ट्स", contact: "एडमिशन व संपर्क", book: "फ्री डेमो क्लास बुक करें" },
    hero: {
      badge: "2013 से इंदौर की भरोसेमंद कोचिंग",
      title: "आपके बच्चे की ड्रीम रैंक,",
      titleAccent: "हमारी ज़िम्मेदारी",
      sub: "एक्स-कोटा फैकल्टी, सिर्फ 30 के बैच, साप्ताहिक पैरेंट रिपोर्ट और 850+ चयन — भंवरकुआ, इंदौर में। WhatsApp पर फ्री 3-दिन की डेमो क्लास बुक करें।",
      cta1: "फ्री डेमो क्लास बुक करें",
      cta2: "अभी कॉल करें",
      open: "एडमिशन चालू · नए बैच पहले सप्ताह से",
    },
    sections: {
      coursesTitle: "हमारे कोर्सेस",
      coursesSub: "कक्षा 9 फाउंडेशन से NEET, JEE और MPPSC तक — पूरे सफर के लिए एक संस्थान।",
      facultyTitle: "हमारी फैकल्टी से मिलिए",
      facultySub: "850+ चयनों के पीछे के शिक्षक।",
      whyTitle: "पैरेंट्स दिशा को क्यों चुनते हैं",
      whySub: "12 साल, 5,000+ छात्र, एक वादा — व्यक्तिगत ध्यान।",
      resultsTitle: "हमारे परिणाम खुद बोलते हैं",
      resultsSub: "असली छात्र, असली रैंक — इसी क्लासरूम से।",
      reviewsTitle: "पैरेंट्स व छात्र क्या कहते हैं",
      reviewsSub: "इंदौर भर के परिवारों की सच्ची राय।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSub: "एडमिशन से पहले पैरेंट्स के हर सवाल का जवाब।",
      galleryTitle: "हमारे कैंपस की झलक",
      gallerySub: "स्मार्ट क्लासरूम, लाइब्रेरी और डेली डाउट काउंटर।",
      visitTitle: "हम तक पहुँचें",
      visitSub: "भंवरकुआ चौराहे से 2 मिनट — इंदौर के हर कोने से आसान।",
      ctaTitle: "एक फ्री डेमो क्लास आपके बच्चे का भविष्य बदल सकती है।",
      ctaSub: "अभी बुक करें — असली बैच में पूरे 3 दिन फ्री। फैसला उसके बाद ही लें।",
    },
    booking: {
      title: "फ्री डेमो क्लास बुक करें",
      sub: "यह फॉर्म भरें — आपकी रिक्वेस्ट सीधे हमारे WhatsApp पर पहुँचेगी। 15 मिनट में डेमो क्लास कन्फर्म।",
      name: "छात्र का नाम", namePh: "जैसे: आर्यन पाटीदार",
      phone: "मोबाइल नंबर (पैरेंट/छात्र)", phonePh: "जैसे: 92024 20455",
      doctor: "कोर्स चुनें", anyDoctor: "पक्का नहीं — कोर्स सुझाएँ",
      date: "पसंदीदा शुरुआत की तारीख", slot: "पसंदीदा समय",
      note: "वर्तमान कक्षा / स्कूल (वैकल्पिक)", notePh: "जैसे: कक्षा 11, PCB, शिशुकुंज स्कूल",
      submit: "WhatsApp पर डेमो बुक करें",
      or: "या",
      call: "संस्थान को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी डेमो क्लास रिक्वेस्ट भेजने के लिए तैयार है!",
      morning: "सुबह", evening: "शाम",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "समय", tagline: "कोटा-स्तर की कोचिंग, इंदौर जैसा अपनापन।" },
    misc: { viewAll: "सभी कोर्स देखें", bookWith: "बैच जॉइन करें", experience: "अनुभव", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "एडमिशन हेल्पलाइन (सुबह 7 – रात 9)" },
    about: {
      title: "दिशा क्लासेस के बारे में",
      sub: "इंदौर में 12 साल की ईमानदार पढ़ाई।",
      story1: "दिशा क्लासेस की शुरुआत 2013 में विकास तिवारी ने की, जिन्होंने कोटा के सबसे बड़े संस्थानों में 8 साल पढ़ाया और एक बात साफ देखी — मध्य प्रदेश के होनहार बच्चे 15 साल की उम्र में घर छोड़ रहे थे क्योंकि उनके अपने शहर में गंभीर कोचिंग नहीं थी।",
      story2: "भंवरकुआ के एक किराए के कमरे और 14 छात्रों से शुरू होकर आज यह 4 वरिष्ठ फैकल्टी, स्मार्ट क्लासरूम, लाइब्रेरी, डेली डाउट काउंटर और ऑल-इंडिया ऑनलाइन टेस्ट सीरीज़ वाला पूर्ण संस्थान है — NEET, JEE, बोर्ड व सरकारी परीक्षाओं में 850+ चयन के साथ।",
      story3: "हमारा वादा कभी नहीं बदला: छोटे बैच, व्यक्तिगत ध्यान, ईमानदार फीस और हर पैरेंट के हाथ में साप्ताहिक रिपोर्ट। रैंक के लिए आपके बच्चे को इंदौर छोड़ना नहीं पड़ना चाहिए।",
      missionTitle: "हमारा मिशन",
      mission: "मध्य प्रदेश के हर योग्य छात्र को कोटा-स्तर की तैयारी — अपने ही शहर में, ईमानदार फीस पर।",
      values: [
        { title: "व्यक्तिगत ध्यान", desc: "बैच में अधिकतम 30। हर छात्र नाम से जाना जाता है, रोल नंबर से नहीं।" },
        { title: "पारदर्शी फीस", desc: "रिसेप्शन पर पूरा फी चार्ट। बिना ब्याज किस्तें। 90% तक स्कॉलरशिप।" },
        { title: "पैरेंट्स साझेदार हैं", desc: "साप्ताहिक WhatsApp रिपोर्ट और मासिक PTM। बच्चा कहाँ खड़ा है, आपको हमेशा पता रहेगा।" },
        { title: "बिना दबाव परिणाम", desc: "काउंसलिंग सपोर्ट, सार्वजनिक रैंक-शेमिंग नहीं, हर स्तर के छात्र के लिए मेंटरिंग।" },
      ],
    },
  },
};
