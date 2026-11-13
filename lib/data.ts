export const site = {
  name: "Aaradhya IVF",
  tagline: "Hope · Nurture · Together",
  address: "123 Health Street, USA",
  phone: "+1 0000000",
  phoneHref: "tel:+1000000",
  helpline: "+1 00000000",
  helplineHref: "tel:+100000000",
  email: "info@xyz.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Delhi+India",
  mapEmbed: "https://maps.google.com/maps?q=Connaught%20Place%2C%20New%20Delhi&t=&z=12&ie=UTF8&iwloc=&output=embed",
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  ] as const,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Treatments", href: "/treatments" },
  { label: "Our Specialists", href: "/specialists" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export const marqueeItems = [
  "Hopeful Journey",
  "Mother's Care",
  "Gentle Guidance",
  "Healthy Beginnings",
  "Safe Delivery",
  "Joyful Motherhood",
];

/* ----------------------------- Treatments ----------------------------- */

export type Treatment = {
  slug: string;
  title: string;
  short: string; // highlighted part of heading, e.g. "IVF"
  long?: string; // rest of heading, e.g. "(In Vitro Fertilization)"
  tagline: string;
  intro: string[];
  helps: string;
  helpPoints: string[];
  benefitFor: string[];
  expect: string;
  image: string;
  card?: string; // image used on the treatments listing card
};

const commonExpect = (name: string) =>
  `Our experienced fertility specialists will guide you through every step of your ${name} journey, providing compassionate care, advanced technology and personalized support to help you achieve the best possible outcome.`;

export const treatments: Treatment[] = [
  {
    slug: "ivf",
    title: "IVF (In Vitro Fertilization)",
    short: "IVF",
    long: "(In Vitro Fertilization)",
    tagline: "A step closer to your dream of parenthood.",
    intro: [
      "In Vitro Fertilization (IVF) is an advanced fertility treatment that helps couples overcome infertility challenges and achieve their dream of having a baby. In this process, eggs and sperm are combined in a laboratory to create embryos, which are then carefully transferred into the uterus for a successful pregnancy.",
      "IVF is recommended for a wide range of fertility issues, including blocked fallopian tubes, ovulation problems, low sperm count, unexplained infertility, and in cases where other treatments have not been successful.",
    ],
    helps:
      "IVF offers hope to individuals and couples facing various fertility challenges. It is a highly effective treatment option, especially for those who have not achieved pregnancy through other methods.",
    helpPoints: [
      "Suitable for various fertility issues",
      "Helps in cases of unexplained infertility",
      "Increases the chances of a successful pregnancy",
      "Supported by advanced fertility technology",
    ],
    benefitFor: [
      "Blocked or damaged fallopian tubes",
      "Ovulation disorders",
      "Endometriosis",
      "Low sperm count or sperm motility issues",
      "Unexplained infertility",
      "Advanced maternal age",
      "Recurrent pregnancy loss",
      "Genetic conditions",
    ],
    expect: commonExpect("IVF"),
    image: "/images/td-main.jpg",
  },
  {
    slug: "iui",
    title: "IUI (Intrauterine Insemination)",
    short: "IUI",
    long: "(Intrauterine Insemination)",
    tagline: "A gentle, minimally invasive first step.",
    intro: [
      "Intrauterine Insemination (IUI) is a simple fertility procedure where specially prepared sperm is placed directly into the uterus around the time of ovulation, increasing the number of sperm that reach the fallopian tubes.",
      "IUI is often recommended as a first-line treatment for mild male factor infertility, cervical issues, ovulation irregularities and unexplained infertility.",
    ],
    helps:
      "IUI is a cost-effective and less invasive option that can significantly improve the chances of conception when timed precisely with ovulation.",
    helpPoints: [
      "Quick, painless outpatient procedure",
      "Affordable first-line fertility treatment",
      "Can be combined with ovulation induction",
      "Minimal recovery time required",
    ],
    benefitFor: [
      "Mild male factor infertility",
      "Cervical mucus problems",
      "Ovulation irregularities",
      "Unexplained infertility",
      "Single women using donor sperm",
      "Same-sex couples",
      "Sexual dysfunction",
      "Semen allergy",
    ],
    expect: commonExpect("IUI"),
    image: "/images/g-1.jpg",
  },
  {
    slug: "icsi",
    title: "ICSI (Intracytoplasmic Sperm Injection)",
    short: "ICSI",
    long: "(Intracytoplasmic Sperm Injection)",
    tagline: "Precision fertilization for male factor infertility.",
    intro: [
      "Intracytoplasmic Sperm Injection (ICSI) is a specialised form of IVF where a single healthy sperm is injected directly into each mature egg by our embryologists, using high-powered micromanipulation.",
      "ICSI is particularly helpful for couples facing severe male infertility, previous fertilization failure, or when using frozen sperm or eggs.",
    ],
    helps:
      "By bypassing natural barriers to fertilization, ICSI gives every egg the best chance of fertilizing, even when sperm count or motility is very low.",
    helpPoints: [
      "Overcomes severe male factor infertility",
      "High fertilization success rates",
      "Ideal for frozen sperm or eggs",
      "Performed by expert embryologists",
    ],
    benefitFor: [
      "Very low sperm count",
      "Poor sperm motility or shape",
      "Previous IVF fertilization failure",
      "Surgically retrieved sperm",
      "Frozen sperm samples",
      "Low egg yield",
      "Preimplantation genetic testing",
      "Unexplained infertility",
    ],
    expect: commonExpect("ICSI"),
    image: "/images/g-5.jpg",
  },
  {
    slug: "egg-freezing",
    title: "Egg Freezing",
    short: "Egg",
    long: "Freezing",
    tagline: "Preserve your fertility on your own timeline.",
    intro: [
      "Egg freezing (oocyte cryopreservation) lets you preserve your eggs at their current quality so you can try for a pregnancy later in life, when the time is right for you.",
      "Using rapid vitrification technology, eggs are frozen and stored safely in our laboratory for future use with IVF or ICSI.",
    ],
    helps:
      "Egg freezing gives women more control over their reproductive future, whether for personal, career or medical reasons.",
    helpPoints: [
      "Preserves younger, healthier eggs",
      "Advanced vitrification technology",
      "Flexible family planning",
      "Safe long-term storage",
    ],
    benefitFor: [
      "Women delaying motherhood",
      "Cancer treatment patients",
      "Low ovarian reserve",
      "Family history of early menopause",
      "Endometriosis",
      "Genetic conditions",
      "Career-focused planning",
      "Before ovarian surgery",
    ],
    expect: commonExpect("egg freezing"),
    image: "/images/g-3.jpg",
  },
  {
    slug: "fertility-preservation",
    title: "Fertility Preservation",
    short: "Fertility",
    long: "Preservation",
    tagline: "Protecting your chance to build a family.",
    intro: [
      "Fertility preservation includes a range of techniques — egg, sperm and embryo freezing — designed to protect your ability to have children in the future.",
      "It is especially important before medical treatments such as chemotherapy or radiation, which can affect fertility.",
    ],
    helps:
      "With timely preservation, patients facing medical treatment or age-related decline can keep their parenthood options open.",
    helpPoints: [
      "Egg, sperm and embryo freezing",
      "Fast-track options before treatment",
      "Counselling at every step",
      "Secure cryo-storage facility",
    ],
    benefitFor: [
      "Cancer patients",
      "Autoimmune disease treatment",
      "Delaying parenthood",
      "Transgender individuals",
      "Low ovarian reserve",
      "Before major surgery",
      "Military deployment",
      "Genetic risk factors",
    ],
    expect: commonExpect("fertility preservation"),
    image: "/images/g-8.jpg",
  },
  {
    slug: "surrogacy",
    title: "Surrogacy",
    short: "Surrogacy",
    tagline: "Compassionate guidance through every legal and medical step.",
    intro: [
      "Gestational surrogacy helps intended parents build their family when carrying a pregnancy is not medically possible. An embryo created through IVF is transferred to a carefully screened gestational carrier.",
      "Our team supports you with medical, legal and emotional guidance in line with applicable regulations.",
    ],
    helps:
      "Surrogacy offers a path to biological parenthood for those who cannot safely carry a pregnancy themselves.",
    helpPoints: [
      "Thorough medical screening",
      "Legal process support",
      "Dedicated care coordinator",
      "Emotional counselling for all parties",
    ],
    benefitFor: [
      "Absence of uterus",
      "Severe uterine abnormalities",
      "Repeated implantation failure",
      "Recurrent pregnancy loss",
      "Serious medical conditions",
      "Asherman's syndrome",
      "Previous hysterectomy",
      "Unsafe pregnancy risk",
    ],
    expect: commonExpect("surrogacy"),
    image: "/images/g-9.jpg",
  },
  {
    slug: "reproductive-surgery",
    title: "Reproductive Surgery",
    short: "Reproductive",
    long: "Surgery",
    tagline: "Minimally invasive solutions for better fertility.",
    intro: [
      "Reproductive surgery corrects structural problems that may affect fertility, such as fibroids, polyps, blocked tubes or endometriosis, using minimally invasive laparoscopic and hysteroscopic techniques.",
      "Faster recovery and less discomfort mean you can continue your fertility journey sooner.",
    ],
    helps:
      "Treating the underlying cause can restore natural fertility or improve the success of treatments like IVF.",
    helpPoints: [
      "Laparoscopic and hysteroscopic procedures",
      "Shorter hospital stay",
      "Improved IVF outcomes",
      "Experienced surgical team",
    ],
    benefitFor: [
      "Uterine fibroids",
      "Endometrial polyps",
      "Blocked fallopian tubes",
      "Endometriosis",
      "Ovarian cysts",
      "Uterine septum",
      "Adhesions",
      "Hydrosalpinx",
    ],
    expect: commonExpect("surgical"),
    image: "/images/g-6.jpg",
  },
  {
    slug: "male-infertility",
    title: "Male Infertility Treatment",
    short: "Male Infertility",
    long: "Treatment",
    tagline: "Expert andrology care for him.",
    intro: [
      "Male factors contribute to nearly half of all infertility cases. Our andrology team offers complete evaluation — from semen analysis and hormonal tests to advanced sperm DNA testing.",
      "Treatment options range from lifestyle and medical therapy to surgical sperm retrieval combined with ICSI.",
    ],
    helps:
      "A precise diagnosis allows us to tailor treatment and significantly improve the chances of conception.",
    helpPoints: [
      "Comprehensive semen analysis",
      "Surgical sperm retrieval (TESA/PESA)",
      "Hormonal and medical therapy",
      "Discreet, respectful care",
    ],
    benefitFor: [
      "Low sperm count",
      "Poor sperm motility",
      "Azoospermia",
      "Varicocele",
      "Hormonal imbalance",
      "Erectile dysfunction",
      "High DNA fragmentation",
      "Previous vasectomy",
    ],
    expect: commonExpect("male fertility"),
    image: "/images/g-4.jpg",
  },
  // Services shown as cards on the Treatments page
  {
    slug: "maternity-care",
    title: "Maternity Care",
    short: "Maternity",
    long: "Care",
    tagline: "Safe, joyful pregnancy care from conception to delivery.",
    intro: [
      "Our maternity programme provides complete antenatal, delivery and postnatal care, with regular scans, nutrition guidance and round-the-clock specialist support.",
      "Every mother receives a personalised care plan designed around her health and preferences.",
    ],
    helps:
      "Continuous, compassionate monitoring helps ensure a healthy pregnancy for both mother and baby.",
    helpPoints: [
      "Regular antenatal check-ups",
      "High-risk pregnancy management",
      "Birth planning and delivery care",
      "Postnatal and lactation support",
    ],
    benefitFor: [
      "First-time mothers",
      "IVF pregnancies",
      "High-risk pregnancies",
      "Twin pregnancies",
      "Gestational diabetes",
      "Hypertension in pregnancy",
      "Previous C-section",
      "Advanced maternal age",
    ],
    expect: commonExpect("maternity"),
    image: "/images/bd-main.jpg",
    card: "/images/t-maternity.jpg",
  },
  {
    slug: "gynaecology",
    title: "Gynaecology",
    short: "Gynaecology",
    tagline: "Complete care for every stage of a woman's life.",
    intro: [
      "Our gynaecologists diagnose and treat conditions affecting the female reproductive system, from menstrual disorders and PCOS to menopause care.",
      "We combine advanced diagnostics with a warm, private environment.",
    ],
    helps: "Early diagnosis and treatment protect long-term reproductive health and wellbeing.",
    helpPoints: [
      "PCOS and hormonal care",
      "Menstrual disorder treatment",
      "Preventive screenings",
      "Menopause management",
    ],
    benefitFor: [
      "Irregular periods",
      "PCOS / PCOD",
      "Pelvic pain",
      "Endometriosis",
      "Fibroids",
      "Menopause symptoms",
      "Infections",
      "Preventive check-ups",
    ],
    expect: commonExpect("gynaecology"),
    image: "/images/g-6.jpg",
    card: "/images/t-gynaecology.jpg",
  },
  {
    slug: "pediatric-care",
    title: "Pediatric Care",
    short: "Pediatric",
    long: "Care",
    tagline: "Gentle care for your little one.",
    intro: [
      "Our paediatric team looks after your newborn from the very first day, with neonatal check-ups, vaccinations and growth monitoring.",
      "We partner with parents to give every child a healthy start.",
    ],
    helps: "Expert newborn and child care ensures healthy development and peace of mind for parents.",
    helpPoints: [
      "Newborn examinations",
      "Vaccination schedules",
      "Growth and development tracking",
      "Parent guidance and support",
    ],
    benefitFor: [
      "Newborns",
      "Premature babies",
      "Infants and toddlers",
      "Vaccination needs",
      "Feeding concerns",
      "Growth monitoring",
      "Common childhood illnesses",
      "Developmental checks",
    ],
    expect: commonExpect("paediatric"),
    image: "/images/g-9.jpg",
    card: "/images/t-pediatric.jpg",
  },
  {
    slug: "radiology",
    title: "Radiology",
    short: "Radiology",
    tagline: "Accurate imaging for confident decisions.",
    intro: [
      "Our in-house radiology department offers 3D/4D ultrasound, follicular monitoring, HSG and advanced imaging to support accurate diagnosis.",
      "Results are reviewed directly by your fertility specialist for faster treatment decisions.",
    ],
    helps: "Precise imaging is the foundation of effective fertility and pregnancy care.",
    helpPoints: [
      "3D/4D ultrasound",
      "Follicular monitoring",
      "Hysterosalpingography (HSG)",
      "Fetal well-being scans",
    ],
    benefitFor: [
      "Fertility assessment",
      "Ovulation tracking",
      "Tubal patency testing",
      "Pregnancy scans",
      "Fibroid evaluation",
      "Ovarian cysts",
      "Anomaly scans",
      "Doppler studies",
    ],
    expect: commonExpect("imaging"),
    image: "/images/g-1.jpg",
    card: "/images/t-radiology.jpg",
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    short: "Physiotherapy",
    tagline: "Strength and comfort through pregnancy and beyond.",
    intro: [
      "Prenatal and postnatal physiotherapy helps relieve back pain, strengthen the pelvic floor and prepare your body for delivery.",
      "Our physiotherapists design safe, gentle programmes for every trimester.",
    ],
    helps: "Guided exercise improves comfort, posture and recovery after childbirth.",
    helpPoints: [
      "Pelvic floor strengthening",
      "Back and joint pain relief",
      "Birth preparation exercises",
      "Postnatal recovery programmes",
    ],
    benefitFor: [
      "Pregnancy back pain",
      "Pelvic girdle pain",
      "Postnatal recovery",
      "Diastasis recti",
      "Incontinence",
      "Posture issues",
      "C-section recovery",
      "Birth preparation",
    ],
    expect: commonExpect("physiotherapy"),
    image: "/images/bd-tip3.jpg",
    card: "/images/t-physiotherapy.jpg",
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    short: "Nutrition",
    tagline: "Nourishing you and your baby.",
    intro: [
      "Our clinical nutritionists create personalised diet plans to support fertility, a healthy pregnancy and postnatal recovery.",
      "Balanced nutrition can improve egg and sperm quality and support your baby's growth.",
    ],
    helps: "The right diet supports hormonal balance, healthy weight and better treatment outcomes.",
    helpPoints: [
      "Fertility-focused diet plans",
      "Pregnancy nutrition guidance",
      "Weight management support",
      "Gestational diabetes diet care",
    ],
    benefitFor: [
      "PCOS",
      "Weight concerns",
      "IVF preparation",
      "Gestational diabetes",
      "Anaemia",
      "Breastfeeding mothers",
      "Thyroid conditions",
      "Male fertility",
    ],
    expect: commonExpect("nutrition"),
    image: "/images/bd-tip2.jpg",
    card: "/images/t-nutrition.jpg",
  },
];

export const sidebarTreatmentSlugs = [
  "ivf",
  "iui",
  "icsi",
  "egg-freezing",
  "fertility-preservation",
  "surrogacy",
  "reproductive-surgery",
  "male-infertility",
];

export const cardTreatments = treatments.filter((t) => t.card);

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);

/* ----------------------------- Specialists ---------------------------- */

const doctorBase = [
  { name: "Dr. Aditi Sharma", role: "IVF Specialist" },
  { name: "Dr. Rohit Mehta", role: "Reproductive Endocrinologist" },
  { name: "Dr. Neha Kapoor", role: "Gynecologist" },
  { name: "Dr. Vikram Saini", role: "Andrologist" },
  { name: "Dr. Priya Malhotra", role: "Fertility Specialist" },
  { name: "Dr. Karan Verma", role: "Embryologist" },
  { name: "Dr. Sneha Gupta", role: "Obstetrician & Gynecologist" },
  { name: "Dr. Anil Bhatia", role: "Reproductive Medicine Specialist" },
  { name: "Dr. Meera Iyer", role: "Endocrinologist" },
  { name: "Dr. Kavya Nair", role: "Fetal Medicine Specialist" },
  { name: "Dr. Arjun Rao", role: "Laparoscopic Surgeon" },
  { name: "Dr. Ritu Desai", role: "Clinical Embryologist" },
  { name: "Dr. Sameer Khanna", role: "Urologist" },
  { name: "Dr. Ananya Bose", role: "IVF Consultant" },
  { name: "Dr. Rahul Joshi", role: "Genetic Counsellor" },
  { name: "Dr. Pooja Reddy", role: "Obstetrician" },
  { name: "Dr. Manish Arora", role: "Anaesthesiologist" },
  { name: "Dr. Shalini Menon", role: "Gynae Oncologist" },
];

// Photos 1–9 alternate female/male in the same order as the names above.
const photoFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 6, 1, 4, 5, 2, 9, 8, 7];

export const specialists = doctorBase.map((d, i) => ({
  ...d,
  image: `/images/dr-${photoFor[i]}.jpg`,
}));

/* ------------------------------- Gallery ------------------------------ */

export const gallery = [
  { src: "/images/g-1.jpg", alt: "Doctor reviewing an ultrasound scan with an expecting mother" },
  { src: "/images/g-2.jpg", alt: "Aaradhya IVF reception area" },
  { src: "/images/g-3.jpg", alt: "Embryologist working at a microscope" },
  { src: "/images/g-4.jpg", alt: "Specialist consulting a couple" },
  { src: "/images/g-5.jpg", alt: "ICSI procedure under the microscope" },
  { src: "/images/g-6.jpg", alt: "Doctor examining a pregnant patient" },
  { src: "/images/g-7.jpg", alt: "Comfortable patient lounge" },
  { src: "/images/g-8.jpg", alt: "IVF laboratory technician" },
  { src: "/images/g-9.jpg", alt: "Happy parents with their newborn" },
];

/* --------------------------------- Blog -------------------------------- */

export type BlogTip = { title: string; body: string; image: string };
export type BlogPost = {
  slug: string;
  title: string;
  highlight: string; // part of the title rendered in brand colour
  category: string;
  author: string;
  date: string;
  image: string;
  intro: string;
  tips: BlogTip[];
  conclusion: string;
};

const tipImages = ["/images/bd-tip1.jpg", "/images/bd-tip2.jpg", "/images/bd-tip3.jpg", "/images/bd-tip4.jpg"];
const withImages = (tips: Omit<BlogTip, "image">[]): BlogTip[] =>
  tips.map((t, i) => ({ ...t, image: tipImages[i % tipImages.length] }));

export const blogPosts: BlogPost[] = [
  {
    slug: "healthy-pregnancy-after-ivf",
    title: "Essential Tips for a Healthy Pregnancy After IVF",
    highlight: "Healthy Pregnancy",
    category: "Pregnancy",
    author: "Dr. Neha Sharma",
    date: "October 12, 2026",
    image: "/images/b-1.jpg",
    intro:
      "A healthy pregnancy after IVF is a beautiful and important milestone. While IVF increases the chances of conception, proper care during pregnancy plays a crucial role in ensuring the well-being of both the mother and the baby. Here are some essential tips to help you have a smooth and healthy pregnancy journey after IVF.",
    tips: withImages([
      {
        title: "Follow Your Doctor's Guidance",
        body: "Regular follow-ups with your fertility specialist and obstetrician are essential. They will monitor your pregnancy closely, suggest necessary tests, and guide you on medications, diet, and lifestyle to ensure the best possible outcome.",
      },
      {
        title: "Maintain a Balanced Diet",
        body: "A nutritious diet supports your baby's growth and helps you stay healthy. Include foods rich in folic acid, iron, calcium, protein, and vitamins. Stay hydrated and avoid processed foods, excessive caffeine, and foods that are not recommended by your doctor.",
      },
      {
        title: "Manage Stress and Stay Positive",
        body: "Emotional well-being is important during pregnancy after IVF. Practice relaxation techniques such as meditation, deep breathing, or gentle yoga. Surround yourself with a supportive family and focus on positive thoughts.",
      },
      {
        title: "Get Enough Rest",
        body: "Adequate sleep helps your body heal and supports a healthy pregnancy. Try to get 7–8 hours of quality sleep each night and avoid overexertion. Listen to your body and take rest whenever needed.",
      },
    ]),
    conclusion:
      "A healthy pregnancy after IVF requires the right care, nutrition, and emotional support. Every pregnancy is unique, so always follow your doctor's advice and take one step at a time. With proper guidance and a positive mindset, you can look forward to a happy and healthy journey to parenthood.",
  },
  {
    slug: "complete-guide-to-ivf-process",
    title: "A Complete Guide to the IVF Process for First-Time Parents",
    highlight: "IVF Process",
    category: "IVF Treatment",
    author: "Dr. Neha Sharma",
    date: "October 08, 2026",
    image: "/images/b-2.jpg",
    intro:
      "Starting IVF can feel overwhelming, but understanding each stage makes the journey far less intimidating. This guide walks first-time parents through what happens from the first consultation to the pregnancy test.",
    tips: withImages([
      {
        title: "Consultation and Testing",
        body: "Your journey begins with a detailed consultation, hormonal blood tests, ultrasound scans and semen analysis so your specialist can design the right protocol for you.",
      },
      {
        title: "Ovarian Stimulation",
        body: "For around 10–12 days you'll take hormone injections that help the ovaries produce multiple eggs. Regular scans track follicle growth and fine-tune your dosage.",
      },
      {
        title: "Egg Retrieval and Fertilization",
        body: "Mature eggs are collected in a short, sedated procedure and fertilised in our lab using conventional IVF or ICSI. Embryos are then cultured for 3–5 days.",
      },
      {
        title: "Embryo Transfer and Waiting",
        body: "The healthiest embryo is gently transferred into the uterus. About two weeks later, a blood test confirms pregnancy. Rest, stay positive and keep in touch with your care team.",
      },
    ]),
    conclusion:
      "IVF is a step-by-step process, and you never walk it alone. Ask questions, lean on your care team, and remember that every stage brings you closer to your goal of parenthood.",
  },
  {
    slug: "manage-stress-during-fertility-treatment",
    title: "How to Manage Stress During Fertility Treatment",
    highlight: "Manage Stress",
    category: "Lifestyle",
    author: "Dr. Neha Sharma",
    date: "September 28, 2026",
    image: "/images/b-3.jpg",
    intro:
      "Fertility treatment can be an emotional rollercoaster. Managing stress isn't just good for your wellbeing — it helps you stay resilient throughout the process. Here are practical ways to look after your mind.",
    tips: withImages([
      {
        title: "Talk About How You Feel",
        body: "Share your feelings with your partner, a trusted friend or a counsellor. Our in-house fertility counsellors are always available to listen without judgement.",
      },
      {
        title: "Move Your Body Gently",
        body: "Light walks, stretching and prenatal-friendly yoga release endorphins and ease tension. Always check with your doctor before starting a new routine.",
      },
      {
        title: "Practice Mindfulness",
        body: "Even ten minutes of meditation or deep breathing each day can lower anxiety and improve sleep during the waiting periods of treatment.",
      },
      {
        title: "Set Healthy Boundaries",
        body: "It's okay to limit conversations about your treatment or step away from social media. Protect your energy and focus on what you can control.",
      },
    ]),
    conclusion:
      "Stress is a natural part of fertility treatment, but it doesn't have to take over. Small daily habits and the right support system can make the journey calmer and more hopeful.",
  },
  {
    slug: "couples-who-achieved-parenthood-with-ivf",
    title: "Real Stories: Couples Who Achieved Parenthood with IVF",
    highlight: "Real Stories",
    category: "Success Stories",
    author: "Dr. Neha Sharma",
    date: "September 18, 2026",
    image: "/images/b-4.jpg",
    intro:
      "Behind every success rate is a family with a story. We asked a few of our patients to share what helped them most on their road to parenthood.",
    tips: withImages([
      {
        title: "Trusting the Process",
        body: "Priya and Rohit tried for six years before IVF. They say understanding every step from their doctor helped them stay calm and committed.",
      },
      {
        title: "Small Lifestyle Changes",
        body: "Anjali focused on nutrition and gentle exercise during treatment, which she believes helped her feel stronger and more in control.",
      },
      {
        title: "Leaning on Support",
        body: "For Sameer and Kavya, counselling sessions and a supportive family made the difficult waiting periods far easier to cope with.",
      },
      {
        title: "Celebrating the Arrival",
        body: "Today, all three families are celebrating healthy babies — and they all share one message: never lose hope.",
      },
    ]),
    conclusion:
      "Every journey is different, but hope, expert care and support are common threads. If you're just starting out, these stories show what's possible.",
  },
  {
    slug: "foods-that-boost-fertility",
    title: "Foods That Naturally Support Fertility",
    highlight: "Support Fertility",
    category: "Nutrition",
    author: "Dr. Meera Iyer",
    date: "September 05, 2026",
    image: "/images/bd-tip2.jpg",
    intro:
      "What you eat can influence hormone balance, egg quality and sperm health. These simple food choices can help both partners prepare their bodies for conception.",
    tips: withImages([
      { title: "Leafy Greens", body: "Spinach, methi and other greens are rich in folate and iron, both vital before and during pregnancy." },
      { title: "Healthy Fats", body: "Nuts, seeds, avocado and olive oil support hormone production and reduce inflammation." },
      { title: "Lean Protein", body: "Lentils, eggs, paneer and fish provide the building blocks your reproductive system needs." },
      { title: "Antioxidant-Rich Fruit", body: "Berries, citrus and pomegranate help protect eggs and sperm from oxidative stress." },
    ]),
    conclusion:
      "There's no single fertility superfood, but a varied, balanced diet gives your body the best possible foundation. Our nutritionists can build a plan just for you.",
  },
  {
    slug: "understanding-male-infertility",
    title: "Understanding Male Infertility: Causes and Treatments",
    highlight: "Male Infertility",
    category: "Men's Health",
    author: "Dr. Vikram Saini",
    date: "August 22, 2026",
    image: "/images/g-4.jpg",
    intro:
      "Male factors contribute to nearly half of all infertility cases, yet they're often overlooked. Here's what every couple should know.",
    tips: withImages([
      { title: "Common Causes", body: "Low sperm count, poor motility, varicocele, hormonal imbalances and lifestyle factors are the most frequent causes." },
      { title: "Getting Tested", body: "A simple semen analysis is the first step. Further hormonal or genetic tests may be recommended." },
      { title: "Lifestyle Matters", body: "Quitting smoking, limiting alcohol, managing weight and avoiding heat exposure can improve sperm health." },
      { title: "Advanced Treatments", body: "Options like ICSI and surgical sperm retrieval help even men with very low sperm counts become fathers." },
    ]),
    conclusion:
      "Male infertility is common and very often treatable. Early testing for both partners saves time and leads to the right treatment sooner.",
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

/* --------------------------------- FAQs -------------------------------- */

export const faqs = [
  {
    q: "What is IVF and how does it work?",
    a: "IVF (In Vitro Fertilization) is an advanced fertility treatment where eggs are retrieved from the ovaries, fertilized with sperm in a laboratory, and the resulting embryo is transferred into the uterus to achieve pregnancy.",
  },
  {
    q: "Who can benefit from IVF treatment?",
    a: "IVF can help couples with blocked fallopian tubes, ovulation disorders, endometriosis, low sperm count, unexplained infertility, advanced maternal age, or previous unsuccessful treatments.",
  },
  {
    q: "How long does the IVF process take?",
    a: "A typical IVF cycle takes about 4–6 weeks, from ovarian stimulation through egg retrieval and embryo transfer to the pregnancy test.",
  },
  {
    q: "Is IVF treatment safe?",
    a: "Yes. IVF is a well-established, safe procedure. Our specialists monitor you closely at every stage to minimise risks such as ovarian hyperstimulation.",
  },
  {
    q: "What are the success rates of IVF?",
    a: "Success depends on factors like age, cause of infertility and embryo quality. Our specialists will discuss realistic, personalised success rates during your consultation.",
  },
  {
    q: "Are there any side effects of IVF?",
    a: "Some women experience mild bloating, cramping, mood changes or breast tenderness from hormone medications. These are usually temporary and manageable.",
  },
  {
    q: "How many IVF cycles may be needed?",
    a: "Many patients conceive within one to three cycles. Your doctor will review each cycle and adjust the protocol to improve your chances.",
  },
  {
    q: "What is the cost of IVF treatment?",
    a: "Costs vary depending on the protocol, medications and any additional procedures such as ICSI or embryo freezing. We provide a transparent estimate after your consultation.",
  },
  {
    q: "Is there an age limit for IVF?",
    a: "Fertility declines with age, but IVF can be considered at various ages. Options such as donor eggs can help women of advanced maternal age. Your specialist will advise what is safest for you.",
  },
  {
    q: "Do you offer personalized treatment plans?",
    a: "Absolutely. Every treatment plan at Aaradhya IVF is tailored to your medical history, test results and personal goals.",
  },
];

/* ----------------------------- Testimonials ---------------------------- */

export const testimonials = [
  {
    quote:
      "Our journey to parenthood felt possible because of the amazing team. They explained everything clearly, supported us at every step and made the entire process comfortable and stress-free. We are now blessed with our little one, and we are forever grateful.",
    name: "Priya & Rohit",
    city: "New Delhi",
  },
  {
    quote:
      "After years of trying, the doctors at Aaradhya IVF gave us hope again. Their honesty, warmth and expertise made all the difference. Holding our daughter today feels like a dream come true.",
    name: "Anjali & Sameer",
    city: "Gurugram",
  },
  {
    quote:
      "From the first consultation to delivery, we felt cared for like family. The staff were always available to answer our questions. We cannot thank the team enough for our twins!",
    name: "Kavya & Arjun",
    city: "Noida",
  },
];

/* ------------------------------ How it works --------------------------- */

export const steps = [
  {
    title: "Initial Consultation",
    body: "Meet with our fertility specialists to discuss your concerns, medical history, and goals. We create a personalized evaluation plan for you.",
    icon: "users",
  },
  {
    title: "Diagnostic Tests",
    body: "We conduct comprehensive tests, including hormonal assessments, ultrasound and other evaluations to understand your fertility health.",
    icon: "clipboard",
  },
  {
    title: "Personalized Treatment Plan",
    body: "Based on your results, we design a tailored treatment plan using advanced fertility techniques to give you the best possible results.",
    icon: "flask",
  },
  {
    title: "Treatment & Monitoring",
    body: "We provide advanced fertility treatments with continuous monitoring, expert care and emotional support throughout your journey.",
    icon: "embryo",
  },
  {
    title: "Positive Results",
    body: "We stand by your side until you achieve your dream of parenthood and beyond, with continued care and guidance for a healthy pregnancy.",
    icon: "baby",
  },
] as const;

export const footerServices = [
  { label: "Fertility Treatments", href: "/treatments" },
  { label: "IVF", href: "/treatments/ivf" },
  { label: "IUI", href: "/treatments/iui" },
  { label: "ICSI", href: "/treatments/icsi" },
  { label: "Egg Freezing", href: "/treatments/egg-freezing" },
  { label: "International Patients", href: "/contact" },
  { label: "Male Fertility", href: "/treatments/male-infertility" },
  { label: "Fertility Preservation", href: "/treatments/fertility-preservation" },
];
