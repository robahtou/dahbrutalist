export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  content: string;
  readTime: string;
  author: string;
  wordCount: number
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'machine-aesthetics',
    title: 'MACHINE AESTHETICS',
    date: '15/01/24',
    category: 'DESIGN',
    excerpt:
      'Beauty emerges from function, not decoration. Like industrial machinery, our designs serve purpose above all else.',
    tags: ['BRUTALISM', 'FUNCTION', 'DESIGN'],
    content: `# MACHINE AESTHETICS

In the sterile halls of modern web design, we have lost our way. Rounded corners and soft shadows have replaced the honest brutality of function-first design. We have traded truth for comfort, substance for style.

## THE INDUSTRIAL REVOLUTION OF DESIGN

Just as the industrial revolution transformed manufacturing, we must transform digital design. Every element must serve a purpose. Every pixel must justify its existence. There is no room for decoration in the machine.

### PRINCIPLES OF MACHINE AESTHETICS

1. **FUNCTION DICTATES FORM** - The purpose of an element determines its appearance
2. **NO UNNECESSARY ELEMENTS** - If it doesn't serve the user, it doesn't belong
3. **HONEST MATERIALS** - Digital materials should express their true nature
4. **SYSTEMATIC APPROACH** - Consistency through rigid systems, not arbitrary choices

## THE BEAUTY OF BRUTALISM

Brutalist architecture emerged from a desire to create honest, functional spaces. The same principles apply to digital design:

- Raw concrete becomes raw HTML
- Exposed structural elements become visible code
- Monumental scale becomes bold typography
- Repetitive modules become systematic layouts

### CASE STUDY: INDUSTRIAL INTERFACES

Look at the control panels of industrial machinery. Every button, every indicator, every display serves a critical function. There is no ornamentation because lives depend on clarity and efficiency.

This is our model. This is our inspiration.

## IMPLEMENTATION

To implement machine aesthetics in digital design:

\`\`\`css
/* Reject soft curves */
border-radius: 0;

/* Embrace harsh contrasts */
color: #000000;
background: #ffffff;

/* Use systematic spacing */
margin: 8px 16px 24px 32px;
\`\`\`

The machine does not lie. The machine does not deceive. The machine simply functions.

## CONCLUSION

We must reject the false comfort of "user-friendly" design and embrace the honest brutality of machine aesthetics. Only then can we create digital experiences that truly serve their purpose.

The revolution begins with a single pixel. Make it count.`,
    readTime: '8 MIN READ',
    author: 'SYSTEM.ADMIN',
    wordCount: 342,
  },
  {
    id: 2,
    slug: 'concrete-poetry',
    title: 'CONCRETE POETRY',
    date: '10/01/24',
    category: 'PHILOSOPHY',
    excerpt: "In the harsh angles of brutalist architecture, we find truth. In digital brutalism, we find honesty.",
    tags: ['ARCHITECTURE', 'TRUTH', 'DIGITAL'],
    content: `# CONCRETE POETRY

Digital spaces, like physical ones, can embody truth or deception. Most modern websites choose deception - hiding their true nature behind layers of visual sugar coating.

## THE CONCRETE MANIFESTO

Concrete is honest. It does not pretend to be something else. It bears the marks of its creation - the wood grain of forms, the joints between pours, the raw texture of aggregate.

Digital brutalism embraces this honesty:

### RAW HTML
No frameworks hiding the structure. No abstractions obscuring the foundation. Pure, semantic markup that serves content above all else.

### EXPOSED FUNCTIONALITY
Buttons look like buttons. Links look like links. Forms look like forms. No mystery, no confusion, no cognitive load.

### SYSTEMATIC TYPOGRAPHY
One font family. Clear hierarchy. Consistent spacing. Typography as infrastructure, not decoration.

## THE POETRY OF FUNCTION

There is poetry in a well-designed system. Beauty in the elegant solution. Grace in the perfect function.

This is not the poetry of flowery language or decorative flourishes. This is the poetry of the machine - precise, purposeful, powerful.

## DIGITAL CONCRETE

Our concrete is code. Our aggregate is data. Our forms are the constraints of the medium itself.

We pour our digital concrete with intention. We let it cure without interference. We embrace its imperfections as marks of authenticity.

The result is not pretty in the conventional sense. It is something more important: it is true.`,
    readTime: '5 MIN READ',
    author: 'SYSTEM.ADMIN',
    wordCount: 234,
  },
  {
    id: 3,
    slug: 'anti-decoration',
    title: 'ANTI-DECORATION',
    date: '05/01/24',
    category: 'MANIFESTO',
    excerpt: "We declare war on unnecessary elements. Every pixel must justify its existence.",
    tags: ['MANIFESTO', 'MINIMALISM', 'PURPOSE'],
    content: `# ANTI-DECORATION MANIFESTO

We, the practitioners of digital brutalism, hereby declare war on unnecessary decoration in digital design.

## OUR PRINCIPLES

### 1. FUNCTION OVER FORM
Every element must serve the user's goals. Decoration for its own sake is banned.

### 2. HONESTY IN MATERIALS
Digital materials should express their true nature. No skeuomorphism. No false textures.

### 3. SYSTEMATIC CONSISTENCY
Arbitrary design decisions are forbidden. Every choice must follow from the system.

### 4. COGNITIVE CLARITY
The user's mental energy is precious. Do not waste it on parsing unnecessary visual complexity.

## WHAT WE REJECT

- Gradients that serve no purpose
- Shadows that add no depth
- Animations that distract from content
- Colors chosen for "brand personality"
- Typography that prioritizes style over legibility
- Layouts that prioritize "visual interest" over usability

## WHAT WE EMBRACE

- Sharp edges and clear boundaries
- High contrast for maximum legibility
- Monospace fonts for systematic consistency
- Grid-based layouts that serve content
- Functional color that conveys meaning
- Typography that disappears into pure communication

## THE RESULT

Websites that load fast. Interfaces that work. Content that communicates. Users who accomplish their goals without friction.

This is not about being ugly. This is about being honest.

This is not about being difficult. This is about being clear.

This is not about rejecting beauty. This is about finding beauty in truth.

## JOIN THE REVOLUTION

Every unnecessary element you remove is a victory. Every function you clarify is progress. Every user goal you serve is success.

The machine does not need decoration. Neither do we.`,
    readTime: '4 MIN READ',
    author: 'SYSTEM.ADMIN',
    wordCount: 287,
  },
];
