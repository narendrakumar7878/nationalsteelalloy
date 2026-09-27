export interface Specification {
  label: string;
  value: string;
}

export interface ChemicalComp {
  grade: string;
  c?: string;
  mn?: string;
  si?: string;
  cr?: string;
  ni?: string;
  mo?: string;
  p?: string;
  s?: string;
  other?: string;
}

export interface MechanicalProp {
  grade: string;
  tensile: string; // MPa / N/mm²
  yield: string;   // MPa / N/mm²
  elongation: string; // %
  hardness: string;
}

export interface ProductProject {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  grades: string;
  gradeList: string[];
  specifications: Specification[];
  chemicalComposition: ChemicalComp[];
  mechanicalProperties: MechanicalProp[];
  applications: string[];
  standards: string[];
  features: string[];
  deliveryInfo: string;
  relatedProjects: ProductProject[];
}

export const productsData: Product[] = [
  {
    id: "ss-plate",
    title: "SS Plate (Stainless Steel Plates)",
    category: "Stainless Steel",
    description: "Premium stainless steel plates engineered for high corrosion resistance, structural integrity, and industrial applications.",
    fullDescription: "NATIONAL STEEL & ALLOYS supplies top-grade Stainless Steel Plates manufactured under stringent quality control parameters conforming to ASTM A240 and ASME SA240 standards. Our SS Plates feature exceptional resistance to oxidation, pitting, and crevice corrosion across diverse temperature spectrums. Suitable for heavy industrial fabrication, pressure vessels, chemical processing reactors, and architectural claddings.",
    image: "/assets/SS PLATE  MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/SS PLATE  MAMTA STEEL TRADERS.jpg",
      "/assets/SS 304 PLATE  MAMTA STEEL TRADERS.jpg",
      "/assets/sheets-plates.jpg"
    ],
    grades: "304, 304L, 316, 316L, 310S, 321, 347, 904L",
    gradeList: ["304", "304L", "316", "316L", "310S", "321", "347", "904L"],
    specifications: [
      { label: "Standard Specifications", value: "ASTM A240 / ASME SA240, EN 10088-2, DIN 17440" },
      { label: "Thickness Range", value: "0.5mm to 100mm (Custom Cut Plates Available)" },
      { label: "Width Range", value: "1000mm, 1250mm, 1500mm, 2000mm, 2500mm" },
      { label: "Length Range", value: "2000mm, 2440mm, 3000mm, 6000mm, Custom Cut Lengths" },
      { label: "Surface Finish", value: "2B, 1D, No.1 (Hot Rolled), No.4 (Satin), BA, Hairline, Mirror 8K" },
      { label: "Testing & Inspection", value: "Ultrasonic Tested, PMI Test, Radiography, NACE MR0175" },
      { label: "Certification", value: "Mill Test Certificate (MTC) EN 10204 3.1 & 3.2" }
    ],
    chemicalComposition: [
      { grade: "SS 304", c: "0.07% max", mn: "2.0% max", si: "0.75% max", cr: "17.5 - 19.5%", ni: "8.0 - 10.5%", other: "P 0.045%, S 0.03%" },
      { grade: "SS 316", c: "0.08% max", mn: "2.0% max", si: "0.75% max", cr: "16.0 - 18.0%", ni: "10.0 - 14.0%", mo: "2.0 - 3.0%", other: "P 0.045%, S 0.03%" },
      { grade: "SS 310S", c: "0.08% max", mn: "2.0% max", si: "1.50% max", cr: "24.0 - 26.0%", ni: "19.0 - 22.0%", other: "High Temp Oxidation Resistance" },
      { grade: "SS 904L", c: "0.02% max", mn: "2.0% max", si: "1.00% max", cr: "19.0 - 23.0%", ni: "23.0 - 28.0%", mo: "4.0 - 5.0%", other: "Cu 1.2 - 2.0%" }
    ],
    mechanicalProperties: [
      { grade: "SS 304", tensile: "515 MPa min", yield: "205 MPa min", elongation: "40% min", hardness: "201 HB max" },
      { grade: "SS 316", tensile: "515 MPa min", yield: "205 MPa min", elongation: "40% min", hardness: "217 HB max" },
      { grade: "SS 310S", tensile: "515 MPa min", yield: "205 MPa min", elongation: "40% min", hardness: "225 HB max" },
      { grade: "SS 904L", tensile: "490 MPa min", yield: "220 MPa min", elongation: "35% min", hardness: "90 HRB max" }
    ],
    applications: [
      "Chemical & Petrochemical Processing Units",
      "Pharmaceutical Storage Tanks & Reactors",
      "Food, Dairy & Beverage Processing Equipment",
      "Oil & Gas Offshore Platforms & Refineries",
      "Marine Hardware & Desalination Facilities",
      "Architectural Structure & Heavy Engineering"
    ],
    standards: ["ASTM A240", "ASME SA240", "EN 10088", "DIN 1.4301 / 1.4401", "ISO 9001:2015"],
    features: [
      "🚚 Fast All India Express Delivery",
      "📜 EN 10204 3.1 MTC Test Certificate Included",
      "✂️ Precision Waterjet & Laser Cutting to Custom Dimensions",
      "🛡️ 100% Quality Assurance & Material Verification"
    ],
    deliveryInfo: "Direct factory shipping & ready warehouse dispatch across all major Indian cities including Mumbai, Pune, Ahmedabad, Vadodara, Delhi NCR, Chennai, Bengaluru, Hyderabad, and Kolkata within 24-48 hours.",
    relatedProjects: [
      {
        title: "Chemical Processing Plant Reactor",
        category: "Manufacturing",
        description: "Provided high-corrosion resistant SS 316L plates for acid storage tanks in Gujarat chemical complex.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
      },
      {
        title: "Offshore Refinery Vessel",
        category: "Oil & Gas",
        description: "Supplied SS 310S heat-resistant plates for pressure vessel fabrication in Mumbai offshore sector.",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800"
      }
    ]
  },
  {
    id: "ss-rod",
    title: "SS Rod (Stainless Steel Rods)",
    category: "Stainless Steel",
    description: "High-precision stainless steel bright rods and ground shafts designed for machining, turning, and industrial shafting.",
    fullDescription: "Our Stainless Steel Rods are cold drawn, centerless ground, and polished to achieve precise dimensional tolerances (h9, h11). NATIONAL STEEL & ALLOYS stocks a wide array of SS Rods in austenitic, martensitic, and duplex grades designed for pump shafts, valves, fasteners, marine hardware, and precision instrument parts.",
    image: "/assets/SS ROD  MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/SS ROD  MAMTA STEEL TRADERS.jpg",
      "/assets/SS ROD MAMTA STEEL TRADERS.jpg",
      "/assets/round-bars.jpg"
    ],
    grades: "303, 304, 316, 321, 410, 420, 17-4PH",
    gradeList: ["303", "304", "316", "321", "410", "420", "17-4PH"],
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276, ASTM A479, ASME SA276" },
      { label: "Diameter Range", value: "2mm to 150mm" },
      { label: "Tolerance Class", value: "h8, h9, h11, k12, ISO 286" },
      { label: "Length", value: "3 Meters, 6 Meters, Custom Cut Lengths" },
      { label: "Condition", value: "Cold Drawn, Bright Annealed, Centerless Ground, Polished" },
      { label: "Certification", value: "Mill Test Certificate EN 10204 3.1" }
    ],
    chemicalComposition: [
      { grade: "SS 303 (Free Machining)", c: "0.15% max", mn: "2.0% max", si: "1.0% max", cr: "17.0 - 19.0%", ni: "8.0 - 10.0%", other: "S 0.15% min (Free Cutting)" },
      { grade: "SS 304", c: "0.08% max", mn: "2.0% max", si: "0.75% max", cr: "18.0 - 20.0%", ni: "8.0 - 10.5%", other: "P 0.045%, S 0.03%" },
      { grade: "SS 17-4PH (630)", c: "0.07% max", mn: "1.0% max", si: "1.0% max", cr: "15.0 - 17.5%", ni: "3.0 - 5.0%", mo: "0.5% max", other: "Cu 3.0-5.0%, Nb 0.15-0.45%" }
    ],
    mechanicalProperties: [
      { grade: "SS 303", tensile: "500 - 750 MPa", yield: "190 MPa min", elongation: "35% min", hardness: "160 - 200 HB" },
      { grade: "SS 304", tensile: "515 MPa min", yield: "205 MPa min", elongation: "40% min", hardness: "201 HB max" },
      { grade: "SS 17-4PH H900", tensile: "1310 MPa min", yield: "1170 MPa min", elongation: "10% min", hardness: "40 HRC min" }
    ],
    applications: [
      "Machined Precision Components & Fasteners",
      "Pump & Motor Shafts",
      "Automotive Fuel System Parts",
      "Hydraulic Cylinder Rods",
      "Valve Trim & Stems"
    ],
    standards: ["ASTM A276", "ASTM A479", "DIN 1.4305", "EN 10088-3"],
    features: [
      "🚚 Prompt All-India Express Dispatch",
      "✂️ Exact Cut-to-Size Bar Cutting Service",
      "🔬 100% Ultrasonic & Eddy Current Tested",
      "📜 Complete Material Traceability & MTC"
    ],
    deliveryInfo: "Dispatched from our central Mumbai stockyard directly to industrial units nationwide with transit insurance & express freight dispatch.",
    relatedProjects: [
      {
        title: "Automotive Precision Shaft Supply",
        category: "Manufacturing",
        description: "Delivered 15 tons of SS 303 bright rods for high-speed CNC auto parts fabrication in Pune.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
      }
    ]
  },
  {
    id: "ss-round-bar",
    title: "SS Round Bar (Stainless Steel Round Bars)",
    category: "Stainless Steel",
    description: "Heavy-duty stainless steel round bars forged and hot rolled for structural engineering, valves, shafts, and heavy machinery.",
    fullDescription: "NATIONAL STEEL & ALLOYS is a premier stockist of SS Round Bars in black, turned, forged, and bright finishes. Our round bars exhibit superior mechanical strength, excellent weldability, and resistance to harsh chemical environments. Ideal for structural framing, gear manufacturing, turnings, and heavy machinery shafts.",
    image: "/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg",
      "/assets/SS  ROUND BAR  MAMTA STEEL TRADERS...jpg",
      "/assets/round-bars.jpg"
    ],
    grades: "303, 304, 304L, 316, 316L, 321H, 347, 410, 431",
    gradeList: ["303", "304", "304L", "316", "316L", "321H", "347", "410", "431"],
    specifications: [
      { label: "Standard Specifications", value: "ASTM A276 / ASME SA276, ASTM A479" },
      { label: "Diameter Range", value: "5mm to 500mm (Forged up to 800mm)" },
      { label: "Finish Options", value: "Black, Bright Cold Drawn, Turned & Polished, Peeled" },
      { label: "Length", value: "3 to 6 Meters or Tailored Cut Sizes" },
      { label: "Inspection", value: "Third Party Inspection (TUV, BV, DNV, SGS) Welcome" }
    ],
    chemicalComposition: [
      { grade: "SS 316L", c: "0.03% max", mn: "2.0% max", si: "0.75% max", cr: "16.0 - 18.0%", ni: "10.0 - 14.0%", mo: "2.0 - 3.0%", other: "P 0.045%, S 0.03%" },
      { grade: "SS 321H", c: "0.04 - 0.10%", mn: "2.0% max", si: "0.75% max", cr: "17.0 - 19.0%", ni: "9.0 - 12.0%", other: "Ti 5x(C+N) min" }
    ],
    mechanicalProperties: [
      { grade: "SS 316L", tensile: "485 MPa min", yield: "170 MPa min", elongation: "40% min", hardness: "217 HB max" },
      { grade: "SS 321H", tensile: "515 MPa min", yield: "205 MPa min", elongation: "40% min", hardness: "217 HB max" }
    ],
    applications: [
      "Heavy Machinery & Gear Shafts",
      "Power Plant Turbine Blades & Stems",
      "Marine Propulsion Shafts",
      "Chemical Valve Spindles"
    ],
    standards: ["ASTM A276", "ASTM A479", "DIN 17440", "EN 10272"],
    features: [
      "🚚 Rapid Delivery Across India",
      "📜 Guaranteed Mill Test Certificates (MTC)",
      "✂️ Saw Cutting up to 800mm Diameter",
      "🛡️ High Heat & Corrosion Resistant Material"
    ],
    deliveryInfo: "All India doorstep transport available via dedicated logistics network.",
    relatedProjects: [
      {
        title: "Thermal Power Station Turbine Shafts",
        category: "Power Generation",
        description: "Provided SS 321H heat resistant round bars for power turbine overhaul.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
      }
    ]
  },
  {
    id: "ss-sheet",
    title: "SS Sheet (Stainless Steel Sheets)",
    category: "Stainless Steel",
    description: "Cold rolled and hot rolled stainless steel sheets available in various decorative and industrial surface finishes.",
    fullDescription: "Stainless steel sheets from NATIONAL STEEL & ALLOYS deliver exceptional flatness, surface quality, and dimensional consistency. Available in thin gauges starting from 0.4mm up to 6.0mm with protective PVC coating for mirror, satin, and etched finishes.",
    image: "/assets/SS SHEET  MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/SS SHEET  MAMTA STEEL TRADERS.jpg",
      "/assets/sheets-plates.jpg"
    ],
    grades: "304, 304L, 316, 316L, 202, 430, 310, 904L",
    gradeList: ["304", "304L", "316", "316L", "202", "430", "310", "904L"],
    specifications: [
      { label: "Standard", value: "ASTM A240 / ASME SA240" },
      { label: "Thickness", value: "0.4mm to 6.0mm" },
      { label: "Standard Sizes", value: "4ft x 8ft (1220x2440mm), 4ft x 10ft, 5ft x 10ft, 5ft x 20ft" },
      { label: "Finish", value: "2B, BA, No.4 Matte Satin, Hairline, Mirror 8K, PVC Coated" }
    ],
    chemicalComposition: [
      { grade: "SS 304", c: "0.07% max", mn: "2.0%", si: "0.75%", cr: "18.0%", ni: "8.0%" },
      { grade: "SS 430", c: "0.12% max", mn: "1.0%", si: "1.0%", cr: "16.0 - 18.0%", ni: "0.75% max" }
    ],
    mechanicalProperties: [
      { grade: "SS 304", tensile: "515 MPa", yield: "205 MPa", elongation: "40%", hardness: "92 HRB max" }
    ],
    applications: [
      "Kitchenware & Appliances",
      "Architectural Paneling & Elevator Cabins",
      "Pharmaceutical Equipment Shells",
      "HVAC & Ductwork"
    ],
    standards: ["ASTM A240", "EN 10088-2"],
    features: [
      "🚚 Pan-India Shipping",
      "🛡️ Laser Protective PVC Film Coated",
      "✂️ Custom Shearing & Bending Available"
    ],
    deliveryInfo: "Immediate dispatch from Mumbai stocks to all states & union territories.",
    relatedProjects: [
      {
        title: "Food Processing Facility Clean Room",
        category: "Food Industry",
        description: "Supplied 2B finish SS 304 sheets for hygienic equipment enclosure walls.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
      }
    ]
  },
  {
    id: "ss-tubes",
    title: "SS Tubes (Stainless Steel Tubes)",
    category: "Stainless Steel",
    description: "High-grade seamless and welded stainless steel tubing for heat exchangers, instrumentation, and sanitary applications.",
    fullDescription: "NATIONAL STEEL & ALLOYS supplies precision stainless steel tubing for fluid handling, hydraulic systems, boiler heat exchangers, and food processing lines. Our tubes undergo 100% hydro-testing and eddy current inspection to guarantee leak-free operational performance.",
    image: "/assets/SS TUBES MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/SS TUBES MAMTA STEEL TRADERS.jpg",
      "/assets/SS 304 TUBES MAMTA STEEL TRADERS.jpg",
      "/assets/pipes.jpg"
    ],
    grades: "304, 304L, 316, 316L, 310S, 321, 347",
    gradeList: ["304", "304L", "316", "316L", "310S", "321", "347"],
    specifications: [
      { label: "Standards", value: "ASTM A213, ASTM A249, ASTM A269, ASTM A312" },
      { label: "Outer Diameter", value: "6mm to 219mm (1/4 inch to 8 inch)" },
      { label: "Wall Thickness", value: "0.5mm to 12.7mm (SWG 22 to SWG 10 / Sch 5s to Sch 80s)" },
      { label: "Type", value: "Seamless, ERW, EFW, Bright Annealed (BA), Electro Polished (EP)" }
    ],
    chemicalComposition: [
      { grade: "SS 316L Tube", c: "0.03% max", mn: "2.0%", si: "0.75%", cr: "16.5%", ni: "11.0%", mo: "2.1%" }
    ],
    mechanicalProperties: [
      { grade: "SS 316L Tube", tensile: "485 MPa min", yield: "170 MPa min", elongation: "35% min", hardness: "90 HRB max" }
    ],
    applications: [
      "Heat Exchangers & Condensers",
      "Hydraulic & Instrumentation Lines",
      "Pharmaceutical Sanitary Tubing",
      "Boilers & Superheaters"
    ],
    standards: ["ASTM A213", "ASTM A269", "DIN 17458"],
    features: [
      "🚚 All India Doorstep Shipping",
      "🌊 Hydro-tested & Eddy Current Inspected",
      "📜 EN 10204 3.1 Certified"
    ],
    deliveryInfo: "Prompt dispatch with specialized wooden box packaging for export & domestic transport.",
    relatedProjects: [
      {
        title: "Pharmaceutical Plant Water System",
        category: "Manufacturing",
        description: "Electro-polished SS 316L tubing delivered for high-purity USP water distribution system.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
      }
    ]
  },
  {
    id: "ss-304-pipe",
    title: "SS 304 Pipe (Stainless Steel 304 Pipes)",
    category: "Stainless Steel",
    description: "Industry standard Grade 304 seamless and welded stainless steel pipes for fluid transmission, pressure piping, and structural plumbing.",
    fullDescription: "NATIONAL STEEL & ALLOYS is an authorized distributor of SS 304 / 304L Seamless & Welded Pipes engineered strictly to ASTM A312 specifications. SS 304 offers exemplary strength, excellent weldability, and resistance to atmospheric corrosion and moderate chemical exposure. Available in Schedule 10s, Schedule 40s, Schedule 80s, and Schedule 160.",
    image: "/assets/SS 304 PIPE MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/SS 304 PIPE MAMTA STEEL TRADERS.jpg",
      "/assets/SS PIPE   MAMTA STEEL TRADERS.jpg",
      "/assets/pipes.jpg"
    ],
    grades: "304, 304L, 304H",
    gradeList: ["304", "304L", "304H"],
    specifications: [
      { label: "Standard Specification", value: "ASTM A312 / ASME SA312, ASTM A358" },
      { label: "Pipe Size (NPS)", value: "1/8 NB to 24 NB (Seamless), up to 48 NB (Welded / EFW)" },
      { label: "Schedules", value: "Sch 5S, Sch 10S, Sch 40S, Sch 80S, Sch 160, XXS" },
      { label: "End Details", value: "Plain End, Beveled End, Threaded (NPT / BSPT)" }
    ],
    chemicalComposition: [
      { grade: "SS 304", c: "0.08% max", mn: "2.0% max", si: "0.75% max", cr: "18.0 - 20.0%", ni: "8.0 - 10.5%", other: "P 0.045%, S 0.03%" },
      { grade: "SS 304L", c: "0.03% max", mn: "2.0% max", si: "0.75% max", cr: "18.0 - 20.0%", ni: "8.0 - 12.0%", other: "Low Carbon for Welding" }
    ],
    mechanicalProperties: [
      { grade: "SS 304 Pipe", tensile: "515 MPa min", yield: "205 MPa min", elongation: "35% min", hardness: "90 HRB max" },
      { grade: "SS 304L Pipe", tensile: "485 MPa min", yield: "170 MPa min", elongation: "35% min", hardness: "90 HRB max" }
    ],
    applications: [
      "Industrial Water & Gas Distribution Pipelines",
      "Chemical Processing & Sugar Mills",
      "Paper & Pulp Industry",
      "Firefighting & HVAC Chilled Water Lines"
    ],
    standards: ["ASTM A312", "ASME SA312", "DIN 17456", "EN 10216-5"],
    features: [
      "🚚 Express All India Delivery",
      "📜 Full MTC with Heat Number & Chemical Analysis",
      "✂️ Beveling & Threading Available"
    ],
    deliveryInfo: "Ready stock inventory in Mumbai available for same-day dispatch to Maharashtra, Gujarat, Goa, and pan-India.",
    relatedProjects: [
      {
        title: "Water Treatment Plant Pipeline",
        category: "Infrastructure",
        description: "Supplied 45 Tons of ASTM A312 SS 304 Schedule 40 pipes for municipal water treatment line.",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800"
      }
    ]
  },
  {
    id: "alloy-steel",
    title: "Alloy Steel Products (EN19, EN24, C45, Hardox)",
    category: "Alloy Steel",
    description: "High-strength alloy steel rounds, plates, and shafts designed for heavy load-bearing machinery, gears, and wear-resistant applications.",
    fullDescription: "NATIONAL STEEL & ALLOYS stocks a comprehensive range of Alloy Steels including EN19 (AISI 4140), EN24 (AISI 4340), EN31, C45, and Hardox Wear Plates. Alloy steels are forged and heat-treated (Normalized, Annealed, Quenched & Tempered) to deliver high fatigue strength, toughness, and wear resistance required in heavy machinery manufacturing.",
    image: "/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg",
      "/assets/ALLOYS STEEL  MAMTA STEEL TRADERS2.jpg",
      "/assets/ALLOYS-STEEL MAMTA STEEL TRADERS..avif"
    ],
    grades: "EN19 (4140), EN24 (4340), C45, Hardox 400/500, 16Mo3, SA387 Gr 11/22",
    gradeList: ["EN19", "EN24", "C45", "Hardox 400", "Hardox 500", "16Mo3", "SA387"],
    specifications: [
      { label: "Standards", value: "BS 970, EN 10083, AISI / SAE, DIN 17200" },
      { label: "Form Factors", value: "Round Bars, Heavy Plates, Blocks, Forged Rings, Flat Bars" },
      { label: "Size Range", value: "Rounds 16mm to 650mm | Plates 6mm to 150mm" },
      { label: "Heat Treatment", value: "Hardened & Tempered (QT), Normalized, Annealed" }
    ],
    chemicalComposition: [
      { grade: "EN19 (708M40)", c: "0.36 - 0.44%", mn: "0.70 - 1.00%", si: "0.10 - 0.35%", cr: "0.90 - 1.20%", mo: "0.15 - 0.25%" },
      { grade: "EN24 (817M40)", c: "0.36 - 0.44%", mn: "0.45 - 0.70%", si: "0.10 - 0.35%", cr: "1.00 - 1.40%", ni: "1.30 - 1.70%", mo: "0.20 - 0.35%" }
    ],
    mechanicalProperties: [
      { grade: "EN19 (QT)", tensile: "850 - 1000 MPa", yield: "680 MPa min", elongation: "13% min", hardness: "248 - 302 HB" },
      { grade: "EN24 (QT)", tensile: "850 - 1000 MPa", yield: "680 MPa min", elongation: "13% min", hardness: "248 - 302 HB" }
    ],
    applications: [
      "Automotive Gears, Axles & Crankshafts",
      "Heavy Earthmoving Machinery Pins & Bushings",
      "Mining Excavator Buckets & Wear Liners",
      "High Stress Structural Fasteners"
    ],
    standards: ["BS 970", "EN 10083", "AISI 4140 / 4340"],
    features: [
      "🚚 Swift Express Delivery Across India",
      "📜 Ultrasonic Test (UT Class 1/2) Certified",
      "✂️ Precision Saw Cut Blocks & Bars"
    ],
    deliveryInfo: "Prompt dispatch with heavy vehicle road transport across pan-India industrial hubs.",
    relatedProjects: [
      {
        title: "Mining Equipment Wear Plate Assembly",
        category: "Mining",
        description: "Supplied Hardox 400 wear plates for excavator bucket liner plates in Jharkhand mining zone.",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800"
      }
    ]
  },
  {
    id: "carbon-steel",
    title: "Carbon Steel Products (EN8, EN9, ASTM A106, IS2062)",
    category: "Carbon Steel",
    description: "Reliable medium & high carbon steel plates, seamless pipes, and structural bars engineered for strength and cost efficiency.",
    fullDescription: "NATIONAL STEEL & ALLOYS supplies Carbon Steel products including ASTM A106 Grade B pipes, EN8 (C45), EN9, and IS2062 steel plates. Carbon steel provides high tensile strength, excellent formability, and structural rigidity for heavy engineering, construction, and power transmission.",
    image: "/assets/CARBON STEEL MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/CARBON STEEL MAMTA STEEL TRADERS.jpg",
      "/assets/carbon-steel-mamta steel traders.jpg",
      "/assets/CS  MAMTA STEEL TRADERS00.jpg"
    ],
    grades: "EN8, EN9, ASTM A106 Gr. B, IS2062 E250/E350, 100CR6",
    gradeList: ["EN8", "EN9", "ASTM A106 Gr B", "IS2062 E250", "IS2062 E350", "100CR6"],
    specifications: [
      { label: "Standards", value: "ASTM A106, ASTM A53, IS 2062, BS 970 EN8" },
      { label: "Product Forms", value: "Seamless Pipes, Plates, Round Bars, Steel Circles, Channels" },
      { label: "Thickness / Size", value: "Pipes: 1/2 inch to 24 inch | Plates: 2mm to 120mm" }
    ],
    chemicalComposition: [
      { grade: "EN8 (080M40)", c: "0.36 - 0.44%", mn: "0.60 - 1.00%", si: "0.10 - 0.40%", p: "0.05% max", s: "0.05% max" },
      { grade: "ASTM A106 Gr B", c: "0.30% max", mn: "0.29 - 1.06%", si: "0.10% min", p: "0.035% max", s: "0.035% max" }
    ],
    mechanicalProperties: [
      { grade: "EN8 Normalized", tensile: "550 - 700 MPa", yield: "280 MPa min", elongation: "16% min", hardness: "150 - 200 HB" },
      { grade: "ASTM A106 Gr B", tensile: "415 MPa min", yield: "240 MPa min", elongation: "30% min", hardness: "140 HB max" }
    ],
    applications: [
      "Commercial Building Frameworks & Columns",
      "High Pressure Steam & Hydraulic Lines",
      "General Mechanical Engineering Components",
      "Automotive Axle Shafts & Gears"
    ],
    standards: ["ASTM A106", "IS 2062", "BS 970"],
    features: [
      "🚚 All-India Fast Transportation",
      "📜 Certified Chemical & Mechanical Test Reports",
      "🛡️ Cost-Effective & High Load-Bearing Strength"
    ],
    deliveryInfo: "Available directly from our stockyards in Mumbai to pan-India locations.",
    relatedProjects: [
      {
        title: "Commercial High-Rise Structural Frame",
        category: "Infrastructure",
        description: "Delivered 120 tons of IS2062 Grade E250 carbon steel plates & beams in Mumbai.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
      }
    ]
  },
  {
    id: "aluminium-products",
    title: "Aluminium Products (6061, 6063, 7075, 5052)",
    category: "Non-Ferrous",
    description: "Lightweight, corrosion-resistant aluminium sheets, plates, extrusions, and aircraft-grade alloys.",
    fullDescription: "NATIONAL STEEL & ALLOYS offers a vast range of Aluminium plates, sheets, rods, and extruded structural shapes in grades 6061-T6, 6063-T5, 7075-T6, and 5052-H32. Aluminium alloys deliver high strength-to-weight ratio, exceptional thermal conductivity, and atmospheric corrosion resistance.",
    image: "/assets/ALUMINIUM MAMTA STEEL TRADERS..jpg",
    gallery: [
      "/assets/ALUMINIUM MAMTA STEEL TRADERS..jpg",
      "/assets/ALUMINIUM MAMTA STEEL TRADERS.jpg",
      "/assets/ALUMINIUM PLATE MAMTA STEEL TRADERS.jpg"
    ],
    grades: "6061-T6, 6063-T5, 7075-T6, 5052-H32, 1100, 2024",
    gradeList: ["6061-T6", "6063-T5", "7075-T6", "5052-H32", "1100", "2024"],
    specifications: [
      { label: "Standards", value: "ASTM B209, ASTM B221, EN 485" },
      { label: "Forms Available", value: "Plates, Sheets, Round Bars, Square Tubes, Checker Plates" },
      { label: "Thickness", value: "0.5mm to 150mm" }
    ],
    chemicalComposition: [
      { grade: "Aluminium 6061", c: "Al Balance", mn: "0.15%", si: "0.40 - 0.80%", cr: "0.04 - 0.35%", mo: "Mg 0.8-1.2%", other: "Cu 0.15-0.40%" }
    ],
    mechanicalProperties: [
      { grade: "6061-T6", tensile: "310 MPa min", yield: "276 MPa min", elongation: "12% min", hardness: "95 HB" },
      { grade: "7075-T6", tensile: "572 MPa min", yield: "503 MPa min", elongation: "11% min", hardness: "150 HB" }
    ],
    applications: [
      "Aerospace Structural Parts & Fixtures",
      "Automotive Lightweight Chassis & Body Paneling",
      "Marine Hull Fabrication & Decking",
      "Precision Jig & Tooling Plates"
    ],
    standards: ["ASTM B209", "EN 485"],
    features: [
      "🚚 Express Delivery Across India",
      "🛡️ High Strength-to-Weight Ratio",
      "📜 Material Certification Provided"
    ],
    deliveryInfo: "Full stock readiness for rapid transit to all industrial corridors.",
    relatedProjects: [
      {
        title: "Aerospace Tooling Jig Assembly",
        category: "Manufacturing",
        description: "Supplied precision-ground 7075-T6 aluminium plates for aircraft fixture manufacturing.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
      }
    ]
  },
  {
    id: "cs-flanges",
    title: "CS Flanges & SS Flanges (ANSI B16.5, DIN, BS)",
    category: "Carbon Steel",
    description: "Precision forged Carbon Steel and Stainless Steel flanges including Weld Neck, Slip-On, Blind, and Socket Weld types.",
    fullDescription: "NATIONAL STEEL & ALLOYS manufactures and stocks industrial pipe flanges conforming to ANSI B16.5, ASME B16.47, DIN, and BS standards. Available in pressure classes 150#, 300#, 600#, 900#, 1500#, and 2500# in material grades ASTM A105, SS 304/304L, SS 316/316L, and Duplex steel.",
    image: "/assets/CS FLANGES  MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/CS FLANGES  MAMTA STEEL TRADERS.jpg",
      "/assets/SS FLANGE  MAMTA STEEL TRADERS.jpg",
      "/assets/flanges.jpg"
    ],
    grades: "ASTM A105, SS 304, SS 304L, SS 316, SS 316L, F11, F22",
    gradeList: ["ASTM A105", "SS 304", "SS 304L", "SS 316", "SS 316L", "F11", "F22"],
    specifications: [
      { label: "Dimensions", value: "ANSI B16.5, ASME B16.47 Series A & B, DIN 2527 / 2576" },
      { label: "Size Range", value: "1/2 inch to 48 inch (DN15 to DN1200)" },
      { label: "Pressure Class", value: "150#, 300#, 600#, 900#, 1500#, 2500#, PN6 to PN64" },
      { label: "Flange Types", value: "Weld Neck (WN), Slip-On (SO), Blind (BL), Socket Weld (SW), Threaded" }
    ],
    chemicalComposition: [
      { grade: "ASTM A105 CS", c: "0.35% max", mn: "0.60 - 1.05%", si: "0.10 - 0.35%", p: "0.035%", s: "0.040%" }
    ],
    mechanicalProperties: [
      { grade: "ASTM A105", tensile: "485 MPa min", yield: "250 MPa min", elongation: "22% min", hardness: "187 HB max" }
    ],
    applications: [
      "Oil Refineries & High Pressure Gas Pipelines",
      "Chemical Processing Plants",
      "Boiler & Steam Header Connections",
      "Shipbuilding & Offshore Piping"
    ],
    standards: ["ANSI B16.5", "ASME B16.47", "DIN 2527"],
    features: [
      "🚚 Fast All-India Logistics",
      "📜 Hydrostatic & Ultrasonic Tested with MTC",
      "🛡️ Serrated / RF / RTJ Facing Available"
    ],
    deliveryInfo: "Immediate dispatch of standard raised face (RF) and ring type joint (RTJ) flanges from ready warehouse stock.",
    relatedProjects: [
      {
        title: "Offshore Gas Terminal Piping",
        category: "Oil & Gas",
        description: "Delivered 600# class ASTM A105 forged weld neck flanges for offshore gas pipeline.",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800"
      }
    ]
  },
  {
    id: "nuts-bolts",
    title: "Nuts & Bolts Fasteners (Grade 8.8, 10.9, Stainless Steel A2/A4)",
    category: "Fasteners",
    description: "High-tensile, corrosion-resistant nuts, hex bolts, stud bolts, and washers for heavy construction and industrial machinery.",
    fullDescription: "NATIONAL STEEL & ALLOYS supplies industrial fasteners conforming to ISO, DIN, and ASTM specifications. Offered in High Tensile Grade 8.8, 10.9, 12.9, ASTM A193 B7/B8, and Stainless Steel A2-70 / A4-80 grades with hot-dip galvanized, electro-zinc, or PTFE coatings.",
    image: "/assets/NUTS BOLTS  MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/NUTS BOLTS  MAMTA STEEL TRADERS.jpg",
      "/assets/NUTS BOLTS  MAMTA STEEL TRADERS0.jpg",
      "/assets/SS NOTS BOLTS MAMTA STEEL TRADERS.jpg"
    ],
    grades: "Grade 8.8, 10.9, 12.9, ASTM A193 B7/B8, SS 304 (A2), SS 316 (A4)",
    gradeList: ["Grade 8.8", "Grade 10.9", "Grade 12.9", "ASTM A193 B7", "SS A2-70", "SS A4-80"],
    specifications: [
      { label: "Standards", value: "DIN 931, DIN 933, ISO 4014, ASTM A193 / A194" },
      { label: "Diameter Range", value: "M6 to M72 (1/4 inch to 3 inch)" },
      { label: "Coating Options", value: "Zinc Plated, Hot-Dip Galvanized (HDG), Xylan/PTFE, Plain" }
    ],
    chemicalComposition: [
      { grade: "Grade 8.8 Steel", c: "0.25 - 0.55%", mn: "0.70% min", p: "0.025%", s: "0.025%" }
    ],
    mechanicalProperties: [
      { grade: "Grade 8.8", tensile: "800 MPa min", yield: "640 MPa min", elongation: "12% min", hardness: "22 - 32 HRC" },
      { grade: "Grade 10.9", tensile: "1000 MPa min", yield: "900 MPa min", elongation: "9% min", hardness: "32 - 39 HRC" }
    ],
    applications: [
      "Steel Structure Bridge & Building Erection",
      "Turbines, Flanges & Pressure Piping Joints",
      "Heavy Earthmoving & Automotive Assemblies"
    ],
    standards: ["DIN 933", "ISO 4017", "ASTM A193"],
    features: [
      "🚚 Pan-India Express Supply",
      "🛡️ High Torque & Tensile Strength",
      "📜 Proof Load Tested & MTC Provided"
    ],
    deliveryInfo: "Bulk quantities dispatched promptly across India.",
    relatedProjects: [
      {
        title: "Flyover Steel Girder Fastening",
        category: "Infrastructure",
        description: "Supplied 200,000 sets of Grade 10.9 HDG hex bolts & nuts for city flyover project.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
      }
    ]
  },
  {
    id: "copper-products",
    title: "Copper & Brass Products (C11000, C12200, C36000)",
    category: "Non-Ferrous",
    description: "Electrolytic grade copper sheets, busbars, copper tubes, and precision brass rods for electrical and plumbing industries.",
    fullDescription: "NATIONAL STEEL & ALLOYS is a premier stockist of Copper and Brass materials. We offer ETP Copper (C11000), Oxygen-Free Copper (C10200), DHP Copper Tubing (C12200), and Free Cutting Brass (C36000). Outstanding electrical conductivity, thermal performance, and corrosion resistance.",
    image: "/assets/COPPER MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/COPPER MAMTA STEEL TRADERS.jpg",
      "/assets/COPPER FITTING  MAMTA STEEL TRADERS.jpg",
      "/assets/BRASS MAMTA STEEL TRADERS..jpg"
    ],
    grades: "C11000 ETP Copper, C10200 OFC, C12200 DHP, C36000 Free Cutting Brass",
    gradeList: ["C11000", "C10200", "C12200", "C36000"],
    specifications: [
      { label: "Standards", value: "ASTM B152, ASTM B187, ASTM B280, IS 191" },
      { label: "Forms", value: "Busbars, Sheets, Coils, Pipes, Elbows, Hex Rods" },
      { label: "Conductivity", value: "100% IACS Electrical Conductivity (ETP Copper)" }
    ],
    chemicalComposition: [
      { grade: "ETP Copper (C11000)", c: "Cu 99.90% min", mn: "O 0.04% max", si: "-", cr: "-", ni: "-" }
    ],
    mechanicalProperties: [
      { grade: "ETP Copper Bar", tensile: "220 - 300 MPa", yield: "170 MPa min", elongation: "25% min", hardness: "65 - 90 HV" }
    ],
    applications: [
      "Electrical Transformers & Switchgear Busbars",
      "HVAC Refrigeration & Heat Exchangers",
      "Plumbing Fittings & Connectors",
      "Decorative Architectural Finishes"
    ],
    standards: ["ASTM B187", "IS 191"],
    features: [
      "🚚 Pan-India Shipping",
      "⚡ 100% IACS High Conductivity Copper",
      "📜 Certified Purity Reports"
    ],
    deliveryInfo: "Prompt dispatch with specialized protective packaging.",
    relatedProjects: [
      {
        title: "Substation Electrical Busbar Supply",
        category: "Power Generation",
        description: "Delivered 12 Tons of high purity ETP copper busbars for electrical grid substation.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
      }
    ]
  },
  {
    id: "ss-flange",
    title: "SS Flange (Stainless Steel 304 / 316 Flanges)",
    category: "Stainless Steel",
    description: "High-grade stainless steel 304, 316, 310S, and Duplex flanges engineered for critical fluid control systems.",
    fullDescription: "NATIONAL STEEL & ALLOYS supplies superior quality SS Flanges in Slip-On, Weld Neck, Blind, Socket Weld, and Threaded configurations. Built to resist chemical attack and high temperature pressure environments in refineries and offshore units.",
    image: "/assets/SS FLANGE  MAMTA STEEL TRADERS.jpg",
    gallery: [
      "/assets/SS FLANGE  MAMTA STEEL TRADERS.jpg",
      "/assets/flanges.jpg"
    ],
    grades: "304, 304L, 316, 316L, 310S, 321, 347, 904L",
    gradeList: ["304", "304L", "316", "316L", "310S", "321", "347", "904L"],
    specifications: [
      { label: "Standard", value: "ANSI B16.5, DIN 2527, EN 1092-1" },
      { label: "Size", value: "1/2 inch to 36 inch" },
      { label: "Class", value: "150LB, 300LB, 600LB, 1500LB" }
    ],
    chemicalComposition: [
      { grade: "SS 316L Flange", c: "0.03% max", mn: "2.0%", si: "0.75%", cr: "17.0%", ni: "12.0%", mo: "2.5%" }
    ],
    mechanicalProperties: [
      { grade: "SS 316L Flange", tensile: "485 MPa min", yield: "170 MPa min", elongation: "40% min", hardness: "217 HB max" }
    ],
    applications: [
      "Chemical Processing Plants",
      "Offshore Oil & Gas Pipelines",
      "Pharmaceutical Processing"
    ],
    standards: ["ANSI B16.5", "DIN 2527"],
    features: [
      "🚚 Pan-India Delivery",
      "📜 MTC EN 10204 3.1 Certified"
    ],
    deliveryInfo: "Immediate dispatch from ready warehouse stock in Mumbai.",
    relatedProjects: [
      {
        title: "Petrochemical Pipe Line Jointing",
        category: "Manufacturing",
        description: "Supplied SS 316L Weld Neck flanges for chemical reactor unit.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
      }
    ]
  }
];

// Helper functions
export function getAllProducts(): Product[] {
  return productsData;
}

export function getProductById(id: string): Product | undefined {
  return productsData.find((p) => p.id === id || p.id.toLowerCase() === id.toLowerCase() || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === id.toLowerCase());
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return productsData;
  return productsData.filter((p) => p.category === category);
}

export function getRelatedProducts(productId: string, category: string, limit = 4): Product[] {
  return productsData
    .filter((p) => p.id !== productId && (p.category === category || category === "All"))
    .slice(0, limit);
}
