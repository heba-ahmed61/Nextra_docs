'use client';
import './index.css';
import Image from 'next/image';
import headerImage from '../../public/build.jpg';
import logo from '../../public/logo.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="home_wrapper">
      <div className="home_header">
        <div className="home_header_layout"></div>
        <div className="home_header_content">
          <div className="home_header_content_desc">
            <h1>
              Build optimized and beautiful websites quickly, focus on your
              content With CyWeb Framework
            </h1>
            <motion.div
              initial={{ opacity: 0, x: 100 }} // start off-screen to the right
              animate={{ opacity: 1, x: 0 }} // move to normal position
              transition={{ duration: 1.2 }}
            >
              {' '}
              <Link href={'/resources'}>GET STARTED</Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }} // fade in slower, with delay
          >
            <Image src={headerImage} alt="website-build-image" />
          </motion.div>
        </div>
      </div>
      <div className="about_cyweb_wrapper">
        <motion.section
          className="about_cyweb"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ amount: 0.3 }} // triggers when 30% is visibl
        >
          <div>
            <h2>What is CyWeb?</h2>
            <p>
              <strong>CyWeb</strong> is a modern framework designed to help
              developers build fast, optimized, and beautiful websites. It
              combines simplicity with performance and provides ready-to-use
              components, theming, and developer-friendly tooling {''}
              <Link href={'https://cyshield.com/'} target="_blank">
                Provided by Cyshield
              </Link>
            </p>
          </div>

          <div className="provided_by">
            <Image src={logo} alt="Cyshield Company Logo" />
          </div>
        </motion.section>
      </div>
      <div className="loved_by">
        <h3>❤️ Loved by many engineers 💻👩‍💻</h3>
        <motion.section
          className="testimonials_section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ amount: 0.3 }} // triggers when 30% is visibl
        >
          <p className="testimonials_lead">
            Trusted by <strong>200+ hundred frontend developers</strong> around
            the world — here’s what a few of them say about building with{' '}
            <strong>CyWeb</strong>.
          </p>

          <div className="testimonial-grid" role="list">
            {[
              {
                name: 'Heba Ahmed',
                role: 'Frontend Engineer — Cairo',
                quote:
                  'CyWeb sped up our prototyping — the built-in components saved us days.',
                avatar:
                  'https://ui-avatars.com/api/?name=Heba+A&background=0D8ABC&color=fff',
              },
              {
                name: 'David Lee',
                role: 'UI Developer — USA',
                quote:
                  'The theming system is simple and powerful. Shipping pages became fast.',
                avatar:
                  'https://ui-avatars.com/api/?name=David+L&background=FF5733&color=fff',
              },
              {
                name: 'Priya Nair',
                role: 'Senior Frontend — India',
                quote:
                  'Great defaults and easy customization. Nice developer experience overall.',
                avatar:
                  'https://ui-avatars.com/api/?name=Priya+N&background=28a745&color=fff',
              },
            ].map((t, i) => (
              <motion.article
                key={i}
                className="testimonial-card"
                role="listitem"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.45 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-body">
                  <p className="quote">“{t.quote}”</p>
                </div>
                <div className="testimonial-meta">
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    className="testimonial-avatar"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
