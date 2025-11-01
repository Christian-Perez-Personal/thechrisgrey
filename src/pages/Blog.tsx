const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Parallels Between Special Operations and Cloud Architecture',
      excerpt: 'Exploring how military planning principles inform robust, scalable cloud infrastructure design.',
      date: 'Coming Soon',
      category: 'Technology',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Veteran Transition: Beyond the Resume',
      excerpt: 'Why traditional career advice often misses the mark for transitioning service members, and what actually works.',
      date: 'Coming Soon',
      category: 'Leadership',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'AI Integration for Small Businesses: A Practical Guide',
      excerpt: 'Demystifying artificial intelligence and providing actionable steps for small business owners.',
      date: 'Coming Soon',
      category: 'Technology',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Building High-Performance Teams in the Tech Sector',
      excerpt: 'Lessons from Special Forces on creating cohesive, mission-focused technology teams.',
      date: 'Coming Soon',
      category: 'Leadership',
      readTime: '7 min read',
    },
  ];

  const categories = ['All', 'Technology', 'Leadership', 'Veterans', 'Business'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-altivum-dark via-altivum-navy to-altivum-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-altivum-gold/20 rounded-md mb-6">
              <span className="text-altivum-gold font-semibold text-sm uppercase tracking-wider">
                Blog
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Insights & Perspectives
            </h1>
            <div className="h-1 w-24 bg-altivum-gold mb-8"></div>

            <p className="text-2xl text-altivum-silver leading-relaxed">
              Thoughts on leadership, technology, veteran transition, and building organizations
              that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-altivum-navy border-b border-altivum-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-altivum-gold text-altivum-dark'
                    : 'bg-altivum-dark text-altivum-silver hover:text-white hover:bg-altivum-blue/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-altivum-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-altivum-navy rounded-lg border border-altivum-slate/30 hover:border-altivum-gold/50 transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Featured Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-altivum-blue to-altivum-slate relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4A5A73_1px,transparent_1px),linear-gradient(to_bottom,#4A5A73_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-altivum-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                <div className="p-8">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-altivum-gold/20 rounded-md text-altivum-gold text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-sm text-altivum-silver">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-altivum-gold transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-altivum-silver leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-altivum-slate/30">
                    <span className="text-sm text-altivum-silver">
                      {post.date}
                    </span>
                    <span className="inline-flex items-center text-altivum-gold group-hover:translate-x-2 transition-transform">
                      Read More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-altivum-navy to-altivum-blue">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-altivum-silver mb-8">
            Subscribe to receive new articles directly to your inbox. No spam, just valuable
            insights on leadership, technology, and growth.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-md bg-altivum-dark border border-altivum-slate/30 text-white placeholder-altivum-silver focus:outline-none focus:border-altivum-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-altivum-gold text-altivum-dark font-semibold rounded-md hover:bg-altivum-gold/90 transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-altivum-silver mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
