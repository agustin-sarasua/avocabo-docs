import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Note: HomepageFeatures component was replaced with inline components

const content = {
  en: {
    featureList: [
      {
        title: 'For Teachers & Administrators',
        icon: '👩‍🏫',
        description: (
          <>
            Create AI-powered courses, manage students and groups, track progress with detailed 
            metrics, and get insights from the AI teaching assistant.
          </>
        ),
        link: '/docs/category/dashboard-for-teachers',
        linkText: 'Dashboard Guide',
      },
      {
        title: 'For Students',
        icon: '📚',
        description: (
          <>
            Access your courses, complete interactive lessons and exercises, track your learning 
            progress, and get help from the AI assistant when you need it.
          </>
        ),
        link: '/docs/category/students-app',
        linkText: 'Student Guide',
      },
      {
        title: 'AI-Powered Learning',
        icon: '✨',
        description: (
          <>
            PragmaTeach uses artificial intelligence to generate courses, create exercises, 
            translate content, and provide personalized assistance to teachers and students.
          </>
        ),
        link: '/docs/dashboard/ai-assistant',
        linkText: 'Learn More',
      },
    ],
    quickStartList: [
      {
        title: 'Create Your First Course',
        description: 'Learn how to create an AI-generated course with modules, lessons, and exercises.',
        link: '/docs/dashboard/courses/creating-courses',
        icon: '📖',
      },
      {
        title: 'Manage Users & Groups',
        description: 'Add students and teachers, organize them into groups, and assign courses.',
        link: '/docs/dashboard/users/managing-users',
        icon: '👥',
      },
      {
        title: 'Track Student Progress',
        description: 'View metrics, analyze performance, and generate reports for your students.',
        link: '/docs/dashboard/metrics',
        icon: '📊',
      },
      {
        title: 'Use the AI Assistant',
        description: 'Get answers about your students, courses, and teaching strategies.',
        link: '/docs/dashboard/ai-assistant',
        icon: '🤖',
      },
    ],
    hero: {
      title: 'Welcome to',
      brandName: 'PragmaTeach',
      subtitle: 'The AI-powered educational platform that helps teachers create engaging courses and empowers students to learn more effectively.',
      getStarted: 'Get Started',
      createCourse: 'Create Your First Course',
    },
    features: {
      title: 'Documentation for Everyone',
      subtitle: "Whether you're a teacher, administrator, or student, find the guidance you need.",
    },
    quickStart: {
      title: 'Quick Start Guides',
      subtitle: 'Jump right into the most common tasks.',
    },
    platform: {
      title: 'Ready to Transform Your Teaching?',
      description: 'PragmaTeach combines the power of artificial intelligence with proven educational practices to create a seamless learning experience. From automatic course generation to intelligent progress tracking, we\'ve got you covered.',
      features: [
        'AI-generated courses and exercises',
        'Multilingual support (English, Spanish, German)',
        'Detailed metrics and analytics',
        'AI teaching assistant for insights',
      ],
      button: 'Open Dashboard',
    },
  },
  es: {
    featureList: [
      {
        title: 'Para Profesores y Administradores',
        icon: '👩‍🏫',
        description: (
          <>
            Crea cursos con IA, gestiona estudiantes y grupos, rastrea el progreso con métricas 
            detalladas y obtén información del asistente de IA para profesores.
          </>
        ),
        link: '/docs/category/dashboard-for-teachers',
        linkText: 'Guía del Panel',
      },
      {
        title: 'Para Estudiantes',
        icon: '📚',
        description: (
          <>
            Accede a tus cursos, completa lecciones y ejercicios interactivos, rastrea tu progreso 
            de aprendizaje y obtén ayuda del asistente de IA cuando lo necesites.
          </>
        ),
        link: '/docs/category/students-app',
        linkText: 'Guía del Estudiante',
      },
      {
        title: 'Aprendizaje con IA',
        icon: '✨',
        description: (
          <>
            PragmaTeach usa inteligencia artificial para generar cursos, crear ejercicios, 
            traducir contenido y proporcionar asistencia personalizada a profesores y estudiantes.
          </>
        ),
        link: '/docs/dashboard/ai-assistant',
        linkText: 'Aprende Más',
      },
    ],
    quickStartList: [
      {
        title: 'Crea Tu Primer Curso',
        description: 'Aprende cómo crear un curso generado con IA con módulos, lecciones y ejercicios.',
        link: '/docs/dashboard/courses/creating-courses',
        icon: '📖',
      },
      {
        title: 'Gestiona Usuarios y Grupos',
        description: 'Agrega estudiantes y profesores, organízalos en grupos y asigna cursos.',
        link: '/docs/dashboard/users/managing-users',
        icon: '👥',
      },
      {
        title: 'Rastrea el Progreso de Estudiantes',
        description: 'Ver métricas, analizar el rendimiento y generar reportes para tus estudiantes.',
        link: '/docs/dashboard/metrics',
        icon: '📊',
      },
      {
        title: 'Usa el Asistente de IA',
        description: 'Obtén respuestas sobre tus estudiantes, cursos y estrategias de enseñanza.',
        link: '/docs/dashboard/ai-assistant',
        icon: '🤖',
      },
    ],
    hero: {
      title: 'Bienvenido a',
      brandName: 'PragmaTeach',
      subtitle: 'La plataforma educativa con IA que ayuda a los profesores a crear cursos atractivos y empodera a los estudiantes para aprender de manera más efectiva.',
      getStarted: 'Comenzar',
      createCourse: 'Crea Tu Primer Curso',
    },
    features: {
      title: 'Documentación para Todos',
      subtitle: 'Ya seas profesor, administrador o estudiante, encuentra la guía que necesitas.',
    },
    quickStart: {
      title: 'Guías de Inicio Rápido',
      subtitle: 'Comienza directamente con las tareas más comunes.',
    },
    platform: {
      title: '¿Listo para Transformar Tu Enseñanza?',
      description: 'PragmaTeach combina el poder de la inteligencia artificial con prácticas educativas probadas para crear una experiencia de aprendizaje fluida. Desde la generación automática de cursos hasta el seguimiento inteligente del progreso, te tenemos cubierto.',
      features: [
        'Cursos y ejercicios generados con IA',
        'Soporte multilingüe (Inglés, Español, Alemán)',
        'Métricas y análisis detallados',
        'Asistente de IA para profesores con información',
      ],
      button: 'Abrir Panel',
    },
  },
};

function Feature({ icon, title, description, link, linkText }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
        <Link className={styles.featureLink} to={link}>
          {linkText} <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </div>
  );
}

function QuickStartCard({ icon, title, description, link }) {
  return (
    <Link to={link} className={styles.quickStartCard}>
      <div className={styles.quickStartIcon}>{icon}</div>
      <div className={styles.quickStartContent}>
        <Heading as="h4" className={styles.quickStartTitle}>{title}</Heading>
        <p className={styles.quickStartDescription}>{description}</p>
      </div>
      <span className={styles.quickStartArrow}>→</span>
    </Link>
  );
}

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const t = content[locale] || content.en;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {t.hero.title} <span className={styles.brandName}>{t.hero.brandName}</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            {t.hero.subtitle}
          </p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              {t.hero.getStarted}
            </Link>
            <Link
              className={clsx("button button--lg", styles.heroButtonOutline)}
              to="/docs/dashboard/courses/creating-courses">
              {t.hero.createCourse}
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroDecoration}></div>
    </header>
  );
}

function FeaturesSection() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const t = content[locale] || content.en;
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            {t.features.title}
          </Heading>
          <p className={styles.sectionSubtitle}>
            {t.features.subtitle}
          </p>
        </div>
        <div className="row">
          {t.featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const t = content[locale] || content.en;
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            {t.quickStart.title}
          </Heading>
          <p className={styles.sectionSubtitle}>
            {t.quickStart.subtitle}
          </p>
        </div>
        <div className={styles.quickStartGrid}>
          {t.quickStartList.map((props, idx) => (
            <QuickStartCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const t = content[locale] || content.en;
  return (
    <section className={styles.platform}>
      <div className="container">
        <div className={styles.platformContent}>
          <div className={styles.platformText}>
            <Heading as="h2" className={styles.platformTitle}>
              {t.platform.title}
            </Heading>
            <p className={styles.platformDescription}>
              {t.platform.description}
            </p>
            <div className={styles.platformFeatures}>
              {t.platform.features.map((feature, idx) => (
                <div key={idx} className={styles.platformFeature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link
              className="button button--primary button--lg"
              to="https://app.pragmateach.com">
              {t.platform.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const t = content[locale] || content.en;
  return (
    <Layout
      title={locale === 'es' ? 'Documentación' : 'Documentation'}
      description={locale === 'es' 
        ? 'PragmaTeach - Plataforma Educativa con IA para Profesores y Estudiantes. Crea cursos, gestiona estudiantes y rastrea el progreso con el poder de la inteligencia artificial.'
        : 'PragmaTeach - AI-Powered Educational Platform for Teachers and Students. Create courses, manage students, and track progress with the power of artificial intelligence.'}>
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <QuickStartSection />
        <PlatformSection />
      </main>
    </Layout>
  );
}
