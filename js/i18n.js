/* ============================================
   i18n — Bilingual ES / EN Translation Engine
   ============================================ */

const I18N = (() => {

  const translations = {

    es: {
      /* --- Nav --- */
      'nav.home': 'Inicio',
      'nav.about': 'Perfil',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.education': 'Formación',
      'nav.resume': 'Resumen',
      'nav.contact': 'Contacto',

      /* --- Hero --- */
      'hero.greeting': 'Hola, soy',
      'hero.cta': 'Contáctame',
      'hero.cv': 'Descargar CV',

      /* --- About --- */
      'about.heading': 'Sobre Mí',
      'about.name': 'Nombre:',
      'about.title': 'Título:',
      'about.titleVal': 'Ing. en Sistemas',
      'about.location': 'Ubicación:',
      'about.phone': 'Teléfono:',
      'about.skills': 'Competencias Técnicas',
      'skill.db': 'Diseño de Bases de Datos',
      'skill.pm': 'Gerencia de Proyectos',
      'about.p1': 'Senior Software Developer con más de <strong>35 años de experiencia profesional</strong>, incluyendo 14+ años en el sector <strong>healthtech</strong> diseñando y manteniendo plataformas de Historial Médico Electrónico (EMR) utilizadas por miles de profesionales clínicos en Estados Unidos.',
      'about.p2': 'Actualmente arquitectando <strong>microservicios basados en FHIR con GraphQL</strong>, liderando integraciones con sistemas de terceros y automatizando pipelines de datos clínicos con PowerShell y SQL Server en <strong>Modernizing Medicine</strong>. Experiencia profunda en .NET/C#, arquitectura de bases de datos clínicas e integración HL7/FHIR.',
      'about.p3': 'A lo largo de mi carrera he liderado equipos de desarrollo, gestionado proyectos de gran envergadura para clientes como <strong>PDVSA, CITGO, Banco Central de Venezuela y Modernizing Medicine</strong>, y he sido responsable del ciclo completo de desarrollo — desde la planificación y diseño hasta la implementación final.',
      'about.p4': 'Actualmente resido en Chile, donde trabajo 100% remoto con EE.UU. Inglés profesional nivel C1, con comunicación diaria en entorno corporativo. Foco permanente en interoperabilidad, cumplimiento HIPAA e impacto medible en flujos de trabajo de salud.',

      /* --- Stats --- */
      'stats.years': 'AÑOS DE EXPERIENCIA',
      'stats.users': 'USUARIOS IMPACTADOS',
      'stats.companies': 'EMPRESAS',
      'stats.degrees': 'TÍTULOS ACADÉMICOS',

      /* --- Experience --- */
      'exp.heading': 'Experiencia Profesional',
      'exp.subtitle': 'Más de tres décadas construyendo soluciones tecnológicas de alto impacto.',
      'exp.date1': 'Diciembre 2017 — Presente',
      'exp.title1': 'Senior Software Engineer',
      'exp.desc1': 'Arquitectura y desarrollo de microservicios basados en <strong>FHIR con GraphQL</strong> para la plataforma EMR <strong>gGastro</strong>, utilizada por más de 14.000 especialistas en EE.UU. Integración de plataformas clínicas de terceros (Klara, mmPay) con REST APIs y FHIR. Automatización de pipelines de datos con <strong>PowerShell y SQL Server</strong>. Cumplimiento HIPAA en todas las etapas.',
      'exp.date2': 'Junio 2010 — Diciembre 2017',
      'exp.title2': 'Software Engineer',
      'exp.desc2': 'Desarrollo de funcionalidades del sistema EMR <strong>gCare</strong> orientado a la gestión de historias clínicas electrónicas, usando <strong>C#, .NET y PL-SQL</strong> sobre SQL Server. Optimización de consultas SQL en bases de datos clínicas de alto volumen, mejorando el rendimiento de reportes en un <strong>40%</strong>.',
      'exp.date3': 'Abril 2006 — Junio 2010',
      'exp.title3': 'Project Manager / Tech Lead',
      'exp.desc3': 'Liderazgo de un equipo de <strong>6 desarrolladores</strong> en el ciclo completo de desarrollo. Diseño de modelos de bases de datos relacionales para aplicaciones clínicas e interfaces de usuario en .NET/C#. Reducción del tiempo de entrega de funcionalidades en un <strong>25%</strong> mediante estandarización de procesos y adopción de metodologías ágiles.',
      'exp.date4': 'Agosto 2000 — Abril 2006',
      'exp.title4': 'Development Manager',
      'exp.desc4a': 'Gestión del desarrollo de las plataformas <strong>Strategos, Satec y Vernier</strong>, sistemas empresariales de planificación estratégica y control de gestión. Consultor señor para el <strong>Banco Central de Venezuela</strong> y Fondafa.',
      'exp.desc4b': 'Arquitectura de soluciones web con <strong>Java (JSP, J2EE, Hibernate, Struts)</strong> con backends en SQL Server, Oracle y PostgreSQL. Productos: <strong>Strategos®</strong> (Balanced Scorecard — +1000 licencias), <strong>RADAR®</strong>.',
      'exp.desc4c': 'Clientes: PDVSA, CITGO, Electricidad de Caracas, ENELBAR, Royal &amp; Sunalliance, Movilnet, Ministerio de Defensa, entre otros.',
      'exp.date5': 'Diciembre 1996 — Agosto 2000',
      'exp.title5': 'Analista de Sistemas',
      'exp.desc5': 'Desarrollo de sistemas de soporte de decisiones empleando técnicas <strong>Delphi, Bayesiano y AHP</strong>. Desarrollo del sistema DataWarehouse con herramientas de Oracle (Express Objects, Administrador, Analyser) y PL-SQL.',
      'exp.date6': 'Febrero 1994 — Noviembre 1996',
      'exp.title6': 'Analista Programador',
      'exp.desc6': 'Supervisión de personal de desarrollo. Desarrollo de sistemas administrativos y financieros con <strong>Visual Basic, Access y Oracle PL-SQL</strong>.',
      'exp.date7': 'Abril 1992 — Enero 1994',
      'exp.title7': 'Analista Programador',
      'exp.desc7': 'Desarrollo de sistemas para organismos bancarios. Líder de proyecto para la automatización de registro del <strong>Banco Provincial</strong>.',
      'exp.date8': 'Abril 1990 — Febrero 1992',
      'exp.title8': 'Analista Programador',
      'exp.desc8': 'Desarrollo de sistemas administrativos y financieros utilizando <strong>Unís, dBase, Clipper, Basic y FoxPro</strong>.',
      'tag.management': 'Gestión',
      'tag.leadership': 'Liderazgo',

      /* --- Education --- */
      'edu.heading': 'Formación Académica',
      'edu.subtitle': 'Preparación continua como base del crecimiento profesional.',
      'edu.deg1': 'Ingeniero en Sistemas',
      'edu.year1': 'Egresado 2010',
      'edu.deg2': 'Licenciado en Administración (Mención Informática)',
      'edu.year2': 'Egresado 2001',
      'edu.deg3': 'Postgrado: Gerencia en Tecnología',
      'edu.year3': 'Egresado 1998',
      'edu.deg4': 'Técnico Superior en Informática',
      'edu.year4': 'Egresado 1993',
      'edu.techTitle': 'Tecnologías & Herramientas',

      /* --- Certifications --- */
      'cert.heading': 'Certificaciones & Formación Continua',
      'cert.subtitle': 'Aprendizaje permanente para mantenerme al día con las tecnologías más demandadas.',
      'cert.1': 'Everyday AI: Concepts & Applications',
      'cert.1date': 'LinkedIn Learning — Mar 2026',
      'cert.2': 'MongoDB Essential Training',
      'cert.2date': 'LinkedIn Learning — Abr 2024',
      'cert.3': 'Microservices: Design Patterns',
      'cert.3date': 'LinkedIn Learning — May 2022',
      'cert.4': 'Microservices Foundations',
      'cert.4date': 'LinkedIn Learning — May 2022',
      'cert.5': 'SQL Server 2012: Designing Database Solutions',
      'cert.5date': 'LinkedIn Learning — Feb 2021',
      'cert.6': 'C# Best Practices for Developers',
      'cert.6date': 'LinkedIn Learning — Ago 2020',
      'cert.7': 'AWS Technical Essentials',
      'cert.7date': 'Amazon Web Services (AWS)',
      'cert.8': 'Oracle PL-SQL Database Programming 7',
      'cert.8date': 'Oracle Venezuela — 1993',

      /* --- Languages --- */
      'lang.heading': 'Idiomas',
      'lang.es': 'Español',
      'lang.esLevel': 'Nativo',
      'lang.en': 'Inglés',
      'lang.enLevel': 'Nivel profesional C1 — uso diario en entorno corporativo remoto con EE.UU.',

      /* --- Contact --- */
      'contact.formTitle': 'Envíame un Mensaje',
      'contact.phName': 'Tu Nombre',
      'contact.phEmail': 'Tu Email',
      'contact.phSubject': 'Asunto',
      'contact.phMessage': 'Mensaje',
      'contact.send': 'Enviar Mensaje',
      'contact.sending': 'Enviando...',
      'contact.sent': '¡Enviado!',
      'contact.error': 'Error al enviar',
      'contact.infoTitle': 'Información de Contacto',
      'contact.intro': 'Si deseas conversar sobre desarrollo de software, arquitectura de datos, consultoría técnica o cualquier oportunidad de colaboración, no dudes en contactarme.',

      /* --- Key Projects --- */
      'proj.heading': 'Proyectos Clave',
      'proj.subtitle': 'Proyectos de alto impacto que demuestran experiencia en arquitectura, liderazgo técnico y entrega de soluciones en healthtech.',
      'proj.1title': 'gPM — Módulo de Gestión de Consultorios',
      'proj.1metric': '+8 años como desarrollador principal',
      'proj.1desc': 'Desarrollador y mantenedor principal de gPM (Practice Management), uno de los módulos core de la plataforma EMR gGastro, que gestiona agendamiento, facturación y flujos de trabajo clínicos para miles de consultorios especializados en EE.UU.',
      'proj.2title': 'Modernización a Microservicios',
      'proj.2metric': 'Entregado en 6 meses',
      'proj.2desc': 'Lideré la migración completa de servicios monolíticos legados hacia una arquitectura moderna de microservicios con FHIR, GraphQL y REST APIs, mejorando significativamente la escalabilidad y mantenibilidad del sistema.',
      'proj.3title': 'Módulo de Estados de Cuenta',
      'proj.3metric': 'Ciclo completo de vida',
      'proj.3desc': 'Desarrollé y desplegué el módulo de Statements desde cero, gestionando el rollout completo hacia todos los consultorios clientes, incluyendo diseño, pruebas y despliegue en producción en toda la base de clientes.',
      'proj.4title': 'Integración de Plataformas Clínicas',
      'proj.4metric': '+20 endpoints FHIR gestionados',
      'proj.4desc': 'Lideré la integración end-to-end de Klara Balance (comunicación con pacientes) y mmPay (procesamiento de pagos) a través de arquitectura de microservicios con FHIR, REST APIs y GraphQL, habilitando el intercambio de datos en todo el ecosistema clínico.',

      /* --- Blog --- */
      'nav.blog': 'Blog',
      'blog.heading': 'Blog',
      'blog.subtitle': 'Reflexiones, lecciones y experiencias de más de tres décadas en healthtech y desarrollo de software.',
      'blog.readMore': 'Leer más <i class="bi bi-arrow-right"></i>',
      'blog.tag.career': 'Carrera',
      'blog.tag.tech': 'Técnico',
      'blog.tag.leadership': 'Liderazgo',
      'blog.date1': '5 Mayo, 2026',
      'blog.title1': '10 Lecciones que Aprendí en 35 Años de Desarrollo de Software',
      'blog.excerpt1': 'De dBase a microservicios FHIR, de waterfalls a agile — las verdades que solo el tiempo te enseña en esta industria.',
      'blog.date2': '28 Abril, 2026',
      'blog.title2': 'Oracle vs SQL Server vs PostgreSQL: Mi Experiencia Real con los Tres',
      'blog.excerpt2': 'Después de trabajar profesionalmente con estos tres motores, comparto en qué destaca cada uno y cuándo elegir cada opción.',
      'blog.date3': '20 Abril, 2026',
      'blog.title3': 'De Programador a Gerente: Cómo Liderar sin Perder lo Técnico',
      'blog.excerpt3': 'La transición de escribir código a dirigir equipos es un camino lleno de errores. Aquí comparto cómo lo navegué.',

      /* --- Resume Page --- */
      'resume.back': 'Volver al Inicio',
      'resume.pageTitle': 'Resumen Curricular',
      'resume.pageSubtitle': 'Más de 35 años de experiencia en ingeniería de software, healthtech y liderazgo técnico.',
      'resume.download': 'Descargar CV',
      'resume.openTab': 'Abrir en nueva pestaña',
      'resume.fallbackTitle': 'No se puede mostrar el PDF en el navegador',
      'resume.fallbackText': 'Puedes descargar el archivo directamente o abrirlo en una nueva pestaña.',
      'resume.tip': '<i class="bi bi-info-circle"></i> La vista PDF funciona mejor en escritorio. En móvil, usa el botón de descarga.',

      /* --- Footer --- */
      'footer.rights': 'Todos los derechos reservados.',

      /* --- Meta --- */
      '_pageTitle': 'Kerwin Arias — Senior Software Developer | Healthtech',
      '_typedWords': ['Senior Software Developer', 'Healthtech & EMR', 'FHIR / GraphQL / .NET', 'Arquitecto de Datos'],
      '_cvFile': 'assets/docs/CV-Kerwin-Arias-ES.pdf'
    },

    en: {
      /* --- Nav --- */
      'nav.home': 'Home',
      'nav.about': 'Profile',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.resume': 'Resume',
      'nav.contact': 'Contact',

      /* --- Hero --- */
      'hero.greeting': 'Hello, I\'m',
      'hero.cta': 'Contact Me',
      'hero.cv': 'Download CV',

      /* --- About --- */
      'about.heading': 'About Me',
      'about.name': 'Name:',
      'about.title': 'Degree:',
      'about.titleVal': 'B.S. Systems Engineering',
      'about.location': 'Location:',
      'about.phone': 'Phone:',
      'about.skills': 'Technical Skills',
      'skill.db': 'Database Design',
      'skill.pm': 'Project Management',
      'about.p1': 'Senior Software Developer with over <strong>35 years of experience</strong>, including 14+ years in the <strong>healthtech</strong> sector building and maintaining Electronic Medical Record (EMR) platforms used by thousands of clinical professionals across the United States.',
      'about.p2': 'Currently architecting <strong>FHIR-based microservices with GraphQL</strong>, leading third-party system integrations, and automating clinical data pipelines using PowerShell and SQL Server at <strong>Modernizing Medicine</strong>. Deep expertise in .NET/C#, clinical database architecture, and HL7/FHIR integration.',
      'about.p3': 'Throughout my career I have led development teams, managed large-scale projects for clients such as <strong>PDVSA, CITGO, Central Bank of Venezuela, and Modernizing Medicine</strong>, and been responsible for the full development cycle — from planning and design to final deployment.',
      'about.p4': 'Currently based in Chile, working 100% remote with U.S. teams. Fluent English (C1) with daily professional communication. Consistent focus on interoperability, HIPAA compliance, and measurable impact on healthcare workflows.',

      /* --- Stats --- */
      'stats.years': 'YEARS OF EXPERIENCE',
      'stats.users': 'USERS IMPACTED',
      'stats.companies': 'COMPANIES',
      'stats.degrees': 'ACADEMIC DEGREES',

      /* --- Experience --- */
      'exp.heading': 'Professional Experience',
      'exp.subtitle': 'Over three decades building high-impact technology solutions.',
      'exp.date1': 'December 2017 — Present',
      'exp.title1': 'Senior Software Engineer',
      'exp.desc1': 'Architect and develop <strong>FHIR-based microservices using GraphQL</strong> for the <strong>gGastro</strong> EMR platform, used by 14,000+ specialists across the U.S. Led end-to-end integration of third-party clinical platforms (Klara, mmPay) with REST APIs and FHIR. Automated clinical data pipelines with <strong>PowerShell and SQL Server</strong>. HIPAA compliance throughout all stages.',
      'exp.date2': 'June 2010 — December 2017',
      'exp.title2': 'Software Engineer',
      'exp.desc2': 'Developed features for the <strong>gCare</strong> EMR system focused on electronic health record management using <strong>C#, .NET, and PL-SQL</strong> on SQL Server. Optimized complex SQL queries on high-volume clinical databases, improving critical report performance by <strong>40%</strong>.',
      'exp.date3': 'April 2006 — June 2010',
      'exp.title3': 'Project Manager / Tech Lead',
      'exp.desc3': 'Led a team of <strong>6 developers</strong> across the full application development lifecycle. Designed relational database models for clinical applications and user interfaces in .NET/C#. Reduced feature delivery time by <strong>25%</strong> through process standardization and adoption of agile methodologies.',
      'exp.date4': 'August 2000 — April 2006',
      'exp.title4': 'Development Manager',
      'exp.desc4a': 'Managed development of <strong>Strategos, Satec, and Vernier</strong> — enterprise strategic planning and management control platforms. Senior consultant for the <strong>Central Bank of Venezuela</strong> and Fondafa.',
      'exp.desc4b': 'Architected web solutions using <strong>Java (JSP, J2EE, Hibernate, Struts)</strong> with SQL Server, Oracle, and PostgreSQL backends. Products: <strong>Strategos®</strong> (Balanced Scorecard — 1000+ licenses), <strong>RADAR®</strong>.',
      'exp.desc4c': 'Clients: PDVSA, CITGO, Electricidad de Caracas, ENELBAR, Royal &amp; Sunalliance, Movilnet, Ministry of Defense, among others.',
      'exp.date5': 'December 1996 — August 2000',
      'exp.title5': 'Systems Analyst',
      'exp.desc5': 'Development of decision-support systems using <strong>Delphi, Bayesian, and AHP</strong> techniques. Development of the DataWarehouse system with Oracle tools (Express Objects, Administrator, Analyser) and PL-SQL.',
      'exp.date6': 'February 1994 — November 1996',
      'exp.title6': 'Programmer Analyst',
      'exp.desc6': 'Development staff supervision. Development of administrative and financial systems with <strong>Visual Basic, Access, and Oracle PL-SQL</strong>.',
      'exp.date7': 'April 1992 — January 1994',
      'exp.title7': 'Programmer Analyst',
      'exp.desc7': 'Development of systems for banking institutions. Project leader for the registration automation of <strong>Banco Provincial</strong>.',
      'exp.date8': 'April 1990 — February 1992',
      'exp.title8': 'Programmer Analyst',
      'exp.desc8': 'Development of administrative and financial systems using <strong>Unís, dBase, Clipper, Basic, and FoxPro</strong>.',
      'tag.management': 'Management',
      'tag.leadership': 'Leadership',

      /* --- Education --- */
      'edu.heading': 'Education',
      'edu.subtitle': 'Continuous learning as a foundation for professional growth.',
      'edu.deg1': 'B.S. in Systems Engineering',
      'edu.year1': 'Graduated 2010',
      'edu.deg2': 'B.S. in Business Administration (IT Concentration)',
      'edu.year2': 'Graduated 2001',
      'edu.deg3': 'Postgraduate: Technology Management',
      'edu.year3': 'Graduated 1998',
      'edu.deg4': 'Associate Degree in Computer Science',
      'edu.year4': 'Graduated 1993',
      'edu.techTitle': 'Technologies & Tools',

      /* --- Certifications --- */
      'cert.heading': 'Certifications & Continuing Education',
      'cert.subtitle': 'Continuous learning to stay current with the most in-demand technologies.',
      'cert.1': 'Everyday AI: Concepts & Applications',
      'cert.1date': 'LinkedIn Learning — Mar 2026',
      'cert.2': 'MongoDB Essential Training',
      'cert.2date': 'LinkedIn Learning — Apr 2024',
      'cert.3': 'Microservices: Design Patterns',
      'cert.3date': 'LinkedIn Learning — May 2022',
      'cert.4': 'Microservices Foundations',
      'cert.4date': 'LinkedIn Learning — May 2022',
      'cert.5': 'SQL Server 2012: Designing Database Solutions',
      'cert.5date': 'LinkedIn Learning — Feb 2021',
      'cert.6': 'C# Best Practices for Developers',
      'cert.6date': 'LinkedIn Learning — Aug 2020',
      'cert.7': 'AWS Technical Essentials',
      'cert.7date': 'Amazon Web Services (AWS)',
      'cert.8': 'Oracle PL-SQL Database Programming 7',
      'cert.8date': 'Oracle Venezuela — 1993',

      /* --- Languages --- */
      'lang.heading': 'Languages',
      'lang.es': 'Spanish',
      'lang.esLevel': 'Native',
      'lang.en': 'English',
      'lang.enLevel': 'Professional working proficiency (C1) — daily use in U.S.-based corporate environment.',

      /* --- Contact --- */
      'contact.formTitle': 'Send Me a Message',
      'contact.phName': 'Your Name',
      'contact.phEmail': 'Your Email',
      'contact.phSubject': 'Subject',
      'contact.phMessage': 'Message',
      'contact.send': 'Send Message',
      'contact.sending': 'Sending...',
      'contact.sent': 'Sent!',
      'contact.error': 'Failed to send',
      'contact.infoTitle': 'Contact Information',
      'contact.intro': 'Whether you want to discuss software development, data architecture, technical consulting, or any collaboration opportunity, feel free to reach out.',

      /* --- Key Projects --- */
      'proj.heading': 'Key Projects',
      'proj.subtitle': 'High-impact projects demonstrating expertise in architecture, technical leadership, and healthtech solution delivery.',
      'proj.1title': 'gPM — Practice Management Module',
      'proj.1metric': '8+ years as lead developer',
      'proj.1desc': 'Primary developer and maintainer of gPM (Practice Management), one of the core modules of the gGastro EMR platform, handling scheduling, billing, and clinical workflow management for thousands of specialist practices across the U.S.',
      'proj.2title': 'Microservices Modernization',
      'proj.2metric': 'Delivered in 6 months',
      'proj.2desc': 'Led the full migration of legacy monolithic services to a modern microservices architecture using FHIR, GraphQL, and REST APIs, significantly improving system scalability and maintainability.',
      'proj.3title': 'Statements Module',
      'proj.3metric': 'Full lifecycle',
      'proj.3desc': 'Developed and deployed the Statements module from scratch, managing the complete rollout to all client practices — including design, testing, and production deployment across the full customer base.',
      'proj.4title': 'Clinical Platform Integrations',
      'proj.4metric': '20+ FHIR endpoints managed',
      'proj.4desc': 'Led end-to-end integration of Klara Balance (patient communication) and mmPay (payment processing) through a microservices architecture with FHIR, REST APIs, and GraphQL, enabling seamless data exchange across the full care ecosystem.',

      /* --- Blog --- */
      'nav.blog': 'Blog',
      'blog.heading': 'Blog',
      'blog.subtitle': 'Insights, lessons, and experiences from over three decades in healthtech and software development.',
      'blog.readMore': 'Read more <i class="bi bi-arrow-right"></i>',
      'blog.tag.career': 'Career',
      'blog.tag.tech': 'Technical',
      'blog.tag.leadership': 'Leadership',
      'blog.date1': 'May 5, 2026',
      'blog.title1': '10 Lessons I Learned in 35 Years of Software Development',
      'blog.excerpt1': 'From dBase to FHIR microservices, from waterfalls to agile — the truths only time teaches you in this industry.',
      'blog.date2': 'April 28, 2026',
      'blog.title2': 'Oracle vs SQL Server vs PostgreSQL: My Real Experience with All Three',
      'blog.excerpt2': 'After working professionally with these three engines, I share where each excels and when to choose each option.',
      'blog.date3': 'April 20, 2026',
      'blog.title3': 'From Programmer to Manager: How to Lead Without Losing the Technical Edge',
      'blog.excerpt3': 'The transition from writing code to leading teams is a path full of mistakes. Here\'s how I navigated it.',

      /* --- Resume Page --- */
      'resume.back': 'Back to Home',
      'resume.pageTitle': 'Resume',
      'resume.pageSubtitle': 'Over 35 years of experience in software engineering, healthtech, and technical leadership.',
      'resume.download': 'Download CV',
      'resume.openTab': 'Open in new tab',
      'resume.fallbackTitle': 'Cannot display PDF in browser',
      'resume.fallbackText': 'You can download the file directly or open it in a new tab.',
      'resume.tip': '<i class="bi bi-info-circle"></i> PDF view works best on desktop. On mobile, use the download button.',

      /* --- Footer --- */
      'footer.rights': 'All rights reserved.',

      /* --- Meta --- */
      '_pageTitle': 'Kerwin Arias — Senior Software Developer | Healthtech',
      '_typedWords': ['Senior Software Developer', 'Healthtech & EMR', 'FHIR / GraphQL / .NET', 'Data Architect'],
      '_cvFile': 'assets/docs/CV-Kerwin-Arias-EN.pdf'
    }
  };

  let currentLang = localStorage.getItem('lang') || 'es';

  function get(key) {
    return translations[currentLang][key] || translations.es[key] || key;
  }

  function getLang() {
    return currentLang;
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    updateToggleUI();
    updateCvLink();
    updatePageMeta();

    // Dispatch event so main.js can react (typed words, form, etc.)
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  }

  function toggleLang() {
    setLang(currentLang === 'es' ? 'en' : 'es');
  }

  function applyTranslations() {
    // Text content via data-i18n (supports innerHTML for <strong> tags)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = get(key);
      if (val.includes('<')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Placeholders via data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', get(key));
    });

    // Update html lang attribute
    document.documentElement.lang = currentLang;
  }

  function updateToggleUI() {
    const esBtn = document.getElementById('langOptEs');
    const enBtn = document.getElementById('langOptEn');
    if (esBtn && enBtn) {
      esBtn.classList.toggle('active', currentLang === 'es');
      enBtn.classList.toggle('active', currentLang === 'en');
      esBtn.setAttribute('aria-pressed', currentLang === 'es');
      enBtn.setAttribute('aria-pressed', currentLang === 'en');
    }
  }

  function updateCvLink() {
    const btn = document.getElementById('cvDownloadBtn');
    if (btn) {
      btn.setAttribute('href', get('_cvFile'));
    }
  }

  function updatePageMeta() {
    document.title = get('_pageTitle');
  }

  // Initialize on load
  function init() {
    // Bind both language buttons
    const esBtn = document.getElementById('langOptEs');
    const enBtn = document.getElementById('langOptEn');
    if (esBtn) esBtn.addEventListener('click', () => setLang('es'));
    if (enBtn) enBtn.addEventListener('click', () => setLang('en'));

    // Apply stored language
    applyTranslations();
    updateToggleUI();
    updateCvLink();
    updatePageMeta();
  }

  return { init, get, getLang, setLang, toggleLang, translations };
})();

// Run when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  I18N.init();
});
