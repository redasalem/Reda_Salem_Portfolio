// Import the image
import chatbotImage from '../assets/images/chatbot.png';
//chatbot 
class ChatBot {
  constructor() {
    this.toggle = document.querySelector('.cb-chat-bot__toggle');
    this.box = document.querySelector('.cb-chat-bot__box');
    this.closeBtn = document.querySelector('.cb-chat-bot__close');
    this.input = document.querySelector('#cb-user-input');
    this.sendBtn = document.querySelector('.cb-chat-bot__send');
    this.messagesArea = document.querySelector('.cb-chat-bot__messages');
    
    this.initEventListeners();
  }

  initEventListeners() {
    // Toggle chat box
    this.toggle.addEventListener('click', () => {
      this.box.classList.add('active');
    });

    // Close chat box
    this.closeBtn.addEventListener('click', () => {
      this.box.classList.remove('active');
    });

    // Send message on button click
    this.sendBtn.addEventListener('click', () => {
      this.sendMessage();
    });

    // Send message on Enter key
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });
  }

  sendMessage() {
    const message = this.input.value.trim();
    if (message) {
      // Add user message
      this.addMessage(message, 'user');
      
      // Get bot response
      this.getBotResponse(message);
      
      // Clear input
      this.input.value = '';
    }
  }

  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('cb-chat-bot__message', `cb-chat-bot__message--${sender}`);
    
    if (sender === 'bot') {
       messageDiv.innerHTML = `
    <img src="${chatbotImage}" alt="Reda Bot" class="cb-chat-bot__avatar">
    <p>${text}</p>
  `;
    } else {
      messageDiv.innerHTML = `<p>${text}</p>`;
    }
    
    this.messagesArea.appendChild(messageDiv);
    this.messagesArea.scrollTop = this.messagesArea.scrollHeight;
  }

 getBotResponse(message) {
  const msg = message.toLowerCase().trim();

  const keywordsMap = [
    {
      keywords: ['project', 'projects', 'شغل', 'مشاريع', 'اعمالك','اعمال رضا'],
      replies: [
        'تقدر تشوف المشاريع في قسم Projects فوق ☝️',
        'Check out my latest work in the Projects section 🚀',
        'شوف شغلي في قسم المشاريع أو في GitHub 💼'
      ]
    },
    {
      keywords: ['skills', 'مهارات', 'مهارات رضا ايه', 'رضا بيعمل ايه', 'رضا بيعرف يعمل ايه'],
      replies: [
        'رضا بيشتغل بـ HTML, CSS, Sass, Bootstrap, JavaScript, React, Webpack ✅',
        'أنا شاطر في: React, Webpack, JavaScript, UI/UX Design 💻',
        'مهاراتي تشمل تطوير واجهات احترافية ومواقع متجاوبة 🌐',
         'بشتغل بـ HTML, CSS, Sass, Bootstrap, JavaScript, React, Webpack ✅',
      'My main skills: React, TypeScript, Webpack, and responsive UI design ⚒️',
      'بحب أركز على تفاصيل التصميم وتقديم تجربة مستخدم ممتازة 🌐'
      ]
    },
    {
      keywords: ['تواصل', 'اتواصل', 'contact', 'reach', 'email', 'ايميل',"نعم","ايوا","ايوه"],
      replies: [
        'تقدر تبعتلي من خلال قسم التواصل في الأسفل 📩',
        'ابعتلي رسالة من خلال الفورم أو LinkedIn 👋',
        'كل وسائل التواصل موجودة في الفوتر أو على GitHub و LinkedIn 🔗',
        'تقدر تتواصل معايا من خلال الفورم تحت أو LinkedIn 📩',
      'Reach me via the contact section or my LinkedIn profile 👋',
      'كل وسائل التواصل موجودة في الفوتر أو على GitHub و LinkedIn 🔗'
      ]
    },
    {
      keywords: ['hi', 'hello', 'hey', 'مرحبا', 'اهلا', 'ازيك', 'كيفك', 'كيف حالك','كيفك يا رضا','ازيك','عامل ايه','انت عامل اية'],
      replies: [
        'أهلاً وسهلاً! 👋 كيف أقدر أساعدك؟',
        'Hi! Ask me anything about Reda 😊',
        'مرحبًا! أنا هنا للرد على أي استفسار يخص رضا 👨‍💻',
         'أهلاً وسهلاً بيك! 👋 جاهز أجاوبك على أي سؤال 😉',
      'Hi there! Feel free to ask me anything 🔍',
      'مرحبًا! إنت بتسأل وأنا أجاوب بكل حماس 💬'
      ]
    },
    {
  keywords: ['مين رضا', 'مين رضا سالم', 'who is reda', 'about reda', 'مين انت', 'who are you','انت مين','من تكون','من رضا','من رضا سالم','ماشى هات','قولى',"انت اسمك ايه","انت مين","انت منين","انت منين يا رضا","انت منين يا رضا سالم",'تعرف رضا','عارف رضا'],
  replies: [
    'رضا سالم هو مطور واجهات أمامية شغوف، بيحب يبني مواقع تفاعلية وجميلة باستخدام تقنيات حديثة 👨‍💻',
    'Reda Salem is a creative frontend developer with strong skills in modern web development 🛠️',
    'أنا مساعد الذكاء الاصطناعي الخاص برضا سالم – وهقولك كل حاجة تحب تعرفها عنه 🤖',
    'رضا بيهتم بأدق التفاصيل في تصميم الواجهات وتجربة المستخدم، ودايمًا بيطور من نفسه 💡',
    'Reda is passionate about clean code, smart UI design, and building real-world digital experiences ✨',
    'رضا سالم مطور واجهات أمامية، شغوف ببناء تطبيقات ويب حديثة وفعّالة 👨‍💻',
      'Reda Salem is a passionate frontend developer who loves clean code & elegant UI ✨',
      'أنا بوت مساعد من تصميم رضا، وسعيد أساعدك تعرف عنه أكتر 🤖'
  ]
},
{
  keywords: ['بتشتغل ايه', 'شغلك', 'وظيفتك', 'what do you do', 'job',' انت وظيفتك ايه'],
  replies: [
    'أنا مطور واجهات أمامية (Frontend Developer) بشتغل بـ React وJavaScript وتقنيات حديثة 💻',
    'I build modern, responsive, and fast web applications using React, Sass, Webpack, and more ⚙️',
    'وظيفتي تصميم وتطوير واجهات المستخدم اللي بتكون مريحة وسريعة وأنيقة 🌐'
  ]
},
{
  keywords: ['مميزات رضا', 'ليه تختاره', 'why reda', 'why should i hire you','هل رضا شاطر',"اريد انشاء موقع","ايه رايك فى رضا",'اية رايك فى رضا'],
  replies: [
    'رضا دقيق، سريع التعلّم، ملتزم، وبيفهم المطلوب قبل ما يتنفذ 💯',
    'Reda has a strong eye for design and a developer’s mind for performance 🚀',
    'بيجمع بين المهارة التقنية والذوق التصميمي وده نادر تلاقيه 🔥'
  ]
},
{
  keywords: ['صباح الخير', 'مساء الخير', 'good morning', 'good evening'],
  replies: [
     'اهلا بك صباح الفل او مساء الفل على حسب وقتك اجمل التحياتى لك'
  ]
},
{
  keywords: ['بتحب القهوة', 'جعان', 'زهقان', 'قهوة'],
  replies: [
    'أنا بوت بس بحب ريحة القهوة ☕',
    'لو جعان، أنصحك بموزة وشوية كود 😂',
    'زهقان؟ تعالى شوف مشاريع رضا هتتحمس فورًا 💻'
  ]
},
{
  keywords: ['تعبان', 'محبط', 'زهقت', 'مفيش شغل', 'فقدت الأمل'],
  replies: [
    'أنا مؤمن بيك زي رضا! كل مبرمج ناجح مر بلحظات كده... بس كمل 👊',
    'متوقفش دلوقتي! إنت قربت… والنجاح مش للي بيبدأ، النجاح للي بيكمل 💥',
    'الهدوء قبل العاصفة… وشغلك الجاي هو اللي هيخلي كل الناس تبصلك 👁️'
  ]
},
{
  keywords: ['بتفهم', 'ذكى', 'انت جامد','انت رائع',"انت عظيم"],
  replies: [
    'أنا بتعلّم من رضا، وده كفاية جدًا إني أكون جامد 😎',
    'أنا بوت بس دماغي مليانة JS و React 😂',
    'شكلك عايز تتحداني في كود؟ جربني بقى 💥'
  ]
},
{
  keywords: ['مين اللى صممك', 'مين اللى برمجك', 'انت مين اللى مبرمجك','من اللى عملك','who made you','who programmed you', 'who created you','مين طورك','who developed you','هل رضا من صممك','هل رضا من برمجك','هل رضا من عملك','هل انت من صنع رضا','هل انت من ملك رضا','مين ملكك','مين مالكك','مين صممك',"مين مصممك"],
  replies: [
    'أنا من تطوير رضا سالم، مطور واجهات أمامية محترف ',
    'رضا هو اللي صمم وبرمجني عشان أساعدكم في أي استفسار ',
    'أنا بوت ذكي من صنع رضا، وهو دايمًا بيطوّرني عشان أكون أفضل',
    'رضا هو اللي عملني عشان أكون مساعدك الشخصي في كل ما يخص البرمجة والتطوير',
    'أنا من تطوير رضا سالم، وهو دايمًا بيطوّرني عشان أكون أفضل مساعد لك في كل ما يخص البرمجة والتطوير',
      'رضا هو العقل المبدع اللي ورايا 💡'
  ]
}
  ,
{
  keywords: ['خبرة', 'سنين الخبرة', 'بتشتغل بقالك قد ايه', 'كم سنة خبرة', 'career'],
  replies: [
    'بدأت رحلتي في البرمجة من سنين، واشتغلت على مشاريع متنوعة زودت خبرتي بشكل كبير 🧠',
    'خبرتي جاية من شغل فعلي وتطبيق عملي لمفاهيم حديثة، مش بس كورسات ✌️',
    'I have hands-on experience with real projects using modern tech stack 💻'
  ]
  
}
  ,
  {
      keywords: ['هدفك', 'طموحك', 'بتحلم بإيه', 'ايه حلمك', 'شغفك', 'passion'],
  replies: [
    'هدفي أبني حلول رقمية تخدم الناس وتكون تجربة المستخدم فيها ممتازة 🧭',
    'My passion is building elegant UIs that solve real problems with clean code 💙',
    'بحب أتعلم كل يوم حاجة جديدة وأطور نفسي بشكل مستمر 🔁'
  ]

  } 
  ,
  {
    keywords: ['منين', 'انت منين', 'بتكلم عربي', 'بتفهمني', 'بلدك'],
  replies: [
    'أنا من مصر، وبحب أتكلم بلغتي وأبرمج بلغات العالم 😄',
    'أكيد بتكلم عربي وبفهمك، وبتعامل مع لغات البرمجة كمان 👨‍💻',
    'Yes I understand both Arabic & English fluently 🧠'
  ]

  }
,
{
  keywords: ['تنصحني', 'رايك', 'ايه النصيحة', 'help me', 'مش عارف أبدأ'],
  replies: [
    'ابدأ بالأساسيات واتقنها... السر مش في الكمية، السر في الفهم 👌',
    'تعلم كل يوم ولو حاجة بسيطة، ومع الوقت هتتفاجئ بمستواك 💡',
    'ابدأ وخطّط، وبعدها امشي خطوة خطوة. النجاح مش بيجي فجأة 🚶‍♂️➡️🏆'
  ]
}
  ,
  {
     keywords: ['هزار','نكتة', 'اضحكني', 'قول حاجة تضحك'],
  replies: [
    'ليه الجافاسكربت اترفد؟ عشان بيعمل hoisting لكل حاجة حتى المشاكل 😅',
    'مرة متغير دخل على مطور وقاله: "scope عليا بقى!" 😂',
    'أنا بوت بس دمي خفيف... أو على الأقل الكود بيضحك 🤖💥'
  ]

  }
  ,
  {
     keywords: ['اتعلمت ايه', 'بتذاكر ايه', 'تطورك', 'بتذاكر ايه الأيام دي'],
  replies: [
    'الوقت الحالي بشتغل على تقوية الـ TypeScript وNext.js 📚',
    'كل يوم بحاول أطور نفسي سواء في React أو تحسين الأداء وSEO 🔍',
    'أهم حاجة عندي حالياً إني أكون مطور جاهز لسوق العمل القوي 💪'
  ]

  }
  ]


  let found = false;

  for (const group of keywordsMap) {
    for (const keyword of group.keywords) {
      if (msg.includes(keyword)) {
        const randomReply = group.replies[Math.floor(Math.random() * group.replies.length)];
        this.addMessage(randomReply, 'bot');
        found = true;
        break;
      }
    }
    if (found) break;
  }

  // الرد الافتراضي
  if (!found) {
    const defaultReplies = [
      'ممكن توضح سؤالك؟ أنا هنا أساعدك 😊',
      'معذرة، مش فاهم قصدك بالضبط 😅',
      'جرب تسألني عن المشاريع أو المهارات أو التواصل! 💡',
      "اتريد التواصل مع رضا اومعرفة اى شئ عنه",
      "ماذا  تريد بالظبط وسوف اساعدك"
    ];
    const fallback = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
    this.addMessage(fallback, 'bot');
  }
}
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ChatBot();
});