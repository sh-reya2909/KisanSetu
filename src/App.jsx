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
  name: "Gurpreet Singh",
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
    tagline: "SMART AGRICULTURAL PLATFORM",
welcomeKisan: "Welcome to KisanSetu",
selectPortal: "Select your portal to continue",
farmerPortal: "Farmer Portal",
farmerDescription: "Get crop advisory, weather, mandi prices & risk alerts",
officerPortal: "Officer Portal",
officerDescription: "Monitor and assist farmers in your assigned region",
next5Days: "Next 5 Days",
mon: "Mon",
tue: "Tue",
wed: "Wed",
thu: "Thu",
fri: "Fri",
financial: "FINANCIAL",
loanDetails: "Loan Details",
outstandingLoan: "Outstanding Loan",
loanDueIn: "Loan due in",
days: "days",
irrigationLabel: "Irrigation",
moistureLabel: "Moisture",
safeZone: "Safe zone",
attentionZone: "Attention zone",
actionZone: "Action zone",
criticalZone: "Critical zone",
weatherLabel: "Weather",
soilLabel: "Soil",
marketLabel: "Market",
regionalDemoWeather: "Regional demo weather",
next5Days: "Next 5 Days",
today: "Today",
personalized: "Personalized Recommendation",
personalizedAdvisory: "Your Personalized Hyperlocal Advisory",
officerLogin: "Officer Login",
officerMobile: "Officer Mobile Number", sendOtp: "Send OTP", enterOtp: "Enter OTP", 
loginOfficer: "Login as Officer",
statusGood: "Good",
statusAttention: "Needs Attention",
kisanSetu: "KisanSetu",
  },

  hi: {
    portal: "किसानसेतु किसान पोर्टल",
personalizedAdvisory: "आपकी व्यक्तिगत स्थानीय सलाह",
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
   officerLogin: "अधिकारी लॉगिन",
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
    tagline: "स्मार्ट कृषि मंच",
welcomeKisan: "किसानसेतु में आपका स्वागत है",
selectPortal: "जारी रखने के लिए अपना पोर्टल चुनें",
farmerPortal: "किसान पोर्टल",
farmerDescription: "फसल सलाह, मौसम, मंडी भाव और जोखिम अलर्ट प्राप्त करें",
officerPortal: "अधिकारी पोर्टल",
officerDescription: "अपने क्षेत्र के किसानों की निगरानी और सहायता करें",
farmerPortal: "किसान पोर्टल",
farmerDescription: "फसल सलाह, मौसम, मंडी भाव और जोखिम अलर्ट प्राप्त करें",
officerDescription: "अपने क्षेत्र के किसानों की निगरानी और सहायता करें",
mon: "सोम",
tue: "मंगल",
wed: "बुध",
thu: "गुरु",
fri: "शुक्र",
next5Days: "अगले 5 दिन",
financial: "वित्तीय",
loanDetails: "ऋण विवरण",
outstandingLoan: "बकाया ऋण",
loanDueIn: "ऋण चुकाने में",
days: "दिन",
irrigationLabel: "सिंचाई",
moistureLabel: "नमी",
safeZone: "सुरक्षित क्षेत्र",
attentionZone: "सावधानी क्षेत्र",
actionZone: "कार्रवाई क्षेत्र",
criticalZone: "गंभीर क्षेत्र",
weatherLabel: "मौसम",
soilLabel: "मिट्टी",
marketLabel: "बाज़ार",
regionalDemoWeather: "क्षेत्रीय डेमो मौसम",
next5Days: "अगले 5 दिन",
today: "आज",
personalized: "व्यक्तिगत सुझाव",
officerMobile: "अधिकारी का मोबाइल नंबर",
sendOtp: "OTP भेजें",
enterOtp: "OTP दर्ज करें",
loginOfficer: "अधिकारी के रूप में लॉगिन करें",
statusGood: "अच्छा",
statusAttention: "ध्यान देने की आवश्यकता",
kisanSetu: "किसानसेतु",
  },

  or: {
    portal: "କିଷାନସେତୁ କୃଷକ ପୋର୍ଟାଲ",
personalizedAdvisory: "ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ସ୍ଥାନୀୟ ପରାମର୍ଶ",
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
    personalized: "ବ୍ୟକ୍ତିଗତ ପରାମର୍ଶ",
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
    tagline: "ସ୍ମାର୍ଟ କୃଷି ପ୍ଲାଟଫର୍ମ",
welcomeKisan: "କିଷାନସେତୁକୁ ସ୍ୱାଗତ",
selectPortal: "ଜାରି ରଖିବା ପାଇଁ ଆପଣଙ୍କ ପୋର୍ଟାଲ ବାଛନ୍ତୁ",
farmerPortal: "କୃଷକ ପୋର୍ଟାଲ",
farmerDescription: "ଫସଲ ପରାମର୍ଶ, ପାଣିପାଗ, ମଣ୍ଡି ଦର ଏବଂ ବିପଦ ସତର୍କତା ପାଆନ୍ତୁ",
officerPortal: "ଅଧିକାରୀ ପୋର୍ଟାଲ",
officerDescription: "ଆପଣଙ୍କ ଅଞ୍ଚଳର କୃଷକମାନଙ୍କୁ ନଜର ରଖନ୍ତୁ ଏବଂ ସହାୟତା କରନ୍ତୁ",
next5Days: "ପରବର୍ତ୍ତୀ ୫ ଦିନ",
mon: "ସୋମ",
tue: "ମଙ୍ଗଳ",
wed: "ବୁଧ",
thu: "ଗୁରୁ",
fri: "ଶୁକ୍ର",
financial: "ଆର୍ଥିକ",
loanDetails: "ଋଣ ବିବରଣୀ",
outstandingLoan: "ବକେୟା ଋଣ",
loanDueIn: "ଋଣ ପରିଶୋଧ କରିବାକୁ",
days: "ଦିନ",
irrigationLabel: "ଜଳସେଚନ",
moistureLabel: "ଆର୍ଦ୍ରତା",
safeZone: "ସୁରକ୍ଷିତ ଅଞ୍ଚଳ",
attentionZone: "ସତର୍କତା ଅଞ୍ଚଳ",
actionZone: "କାର୍ଯ୍ୟ ଅଞ୍ଚଳ",
criticalZone: "ଗୁରୁତର ଅଞ୍ଚଳ",
weatherLabel: "ପାଣିପାଗ",
soilLabel: "ମାଟି",
marketLabel: "ବଜାର",
regionalDemoWeather: "ଆଞ୍ଚଳିକ ଡେମୋ ପାଣିପାଗ",
next5Days: "ପରବର୍ତ୍ତୀ ୫ ଦିନ",
today: "ଆଜି",
officerMobile: "ଅଧିକାରୀଙ୍କ ମୋବାଇଲ୍ ନମ୍ବର",
sendOtp: "OTP ପଠାନ୍ତୁ",
enterOtp: "OTP ପ୍ରବେଶ କରନ୍ତୁ",
loginOfficer: "ଅଧିକାରୀ ଭାବେ ଲଗଇନ୍ କରନ୍ତୁ",
statusGood: "ଭଲ",
statusAttention: "ଧ୍ୟାନ ଆବଶ୍ୟକ",
kisanSetu: "କିଷାନସେତୁ",
  },
  bn: {
  portal: "অফিসার পোর্টাল",
  dashboard: "অফিসার ড্যাশবোর্ড",
  welcome: "স্বাগতম",
  monitoring: "আপনার নির্ধারিত এলাকার কৃষকদের পর্যবেক্ষণ",
  overview: "আঞ্চলিক পর্যালোচনা",
  total: "মোট কৃষক",
  highRisk: "উচ্চ ঝুঁকিপূর্ণ কৃষক",
  active: "সক্রিয় ফসল",
  farmers: "আপনার এলাকার কৃষক",
  noFarmers: "এখনও কোনো কৃষক নিবন্ধিত হয়নি",
  newFarmers: "আপনার এলাকার নতুন কৃষকরা এখানে দেখা যাবে।",
  riskometer: "ঝুঁকির মাত্রা",
  low: "কম",
  moderate: "মাঝারি",
  high: "উচ্চ",
  crop: "ফসল",
  irrigation: "সেচ",
  soilPH: "মাটির pH",
  loanDue: "ঋণ বকেয়া",
  days: "দিন",
  activeCrop: "ফসল সক্রিয়",
  notCropped: "কোনো ফসল নেই",
  attention: "যেসব কৃষকের প্রতি মনোযোগ প্রয়োজন",
  needAttention: "কৃষকের মনোযোগ প্রয়োজন",
  intervention: "এই কৃষকদের ঝুঁকির স্কোর ৬০-এর বেশি এবং তাদের সহায়তার প্রয়োজন হতে পারে।",
  personalized: "ব্যক্তিগত পরামর্শ",
  logout: "লগ আউট",
  farmer: "কৃষক",
  phone: "ফোন",
  farmerPortal: "কৃষক পোর্টাল",
farmerDescription: "ফসলের পরামর্শ, আবহাওয়া, মান্ডির দাম এবং ঝুঁকির সতর্কতা পান",
officerPortal: "অফিসার পোর্টাল",
officerDescription: "আপনার নির্ধারিত এলাকার কৃষকদের পর্যবেক্ষণ করুন এবং তাদের সহায়তা করুন",
good: "ভালো",
days: "দিন",
cropped: "আপনি কি ইতিমধ্যে চাষ করেছেন?",
yes: "হ্যাঁ",
moisture: "মাটির আর্দ্রতা %",
hyperlocal: "আপনার জন্য ব্যক্তিগতকৃত স্থানীয় ফসলের পরামর্শ",
todayLabel: "আজ",
regionalWeather: "আঞ্চলিক ডেমো আবহাওয়া",
next5Days: "পরবর্তী ৫ দিন",
mon: "সোম",
tue: "মঙ্গল",
wed: "বুধ",
thu: "বৃহস্পতি",
fri: "শুক্র",
temperature: "তাপমাত্রা",
humidity: "আর্দ্রতা",
rainfall: "বৃষ্টিপাত",
rainChance: "বৃষ্টির সম্ভাবনা",
maturity: "আনুমানিক পরিপক্বতা",
growth: "ফসল বৃদ্ধির পর্যায়ে রয়েছে",
harvest: "ফসল কাটার অবস্থা",
notReady: "প্রস্তুত নয়",
financial: "আর্থিক",
loanDetails: "ঋণের বিবরণ",
outstandingLoan: "বকেয়া ঋণ",
loanDueIn: "ঋণ পরিশোধের সময়",
days: "দিন",
irrigationLabel: "সেচ",
moistureLabel: "আর্দ্রতা",
safeZone: "নিরাপদ অঞ্চল",
attentionZone: "সতর্কতা অঞ্চল",
actionZone: "করণীয় অঞ্চল",
criticalZone: "গুরুতর অঞ্চল",
weatherLabel: "আবহাওয়া",
soilLabel: "মাটি",
marketLabel: "বাজার",
regionalDemoWeather: "আঞ্চলিক ডেমো আবহাওয়া",
next5Days: "পরবর্তী ৫ দিন",
today: "আজ",
risk: "ঝুঁকির মাত্রা",
mandi: "কাছাকাছি মাণ্ডির দাম",
marketDemo: "আঞ্চলিক ডেমো বাজারের তথ্য",
market: "বাজার",
advisory: "স্মার্ট পরামর্শ",
back: "পিছনে",
platform: "স্মার্ট কৃষি প্ল্যাটফর্ম",
welcome: "স্বাগতম",
existing: "বিদ্যমান কৃষক",
newFarmer: "নতুন কৃষক",
mobile: "মোবাইল নম্বর",
sendOtp: "OTP পাঠান",
demo: "ডেমো কৃষক লগইন",
tagline: "স্মার্ট কৃষি প্ল্যাটফর্ম",
personalizedAdvisory: "আপনার ব্যক্তিগত স্থানীয় পরামর্শ",
officerMobile: "অফিসারের মোবাইল নম্বর",
sendOtp: "OTP পাঠান",
enterOtp: "OTP লিখুন",
loginOfficer: "অফিসার হিসেবে লগইন করুন",
weather: "আবহাওয়া",
soil: "মাটি",
irrigation: "সেচ",
loan: "ঋণ",
mandi: "মাণ্ডি",
statusGood: "ভালো",
statusAttention: "মনোযোগ প্রয়োজন",
kisanSetu: "কিষানসেতু",
},
mr: {
  portal: "अधिकारी पोर्टल",
  dashboard: "अधिकारी डॅशबोर्ड",
  welcome: "स्वागत आहे",
  monitoring: "आपल्या नियुक्त क्षेत्रातील शेतकऱ्यांचे निरीक्षण",
  overview: "प्रादेशिक आढावा",
  total: "एकूण शेतकरी",
  highRisk: "उच्च जोखमीचे शेतकरी",
  active: "सक्रिय पिके",
  farmers: "आपल्या क्षेत्रातील शेतकरी",
  noFarmers: "अद्याप कोणताही शेतकरी नोंदणीकृत नाही",
  newFarmers: "आपल्या क्षेत्रातील नवीन शेतकरी येथे दिसतील.",
  tagline: "स्मार्ट कृषी प्लॅटफॉर्म",
personalizedAdvisory: "तुमच्यासाठी वैयक्तिक स्थानिक सल्ला",
  riskometer: "जोखीम पातळी",
  low: "कमी",
  moderate: "मध्यम",
  high: "उच्च",
  crop: "पीक",
  irrigation: "सिंचन",
  soilPH: "मातीचा pH",
  loanDue: "कर्ज थकबाकी",
  days: "दिवस",
  activeCrop: "पीक सक्रिय",
  notCropped: "पीक नाही",
  attention: "ज्या शेतकऱ्यांकडे लक्ष देणे आवश्यक आहे",
  needAttention: "शेतकऱ्यांकडे लक्ष देणे आवश्यक आहे",
  intervention: "या शेतकऱ्यांचा जोखीम गुणांक ६० पेक्षा जास्त आहे आणि त्यांना मदतीची आवश्यकता असू शकते.",
  personalized: "वैयक्तिक शिफारस",
  logout: "लॉग आउट",
  farmer: "शेतकरी",
  phone: "फोन",
  farmerPortal: "शेतकरी पोर्टल",
farmerDescription: "पीक सल्ला, हवामान, मंडी भाव आणि जोखीम सूचना मिळवा",
officerPortal: "अधिकारी पोर्टल",
officerDescription: "आपल्या नियुक्त क्षेत्रातील शेतकऱ्यांचे निरीक्षण करा आणि त्यांना मदत करा",
dashboard: "शेतकरी डॅशबोर्ड",
welcome: "स्वागत आहे",
hyperlocal: "स्थानिक कृषी सल्ला",
soil: "मातीचा डेटा",
cropStage: "पिकाची अवस्था",
weather: "हवामान अंदाज",
risk: "जोखीम",
advisory: "स्मार्ट सल्ला",
listen: "ऐका",
logout: "लॉगआउट",

temperature: "तापमान",
humidity: "आर्द्रता",
rainfall: "पर्जन्यमान",
rainChance: "पावसाची शक्यता",

maturity: "अंदाजे परिपक्वता",
harvest: "कापणीची स्थिती",
notReady: "अजून तयार नाही",
ready: "कापणीसाठी तयार",
croppingTime: "पिकासाठी योग्य वेळ",
growth: "पीक वाढीच्या अवस्थेत आहे",

low: "कमी जोखीम",
moderate: "मध्यम जोखीम",
high: "उच्च जोखीम",
critical: "गंभीर जोखीम",

good: "सध्याची परिस्थिती बहुतांश अनुकूल आहे.",
monitor: "हवामान, पीक आणि बाजारपेठेच्या परिस्थितीवर लक्ष ठेवा.",
action: "प्रतिबंधात्मक उपाय सुचवले आहेत. कृषी अधिकाऱ्याशी संपर्क साधण्याचा विचार करा.",

mandi: "जवळील मंडीचे दर",
best: "सर्वोत्तम दर",
quintal: "प्रति क्विंटल",
marketDemo: "प्रादेशिक प्रात्यक्षिक बाजार डेटा",
today: "आज अद्ययावत केले",
good: "चांगले",
days: "दिवस",
have: "आहे",
you: "तुम्ही",
already: "आधीच",
cropped: "पीक घेतले आहे का?",
yes: "होय",
moisture: "मातीतील आर्द्रता %",
hyperlocal: "तुमच्यासाठी वैयक्तिकृत स्थानिक पीक सल्ला",
todayLabel: "आज",
regionalWeather: "प्रादेशिक डेमो हवामान",
next5Days: "पुढील ५ दिवस",
mon: "सोम",
tue: "मंगळ",
wed: "बुध",
thu: "गुरु",
fri: "शुक्र",
financial: "आर्थिक",
loanDetails: "कर्जाचा तपशील",
outstandingLoan: "थकीत कर्ज",
loanDueIn: "कर्ज फेडण्यासाठी",
days: "दिवस",
irrigationLabel: "सिंचन",
moistureLabel: "ओलावा",
safeZone: "सुरक्षित क्षेत्र",
attentionZone: "सावधानता क्षेत्र",
actionZone: "कृती क्षेत्र",
criticalZone: "गंभीर क्षेत्र",
weatherLabel: "हवामान",
soilLabel: "माती",
marketLabel: "बाजार",
regionalDemoWeather: "प्रादेशिक डेमो हवामान",
next5Days: "पुढील ५ दिवस",
today: "आज",
back: "मागे",
platform: "स्मार्ट कृषी प्लॅटफॉर्म",
welcome: "स्वागत आहे",
existing: "विद्यमान शेतकरी",
newFarmer: "नवीन शेतकरी",
mobile: "मोबाईल क्रमांक",
sendOtp: "OTP पाठवा",
demo: "डेमो शेतकरी लॉगिन",
officerMobile: "अधिकाऱ्याचा मोबाईल क्रमांक",
sendOtp: "OTP पाठवा",
enterOtp: "OTP प्रविष्ट करा",
loginOfficer: "अधिकारी म्हणून लॉगिन करा",
statusGood: "चांगले",
statusAttention: "लक्ष देण्याची गरज",
kisanSetu: "किसानसेतू",
},
gu: {
  portal: "અધિકારી પોર્ટલ",
  dashboard: "અધિકારી ડેશબોર્ડ",
  welcome: "સ્વાગત છે",
  monitoring: "તમારા સોંપાયેલા વિસ્તારના ખેડૂતોનું નિરીક્ષણ",
  overview: "પ્રાદેશિક ઝાંખી",
  total: "કુલ ખેડૂતો",
  highRisk: "ઉચ્ચ જોખમ ધરાવતા ખેડૂતો",
  active: "સક્રિય પાક",
  farmers: "તમારા વિસ્તારના ખેડૂતો",
  noFarmers: "હજુ સુધી કોઈ ખેડૂત નોંધાયેલ નથી",
  newFarmers: "તમારા વિસ્તારના નવા ખેડૂતો અહીં દેખાશે.",
  personalized: "વ્યક્તિગત ભલામણ",
  riskometer: "જોખમનું સ્તર",
  risk: "જોખમનું સ્તર",
  advisory: "સ્માર્ટ સલાહ",
  low: "ઓછું",
  moderate: "મધ્યમ",
  high: "ઉચ્ચ",
  crop: "પાક",
  irrigation: "સિંચાઈ",
  soilPH: "માટીનું pH",
  loanDue: "લોન બાકી",
  days: "દિવસ",
  activeCrop: "પાક સક્રિય",
  notCropped: "કોઈ પાક નથી",
  attention: "ધ્યાનની જરૂર ધરાવતા ખેડૂતો",
  needAttention: "ખેડૂતને ધ્યાનની જરૂર છે",
  intervention: "આ ખેડૂતોનો જોખમ સ્કોર ૬૦થી વધુ છે અને તેમને સહાયની જરૂર પડી શકે છે.",
  logout: "લૉગ આઉટ",
  farmer: "ખેડૂત",
  phone: "ફોન",
  farmerPortal: "ખેડૂત પોર્ટલ",
farmerDescription: "પાક સલાહ, હવામાન, મંડી ભાવ અને જોખમની ચેતવણીઓ મેળવો",
officerPortal: "અધિકારી પોર્ટલ",
officerDescription: "તમારા નિયુક્ત વિસ્તારના ખેડૂતોનું નિરીક્ષણ કરો અને તેમને સહાય કરો",
good: "સારું",
days: "દિવસો",
cropped: "શું તમે પહેલેથી જ પાક લીધો છે?",
yes: "હા",
moisture: "માટીની ભેજ %",
hyperlocal: "તમારા માટે વ્યક્તિગત સ્થાનિક પાક સલાહ",
todayLabel: "આજે",
regionalWeather: "પ્રાદેશિક ડેમો હવામાન",
next5Days: "આગામી ૫ દિવસ",
mon: "સોમ",
tue: "મંગળ",
wed: "બુધ",
thu: "ગુરુ",
fri: "શુક્ર",
temperature: "તાપમાન",
humidity: "ભેજ",
rainfall: "વરસાદ",
rainChance: "વરસાદની સંભાવના",
maturity: "અંદાજિત પરિપક્વતા",
growth: "પાક વૃદ્ધિના તબક્કામાં છે",
harvest: "લણણીની સ્થિતિ",
notReady: "તૈયાર નથી",
financial: "નાણાકીય",
loanDetails: "લોનની વિગતો",
outstandingLoan: "બાકી લોન",
loanDueIn: "લોન ચૂકવવામાં બાકી",
days: "દિવસ",
irrigationLabel: "સિંચાઈ",
moistureLabel: "ભેજ",
safeZone: "સલામત વિસ્તાર",
attentionZone: "સાવચેતી વિસ્તાર",
actionZone: "કાર્ય વિસ્તાર",
criticalZone: "ગંભીર વિસ્તાર",
weatherLabel: "હવામાન",
soilLabel: "માટી",
marketLabel: "બજાર",
regionalDemoWeather: "પ્રાદેશિક ડેમો હવામાન",
next5Days: "આગામી ૫ દિવસ",
today: "આજે",
back: "પાછા",
platform: "સ્માર્ટ કૃષિ પ્લેટફોર્મ",
welcome: "સ્વાગત છે",
existing: "હાલના ખેડૂત",
newFarmer: "નવા ખેડૂત",
mobile: "મોબાઇલ નંબર",
sendOtp: "OTP મોકલો",
demo: "ડેમો ખેડૂત લૉગિન",
tagline: "સ્માર્ટ કૃષિ પ્લેટફોર્મ",
personalizedAdvisory: "તમારી વ્યક્તિગત સ્થાનિક સલાહ",
officerMobile: "અધિકારીનો મોબાઇલ નંબર",
sendOtp: "OTP મોકલો",
enterOtp: "OTP દાખલ કરો",
loginOfficer: "અધિકારી તરીકે લૉગિન કરો",
weather: "હવામાન",
soil: "માટી",
irrigation: "સિંચાઈ",
loan: "લોન",
mandi: "મંડી",
statusGood: "સારું",
statusAttention: "ધ્યાન આપવાની જરૂર છે",
kisanSetu: "કિસાનસેતુ",

},
ta: {
  portal: "அதிகாரி போர்டல்",
  dashboard: "அதிகாரி டாஷ்போர்டு",
  welcome: "வரவேற்கிறோம்",
  monitoring: "உங்களுக்கு ஒதுக்கப்பட்ட பகுதி விவசாயிகளைக் கண்காணித்தல்",
  overview: "பிராந்திய மேலோட்டம்",
  total: "மொத்த விவசாயிகள்",
  highRisk: "அதிக ஆபத்துள்ள விவசாயிகள்",
  active: "செயலில் உள்ள பயிர்கள்",
  farmers: "உங்கள் பகுதி விவசாயிகள்",
  noFarmers: "இதுவரை விவசாயிகள் பதிவு செய்யப்படவில்லை",
  newFarmers: "உங்கள் பகுதியின் புதிய விவசாயிகள் இங்கே தோன்றுவார்கள்.",
  riskometer: "ஆபத்து நிலை",
  risk: "ஆபத்து நிலை",
  low: "குறைவு",
  moderate: "மிதமான",
  high: "அதிகம்",
  crop: "பயிர்",
  irrigation: "நீர்ப்பாசனம்",
  advisory: "ஸ்மார்ட் பரிந்துரை",
  soilPH: "மண் pH",
  loanDue: "கடன் நிலுவை",
  days: "நாட்கள்",
  activeCrop: "பயிர் செயலில் உள்ளது",
  notCropped: "பயிர் இல்லை",
  attention: "கவனம் தேவைப்படும் விவசாயிகள்",
  needAttention: "விவசாயிகளுக்கு கவனம் தேவை",
  intervention: "இந்த விவசாயிகளின் ஆபத்து மதிப்பெண் 60-ஐ விட அதிகமாக உள்ளது, மேலும் அவர்களுக்கு உதவி தேவைப்படலாம்.",
  logout: "வெளியேறு",
  farmer: "விவசாயி",
  phone: "தொலைபேசி",
  farmerPortal: "விவசாயி போர்டல்",
farmerDescription: "பயிர் ஆலோசனை, வானிலை, மண்டி விலைகள் மற்றும் அபாய எச்சரிக்கைகளைப் பெறுங்கள்",
officerPortal: "அதிகாரி போர்டல்",
officerDescription: "உங்களுக்கு ஒதுக்கப்பட்ட பகுதியில் உள்ள விவசாயிகளைக் கண்காணித்து அவர்களுக்கு உதவுங்கள்",
good: "நல்லது",
days: "நாட்கள்",
cropped: "நீங்கள் ஏற்கனவே பயிரிட்டுவிட்டீர்களா?",
yes: "ஆம்",
moisture: "மண்ணின் ஈரப்பதம் %",
hyperlocal: "உங்களுக்கான தனிப்பயனாக்கப்பட்ட உள்ளூர் பயிர் ஆலோசனை",
todayLabel: "இன்று",
regionalWeather: "பிராந்திய டெமோ வானிலை",
next5Days: "அடுத்த 5 நாட்கள்",
mon: "திங்கள்",
tue: "செவ்வாய்",
wed: "புதன்",
thu: "வியாழன்",
fri: "வெள்ளி",
temperature: "வெப்பநிலை",
humidity: "ஈரப்பதம்",
rainfall: "மழைப்பொழிவு",
rainChance: "மழைக்கான வாய்ப்பு",
maturity: "மதிப்பிடப்பட்ட முதிர்ச்சி",
growth: "பயிர் வளர்ச்சி நிலையில் உள்ளது",
harvest: "அறுவடை நிலை",
notReady: "தயாராக இல்லை",
financial: "நிதி",
loanDetails: "கடன் விவரங்கள்",
outstandingLoan: "நிலுவையில் உள்ள கடன்",
loanDueIn: "கடனை செலுத்த இன்னும்",
days: "நாட்கள்",
irrigationLabel: "நீர்ப்பாசனம்",
moistureLabel: "ஈரப்பதம்",
safeZone: "பாதுகாப்பான பகுதி",
attentionZone: "கவனிப்பு பகுதி",
actionZone: "நடவடிக்கை பகுதி",
criticalZone: "அவசர பகுதி",
weatherLabel: "வானிலை",
soilLabel: "மண்",
marketLabel: "சந்தை",
regionalDemoWeather: "பிராந்திய டெமோ வானிலை",
next5Days: "அடுத்த 5 நாட்கள்",
today: "இன்று",
mandi: "அருகிலுள்ள மண்டி விலைகள்",
marketDemo: "பிராந்திய டெமோ சந்தைத் தரவு",
market: "சந்தை",
back: "பின்செல்",
platform: "ஸ்மார்ட் வேளாண் தளம்",
welcome: "வரவேற்கிறோம்",
existing: "ஏற்கனவே உள்ள விவசாயி",
newFarmer: "புதிய விவசாயி",
mobile: "மொபைல் எண்",
sendOtp: "OTP அனுப்பவும்",
demo: "டெமோ விவசாயி உள்நுழைவு",
tagline: "ஸ்மார்ட் வேளாண் தளம்",
personalizedAdvisory: "உங்களுக்கான தனிப்பயனாக்கப்பட்ட உள்ளூர் பரிந்துரை",
officerMobile: "அதிகாரியின் மொபைல் எண்",
sendOtp: "OTP அனுப்பவும்",
enterOtp: "OTP உள்ளிடவும்",
loginOfficer: "அதிகாரியாக உள்நுழையவும்",
weather: "வானிலை",
soil: "மண்",
irrigation: "நீர்ப்பாசனம்",
loan: "கடன்",
mandi: "மண்டி",
statusGood: "நல்லது",
statusAttention: "கவனம் தேவை",
kisanSetu: "கிசான்சேது",
},
te: {
  portal: "అధికారి పోర్టల్",
  dashboard: "అధికారి డ్యాష్‌బోర్డ్",
  welcome: "స్వాగతం",
  monitoring: "మీకు కేటాయించిన ప్రాంతంలోని రైతులను పర్యవేక్షించడం",
  overview: "ప్రాంతీయ అవలోకనం",
  total: "మొత్తం రైతులు",
  highRisk: "అధిక ప్రమాదంలో ఉన్న రైతులు",
  active: "క్రియాశీల పంటలు",
  farmers: "మీ ప్రాంతంలోని రైతులు",
  noFarmers: "ఇంకా రైతులు నమోదు కాలేదు",
  newFarmers: "మీ ప్రాంతంలోని కొత్త రైతులు ఇక్కడ కనిపిస్తారు.",
  riskometer: "ప్రమాద స్థాయి",
  risk: "ప్రమాద స్థాయి",
  low: "తక్కువ",
  moderate: "మధ్యస్థం",
  high: "అధికం",
  personalized: "தனிப்பயனாக்கப்பட்ட பரிந்துரை",
  crop: "పంట",
  irrigation: "నీటిపారుదల",
  soilPH: "మట్టి pH",
  loanDue: "రుణ బకాయి",
  days: "రోజులు",
  activeCrop: "పంట క్రియాశీలంగా ఉంది",
  notCropped: "పంట లేదు",
  attention: "శ్రద్ధ అవసరమైన రైతులు",
  needAttention: "రైతులకు శ్రద్ధ అవసరం",
  intervention: "ఈ రైతుల ప్రమాద స్కోరు 60 కంటే ఎక్కువగా ఉంది మరియు వారికి సహాయం అవసరం కావచ్చు.",
  logout: "లాగ్ అవుట్",
  farmer: "రైతు",
  phone: "ఫోన్",
  farmerPortal: "రైతు పోర్టల్",
farmerDescription: "పంట సలహాలు, వాతావరణం, మండీ ధరలు మరియు ప్రమాద హెచ్చరికలను పొందండి",
officerPortal: "అధికారి పోర్టల్",
advisory: "స్మార్ట్ సలహా",
officerDescription: "మీకు కేటాయించిన ప్రాంతంలోని రైతులను పర్యవేక్షించి వారికి సహాయం చేయండి",
good: "మంచిది",
days: "రోజులు",
cropped: "మీరు ఇప్పటికే పంటను సాగు చేశారా?",
yes: "అవును",
moisture: "నేల తేమ %",
hyperlocal: "మీ కోసం వ్యక్తిగతీకరించిన స్థానిక పంట సలహా",
todayLabel: "ఈరోజు",
regionalWeather: "ప్రాంతీయ డెమో వాతావరణం",
next5Days: "తదుపరి 5 రోజులు",
mon: "సోమ",
tue: "మంగళ",
wed: "బుధ",
thu: "గురు",
fri: "శుక్ర",
temperature: "ఉష్ణోగ్రత",
humidity: "తేమ",
rainfall: "వర్షపాతం",
rainChance: "వర్షం పడే అవకాశం",
maturity: "అంచనా పరిపక్వత",
growth: "పంట పెరుగుదల దశలో ఉంది",
harvest: "కోత స్థితి",
notReady: "సిద్ధంగా లేదు",
financial: "ఆర్థిక",
loanDetails: "రుణ వివరాలు",
outstandingLoan: "బకాయి రుణం",
loanDueIn: "రుణం చెల్లించడానికి",
days: "రోజులు",
irrigationLabel: "నీటిపారుదల",
moistureLabel: "తేమ",
safeZone: "సురక్షిత ప్రాంతం",
attentionZone: "జాగ్రత్త ప్రాంతం",
actionZone: "చర్య ప్రాంతం",
criticalZone: "తీవ్రమైన ప్రాంతం",
weatherLabel: "వాతావరణం",
soilLabel: "నేల",
marketLabel: "మార్కెట్",
regionalDemoWeather: "ప్రాంతీయ డెమో వాతావరణం",
next5Days: "తదుపరి 5 రోజులు",
today: "ఈరోజు",
mandi: "సమీపంలోని మార్కెట్ ధరలు",
marketDemo: "ప్రాంతీయ డెమో మార్కెట్ డేటా",
market: "మార్కెట్",
personalized: "వ్యక్తిగత సిఫార్సు",
back: "వెనుకకు",
platform: "స్మార్ట్ వ్యవసాయ వేదిక",
welcome: "స్వాగతం",
existing: "ఇప్పటికే ఉన్న రైతు",
newFarmer: "కొత్త రైతు",
mobile: "మొబైల్ నంబర్",
sendOtp: "OTP పంపండి",
demo: "డెమో రైతు లాగిన్",
tagline: "స్మార్ట్ వ్యవసాయ వేదిక",
personalizedAdvisory: "మీ కోసం వ్యక్తిగత స్థానిక సలహా",
officerMobile: "అధికారి మొబైల్ నంబర్",
sendOtp: "OTP పంపండి",
enterOtp: "OTP నమోదు చేయండి",
loginOfficer: "అధికారిగా లాగిన్ అవ్వండి",
weather: "వాతావరణం",
soil: "నేల",
irrigation: "నీటిపారుదల",
loan: "రుణం",
mandi: "మండి",
statusGood: "మంచిది",
statusAttention: "శ్రద్ధ అవసరం",
kisanSetu: "కిసాన్‌సేతు",
}
};


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
    <div className="language-selector">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
  >
     <option value="" disabled>
    Select your preferred language
  </option>

    <option value="en">English</option>
    <option value="hi">हिन्दी</option>
    <option value="or">ଓଡ଼ିଆ</option>
    <option value="bn">বাংলা</option>
    <option value="mr">मराठी</option>
    <option value="gu">ગુજરાતી</option>
    <option value="ta">தமிழ்</option>
    <option value="te">తెలుగు</option>
  </select>
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
  const t = text[language] || text.en;

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
          <span>{t.kisanSetu}</span>
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
          {t.tagline}
        </div>

        <h1>
          {t.welcome}
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
  language,
}) {
 const t = text[language] || text.en;
  console.log("Officer Login language:", language);
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
         <span>{t.kisanSetu}</span>
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
          {t.portal}
        </div>

        <h1>{t.officerPortal}</h1>

        <p className="login-description">
          {t.monitoring}
        </p>

        <label>{t.officerMobile}</label>

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
          {t.sendOtp}
          </button>
        ) : (
          <>
            <div className="demo-otp">
              Demo OTP: 1234
            </div>

            <label>{t.enterOtp}</label>

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
              {t.loginOfficer}
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
  translations,
}) {
  const t = translations[language] || translations.en;
  return (
    <div className="login-page">
      <div className="login-top">
        <div className="logo">
          🌾
          <span>{t.kisanSetu}</span>
        </div>

        <LanguageButtons
          language={language}
          setLanguage={setLanguage}
        />
      </div>

      <div className="login-card role-card">
        <div className="portal-tag">
  {t.portal}
</div>

       <h1>
  {t.welcome}
</h1>

<p className="login-description">
  {t.selectPortal}
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
              <strong>{t.farmerPortal}</strong><br></br>
              <small>
  {t.farmerDescription}
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
              <strong>{t.officerPortal}</strong><br></br>
              <small>
  {t.officerDescription}
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
              ? `${t.statusGood}`
              : `{t.statusAttention}`}
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

const cropTranslations = {
  Wheat: {
    en: "Wheat",
    hi: "गेहूँ",
    or: "ଗହମ",
    bn: "গম",
    mr: "गहू",
    gu: "ઘઉં",
    ta: "கோதுமை",
    te: "గోధుమ",
  },

  Rice: {
    en: "Rice",
    hi: "चावल",
    or: "ଧାନ",
    bn: "চাল",
    mr: "तांदूळ",
    gu: "ચોખા",
    ta: "அரிசி",
    te: "వరి",
  },

  Maize: {
    en: "Maize",
    hi: "मक्का",
    or: "ମକା",
    bn: "ভুট্টা",
    mr: "मका",
    gu: "મકાઈ",
    ta: "சோளம்",
    te: "మొక్కజొన్న",
  },
};
function CropCard({ farmer, t, language }) {
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
          <strong>
  {cropTranslations[farmer.crop]?.[language] || farmer.crop}
</strong>
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
            <small>{t.todayLabel}</small>

            <h2>
              {weather.temp}°
            </h2>

            <p>
              {t.regionalWeather}
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
        <h3>{t.next5Days}</h3>

        {[
          [t.mon, "☀️", "32°"],
[t.tue, "🌤️", "33°"],
[t.wed, "🌧️", "30°"],
[t.thu, "🌦️", "29°"],
[t.fri, "☀️", "31°"],
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
  03 / {t.earlyWarning}
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
    ? t.safeZone
    : score <= 60
    ? t.attentionZone
    : score <= 80
    ? t.actionZone
    : t.criticalZone}
</span>
      </div>

      <p className="risk-message">
        {message}
      </p>

      <div className="risk-factors">
  <span>🌧 {t.weather}</span>
  <span>🌱 {t.soil}</span>
  <span>💧 {t.irrigation}</span>
  <span>💰 {t.loan}</span>
  <span>📈 {t.mandi}</span>
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
              {t.personalized}
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
 const t = text[language] || text.en;

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
             <strong>{t.kisanSetu}</strong>
            <small>{t.farmerPortal}</small>
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
              {t.personalizedAdvisory}
            </p>
          </div>
<div className="crop-badge">
  🌱 {cropTranslations[farmer.crop]?.[language] || farmer.crop}
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
            language={language}
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
  {t.financial}
</small>

<h2>
  {t.loanDetails}
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
              {t.loan}
            </small>

            <div className="due-box">
              <span>⏳</span>

              <div>
                <small>
                  {t.loanDueIn}
                </small>

                <strong>
                  {farmer.dueDays} {t.days}
                </strong>
              </div>
            </div>

            <div className="input-summary">
              <span>{t.soilPH}</span>

              <strong>
                {farmer.soilPH}
              </strong>
            </div>

            <div className="input-summary">
              <span>
                {t.irrigation}
              </span>

              <strong>
                {farmer.irrigation}
              </strong>
            </div>

            <div className="input-summary">
              <span>
                {t.moisture}
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
  language,
  setLanguage,
  logout,
})
 {
   
   const translations = {
  en: {
    portal: "Officer Portal",
    dashboard: "Officer Dashboard",
    welcome: "Welcome",
    monitoring: "Monitoring farmers from your assigned region",
    overview: "Regional Overview",
    total: "Total Farmers",
    highRisk: "High Risk Farmers",
    active: "Active Crops",
    farmers: "Farmers in Your Region",
    noFarmers: "No farmers registered yet",
    newFarmers: "New farmers from your region will appear here automatically.",
    riskometer: "Riskometer",
    low: "Low",
    moderate: "Moderate",
    high: "High",
    crop: "Crop",
    irrigation: "Irrigation",
    soilPH: "Soil pH",
    loanDue: "Loan Due",
    days: "days",
    activeCrop: "Crop Active",
    notCropped: "Not Cropped",
    attention: "Farmers Requiring Attention",
    needAttention: "farmer(s) need attention",
    intervention: "These farmers have a distress risk score above 60 and may require intervention.",
    logout: "Logout",
    farmer: "Farmer",
phone: "Phone",
risk: "Riskometer",
crop: "Crop",
irrigation: "Irrigation",
soilPH: "Soil pH",
loanDue: "Loan Due",
days: "days",
cropActive: "Crop Active",
notCropped: "Not Cropped",
attention: "Farmers Requiring Attention",
needAttention: "farmer(s) need attention",
intervention: "These farmers have a distress risk score above 60 and may require intervention.",
officerLogin: "Officer Login",
officerMobile: "Officer Mobile Number", sendOtp: "Send OTP", enterOtp: "Enter OTP", 
loginOfficer: "Login as Officer",
  },

  hi: {
    portal: "अधिकारी पोर्टल",
    dashboard: "अधिकारी डैशबोर्ड",
    welcome: "स्वागत है",
    monitoring: "आपके निर्धारित क्षेत्र के किसानों की निगरानी",
    overview: "क्षेत्रीय अवलोकन",
    total: "कुल किसान",
    highRisk: "उच्च जोखिम वाले किसान",
    active: "सक्रिय फसलें",
    farmers: "आपके क्षेत्र के किसान",
    noFarmers: "अभी तक कोई किसान पंजीकृत नहीं है",
    newFarmers: "आपके क्षेत्र के नए किसान यहां दिखाई देंगे।",
    riskometer: "जोखिम स्तर",
    low: "कम",
    moderate: "मध्यम",
    high: "उच्च",
    crop: "फसल",
    irrigation: "सिंचाई",
    soilPH: "मिट्टी का pH",
    loanDue: "ऋण देय",
    days: "दिन",
    activeCrop: "फसल सक्रिय",
    notCropped: "फसल नहीं है",
    attention: "ध्यान देने वाले किसान",
    needAttention: "किसान को ध्यान देने की आवश्यकता है",
    intervention: "इन किसानों का जोखिम स्कोर 60 से अधिक है और उन्हें सहायता की आवश्यकता हो सकती है।",
    logout: "लॉग आउट",
    farmer: "किसान",
phone: "फ़ोन",
risk: "जोखिम स्तर",
crop: "फसल",
irrigation: "सिंचाई",
soilPH: "मिट्टी का pH",
loanDue: "ऋण बकाया",
days: "दिन",
cropActive: "फसल सक्रिय",
notCropped: "फसल नहीं है",
attention: "ध्यान देने वाले किसान",
needAttention: "किसानों को ध्यान देने की आवश्यकता है",
intervention: "इन किसानों का जोखिम स्कोर 60 से अधिक है और उन्हें सहायता की आवश्यकता हो सकती है।",
officerLogin: "अधिकारी लॉगिन",
officerMobile: "अधिकारी का मोबाइल नंबर", sendOtp: "OTP भेजें", enterOtp: "OTP दर्ज करें", 
loginOfficer: "अधिकारी के रूप में लॉगिन करें",
  },

  or: {
    portal: "ଅଧିକାରୀ ପୋର୍ଟାଲ୍",
    dashboard: "ଅଧିକାରୀ ଡ୍ୟାସବୋର୍ଡ",
    welcome: "ସ୍ୱାଗତ",
    monitoring: "ଆପଣଙ୍କ ଅଞ୍ଚଳର କୃଷକମାନଙ୍କ ନିରୀକ୍ଷଣ",
    overview: "ଆଞ୍ଚଳିକ ସମୀକ୍ଷା",
    total: "ମୋଟ କୃଷକ",
    highRisk: "ଅଧିକ ବିପଦରେ ଥିବା କୃଷକ",
    active: "ସକ୍ରିୟ ଫସଲ",
    farmers: "ଆପଣଙ୍କ ଅଞ୍ଚଳର କୃଷକ",
    noFarmers: "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି କୃଷକ ପଞ୍ଜିକୃତ ହୋଇନାହାନ୍ତି",
    newFarmers: "ଆପଣଙ୍କ ଅଞ୍ଚଳର ନୂତନ କୃଷକମାନେ ଏଠାରେ ଦେଖାଯିବେ।",
    riskometer: "ବିପଦ ସ୍ତର",
    low: "କମ",
    moderate: "ମଧ୍ୟମ",
    high: "ଅଧିକ",
    crop: "ଫସଲ",
    irrigation: "ଜଳସେଚନ",
    soilPH: "ମାଟି pH",
    loanDue: "ଋଣ ବକେୟା",
    days: "ଦିନ",
    activeCrop: "ଫସଲ ସକ୍ରିୟ",
    notCropped: "ଫସଲ ନାହିଁ",
    attention: "ଧ୍ୟାନ ଆବଶ୍ୟକ କରୁଥିବା କୃଷକ",
    needAttention: "କୃଷକଙ୍କୁ ଧ୍ୟାନ ଆବଶ୍ୟକ",
    intervention: "ଏହି କୃଷକମାନଙ୍କର ବିପଦ ସ୍କୋର ୬୦ରୁ ଅଧିକ ଏବଂ ସେମାନଙ୍କୁ ସହାୟତା ଆବଶ୍ୟକ ହୋଇପାରେ।",
    logout: "ଲଗଆଉଟ୍",
    farmer: "କୃଷକ",
phone: "ଫୋନ୍",
risk: "ବିପଦ ସ୍ତର",
crop: "ଫସଲ",
irrigation: "ଜଳସେଚନ",
soilPH: "ମାଟି pH",
loanDue: "ଋଣ ବକେୟା",
days: "ଦିନ",
cropActive: "ଫସଲ ସକ୍ରିୟ",
notCropped: "ଫସଲ ନାହିଁ",
attention: "ଧ୍ୟାନ ଆବଶ୍ୟକ କରୁଥିବା କୃଷକ",
needAttention: "କୃଷକଙ୍କୁ ଧ୍ୟାନ ଆବଶ୍ୟକ",
intervention: "ଏହି କୃଷକମାନଙ୍କର ବିପଦ ସ୍କୋର ୬୦ରୁ ଅଧିକ ଏବଂ ସେମାନଙ୍କୁ ସହାୟତା ଆବଶ୍ୟକ ହୋଇପାରେ।",
officerLogin: "ଅଧିକାରୀ ଲଗଇନ୍",
officerMobile: "ଅଧିକାରୀଙ୍କ ମୋବାଇଲ୍ ନମ୍ବର", sendOtp: "OTP ପଠାନ୍ତୁ", enterOtp: "OTP ପ୍ରବେଶ କରନ୍ତୁ",
 loginOfficer: "ଅଧିକାରୀ ଭାବେ ଲଗଇନ୍ କରନ୍ତୁ",
  },
  bn: {
  portal: "অফিসার পোর্টাল",
  dashboard: "অফিসার ড্যাশবোর্ড",
  welcome: "স্বাগতম",
  monitoring: "আপনার নির্ধারিত এলাকার কৃষকদের পর্যবেক্ষণ",
  overview: "আঞ্চলিক পর্যালোচনা",
  total: "মোট কৃষক",
  highRisk: "উচ্চ ঝুঁকিপূর্ণ কৃষক",
  active: "সক্রিয় ফসল",
  farmers: "আপনার এলাকার কৃষক",
  noFarmers: "এখনও কোনো কৃষক নিবন্ধিত হয়নি",
  newFarmers: "আপনার এলাকার নতুন কৃষকরা এখানে দেখা যাবে।",
  riskometer: "ঝুঁকির মাত্রা",
  low: "কম",
  moderate: "মাঝারি",
  high: "উচ্চ",
  crop: "ফসল",
  irrigation: "সেচ",
  soilPH: "মাটির pH",
  loanDue: "ঋণ বকেয়া",
  days: "দিন",
  activeCrop: "ফসল সক্রিয়",
  notCropped: "কোনো ফসল নেই",
  attention: "যেসব কৃষকের প্রতি মনোযোগ প্রয়োজন",
  needAttention: "জন কৃষকের মনোযোগ প্রয়োজন",
  intervention: "এই কৃষকদের ঝুঁকির স্কোর ৬০-এর বেশি এবং তাদের সহায়তার প্রয়োজন হতে পারে।",
  logout: "লগ আউট",
  farmer: "কৃষক",
  phone: "ফোন",
  risk: "ঝুঁকির মাত্রা",
  cropActive: "ফসল সক্রিয়",
  notCropped: "কোনো ফসল নেই",
  officerLogin: "অফিসার লগইন",
  attention: "যেসব কৃষকের প্রতি মনোযোগ প্রয়োজন", 
  needAttention: "কৃষকদের মনোযোগ প্রয়োজন", 
  intervention: "এই কৃষকদের ঝুঁকির স্কোর 60-এর বেশি এবং তাদের সহায়তার প্রয়োজন হতে পারে।",
  officerMobile: "অফিসারের মোবাইল নম্বর", sendOtp: "OTP পাঠান", enterOtp: "OTP লিখুন", 
  loginOfficer: "অফিসার হিসেবে লগইন করুন",
  
},

mr: {
  portal: "अधिकारी पोर्टल",
  dashboard: "अधिकारी डॅशबोर्ड",
  welcome: "स्वागत आहे",
  monitoring: "आपल्या नियुक्त क्षेत्रातील शेतकऱ्यांचे निरीक्षण",
  overview: "प्रादेशिक आढावा",
  total: "एकूण शेतकरी",
  highRisk: "उच्च जोखीम असलेले शेतकरी",
  active: "सक्रिय पिके",
  farmers: "आपल्या क्षेत्रातील शेतकरी",
  noFarmers: "अद्याप कोणताही शेतकरी नोंदणीकृत नाही",
  newFarmers: "आपल्या क्षेत्रातील नवीन शेतकरी येथे दिसतील.",
  riskometer: "जोखीम पातळी",
  OfficerDashboard: "कमी",
  moderate: "मध्यम",
  high: "उच्च",
  crop: "पीक",
  irrigation: "सिंचन",
  soilPH: "मातीचा pH",
  loanDue: "कर्ज थकीत",
  days: "दिवस",
  activeCrop: "पीक सक्रिय",
  notCropped: "पीक नाही",
  attention: "लक्ष देण्याची गरज असलेले शेतकरी",
  needAttention: "शेतकऱ्यांना लक्ष देण्याची गरज आहे",
  intervention: "या शेतकऱ्यांचा जोखीम स्कोअर ६० पेक्षा जास्त आहे आणि त्यांना मदतीची आवश्यकता असू शकते.",
  logout: "लॉग आउट",
  farmer: "शेतकरी",
  phone: "फोन",
  risk: "जोखीम पातळी",
  cropActive: "पीक सक्रिय",
  officerLogin: "अधिकारी लॉगिन",
  attention: "लक्ष देण्याची गरज असलेले शेतकरी", 
  needAttention: "शेतकऱ्यांना लक्ष देण्याची गरज आहे",
   intervention: "या शेतकऱ्यांचा जोखीम स्कोअर 60 पेक्षा जास्त आहे आणि त्यांना मदतीची आवश्यकता असू शकते.",
   officerMobile: "अधिकाऱ्याचा मोबाईल क्रमांक",
sendOtp: "OTP पाठवा",
enterOtp: "OTP प्रविष्ट करा",
loginOfficer: "अधिकारी म्हणून लॉगिन करा",
},

gu: {
  portal: "અધિકારી પોર્ટલ",
  dashboard: "અધિકારી ડેશબોર્ડ",
  welcome: "સ્વાગત છે",
  monitoring: "તમારા નિર્ધારિત વિસ્તારના ખેડૂતોનું નિરીક્ષણ",
  overview: "પ્રાદેશિક ઝાંખી",
  total: "કુલ ખેડૂતો",
  highRisk: "ઉચ્ચ જોખમવાળા ખેડૂતો",
  active: "સક્રિય પાક",
  farmers: "તમારા વિસ્તારના ખેડૂતો",
  noFarmers: "હજુ સુધી કોઈ ખેડૂત નોંધાયેલ નથી",
  newFarmers: "તમારા વિસ્તારના નવા ખેડૂતો અહીં દેખાશે.",
  riskometer: "જોખમનું સ્તર",
  low: "ઓછું",
  moderate: "મધ્યમ",
  high: "ઉચ્ચ",
  crop: "પાક",
  irrigation: "સિંચાઈ",
  soilPH: "માટીનું pH",
  loanDue: "લોન બાકી",
  days: "દિવસ",
  activeCrop: "પાક સક્રિય",
  notCropped: "પાક નથી",
  attention: "ધ્યાનની જરૂર ધરાવતા ખેડૂતો",
  needAttention: "ખેડૂતોને ધ્યાનની જરૂર છે",
  intervention: "આ ખેડૂતોનો જોખમ સ્કોર ૬૦થી વધુ છે અને તેમને સહાયની જરૂર પડી શકે છે.",
  logout: "લૉગ આઉટ",
  farmer: "ખેડૂત",
  phone: "ફોન",
  risk: "જોખમનું સ્તર",
  cropActive: "પાક સક્રિય",
  officerLogin: "અધિકારી લૉગિન",
  attention: "ધ્યાનની જરૂર ધરાવતા ખેડૂતો", 
  needAttention: "ખેડૂતોને ધ્યાનની જરૂર છે", 
  intervention: "આ ખેડૂતોનો જોખમ સ્કોર 60થી વધુ છે અને તેમને સહાયની જરૂર પડી શકે છે.",
  officerMobile: "અધિકારીનો મોબાઇલ નંબર", sendOtp: "OTP મોકલો", enterOtp: "OTP દાખલ કરો", 
  loginOfficer: "અધિકારી તરીકે લૉગિન કરો",
},

ta: {
  portal: "அதிகாரி போர்டல்",
  dashboard: "அதிகாரி டாஷ்போர்டு",
  welcome: "வரவேற்கிறோம்",
  monitoring: "உங்களுக்கு ஒதுக்கப்பட்ட பகுதியிலுள்ள விவசாயிகளைக் கண்காணித்தல்",
  overview: "பிராந்திய கண்ணோட்டம்",
  total: "மொத்த விவசாயிகள்",
  highRisk: "அதிக ஆபத்துள்ள விவசாயிகள்",
  active: "செயலில் உள்ள பயிர்கள்",
  farmers: "உங்கள் பகுதியிலுள்ள விவசாயிகள்",
  noFarmers: "இதுவரை விவசாயிகள் பதிவு செய்யப்படவில்லை",
  newFarmers: "உங்கள் பகுதியிலுள்ள புதிய விவசாயிகள் இங்கே தோன்றுவார்கள்.",
  riskometer: "ஆபத்து நிலை",
  low: "குறைவு",
  moderate: "மிதமான",
  high: "அதிகம்",
  crop: "பயிர்",
  irrigation: "நீர்ப்பாசனம்",
  soilPH: "மண்ணின் pH",
  loanDue: "நிலுவையில் உள்ள கடன்",
  days: "நாட்கள்",
  activeCrop: "பயிர் செயலில் உள்ளது",
  notCropped: "பயிர் இல்லை",
  attention: "கவனம் தேவைப்படும் விவசாயிகள்",
  needAttention: "விவசாயிகளுக்கு கவனம் தேவை",
  intervention: "இந்த விவசாயிகளின் ஆபத்து மதிப்பெண் 60-க்கு மேல் உள்ளது, அவர்களுக்கு உதவி தேவைப்படலாம்.",
  logout: "வெளியேறு",
  farmer: "விவசாயி",
  phone: "தொலைபேசி",
  risk: "ஆபத்து நிலை",
  cropActive: "பயிர் செயலில் உள்ளது",
  officerLogin: "அதிகாரி உள்நுழைவு",
  attention: "கவனம் தேவைப்படும் விவசாயிகள்", 
  needAttention: "விவசாயிகளுக்கு கவனம் தேவை",
   intervention: "இந்த விவசாயிகளின் ஆபத்து மதிப்பெண் 60-க்கு மேல் உள்ளது, அவர்களுக்கு உதவி தேவைப்படலாம்.",
   officerMobile: "அதிகாரியின் மொபைல் எண்", sendOtp: "OTP அனுப்பவும்", enterOtp: "OTP உள்ளிடவும்",
    loginOfficer: "அதிகாரியாக உள்நுழையவும்",
},

te: {
  portal: "అధికారి పోర్టల్",
  dashboard: "అధికారి డ్యాష్‌బోర్డ్",
  welcome: "స్వాగతం",
  monitoring: "మీకు కేటాయించిన ప్రాంతంలోని రైతుల పర్యవేక్షణ",
  overview: "ప్రాంతీయ అవలోకనం",
  total: "మొత్తం రైతులు",
  highRisk: "అధిక ప్రమాదంలో ఉన్న రైతులు",
  active: "క్రియాశీల పంటలు",
  farmers: "మీ ప్రాంతంలోని రైతులు",
  noFarmers: "ఇప్పటివరకు రైతులు నమోదు కాలేదు",
  newFarmers: "మీ ప్రాంతంలోని కొత్త రైతులు ఇక్కడ కనిపిస్తారు.",
  riskometer: "ప్రమాద స్థాయి",
  low: "తక్కువ",
  moderate: "మధ్యస్థం",
  high: "అధికం",
  crop: "పంట",
  irrigation: "నీటిపారుదల",
  soilPH: "నేల pH",
  loanDue: "చెల్లించాల్సిన రుణం",
  days: "రోజులు",
  activeCrop: "పంట క్రియాశీలంగా ఉంది",
  notCropped: "పంట లేదు",
  attention: "శ్రద్ధ అవసరమైన రైతులు",
  needAttention: "రైతులకు శ్రద్ధ అవసరం",
  intervention: "ఈ రైతుల ప్రమాద స్కోర్ 60 కంటే ఎక్కువగా ఉంది మరియు వారికి సహాయం అవసరం కావచ్చు.",
  logout: "లాగ్ అవుట్",
  farmer: "రైతు",
  phone: "ఫోన్",
  risk: "ప్రమాద స్థాయి",
  cropActive: "పంట క్రియాశీలంగా ఉంది",
  officerLogin: "అధికారి లాగిన్",
  attention: "శ్రద్ధ అవసరమైన రైతులు", 
  needAttention: "రైతులకు శ్రద్ధ అవసరం", 
  intervention: "ఈ రైతుల ప్రమాద స్కోర్ 60 కంటే ఎక్కువగా ఉంది మరియు వారికి సహాయం అవసరం కావచ్చు.",
  officerMobile: "అధికారి మొబైల్ నంబర్", sendOtp: "OTP పంపండి", enterOtp: "OTP నమోదు చేయండి",
   loginOfficer: "అధికారిగా లాగిన్ అవ్వండి",
}
};

const t = translations[language] || translations.en;
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
              {t.portal}
            </small>
          </div>
        </div>

        <div className="nav-right">
        <LanguageButtons
  language={language}
  setLanguage={setLanguage}
/>
          <div className="officer-region">
            📍 {regionData.name}
          </div>

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
              {t.dashboard}
            </small>

            <h1>
              {t.welcome},{" "}
              {officer.name.split(
                " "
              )[0]} 👋
            </h1>

            <p>
              {t.monitoring}
            </p>
          </div>

          <div className="crop-badge">
            📍 {regionData.name}
          </div>
        </section>

        {/* STATS */}

        <div className="section-title">
          <span>01</span>
          <h2>{t.overview}</h2>
        </div>

        <div className="officer-stats">
          <div className="card officer-stat">
            <span>👨‍🌾</span>

            <small>
              {t.total}
            </small>

            <strong>
              {regionalFarmers.length}
            </strong>
          </div>

          <div className="card officer-stat">
            <span>⚠️</span>

            <small>
              {t.highRisk}
            </small>

            <strong>
              {highRiskFarmers.length}
            </strong>
          </div>

          <div className="card officer-stat">
            <span>🌱</span>

            <small>
              {t.active}
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
            {t.farmers}
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

                        <div className="riskometer">

  <div className="riskometer-header">
    <small>{t.risk}</small>
    <strong>{risk}/100</strong>
  </div>

  <div className="risk-bar">
    <div
      className={`risk-progress ${riskClass}`}
      style={{ width: `${risk}%` }}
    ></div>
  </div>

  <div className="risk-labels">
    <span>{t.low}</span>
<span>{t.moderate}</span>
<span>{t.high}</span>
  </div>

</div>
      </div>

                      <div className="farmer-details">

  <div className="farmer-info-card">
    <span>🌾</span>
    <small>{t.crop}</small>
    <strong>
  {cropTranslations[farmer.crop]?.[language] || farmer.crop}
</strong>
  </div>

  <div className="farmer-info-card">
    <span>🚰</span>
    <small>{t.irrigation}</small>
    <strong>{farmer.irrigation}</strong>
  </div>

  <div className="farmer-info-card">
    <span>🌱</span>
    <small>{t.soilPH}</small>
    <strong>{farmer.soilPH}</strong>
  </div>

  <div className="farmer-info-card">
    <small>{t.dueDays}</small>

<strong>
  {farmer.dueDays} {t.days}
</strong>
  </div>

</div>

                      <div className="farmer-status">

  
<span>
  {farmer.cropped
    ? `🌿 ${t.cropActive}`
    : `🌱 ${t.notCropped}`}
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
           {t.attention}
          </h2>
        </div>

        <div className="card officer-alert">
          <div className="alert-icon">
            ⚠️
          </div>

          <div>
            <h3>
              {highRiskFarmers.length}{" "}
              {t.needAttention}
            </h3>

            <p>
              {t.intervention}
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
    useState("");

  

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
         translations={text}
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
         language={language}
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
        language={language}
        setLanguage={setLanguage}
        logout={logout}
      />
    );
  }

  return null;
}

