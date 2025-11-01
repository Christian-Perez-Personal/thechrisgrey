import { Link } from 'react-router-dom';
import altivumImage from '../assets/altivum.jpg';

const Altivum = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-altivum-dark via-altivum-navy to-altivum-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4A5A73_1px,transparent_1px),linear-gradient(to_bottom,#4A5A73_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-altivum-gold/20 rounded-md mb-6">
              <span className="text-altivum-gold font-semibold text-sm uppercase tracking-wider">
                Public Benefit Corporation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Altivum Inc.
            </h1>
            <div className="h-1 w-24 bg-altivum-gold mb-8"></div>

            <p className="text-2xl md:text-3xl text-altivum-silver leading-relaxed mb-8">
              Empowering veterans and small businesses through cloud migration and AI integration
            </p>

            <p className="text-xl text-altivum-silver leading-relaxed">
              As a Public Benefit Corporation, Altivum Inc. exists to serve those who have served,
              and to democratize access to cutting-edge technology for small businesses that drive
              our economy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-altivum-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Our Mission
              </h2>
              <div className="h-1 w-16 bg-altivum-gold"></div>

              <p className="text-xl text-altivum-silver leading-relaxed">
                Altivum Inc. bridges the technology gap for veterans transitioning to civilian careers
                and small businesses seeking to compete in the digital age. We believe that everyone
                deserves access to world-class cloud infrastructure and AI capabilities.
              </p>

              <p className="text-lg text-altivum-silver leading-relaxed">
                Our team brings military precision and operational excellence to every engagement,
                ensuring that technology serves as a force multiplier for growth and success.
              </p>

              <div className="bg-altivum-navy p-6 rounded-lg border border-altivum-slate/30">
                <h3 className="text-lg font-semibold text-white mb-4">Core Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-altivum-silver">
                    <svg className="w-5 h-5 text-altivum-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Service before self
                  </li>
                  <li className="flex items-center text-altivum-silver">
                    <svg className="w-5 h-5 text-altivum-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Excellence in execution
                  </li>
                  <li className="flex items-center text-altivum-silver">
                    <svg className="w-5 h-5 text-altivum-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Accessibility for all
                  </li>
                  <li className="flex items-center text-altivum-silver">
                    <svg className="w-5 h-5 text-altivum-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Innovation with purpose
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src={altivumImage}
                alt="Altivum Inc. workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-altivum-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="h-1 w-24 bg-altivum-gold mx-auto mb-6"></div>
            <p className="text-xl text-altivum-silver max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Migration */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Cloud Migration
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                Seamless transition to AWS cloud infrastructure with minimal downtime
                and maximum efficiency. We handle the complexity so you can focus on growth.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Assessment & Planning
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Infrastructure Design
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Migration Execution
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Post-Migration Optimization
                </li>
              </ul>
            </div>

            {/* AI Integration */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                AI Integration
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                Harness the power of artificial intelligence to automate processes,
                gain insights, and create competitive advantages in your market.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  AI Strategy Development
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Machine Learning Models
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Natural Language Processing
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Predictive Analytics
                </li>
              </ul>
            </div>

            {/* DevOps & CI/CD */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                DevOps & CI/CD
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                Streamline your development pipeline with automated testing, deployment,
                and infrastructure management practices.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Pipeline Automation
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Infrastructure as Code
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Container Orchestration
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Monitoring & Logging
                </li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Security & Compliance
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                Military-grade security practices ensure your data and systems remain
                protected against evolving threats and meet regulatory requirements.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Security Audits
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Compliance Management
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Threat Detection
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Incident Response
                </li>
              </ul>
            </div>

            {/* Training & Support */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Training & Support
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                Comprehensive training programs and ongoing support ensure your team
                maximizes the value of your technology investments.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Technical Training
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Best Practices Workshops
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  24/7 Support Services
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Documentation & Resources
                </li>
              </ul>
            </div>

            {/* Veteran Programs */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Veteran Programs
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                Specialized services and career transition support for veterans entering
                the technology sector or starting their own businesses.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Career Transition Consulting
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Technical Skills Training
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Mentorship Programs
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Business Development Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Altivum */}
      <section className="py-24 bg-altivum-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Why Choose Altivum
            </h2>
            <div className="h-1 w-24 bg-altivum-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-altivum-gold mb-4">100%</div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Veteran-Led
              </h3>
              <p className="text-altivum-silver">
                Leadership with proven operational excellence and mission focus
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-altivum-gold mb-4">24/7</div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Support
              </h3>
              <p className="text-altivum-silver">
                Always-available assistance when you need it most
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-altivum-gold mb-4">PBC</div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Mission-Driven
              </h3>
              <p className="text-altivum-silver">
                Public benefit commitment to serving our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-altivum-navy to-altivum-blue">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-altivum-silver mb-8">
            Let's discuss how Altivum Inc. can help you achieve your technology goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-altivum-gold text-altivum-dark font-semibold rounded-md hover:bg-altivum-gold/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Altivum;
