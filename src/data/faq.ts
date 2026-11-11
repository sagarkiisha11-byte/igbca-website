export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Admissions & Eligibility" | "Curriculum & Supplies" | "Certifications";
}

export const faqsList: FAQItem[] = [
  {
    question: "Who is eligible to join IGBCA baking courses?",
    answer:
      "Anyone who is at least 10 years old with a genuine passion for baking and culinary arts is welcome to join. You do not need any prior culinary education or commercial kitchen experience; our curriculum starts from the fundamental science of ingredients and builds systematically toward advanced mastery.",
    category: "Admissions & Eligibility",
  },
  {
    question: "Do I need to bring my own ingredients or baking tools?",
    answer:
      "Not at all. IGBCA provides 100% of the commercial-grade ingredients, professional baking tools, personalized workstations, study dossiers, recipes, and an official IGBCA chef jacket and apron. Everything you need is covered in your course fees.",
    category: "Curriculum & Supplies",
  },
  {
    question: "What are the academy's operating days and timings?",
    answer:
      "Our core studio courses run Monday through Thursday, from 9:00 AM to 4:00 PM. This intensive schedule ensures immersive hands-on bench practice while giving students Friday to Sunday for personal review or travel.",
    category: "General",
  },
  {
    question: "Can I take home the pastries, breads, and cakes I prepare?",
    answer:
      "Yes! Every pastry, cake, artisan loaf, and confection you craft during your daily studio sessions is yours to pack and take home to share with family, friends, or clients.",
    category: "Curriculum & Supplies",
  },
  {
    question: "What certification do I receive upon graduation?",
    answer:
      "Depending on your enrolled program, you will be awarded an official IGBCA Master Diploma in Baking & Culinary Arts (5-Month Course), an IGBCA Professional Baking Certificate (3-Month Course), or specialized module certificates recognized across the bakery and hospitality sector.",
    category: "Certifications",
  },
  {
    question: "Where is the IGBCA studio located?",
    answer:
      "Our academy is centrally situated in Chandigarh at SCO 218, Sector 36D, Chandigarh – 160036. The studio is easily accessible from across the Tri-city (Chandigarh, Mohali, Panchkula) with convenient parking.",
    category: "General",
  },
  {
    question: "Can I enroll in individual short workshops instead of a multi-month diploma?",
    answer:
      "Absolutely. We offer over 17 standalone short workshops ranging from 2 days to 4 weeks (such as Cookies, Sourdough Breads, Cheesecakes, French Viennoiseries, and Chocolates & Pralines), allowing you to focus precisely on your craft of interest.",
    category: "Admissions & Eligibility",
  },
  {
    question: "How do I reserve a seat in the upcoming batch?",
    answer:
      "Because we keep batch sizes strictly limited to provide individual attention at every bench, seats are allotted on a first-come, first-served basis. You can click 'Enquire Now', message our admissions desk on WhatsApp (+91 82643 53936), or call +91 708-708-6567 to book your seat reservation.",
    category: "Admissions & Eligibility",
  },
];

