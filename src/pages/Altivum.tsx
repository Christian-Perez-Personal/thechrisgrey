import { Link } from 'react-router-dom';
import altivumImage from '../assets/altivum.jpg';

const Altivum = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-altivum-dark via-altivum-navy to-altivum-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4A5A73_1px,transparent_1px),linear-gradient(to_bottom,#4A5A73_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
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
              Cloud-native AI integration for small businesses
            </p>

            <p className="text-xl text-altivum-silver leading-relaxed mb-6">
              Founded in February 2025 and headquartered in Clarksville, Tennessee, Altivum Inc. is a
              veteran-founded Public Benefit Corporation dedicated to serving those who have served
              and democratizing access to cutting-edge cloud and AI technology for small businesses.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center px-4 py-2 bg-altivum-navy/50 rounded-md border border-altivum-slate/30">
                <svg className="w-5 h-5 text-altivum-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-altivum-silver text-sm font-medium">SDVOSB Certified</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-altivum-navy/50 rounded-md border border-altivum-slate/30">
                <svg className="w-5 h-5 text-altivum-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-altivum-silver text-sm font-medium">Clarksville, TN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image */}
      <section className="relative h-screen overflow-hidden block">
        <img
          src={altivumImage}
          alt="Altivum Inc. workspace"
          className="w-full h-full object-cover block"
          style={{ objectPosition: 'center 90%' }}
        />
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-altivum-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our Mission
            </h2>
            <div className="h-1 w-16 bg-altivum-gold mb-8"></div>

            <p className="text-xl text-altivum-silver leading-relaxed mb-6">
              Altivum Inc. bridges the technology gap for veterans transitioning to civilian careers
              and small businesses seeking to compete in the digital age. We believe that everyone
              deserves access to world-class cloud infrastructure and AI capabilities.
            </p>

            <p className="text-lg text-altivum-silver leading-relaxed mb-12">
              Our team brings military precision and operational excellence to every engagement,
              ensuring that technology serves as a force multiplier for growth and success.
            </p>

            <h3 className="text-2xl font-display font-bold text-white mb-6">Core Values</h3>
            <ul className="space-y-4">
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
      </section>

      {/* Products & Services */}
      <section className="py-24 bg-altivum-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Products & Services
            </h2>
            <div className="h-1 w-24 bg-altivum-gold mx-auto mb-6"></div>
            <p className="text-xl text-altivum-silver max-w-3xl mx-auto">
              Four core offerings designed to empower veterans and small businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Altivum Logic */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <a
                  href="https://logic.altivum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-altivum-gold hover:text-altivum-gold/80 text-sm font-medium"
                >
                  Visit Site →
                </a>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Altivum Logic™
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                Multicloud infrastructure and web development services. Save 50-70% compared to traditional website platforms while accessing enterprise-grade infrastructure.
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Services & Pricing</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start text-altivum-silver">
                    <span className="text-altivum-gold mr-2">•</span>
                    Website Development - From $600
                  </li>
                  <li className="flex items-start text-altivum-silver">
                    <span className="text-altivum-gold mr-2">•</span>
                    Cloud Migration - $500-700
                  </li>
                  <li className="flex items-start text-altivum-silver">
                    <span className="text-altivum-gold mr-2">•</span>
                    Managed Hosting - $20/month
                  </li>
                  <li className="flex items-start text-altivum-silver">
                    <span className="text-altivum-gold mr-2">•</span>
                    AI Integration - From $1,500
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-altivum-slate/30">
                <p className="text-xs text-altivum-silver">
                  <span className="font-semibold">Platforms:</span> AWS, IBM Cloud, Google Cloud
                </p>
              </div>
            </div>

            {/* Altivum Vanguard */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Altivum Vanguard
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                AI-powered hiring software with specialized focus on veteran recruitment. Streamline your hiring process while supporting veteran employment.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Veteran-focused candidate matching
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  AI-powered resume screening
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Skills translation for military experience
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Automated applicant tracking
                </li>
              </ul>
              <div className="pt-4 border-t border-altivum-slate/30">
                <p className="text-xs text-altivum-silver italic">
                  Coming Soon
                </p>
              </div>
            </div>

            {/* VetROI */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <a
                  href="https://vetroi.altivum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-altivum-gold hover:text-altivum-gold/80 text-sm font-medium"
                >
                  Learn More →
                </a>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                VetROI™
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                AI-powered veteran career transition tool. Navigate the transition from military to civilian careers with data-driven insights and personalized guidance.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Career pathway recommendations
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Skills assessment and translation
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Job market analysis
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Personalized transition planning
                </li>
              </ul>
            </div>

            {/* Altivum Press */}
            <div className="bg-altivum-dark p-8 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-altivum-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-altivum-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href="https://www.youtube.com/@AltivumPress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-altivum-gold hover:text-altivum-gold/80 text-sm font-medium"
                >
                  Watch →
                </a>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Altivum Press
              </h3>
              <p className="text-altivum-silver leading-relaxed mb-6">
                Educational content addressing defense technology and AI applications. Bridging the gap between military innovation and commercial technology.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Defense technology insights
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  AI implementation tutorials
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Cloud infrastructure guides
                </li>
                <li className="flex items-start text-altivum-silver">
                  <span className="text-altivum-gold mr-2">•</span>
                  Veteran tech career resources
                </li>
              </ul>
              <div className="pt-4 border-t border-altivum-slate/30">
                <p className="text-xs text-altivum-silver">
                  <span className="font-semibold">Platform:</span> YouTube, Educational Content
                </p>
              </div>
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
              <div className="text-5xl font-bold text-altivum-gold mb-4">SDVOSB</div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Certified
              </h3>
              <p className="text-altivum-silver">
                Service-Disabled Veteran-Owned Small Business certification
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-altivum-gold text-altivum-dark font-semibold rounded-md hover:bg-altivum-gold/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+16152199425"
              className="inline-block px-8 py-4 bg-transparent border-2 border-altivum-gold text-altivum-gold font-semibold rounded-md hover:bg-altivum-gold/10 transition-all duration-200"
            >
              Call (615) 219-9425
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Altivum;
