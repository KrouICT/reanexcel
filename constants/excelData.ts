
import { ExcelLesson } from '../types';

export const EXCEL_LESSONS: ExcelLesson[] = [
  {
    id: 'sum',
    title: '១. SUM (បូកសរុប)',
    category: 'Basic',
    description: 'រូបមន្តមូលដ្ឋានបំផុតសម្រាប់បូកសរុបតម្លៃលេខទាំងអស់ក្នុងជួរឈរ ឬជួរដេកដែលអ្នកបានកំណត់។',
    syntax: '=SUM(number1, [number2], ...)',
    example: {
      data: [['ទំនិញ', 'តម្លៃ'], ['ស្ករ', '2500'], ['អំបិល', '1000'], ['សរុប', '=SUM(B2:B3)']],
      formula: '=SUM(B2:B3)',
      result: '3500',
      explanation: 'បូកតម្លៃក្នុង Cell B2 (2500) និង B3 (1000) បញ្ចូលគ្នា ទទួលបានលទ្ធផល ៣៥០០។'
    },
    practice: 'ចូរសាកល្បងបូកចំណូលប្រចាំខែរបស់អ្នកចាប់ពីខែមករា ដល់ខែមិថុនា។',
    quizzes: [{ id: 'q1', question: 'តើរូបមន្តណាប្រើសម្រាប់បូកសរុប?', options: ['=COUNT()', '=SUM()', '=ADD()', '=TOTAL()'], correctAnswer: 1 }]
  },
  {
    id: 'average',
    title: '២. AVERAGE (មធ្យមភាគ)',
    category: 'Basic',
    description: 'ប្រើសម្រាប់រកមធ្យមភាគនៃសំណុំទិន្នន័យលេខ។',
    syntax: '=AVERAGE(number1, ...)',
    example: {
      data: [['មុខវិជ្ជា', 'ពិន្ទុ'], ['ខ្មែរ', '80'], ['គណិត', '90'], ['មធ្យម', '=AVERAGE(B2:B3)']],
      formula: '=AVERAGE(B2:B3)',
      result: '85',
      explanation: 'បូក ៨០ និង ៩០ រួចចែកនឹង ២ ទទួលបានតម្លៃមធ្យមភាគ ៨៥។'
    },
    practice: 'រកមធ្យមភាគពិន្ទុសិស្សទាំង ១០ នាក់ក្នុងថ្នាក់របស់អ្នក។',
    quizzes: [{ id: 'q2', question: 'តើរូបមន្ត AVERAGE ផ្តល់លទ្ធផលអ្វី?', options: ['បូកសរុប', 'រកតម្លៃធំបំផុត', 'រកមធ្យមភាគ', 'គុណលេខ'], correctAnswer: 2 }]
  },
  {
    id: 'count',
    title: '៣. COUNT (រាប់ចំនួនលេខ)',
    category: 'Basic',
    description: 'រាប់ចំនួនកោសិកា (Cells) ណាដែលមានផ្ទុក "លេខ" ប៉ុណ្ណោះ។',
    syntax: '=COUNT(value1, ...)',
    example: { data: [['ទិន្នន័យ'], ['100'], ['ABC'], ['រាប់បាន', '=COUNT(A2:A3)']], formula: '=COUNT(A2:A3)', result: '1', explanation: 'រាប់បានតែ ១ ព្រោះ "ABC" ជាអក្សរ មិនមែនជាលេខ។' },
    practice: 'រាប់ចំនួនបុគ្គលិកដែលមានអាយុក្នុងបញ្ជី។',
    quizzes: []
  },
  {
    id: 'counta',
    title: '៤. COUNTA (រាប់ទិន្នន័យទូទៅ)',
    category: 'Basic',
    description: 'រាប់គ្រប់កោសិកាទាំងអស់ដែលមិនទទេ (មិនថាជាអក្សរ លេខ ឬនិមិត្តសញ្ញា)។',
    syntax: '=COUNTA(value1, ...)',
    example: { data: [['ឈ្មោះ'], ['សុខ'], [''], ['រាប់បាន', '=COUNTA(A2:A3)']], formula: '=COUNTA(A2:A3)', result: '1', explanation: 'រាប់បានតែ ១ ព្រោះកោសិកាទី២ ទទេរ។' },
    practice: 'រាប់ចំនួនអ្នកដែលមានឈ្មោះក្នុងបញ្ជីវត្តមាន។',
    quizzes: []
  },
  {
    id: 'min',
    title: '៥. MIN (តម្លៃតូចបំផុត)',
    category: 'Basic',
    description: 'ស្វែងរកតម្លៃដែលតូចបំផុតក្នុងចំណោមលេខទាំងអស់ដែលអ្នកបានជ្រើសរើស។',
    syntax: '=MIN(number1, ...)',
    example: { data: [['តម្លៃ'], ['500'], ['200'], ['តូចបំផុត', '=MIN(A2:A3)']], formula: '=MIN(A2:A3)', result: '200', explanation: 'ស្វែងរកលេខដែលតូចជាងគេរវាង ៥០០ និង ២០០។' },
    practice: 'រកតម្លៃទំនិញដែលថោកជាងគេក្នុងហាងរបស់អ្នក។',
    quizzes: []
  },
  {
    id: 'max',
    title: '៦. MAX (តម្លៃធំបំផុត)',
    category: 'Basic',
    description: 'ស្វែងរកតម្លៃដែលធំបំផុតក្នុងចំណោមលេខទាំងអស់ដែលអ្នកបានជ្រើសរើស។',
    syntax: '=MAX(number1, ...)',
    example: { data: [['ពិន្ទុ'], ['75'], ['98'], ['ធំបំផុត', '=MAX(A2:A3)']], formula: '=MAX(A2:A3)', result: '98', explanation: 'ស្វែងរកពិន្ទុដែលខ្ពស់ជាងគេក្នុងចំណោមសិស្សទាំងអស់។' },
    practice: 'រកប្រាក់ខែខ្ពស់បំផុតក្នុងក្រុមហ៊ុន។',
    quizzes: []
  },
  {
    id: 'if',
    title: '៧. IF (លក្ខខណ្ឌ)',
    category: 'Intermediate',
    description: 'ត្រួតពិនិត្យលក្ខខណ្ឌ ប្រសិនបើ "ពិត" ឱ្យបង្ហាញលទ្ធផលទី១ បើ "មិនពិត" បង្ហាញលទ្ធផលទី២។',
    syntax: '=IF(condition, value_if_true, value_if_false)',
    example: { data: [['ពិន្ទុ', 'លទ្ធផល'], ['45', '=IF(A2>=50,"ជាប់","ធ្លាក់")']], formula: '=IF(A2>=50,"ជាប់","ធ្លាក់")', result: 'ធ្លាក់', explanation: 'ដោយសារ ៤៥ តូចជាង ៥០ ដូច្នេះវាបង្ហាញពាក្យ "ធ្លាក់"។' },
    practice: 'កំណត់លទ្ធផល "ចំណេញ" ឬ "ខាត" ផ្អែកលើចំណូល និងចំណាយ។',
    quizzes: []
  },
  {
    id: 'vlookup',
    title: '៨. VLOOKUP (ស្វែងរកបញ្ឈរ)',
    category: 'Intermediate',
    description: 'ស្វែងរកទិន្នន័យពីលើចុះក្រោម តាមរយៈជួរឈរទី១ នៃតារាង ដើម្បីទាញយកទិន្នន័យផ្សេងទៀត។',
    syntax: '=VLOOKUP(lookup_value, table, col_index, [range_lookup])',
    example: { data: [['ID', 'ឈ្មោះ'], ['1', 'Dara'], ['2', 'Sok'], ['រកលេខ២', '=VLOOKUP(2, A1:B3, 2, 0)']], formula: '=VLOOKUP(2, A1:B3, 2, 0)', result: 'Sok', explanation: 'ស្វែងរកលេខ ២ ក្នុងជួរឈរ A រួចបង្ហាញឈ្មោះក្នុងជួរឈរទី ២។' },
    practice: 'រកតម្លៃទំនិញដោយគ្រាន់តែវាយបញ្ចូលលេខកូដសម្គាល់។',
    quizzes: []
  },
  {
    id: 'len',
    title: '៩. LEN (រាប់ចំនួនតួអក្សរ)',
    category: 'Basic',
    description: 'រាប់ចំនួនតួអក្សរសរុបក្នុងកោសិកាមួយ (រួមទាំងដកឃ្លាផងដែរ)។',
    syntax: '=LEN(text)',
    example: { data: [['ពាក្យ'], ['Excel'], ['ចំនួន', '=LEN(A2)']], formula: '=LEN(A2)', result: '5', explanation: 'ពាក្យ "Excel" មាន ៥ តួអក្សរ។' },
    practice: 'រាប់ចំនួនតួអក្សរក្នុងលេខអត្តសញ្ញាណប័ណ្ណដើម្បីការពារការវាយខុស។',
    quizzes: []
  },
  {
    id: 'trim',
    title: '១០. TRIM (សម្អាតដកឃ្លា)',
    category: 'Basic',
    description: 'លុបដកឃ្លាដែលលើសនៅខាងមុខ ខាងក្រោយ និងចន្លោះកណ្តាលពាក្យ។',
    syntax: '=TRIM(text)',
    example: { data: [['អត្ថបទ'], ['  Sok  Ha '], ['លទ្ធផល', '=TRIM(A2)']], formula: '=TRIM(A2)', result: 'Sok Ha', explanation: 'លុបចន្លោះទទេដែលលើសចេញ ទុកតែដកឃ្លាតែមួយរវាងពាក្យ។' },
    practice: 'សម្អាតទិន្នន័យដែល Copy មកពីវេបសាយ ដែលច្រើនតែមានដកឃ្លាខុសបច្ចេកទេស។',
    quizzes: []
  },
  {
    id: 'sumifs',
    title: '១១. SUMIFS (បូកតាមលក្ខខណ្ឌច្រើន)',
    category: 'Advanced',
    description: 'បូកសរុបទិន្នន័យដែលមានលក្ខខណ្ឌលើសពីមួយ។',
    syntax: '=SUMIFS(sum_range, criteria_range1, criteria1, ...)',
    example: {
      data: [['ឈ្មោះ', 'ខែ', 'លក់'], ['Dara', 'Jan', '500'], ['Dara', 'Feb', '200'], ['Sok', 'Jan', '300'], ['Dara/Jan', '=SUMIFS(C2:C4, A2:A4, "Dara", B2:B4, "Jan")']],
      formula: '=SUMIFS(C2:C4, A2:A4, "Dara", B2:B4, "Jan")',
      result: '500',
      explanation: 'បូកតែតម្លៃលក់របស់ Dara ដែលធ្វើឡើងក្នុងខែ Jan ប៉ុណ្ណោះ។'
    },
    practice: 'បូកសរុបការលក់សម្រាប់ "ភ្នំពេញ" ដែលមាន "តម្លៃលើសពី ៥០០$"។',
    quizzes: []
  },
  {
    id: 'countifs',
    title: '១២. COUNTIFS (រាប់តាមលក្ខខណ្ឌច្រើន)',
    category: 'Advanced',
    description: 'រាប់ចំនួនកោសិកាដែលត្រូវនឹងលក្ខខណ្ឌច្រើនក្នុងពេលតែមួយ។',
    syntax: '=COUNTIFS(criteria_range1, criteria1, ...)',
    example: {
      data: [['ភេទ', 'អាយុ'], ['ប្រុស', '25'], ['ស្រី', '20'], ['ប្រុស', '18'], ['រាប់ប្រុស>=20', '=COUNTIFS(A2:A4, "ប្រុស", B2:B4, ">=20")']],
      formula: '=COUNTIFS(A2:A4, "ប្រុស", B2:B4, ">=20")',
      result: '1',
      explanation: 'រាប់តែមនុស្សប្រុសដែលមានអាយុចាប់ពី ២០ ឆ្នាំឡើងទៅ។'
    },
    practice: 'រាប់ចំនួនសិស្ស "ស្រី" ដែលទទួលបានពិន្ទុ "លើសពី ៩០"។',
    quizzes: []
  },
  {
    id: 'ifs',
    title: '១៣. IFS (លក្ខខណ្ឌច្រើនជម្រើស)',
    category: 'Intermediate',
    description: 'ជំនួសការប្រើ IF ជាន់គ្នា (Nested IF) ដើម្បីពិនិត្យលក្ខខណ្ឌច្រើនយ៉ាងងាយស្រួល។',
    syntax: '=IFS(cond1, val1, cond2, val2, ...)',
    example: {
      data: [['ពិន្ទុ', 'និទ្ទេស'], ['85', '=IFS(A2>=90, "A", A2>=80, "B", TRUE, "F")']],
      formula: '=IFS(A2>=90, "A", A2>=80, "B", TRUE, "F")',
      result: 'B',
      explanation: 'ដោយសារ ៨៥ ធំជាង ៨០ ដូច្នេះវាផ្តល់និទ្ទេស B។'
    },
    practice: 'ប្រើ IFS ដើម្បីកំណត់ចំណាត់ថ្នាក់សិស្ស A, B, C, D, E, F។',
    quizzes: []
  },
  {
    id: 'textjoin',
    title: '១៤. TEXTJOIN (ភ្ជាប់អត្ថបទ)',
    category: 'Intermediate',
    description: 'ភ្ជាប់អត្ថបទជាច្រើនចូលគ្នា ដោយប្រើសញ្ញាខណ្ឌកណ្តាលយ៉ាងបត់បែន។',
    syntax: '=TEXTJOIN(delimiter, ignore_empty, text1, ...)',
    example: {
      data: [['ឈ្មោះ', 'ត្រកូល'], ['សុខ', 'ហុង'], ['ពេញ', '=TEXTJOIN(" ", TRUE, B2, A2)']],
      formula: '=TEXTJOIN(" ", TRUE, B2, A2)',
      result: 'ហុង សុខ',
      explanation: 'ភ្ជាប់ឈ្មោះ និងត្រកូលដោយដកឃ្លាមួយនៅកណ្តាល។'
    },
    practice: 'ភ្ជាប់បញ្ជីឈ្មោះខេត្តទាំងអស់ដោយប្រើសញ្ញាក្បៀស (,) ខណ្ឌគ្នា។',
    quizzes: []
  },
  {
    id: 'xlookup',
    title: '១៥. XLOOKUP (ស្វែងរកជំនាន់ថ្មី)',
    category: 'Advanced',
    description: 'រូបមន្តស្វែងរកទំនើបបំផុត ដែលខ្លាំងជាង និងងាយស្រួលជាង VLOOKUP។',
    syntax: '=XLOOKUP(lookup_value, lookup_array, return_array)',
    example: {
      data: [['កូដ', 'ទំនិញ'], ['A1', 'ស្ករ'], ['B1', 'អំបិល'], ['រក A1', '=XLOOKUP("A1", A2:A3, B2:B3)']],
      formula: '=XLOOKUP("A1", A2:A3, B2:B3)',
      result: 'ស្ករ',
      explanation: 'ស្វែងរក "A1" ក្នុងជួរឈរ A រួចទាញយកលទ្ធផលដែលត្រូវគ្នាពីជួរឈរ B។'
    },
    practice: 'ប្រើ XLOOKUP ដើម្បីស្វែងរកទិន្នន័យពីស្តាំទៅឆ្វេង។',
    quizzes: []
  }
];
