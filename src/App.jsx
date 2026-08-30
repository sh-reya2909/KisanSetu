import { useMemo, useState } from "react";
import "./index.css";

/* =====================================================
   REGION DATA
===================================================== */

const regions = {
  cuttack: {
    name: "Cuttack, Odisha",
    weather: {
      temp: 31,
      humidity: 78,
      rainfall: 18,
      rainChance: 72,
      priceStress: 12,
    },
  },

  bhubaneswar: {
    name: "Bhubaneswar, Odisha",
    weather: {
      temp: 34,
      humidity: 69,
      rainfall: 8,
      rainChance: 42,
      priceStress: 20,
    },
  },

  ludhiana: {
    name: "Ludhiana, Punjab",
    weather: {
      temp: 36,
      humidity: 54,
      rainfall: 4,
      rainChance: 25,
      priceStress: 28,
    },
  },

  nashik: {
    name: "Nashik, Maharashtra",
    weather: {
      temp: 29,
      humidity: 61,
      rainfall: 14,
      rainChance: 64,
      priceStress: 12,
    },
  },

  hyderabad: {
    name: "Hyderabad, Telangana",
    weather: {
      temp: 33,
      humidity: 57,
      rainfall: 6,
      rainChance: 35,
      priceStress: 24,
    },
  },
};

/* =====================================================
   OFFICER DATA
===================================================== */

const demoOfficers = {
  "9000000001": {
    otp: "1234",
    name: "Anil Kumar",
    region: "cuttack",
  },

  "9000000002": {
    otp: "1234",
    name: "Suresh Das",
    region: "bhubaneswar",
  },

  "9000000003": {
    otp: "1234",
    name: "Harpreet Singh",
    region: "ludhiana",
  },

  "9000000004": {
    otp: "1234",
    name: "Rahul Patil",
    region: "nashik",
  },

  "9000000005": {
    otp: "1234",
    name: "Ravi Reddy",
    region: "hyderabad",
  },
};

/* =====================================================
   MANDI DATA
===================================================== */

const mandiData = {
  cuttack: [
    { name: "Chhatra Bazar", crop: "Rice", rate: 2450 },
    { name: "Cuttack Mandi", crop: "Vegetables", rate: 2100 },
    { name: "Niali Mandi", crop: "Rice", rate: 2380 },
  ],

  bhubaneswar: [
    { name: "Unit-1 Mandi", crop: "Rice", rate: 2420 },
    { name: "Rasulgarh Mandi", crop: "Vegetables", rate: 2250 },
    { name: "Baramunda Mandi", crop: "Potato", rate: 1900 },
  ],

  ludhiana: [
    { name: "Ludhiana Grain Market", crop: "Wheat", rate: 2650 },
    { name: "Khanna Mandi", crop: "Wheat", rate: 2620 },
    { name: "Sahnewal Mandi", crop: "Maize", rate: 2150 },
  ],

  nashik: [
    { name: "Lasalgaon Mandi", crop: "Onion", rate: 2800 },
    { name: "Nashik Mandi", crop: "Onion", rate: 2650 },
    { name: "Pimpalgaon Mandi", crop: "Grapes", rate: 5200 },
  ],

  hyderabad: [
    { name: "Bowenpally Market", crop: "Cotton", rate: 7100 },
    { name: "Gudimalkapur Mandi", crop: "Vegetables", rate: 2400 },
    { name: "Malakpet Market", crop: "Maize", rate: 2250 },
  ],
};

/* =====================================================
   DEMO FARMERS
===================================================== */

const demoFarmers = [
  {
    mobile: "9876543210",
    otp: "1234",
    name: "Ramesh Behera",
    region: "cuttack",
    crop: "Rice",
    soilPH: 6.4,
    moisture: 68,
    irrigation: "Canal",
    cropped: true,
    cropDate: "2026-07-10",
    loan: 45000,
    dueDays: 25,
  },

  {
    mobile: "9876543211",
    otp: "1234",
    name: "Sanjay Das",
    region: "cuttack",
    crop: "Vegetables",
    soilPH: 6.7,
    moisture: 58,
    irrigation: "Borewell",
    cropped: false,
    cropDate: "",
    loan: 18000,
    dueDays: 75,
  },

  {
    mobile: "9876543220",
    otp: "1234",
    name: "Prakash Sahu",
    region: "bhubaneswar",
    crop: "Rice",
    soilPH: 5.8,
    moisture: 51,
    irrigation: "Rainfed",
    cropped: true,
    cropDate: "2026-07-20",
    loan: 62000,
    dueDays: 15,
  },

  {
    mobile: "9876543230",
    otp: "1234",
    name: "Gurpreet Singh",
    region: "ludhiana",
    crop: "Wheat",
    soilPH: 7.2,
    moisture: 39,
    irrigation: "Canal",
    cropped: true,
    cropDate: "2026-06-20",
    loan: 85000,
    dueDays: 10,
  },

  {
    mobile: "9876543240",
    otp: "1234",
    name: "Vijay Patil",
    region: "nashik",
    crop: "Onion",
    soilPH: 6.8,
    moisture: 58,
    irrigation: "Drip",
    cropped: true,
    cropDate: "2026-07-05",
    loan: 55000,
    dueDays: 20,
  },

  {
    mobile: "9876543250",
    otp: "1234",
    name: "Ravi Kumar",
    region: "hyderabad",
    crop: "Cotton",
    soilPH: 7.5,
    moisture: 43,
    irrigation: "Borewell",
    cropped: true,
    cropDate: "2026-07-01",
    loan: 70000,
    dueDays: 18,
  },
];

/* =====================================================
   TRANSLATIONS
===================================================== */

const text = {
  en: {
    portal: "KisanSetu Farmer Portal",
    login: "Farmer Login",
    register: "New Farmer Registration",
    existing: "Existing Farmer",
    newFarmer: "New Farmer",
    mobile: "Mobile Number",
    region: "Select Region",
    otp: "Enter OTP",
    sendOtp: "Send OTP",
    loginNow: "Login",
    create: "Create Farmer Profile",
    name: "Farmer Name",
    crop: "Crop",
    soilPH: "Soil pH",
    moisture: "Soil Moisture %",
    irrigation: "Irrigation",
    cropped: "Have you already cropped?",
    cropDate: "Cropping Date",
    loan: "Outstanding Loan",
    dueDays: "Loan Due In (Days)",
    yes: "Yes",
    no: "No",
    dashboard: "Farmer Dashboard",
    welcome: "Welcome",
    hyperlocal: "Hyperlocal Advisory",
    soil: "Soil Data",
    cropStage: "Crop Stage",
    weather: "Weather Forecast",
    risk: "Distress Risk",
    advisory: "Smart Advisory",
    listen: "Listen",
    logout: "Logout",
    temperature: "Temperature",
    humidity: "Humidity",
    rainfall: "Rainfall",
    rainChance: "Rain Probability",
    maturity: "Estimated Maturity",
    harvest: "Harvest Status",
    notReady: "Not ready",
    ready: "Ready for harvest",
    croppingTime: "Suitable for cropping",
    growth: "Crop is in growth stage",
    low: "LOW RISK",
    moderate: "MODERATE RISK",
    high: "HIGH RISK",
    critical: "CRITICAL RISK",
    good: "Current conditions are mostly favourable.",
    monitor: "Keep monitoring weather, crop and market conditions.",
    action:
      "Preventive action is recommended. Consider contacting an agriculture officer.",
    invalid: "Invalid details. Please check your information.",
    demo: "Demo OTP: 1234",
    mandi: "Nearby Mandi Prices",
    best: "Best price",
    quintal: "per quintal",
    marketDemo: "Regional demo market data",
    today: "Updated today",
  },

  hi: {
    portal: "किसानसेतु किसान पोर्टल",
    login: "किसान लॉगिन",
    register: "नए किसान का पंजीकरण",
    existing: "मौजूदा किसान",
    newFarmer: "नया किसान",
    mobile: "मोबाइल नंबर",
    region: "क्षेत्र चुनें",
    otp: "OTP डालें",
    sendOtp: "OTP भेजें",
    loginNow: "लॉगिन",
    create: "किसान प्रोफाइल बनाएं",
    name: "किसान का नाम",
    crop: "फसल",
    soilPH: "मिट्टी का pH",
    moisture: "मिट्टी की नमी %",
    irrigation: "सिंचाई",
    cropped: "क्या फसल बो चुके हैं?",
    cropDate: "बुवाई की तारीख",
    loan: "बकाया ऋण",
    dueDays: "ऋण चुकाने में दिन",
    yes: "हां",
    no: "नहीं",
    dashboard: "किसान डैशबोर्ड",
    welcome: "स्वागत है",
    hyperlocal: "स्थानीय कृषि सलाह",
    soil: "मिट्टी की जानकारी",
    cropStage: "फसल अवस्था",
    weather: "मौसम पूर्वानुमान",
    risk: "किसान जोखिम",
    advisory: "स्मार्ट सलाह",
    listen: "सुनें",
    logout: "लॉगआउट",
    temperature: "तापमान",
    humidity: "नमी",
    rainfall: "वर्षा",
    rainChance: "बारिश की संभावना",
    maturity: "अनुमानित पकने का समय",
    harvest: "कटाई स्थिति",
    notReady: "अभी तैयार नहीं",
    ready: "कटाई के लिए तैयार",
    croppingTime: "बुवाई के लिए उपयुक्त",
    growth: "फसल बढ़ने की अवस्था में है",
    low: "कम जोखिम",
    moderate: "मध्यम जोखिम",
    high: "उच्च जोखिम",
    critical: "गंभीर जोखिम",
    good: "वर्तमान परिस्थितियां ज्यादातर अनुकूल हैं।",
    monitor: "मौसम, फसल और बाजार की स्थिति पर नजर रखें।",
    action:
      "सावधानी जरूरी है। कृषि अधिकारी से संपर्क करने पर विचार करें।",
    invalid: "जानकारी गलत है। कृपया दोबारा जांचें।",
    demo: "डेमो OTP: 1234",
    mandi: "नजदीकी मंडी भाव",
    best: "सबसे अच्छा भाव",
    quintal: "प्रति क्विंटल",
    marketDemo: "क्षेत्र का डेमो बाजार डेटा",
    today: "आज अपडेट किया गया",
  },

  or: {
    portal: "କିଷାନସେତୁ କୃଷକ ପୋର୍ଟାଲ",
    login: "କୃଷକ ଲଗଇନ",
    register: "ନୂତନ କୃଷକ ପଞ୍ଜୀକରଣ",
    existing: "ପୁରୁଣା କୃଷକ",
    newFarmer: "ନୂତନ କୃଷକ",
    mobile: "ମୋବାଇଲ ନମ୍ବର",
    region: "ଅଞ୍ଚଳ ବାଛନ୍ତୁ",
    otp: "OTP ଦିଅନ୍ତୁ",
    sendOtp: "OTP ପଠାନ୍ତୁ",
    loginNow: "ଲଗଇନ",
    create: "କୃଷକ ପ୍ରୋଫାଇଲ ତିଆରି କରନ୍ତୁ",
    name: "କୃଷକଙ୍କ ନାମ",
    crop: "ଫସଲ",
    soilPH: "ମାଟି pH",
    moisture: "ମାଟି ଆର୍ଦ୍ରତା %",
    irrigation: "ଜଳସେଚନ",
    cropped: "ଆପଣ ଫସଲ ଲଗାଇଛନ୍ତି କି?",
    cropDate: "ଚାଷ ତାରିଖ",
    loan: "ବକେୟା ଋଣ",
    dueDays: "ଋଣ ଦେବାକୁ ବାକି ଦିନ",
    yes: "ହଁ",
    no: "ନା",
    dashboard: "କୃଷକ ଡ୍ୟାସବୋର୍ଡ",
    welcome: "ସ୍ୱାଗତ",
    hyperlocal: "ସ୍ଥାନୀୟ କୃଷି ପରାମର୍ଶ",
    soil: "ମାଟି ସୂଚନା",
    cropStage: "ଫସଲ ଅବସ୍ଥା",
    weather: "ପାଣିପାଗ ପୂର୍ବାନୁମାନ",
    risk: "କୃଷକ ବିପଦ",
    advisory: "ସ୍ମାର୍ଟ ପରାମର୍ଶ",
    listen: "ଶୁଣନ୍ତୁ",
    logout: "ଲଗଆଉଟ",
    temperature: "ତାପମାତ୍ରା",
    humidity: "ଆର୍ଦ୍ରତା",
    rainfall: "ବର୍ଷା",
    rainChance: "ବର୍ଷା ସମ୍ଭାବନା",
    maturity: "ଅନୁମାନିତ ପାକିବା ସମୟ",
    harvest: "ଅମଳ ସ୍ଥିତି",
    notReady: "ଏପର୍ଯ୍ୟନ୍ତ ପ୍ରସ୍ତୁତ ନୁହେଁ",
    ready: "ଅମଳ ପାଇଁ ପ୍ରସ୍ତୁତ",
    croppingTime: "ଚାଷ ପାଇଁ ଉପଯୁକ୍ତ",
    growth: "ଫସଲ ବୃଦ୍ଧି ଅବସ୍ଥାରେ ଅଛି",
    low: "କମ ବିପଦ",
    moderate: "ମଧ୍ୟମ ବିପଦ",
    high: "ଅଧିକ ବିପଦ",
    critical: "ଗୁରୁତର ବିପଦ",
    good: "ବର୍ତ୍ତମାନ ପରିସ୍ଥିତି ଅଧିକାଂଶ ଭଲ ଅଛି।",
    monitor: "ପାଣିପାଗ, ଫସଲ ଏବଂ ବଜାର ଉପରେ ନଜର ରଖନ୍ତୁ।",
    action: "ସତର୍କତା ଆବଶ୍ୟକ। କୃଷି ଅଧିକାରୀଙ୍କ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
    invalid: "ତଥ୍ୟ ଭୁଲ ଅଛି। ଦୟାକରି ପୁଣି ଯାଞ୍ଚ କରନ୍ତୁ।",
    demo: "ଡେମୋ OTP: 1234",
    mandi: "ନିକଟସ୍ଥ ମଣ୍ଡି ଦର",
    best: "ସର୍ବୋତ୍ତମ ଦର",
    quintal: "ପ୍ରତି କ୍ୱିଣ୍ଟାଲ",
    marketDemo: "ଅଞ୍ଚଳର ଡେମୋ ବଜାର ତଥ୍ୟ",
    today: "ଆଜି ଅପଡେଟ୍",
  },
};

/* =====================================================
   RISK
===================================================== */

function calculateRisk(farmer, regionData) {
  let score = 0;

  if (regionData.weather.rainfall < 5) score += 25;
  else if (regionData.weather.rainfall < 10) score += 18;
  else if (regionData.weather.rainfall < 15) score += 10;
  else score += 4;

  const ph = Number(farmer.soilPH);

  if (ph < 5 || ph > 8) score += 15;
  else if (ph < 5.5 || ph > 7.5) score += 10;
  else if (ph < 6 || ph > 7) score += 5;

  if (farmer.irrigation === "None") score += 15;
  else if (farmer.irrigation === "Rainfed") score += 12;
  else if (farmer.irrigation === "Borewell") score += 7;
  else score += 3;

  const moisture = Number(farmer.moisture);

  if (moisture < 30) score += 10;
  else if (moisture < 45) score += 7;
  else if (moisture < 60) score += 4;

  const loan = Number(farmer.loan);
  const due = Number(farmer.dueDays);

  if (due <= 15 && loan >= 50000) score += 20;
  else if (due <= 30 && loan >= 50000) score += 15;
  else if (due <= 30) score += 10;
  else if (due <= 60) score += 6;
  else score += 2;

  score += regionData.weather.priceStress;

  return Math.min(100, Math.round(score));
}

/* =====================================================
   TTS
===================================================== */

function speak(textToSpeak, language) {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const map = {
    en: "en-IN",
    hi: "hi-IN",
    or: "or-IN",
  };

  const utterance = new SpeechSynthesisUtterance(textToSpeak);

  utterance.lang = map[language];
  utterance.rate = 0.88;

  window.speechSynthesis.speak(utterance);
}

/* =====================================================
   LANGUAGE
===================================================== */

function LanguageButtons({ language, setLanguage }) {
  return (
    <div className="language-buttons">
      <button
        className={language === "en" ? "selected" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>

      <button
        className={language === "hi" ? "selected" : ""}
        onClick={() => setLanguage("hi")}
      >
        हिंदी
      </button>

      <button
        className={language === "or" ? "selected" : ""}
        onClick={() => setLanguage("or")}
      >
        ଓଡ଼ିଆ
      </button>
    </div>
  );
}



function FarmerLogin({
  language,
  setLanguage,
  farmers,
  onLogin,
  onRegister,
  backToRoles,
}) {
  const t = text[language];

  const [mode, setMode] = useState("existing");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    region: "cuttack",
    crop: "Rice",
    soilPH: "6.5",
    moisture: "60",
    irrigation: "Borewell",
    cropped: false,
    cropDate: "",
    loan: "0",
    dueDays: "90",
  });

  function update(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function sendOtp() {
    if (mobile.length !== 10) {
      setError(t.invalid);
      return;
    }

    const farmer = farmers.find(
      (item) => item.mobile === mobile
    );

    if (!farmer) {
      setError(
        "Demo farmer not found. Use one of the demo numbers below."
      );
      return;
    }

    setError("");
    setOtpSent(true);
  }

  function verifyOtp() {
    const farmer = farmers.find(
      (item) => item.mobile === mobile
    );

    if (!farmer || otp !== farmer.otp) {
      setError(t.invalid);
      return;
    }

    onLogin(farmer);
  }

  function register() {
    if (
      !form.name ||
      mobile.length !== 10 ||
      !form.crop ||
      !form.soilPH ||
      !form.moisture
    ) {
      setError(t.invalid);
      return;
    }

    const alreadyExists = farmers.some(
      (item) => item.mobile === mobile
    );

    if (alreadyExists) {
      setError("This mobile number is already registered.");
      return;
    }

    const newFarmer = {
      ...form,
      mobile,
      otp: "1234",
      soilPH: Number(form.soilPH),
      moisture: Number(form.moisture),
      loan: Number(form.loan),
      dueDays: Number(form.dueDays),
    };

    onRegister(newFarmer);
  }

  return (
    <div className="login-page">
      <div className="login-top">
        <div className="logo">
          🌾
          <span>KisanSetu</span>
        </div>

        <LanguageButtons
          language={language}
          setLanguage={setLanguage}
        />
      </div>

      <div className="login-card">
        <button
          className="back-button"
          onClick={backToRoles}
        >
          ← Back
        </button>

        <div className="portal-tag">
          {t.portal}
        </div>

        <h1>
          {mode === "existing"
            ? t.login
            : t.register}
        </h1>

        <div className="mode-buttons">
          <button
            className={mode === "existing" ? "active" : ""}
            onClick={() => {
              setMode("existing");
              setError("");
              setOtpSent(false);
            }}
          >
            {t.existing}
          </button>

          <button
            className={mode === "new" ? "active" : ""}
            onClick={() => {
              setMode("new");
              setError("");
              setOtpSent(false);
            }}
          >
            {t.newFarmer}
          </button>
        </div>

        <label>{t.mobile}</label>

        <input
          type="tel"
          maxLength="10"
          value={mobile}
          placeholder="9876543210"
          onChange={(e) =>
            setMobile(
              e.target.value.replace(/\D/g, "")
            )
          }
        />

        {mode === "existing" ? (
          <>
            {!otpSent ? (
              <button
                className="primary-button"
                onClick={sendOtp}
              >
                {t.sendOtp}
              </button>
            ) : (
              <>
                <div className="demo-otp">
                  {t.demo}
                </div>

                <label>{t.otp}</label>

                <input
                  maxLength="4"
                  value={otp}
                  placeholder="1234"
                  onChange={(e) =>
                    setOtp(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                />

                <button
                  className="primary-button"
                  onClick={verifyOtp}
                >
                  {t.loginNow}
                </button>
              </>
            )}

            <div className="demo-list">
              <strong>Demo Farmer Login</strong>

              {farmers.slice(0, 6).map((farmer) => (
                <p key={farmer.mobile}>
                  {farmer.mobile} → {farmer.name}
                </p>
              ))}

              <small>OTP: 1234</small>
            </div>
          </>
        ) : (
          <>
            <label>{t.name}</label>

            <input
              value={form.name}
              placeholder="Enter your name"
              onChange={(e) =>
                update("name", e.target.value)
              }
            />

            <label>{t.region}</label>

            <select
              value={form.region}
              onChange={(e) =>
                update("region", e.target.value)
              }
            >
              {Object.entries(regions).map(
                ([key, region]) => (
                  <option
                    key={key}
                    value={key}
                  >
                    {region.name}
                  </option>
                )
              )}
            </select>

            <label>{t.crop}</label>

            <select
              value={form.crop}
              onChange={(e) =>
                update("crop", e.target.value)
              }
            >
              <option>Rice</option>
              <option>Wheat</option>
              <option>Cotton</option>
              <option>Maize</option>
              <option>Vegetables</option>
              <option>Tomato</option>
              <option>Onion</option>
              <option>Potato</option>
              <option>Grapes</option>
            </select>

            <div className="two-columns">
              <div>
                <label>{t.soilPH}</label>

                <input
                  type="number"
                  step="0.1"
                  value={form.soilPH}
                  onChange={(e) =>
                    update(
                      "soilPH",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label>{t.moisture}</label>

                <input
                  type="number"
                  value={form.moisture}
                  onChange={(e) =>
                    update(
                      "moisture",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <label>{t.irrigation}</label>

            <select
              value={form.irrigation}
              onChange={(e) =>
                update(
                  "irrigation",
                  e.target.value
                )
              }
            >
              <option>Canal</option>
              <option>Borewell</option>
              <option>Drip</option>
              <option>Rainfed</option>
              <option>None</option>
            </select>

            <label>{t.cropped}</label>

            <div className="crop-toggle">
              <button
                className={
                  form.cropped ? "active" : ""
                }
                onClick={() =>
                  update("cropped", true)
                }
              >
                {t.yes}
              </button>

              <button
                className={
                  !form.cropped ? "active" : ""
                }
                onClick={() =>
                  update("cropped", false)
                }
              >
                {t.no}
              </button>
            </div>

            {form.cropped && (
              <>
                <label>{t.cropDate}</label>

                <input
                  type="date"
                  value={form.cropDate}
                  onChange={(e) =>
                    update(
                      "cropDate",
                      e.target.value
                    )
                  }
                />
              </>
            )}

            <div className="two-columns">
              <div>
                <label>{t.loan}</label>

                <input
                  type="number"
                  value={form.loan}
                  onChange={(e) =>
                    update(
                      "loan",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label>{t.dueDays}</label>

                <input
                  type="number"
                  value={form.dueDays}
                  onChange={(e) =>
                    update(
                      "dueDays",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <button
              className="primary-button"
              onClick={register}
            >
              {t.create}
            </button>
          </>
        )}

        {error && (
          <div className="error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

/* =====================================================
   OFFICER LOGIN
===================================================== */

function OfficerLogin({
  onLogin,
  backToRoles,
}) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  function sendOtp() {
    const officer = demoOfficers[mobile];

    if (!officer) {
      setError(
        "Invalid officer number. Please use a demo officer number."
      );
      return;
    }

    setError("");
    setOtpSent(true);
  }

  function verifyOtp() {
    const officer = demoOfficers[mobile];

    if (!officer || officer.otp !== otp) {
      setError("Invalid OTP.");
      return;
    }

    onLogin(officer);
  }

  return (
    <div className="login-page">
      <div className="login-top">
        <div className="logo">
          🌾
          <span>KisanSetu</span>
        </div>
      </div>

      <div className="login-card">
        <button
          className="back-button"
          onClick={backToRoles}
        >
          ← Back
        </button>

        <div className="portal-tag">
          KisanSetu Officer Portal
        </div>

        <h1>Officer Login</h1>

        <p className="login-description">
          Login to manage farmers from your
          assigned region.
        </p>

        <label>Officer Mobile Number</label>

        <input
          type="tel"
          maxLength="10"
          placeholder="9000000001"
          value={mobile}
          onChange={(e) =>
            setMobile(
              e.target.value.replace(/\D/g, "")
            )
          }
        />

        {!otpSent ? (
          <button
            className="primary-button"
            onClick={sendOtp}
          >
            Send OTP
          </button>
        ) : (
          <>
            <div className="demo-otp">
              Demo OTP: 1234
            </div>

            <label>Enter OTP</label>

            <input
              type="text"
              maxLength="4"
              placeholder="1234"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value.replace(
                    /\D/g,
                    ""
                  )
                )
              }
            />

            <button
              className="primary-button"
              onClick={verifyOtp}
            >
              Login as Officer
            </button>
          </>
        )}

        <div className="demo-list">
          <strong>Demo Officer Accounts</strong>

          <p>
            9000000001 → Cuttack Officer
          </p>

          <p>
            9000000002 → Bhubaneswar Officer
          </p>

          <p>
            9000000003 → Ludhiana Officer
          </p>

          <p>
            9000000004 → Nashik Officer
          </p>

          <p>
            9000000005 → Hyderabad Officer
          </p>

          <small>OTP: 1234</small>
        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

/* =====================================================
   ROLE SELECT
===================================================== */

function RoleSelect({
  language,
  setLanguage,
  selectRole,
}) {
  return (
    <div className="login-page">
      <div className="login-top">
        <div className="logo">
          🌾
          <span>KisanSetu</span>
        </div>

        <LanguageButtons
          language={language}
          setLanguage={setLanguage}
        />
      </div>

      <div className="login-card role-card">
        <div className="portal-tag">
  {language === "en"
    ? "SMART AGRICULTURAL PLATFORM"
    : language === "hi"
    ? "स्मार्ट कृषि मंच"
    : "ସ୍ମାର୍ଟ କୃଷି ପ୍ଲାଟଫର୍ମ"}
</div>

       <h1>
  {language === "en"
    ? "Welcome to KisanSetu"
    : language === "hi"
    ? "किसानसेतु में आपका स्वागत है"
    : "କିଷାନସେତୁକୁ ସ୍ୱାଗତ"}
</h1>

<p className="login-description">
  {language === "en"
    ? "Select your portal to continue"
    : language === "hi"
    ? "जारी रखने के लिए अपना पोर्टल चुनें"
    : "ଜାରି ରଖିବା ପାଇଁ ଆପଣଙ୍କ ପୋର୍ଟାଲ ବାଛନ୍ତୁ"}
</p>

        <div className="role-options">
          <button
            className="role-option"
            onClick={() =>
              selectRole("farmer")
            }
          >
            <span>👨‍🌾</span>

            <div>
              <strong>{language === "en" ? "Farmer Portal" : language === "hi" ? "किसान पोर्टल" : "କୃଷକ ପୋର୍ଟାଲ"}</strong><br></br>
              <small>
  {language === "en"
    ? "Get crop advisory, weather, mandi prices & risk alerts"
    : language === "hi"
    ? "फसल सलाह, मौसम, मंडी भाव और जोखिम अलर्ट प्राप्त करें"
    : "ଫସଲ ପରାମର୍ଶ, ପାଣିପାଗ, ମଣ୍ଡି ଦର ଏବଂ ବିପଦ ସତର୍କତା ପାଆନ୍ତୁ"}
</small>
            </div>
          </button>

          <button
            className="role-option"
            onClick={() =>
              selectRole("officer")
            }
          >
            <span>👨‍💼</span>

            <div>
              <strong>{language === "en" ? "Officer Portal" : language === "hi" ? "अधिकारी पोर्टल" : "ଅଧିକାରୀ ପୋର୍ଟାଲ"}</strong><br></br>
              <small>
  {language === "en"
    ? "Monitor and assist farmers in your assigned region"
    : language === "hi"
    ? "अपने क्षेत्र के किसानों की निगरानी और सहायता करें"
    : "ଆପଣଙ୍କ ଅଞ୍ଚଳର କୃଷକମାନଙ୍କୁ ନଜର ରଖନ୍ତୁ ଏବଂ ସହାୟତା କରନ୍ତୁ"}
</small>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   FARMER SOIL CARD
===================================================== */

function SoilCard({ farmer, t }) {
  const ph = Number(farmer.soilPH);

  const position = Math.min(
    97,
    Math.max(
      3,
      ((ph - 3) / 6) * 100
    )
  );

  return (
    <div className="card">
      <div className="card-heading">
        <div>
          <small>01 / SOIL</small>
          <h2>{t.soil}</h2>
        </div>

        <span>🌱</span>
      </div>

      <div className="ph-value">
        <strong>{ph}</strong>
        <span>pH</span>
      </div>

      <div className="ph-meter">
        <div
          className="ph-marker"
          style={{
            left: `${position}%`,
          }}
        >
          {ph}
        </div>
      </div>

      <div className="ph-scale">
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>

      <div className="soil-info">
        <div>
          <small>{t.soilPH}</small>

          <strong>
            {ph >= 6 && ph <= 7.5
              ? "Good"
              : "Needs attention"}
          </strong>
        </div>

        <div>
          <small>{t.moisture}</small>

          <strong>
            {farmer.moisture}%
          </strong>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   CROP CARD
===================================================== */

function CropCard({ farmer, t }) {
  let stage = farmer.cropped
    ? t.growth
    : t.croppingTime;

  let maturity = farmer.cropped
    ? "30–45 days"
    : "After cropping";

  let harvest = farmer.cropped
    ? t.notReady
    : "—";

  if (farmer.cropDate) {
    const planted = new Date(
      farmer.cropDate
    );

    const today = new Date(
      "2026-08-30"
    );

    const days = Math.floor(
      (today - planted) /
        (1000 * 60 * 60 * 24)
    );

    if (days >= 100) {
      stage = t.ready;
      maturity = "Now";
      harvest = t.ready;
    }
  }

  return (
    <div className="card">
      <div className="card-heading">
        <div>
          <small>02 / CROP</small>
          <h2>{t.cropStage}</h2>
        </div>

        <span>🌾</span>
      </div>

      <div className="crop-status">
        <div className="big-crop-icon">
          🌿
        </div>

        <div>
          <small>{t.crop}</small>
          <strong>{farmer.crop}</strong>
        </div>
      </div>

      <div className="stage-row">
        <span>01</span>

        <div>
          <small>{t.cropped}</small>

          <strong>
            {farmer.cropped
              ? t.yes
              : t.no}
          </strong>
        </div>
      </div>

      <div className="stage-row">
        <span>02</span>

        <div>
          <small>{t.maturity}</small>

          <strong>
            {maturity}
          </strong>
        </div>
      </div>

      <div className="stage-row">
        <span>03</span>

        <div>
          <small>{t.harvest}</small>

          <strong>
            {harvest}
          </strong>
        </div>
      </div>

      <div className="stage-message">
        {stage}
      </div>
    </div>
  );
}

/* =====================================================
   WEATHER
===================================================== */

function WeatherCard({ weather, t }) {
  return (
    <div className="weather-layout">
      <div className="card weather-main">
        <div className="weather-top">
          <div>
            <small>TODAY</small>

            <h2>
              {weather.temp}°
            </h2>

            <p>
              Regional demo weather
            </p>
          </div>

          <div className="weather-symbol">
            🌤️
          </div>
        </div>

        <div className="weather-details">
          <div>
            <span>🌡️</span>
            <small>{t.temperature}</small>
            <strong>
              {weather.temp}°C
            </strong>
          </div>

          <div>
            <span>💧</span>
            <small>{t.humidity}</small>
            <strong>
              {weather.humidity}%
            </strong>
          </div>

          <div>
            <span>🌧️</span>
            <small>{t.rainfall}</small>
            <strong>
              {weather.rainfall} mm
            </strong>
          </div>

          <div>
            <span>☔</span>
            <small>{t.rainChance}</small>
            <strong>
              {weather.rainChance}%
            </strong>
          </div>
        </div>
      </div>

      <div className="card mini-forecast">
        <h3>Next 5 Days</h3>

        {[
          ["Mon", "☀️", "32°"],
          ["Tue", "🌤️", "33°"],
          ["Wed", "🌧️", "30°"],
          ["Thu", "🌦️", "29°"],
          ["Fri", "☀️", "31°"],
        ].map(
          ([day, icon, temp]) => (
            <div key={day}>
              <span>{day}</span>
              <span>{icon}</span>
              <strong>{temp}</strong>
            </div>
          )
        )}
      </div>
    </div>
  );
}

/* =====================================================
   MANDI
===================================================== */

function MandiCard({
  farmer,
  region,
  t,
}) {
  const mandis =
    mandiData[region] || [];

  const matchingMandis =
    mandis.filter(
      (mandi) =>
        mandi.crop.toLowerCase() ===
        farmer.crop.toLowerCase()
    );

  const displayMandis =
    matchingMandis.length > 0
      ? matchingMandis
      : mandis;

  const sortedMandis =
    [...displayMandis].sort(
      (a, b) => b.rate - a.rate
    );

  const bestMandi =
    sortedMandis[0];

  return (
    <div className="card mandi-card">
      <div className="card-heading">
        <div>
          <small>
            04 / MARKET
          </small>

          <h2>{t.mandi}</h2>
        </div>

        <span>📈</span>
      </div>

      <div className="mandi-subtitle">
        {t.marketDemo}
      </div>

      <div className="mandi-list">
        {sortedMandis.map(
          (mandi, index) => {
            const isBest =
              mandi.name ===
              bestMandi?.name;

            return (
              <div
                key={mandi.name}
                className={`mandi-row ${
                  isBest
                    ? "best-mandi"
                    : ""
                }`}
              >
                <div className="mandi-rank">
                  {index + 1}
                </div>

                <div className="mandi-info">
                  <strong>
                    {mandi.name}
                  </strong>

                  <small>
                    {mandi.crop}
                    {isBest &&
                      ` • ${t.best}`}
                  </small>
                </div>

                <div className="mandi-rate">
                  ₹
                  {mandi.rate.toLocaleString(
                    "en-IN"
                  )}

                  <small>
                    {t.quintal}
                  </small>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="mandi-footer">
        <span>
          🕐 {t.today}
        </span>

        <span>Demo Data</span>
      </div>
    </div>
  );
}

/* =====================================================
   RISK CARD
===================================================== */

function RiskCard({
  farmer,
  regionData,
  t,
}) {
  const score = useMemo(
    () =>
      calculateRisk(
        farmer,
        regionData
      ),
    [farmer, regionData]
  );

  let level = t.low;
  let className = "low";
  let message = t.good;

  if (score > 30) {
    level = t.moderate;
    className = "moderate";
    message = t.monitor;
  }

  if (score > 60) {
    level = t.high;
    className = "high";
    message = t.action;
  }

  if (score > 80) {
    level = t.critical;
    className = "critical";
  }

  return (
    <div
      className={`risk-card ${className}`}
    >
      <div className="risk-top">
        <div>
          <small>
            03 / EARLY WARNING
          </small>

          <h2>{t.risk}</h2>
        </div>

        <div className="risk-number">
          {score}
          <span>/100</span>
        </div>
      </div>

      <div className="risk-track">
        <div
          className="risk-progress"
          style={{
            width: `${score}%`,
          }}
        />
      </div>

      <div className="risk-status">
        <strong>{level}</strong>

        <span>
          {score <= 30
            ? "Safe zone"
            : score <= 60
            ? "Attention zone"
            : score <= 80
            ? "Action zone"
            : "Critical zone"}
        </span>
      </div>

      <p className="risk-message">
        {message}
      </p>

      <div className="risk-factors">
        <span>🌧 Weather</span>
        <span>🌱 Soil</span>
        <span>💧 Irrigation</span>
        <span>💰 Loan</span>
        <span>📈 Market</span>
      </div>
    </div>
  );
}

/* =====================================================
   ADVISORY
===================================================== */

function Advisory({
  farmer,
  regionData,
  score,
  language,
  t,
}) {
  const message =
    score <= 30
      ? t.good
      : score <= 60
      ? t.monitor
      : t.action;

  function listen() {
    const spokenText =
      language === "hi"
        ? `${farmer.name}. किसान जोखिम ${score} प्रतिशत है। ${message}`
        : language === "or"
        ? `${farmer.name}. କୃଷକ ବିପଦ ${score} ପ୍ରତିଶତ ଅଟେ। ${message}`
        : `${farmer.name}. Farmer risk is ${score} percent. ${message}`;

    speak(
      spokenText,
      language
    );
  }

  return (
    <div className="advisory">
      <div className="advisory-icon">
        💡
      </div>

      <div className="advisory-content">
        <div className="advisory-head">
          <div>
            <small>
              {t.advisory}
            </small>

            <h2>
              Personalized Recommendation
            </h2>
          </div>

          <button onClick={listen}>
            🔊 {t.listen}
          </button>
        </div>

        <p>{message}</p>

        <div className="tags">
          <span>
            🌾 {farmer.crop}
          </span>

          <span>
            📍 {regionData.name}
          </span>

          <span>
            ⚠️ {score}/100
          </span>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   FARMER DASHBOARD
===================================================== */

function FarmerDashboard({
  farmer,
  language,
  setLanguage,
  logout,
}) {
  const t = text[language];

  const regionData =
    regions[farmer.region];

  const score = useMemo(
    () =>
      calculateRisk(
        farmer,
        regionData
      ),
    [farmer, regionData]
  );

  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="brand">
          <div className="brand-mark">
            🌾
          </div>

          <div>
            <strong>KisanSetu</strong>
            <small>
              Farmer Portal
            </small>
          </div>
        </div>

        <div className="nav-right">
          <LanguageButtons
            language={language}
            setLanguage={setLanguage}
          />

          <button
            className="logout"
            onClick={logout}
          >
            {t.logout}
          </button>
        </div>
      </header>

      <main className="content">
        <section className="welcome">
          <div>
            <small>
              {regionData.name}
            </small>

            <h1>
              {t.welcome},{" "}
              {farmer.name.split(" ")[0]} 👋
            </h1>

            <p>
              Your personalized
              hyperlocal crop advisory
            </p>
          </div>

          <div className="crop-badge">
            🌱 {farmer.crop}
          </div>
        </section>

        <div className="section-title">
          <span>01</span>
          <h2>{t.hyperlocal}</h2>
        </div>

        <div className="two-card-grid">
          <SoilCard
            farmer={farmer}
            t={t}
          />

          <CropCard
            farmer={farmer}
            t={t}
          />
        </div>

        <div className="section-title">
          <span>02</span>
          <h2>{t.weather}</h2>
        </div>

        <WeatherCard
          weather={regionData.weather}
          t={t}
        />

        <div className="section-title">
          <span>03</span>
          <h2>{t.risk}</h2>
        </div>

        <div className="risk-grid">
          <RiskCard
            farmer={farmer}
            regionData={regionData}
            t={t}
          />

          <div className="card loan-card">
            <div className="card-heading">
              <div>
                <small>
                  FINANCIAL
                </small>

                <h2>
                  Loan Details
                </h2>
              </div>

              <span>💰</span>
            </div>

            <div className="loan-number">
              ₹
              {Number(
                farmer.loan
              ).toLocaleString(
                "en-IN"
              )}
            </div>

            <small>
              Outstanding loan
            </small>

            <div className="due-box">
              <span>⏳</span>

              <div>
                <small>
                  Loan due in
                </small>

                <strong>
                  {farmer.dueDays} days
                </strong>
              </div>
            </div>

            <div className="input-summary">
              <span>Soil pH</span>

              <strong>
                {farmer.soilPH}
              </strong>
            </div>

            <div className="input-summary">
              <span>
                Irrigation
              </span>

              <strong>
                {farmer.irrigation}
              </strong>
            </div>

            <div className="input-summary">
              <span>
                Moisture
              </span>

              <strong>
                {farmer.moisture}%
              </strong>
            </div>
          </div>
        </div>

        <div className="section-title">
          <span>04</span>
          <h2>{t.mandi}</h2>
        </div>

        <MandiCard
          farmer={farmer}
          region={farmer.region}
          t={t}
        />

        <Advisory
          farmer={farmer}
          regionData={regionData}
          score={score}
          language={language}
          t={t}
        />
      </main>
    </div>
  );
}

/* =====================================================
   OFFICER DASHBOARD
===================================================== */

function OfficerDashboard({
  
  officer,
  farmers,
  logout,
})
 {
   const [language, setLanguage] = useState("en");
  const regionData =
    regions[officer.region];

  /* IMPORTANT:
     Officer only receives farmers
     belonging to his own region.
  */

  const regionalFarmers =
    farmers.filter(
      (farmer) =>
        farmer.region ===
        officer.region
    );

  const highRiskFarmers =
    regionalFarmers.filter(
      (farmer) =>
        calculateRisk(
          farmer,
          regionData
        ) > 60
    );

  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="brand">
          <div className="brand-mark">
            🌾
          </div>

          <div>
            <strong>
  {language === "en"
    ? "KisanSetu"
    : language === "hi"
    ? "किसानसेतु"
    : "କିଷାନସେତୁ"}
</strong>

            <small>
              Officer Portal
            </small>
          </div>
        </div>

        <div className="nav-right">
          <div className="officer-region">
            📍 {regionData.name}
          </div>

          <button
            className="logout"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </header>

      <main className="content">
        <section className="welcome">
          <div>
            <small>
              Officer Dashboard
            </small>

            <h1>
              Welcome,{" "}
              {officer.name.split(
                " "
              )[0]} 👋
            </h1>

            <p>
              Monitoring farmers from
              your assigned region
            </p>
          </div>

          <div className="crop-badge">
            📍 {regionData.name}
          </div>
        </section>

        {/* STATS */}

        <div className="section-title">
          <span>01</span>
          <h2>Regional Overview</h2>
        </div>

        <div className="officer-stats">
          <div className="card officer-stat">
            <span>👨‍🌾</span>

            <small>
              Total Farmers
            </small>

            <strong>
              {regionalFarmers.length}
            </strong>
          </div>

          <div className="card officer-stat">
            <span>⚠️</span>

            <small>
              High Risk Farmers
            </small>

            <strong>
              {highRiskFarmers.length}
            </strong>
          </div>

          <div className="card officer-stat">
            <span>🌱</span>

            <small>
              Active Crops
            </small>

            <strong>
              {
                regionalFarmers.filter(
                  (f) => f.cropped
                ).length
              }
            </strong>
          </div>
        </div>

        {/* FARMER LIST */}

        <div className="section-title">
          <span>02</span>
          <h2>
            Farmers in Your Region
          </h2>
        </div>

        <div className="officer-farmer-list">
          {regionalFarmers.length ===
          0 ? (
            <div className="card empty-state">
              <div>🌾</div>

              <h3>
                No farmers registered
                yet
              </h3>

              <p>
                New farmers from your
                region will appear
                here automatically.
              </p>
            </div>
          ) : (
            regionalFarmers.map(
              (farmer) => {
                const risk =
                  calculateRisk(
                    farmer,
                    regionData
                  );

                const riskClass =
                  risk > 80
                    ? "critical"
                    : risk > 60
                    ? "high"
                    : risk > 30
                    ? "moderate"
                    : "low";

                return (
                  <div
                    className="card officer-farmer"
                    key={
                      farmer.mobile
                    }
                  >
                    <div className="farmer-avatar">
                      👨‍🌾
                    </div>

                    <div className="farmer-main">
                      <div className="farmer-name-row">
                        <div>
                          <h3>
                            {
                              farmer.name
                            }
                          </h3>

                          <small>
                            📱{" "}
                            {
                              farmer.mobile
                            }
                          </small>
                        </div>

                        <span
                          className={`officer-risk ${riskClass}`}
                        >
                          {risk}/100
                        </span>
                      </div>

                      <div className="farmer-details">
                        <span>
                          🌾{" "}
                          <strong>
                            {farmer.crop}
                          </strong>
                        </span>

                        <span>
                          🌱 pH{" "}
                          <strong>
                            {
                              farmer.soilPH
                            }
                          </strong>
                        </span>

                        <span>
                          💧{" "}
                          <strong>
                            {
                              farmer.moisture
                            }
                            %
                          </strong>
                        </span>

                        <span>
                          🚰{" "}
                          <strong>
                            {
                              farmer.irrigation
                            }
                          </strong>
                        </span>

                        <span>
                          💰 ₹
                          {Number(
                            farmer.loan
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </div>

                      <div className="farmer-status">
                        <span>
                          {farmer.cropped
                            ? "🌿 Crop Active"
                            : "🌱 Not Cropped"}
                        </span>

                        <span>
                          Loan due in{" "}
                          <strong>
                            {
                              farmer.dueDays
                            }{" "}
                            days
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )
          )}
        </div>

        {/* HIGH RISK */}

        <div className="section-title">
          <span>03</span>
          <h2>
            Farmers Requiring Attention
          </h2>
        </div>

        <div className="card officer-alert">
          <div className="alert-icon">
            ⚠️
          </div>

          <div>
            <h3>
              {highRiskFarmers.length}{" "}
              farmer(s) need attention
            </h3>

            <p>
              These farmers have a
              distress risk score above
              60 and may require
              intervention.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

/* =====================================================
   APP
===================================================== */

export default function App() {
  const [language, setLanguage] =
    useState("en");

  

  const [farmers, setFarmers] =
    useState(demoFarmers);

  const [role, setRole] =
    useState(null);

  const [currentFarmer, setCurrentFarmer] =
    useState(null);

  const [currentOfficer, setCurrentOfficer] =
    useState(null);

  function registerFarmer(newFarmer) {
    setFarmers((previous) => [
      ...previous,
      newFarmer,
    ]);

    setCurrentFarmer(newFarmer);
  }

  function farmerLogin(farmer) {
    setCurrentFarmer(farmer);
  }

  function officerLogin(officer) {
    setCurrentOfficer(officer);
  }

  function logout() {
    setCurrentFarmer(null);
    setCurrentOfficer(null);
    setRole(null);
  }

  /* =========================
     ROLE SELECTION
  ========================= */

  if (!role) {
    return (
      <RoleSelect
        language={language}
        setLanguage={setLanguage}
        selectRole={setRole}
      />
    );
  }

  /* =========================
     FARMER PORTAL
  ========================= */

  if (
    role === "farmer" &&
    !currentFarmer
  ) {
    return (
      <FarmerLogin
        language={language}
        setLanguage={setLanguage}
        farmers={farmers}
        onLogin={farmerLogin}
        onRegister={registerFarmer}
        backToRoles={() =>
          setRole(null)
        }
      />
    );
  }

  /* =========================
     OFFICER PORTAL
  ========================= */

  if (
    role === "officer" &&
    !currentOfficer
  ) {
    return (
      <OfficerLogin
        onLogin={officerLogin}
        backToRoles={() =>
          setRole(null)
        }
      />
    );
  }

  /* =========================
     FARMER DASHBOARD
  ========================= */

  if (currentFarmer) {
    return (
      <FarmerDashboard
        farmer={currentFarmer}
        language={language}
        setLanguage={setLanguage}
        logout={logout}
      />
    );
  }

  /* =========================
     OFFICER DASHBOARD
  ========================= */

  if (currentOfficer) {
    return (
      <OfficerDashboard
        officer={currentOfficer}
        farmers={farmers}
        logout={logout}
      />
    );
  }

  return null;
}

