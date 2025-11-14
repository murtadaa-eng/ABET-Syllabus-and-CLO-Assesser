import type { Course } from './types';

// Transcribed from the provided image
export const USER_CREDENTIALS: Record<string, { password: string; fullName: string; }> = {
  'civ_2025_001': { password: 'CE20251113@001', fullName: 'ا.م.د حيدر عبد راضي' },
  'civ_2025_002': { password: 'CE20251113@002', fullName: 'ا.د سامر محمد جاسب' },
  'civ_2025_003': { password: 'CE20251113@003', fullName: 'ا.م.د فاتن ابراهيم موسى' },
  'civ_2025_004': { password: 'CE20251113@004', fullName: 'ا.م.د فراس جواد كاظم' },
  'civ_2025_005': { password: 'CE20251113@005', fullName: 'ا.م.د مرتضى عباس عبد علي' },
  'civ_2025_006': { password: 'CE20251113@006', fullName: 'ا.م.د معمر حازم الطائي' },
  'civ_2025_007': { password: 'CE20251113@007', fullName: 'ا.م.د ناصر حكيم طعمة' },
  'civ_2025_008': { password: 'CE20251113@008', fullName: 'ا.م.د مصطفى جاسب جاسم' },
  'civ_2025_009': { password: 'CE20251113@009', fullName: 'أ.د سعد فهد رسن' },
  'civ_2025_010': { password: 'CE20251113@010', fullName: 'أ.د عبدالخالق عبداليمه جعفر' },
  'civ_2025_011': { password: 'CE20251113@011', fullName: 'أ.م.د ميس كريم جبار' },
  'civ_2025_012': { password: 'CE20251113@012', fullName: 'م.د صبا جاسم رحيم' },
  'civ_2025_013': { password: 'CE20251113@013', fullName: 'م حيدر حسن حيدر' },
  'civ_2025_014': { password: 'CE20251113@014', fullName: 'م زهراء حسن جوده' },
  'civ_2025_015': { password: 'CE20251113@015', fullName: 'م. جواد كاظم طاهر' },
  'civ_2025_016': { password: 'CE20251113@016', fullName: 'م. ساجد كامل زمام' },
  'civ_2025_017': { password: 'CE20251113@017', fullName: 'م.د سلام عادل مطلك' },
  'civ_2025_018': { password: 'CE20251113@018', fullName: 'م.د محمد جاسم رحيم' },
  'civ_2025_019': { password: 'CE20251113@019', fullName: 'م.د. رياض طعمه حازم' },
  'civ_2025_020': { password: 'CE20251113@020', fullName: 'م.م احمد هاتف عبيد' },
  'civ_2025_021': { password: 'CE20251113@021', fullName: 'م.م أياد محسن سبيهان' },
  'civ_2025_022': { password: 'CE20251113@022', fullName: 'م.م بيداء عبد الكريم عبد الزهرة' },
  'civ_2025_023': { password: 'CE20251113@023', fullName: 'م.م ختام سالم حسين' },
  'civ_2025_024': { password: 'CE20251113@024', fullName: 'م.م رسول داخل محسن' },
  'civ_2025_025': { password: 'CE20251113@025', fullName: 'م.م سارة حسين حميد' },
  'civ_2025_026': { password: 'CE20251113@026', fullName: 'م.م ضحى كريم حسن' },
  'civ_2025_027': { password: 'CE20251113@027', fullName: 'م.م عمار خلف جبار' },
  'civ_2025_028': { password: 'CE20251113@028', fullName: 'م.م فاضل مزهر شنيور' },
  'civ_2025_029': { password: 'CE20251113@029', fullName: 'م.د حسين رحيم لازم' },
  'civ_2025_030': { password: 'CE20251113@030', fullName: 'م. حيدر حسن حيدر' },
  'civ_2025_031': { password: 'CE20251113@031', fullName: 'م.م حيدر عبد الكريم رحيم' },
  'civ_2025_032': { password: 'CE20251113@032', fullName: 'م. د أيسر حسن صبير' },
};

export const COURSES: Course[] = [
    { code: 'ENG122', name: 'Mathematics I' },
    { code: 'CE115', name: 'Engineering Mechanics I' },
    { code: 'UOM122', name: 'Computer Basics I' },
    { code: 'UOM120', name: 'English Language' },
    { code: 'ENG128', name: 'Engineering Drawings' },
    { code: 'ENG126', name: 'Chemistry' },
    { code: 'ENG125', name: 'Physics' },
    { code: 'ENG124', name: 'Mathematics II' },
    { code: 'CE122', name: 'Engineering Mechanics II' },
    { code: 'CE125', name: 'Construction Material' },
    { code: 'CE126', name: 'Engineering Statistics' },
    { code: 'ENG123', name: 'Engineering Workshops' },
    { code: 'CE211', name: 'Strength of Material I' },
    { code: 'CE213', name: 'Fluid Mechanics I' },
    { code: 'CE214', name: 'Engineering Surveying I' },
    { code: 'CE216', name: 'Concrete Technology' },
    { code: 'CE221', name: 'Strength of Material II' },
    { code: 'ENG201', name: 'Mathematics III' },
    { code: 'CE223', name: 'Fluid Mechanics II' },
    { code: 'CE224', name: 'Engineering Surveying II' },
    { code: 'CE228', name: 'Building Construction' },
    { code: 'CE227', name: 'Engineering Geology' },
    { code: 'CE225', name: 'Computer Programming' },
    { code: 'CE311', name: 'Theory of Structures I' },
    { code: 'CE312', name: 'Design of Reinforced Concrete Structures I' },
    { code: 'CE316', name: 'Engineering Management' },
    { code: 'CE317', name: 'Traffic Engineering' },
    { code: 'CE318', name: 'Engineering Application in Computer (BIM Revit + Robot)' },
    { code: 'CE321', name: 'Theory of Structures II' },
    { code: 'CE322', name: 'Design of Reinforced Concrete Structures II' },
    { code: 'CE323', name: 'Numerical Analysis' },
    { code: 'CE324', name: 'Soil Mechanics II' },
    { code: 'CE325', name: 'Water Resources Engineering II' },
    { code: 'CE326', name: 'Engineering Economy' },
    { code: 'CE327', name: 'Transportation Engineering' },
    { code: 'ENG320', name: 'Ethics of Engineering Profession' },
    { code: 'CE416', name: 'Hydraulic Structures' },
    { code: 'CE417', name: 'Strengthening and Rehabilitation of Structures' },
    { code: 'CE418', name: 'Engineering Project I / Capstone Project I' },
    { code: 'CE421', name: 'Design of Reinforced Concrete Structures IV' },
    { code: 'CE422', name: 'Design of Steel Structures II' },
    { code: 'CE423', name: 'Foundation Engineering II' },
    { code: 'CE424', name: 'Highways Engineering II' },
    { code: 'CE425', name: 'Sanitary and Environmental Engineering II' },
    { code: 'CE426', name: 'Elective Topics in Civil Engineering' },
    { code: 'CE427', name: 'Methods of Construction and Estimation' },
];


export const SYLLABUS_DATA = `
Course_Code: ENG122
 Course_Name: Mathematics I
 Short_Scope: Foundations of single‑variable calculus for engineering: limits, differentiation rules, related rates, linearization, dimensional consistency and computational verification.
 CLOs (mapped ABET SOs): 
CLO1: State differentiation rules and units for time derivatives. SO1
CLO2: Interpret physical meaning of time rates and sign conventions. SO1 
CLO3: Solve related‑rate problems for engineering geometry. SO1, SO7 
CLO4: Apply chain/product rules to time‑dependent engineering expressions. SO1 
CLO5: Perform dimensional analysis on derivatives and propagate units. SO1 
CLO6: Validate manual solutions with spreadsheets/CAS. SO7 
CLO7: Report solutions, assumptions and verification steps clearly. SO3
 Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro; functions, units — CLO1,CLO5 — formative quiz 
Week2 Limits and continuity; rates — CLO1,CLO2 — HW 
Week3 Basic differentiation; unit propagation — CLO1,CLO5 — HW
Week4 Product & quotient rules; engineering examples — CLO1,CLO4 — HW 
Week5 Chain rule; geometry relations A(b,h) — CLO3,CLO4 — In‑class assignment 
Week6 Related rates: channel examples — CLO3,CLO7 — Lab prep 
Week7 Implicit differentiation; sign interpretation — CLO2,CLO7 — Quiz 
Week8 Higher derivatives; linearization — CLO5 — Project assigned 
Week9 Linearization applications; error bounds — CLO5,CLO7 — HW 
Week10 Spreadsheet/CAS validation — CLO6,CLO3 — Lab report 
Week11 Complex chain/product examples — CLO4,CLO3 — HW 
Week12 Units checks in rate problems — CLO5 — In‑class assignment 
Week13 Project: manual + computational note — CLO6,CLO7 — Draft 
Week14 Peer review of projects — CLO7 — Peer feedback 
Week15 Final exam & portfolio — CLO1–CLO7 — Final
Course_Code: CE115
 Course_Name: Engineering Mechanics I
 Short_Scope: Statics of particles and rigid bodies: vector resolution, free‑body diagrams, equilibrium, reaction calculations and hand‑check verification.
 CLOs (mapped ABET SOs):
 CLO1: State equilibrium equations ΣFx, ΣFy, ΣM with units. SO1 
CLO2: Produce correct free‑body diagrams for loads. SO1 
CLO3: Resolve forces into components and apply trigonometry. SO1 
CLO4: Compute reactions and internal forces for determinate systems. SO1 
CLO5: Solve cable and inclined load problems via vectors. SO1 
CLO6: Conduct sensitivity checks and discuss design implications. SO4 
CLO7: Explain role of FBDs in isolating loads. SO3 
CLO8: Document assumptions, units and steps in notes. SO3 
CLO9: Use spreadsheets to verify equilibrium solutions. SO7 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule:
 Week1 Intro; vectors — CLO1,CLO3 — Diagnostic HW 
Week2 FBD fundamentals — CLO2,CLO7 — In‑class assignment 
Week3 Equilibrium equations — CLO1,CLO4 — HW 
Week4 Forces at angles — CLO3,CLO5 — Quiz 
Week5 Cable problems — CLO5,CLO4 — HW 
Week6 Distributed loads & resultants — CLO2,CLO4 — Lab 
Week7 Reaction calculations — CLO4,CLO8 — HW 
Week8 Midterm (Weeks1–7) — CLO1–CLO5 — Midterm 
Week9 Internal forces & method of sections intro — CLO4,CLO3 — HW 
Week10 Equilibrium sensitivity — CLO6 — In‑class assignment 
Week11 Documentation and technical notes — CLO8 — HW 
Week12 Spreadsheet verification — CLO9 — Lab report 
Week13 Complex FBDs — CLO2,CLO4 — Group HW 
Week14 Peer review — CLO8,CLO6 — Peer feedback 
Week15 Final exam & portfolio — CLO1–CLO9 — Final
Course_Code: UOM122 
Course_Name: Computer Basics I 
Short_Scope: Spreadsheet fundamentals for engineering: functions, unit conversion strategies, input validation, automation of engineering equations.
 CLOs (mapped ABET SOs):
 CLO1: Identify spreadsheet functions for engineering formulas. SO7 
CLO2: Implement robust unit conversion strategies in spreadsheets. SO1, SO7 
CLO3: Implement input validation and error handling. SO7 
CLO4: Automate Manning’s equation and similar engineering checks. SO7, SO1 
CLO5: Document workbook structure and test cases. SO3, SO7 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule:
 Week1 Excel intro; units & layout — CLO1,CLO5 — Lab 
Week2 Numeric functions & unit handling — CLO1,CLO2 — HW 
Week3 Logical functions & error trapping — CLO3 — Lab 
Week4 Lookup functions — CLO1 — HW 
Week5 Data validation & README — CLO3,CLO5 — Lab report 
Week6 Unit conversion strategies — CLO2 — HW 
Week7 Manning workbook skeleton — CLO4 — Lab progress 
Week8 Workbook documentation; quiz — CLO5 — Quiz 
Week9 Testing & sensitivity cases — CLO2,CLO4 — HW 
Week10 Error handling & debugging — CLO3 — Lab 
Week11 Peer workbook review — CLO5 — Peer review 
Week12 Midterm practical submission — CLO1–CLO4 — Midterm 
Week13 Advanced validation & optimization — CLO3,CLO5 — HW 
Week14 Final workbook polishing — CLO5 — Draft submission 
Week15 Final lab submission & presentation — CLO1–CLO5 — Final
Course_Code: UOM120
 Course_Name: English Language
 Short_Scope: Technical English foundations: grammar, vocabulary, report structure and oral presentation for engineering students.
 CLOs (mapped ABET SOs):
 CLO1: Demonstrate correct technical grammar. SO3 
CLO2: Use appropriate technical vocabulary. SO3 
CLO3: Produce concise technical memos and lab reports. SO3 
CLO4: Deliver short oral technical explanations. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: Week1 Diagnostic writing — CLO1,CLO3 — HW 
Week2 Grammar & sentence structure — CLO1 — In‑class 
Week3 Technical vocabulary — CLO2 — Quiz 
Week4 Report structure — CLO3 — HW 
Week5 Writing units & assumptions — CLO3 — HW 
Week6 Editing & concision — CLO1,CLO3 — Peer edit 
Week7 Oral presentation skills — CLO4 — Practice 
Week8 Midterm writing exam — CLO1–CLO3 — Midterm 
Week9 Figures & captions — CLO3 — HW 
Week10 Executive summaries — CLO3 — Draft 
Week11 Technical persuasion — CLO3,CLO2 — HW 
Week12 Peer review & revision — CLO1–CLO3 — Peer feedback 
Week13 Oral presentation of memo — CLO4 — In‑class 
Week14 Final writing workshop — CLO3 — Final draft 
Week15 Final writing exam & portfolio — CLO1–CLO4 — Final
Course_Code: ENG128
 Course_Name: Engineering Drawings
 Short_Scope: Manual drawing conventions, orthographic projection, sectioning, dimensioning and CAD handover basics.
 CLOs (mapped ABET SOs):
 CLO1: Recall standard line types and projection systems. SO1, SO5 
CLO2: Produce orthographic projections with correct dimensioning. SO1, SO5 
CLO3: Create sectional views and hatching. SO1, SO5 
CLO4: Annotate drawings with notes and legends. SO3 
CLO5: Prepare manual sketches for CAD translation. SO7 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule:
 Week1 Drawing standards & line types — CLO1 — HW 
Week2 Projection systems & multi‑view layout — CLO1,CLO2 — In‑class 
Week3 Scale & dimensioning — CLO2 — Quiz 
Week4 Section views & hatching — CLO3 — HW 
Week5 Tolerancing & annotation — CLO2,CLO4 — HW 
Week6 Retaining wall plan & elevation start — CLO2,CLO3 — HW 
Week7 Detailing & construction notes — CLO4 — In‑class 
Week8 Midterm drawing exam — CLO1–CLO4 — Midterm 
Week9 CAD handover prep — CLO5 — HW 
Week10 Drawing QA checklist — CLO4,CLO5 — Peer review 
Week11 Advanced annotation & callouts — CLO4 — HW 
Week12 Final drawing set production — CLO2,CLO3,CLO4 — Draft submission 
Week13 Peer critique & revision — CLO4,CLO5 — Peer feedback 
Week14 Final drawing submission prep — CLO1–CLO5 — Final draft 
Week15 Final presentation & portfolio submission — CLO1–CLO5 — Final
Course_Code: ENG126 
Course_Name: Chemistry
 Short_Scope: General chemistry fundamentals with emphasis on cementitious systems, stoichiometry, unit handling, mass balances and lab reporting suited to civil materials. 
CLOs (mapped ABET SOs): 
CLO1: List molar masses and units for key constituents. SO1 
CLO2: Set up stoichiometric equations and compute reactant/product masses. SO1, SO7 
CLO3: Perform unit conversions and propagate uncertainties. SO1, SO6 
CLO4: Explain practical yield reductions and design implications. SO4 
CLO5: Communicate stoichiometric work in lab report format. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule:
Week1 Units & molar mass concepts — CLO1 — HW 
Week2 Stoichiometry fundamentals — CLO2 — HW 
Week3 Hydration reaction examples (cement) — CLO2,CLO4 — Lab assigned 
Week4 Molar relationships & mass computations — CLO2 — HW 
Week5 Unit conversions & uncertainty — CLO3 — Quiz 
Week6 Scaling lab reactions to engineering quantities — CLO2,CLO3 — Lab 
Week7 Practical yields & reaction completeness — CLO4 — HW 
Week8 Midterm exam — CLO1–CLO4 — Midterm 
Week9 Spreadsheet automation of stoichiometry — CLO2,CLO3 — Lab assignment 
Week10 Interpret lab/compositional data & report format — CLO5 — HW 
Week11 Environmental implications of byproducts — CLO4 — Short report 
Week12 Lab submission & validation checks — CLO2,CLO5 — Lab report 
Week13 Case study: mix calculations for engineering use — CLO2,CLO3 — HW 
Week14 Review & project drafting — CLO5 — Peer review 
Week15 Final exam & lab portfolio submission — CLO1–CLO5 — Final
Course_Code: ENG125
 Course_Name: Physics 
Short_Scope: Mechanics, waves, thermodynamics and basic electricity relevant to civil engineering: problem‑solving, unit consistency and experimental reporting.
 CLOs (mapped ABET SOs): 
CLO1: State fundamental physical laws and consistent units. SO1 
CLO2: Solve mechanics problems with correct unit handling. SO1 
CLO3: Describe wave phenomena and energy concepts quantitatively. SO1 
CLO4: Apply thermodynamics and fluid statics basics to civil contexts. SO1, SO6 
CLO5: Report experiments and solutions with assumptions and verification. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Vectors & kinematics review — CLO1,CLO2 — HW 
Week2 Newtonian dynamics & energy — CLO2 — In‑class problems 
Week3 Rotation & angular momentum basics — CLO2 — HW 
Week4 Oscillations & waves intro — CLO3 — Quiz 
Week5 Thermodynamics intro & heat transfer basics — CLO4 — HW 
Week6 Fluid statics recap & pressure concepts — CLO4 — Lab 
Week7 Vibrations & structural application intro — CLO3 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Wave superposition practical — CLO3 — HW 
Week10 Energy methods & thermofluid examples — CLO4 — In‑class task 
Week11 Lab synthesis & data reporting — CLO5 — Lab report 
Week12 Project computational check — CLO5 — Draft 
Week13 Peer review & revision — CLO5 — Peer feedback 
Week14 Consolidation & exam review — CLO1–CLO4 — HW revision 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: ENG124
Course_Name: Mathematics II 
Short_Scope: Integral calculus, techniques of integration, applications (areas, volumes, work), numerical integration and first‑order ODEs with unit consistency and computational validation. 
CLOs (mapped ABET SOs): 
CLO1: Apply definite and indefinite integration techniques to compute areas and volumes. SO1 
CLO2: Solve basic first‑order ODEs (separable, linear) arising in engineering models. SO1, SO7 
CLO3: Use integration to compute work, centroids and other engineering integrals with units. SO1 
CLO4: Validate analytic integration with numerical methods (trapezoid, Simpson) in spreadsheets/CAS. SO7 
CLO5: Report procedures, units and verification steps in technical write‑ups. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Riemann sums & area — CLO1 — HW 
Week2 FTC & antiderivatives — CLO1 — In‑class 
Week3 Substitution & integration by parts — CLO1 — HW 
Week4 Trig integrals & partial fractions — CLO1 — Quiz 
Week5 Area between curves; volumes of revolution — CLO3 — HW 
Week6 Work integrals; hydrostatic force examples — CLO3 — Lab 
Week7 Numerical integration methods & error estimates — CLO4 — Lab report 
Week8 First‑order ODEs: separable/linear — CLO2 — HW 
Week9 Modeling mixing and exponential responses — CLO2 — Project assigned 
Week10 Integrating factor method; IVPs — CLO2 — HW 
Week11 Numerical validation of integrals/ODEs — CLO4 — Lab 
Week12 Linearization & approximation error — CLO4,CLO1 — In‑class task 
Week13 Project: analytic + numerical validation — CLO5 — Draft 
Week14 Peer review & refinement — CLO5 — Peer feedback 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE122
Course_Name: Engineering Mechanics II
Short_Scope: Planar kinematics and kinetics: particle and rigid‑body motion, Newtonian kinetics, work–energy, impulse–momentum and basic vibration concepts.
 CLOs (mapped ABET SOs):
 CLO1: Describe kinematics of particles and rigid bodies with units. SO1 
CLO2: Apply Newton’s second law and planar kinetics to dynamic problems. SO1 
CLO3: Use work–energy and impulse–momentum methods for solving dynamics problems. SO1, SO7 
CLO4: Model basic dynamic systems and validate with computational checks. SO7 
CLO5: Record assumptions and verification steps in technical notes. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Kinematics of a particle — CLO1 — HW 
Week2 Rigid body planar kinematics — CLO1 — In‑class 
Week3 Newton’s laws for particles — CLO2 — HW 
Week4 Kinetics of rigid bodies — CLO2 — Quiz 
Week5 Work–energy principle — CLO3 — HW 
Week6 Impulse–momentum & collisions — CLO3 — Lab 
Week7 Combined translation–rotation examples — CLO2,CLO3 — Project kickoff 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Intro to vibrations; free vibration — CLO4 — HW 
Week10 Damped motion & response — CLO4 — In‑class task 
Week11 Computational simulation of dynamics — CLO4 — Lab report 
Week12 System modeling & scaling — CLO5 — HW 
Week13 Project & verification notes — CLO5 — Draft 
Week14 Peer review & revision — CLO5 — Peer feedback 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE125
 Course_Name: Construction Material
 Short_Scope: Properties, testing and selection of common construction materials (aggregates, cement, concrete constituents, bituminous materials), mortar types and QA/acceptance; lab practice. 
CLOs (mapped ABET SOs): 
CLO1: Identify principal construction materials and standard tests with units. SO1, SO6 
CLO2: Conduct basic laboratory tests for aggregates and cement and interpret results. SO6, SO3 
CLO3: Explain fresh and hardened concrete properties and relate tests to performance. SO6, SO3 
CLO4: Prepare standard lab reports and quantify uncertainty. SO3, SO6 
CLO5: Propose acceptance criteria and sampling strategies for projects. SO3, SO4 
Assessment Structure: Formative 40%; Midterm 10%; 
Final 50% 15‑Week schedule: 
Week1 Intro; materials overview, sampling & units — CLO1 — HW 
Week2 Aggregate grading & sieve analysis — CLO2 — Lab 
Week3 Specific gravity & absorption tests — CLO2 — Lab report 
Week4 Cement types & setting time — CLO1,CLO3 — HW 
Week5 Fresh concrete tests: slump, unit weight — CLO3 — Lab 
Week6 Hardened concrete testing: compressive strength — CLO3,CLO4 — Lab report 
Week7 Bituminous material basics — CLO1,CLO3 — Quiz 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Durability indicators & SCMs — CLO3,CLO5 — HW 
Week10 QA/QC & chain of custody — CLO4,CLO5 — In‑class task 
Week11 Statistical treatment of lab data — CLO4 — Lab report 
Week12 Specification writing & acceptance criteria — CLO5 — Project assigned 
Week13 Project: comparative mix evaluation — CLO5,CLO4 — Draft 
Week14 Peer review & finalization — CLO4,CLO5 — Peer feedback 
Week15 Final exam & lab portfolio submission — CLO1–CLO5 — Final
Course_Code: CE126
 Course_Name: Engineering Statistics
 Short_Scope: Probability, descriptive statistics, inference, regression, hypothesis testing, sampling and applications to experimental data and quality control.
 CLOs (mapped ABET SOs):
 CLO1: Apply probability fundamentals to engineering variables and measurement uncertainty. SO1, SO6 
CLO2: Compute descriptive statistics and confidence intervals for sample data. SO6 
CLO3: Perform hypothesis tests and interpret p‑values in engineering contexts. SO6, SO3 
CLO4: Fit linear regression models and assess goodness of fit. SO7, SO6 
CLO5: Use statistical tools for QC, sampling plan design and reporting. SO3, SO6 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro; data types & descriptive stats — CLO1,CLO2 — HW 
Week2 Probability basics & distributions — CLO1 — In‑class 
Week3 Sampling distributions & CLT — CLO2 — HW 
Week4 Confidence intervals & sample size — CLO2 — Quiz 
Week5 Hypothesis testing (t, z) — CLO3 — HW 
Week6 ANOVA & categorical analysis — CLO3 — Lab 
Week7 Regression least squares & units — CLO4 — Project assigned 
Week8 Midterm exam — CLO1–CLO4 — Midterm 
Week9 Regression diagnostics & validation — CLO4 — HW 
Week10 Non‑parametric tests & robust methods — CLO3 — In‑class task 
Week11 SPC & control charts — CLO5 — Lab report 
Week12 DOE basics for engineering tests — CLO5 — HW 
Week13 Project: apply statistics to lab dataset — CLO5,CLO2 — Draft 
Week14 Peer review & finalization — CLO5 — Peer feedback 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: ENG123
 Course_Name: Engineering Workshops
 Short_Scope: Practical workshop skills and safety: hand & power tools, fabrication, joinery, basic machine practice (welding, turning, milling) and shop drawings translation.
 CLOs (mapped ABET SOs): 
CLO1: Demonstrate safe use of hand and basic power tools. SO1, SO4 
CLO2: Produce fabricated components to specified tolerances. SO3, SO7 
CLO3: Read and implement shop drawings into physical parts. SO3, SO1 
CLO4: Keep workshop records and QC checks in a lab notebook. SO3, SO6 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule:
 Week1 Safety orientation & tool fundamentals — CLO1 — Safety quiz 
Week2 Measurement & marking out — CLO1,CLO2 — In‑class task 
Week3 Hand tool skills & joinery — CLO2 — Workshop exercise 
Week4 Power tools & machine safety — CLO1,CLO2 — Demo 
Week5 Metalworking & fastening practice — CLO2 — Lab task 
Week6 Shop drawing interpretation — CLO3 — In‑class assignment 
Week7 Small fabrication project kickoff — CLO2,CLO3 — Project start 
Week8 Midterm practical check — CLO1–CLO3 — Midterm 
Week9 QC documentation & lab notebook drafting — CLO4 — Draft 
Week10 Material handling & ergonomics — CLO1 — HW 
Week11 Project fabrication progress — CLO2,CLO3 — Project work 
Week12 Final assembly & finishing — CLO2,CLO4 — Project report 
Week13 Dimensional verification & testing — CLO2,CLO4 — Peer review 
Week14 Project polish & presentation prep — CLO3,CLO4 — Final draft 
Week15 Final practical assessment & portfolio submission — CLO1–CLO4 — Final
Course_Code: CE211 
Course_Name: Strength of Material I 
Short_Scope: Stress–strain fundamentals, axial loading, bending, shear, torsion, combined stresses, section properties and basic beam theory with laboratory/demo checks. 
CLOs (mapped ABET SOs): 
CLO1: Define stress and strain and perform stress–strain calculations with units. SO1 
CLO2: Analyze axial members for stress and deformation. SO1 
CLO3: Compute bending stresses and neutral axis for common sections. SO1, SO7 
CLO4: Solve torsion problems for circular shafts and compute twist. SO1 
CLO5: Evaluate combined stresses using transformation rules and document assumptions. SO3, SO4 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro; stress, strain & units; axial basics — CLO1,CLO2 — HW 
Week2 Determinate bars & thermal effects — CLO2 — In‑class 
Week3 Stress–strain curves & material properties — CLO1 — HW 
Week4 Bending theory: flexure formula — CLO3 — Quiz 
Week5 Shear in beams & shear flow — CLO3 — HW 
Week6 Torsion of circular shafts — CLO4 — Lab 
Week7 Combined loading & stress transformation — CLO5 — Project assigned 
Week8 Midterm exam — CLO1–CLO4 — Midterm 
Week9 Energy methods & Castigliano intro — CLO4 — HW 
Week10 Design checks & allowable stresses intro — CLO5 — In‑class task 
Week11 Deflection basics & serviceability intro — CLO3 — Lab report 
Week12 Project: combined stress analysis & reporting — CLO5 — Draft 
Week13 Peer review & correction of calculations — CLO5 — Peer feedback 
Week14 Final QA of calculations — CLO3–CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE213 
Course_Name: Fluid Mechanics I 
Short_Scope: Hydrostatics and introductory fluid kinematics: fluid properties, pressure variation, resultant hydrostatic forces on plane and curved surfaces, buoyancy, basic kinematics and conservation equations; numerical checks and lab verification. 
CLOs (mapped ABET SOs): 
CLO1: State fluid properties and hydrostatic pressure relation p = γh with units. SO1 
CLO2: Compute resultant hydrostatic forces and center of pressure on planar surfaces. SO1, SO7 
CLO3: Compute hydrostatic forces on curved surfaces and apply buoyancy concepts. SO1 
CLO4: Use Bernoulli, continuity and simple momentum relations and interpret limitations. SO1, SO7 
CLO5: Validate analytical integrations with spreadsheet slice methods and produce lab reports. SO3, SO7 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Fluid properties & units — CLO1 — Quiz 
Week2 Pressure variation with depth — CLO1,CLO2 — HW 
Week3 Pressure diagrams & resultants — CLO2 — In‑class 
Week4 Integration of p = γh over planar areas — CLO2 — Lab prep 
Week5 Center of pressure & moment integration — CLO2 — Lab 
Week6 Vertical gate examples — CLO2 — HW 
Week7 Hydrostatic force on curved surfaces; buoyancy — CLO3 — Quiz 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Bernoulli applications & energy head — CLO4 — HW 
Week10 Continuity & kinematics — CLO4 — In‑class task 
Week11 Momentum equation & thrust — CLO4,CLO5 — Lab report 
Week12 Numerical slice methods & spreadsheet checks — CLO5 — Lab 
Week13 Hydrostatic assumptions & QA notes — CLO5 — Project draft 
Week14 Peer review & refinement — CLO5 — Peer feedback 
Week15 Final exam & submission — CLO1–CLO5 — Final
Course_Code: CE214
 Course_Name: Engineering Surveying I
 Short_Scope: Fundamental surveying measurements and methods: distance, angles, leveling, traversing, field notes, area/volume computations, contours, basic GNSS concepts and field QA. 
CLOs (mapped ABET SOs): 
CLO1: Describe surveying instruments and measurement principles with units. SO1, SO6 
CLO2: Perform distance measurements and apply corrections. SO1, SO7 
CLO3: Carry out differential leveling and compute reduced levels and closures. SO1, SO6 
CLO4: Execute traversing and compute closures with basic adjustments. SO7, SO3 
CLO5: Produce organized field notes, contour generation, and area/volume computations. SO3, SO6 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro & safety; instruments overview — CLO1 — Field quiz 
Week2 Tape & EDM measurement & corrections — CLO2 — Field exercise 
Week3 Angle measurement with theodolite/TS — CLO2,CLO4 — HW 
Week4 Chain/plane traversing & computations — CLO4 — Traverse exercise 
Week5 Levels & leveling practice — CLO3 — Lab 
Week6 Level data reduction & QA — CLO3,CLO5 — Lab report 
Week7 Areas & volumes (planimetric & prismoidal) — CLO5 — In‑class task 
Week8 Midterm exam — CLO1–CLO4 — Midterm 
Week9 Contouring & interpolation — CLO5 — Field processing 
Week10 GNSS basics & RTK/static overview — CLO1,CLO2 — Demo 
Week11 Field note keeping & chain of custody — CLO5 — HW 
Week12 Traversing adjustments & error analysis — CLO4,CLO5 — Lab report 
Week13 Topographic survey methods — CLO5 — Field submission 
Week14 Data processing & deliverable QA — CLO5 — Draft report 
Week15 Final exam & field notebook portfolio submission — CLO1–CLO5 — Final
Course_Code: CE216
 Course_Name: Concrete Technology
 Short_Scope: Hardened concrete properties, creep, shrinkage, durability fundamentals, and introductory mix‑design principles; lab validation of trial mixes and reporting. 
CLOs (mapped ABET SOs): 
CLO1: Describe hardened concrete properties and testing standards. SO1, SO6 
CLO2: Conduct compressive and flexural tests and interpret variability. SO6 
CLO3: Explain creep and shrinkage mechanisms and mitigation approaches. SO1, SO4 
CLO4: Apply basic mix design principles and run trial mixes. SO7, SO1 
CLO5: Produce validated lab reports with QA recommendations. SO3, SO6 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro & standards; lab safety — CLO1 — Quiz 
Week2 Hardened concrete properties overview — CLO1 — HW 
Week3 Compressive strength test procedure & curing — CLO2 — Lab trial 1 
Week4 Flexural and tensile tests — CLO2 — Demo 
Week5 Modulus of elasticity measurement — CLO2 — HW 
Week6 Shrinkage measurement & effects — CLO3 — Lab 
Week7 Creep theory & long‑term deformation — CLO3 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Durability concepts: chloride, sulfate, ASR — CLO3 — HW 
Week10 SCMs & admixtures effects — CLO4 — Lab trial 2 
Week11 Mix trial evaluation & moisture correction — CLO4,CLO5 — Lab report 
Week12 NDT methods & correlation — CLO5 — Demo 
Week13 Sustainability & LCA for mixes — CLO3,CLO4 — Draft project 
Week14 Peer review & finalization — CLO5 — Peer feedback 
Week15 Final exam & lab portfolio submission — CLO1–CLO5 — Final
Course_Code: CE221
 Course_Name: Strength of Material II
 Short_Scope: Advanced beam theory and deflection methods: double integration, area‑moment, singularity functions, unsymmetrical bending, thin‑walled sections and energy methods. 
CLOs (mapped ABET SOs): 
CLO1: Construct shear & bending diagrams and interpret stress distributions. SO1 
CLO2: Apply deflection methods for beams. SO1, SO7 
CLO3: Analyze unsymmetrical bending and shear flow in thin‑walled sections. SO1, SO7 
CLO4: Use energy methods (Castigliano) for deflection and sensitivity checks. SO7, SO3 
CLO5: Document assumptions and verification in technical reports. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Review flexure & shear basics — CLO1 — HW 
Week2 Shear force diagrams & shear flow — CLO1 — In‑class 
Week3 Double integration method — CLO2 — HW 
Week4 Area‑moment method & singularity functions — CLO2 — Quiz 
Week5 Unsymmetrical bending & centroid axes — CLO3 — HW 
Week6 Thin‑walled members & shear flow practice — CLO3 — Lab 
Week7 Castigliano & energy methods — CLO4 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Plasticity basics & limit states intro — CLO4 — HW 
Week10 Deflection checks & serviceability — CLO2,CLO5 — In‑class task 
Week11 Computational verification using spreadsheets/FE — CLO2 — Lab report 
Week12 Project work & technical note drafting — CLO4,CLO5 — Draft 
Week13 Peer review & corrections — CLO5 — Peer feedback 
Week14 Finalization & QA — CLO2–CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: ENG201
 Course_Name: Mathematics III
 Short_Scope: Multivariable calculus and vector calculus applied to engineering: partial derivatives, multiple integrals, gradient/divergence/curl, Jacobians and basic field integrals. 
CLOs (mapped ABET SOs): 
CLO1: Compute partial derivatives and interpret physical meaning and units. SO1 
CLO2: Evaluate double/triple integrals for area, volume and mass properties. SO1, SO7 
CLO3: Apply gradient, divergence and curl to scalar and vector fields. SO1, SO7 
CLO4: Use Jacobians for coordinate transforms and maintain unit consistency. SO1 
CLO5: Record assumptions and verification steps in technical reports. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Multivariable functions & domains — CLO1 — HW 
Week2 Limits & continuity in multivariable — CLO1 — In‑class 
Week3 Partial derivatives & physical interpretation — CLO1 — HW 
Week4 Gradient & directional derivatives — CLO3 — 
Week5 Tangent planes & linearization — CLO1 — HW 
Week6 Double integrals & area computations — CLO2 — Lab 
Week7 Triple integrals & volume computations — CLO2 — Project assigned 
Week8 Midterm exam — CLO1–CLO2 — Midterm 
Week9 Jacobians & change of variables — CLO4 — HW 
Week10 Vector fields, divergence & curl — CLO3 — In‑class task 
Week11 Line & surface integrals — CLO3 — Lab report 
Week12 Theorems of vector calculus (Green, Stokes concepts) — CLO3,CLO4 — HW 
Week13 Project: field integral application — CLO5,CLO3 — Draft 
Week14 Peer review & finalization — CLO5 — Peer feedback 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE223
 Course_Name: Fluid Mechanics II
 Short_Scope: Open channel flow advanced topics: specific energy, critical depth, gradually varied flow (GVF), hydraulic jumps, numerical GVF, unsteady flow and channel modelling with spreadsheet validation. 
CLOs (mapped ABET SOs):
 CLO1: Compute critical depth and classify open channel flow regimes. SO1 
CLO2: Compute GVF profiles using numerical standard‑step integration. SO7, SO1 
CLO3: Analyze hydraulic jumps and energy dissipation. SO1, SO4 
CLO4: Perform unsteady routing and validate numerically. SO7 
CLO5: Document numerical stability and sensitivity in project reports. SO3, SO7 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Review uniform & critical flow — CLO1 — HW 
Week2 Specific energy & critical depth computations — CLO1 — In‑class 
Week3 GVF classification & control sections — CLO2 — HW 
Week4 Numerical GVF (standard step) — CLO2 — Lab 
Week5 Hydraulic jumps & energy dissipation — CLO3 — HW 
Week6 Stilling basin types & design parameters — CLO3 — In‑class 
Week7 Sediment effects on profile (qualitative) & project kickoff — CLO5 — Project start 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Unsteady flow fundamentals & simple routing — CLO4 — Lab report 
Week10 Numerical routing & spreadsheet checks — CLO4 — HW 
Week11 Design of hydraulic controls & dissipation — CLO3 — In‑class task 
Week12 Model validation & sensitivity — CLO5 — Lab 
Week13 Project: channel profile & dissipation design — CLO2,CLO3 — Draft 
Week14 Peer review & finalization — CLO5 — Peer feedback 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE224
 Course_Name: Engineering Surveying II
 Short_Scope: Advanced surveying: traversing, indirect distances, setting‑out, theory of errors, total station workflows, triangulation, GNSS concepts and computer processing for deliverables. 
CLOs (mapped ABET SOs): 
CLO1: Carry out traversing and compute closures with adjustments. SO7, SO3 
CLO2: Apply indirect distance measurement techniques and setting‑out procedures. SO1, SO7 
CLO3: Explain theory of errors and compute simple error budgets. SO6, SO3 
CLO4: Use total station data capture and process deliverables. SO7, SO3 
CLO5: Prepare GIS/plan deliverables and computer‑solved applications. SO3, SO7 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule:
 Week1 Traversing basics — CLO1 — HW 
Week2 Traversing computations — CLO1 — Field exercise 
Week3 Indirect distance methods — CLO2 — HW 
Week4 Setting‑out works for construction — CLO2 — In‑class task 
Week5 Theory of errors intro — CLO3 — HW 
Week6 Error propagation & adjustment basics — CLO3 — Lab 
Week7 Triangulation principles & application — CLO4 — HW 
Week8 Total station operation & data capture — CLO4 — Field demo 
Week9 TS data processing & coordinate checks — CLO4,CLO5 — Lab report 
Week10 Theodolite usage & angle measurement — CLO2 — HW 
Week11 Computer applications & plotting — CLO5 — Project kickoff 
Week12 GNSS/TS integration & QA — CLO5 — Draft submission 
Week13 Survey applications solved by computer — CLO5 — Project draft 
Week14 Peer review & final deliverable prep — CLO5 — Peer feedback 
Week15 Final exam & processed survey deliverable submission — CLO1–CLO5 — Final
Course_Code: CE228
 Course_Name: Building Construction Short_Scope: Comprehensive building construction covering siteworks, foundations (shallow and piles), concrete works, masonry, formwork and scaffolding, floors/roofs, arches, lintels and sills, damp proofing, finishes, doors/windows, stairs, joints and sealants, sustainable construction and constructability. 
CLOs (mapped ABET SOs): 
CLO1: Describe building elements, construction sequences and standard units. SO1, SO3 
CLO2: Interpret construction drawings and prepare short construction schedules. SO3, SO7 
CLO3: Select foundation types and outline constructability and QA checks. SO1, SO4 
CLO4: Specify masonry, concrete and finishing practices and prepare inspection checklists. SO6, SO3 
CLO5: Explain roof/floor systems, damp‑proofing and joints, and recommend maintenance considerations. SO4, SO3 
CLO6: Prepare temporary works (formwork, scaffolds), safety procedures and QA checklists. SO3, SO4 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro, specifications & safety — CLO1,CLO6 — Quiz 
Week2 Types of buildings & systems — CLO1 — HW 
Week3 Earthworks & site investigation — CLO1,CLO6 — In‑class 
Week4 Footings & shallow foundations — CLO3 — HW 
Week5 Piles & piling methods — CLO3 — Lab/demo 
Week6 Concrete works: placement & curing — CLO4,CLO6 — Lab 
Week7 Concrete works continued & reinforcement basics — CLO4 — HW 
Week8 Bricks & masonry practices — CLO4 — Midterm prep 
Week9 Masonry works & mortar types — CLO4 — Practical 
Week10 Formwork & scaffolding — CLO6 — HW 
Week11 Floors & roofs detailing — CLO5 — In‑class task 
Week12 Arches, lintels & finishes — CLO5 — Project kickoff 
Week13 Damp‑proofing & sealants — CLO5 — Draft report 
Week14 Doors/windows & stairs — CLO5 — Peer review 
Week15 Final exam & submission of construction sequencing project — CLO1–CLO6 — Final
Course_Code: CE227
 Course_Name: Engineering Geology
 Short_Scope: Geological processes, rock and soil classification, structural geology, physical/mechanical properties, site investigation, groundwater geology, improvement methods and mapping for engineering application. 
CLOs (mapped ABET SOs): 
CLO1: Identify rock & soil types and describe engineering significance. SO1, SO6 
CLO2: Interpret structural geology features and assess hazards. SO4, SO3 
CLO3: Prepare borehole logs and geologic cross sections. SO3, SO7 
CLO4: Recommend field/lab tests and ground improvement measures. SO6, SO3 
CLO5: Communicate geological findings and recommendations in a technical report. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro & geology vocabulary — CLO1 — HW 
Week2 Rocks & minerals identification — CLO1 — Field lab 
Week3 Rocks/minerals continued — CLO1 — HW 
Week4 Structural geology: bedding, joints — CLO2 — Field observation 
Week5 Factors affecting earth crust & instability — CLO2 — HW 
Week6 Soil formation & index properties — CLO1,CLO4 — Lab 
Week7 Soil/rock properties testing — CLO1,CLO4 — Lab report 
Week8 Stresses in rocks & stress path basics — CLO2 — Midterm prep 
Week9 Stresses in rocks continued — CLO2 — Midterm 
Week10 Rock/soil improvement & reinforcement — CLO4 — Project assigned 
Week11 Groundwater & drains basics — CLO4 — Field task 
Week12 Geological maps & reporting — CLO3 — Draft report 
Week13 Remediation case studies — CLO4,CLO5 — Draft 
Week14 Computer applications & mapping — CLO3 — Peer review 
Week15 Final exam & submission of field report — CLO1–CLO5 — Final
Course_Code: CE225
 Course_Name: Computer Programming
 Short_Scope: Introductory programming for engineers (Python/Matlab/VB): scripting, arrays, file I/O, plotting, basic numerical methods and reproducible coding practices. 
CLOs (mapped ABET SOs): 
CLO1: Implement scripts that compute engineering formulas with correct units and file I/O. SO7, SO1 
CLO2: Produce publication‑quality plots with captions and units. SO3, SO6 
CLO3: Structure code with functions/modules and document for reuse. SO7, SO3 
CLO4: Implement input validation and error handling. SO7 
CLO5: Verify code outputs against manual calculations and provide test cases. SO7, SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro & environment setup — CLO1 — Lab 
Week2 Data types, arrays & indexing — CLO1 — Lab 
Week3 File I/O & parsing data — CLO1,CLO5 — HW 
Week4 Plotting & annotation — CLO2 — Lab 
Week5 Functions & documentation — CLO3 — HW 
Week6 Input validation & error handling — CLO4 — In‑class task 
Week7 Numerical methods (root finding, interpolation) — CLO1,CLO5 — Project start 
Week8 Midterm practical — CLO1–CLO3 — Midterm 
Week9 Reproducibility: README & tests — CLO3 — Lab report 
Week10 Performance & profiling basics — CLO4 — HW 
Week11 Verification with manual examples — CLO5 — Lab test 
Week12 Project development & code review — CLO3,CLO5 — Draft 
Week13 Peer code review & refactoring — CLO3 — Peer feedback 
Week14 Final project polishing & documentation — CLO2–CLO5 — Final draft 
Week15 Final practical exam & project submission — CLO1–CLO5 — Final
Course_Code: CE311
 Course_Name: Theory of Structures I
 Short_Scope: Analysis of statically determinate structures: trusses, beams and frames; influence lines and moving loads; structural idealization and verification.
 CLOs (mapped ABET SOs): 
CLO1: Analyze determinate trusses using joints and sections. SO1, SO7 
CLO2: Construct shear & bending moment diagrams. SO1 
CLO3: Produce influence lines for determinate members and apply to moving loads. SO7 
CLO4: Model structures and state assumptions. SO3, SO4 
CLO5: Validate hand solutions with computational checks. SO7, SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro & determinacy — CLO1,CLO4 — HW 
Week2 Method of joints for trusses — CLO1 — Lab 
Week3 Method of sections — CLO1 — HW 
Week4 Shear & bending diagrams — CLO2 — Quiz 
Week5 Influence lines for beams — CLO3 — HW 
Week6 Influence lines for truss member forces — CLO3 — In‑class 
Week7 Modeling choices & assumptions — CLO4 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Continuous beams intro — CLO2 — Lab 
Week10 Frame action basics — CLO2,CLO4 — HW 
Week11 Verification using software/spreadsheet — CLO5 — Lab report 
Week12 Project: determinate structure analysis + moving load case — CLO3,CLO5 — Draft 
Week13 Peer review & refinement — CLO4 — Peer feedback 
Week14 Finalization & QA checks — CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE312
 Course_Name: Design of Reinforced Concrete Structures I
 Short_Scope: Strength‑based design of RC beams, one‑way slabs and short columns using limit‑state/ACI principles; detailing, shear & serviceability checks and spreadsheet verification. 
CLOs (mapped ABET SOs): 
CLO1: Apply limit‑state flexural design principles for RC members. SO1, SO3 
CLO2: Design singly/doubly reinforced beams and detail reinforcement. SO3, SO4 
CLO3: Design one‑way slabs and check serviceability. SO3, SO1 
CLO4: Compute axial capacity of short columns and perform interaction checks. SO1, SO4 
CLO5: Validate designs with hand checks and spreadsheets. SO7, SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro; concrete & steel properties — CLO1 — HW 
Week2 Flexure: strain compatibility & stress block — CLO1 — In‑class 
Week3 Design of singly reinforced sections — CLO2 — HW 
Week4 Doubly reinforced sections & ductility — CLO2 — Quiz 
Week5 Shear design & stirrup detailing — CLO2 — HW 
Week6 One‑way slab design — CLO3 — Lab/design exercise 
Week7 Serviceability: deflection & cracking control — CLO3 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Short columns & interaction diagrams — CLO4 — HW 
Week10 Detailing requirements & constructability — CLO2,CLO4 — In‑class task 
Week11 Spreadsheet verification & hand checks — CLO5 — Lab report 
Week12 Project: beam & slab design for small structure — CLO2,CLO3,CLO5 — Draft 
Week13 Peer review & refinement — CLO5 — Peer feedback 
Week14 Final project completion & presentation prep — CLO1–CLO4 — Final draft 
Week15 Final exam & design project submission — CLO1–CLO5 — Final
Course_Code: CE316
 Course_Name: Engineering Management
 Short_Scope: Project management fundamentals for civil engineering: lifecycle, organization, WBS, CPM/Bar‑chart, resource leveling, cost estimation basics, procurement, risk identification, QA and reporting. 
CLOs (mapped ABET SOs): 
CLO1: Describe project lifecycle, roles and deliverables. SO3 
CLO2: Produce simple CPM schedules and resource‑loaded plans. SO7, SO3 
CLO3: Explain procurement strategies and contract administration. SO3, SO4 
CLO4: Identify and propose basic risk mitigation measures. SO3, SO4 
CLO5: Prepare concise management reports documenting assumptions. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 PM lifecycle & stakeholders — CLO1 — Quiz 
Week2 Org structures & RACI — CLO1 — HW 
Week3 WBS & scope definition — CLO2 — In‑class task 
Week4 CPM basics & float — CLO2 — Quiz 
Week5 Resource leveling & crashing — CLO2 — HW 
Week6 Cost estimation fundamentals — CLO3 — Case study 
Week7 Procurement & tendering overview — CLO3 — Project kickoff 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Contract admin & change orders — CLO3 — HW 
Week10 Risk identification & ranking — CLO4 — In‑class task 
Week11 Quality assurance & acceptance — CLO4 — Lab/report 
Week12 Reporting dashboards & stakeholder comms — CLO5 — Draft 
Week13 Project work: schedule & risk register — CLO2–CLO4 — Draft 
Week14 Peer review & presentation rehearsal — CLO5 — Peer feedback 
Week15 Final exam & management package submission — CLO1–CLO5 — Final
Course_Code: CE317
 Course_Name: Traffic Engineering
 Short_Scope: Traffic flow fundamentals, data collection, capacity and LOS, signal timing basics, intersection analysis, parking studies and simple corridor planning with spreadsheet validation. 
CLOs (mapped ABET SOs): 
CLO1: Define flow, density and speed relationships and units. SO1 
CLO2: Compute capacity and LOS for simple facilities. SO1, SO6 
CLO3: Apply basic signal timing fundamentals and compute simple delays. SO1, SO7 
CLO4: Design traffic data collection plans and assess uncertainty. SO6, SO3 
CLO5: Communicate traffic analysis in a technical memo. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro & definitions — CLO1 — HW 
Week2 Time‑space diagrams & basics — CLO1 — In‑class 
Week3 Capacity & LOS concepts — CLO2 — HW 
Week4 Traffic counts & sampling design — CLO4 — Lab 
Week5 Signal basics & delay — CLO3 — Quiz 
Week6 Intersection capacity basics — CLO2 — HW 
Week7 Spreadsheet validation of capacity computations — CLO2,CLO5 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Signal timing case study & sensitivity — CLO3 — Lab report 
Week10 Safety fundamentals & countermeasures — CLO5 — HW 
Week11 Sampling frequency & QA — CLO4 — In‑class task 
Week12 Corridor study: demand & capacity — CLO2,CLO5 — Draft 
Week13 Peer review & refinement — CLO5 — Peer feedback 
Week14 Finalization & presentation prep — CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE318
 Course_Name: Engineering Application in Computer (BIM Revit + Robot)
 Short_Scope: BIM workflows: Weeks 1–7 Autodesk Revit (modelling, documentation, schedules, clashes, 4D/5D basics); Weeks 8–14 Robot (structural modelling, loads, analysis, validation); Week 15 synthesis and final deliverables. Emphasis on reproducible workflows and verification. 
CLOs (mapped ABET SOs): 
CLO1: Create parametric BIM models and construction documents in Revit. SO1, SO3 
CLO2: Implement information exchange (IFC/DWG) and resolve clashes. SO3, SO7 
CLO3: Extract schedules, quantities and 4D/5D outputs from Revit models. SO3, SO7 
CLO4: Build structural models in Robot and run linear static analyses. SO1, SO7 
CLO5: Validate Robot results against hand/spreadsheet checks. SO7, SO3 
CLO6: Prepare BIM handover deliverables and QA checklists. SO3, SO4 
CLO7: Communicate workflow choices and limitations in a technical report. SO3 
Assessment Structure: Formative 40%; Midterm (Revit practical) 10%; Final (Robot+BIM project) 50% 
15‑Week schedule: 
Week1 Revit interface, families, levels & grids — CLO1 — Lab 
Week2 Revit architectural modelling — CLO1 — HW 
Week3 Revit structural elements & analytical export — CLO1,CLO2 — Lab 
Week4 Documentation: sheets & schedules — CLO3 — Lab assignment 
Week5 Coordination workflows (IFC/DWG) — CLO2,CLO6 — In‑class task 
Week6 BIM for construction: phasing & 4D basics — CLO3,CLO6 — HW 
Week7 Revit practical prep & Midterm practical exam — CLO1–CLO3 — Midterm 
Week8 Robot intro: model import, units, materials, sections — CLO4 — Lab 
Week9 Loads definition & combos in Robot — CLO4 — HW 
Week10 Linear static analysis & result interpretation — CLO4,CLO5 — Lab 
Week11 Validation vs hand/spreadsheet checks — CLO5 — Lab report 
Week12 Design checks & sensitivity studies — CLO5,CLO6 — In‑class task 
Week13 BIM exchange loop: update Revit from Robot results — CLO2,CLO6 — Project milestone 
Week14 Final project completion, exports & O&M outline — CLO6,CLO7 — Draft 
Week15 Final submission, demonstration & oral defense — CLO4–CLO7 — Final
Course_Code: CE321
 Course_Name: Theory of Structures II 
Short_Scope: Indeterminate structural analysis: slope‑deflection, moment distribution, energy methods, influence lines for indeterminate members and introduction to matrix stiffness concepts. 
CLOs (mapped ABET SOs): 
CLO1: Determine degree of static indeterminacy and document assumptions. SO1, SO4 
CLO2: Apply slope‑deflection and moment distribution methods for indeterminate members. SO1, SO7 
CLO3: Use energy/virtual work to compute deflections. SO7, SO3 
CLO4: Construct influence lines for indeterminate members conceptually. SO7 
CLO5: Validate manual solutions with computational checks. SO7, SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Determinacy review & modeling — CLO1 — HW 
Week2 Slope‑deflection formulation — CLO2 — In‑class 
Week3 Moment distribution method & carryover — CLO2 — HW 
Week4 Convergence & practical checks for MD — CLO2 — Quiz 
Week5 Unit load & virtual work — CLO3 — Lab 
Week6 Influence lines for indeterminate members — CLO4 — HW 
Week7 Matrix stiffness concept overview — CLO4 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Verification using computational tools — CLO5 — Lab report 
Week10 Sensitivity to support stiffness — CLO1,CLO5 — In‑class task 
Week11 Energy methods for frames — CLO3 — HW 
Week12 Project: analyze a continuous beam/frame — CLO2,CLO5 — Draft 
Week13 Peer review & QA — CLO5 — Peer feedback 
Week14 Finalization & presentation prep — CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE322
 Course_Name: Design of Reinforced Concrete Structures II
 Short_Scope: Two‑way slabs, torsion, biaxial columns, slenderness and stair design; detailing and code‑compliant constructability. 
CLOs (mapped ABET SOs):
 CLO1: Design two‑way slabs and load distribution. SO3, SO1 
CLO2: Design beams with torsion and combined action checks. SO3, SO1 
CLO3: Analyze and design columns under combined bending and axial loads. SO1, SO4 
CLO4: Address slenderness and second‑order effects conceptually. SO4, SO3 
CLO5: Validate design with spreadsheets and document assumptions. SO7, SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Slab behaviour & design methods — CLO1 — HW 
Week2 Two‑way slab action & panel design — CLO1 — In‑class 
Week3 Punching shear & reinforcement detailing — CLO1,CLO5 — HW 
Week4 Beam torsion fundamentals & code checks — CLO2 — Quiz 
Week5 Combined bending & torsion detailing — CLO2 — HW 
Week6 Column design (uniaxial) — CLO3 — Lab/design exercise 
Week7 Biaxial column design concepts & slender columns — CLO3,CLO4 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Slenderness & slender column checks — CLO4 — HW 
Week10 Stairs design basics — CLO3 — In‑class task 
Week11 Detailing & constructability for complex RC members — CLO4 — Lab report 
Week12 Spreadsheet verification & iterative checks — CLO5 — Project draft 
Week13 Peer review & refinement — CLO5 — Peer feedback 
Week14 Final project completion & presentation prep — CLO1–CLO4 — Final draft 
Week15 Final exam & design project submission — CLO1–CLO5 — Final
Course_Code: CE323
 Course_Name: Numerical Analysis
 Short_Scope: Numerical methods for engineering: root finding, interpolation, numerical integration, ODE solvers, stability, conditioning and numerical linear algebra with computational labs and error analysis. 
CLOs (mapped ABET SOs): 
CLO1: Implement root‑finding and interpolation algorithms and assess convergence. SO7, SO1 
CLO2: Apply numerical integration and ODE solvers and estimate errors. SO7, SO3 
CLO3: Analyze numerical stability and conditioning. SO7, SO3 
CLO4: Document numerical methods and error bounds in reports. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Numerical errors & units — CLO3 — HW 
Week2 Root finding methods — CLO1 — Lab 
Week3 Interpolation & polynomial fitting — CLO1 — HW 
Week4 Numerical integration & error estimates — CLO2 — Quiz 
Week5 ODE solvers (Euler, RK) & stability — CLO2 — Lab 
Week6 Stiffness & solvers overview — CLO3 — HW 
Week7 Conditioning & regularization — CLO3 — Project assigned 
Week8 Midterm exam — CLO1–CLO2 — Midterm 
Week9 Nonlinear system solvers & Jacobians — CLO1 — Lab report 
Week10 Iterative solvers & preconditioning basics — CLO1 — HW 
Week11 Error propagation & verification strategies — CLO3,CLO4 — In‑class task 
Week12 Project development: numerical method applied to engineering case — CLO2,CLO4 — Draft 
Week13 Peer validation & sensitivity tests — CLO4 — Peer feedback 
Week14 Final project polishing & documentation — CLO4 — Final draft 
Week15 Final practical exam & project submission — CLO1–CLO4 — Final
Course_Code: CE324
 Course_Name: Soil Mechanics II
 Short_Scope: Consolidation, settlement, bearing capacity, deep foundations, pile behavior, slope stability methods and geotechnical design verification with lab/field correlation. 
CLOs (mapped ABET SOs): 
CLO1: Apply consolidation techniques for layered soils and settlement estimation. SO7, SO1 
CLO2: Evaluate bearing capacity & factor of safety for shallow foundations. SO1, SO4 
CLO3: Apply limit equilibrium methods for slope stability and interpret results. SO6, SO1 
CLO4: Describe pile design concepts and group effects; propose monitoring strategies. SO1, SO3 
CLO5: Prepare geotechnical design reports with testing recommendations and uncertainty discussion. SO3, SO6 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Consolidation review & layered methods — CLO1 — HW 
Week2 Terzaghi & numerical methods for consolidation — CLO1 — Lab 
Week3 Secondary compression & time‑rate settlement — CLO1 — HW 
Week4 Bearing capacity methods & examples — CLO2 — Quiz 
Week5 Settlement vs bearing tradeoffs — CLO2 — In‑class task 
Week6 Pile capacity methods (static & empirical) — CLO4 — HW 
Week7 Pile group settlement & interaction effects — CLO4 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Slope stability checks (Bishop/Janbu) — CLO3 — Lab report 
Week10 Retaining structures & lateral earth pressure basics — CLO2 — HW 
Week11 Field verification & in‑situ tests correlation — CLO5 — In‑class assignment 
Week12 Numerical checks for settlement & sensitivity analysis — CLO1,CLO4 — Draft project 
Week13 Peer review & QA of geotechnical solutions — CLO5 — Peer feedback 
Week14 Finalization of design/report & presentation prep — CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE325
Course_Name: Water Resources Engineering II
Short_Scope: Advanced hydrology and drainage: hydrograph development, flood routing (Muskingum/reservoir), reservoir operation basics, flood frequency, drainage design (tile/pipe drains, drainage wells), groundwater–surface water interaction and environmental considerations. 
CLOs (mapped ABET SOs): 
CLO1: Apply hydrograph analysis and routing methods; perform frequency analysis for design floods. SO1, SO7 
CLO2: Evaluate reservoir operation basics and storage–yield relationships. SO1, SO4 
CLO3: Design conceptual drainage systems: pipe drains, tile systems and drainage wells; compute depth & spacing. SO1, SO3 
CLO4: Analyze groundwater–drain interactions and impacts on drainage performance. SO1, SO6 
CLO5: Validate routing and drainage results using spreadsheets/numerical checks; document uncertainty. SO7, SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Hydrograph elements & continuity review — CLO1 — HW 
Week2 Muskingum routing & spreadsheet implementation — CLO1 — Lab 
Week3 Reservoir routing & storage–yield concepts — CLO2 — HW 
Week4 Flood frequency methods & design flood estimation — CLO1 — In‑class task 
Week5 Flood wave propagation & channel routing basics — CLO1 — Lab report 
Week6 Reservoir operation rule curves & policy examples — CLO2 — HW 
Week7 Drainage fundamentals: subsurface mechanisms & objectives — CLO3,CLO4 — Project kickoff 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Drain depth & spacing methods (Hooghoudt) — CLO3 — Lab/design assignment 
Week10 Hydraulic design of pipe drains & inlets — CLO3 — HW 
Week11 Drainage wells & groundwater lowering techniques — CLO3,CLO4 — Field exercise 
Week12 Groundwater–surface water interactions & baseflow — CLO4 — Sensitivity analysis 
Week13 Environmental & maintenance aspects of drainage systems — CLO5 — Project draft 
Week14 Integrated numerical project: routing + drainage layout + QA checks — CLO5 — Finalization 
Week15 Final exam & submission of comprehensive drainage project & monitoring plan — CLO1–CLO5 — Final
Course_Code: CE326
 Course_Name: Engineering Economy
 Short_Scope: Economic evaluation for engineering decisions: time value of money, present/future worth, annualized cost, benefit–cost analysis, life‑cycle costing, depreciation, inflation effects, sensitivity and spreadsheet modelling. 
CLOs (mapped ABET SOs): 
CLO1: Apply time‑value‑of‑money formulas and compute present/future worth. SO1, SO3 
CLO2: Perform benefit–cost and life‑cycle cost analyses. SO3, SO4 
CLO3: Incorporate depreciation, taxes and inflation in economic comparisons. SO3 
CLO4: Build spreadsheet cash‑flow models and run sensitivity analysis. SO7 
CLO5: Prepare concise economic appraisal memos documenting assumptions. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Financial terminology & units — CLO1 — HW 
Week2 Single‑payment & uniform series equivalence — CLO1 — In‑class 
Week3 Present & future worth comparisons — CLO1 — HW 
Week4 Annualized cost & B/C ratio methods — CLO2 — Quiz 
Week5 Life‑cycle costing & replacement analysis — CLO2 — HW 
Week6 Depreciation & tax effects — CLO3 — Case 
Week7 Inflation & escalation in cost estimates — CLO3 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Sensitivity & break‑even on spreadsheets — CLO4 — Lab 
Week10 Decision trees & basic risk analysis — CLO2 — HW 
Week11 Discount rate selection & public vs private appraisal — CLO2,CLO3 — In‑class task 
Week12 Project: economic appraisal of alternatives — CLO4,CLO5 — Draft 
Week13 Peer review & refinement — CLO5 — Peer feedback 
Week14 Finalize memo & presentation prep — CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE327
 Course_Name: Transportation Engineering
 Short_Scope: Highway engineering fundamentals: geometric design basics, pavement cross‑section concepts, corridor planning, traffic influence on pavement, safety and environmental constraints; spreadsheet verification. 
CLOs (mapped ABET SOs): 
CLO1: Apply geometric design rules and express results with correct units. SO1, SO3 
CLO2: Identify pavement cross‑section elements and material functions. SO6, SO3 
CLO3: Evaluate corridor capacity and LOS impacts on design choices. SO1, SO6 
CLO4: Integrate safety and environmental constraints into corridor design. SO4, SO3 
CLO5: Validate preliminary designs with spreadsheet checks and document assumptions. SO7, SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro; highway elements & units — CLO1 — HW 
Week2 Horizontal alignment & sight distance — CLO1 — In‑class 
Week3 Vertical alignment & drainage — CLO1,CLO4 — HW 
Week4 Cross‑section design & superelevation — CLO2 — Quiz 
Week5 Pavement components & materials — CLO2 — Lab 
Week6 Traffic flow & capacity for corridor planning — CLO3 — Project kickoff 
Week7 Intersection & access management fundamentals — CLO4 — HW 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Safety audits & countermeasure selection — CLO4 — In‑class task 
Week10 Drainage across corridor & culvert basics — CLO2 — HW 
Week11 Environmental constraints & mitigation — CLO4 — Lab/report 
Week12 Corridor project: layout with cross‑sections & checks — CLO1–CLO5 — Draft 
Week13 Spreadsheet verification & sensitivity checks — CLO5 — Peer review 
Week14 Finalization & presentation prep — CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: ENG320
 Course_Name: Ethics of Engineering Profession
 Short_Scope: Professional ethics, codes of conduct, responsibility to public safety, conflicts of interest, whistleblowing, sustainability and communication of ethical decisions.
 CLOs (mapped ABET SOs): 
CLO1: Explain key ethical principles and professional obligations. SO3, SO4 
CLO2: Apply codes of conduct to case studies and document decisions. SO3 
CLO3: Identify safety and public‑welfare implications and propose ethical responses. SO3, SO1 
CLO4: Communicate ethical reasoning in written reports and presentations. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro: professionalism & responsibility — CLO1 — HW 
Week2 Codes of ethics & licensing basics — CLO1 — In‑class 
Week3 Safety & public welfare responsibilities — CLO3 — HW 
Week4 Conflict of interest & confidentiality cases — CLO2 — Quiz 
Week5 Whistleblowing & reporting obligations — CLO2 — Case study 
Week6 Legal vs ethical duties; contracts & compliance — CLO1,CLO2 — In‑class task 
Week7 Social responsibility & equity — CLO3 — Project assigned 
Week8 Midterm case exam — CLO1–CLO3 — Midterm 
Week9 Ethical frameworks for decision making — CLO2 — HW 
Week10 Sustainability & environmental ethics — CLO3 — Debate 
Week11 Communicating difficult decisions to stakeholders — CLO4 — Draft report 
Week12 Group project development & stakeholder mapping — CLO2,CLO4 — Draft 
Week13 Peer review & consolidation of recommendations — CLO4 — Peer feedback 
Week14 Final project polishing & presentation prep — CLO4 — Final draft 
Week15 Final exam & ethics portfolio submission — CLO1–CLO4 — Final
Course_Code: CE416
 Course_Name: Hydraulic Structures Short_Scope: Design and analysis of hydraulic structures: weirs, flumes, gates, culverts, energy dissipators (jumps, stilling basins), intakes/outlets, scour assessment and O&M. Emphasis on head–discharge relations, empirical design methods and spreadsheet verification. 
CLOs (mapped ABET SOs): 
CLO1: State head–discharge relations and unit conventions. SO1 
CLO2: Size and analyse weirs, flumes and measurement structures. SO1, SO7 
CLO3: Design culvert inlet/outlet capacities and headwater computations. SO1, SO3 
CLO4: Design energy dissipation elements and stilling basins. SO1, SO4 
CLO5: Assess scour and specify protection measures and maintenance. SO4, SO6 
CLO6: Produce O&M notes and QA documentation for hydraulic works. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Units, specific energy & flow regimes — CLO1 — Quiz 
Week2 Weir theory & head–discharge relations — CLO2 — HW 
Week3 Flumes & calibrated devices — CLO2 — In‑class task 
Week4 Gates & sluice hydraulics — CLO3 — HW 
Week5 Culvert hydraulics I: inlet control — CLO3 — Lab 
Week6 Culvert hydraulics II: outlet control — CLO3 — HW 
Week7 Hydraulic jumps & stilling basin classification — CLO4 — Lab/design 
Week8 Midterm exam — CLO1–CLO4 — Midterm 
Week9 Stilling basin design — CLO4 — Lab report 
Week10 Scour mechanisms at piers/abutments — CLO5 — HW 
Week11 Scour protection & riprap sizing — CLO5,CLO6 — In‑class task 
Week12 Intake/outlet works & screens — CLO3,CLO6 — Project kickoff 
Week13 Spreadsheet verification & sensitivity — CLO2,CLO6 — Draft 
Week14 Peer review & finalization — CLO6 — Peer feedback 
Week15 Final exam & design package submission — CLO1–CLO6 — Final
Course_Code: CE417
 Course_Name: Strengthening and Rehabilitation of Structures
 Short_Scope: Assessment, diagnosis and retrofit strategies for concrete and steel structures: NDT, damage evaluation, repair materials, FRP/plate/jacket strengthening, durability and QA for repair works. 
CLOs (mapped ABET SOs): 
CLO1: Evaluate structural condition using inspection and NDT results. SO3, SO6 
CLO2: Select appropriate repair/strengthening techniques and justify choices. SO3, SO4 
CLO3: Design FRP, steel plating or jacket strengthening solutions and detail steps. SO1, SO3 
CLO4: Assess constructability, durability and maintenance implications of rehabilitation. SO4, SO3 
CLO5: Prepare repair specification, cost/benefit outline and QA checklist. SO3, SO1 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Deterioration mechanisms & units — CLO1 — HW 
Week2 NDT overview (rebound, UPV, half‑cell) — CLO1 — Lab/demo 
Week3 Strengthening strategies overview — CLO2 — HW 
Week4 FRP flexural strengthening principles — CLO3 — In‑class design 
Week5 Steel plating & anchorage considerations — CLO3 — HW 
Week6 Concrete jackets & detailing for retrofit — CLO3 — Lab/report 
Week7 Durability & compatibility of repair materials — CLO4 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Implementation planning & safety — CLO4 — HW 
Week10 QA & acceptance criteria for repairs — CLO5 — Lab/report 
Week11 Case studies & retrofit lessons — CLO1,CLO2 — In‑class discussion 
Week12 Project: diagnose & propose retrofit & costing — CLO2–CLO5 — Draft 
Week13 Peer review & specification refinement — CLO5 — Peer feedback 
Week14 Finalization & presentation prep — CLO5 — Final draft 
Week15 Final exam & submission of repair package — CLO1–CLO5 — Final
Course_Code: CE418
 Course_Name: Engineering Project I / Capstone Project I
 Short_Scope: Capstone project initiation: team formation, scope, literature review, methodology selection, preliminary design concepts, stakeholder mapping and risk register; feasibility assessment and validation plan. 
CLOs (mapped ABET SOs): 
CLO1: Define project objectives, scope and measurable success criteria aligned to stakeholders. SO3 
CLO2: Conduct literature review and identify technical gaps. SO3, SO7 
CLO3: Select methodology and prepare validation/QA plans. SO7, SO3 
CLO4: Prepare preliminary feasibility and concept sketches with technical metrics. SO1, SO4 
CLO5: Communicate project plan, timeline and risk register in a professional proposal. SO3 
Assessment Structure: Formative 40%; Midterm presentation 10%; Final deliverables 50% 
15‑Week schedule: 
Week1 Team formation & deliverable schedule — CLO1 — Proposal kickoff 
Week2 Scoping & stakeholder analysis — CLO1 — Draft scope 
Week3 Literature review methods & annotated bibliography — CLO2 — HW 
Week4 Methodology selection & validation planning — CLO3 — Draft methodology 
Week5 Data needs, ethics & initial data gathering plan — CLO3 — In‑class task 
Week6 Preliminary feasibility metrics & concept sketches — CLO4 — Project progress 
Week7 Economic & environmental feasibility basics — CLO4 — Draft feasibility 
Week8 Midterm presentation — CLO1–CLO4 — Midterm 
Week9 Pilot calculations, simulations or pilot tests — CLO3 — Pilot report 
Week10 Risk register refinement & governance plan — CLO5 — HW 
Week11 Interim report drafting & peer review — CLO5 — Draft report 
Week12 Incorporate supervisor feedback & refine methods — CLO2–CLO5 — Revision 
Week13 Final feasibility package drafting & rehearsal — CLO4,CLO5 — Draft 
Week14 Final presentation rehearsal & stakeholder briefing prep — CLO5 — Rehearsal 
Week15 Submission of Capstone I deliverables — CLO1–CLO5 — Final
Course_Code: CE421
 Course_Name: Design of Reinforced Concrete Structures IV
 Short_Scope: Advanced RC design: complex frames, seismic performance objectives, progressive collapse mitigation, robustness detailing and integrated design package production. 
CLOs (mapped ABET SOs): 
CLO1: Integrate seismic/performance objectives into RC design decisions. SO1, SO4 
CLO2: Design and detail complex RC elements considering ductility and redundancy. SO3, SO4 
CLO3: Perform progressive collapse checks and propose mitigation measures. SO4, SO3 
CLO4: Use computational tools to verify design and document cross‑checks. SO7, SO3 
CLO5: Produce a professional design package with QA and constructability notes. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Advanced RC philosophies & units — CLO1 — HW 
Week2 Seismic performance targets & code overview — CLO1 — In‑class 
Week3 Ductility detailing for beams, columns & joints — CLO2 — HW 
Week4 Robustness & progressive collapse concepts — CLO3 — Quiz 
Week5 Redundancy & alternate load path design — CLO3 — HW 
Week6 Complex member detailing & special zones — CLO2 — Lab/check 
Week7 System‑level effects: torsion, diaphragm action — CLO2,CLO4 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Progressive collapse mitigation strategies — CLO3 — In‑class analysis 
Week10 Computational verification workflows & crosschecks — CLO4 — Lab report 
Week11 Construction sequencing influences on performance — CLO5 — HW 
Week12 Project: integrated design for complex RC system — CLO1–CLO5 — Draft 
Week13 Peer review & QA checks — CLO5 — Peer feedback 
Week14 Finalize design package & presentation prep — CLO5 — Final draft 
Week15 Final exam & submission of design package — CLO1–CLO5 — Final
Course_Code: CE422
 Course_Name: Design of Steel Structures II
 Short_Scope: Advanced steel topics: composite construction, plate girders, seismic/resilient connections, fatigue assessment, transport/erection constraints and fabrication QA; emphasis on detailing and FE verification. 
CLOs (mapped ABET SOs): 
CLO1: Design composite beams and simple composite slabs with interaction checks. SO3, SO1 
CLO2: Design plate girders and heavy steel members with stiffeners and web checks. SO1, SO3 
CLO3: Detail seismic/resilient connections and assess fatigue implications. SO4, SO3 
CLO4: Validate designs using spreadsheets/FE checks and document assumptions. SO7, SO3 
CLO5: Prepare fabrication/inspection checklists and constructability notes. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Composite action overview & units — CLO1 — HW 
Week2 Composite beam design & slab interaction — CLO1 — In‑class 
Week3 Plate girder components & stiffeners — CLO2 — HW 
Week4 Local buckling, stiffener layout & heavy member design — CLO2 — Quiz 
Week5 Connection detailing for fatigue & large forces — CLO3 — HW 
Week6 Seismic connection detailing & ductility requirements — CLO3 — Lab/check 
Week7 Fabrication tolerances & inspection planning — CLO5 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 FE verification & spreadsheet cross‑checks — CLO4 — Lab report 
Week10 Fatigue methods & cyclic loading design — CLO3 — HW 
Week11 Transport, erection & constructability detailing — CLO5 — In‑class task 
Week12 Project: plate girder/composite design with detailing — CLO2–CLO5 — Draft 
Week13 Peer review & QA checks — CLO5 — Peer feedback 
Week14 Finalization & presentation prep — CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE423
 Course_Name: Foundation Engineering II
 Short_Scope: Deep foundations: pile types, installation methods, capacity (skin & end bearing), pile groups, pile testing (static, PDA), instrumentation, ground improvement and integration with piling; design and reporting for complex sites. 
CLOs (mapped ABET SOs): 
CLO1: Select appropriate deep foundation types based on site and loading. SO3, SO1 
CLO2: Compute pile capacity (skin friction & end bearing) and assess group effects. SO1, SO7 
CLO3: Interpret pile test results (static, PDA/dynamic) and recommend acceptance criteria. SO6, SO3 
CLO4: Integrate ground improvement and piling strategies and propose monitoring plans. SO4, SO3 
CLO5: Prepare comprehensive foundation design reports including QA and instrumentation plans. SO3, SO6 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Deep foundation overview & site data needs — CLO1 — HW 
Week2 Pile types, installation methods & selection — CLO1 — In‑class 
Week3 Static pile capacity methods & correlations — CLO2 — HW 
Week4 Skin friction & end bearing calculations — CLO2 — Lab/analysis 
Week5 Pile group effects & efficiency considerations — CLO2 — HW 
Week6 Pile testing methods: static, PDA, dynamic basics — CLO3 — Lab/demo 
Week7 Interpretation of test data & acceptance criteria — CLO3 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Ground improvement interfacing with piles — CLO4 — HW 
Week10 Installation effects & group settlement estimation — CLO2,CLO4 — In‑class task 
Week11 Monitoring plans, instrumentation & QA for pile works — CLO4,CLO5 — Lab/report 
Week12 Project: pile foundation design & test plan — CLO2–CLO5 — Draft 
Week13 Peer review & refinement of design & monitoring plan — CLO5 — Peer feedback 
Week14 Finalize deliverables & client handover documentation — CLO5 — Final draft 
Week15 Final exam & submission of foundation project — CLO1–CLO5 — Final
Course_Code: CE424
 Course_Name: Highways Engineering II
 Short_Scope: Advanced pavement design and rehabilitation: mechanistic‑empirical and empirical pavement design, pavement distress mechanisms, NDT and field testing, life‑cycle cost and rehabilitation strategies for flexible and rigid pavements. 
CLOs (mapped ABET SOs): 
CLO1: Apply mechanistic‑empirical and empirical methods to derive pavement structural requirements and state units/assumptions. SO1, SO7 
CLO2: Diagnose pavement distress mechanisms and select rehabilitation strategies. SO4, SO3 
CLO3: Compute structural layer thicknesses for flexible and rigid pavements and perform sensitivity checks. SO1, SO3 
CLO4: Prepare life‑cycle cost comparisons and maintenance schedules for alternatives. SO3, SO4 
CLO5: Validate pavement designs using NDT/field data and spreadsheet checks; document QA. SO7, SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro; pavement types & performance metrics — CLO1 — HW 
Week2 Traffic loading characterization & ESAL concepts — CLO1 — In‑class 
Week3 Flexible pavement structural design — CLO3 — HW 
Week4 Rigid pavement design & jointing principles — CLO3 — Quiz 
Week5 Material characterization for pavements — CLO1,CLO3 — Lab 
Week6 Distress mechanisms: fatigue, rutting, cracking — CLO2 — HW 
Week7 Rehabilitation methods: overlays, milling — CLO2 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Life‑cycle cost & performance modelling — CLO4 — Lab report 
Week10 NDT & field testing for pavement assessment — CLO5 — In‑class task 
Week11 Environmental & drainage impacts on performance — CLO2,CLO4 — HW 
Week12 Project: rehabilitation design & cost comparison — CLO3,CLO4 — Draft 
Week13 Sensitivity analysis & QA checks — CLO5 — Peer review 
Week14 Finalize deliverable & presentation prep — CLO4,CLO5 — Final draft 
Week15 Final exam & project submission — CLO1–CLO5 — Final
Course_Code: CE425
 Course_Name: Sanitary and Environmental Engineering II
 Short_Scope: Advanced wastewater treatment and environmental systems: biological treatment (activated sludge, SBR), nutrient removal, sludge treatment/disposal, disinfection, monitoring and regulatory frameworks; design and monitoring plans with QA. 
CLOs (mapped ABET SOs): 
CLO1: Describe biological treatment processes and perform mass‑balance sizing with correct units. SO1, SO7 CLO2: Size activated sludge systems and SBR conceptually and perform basic design checks. SO1, SO3 CLO3: Evaluate sludge handling/treatment options and propose disposal or reuse strategies. SO4, SO3 CLO4: Develop monitoring plans and compliance checks for effluent quality. SO3, SO6 CLO5: Communicate treatment design and environmental implications in a professional report. SO3 Assessment Structure: Formative 40%; Midterm 10%; Final 50% 15‑Week schedule: Week1 Review water quality & biological basics — CLO1 — HW Week2 Microbial kinetics & BOD/COD relationships — CLO1 — In‑class Week3 Activated sludge fundamentals & mass‑balance sizing — CLO2 — Lab Week4 SBR operation & sequencing design — CLO2 — Quiz Week5 Nutrient removal processes & design implications — CLO2,CLO4 — Lab/report Week6 Sludge thickening, digestion & dewatering — CLO3 — HW Week7 Sludge disposal, reuse & risk assessment — CLO3 — Project assigned Week8 Midterm exam — CLO1–CLO3 — Midterm Week9 Disinfection, residuals & monitoring strategies — CLO4 — Lab report Week10 Regulatory frameworks & compliance checks — CLO4 — In‑class task Week11 Life‑cycle & environmental impacts of treatment options — CLO3,CLO5 — HW Week12 Project: treatment train design & monitoring plan — CLO2,CLO4,CLO5 — Draft Week13 Model validation, sensitivity & QA — CLO5 — Peer review Week14 Finalization & stakeholder reporting prep — CLO5 — Final draft Week15 Final exam & project/report submission — CLO1–CLO5 — Final
Course_Code: CE426
 Course_Name: Elective Topics in Civil Engineering
 Short_Scope: Variable advanced topics aligned with faculty expertise and industry needs (examples: coastal engineering, resilient infrastructure, BIM for civil works). Content announced each offering; emphasis on applied project work and reporting. 
CLOs (mapped ABET SOs) [template]: 
CLO1: Summarize core theory and units for the elective topic. SO1 
CLO2: Apply topic‑specific methods to a practical engineering problem and validate results. SO3, SO7 
CLO3: Evaluate limitations, uncertainties and environmental/societal impacts relevant to the topic. SO4, SO3 
CLO4: Communicate findings in a technical report and presentation. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule (example): 
Week1 Intro to elective scope & units — CLO1 — HW 
Week2 Core theoretical underpinning — CLO1 — In‑class 
Week3 Practical method 1 & examples — CLO2 — HW 
Week4 Practical method 2 & computational approach — CLO2 — Quiz 
Week5 Data needs & uncertainty — CLO3 — Lab/report 
Week6 Midterm synthesis — CLO1–CLO2 — Midterm 
Week7 Project kickoff & validation — CLO2 — Project assigned 
Week8–Wk13 Project development, labs & peer review — CLO2–CLO4 — Drafts & feedback 
Week14 Finalize deliverables & presentation prep — CLO4 — Final draft 
Week15 Final exam/project submission & presentation — CLO1–CLO4 — Final
Course_Code: CE427
 Course_Name: Methods of Construction and Estimation
 Short_Scope: Integrated construction methods and estimation: construction process, equipment selection, productivity, quantity take‑off, bills of quantities, cost estimation techniques, contingency, contract documents and tendering; development of a tender package for a small project. 
CLOs (mapped ABET SOs): 
CLO1: Perform quantity take‑offs and prepare bills of quantities with correct units. SO1, SO3 
CLO2: Estimate productivity and compute equipment production rates and crew requirements. SO3, SO7 
CLO3: Prepare preliminary and detailed cost estimates with contingencies and justify rates. SO3, SO4 
CLO4: Produce a mobilization/demobilization plan and short schedule linked to cost. SO7, SO3 
CLO5: Compile an estimation report documenting assumptions, QA and tender package elements. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% 
15‑Week schedule: 
Week1 Intro; measurement units & scope of estimation — CLO1 — HW 
Week2 Approximate estimation & early cost checks — CLO3 — In‑class task 
Week3 Detailed measurement & take‑off practice — CLO1 — Lab 
Week4 Rate build‑up & pricing — CLO3 — HW 
Week5 Productivity & equipment selection (earthworks) — CLO2 — Lab/exercise 
Week6 Bills of quantities & schedule of rates — CLO1,CLO3 — HW 
Week7 Contingency, overheads & mark‑ups — CLO3 — Project assigned 
Week8 Midterm exam — CLO1–CLO3 — Midterm 
Week9 Mobilization/demobilization costing — CLO4 — HW 
Week10 Short‑term scheduling & resource leveling — CLO4 — In‑class task 
Week11 Specification elements for tender docs — CLO5 — Draft spec 
Week12 Project development: full take‑off & preliminary estimate — CLO1–CLO4 — Draft 
Week13 Peer QA of quantities & rate justification — CLO5 — Peer feedback 
Week14 Finalize estimate, tender package & presentation prep — CLO5 — Final draft 
Week15 Final exam & submission of full estimation project — CLO1–CLO5 — Fina
Course_Code: CE418
 Course_Name: Engineering Project II / Capstone Project II
 Short_Scope: Capstone II: detailed design, procurement documentation, BOQ, implementation scheduling, testing/commissioning, O&M manuals, handover and reflective report/defense. Builds on Capstone I deliverables and produces a client‑ready package. 
CLOs (mapped ABET SOs): 
CLO1: Produce detailed design documents (drawings, calculations, specifications) consistent with Capstone I scope. SO1, SO3 
CLO2: Prepare procurement documents, BOQ, cost control records and an implementation schedule aligned with the design. SO3, SO7 
CLO3: Execute testing/commissioning plans and analyze verification data against acceptance criteria. SO7, SO3 
CLO4: Compile O&M manuals, training notes and handover documentation for client use. SO3, SO4 
CLO5: Reflect on project risks, lessons learned and deliver a professional final report and oral defense. SO3 
Assessment Structure: Formative 40%; Midterm 10%; Final 50% (final submission + defense) 
15‑Week schedule: 
Week1 Transition from Capstone I; deliverable schedule & team roles — CLO1 — Project kickoff (formative) 
Week2 Detailed design development: drawings & specifications — CLO1 — Draft deliverables (formative) 
Week3 Procurement documentation & BOQ preparation — CLO2 — HW/draft BOQ (formative) 
Week4 Implementation sequencing & temporary works — CLO2 — In‑class task (formative) 
Week5 Test/commissioning plan & acceptance criteria — CLO3 — Draft test plan (formative) 
Week6 Prototype/pilot testing & data collection (if applicable) — CLO3 — Lab/pilot report (formative) 
Week7 Monitoring templates, initial operation checks & handover plan — CLO3,CLO4 — Midterm progress review (summative) 
Week8 Midterm progress review / formal progress presentation — CLO1–CLO3 — Midterm (10%) 
Week9 Final design revisions based on validation and stakeholder feedback — CLO1 — Draft revision (formative) 
Week10 O&M manual drafting & training materials development — CLO4 — HW/draft O&M (formative) 
Week11 QA signoffs, checklists & stakeholder acceptance procedures — CLO4 — In‑class task (formative) 
Week12 Final report drafting: executive summary, methods, results, lessons learned — CLO5 — Draft (formative) 
Week13 Final presentation rehearsal & defense prep; incorporate external reviewer feedback — CLO5 — Peer feedback (formative) 
Week14 Submit final deliverables to supervisor; prepare handover package and archive files — CLO1–CLO4 — Final draft submission (formative) 
Week15 Final defense, client handover demonstration and archived project package submission — CLO1–CLO5 — Final (50%)
`;

export const ABET_DATA = `
Course_Code	Course_Name	CLO_Number	CLO_Description	ABET_SO_Mapping	Assessment_Type	Problem_Statement	Rubric_Criterion_1	Rubric_Criterion_2	Rubric_Criterion_3	Rubric_Level_4	Rubric_Level_3	Rubric_Level_2	Rubric_Level_1
ENG122	Mathematics I	1	Recall common differentiation rules (product, chain, quotient) and state units for time derivatives; map to engineering contexts	SO1	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	2	Explain physical meaning of time rates (e.g., dh/dt) in open-channel problems and relate sign and units to flow/area changes	SO1	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	3	Apply differentiation to compute dA/dt for rectangular and trapezoidal channels, show units and interpret sign in engineering terms	SO1	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	4	Use chain and product rules to differentiate compound engineering expressions involving time-dependent geometric variables	SO1	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	5	Perform unit analysis on derivatives and ensure dimensional consistency in engineering rate problems	SO1	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	6	Solve applied engineering rate problems by forming relations (A(b,h)) and differentiating w.r.t time for given parameter rates	SO1	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	7	Interpret solutions: evaluate sign, magnitude and engineering significance of computed rates; propose physical implications for flows and designs	SO1	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	8	Communicate solution steps clearly in written form, including units, assumptions and verification checks suitable for technical reporting	SO3	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	9	Apply computational tools (spreadsheet or CAS) to evaluate derivatives and unit conversions for engineering rate problems and validate manual results	SO7	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
ENG122	Mathematics I	10	Reflect on limitations and approximations (linearization, small-angle) when applying differentiation to real-world engineering phenomena	SO1	Homework	Part A (Remember): List differentiation rules (product, chain, quotient) and their unit implications for time derivatives. Part B (Understand): In 2–3 sentences, explain what positive dh/dt means physically for a channel. Part C (Apply): For width b=3.00 m, dh/dt=0.020 m/s and h=1.50 m compute dA/dt, show units and check sign.	Recall Accuracy	Conceptual Explanation	Calculation & Verification	Exemplary: Complete recall, correct explanation, correct calculation with units and check	Proficient: Minor omission in recall or minor arithmetic error	Developing: Partial recall or partly correct explanation/calculation	Beginning: Missing recall and incorrect calculation
CE115	Engineering Mechanics I	1	State equilibrium equations ΣFx, ΣFy, ΣM with sign conventions and units; explain origin and assumptions	SO1	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	2	Draw free‑body diagrams (FBDs) correctly for discrete and distributed loads and identify reaction types	SO1	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	3	Resolve force vectors into components; apply equilibrium to statically determinate systems	SO1	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	4	Apply equilibrium equations to determine unknown reactions and internal forces in simple structures	SO1	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	5	Use trigonometry and vector methods to compute cable tensions and verify units and equilibrium	SO1	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	6	Perform equilibrium checks (Σ) and sensitivity to small angle/force changes for design insight	SO1	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	7	Explain role and construction of FBDs in isolating external loads and reactions (qualitative description)	SO1	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	8	Document assumptions and units clearly when presenting equilibrium solutions suitable for technical notes	SO3	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	9	Use simple computational tools (spreadsheet or calculator) to solve equilibrium equations and verify manual solutions	SO7	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
CE115	Engineering Mechanics I	10	Identify practical limitations of static analysis assumptions (rigid bodies, frictionless pins) and discuss implications for design safety	SO4	Homework	Part A: State ΣFx, ΣFy, ΣM and sign conventions. Part B: Explain why FBD isolates external forces and reaction effects. Part C: Two cables support 500 N at 30° and 45° to vertical — draw FBD, write equations and compute tensions with units.	FBD/Equations	Conceptual Explanation	Numerical Solution	Exemplary: Accurate equations, clear explanation, correct tensions with units	Proficient: Minor sign or arithmetic error	Developing: Equations present, wrong algebra	Beginning: Incorrect concepts and results
UOM123	Computer Basics I	1	Identify spreadsheet functions (POWER, SQRT, IF, VLOOKUP) useful in engineering formula implementation	SO1,SO7	Lab Report	Part A: List Excel functions needed (POWER, SQRT, IF, DATA VALIDATION). Part B: Describe unit conversion approach for metric/imperial. Part C: Submit workbook computing Q for Manning’s equation with input validation and an example.	Function Identification	Conceptual Explanation	Workbook Implementation	Exemplary: Full function list, clear conversion logic, functional workbook with validation	Proficient: Workbook correct, limited validation	Developing: Partial formula implementation	Beginning: Missing conversion/validation
UOM123	Computer Basics I	2	Explain unit conversion strategies and implement consistent SI/Imperial handling in spreadsheets	SO1,SO7	Lab Report	Part A: List Excel functions needed (POWER, SQRT, IF, DATA VALIDATION). Part B: Describe unit conversion approach for metric/imperial. Part C: Submit workbook computing Q for Manning’s equation with input validation and an example.	Function Identification	Conceptual Explanation	Workbook Implementation	Exemplary: Full function list, clear conversion logic, functional workbook with validation	Proficient: Workbook correct, limited validation	Developing: Partial formula implementation	Beginning: Missing conversion/validation
ENG124	Computer Basics I	1	List essential chart elements for engineering plots (axis labels, units, legend, grid) and explain their purpose	SO6	Project	Part A: List required chart elements (axis labels, units, legend). Part B: Explain in 2–3 sentences how to select linear region for E. Part C: From provided stress‑strain data create plot, compute E from linear fit and annotate plot.	Chart Elements	Conceptual Explanation	Plot & Computation	Exemplary: Professional plot, correct E and annotations	Proficient: Correct E, minor labeling issues	Developing: Plot present, wrong slope	Beginning: Poor plotting and calculations
ENG124	Computer Basics I	2	Explain rationale for selecting linear region for modulus E and consequences of poor selection	SO6	Project	Part A: List required chart elements (axis labels, units, legend). Part B: Explain in 2–3 sentences how to select linear region for E. Part C: From provided stress‑strain data create plot, compute E from linear fit and annotate plot.	Chart Elements	Conceptual Explanation	Plot & Computation	Exemplary: Professional plot, correct E and annotations	Proficient: Correct E, minor labeling issues	Developing: Plot present, wrong slope	Beginning: Poor plotting and calculations
CE122	Computer Basics I	1	List common file I/O and plotting commands for MATLAB and Python and indicate typical usage	SO7	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	2	Explain the role of documentation, comments and validation in reproducible engineering scripts	SO7	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	3	Write a documented script to read beam deflection data, compute mean/std/max and plot results with labels	SO7	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	4	Validate code outputs against manual calculations for at least two test cases and document discrepancies	SO7	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	5	Include input validation and error handling to make scripts robust for engineering data variability	SO7	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	6	Produce publication‑quality plots with annotations, axis labels, units and captions for reporting	SO3	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	7	Explain and implement basic statistical summaries (mean, std, max) and their interpretation for experimental data	SO6	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	8	Organize code into functions and modules for reusability and clarity in engineering workflows	SO7	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	9	Discuss ethical, documentation and reproducibility considerations when publishing code and data	SO4	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
CE122	Computer Basics I	10	Archive scripts, data and results with README and example test cases to ensure reproducibility and future reuse	SO7	Lab Report	Part A: List I/O and plotting commands for MATLAB/Python. Part B: Explain why comments and validation matter. Part C: Submit script that reads data, computes mean/std/max, plots and outputs summary table.	Command Recall	Conceptual Explanation	Code Functionality	Exemplary: Correct commands, clear rationale, robust commented script with correct outputs	Proficient: Working script, limited comments	Developing: Script runs but fails edge cases	Beginning: Syntax errors
ENG123	Engineering Drawings	1	Recall standard line types, projection rules and drawing conventions for orthographic views	SO1,SO5	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	2	Select appropriate projection method (first/third angle) and apply to multi-view drawings	SO1,SO5	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	3	Produce orthographic projections with correct scale, dimensioning and tolerancing for simple structural elements	SO1,SO5	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	4	Determine when section views are required and produce sectional drawings with proper hatching and labels	SO1,SO5	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	5	Apply line-weighting and layering conventions to differentiate object lines, hidden lines and centerlines	SO1,SO5	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	6	Dimension and annotate drawings to communicate construction intent and reference standards	SO1,SO5	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	7	Produce simple CAD drawings following layering and naming conventions for reproducibility	SO7	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	8	Interpret construction drawings and identify discrepancies between drawings and a given specification	SO5	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	9	Communicate drawing intent through clear notes, reference standards and consistent symbology	SO3	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
ENG123	Engineering Drawings	10	Assess limits of drawings for construction and propose clarifying details to reduce ambiguity and error	SO4	Homework	Part A: List standard line types and projection rules. Part B: Explain when section view is required. Part C: Draw plan, elevation and section of retaining wall with correct hatching and dimensions.	Recall Accuracy	Conceptual Explanation	Drawing Accuracy	Exemplary: Correct projection views, line weights and sectioning	Proficient: Minor line/dimension issues	Developing: Two views acceptable	Beginning: Incorrect projections
CE211	Engineering Drawings	1	List CAD layering conventions and explain rationale for layer organization	SO7	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	2	Explain scale selection, block usage and annotation strategies for reproducible CAD deliverables	SO7	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	3	Produce CAD floor plan with organized layers, consistent lineweights and area annotations	SO7	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	4	Generate printable PDF output from CAD ensuring readable scale and annotation consistency	SO7	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	5	Annotate CAD drawings with notes, dimensions and legends consistent with contract documents	SO3	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	6	Implement blocks and attributes for repetitive elements to improve drawing efficiency and consistency	SO7	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	7	Export and package CAD deliverables including references and plot styles for handover	SO7	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	8	Apply scale and layout principles to present multi-sheet drawing sets for construction	SO7	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	9	Review CAD output for clashes, annotation completeness and printability prior to submission	SO5	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
CE211	Engineering Drawings	10	Reflect on CAD drawing standards and propose improvements to office CAD procedures for quality control	SO4	Project	Part A: List CAD layering conventions. Part B: Explain scale selection and block usage. Part C: Submit DWG floor plan with layers, area annotations and printable PDF.	Recall Accuracy	Conceptual Explanation	Drawing Execution	Exemplary: Clean DWG with organized layers and annotations	Proficient: Correct DWG, minor layering issues	Developing: Basic geometry, no layers	Beginning: Incomplete drawing
ENG201	Chemistry	1	List molar masses of key cementitious constituents and units used in stoichiometric calculations	SO1	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	2	Explain reaction stoichiometry concepts and mass conservation applied to hydration products	SO1	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	3	Set up stoichiometric equations from chemical reactions relevant to cement hydration and balance them	SO1	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	4	Compute required reactant mass to produce a given mass of product using molar relationships and yield assumptions	SO1	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	5	Perform unit conversions consistently between g, kg, mol and report final answers with correct units	SO1	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	6	Interpret chemical reaction yields and explain practical factors that reduce theoretical yields in cement hydration contexts	SO1	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	7	Communicate stoichiometric calculations in a clear lab report format with assumptions and references	SO3	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	8	Use computational tools (spreadsheet) to automate stoichiometric mass calculations and perform sensitivity checks	SO7	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	9	Discuss environmental and resource implications of material selection based on stoichiometric and mass-balance reasoning	SO4	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
ENG201	Chemistry	10	Reflect on uncertainties in chemical data and propagate them through stoichiometric calculations for approximate error bounds	SO6	Homework	Part A: List molar masses of key constituents. Part B: Describe stoichiometric approach for product mass computation. Part C: Calculate cement mass for 1000 kg C‑S‑H using provided reaction.	Chemical Recall	Conceptual Explanation	Stoichiometric Calculation	Exemplary: Correct masses, clear method, correct result with units	Proficient: Minor rounding errors	Developing: Setup correct, arithmetic errors	Beginning: Incorrect stoichiometry
CE213	Fluid Mechanics I	1	State hydrostatic pressure relation p=γh and units; identify weight density for water	SO1	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	2	Explain linear pressure distribution with depth and its implications for resultant force location	SO1	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	3	Compute resultant hydrostatic force on vertical rectangular gate and show pressure diagram	SO1	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	4	Determine center of pressure location using integration of pressure moment and relate to centroid	SO1	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	5	Perform the necessary integrations to compute hydrostatic force and center of pressure with correct units and diagrams	SO1	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	6	Sketch pressure distribution and resultant force vector on submerged surfaces for clarity in reports	SO3	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	7	Use standard γ values and unit conversions to compute pressures and forces in SI units accurately	SO1	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	8	Apply hydrostatic principles to submerged gates and compute overturning moments where applicable	SO1	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	9	Validate integration results with a simple numerical approximation (slice method) as a check on analytical integration	SO7	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE213	Fluid Mechanics I	10	Discuss assumptions in hydrostatic analysis (rigid surface, incompressible fluid) and their effects on real systems	SO4	Homework	Part A: State p=γh and units. Part B: Explain linear pressure increase with depth. Part C: For 2.00×3.00 m gate submerged with free surface at top, compute resultant hydrostatic force and center of pressure from surface and show pressure diagram.	Recall Accuracy	Conceptual Explanation	Integration & Computation	Exemplary: Correct p=γh recall, clear concept, correct F and y_cp with diagram	Proficient: Minor arithmetic or unit slip	Developing: Partial integration	Beginning: Incorrect pressure use
CE214	Chemistry	1	List bonding types (metallic, ionic, covalent) and typical microstructural features that influence mechanical behavior	SO1	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	2	Explain qualitatively how bonding type and microstructure (grain size, phase distribution) affect ductility and strength	SO1	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	3	Relate phase constituents and microstructures to expected macroscopic mechanical properties for common engineering materials	SO1	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	4	Apply microstructure reasoning to select appropriate material for a tension member and justify selection	SO1	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	5	Explain trade-offs between strength and ductility and give examples from material microstructures	SO1	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	6	Interpret provided material data (stress‑strain curves, hardness) to infer microstructural features influencing behavior	SO6	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	7	Discuss environmental and service conditions that affect microstructure stability and hence long‑term properties	SO4	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	8	Communicate material selection rationale in clear engineering language citing bonding/microstructure evidence	SO3	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	9	Use basic phase diagrams and microstructure maps to support material choice discussions	SO1	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
CE214	Chemistry	10	Reflect on uncertainties in microstructural interpretation and recommend tests to confirm assumptions	SO6	Midterm	Part A: List bonding types (metallic, ionic, covalent) and microstructure terms. Part B: Explain why metallic bonding leads to ductility. Part C: Given two material choices for tension members, recommend one and justify with bonding/microstructure arguments.	Recall Accuracy	Conceptual Explanation	Application & Justification	Exemplary: Correct recall, clear explanation, justified selection with references	Proficient: Minor omission	Developing: Limited justification	Beginning: Incorrect bonding concepts
MNS120	Arabic Language I	1	Recall Arabic technical vocabulary for concrete and water testing and state equivalents in English	SO6	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	2	Explain test procedures in Arabic including sequence, measurements and acceptance criteria	SO3	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	3	Write clear Arabic lab procedures with stepwise instructions and units for common concrete tests	SO3	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	4	Translate technical results between Arabic and English accurately preserving units and uncertainty statements	SO7	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	5	Explain standards and limits (e.g., ASTM) in Arabic and relate to test outcomes and recommendations	SO6	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	6	Compose professional Arabic lab reports with abstract, methods, results, discussion and recommendations	SO3	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	7	Use precise Arabic terminology to explain measurement uncertainty and sampling representativeness	SO6	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	8	Prepare concise Arabic executive summary and recommended actions for stakeholders	SO3	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	9	Present lab findings orally in Arabic with clear visuals summarizing standards compliance and recommended mitigation	SO3	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
MNS120	Arabic Language I	10	Archive Arabic reports and raw data with metadata and bilingual key terms for future audits	SO7	Lab Report	Part A: List technical Arabic terms for pH, chloride, sulfate. Part B: Explain test steps in Arabic. Part C: Write lab report in Arabic comparing sample results to ASTM C1602 and recommend action.	Vocabulary Recall	Conceptual Explanation	Report Quality	Exemplary: Correct technical vocabulary, clear steps, well-argued report	Proficient: Minor language issues	Developing: Basic report	Beginning: Poor technical language
CE216	Arabic Language I	1	List Arabic engineering glossary entries and provide English equivalents for common code terms	SO3	Quiz	Part A: Provide Arabic equivalents for common engineering terms. Part B: Explain a short code clause in Arabic. Part C: Translate a 150‑word technical paragraph to Arabic maintaining technical accuracy.	Vocabulary Recall	Conceptual Explanation	Translation Accuracy	Exemplary: Accurate technical translation with clear Arabic terminology	Proficient: Minor terminology/slight grammar issues	Developing: Meaning present, inaccuracies	Beginning: Major mistranslation
CE216	Arabic Language I	2	Explain clauses of a code in Arabic with accurate technical phrasing and context interpretations	SO3	Quiz	Part A: Provide Arabic equivalents for common engineering terms. Part B: Explain a short code clause in Arabic. Part C: Translate a 150‑word technical paragraph to Arabic maintaining technical accuracy.	Vocabulary Recall	Conceptual Explanation	Translation Accuracy	Exemplary: Accurate technical translation with clear Arabic terminology	Proficient: Minor terminology/slight grammar issues	Developing: Meaning present, inaccuracies	Beginning: Major mistranslation
CE216	Arabic Language I	3	Translate short technical paragraphs (150 words) into Arabic preserving technical accuracy and register	SO3	Quiz	Part A: Provide Arabic equivalents for common engineering terms. Part B: Explain a short code clause in Arabic. Part C: Translate a 150‑word technical paragraph to Arabic maintaining technical accuracy.	Vocabulary Recall	Conceptual Explanation	Translation Accuracy	Exemplary: Accurate technical translation with clear Arabic terminology	Proficient: Minor terminology/slight grammar issues	Developing: Meaning present, inaccuracies	Beginning: Major mistranslation
CE216	Arabic Language I	4	Annotate translations with notes on ambiguous terms and propose consistent Arabic equivalents	SO3	Quiz	Part A: Provide Arabic equivalents for common engineering terms. Part B: Explain a short code clause in Arabic. Part C: Translate a 150‑word technical paragraph to Arabic maintaining technical accuracy.	Vocabulary Recall	Conceptual Explanation	Translation Accuracy	Exemplary: Accurate technical translation with clear Arabic terminology	Proficient: Minor terminology/slight grammar issues	Developing: Meaning present, inaccuracies	Beginning: Major mistranslation
CE216	Arabic Language I	5	Demonstrate correct Arabic grammar and technical style for short engineering memos and notes	SO3	Quiz	Part A: Provide Arabic equivalents for common engineering terms. Part B: Explain a short code clause in Arabic. Part C: Translate a 150‑word technical paragraph to Arabic maintaining technical accuracy.	Vocabulary Recall	Conceptual Explanation	Translation Accuracy	Exemplary: Accurate technical translation with clear Arabic terminology	Proficient: Minor terminology/slight grammar issues	Developing: Meaning present, inaccuracies	Beginning: Major mistranslation
CE216	Arabic Language I	6	Produce bilingual glossaries with clear term definitions and usage examples for classroom use	SO7	Quiz	Part A: Provide Arabic equivalents for common engineering terms. Part B: Explain a short code clause in Arabic. Part C: Translate a 150‑word technical paragraph to Arabic maintaining technical accuracy.	Vocabulary Recall	Conceptual Explanation	Translation Accuracy	Exemplary: Accurate technical translation with clear Arabic terminology	Proficient: Minor terminology/slight grammar issues	Developing: Meaning present, inaccuracies	Beginning: Major mistranslation
CE216	Arabic Language I	7	Explain how to handle culturally sensitive or ambiguous terms in Arabic technical translation and propose strategies	SO4	Quiz	Part A: Provide Arabic equivalents for common engineering terms. Part B: Explain a short code clause in Arabic. Part C: Translate a 150‑word technical paragraph to Arabic maintaining technical accuracy.	Vocabulary Recall	Conceptual Explanation	Translation Accuracy	Exemplary: Accurate technical translation with clear Arabic terminology	Proficient: Minor terminology/slight grammar issues	Developing: Meaning present, inaccuracies	Beginning: Major mistranslation
CE216	Arabic Language I	8	Edit and proofread Arabic technical translations for clarity, concision and accuracy	SO3	Quiz	Part A: Provide Arabic equivalents for common engineering terms. Part B: Explain a short code clause in Arabic. Part C: Translate a 150‑word technical paragraph to Arabic maintaining technical accuracy.	Vocabulary Recall	Conceptual Explanation	Translation Accuracy	Exemplary: Accurate technical translation with clear Arabic terminology	Proficient: Minor terminology/slight grammar issues	Developing: Meaning present, inaccuracies	Beginning: Major mistranslation
`;