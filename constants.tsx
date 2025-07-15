
import React from 'react';
import { Module } from './types';
import { BrainIcon, CodeBracketIcon, CubeTransparentIcon, DocumentTextIcon, QuestionMarkCircleIcon, ShareIcon, SparklesIcon, CodeBracketSquareIcon, LightBulbIcon, BoltIcon, CpuChipIcon, GlobeAltIcon, UsersIcon, KeyIcon, BuildingStorefrontIcon, PaintBrushIcon, ServerStackIcon, DevicePhoneMobileIcon, WrenchScrewdriverIcon, PuzzlePieceIcon, WindowIcon, BookOpenIcon, FolderOpenIcon, CommandLineIcon, CloudIcon, ComputerDesktopIcon, DocumentDuplicateIcon, FaceSmileIcon, CircleStackIcon, AcademicCapIcon, HomeModernIcon, ArrowDownTrayIcon } from './components/Icons';
import { ShieldCheckIcon, GlobeAmericasIcon, ServerIcon, GitBranchIcon } from './components/Icons';


const Callout = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
    <div className="my-6 p-4 bg-slate-800/50 rounded-lg flex items-start gap-4 border border-slate-700">
        <div className="text-cyan-400 mt-1 flex-shrink-0">{icon}</div>
        <div className="text-slate-300">{children}</div>
    </div>
);


export const CURRICULUM: Module[] = [
  {
    id: 'module-1',
    title: 'Module 1: The Magical Vending Machine',
    description: 'Get the big picture of how AI works from start to finish.',
    lessons: [
      {
        id: '1-1',
        title: 'What is AI?',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
          <div className="space-y-4">
            <p>Welcome! Imagine you have a magical assistant that can write, draw, and solve problems. That&apos;s what AI is like. It&apos;s a tool designed to understand what you want and create something new based on your instructions.</p>
            <p>You don&apos;t need to be a scientist to use it. You just need to know how to ask for what you want. Our journey starts with understanding the big picture.</p>
            <Callout icon={<BrainIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">The Core Idea: AI as a Vending Machine</p>
              <p>Think of using an AI like using a magical vending machine. You don&apos;t put in money; you put in an idea. And instead of a snack, you get back a story, an image, or an answer to a complex question.</p>
            </Callout>
            <p>In this first module, we&apos;ll look at the entire journey of your idea—from your brain to the machine and back again.</p>
          </div>
        )
      },
      {
        id: '1-2',
        title: 'The Journey of a Prompt',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
            <div className="space-y-4">
                <p>So, what happens when you type "write a poem about a robot who is sad" into a tool like Gemini or ChatGPT? Your request goes on an amazing, super-fast journey.</p>
                <p>Let&apos;s stick with our magical vending machine analogy. Here are the steps:</p>
                <Callout icon={<SparklesIcon className="w-8 h-8" />}>
                    <p className="font-semibold text-white">From Your Idea to a Result:</p>
                    <ul className="mt-2 space-y-3 list-decimal list-inside">
                        <li><strong className="text-cyan-400">You Write the Order Slip (The Prompt):</strong> You write down exactly what you want from the machine. This is your <strong className="text-white">prompt</strong>.</li>
                        <li><strong className="text-cyan-400">The Order Goes in the Tube (The API):</strong> Your order slip is zipped away through a special messenger tube to a giant central kitchen. This tube is the <strong className="text-white">API</strong>.</li>
                        <li><strong className="text-cyan-400">The Master Chef Gets to Work (The AI Model):</strong> In the kitchen, a Master Chef reads your order. This chef is the <strong className="text-white">AI Model</strong> (like Gemini). It understands language and is incredibly creative.</li>
                        <li><strong className="text-cyan-400">The Chef Prepares a Tidy Tray (The Data - JSON):</strong> The chef prepares your poem and places it on a perfectly organized tray with clear labels, so nothing gets mixed up. This organized format is called <strong className="text-white">JSON</strong>.</li>
                        <li><strong className="text-cyan-400">Your Order Appears! (The Frontend):</strong> The tray zips back through the tube and appears behind the glass of the vending machine for you to see. This is the screen of your app or website, the <strong className="text-white">Frontend</strong>.</li>
                    </ul>
                </Callout>
                <Callout icon={<BoltIcon className="w-8 h-8" />}>
                    <p className="font-semibold text-white">The Mind-Bending Speed of AI</p>
                    <p>That journey sounds long, but it happens at nearly the speed of light. Your prompt might travel thousands of miles to a data center, get processed, and return in the time it takes you to blink.</p>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><strong className="text-yellow-400">Trillions of Calculations:</strong> The "Master Chef" performs <strong className="text-white">trillions</strong> of mathematical operations to understand your request and decide on the best response.</li>
                        <li><strong className="text-yellow-400">Milliseconds:</strong> The entire process, from you hitting "Enter" to the answer appearing, often takes just milliseconds. That&apos;s faster than a hummingbird flaps its wings!</li>
                    </ul>
                    <p className="mt-2">Every prompt you send is a command to a global network of supercomputers. That&apos;s the power you&apos;re learning to wield!</p>
                </Callout>
                <p>Every single time you use an AI, this lightning-fast journey happens. In the next modules, we&apos;ll zoom in on each of these important steps!</p>
            </div>
        )
      },
      {
        id: '1-3',
        title: 'Quiz: The Journey',
        type: 'quiz',
        estimatedTimeMinutes: 3,
        quiz: {
          questions: [
            {
              question: 'In our analogy, what is the "Master Chef" that actually creates the poem or image?',
              options: ['The Vending Machine Glass (Frontend)', 'The Order Slip (Prompt)', 'The AI Model (like Gemini)', 'The Messenger Tube (API)'],
              correctAnswer: 'The AI Model (like Gemini)'
            },
            {
              question: 'What do we call the instruction you give to the AI?',
              options: ['The API', 'The Prompt', 'JSON', 'The Frontend'],
              correctAnswer: 'The Prompt'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Module 2: The Art of the Prompt',
    description: 'Learn how to write the perfect "order slip" for your AI.',
    lessons: [
       {
        id: '2-1',
        title: 'Mastering Your Instructions',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
             <div className="space-y-4">
                <p>Remember Step 1 of our journey? The <strong className="text-cyan-400">Order Slip</strong>, or <strong className="text-cyan-400">"Prompt"</strong>. This is the single most important skill for using AI.</p>
                <p>Think of the AI as a brilliant but very literal intern. The clearer and more detailed your instructions, the better your result will be.</p>
                <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
                     <p className="font-semibold text-white">Tips for a Perfect Prompt:</p>
                     <ul className="mt-2 space-y-3">
                        <li><strong className="text-yellow-400">Be Specific:</strong> Don&apos;t say "write about dogs." Try "Write a short, happy poem about a golden retriever puppy playing in a park."</li>
                        <li><strong className="text-yellow-400">Give it a Role:</strong> Start with "You are a master chef." or "Act as a professional travel agent." This puts the AI in the right mindset.</li>
                        <li><strong className="text-yellow-400">Define the Format:</strong> Clearly state what you want. "Explain it in three bullet points," or "Write the answer in a friendly, enthusiastic tone."</li>
                     </ul>
                </Callout>
                <p>Mastering the art of the prompt is your key to unlocking the AI&apos;s full potential. It’s how you get exactly what you want from the magical vending machine.</p>
          </div>
        )
      },
       {
        id: '2-2',
        title: 'Quiz: Clear Instructions',
        type: 'quiz',
        estimatedTimeMinutes: 3,
        quiz: {
          questions: [
            {
              question: 'You want the AI to generate ideas for a kids birthday party. Which is the better prompt?',
              options: ['Party ideas', 'Act as a professional party planner. Give me 5 unique and fun theme ideas for a 7-year-old&apos;s birthday party. Include a food suggestion for each.'],
              correctAnswer: 'Act as a professional party planner. Give me 5 unique and fun theme ideas for a 7-year-old&apos;s birthday party. Include a food suggestion for each.'
            },
            {
              question: 'Telling the AI to "Act as a world-class scientist" is an example of what prompt technique?',
              options: ['Being Specific', 'Giving it a Role', 'Defining the Format', 'Being Vague'],
              correctAnswer: 'Giving it a Role'
            }
          ]
        }
      }
    ]
  },
   {
    id: 'module-3',
    title: 'Module 3: Meeting the AI Family',
    description: 'Learn about the different types of "Master Chefs".',
    lessons: [
      {
        id: '3-1',
        title: 'Different Models, Different Skills',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
          <div className="space-y-4">
            <p>Inside our magical vending machine&apos;s kitchen, there isn&apos;t just one Master Chef. There&apos;s a whole team of specialists!</p>
            <p>These specialist chefs are the different <strong className="text-cyan-400">AI Models</strong>. Each one has been trained for a specific kind of task.</p>
            <Callout icon={<BrainIcon className="w-8 h-8" />}>
                 <p className="font-semibold text-white">Choosing the Right Chef for the Job</p>
                 <ul className="mt-2 space-y-2">
                    <li><strong className="text-cyan-400">Language Models (e.g., Gemini):</strong> These are expert communicators, the &apos;wordsmiths&apos;. They excel at writing, summarizing, translating, and answering questions.</li>
                    <li><strong className="text-yellow-400">Image Models (e.g., Imagen):</strong> These are the &apos;artists&apos;. They generate stunning images, logos, and illustrations from text descriptions.</li>
                 </ul>
            </Callout>
            <p>When you use an AI tool, it&apos;s smart enough to send your prompt to the right specialist. If you ask for a poem, it goes to the wordsmith. If you ask for a picture, it goes to the artist.</p>
          </div>
        )
      },
      {
        id: '3-2',
        title: 'Quiz: Meet the Models',
        type: 'quiz',
        estimatedTimeMinutes: 3,
        quiz: {
          questions: [
            {
              question: 'If you wanted to create a logo for your new company, which type of "chef" would you need?',
              options: ['A Language Model', 'An Image Model', 'A Frontend Model', 'An API Model'],
              correctAnswer: 'An Image Model'
            },
            {
              question: 'Which task is a Language Model best suited for?',
              options: ['Creating a 3D model of a car', 'Generating a realistic photo', 'Summarizing a long document', 'Designing a color palette'],
              correctAnswer: 'Summarizing a long document'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Module 4: The Messenger Service',
    description: 'A closer look at the "pneumatic tube" for your ideas.',
    lessons: [
      {
        id: '4-1',
        title: 'What is an API?',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
          <div className="space-y-4">
            <p>Remember the <strong className="text-cyan-400">pneumatic tube</strong> that zips your order from the vending machine to the kitchen? It&apos;s time to learn its real name: <strong className="text-cyan-400">API</strong>.</p>
            <p>Think of it like a waiter at a restaurant. You don&apos;t go into the kitchen yourself. You give your order (your prompt) to the waiter. The waiter takes it to the chefs (the AI model). The waiter then brings the finished dish back to your table.</p>
             <Callout icon={<ShareIcon className="w-8 h-8" />}>
                 <p className="font-semibold text-white">The API is the Waiter</p>
                 <p>An <strong className="text-cyan-400">API (Application Programming Interface)</strong> is a messenger that lets two different computer programs talk to each other. In our case, it lets the app on your phone or computer talk to the powerful AI brain on a server far away.</p>
            </Callout>
            <p>You don&apos;t need to know how the waiter does their job, just that they are the reliable messenger connecting you to the kitchen!</p>
          </div>
        )
      },
      {
        id: '4-2',
        title: 'Quiz: The API Analogy',
        type: 'quiz',
        estimatedTimeMinutes: 3,
        quiz: {
          questions: [
            {
              question: 'In our restaurant analogy, what does the API represent?',
              options: ['The Customer', 'The Waiter', 'The Kitchen', 'The Food'],
              correctAnswer: 'The Waiter'
            },
            {
              question: 'What is the main purpose of an API in this context?',
              options: ['To design the look of an app', 'To connect your app to the AI brain', 'To store your past prompts', 'To make the AI think faster'],
              correctAnswer: 'To connect your app to the AI brain'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'module-5',
    title: 'Module 5: The AI\'s Filing System',
    description: 'How the "tidy tray" keeps information organized.',
    lessons: [
      {
        id: '5-1',
        title: 'What is JSON?',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
           <div className="space-y-4">
            <p>Remember the <strong className="text-cyan-400">Tidy Tray</strong> our Master Chef uses? It has a real name: <strong className="text-cyan-400">JSON (JavaScript Object Notation)</strong>. It&apos;s the most common way for computers to send organized information to each other.</p>
            <p>Imagine you asked for contact info. A messy note is confusing. JSON is like a perfectly organized address book entry.</p>
            <Callout icon={<CodeBracketSquareIcon className="w-8 h-8" />}>
                 <p className="font-semibold text-white">JSON uses Key-Value Pairs</p>
                 <p>It works with pairs: a <strong className="text-yellow-400">"key"</strong> (the label, always in quotes) and a <strong className="text-green-400">"value"</strong> (the actual data). It&apos;s like a dictionary definition.</p>
                 <div className="mt-2 p-3 bg-slate-900 rounded-md font-mono text-sm text-slate-300">
                    <span className="text-yellow-400">"name"</span>: <span className="text-green-400">"Alex"</span>,<br/>
                    <span className="text-yellow-400">"city"</span>: <span className="text-green-400">"Futureville"</span>,<br/>
                    <span className="text-yellow-400">"age"</span>: <span className="text-green-400">30</span>
                 </div>
                 <p className="mt-2 text-sm">Notice how text values have quotes, but numbers don&apos;t? These little rules are the "grammar" that makes JSON so clear for computers.</p>
            </Callout>
            <p>When you use a no-code tool to get data from an AI, it will almost always arrive in this neat and tidy JSON format.</p>
          </div>
        )
      },
      {
        id: '5-2',
        title: 'Exercise: Write Your First JSON',
        type: 'exercise',
        estimatedTimeMinutes: 5,
        exercise: {
          prompt: (
            <div className="space-y-3">
              <p>Your turn! Let&apos;s describe a pet using the JSON format.</p>
              <p>Your JSON should have two key-value pairs inside the curly braces <code className="bg-slate-700 p-1 rounded">{`{ }`}</code>:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>A key <strong className="text-yellow-400">"name"</strong> with the value of your pet&apos;s name (as text in quotes, e.g. <code className="text-green-400">"Fido"</code>).</li>
                  <li>A key <strong className="text-yellow-400">"age"</strong> with the value of your pet&apos;s age (as a number, e.g. <code className="text-green-400">5</code>).</li>
              </ul>
              <p>Don&apos;t forget the comma between the pairs!</p>
            </div>
          ),
          evaluationPrompt: `The user is trying to create a simple JSON object for a pet with a 'name' (string) and 'age' (number) key. Please evaluate their submission. The JSON must be valid. The name must be a string and the age must be a number.`,
          initialCode: `{\n  "name": "Fido",\n  "age": 5\n}`
        }
      }
    ]
  },
  {
    id: 'module-6',
    title: 'Module 6: Anatomy of an App',
    description: 'See how real apps are built, from Instagram to your own ideas.',
    lessons: [
      {
        id: '6-1',
        title: 'Real World Example: Instagram',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>Let&apos;s move from analogies to the real world. Every app you use, from WhatsApp to Google Search to Instagram, is built with the same core pieces we&apos;ve discussed: a Frontend and a Backend, connected by APIs.</p>
            <p>This combination is often called a <strong className="text-white">"Full-Stack"</strong> application.</p>
            <Callout icon={<BuildingStorefrontIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Instagram as a Full-Stack App</p>
              <ul className="mt-2 space-y-3">
                <li><strong className="text-cyan-400">Frontend (The Storefront):</strong> This is everything you see and touch: the feed you scroll, the "Like" button, the Stories layout, the colorful gradients. It&apos;s the visual experience in the app on your phone.</li>
                <li><strong className="text-yellow-400">Backend (The Warehouse & Kitchen):</strong> This is the massive, hidden system. It stores billions of photos in giant <strong className="text-white">databases</strong>, runs the algorithm that decides what to show you, and processes every new "Like" and "Comment".</li>
                <li><strong className="text-green-400">API (The Waiter):</strong> When you tap the "Like" button (Frontend), an API call is made. The "waiter" rushes your request to the Backend, which updates its database. The waiter then returns a confirmation, and your button turns red.</li>
              </ul>
            </Callout>
            <p>Every complex app is just these pieces working together. Now let&apos;s look closer at the ingredients for each part.</p>
          </div>
        )
      },
      {
        id: '6-2',
        title: 'The Frontend: Styling the Stage',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
            <div className="space-y-4">
                <p>The <strong className="text-cyan-400">Frontend</strong> is all about presentation. Think of it like designing a room after an architect has built the house.</p>
                <Callout icon={<PaintBrushIcon className="w-8 h-8" />}>
                    <p className="font-semibold text-white">The Interior Designer&apos;s Toolkit</p>
                    <ul className="mt-2 space-y-3">
                        <li><strong className="text-cyan-400">Figma is the Blueprint:</strong> Before building, designers use tools like <strong className="text-white">Figma</strong> to create a visual blueprint of what the app should look like. It&apos;s like an interior designer&apos;s mood board and floor plan.</li>
                        <li><strong className="text-yellow-400">HTML is the Structure:</strong> These are the walls, windows, and doors. It defines the basic layout of a webpage (e.g., "this is a title," "this is an image").</li>
                        <li><strong className="text-green-400">CSS is the Style:</strong> This is the paint, the furniture, the lighting. <strong className="text-white">CSS</strong> controls all the visual flair: colors, fonts, spacing. Tools like <strong className="text-white">Tailwind CSS</strong> (which this app uses!) provide pre-made style recipes.</li>
                        <li><strong className="text-purple-400">JavaScript (React) is the Interaction:</strong> This makes the room interactive. A library like <strong className="text-white">React</strong> (which also powers this app!) manages these interactions, updating what you see without reloading the whole page.</li>
                    </ul>
                </Callout>
                <p>When a no-code AI tool builds you a "beautiful, responsive website," it&apos;s expertly acting as designer and developer, writing HTML, CSS, and JavaScript for you.</p>
            </div>
        )
      },
      {
        id: '6-3',
        title: 'The Backend: The Powerhouse',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
            <div className="space-y-4">
                <p>The <strong className="text-cyan-400">Backend</strong> is where the heavy lifting happens. Its core is the <strong className="text-white">Database</strong>, the application&apos;s long-term memory.</p>
                <Callout icon={<ServerStackIcon className="w-8 h-8" />}>
                    <p className="font-semibold text-white">The Warehouse Analogy: Cloud Databases</p>
                     <p>Most modern apps don&apos;t own a physical warehouse. They rent space from giant, secure, global providers. These are <strong className="text-white">Cloud Databases</strong> (like Google&apos;s Firebase or Amazon&apos;s AWS). It&apos;s cheaper, more secure, and can scale up instantly if an app becomes popular.</p>
                    <ul className="mt-2 space-y-3">
                        <li><strong className="text-cyan-400">Relational (SQL):</strong> Like a perfectly organized Excel spreadsheet. Great for structured data like a list of users.</li>
                        <li><strong className="text-yellow-400">Non-Relational (NoSQL):</strong> Like a filing cabinet where each folder can hold different types of documents. More flexible for varied data like user posts.</li>
                    </ul>
                </Callout>
                <p>When an app "saves your progress," it&apos;s sending it via API to be stored securely in a cloud database.</p>
            </div>
        )
      },
      {
        id: '6-4',
        title: 'Where Apps Live',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
            <div className="space-y-4">
                <p>The "Full-Stack" application we&apos;ve described can be packaged for different environments you use every day.</p>
                <Callout icon={<DevicePhoneMobileIcon className="w-8 h-8" />}>
                    <p className="font-semibold text-white">Web, Mobile, and Desktop</p>
                    <ul className="mt-2 space-y-3">
                        <li><strong className="text-cyan-400">Web App:</strong> Accessed through a browser (Chrome, Safari). It lives on the internet.</li>
                        <li><strong className="text-yellow-400">Mobile App:</strong> Downloaded from an App Store (iOS or Android).</li>
                        <li><strong className="text-green-400">Desktop App:</strong> Installed directly onto your computer (Microsoft Word, Photoshop).</li>
                    </ul>
                </Callout>
                <p>While they look different, they often use the same backend. The mobile app is just a different "storefront" that talks to the same central "warehouse" as the web app.</p>
            </div>
        )
      },
      {
        id: '6-5',
        title: 'A Developer\'s Blueprint',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
            <div className="space-y-4">
                <p>If you were to peek inside the folder for a project like this very app on a developer&apos;s computer, you&apos;d see a standard, organized structure. Understanding it helps demystify how code is organized.</p>
                <Callout icon={<FolderOpenIcon className="w-8 h-8" />}>
                    <p className="font-semibold text-white">Inside a Project Folder</p>
                    <p>Think of it as the blueprint and construction materials for a house.</p>
                    <ul className="mt-2 space-y-3">
                        <li><strong className="text-cyan-400">index.html:</strong> The foundation and front door of the house. This is the first file the browser loads. It&apos;s mostly empty, just holding a spot for the React app to be inserted.</li>
                        <li><strong className="text-yellow-400">src/ (Source) folder:</strong> This is the main box of materials. All the primary code files that developers write live inside this <strong className="text-white">source</strong> folder.</li>
                        <li><strong className="text-green-400">.tsx files:</strong> Files ending in <strong className="text-white">.tsx</strong> are the individual rooms or components of the house (like this Lesson View). They contain a mix of HTML-like structure (JSX) and JavaScript logic (TypeScript).</li>
                         <li><strong className="text-purple-400">.env file:</strong> This is the locked safe for secrets. It holds <strong className="text-white">Environment Variables</strong>, like the precious <code className="text-white bg-slate-700 p-1 rounded">API_KEY</code>. This file is <strong className="text-white">never</strong> shared publicly to keep the app secure.</li>
                    </ul>
                </Callout>
                <p>When you see these file names in an error message from a no-code tool, you now have a mental map of what they are and their role in building the application.</p>
            </div>
        )
      },
      {
        id: '6-6',
        title: 'The Architects: Developers',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
            <div className="space-y-4">
                <p>So who builds all this? Skilled professionals called <strong className="text-white">Software Developers</strong> or <strong className="text-white">Programmers</strong>.</p>
                <Callout icon={<WrenchScrewdriverIcon className="w-8 h-8" />}>
                    <p className="font-semibold text-white">The Construction Crew</p>
                    <p>Building a full-stack application requires a team of specialists:</p>
                    <ul className="mt-2 space-y-3">
                        <li><strong className="text-cyan-400">Frontend Developer:</strong> The interior designer. They use HTML, CSS, and React to build the user interface.</li>
                        <li><strong className="text-yellow-400">Backend Developer:</strong> The structural engineer. They build and manage the servers, APIs, and databases.</li>
                        <li><strong className="text-green-400">Full-Stack Developer:</strong> A master builder skilled in both frontend and backend work.</li>
                    </ul>
                </Callout>
                <p className="font-bold text-lg text-white">This is why no-code AI is so revolutionary. When you ask it to "create a website for my bakery," it&apos;s acting as an entire team of these expert developers for you, instantly. It automates immense complexity, which is why understanding these roles helps you appreciate the true power you&apos;re wielding.</p>
            </div>
        )
      },
      {
        id: '6-7',
        title: 'Quiz: Anatomy of an App',
        type: 'quiz',
        estimatedTimeMinutes: 4,
        quiz: {
          questions: [
            {
              question: 'In which file would a developer most likely store a secret API Key?',
              options: ['index.html', 'A .tsx component file', 'The .env file', 'A CSS file'],
              correctAnswer: 'The .env file'
            },
            {
              question: 'You want to change the color of a button on your website. Which frontend technology would you use?',
              options: ['The Database', 'The API', 'CSS', 'The Server'],
              correctAnswer: 'CSS'
            },
            {
              question: 'A professional who specializes only in building the user interface is called a:',
              options: ['Backend Developer', 'Database Administrator', 'Frontend Developer', 'Full-Stack Developer'],
              correctAnswer: 'Frontend Developer'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'module-7',
    title: 'Module 7: From Code to the World',
    description: 'Learn how a finished app gets online and stays safe.',
    lessons: [
       {
        id: '7-1',
        title: 'Putting Your App Online: Hosting',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
          <div className="space-y-4">
            <p>Once an app is built, it&apos;s just a folder of files on a developer&apos;s computer. To let the world see it, it needs to be put on a special, powerful computer that&apos;s always on and connected to the internet. This is called <strong className="text-cyan-400">Hosting</strong>.</p>
            <Callout icon={<ServerIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Real Estate Analogy: Hosting is Land</p>
              <p>Think of it this way: developing your app is like building a house. <strong className="text-white">Hosting is like buying a plot of land to put your house on</strong>. Without the land, your house is just a set of blueprints and materials no one can visit.</p>
               <p className="mt-2">Hosting providers (like Vercel, Netlify, or Google Cloud) rent you space on their powerful computers (<strong className="text-white">servers</strong>) so your website is accessible 24/7 from anywhere in the world.</p>
            </Callout>
            <p>When a no-code tool says it will "deploy" your app, it means it&apos;s handling the entire hosting process for you automatically.</p>
          </div>
        )
      },
      {
        id: '7-2',
        title: 'Your Digital Address: Domains',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
          <div className="space-y-4">
            <p>So your app is hosted on a server. How do people find it? Servers are identified by long, complex numbers (IP addresses). Humans are bad at remembering these. That&apos;s why we use <strong className="text-cyan-400">Domains</strong>.</p>
            <Callout icon={<GlobeAmericasIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Real Estate Analogy: Domain is the Address</p>
              <p>If hosting is the land, a <strong className="text-white">domain is the street address</strong> (like `www.myawesomebakery.com`). It&apos;s a memorable, human-friendly name that points to your server&apos;s numeric address.</p>
              <p className="mt-2">You have to register and pay for a domain name to ensure you are the only one who can use it. This is why good domain names are valuable!</p>
            </Callout>
          </div>
        )
      },
      {
        id: '7-3',
        title: 'The Lock on the Door: Security',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>Just creating a website isn&apos;t enough. It needs to be safe for you and your visitors. This is a huge and important part of running any application.</p>
            <Callout icon={<ShieldCheckIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Real Estate Analogy: Security is the Lock</p>
              <p>You wouldn&apos;t leave your house unlocked for anyone to walk into. The most basic lock for a website is <strong className="text-white">HTTPS</strong> (the 'S' stands for Secure). You can see it as a padlock icon in your browser&apos;s address bar.</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-cyan-400">What it does:</strong> HTTPS encrypts the data sent between your visitor&apos;s browser and your server. This means hackers can&apos;t easily spy on passwords or credit card information.</li>
                <li><strong className="text-yellow-400">Why it matters:</strong> Browsers will warn users away from sites that are "Not Secure" (don&apos;t use HTTPS). It&apos;s absolutely essential for trust and professionalism.</li>
              </ul>
            </Callout>
            <p>Beyond HTTPS, developers work constantly to protect against hacking and keep user data safe. It&apos;s another complex job that no-code tools thankfully handle for you, but it&apos;s crucial to be aware of how important it is.</p>
          </div>
        )
      },
      {
        id: '7-4',
        title: 'Quiz: From Code to World',
        type: 'quiz',
        estimatedTimeMinutes: 3,
        quiz: {
          questions: [
            {
              question: 'You have built a website, but it only exists on your laptop. What do you need to do so the world can see it?',
              options: ['Buy a Domain', 'Get Hosting', 'Get an API Key', 'Write more CSS'],
              correctAnswer: 'Get Hosting'
            },
            {
              question: 'What is the purpose of the padlock icon (HTTPS) in your browser?',
              options: ['It makes the website load faster', 'It shows the website is popular', 'It encrypts data for security, protecting it from hackers', 'It means the website has no ads'],
              correctAnswer: 'It encrypts data for security, protecting it from hackers'
            }
          ]
        }
      }
    ]
  },
    {
    id: 'module-8',
    title: 'Module 8: The Developer\'s Toolbox',
    description: 'A peek inside the tools that bring apps to life.',
    lessons: [
       {
        id: '8-1',
        title: 'The Super-Powered Editor: IDEs',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
          <div className="space-y-4">
            <p>Developers don&apos;t write code in a simple notepad. They use special software called an <strong className="text-cyan-400">IDE (Integrated Development Environment)</strong>. The most popular one in the world is <strong className="text-white">Visual Studio Code (VS Code)</strong>.</p>
            <Callout icon={<CommandLineIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">A Chef&apos;s Kitchen Station</p>
              <p>Think of an IDE as a chef&apos;s perfect kitchen station, not just a single knife. It has everything they need in one place:</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-cyan-400">The File Explorer:</strong> The pantry, showing all your project files.</li>
                <li><strong className="text-yellow-400">The Code Editor:</strong> The cutting board, where you write the code. It has helpful features like color-coding and auto-complete.</li>
                <li><strong className="text-green-400">The Terminal:</strong> The intercom to the computer, allowing you to run commands to install tools or start your app.</li>
                <li><strong className="text-purple-400">Extensions:</strong> Specialty gadgets you can add to give your IDE new powers.</li>
              </ul>
            </Callout>
            <p>When you see screenshots or videos of programmers working, you are almost always looking at an IDE like VS Code.</p>
          </div>
        )
      },
      {
        id: '8-2',
        title: 'The Time Machine: GitHub',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>What happens if a developer makes a mistake and breaks the app? How do multiple developers work on the same project without overwriting each other&apos;s work? The answer is a tool called <strong className="text-cyan-400">Git</strong>, and the most popular place to use it is <strong className="text-white">GitHub</strong>.</p>
            <Callout icon={<GitBranchIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Google Docs for Code</p>
              <p>Think of GitHub as Google Docs, but for code. It has two superpowers:</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-cyan-400">Version History (A Time Machine):</strong> Every time you save a significant change (called a <strong className="text-white">commit</strong>), GitHub keeps a snapshot. If you make a mistake, you can instantly go back in time to an older, working version.</li>
                <li><strong className="text-yellow-400">Collaboration:</strong> It allows a whole team of developers to work on the same project (called a <strong className="text-white">repository</strong>). It manages merging everyone&apos;s changes together safely.</li>
              </ul>
            </Callout>
            <p>GitHub is the backbone of modern software development. It&apos;s where most open-source projects live and where developers share and store their code.</p>
          </div>
        )
      },
      {
        id: '8-3',
        title: 'Quiz: The Developer\'s Toolbox',
        type: 'quiz',
        estimatedTimeMinutes: 3,
        quiz: {
          questions: [
            {
              question: 'A developer needs a single place to view files, write code, and run commands. What kind of tool would they use?',
              options: ['A simple text editor', 'An IDE like VS Code', 'A web browser', 'A database client'],
              correctAnswer: 'An IDE like VS Code'
            },
            {
              question: 'A team needs to collaborate on a complex project and wants to keep a history of every change. Which platform is best suited for this?',
              options: ['Figma', 'Google Docs', 'GitHub', 'Tailwind CSS'],
              correctAnswer: 'GitHub'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'module-9',
    title: 'Module 9: How AI Thinks & Remembers',
    description: 'Learn the core vocabulary of AI interaction.',
    lessons: [
       {
        id: '9-1',
        title: 'The Language of AI: Tokens',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>AI models like Gemini don&apos;t see words the way we do. They break text down into pieces called <strong className="text-cyan-400">Tokens</strong>.</p>
            <p>You can think of tokens as LEGO bricks for language. Simple words are often one brick, but more complex words can be multiple bricks.</p>
            <Callout icon={<PuzzlePieceIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">LEGO Brick Analogy</p>
              <ul className="mt-2 space-y-2">
                <li>The word <strong className="text-white">"cat"</strong> might be one token (one brick).</li>
                <li>The word <strong className="text-white">"running"</strong> might be two tokens: <strong className="text-yellow-400">"run"</strong> and <strong className="text-yellow-400">"ning"</strong>.</li>
                <li>The word <strong className="text-white">"unforgettable"</strong> might be three tokens: <strong className="text-green-400">"un"</strong>, <strong className="text-green-400">"forget"</strong>, and <strong className="text-green-400">"able"</strong>.</li>
              </ul>
            </Callout>
            <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Why This Matters to You</p>
              <p>Many AI services base their pricing on the number of tokens you use (both in your prompt and in the AI&apos;s answer). A good rule of thumb is that 100 tokens is about 75 words. Understanding tokens helps you understand the "cost" of your request.</p>
            </Callout>
          </div>
        )
      },
      {
        id: '9-2',
        title: 'The AI\'s Workbench: Context Window',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>How much information can an AI handle at once? That&apos;s determined by its <strong className="text-cyan-400">Context Window</strong>.</p>
            <p>Think of the Context Window as the AI&apos;s workbench. It&apos;s the space where it can hold all the tokens (LEGO bricks) of your current conversation—your prompt, the documents you&apos;ve uploaded, and its own previous responses.</p>
            <Callout icon={<WindowIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">A Bigger Workbench is Better</p>
              <p>The size of the context window is measured in tokens. An early AI might have had a 2,000-token window (a small desk). Modern models like Gemini can have windows of 1 million tokens or more—an enormous warehouse-sized workbench!</p>
            </Callout>
            <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Why This Matters to You</p>
              <p>If you try to give an AI a 500-page book to summarize but its context window is only big enough for 100 pages, it will "forget" the beginning of the book by the time it reaches the end. Knowing a tool&apos;s context window tells you how much information it can process in a single, coherent thought.</p>
            </Callout>
          </div>
        )
      },
      {
        id: '9-3',
        title: 'Finding Meaning: Embeddings',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>How does an AI know that "happy" is the opposite of "sad," or that "king" is related to "queen"? The magic behind this is <strong className="text-cyan-400">Embeddings</strong>.</p>
            <p>Imagine a giant library of every concept in the world. An embedding is like a special GPS coordinate for each concept (each token).</p>
            <Callout icon={<BookOpenIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">The Library of Meaning</p>
              <p>In this magic library:</p>
              <ul className="mt-2 space-y-2">
                <li>The books for "king," "queen," "prince," and "royalty" would all be located very close to each other.</li>
                <li>The books for "puppy," "kitten," and "cute" would be in another section, but also close together.</li>
                <li>The book for "king" would be very, very far away from the book for "cabbage."</li>
              </ul>
              <p className="mt-2">Embeddings turn words into numbers (coordinates) that represent their meaning and relationships. This is how an AI can understand context, nuance, and analogies.</p>
            </Callout>
            <p>This "library of meaning" is created during the expensive <strong className="text-white">Training</strong> phase. When you use the AI, it&apos;s doing <strong className="text-white">Inference</strong>—quickly looking up concepts in its pre-built library to answer your question.</p>
          </div>
        )
      },
      {
        id: '9-4',
        title: 'Quiz: How AI Thinks',
        type: 'quiz',
        estimatedTimeMinutes: 4,
        quiz: {
          questions: [
            {
              question: 'AI models break language down into smaller pieces. What are these pieces called?',
              options: ['Bytes', 'Pixels', 'Tokens', 'Prompts'],
              correctAnswer: 'Tokens'
            },
            {
              question: 'You want an AI to analyze a very long document, but it seems to forget the beginning. What is the likely limitation you are running into?',
              options: ['The API', 'The Context Window', 'The JSON format', 'The Frontend'],
              correctAnswer: 'The Context Window'
            },
            {
              question: 'How does an AI understand that "car" and "automobile" are related concepts?',
              options: ['Through its Cache', 'Through CSS', 'Through Embeddings', 'Through its CPU'],
              correctAnswer: 'Through Embeddings'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'module-10',
    title: 'Module 10: The AI\'s Workshop',
    description: 'Understand the hardware and rules that power your AI tools.',
    lessons: [
      {
        id: '10-1',
        title: 'The GPU Powerhouse',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>Remember the "trillions of calculations" an AI performs? That requires a special kind of engine. It's why AI relies on <strong className="text-cyan-400">GPUs (Graphics Processing Units)</strong>.</p>
            <Callout icon={<CpuChipIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Why GPUs are the Engine of AI</p>
              <p>While a <strong className="text-white">CPU</strong> (your computer&apos;s main brain) is a master of doing complex tasks one by one, a GPU is a master of doing millions of simple tasks all at once. AI math is millions of simple calculations, so GPUs are perfect for it.</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-yellow-400">Cost:</strong> A single high-end AI GPU (from players like <strong className="text-white">NVIDIA</strong>) can cost more than a car.</li>
                <li><strong className="text-yellow-400">Housing:</strong> These GPUs are housed by the thousands in massive, air-conditioned buildings called <strong className="text-white">Data Centers</strong> located all over the world. These data centers consume huge amounts of power.</li>
              </ul>
            </Callout>
            <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Why This Matters to You</p>
              <p>When you use a powerful AI like Gemini, you are renting a small slice of a multi-million dollar supercomputer for a few seconds. The cost and complexity of this hardware is why most powerful AI is accessed over the internet from companies that can afford to build and maintain these data centers.</p>
            </Callout>
          </div>
        )
      },
      {
        id: '10-2',
        title: 'Cloud Power vs. Local Brains',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>So, do you always need to connect to a giant data center to use AI? Not anymore! It depends on the size of the AI model&apos;s "brain."</p>
            <Callout icon={<CloudIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Large Models in the Cloud</p>
              <p>The most powerful, general-purpose models (like Google&apos;s full Gemini or OpenAI&apos;s GPT-4) are enormous. They have trillions of connections and can only run on the massive GPU clusters in cloud data centers. You access them via the internet.</p>
            </Callout>
            <Callout icon={<ComputerDesktopIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Small Models on Your Laptop</p>
              <p>Recently, a new wave of highly efficient, smaller models has emerged. Models like Google&apos;s <strong className="text-white">Gemma</strong>, Meta&apos;s <strong className="text-white">Llama</strong>, or Mistral&apos;s models are small enough to run directly on your personal computer or even your phone!</p>
              <p className="mt-2">They are often specialized for certain tasks and might not be as broadly capable as the largest models, but they are incredibly powerful, fast, and great for privacy since your data never leaves your device.</p>
            </Callout>
             <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Why This Matters to You</p>
              <p>You have a choice! For the absolute most powerful AI, you use a cloud service. For many everyday tasks, or if you want to experiment privately, you can now run a powerful AI locally. This is a new and exciting development in making AI accessible to everyone.</p>
            </Callout>
          </div>
        )
      },
      {
        id: '10-3',
        title: 'Your Digital Environment',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>Your AI tool runs in a digital environment made up of a few key parts, just like a restaurant needs a building and staff to operate.</p>
            <Callout icon={<GlobeAltIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">The Restaurant Analogy: Who Does What?</p>
              <ul className="mt-2 space-y-3">
                <li><strong className="text-cyan-400">Operating System (OS):</strong> The <strong className="text-white">OS (Windows, macOS, Android)</strong> is the Restaurant Manager. It manages all the resources and ensures the browser has what it needs to run.</li>
                <li><strong className="text-yellow-400">Browser:</strong> Your <strong className="text-white">browser (Chrome, Safari)</strong> is the physical restaurant itself—the dining room where you experience the service.</li>
                <li><strong className="text-green-400">Cache:</strong> The <strong className="text-white">cache</strong> is the waiter&apos;s short-term memory. If a website asset is requested often, the browser "caches" it to be faster. Clearing your cache is like asking the waiter to get fresh info from the kitchen.</li>
              </ul>
            </Callout>
            <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Why This Matters to You</p>
              <p>Have you ever had a website act strangely, and someone told you to "clear your cache"? It&apos;s the most common first step to fixing weird app behavior, forcing the browser to fetch the latest versions of all assets.</p>
            </Callout>
          </div>
        )
      },
       {
        id: '10-4',
        title: 'Open vs. Closed Source: The Philosophies',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>Behind every AI tool and model is a philosophy about how it should be shared with the world. This is the core difference between open and closed source.</p>
            <Callout icon={<UsersIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Open Source: The Community Cookbook</p>
              <p><strong className="text-white">The Philosophy:</strong> Knowledge should be shared. By allowing everyone to see the "recipe" (the code), the entire community can contribute, find bugs, and build upon it, leading to faster innovation for everyone. Models like Llama and Gemma are open source.</p>
               <p className="mt-2"><strong className="text-white">Necessity:</strong> This approach fosters transparency, trust, and allows researchers and smaller companies to build powerful new tools without starting from scratch.</p>
            </Callout>
             <Callout icon={<KeyIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Closed Source: The Secret Formula</p>
              <p><strong className="text-white">The Philosophy:</strong> Building the largest, safest, and most capable AI models is incredibly expensive and complex. By keeping the "recipe" proprietary, a company can ensure its quality, control its use to prevent misuse, and build a business to fund further research. Gemini and ChatGPT are closed source.</p>
              <p className="mt-2"><strong className="text-white">Necessity:</strong> This approach is often necessary to fund the massive data centers and research teams required for frontier models and to ensure a high level of safety and reliability for commercial products.</p>
            </Callout>
             <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Why This Matters to You</p>
              <p>Neither approach is inherently "better"—they serve different purposes. Understanding the philosophy helps you know the trade-offs. Open source offers flexibility and transparency, while closed source often provides cutting-edge power and ease of use.</p>
            </Callout>
          </div>
        )
      },
      {
        id: '10-5',
        title: 'Quiz: The AI\'s Workshop',
        type: 'quiz',
        estimatedTimeMinutes: 4,
        quiz: {
          questions: [
            {
              question: 'You want to run a powerful but small AI model directly on your laptop for privacy. What kind of model would you look for?',
              options: ['A large, closed-source model', 'An open-source model like Gemma or Llama', 'A model that only runs on CPUs', 'A model that requires a web browser'],
              correctAnswer: 'An open-source model like Gemma or Llama'
            },
            {
              question: 'Why do the most powerful AI models require you to access them over the internet?',
              options: ['Because they need to be updated daily', 'Because they run on massive, expensive GPU hardware in data centers', 'Because open-source models are not allowed on laptops', 'Because of browser cache limitations'],
              correctAnswer: 'Because they run on massive, expensive GPU hardware in data centers'
            },
            {
              question: 'A company wants to protect its huge investment and ensure the safety of its frontier AI model. Which approach are they most likely to take?',
              options: ['Open Source', 'Closed Source', 'Local-only', 'CPU-based'],
              correctAnswer: 'Closed Source'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'module-11',
    title: 'Module 11: Becoming an AI Curator',
    description: 'Find, test, and fine-tune models to create your own specialized AI.',
    lessons: [
       {
        id: '11-1',
        title: 'The AI Library: Hugging Face',
        type: 'content',
        estimatedTimeMinutes: 2,
        content: (
          <div className="space-y-4">
            <p>So where do all these open-source models live? The main community hub is a platform called <strong className="text-cyan-400">Hugging Face</strong>.</p>
            <Callout icon={<FaceSmileIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">The Library and Workshop for AI</p>
              <p>Think of Hugging Face as a massive, public library for AI. It contains:</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-cyan-400">Models:</strong> Thousands of pre-trained AI models (the "cookbooks") ready for you to download and use.</li>
                <li><strong className="text-yellow-400">Datasets:</strong> Huge collections of text and images (the "ingredients") used to train and fine-tune models.</li>
                <li><strong className="text-green-400">Spaces:</strong> A place to build and share live demos of your AI creations (the "tasting booths").</li>
              </ul>
            </Callout>
            <p>Hugging Face is the central meeting point for the open-source AI community. It&apos;s where researchers and developers share their work with the world.</p>
          </div>
        )
      },
      {
        id: '11-2',
        title: 'Fine-Tuning: A New Specialty',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>What if you find a great open-source model, but you need it to be an expert in a very specific topic, like legal contracts or medical terminology? You don&apos;t need to train a new AI from scratch. Instead, you can <strong className="text-cyan-400">Fine-Tune</strong> it.</p>
            <Callout icon={<AcademicCapIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Teaching an Expert a New Skill</p>
              <p>Think of a general-purpose AI model as a brilliant person who has read the entire internet. <strong className="text-white">Fine-tuning is like sending that brilliant person to medical school</strong>. You aren&apos;t teaching them how to read or write again; you are giving them specialized knowledge by having them study a specific dataset (like a collection of medical textbooks).</p>
            </Callout>
             <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Why This Matters to You</p>
              <p>No-code fine-tuning tools are emerging that let you do this without writing any code. You can upload your own documents or data, and the tool will handle the fine-tuning process for you, creating a personalized AI expert tailored to your exact needs.</p>
            </Callout>
          </div>
        )
      },
      {
        id: '11-3',
        title: 'Quiz: AI Curator',
        type: 'quiz',
        estimatedTimeMinutes: 3,
        quiz: {
          questions: [
            {
              question: 'What is the primary role of a platform like Hugging Face in the AI ecosystem?',
              options: ['It is a cloud hosting provider', 'It is the main hub for sharing and discovering open-source models and datasets', 'It is a company that only makes closed-source models', 'It is a type of GPU'],
              correctAnswer: 'It is the main hub for sharing and discovering open-source models and datasets'
            },
            {
              question: 'You have a great general AI model, but you need it to become an expert at writing marketing copy for your brand. What process would you use?',
              options: ['Buy a bigger GPU', 'Clear your browser cache', 'Fine-tune the model with examples of your brand\'s marketing material', 'Get a new domain name'],
              correctAnswer: 'Fine-tune the model with examples of your brand\'s marketing material'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'module-12',
    title: 'Module 12: Your Personal AI Workshop',
    description: 'Bring the power of AI home. Learn to run models directly on your own computer.',
    lessons: [
       {
        id: '12-1',
        title: 'Why Run AI on Your Own PC?',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>You&apos;ve learned how AI works in the cloud, but the final step in your empowerment is bringing it home. You can run powerful AI models directly on your own computer, and there are amazing reasons to do so.</p>
            <Callout icon={<HomeModernIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">Your Own Private Coffee Machine</p>
              <p>Think of using cloud AI (like Gemini) as going to a world-class cafe. They have the best, most powerful espresso machines in the world. But running AI locally is like having your own high-quality coffee machine at home.</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-cyan-400">Privacy:</strong> Your data (your prompts and conversations) never leaves your computer. It&apos;s 100% private.</li>
                <li><strong className="text-yellow-400">No Cost Per Use:</strong> Once you have the model, you can use it as much as you want without paying per token.</li>
                <li><strong className="text-green-400">Offline Access:</strong> It works even without an internet connection.</li>
              </ul>
            </Callout>
            <p>For this, you need a user-friendly tool to manage these local models. Let&apos;s meet the best one for beginners.</p>
          </div>
        )
      },
      {
        id: '12-2',
        title: 'Your Workshop Tool: LM Studio',
        type: 'content',
        estimatedTimeMinutes: 3,
        content: (
          <div className="space-y-4">
            <p>While tools like Ollama are powerful for developers, the easiest way to start with local AI is with an app called <strong className="text-cyan-400">LM Studio</strong>.</p>
            <Callout icon={<ComputerDesktopIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">An App Store for Local AI</p>
              <p>Think of LM Studio as an "App Store" or a "Game Library" (like Steam) for AI models. It’s a single, easy-to-use application that lets you:</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-cyan-400">Discover:</strong> Search for open-source models from Hugging Face directly within the app.</li>
                <li><strong className="text-yellow-400">Download:</strong> Easily download the model files to your computer.</li>
                <li><strong className="text-green-400">Chat:</strong> Have a conversation with the AI in a simple, clean interface.</li>
                <li><strong className="text-purple-400">Monitor:</strong> See how much of your computer&apos;s resources (CPU, GPU, RAM) the model is using.</li>
              </ul>
            </Callout>
            <p>It handles all the complexity for you, so you can focus on experimenting.</p>
          </div>
        )
      },
      {
        id: '12-3',
        title: 'Running Your First Local Model',
        type: 'content',
        estimatedTimeMinutes: 4,
        content: (
          <div className="space-y-4">
            <p>Once you have LM Studio, you can run your first local AI. Here’s the journey:</p>
            <Callout icon={<ArrowDownTrayIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">From Discovery to Conversation</p>
              <ul className="mt-2 space-y-3 list-decimal list-inside">
                <li><strong className="text-cyan-400">Find a Model:</strong> You&apos;ll search for a model. A good start is to look for models from trusted creators like Google (Gemma) or Meta (Llama).</li>
                <li><strong className="text-yellow-400">Pick a Version (Quantization):</strong> You&apos;ll see many files for one model, often with names like `Q4_K_M`. This is <strong className="text-white">Quantization</strong>.
                  <div className="text-sm p-3 mt-2 bg-slate-900/50 rounded-lg border border-slate-600">
                      <strong>Analogy:</strong> It&apos;s like choosing the quality of a song file. A huge, lossless WAV file is perfect quality. An MP3 is much smaller and sounds nearly identical. Quantization creates the "MP3 version" of an AI model. Smaller files use less RAM but might be slightly less precise. A `Q4` version is often a great balance.
                  </div>
                </li>
                <li><strong className="text-green-400">Load and Chat:</strong> Once downloaded, you load the model into the chat window and start your conversation!</li>
              </ul>
            </Callout>
            <Callout icon={<LightBulbIcon className="w-8 h-8" />}>
              <p className="font-semibold text-white">The Brain Knows, The Eyes See</p>
              <p>In LM Studio, you can open a resource monitor. When you load the model, you will physically <strong className="text-white">see</strong> your computer's RAM usage go up. When you ask a question, you will <strong className="text-white">see</strong> the CPU or GPU usage spike. This is it! This is the physical proof of everything you have learned. It&apos;s the "AI Workshop" you learned about, running right on your desk. You now understand what&apos;s happening behind the curtain.</p>
            </Callout>
          </div>
        )
      },
      {
        id: '12-4',
        title: 'Quiz: Your Personal AI Workshop',
        type: 'quiz',
        estimatedTimeMinutes: 3,
        quiz: {
          questions: [
            {
              question: 'What is a major benefit of running an AI model locally using a tool like LM Studio?',
              options: ['It is always more powerful than cloud models', 'It is better for creating images', 'Your data is 100% private and never leaves your computer', 'It does not use your computer\'s GPU'],
              correctAnswer: 'Your data is 100% private and never leaves your computer'
            },
            {
              question: 'The process of making a large model file smaller so it can fit in your computer\'s RAM is called...',
              options: ['Hosting', 'Quantization', 'API Calling', 'CSS Styling'],
              correctAnswer: 'Quantization'
            }
          ]
        }
      }
    ]
  }
];
