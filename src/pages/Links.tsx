const Links = () => {
  const websites = [
    {
      name: 'Altivum Inc.',
      url: 'https://altivum.ai',
      description: 'Cloud-native AI integration for small businesses',
      category: 'Company',
    },
    {
      name: 'Altivum Logic',
      url: 'https://logic.altivum.ai',
      description: 'Multicloud infrastructure & web development services',
      category: 'Product',
    },
    {
      name: 'VetROI',
      url: 'https://vetroi.altivum.ai',
      description: 'AI-powered veteran career transition tool',
      category: 'Product',
    },
  ];

  const socials = [
    {
      name: 'GitHub',
      handle: '@AltivumInc-Admin',
      url: 'https://github.com/AltivumInc-Admin',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      handle: '@AltivumPress',
      url: 'https://www.youtube.com/@AltivumPress',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      handle: 'Christian Perez',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-altivum-dark via-altivum-navy to-altivum-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-altivum-gold/20 rounded-md mb-6">
              <span className="text-altivum-gold font-semibold text-sm uppercase tracking-wider">
                @thechrisgrey
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              All My Links
            </h1>
            <div className="h-1 w-24 bg-altivum-gold mx-auto mb-8"></div>

            <p className="text-xl text-altivum-silver leading-relaxed">
              Connect with me across the web. Find all my websites, social profiles, and projects in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Websites Section */}
      <section className="py-24 bg-altivum-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Websites & Projects
            </h2>
            <div className="h-1 w-16 bg-altivum-gold"></div>
          </div>

          <div className="space-y-4">
            {websites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-altivum-navy p-6 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-display font-semibold text-white group-hover:text-altivum-gold transition-colors">
                        {site.name}
                      </h3>
                      <span className="px-2 py-1 bg-altivum-gold/20 rounded text-xs font-medium text-altivum-gold">
                        {site.category}
                      </span>
                    </div>
                    <p className="text-altivum-silver text-sm">{site.description}</p>
                    <p className="text-altivum-gold text-xs mt-2 font-mono">{site.url}</p>
                  </div>
                  <svg
                    className="w-6 h-6 text-altivum-silver group-hover:text-altivum-gold transition-colors flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-altivum-navy">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Social Profiles
            </h2>
            <div className="h-1 w-16 bg-altivum-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-altivum-dark p-6 rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-altivum-gold/20 rounded-lg flex items-center justify-center text-altivum-gold group-hover:bg-altivum-gold group-hover:text-altivum-dark transition-all">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-altivum-gold transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-altivum-silver text-sm">{social.handle}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-altivum-silver group-hover:text-altivum-gold transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-altivum-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Want to Work Together?
          </h2>
          <p className="text-xl text-altivum-silver mb-8">
            Whether you're interested in cloud services, AI integration, or veteran programs,
            let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-altivum-gold text-altivum-dark font-semibold rounded-md hover:bg-altivum-gold/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
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

export default Links;
