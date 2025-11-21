import { SEO } from '../components/SEO';
import btaLogo from '../assets/bta.png';
import readingImage from '../assets/reading.jpeg';
import { typography } from '../utils/typography';

const BeyondTheAssessment = () => {
  return (
    <div className="min-h-screen bg-altivum-dark">
      <SEO
        title="Beyond the Assessment | Christian Perez"
        description="Beyond the Assessment: A book by Christian Perez on leadership, resilience, and the human element in special operations and business."
        keywords="Beyond the Assessment, Christian Perez book, leadership book, special operations leadership, resilience, Green Beret author"
        url="https://thechrisgrey.com/beyond-the-assessment"
        type="article"
      />

      {/* Hero Section - Standard Style */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden opacity-0 animate-fade-in">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 sm:mb-8">
              <img
                src={btaLogo}
                alt="Beyond the Assessment"
                className="w-full max-w-3xl mx-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Column */}
            <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-altivum-silver/10">
                <img
                  src={readingImage}
                  alt="Christian Perez reading Beyond the Assessment"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-white mb-8" style={typography.sectionHeader}>
                The Human Element in <span className="text-altivum-gold">High Performance</span>
              </h2>

              <p className="text-white/80 mb-8 leading-relaxed" style={typography.subtitle}>
                In a world obsessed with metrics and data, <span className="text-white italic">Beyond the Assessment</span> explores the intangible qualities that define true leadership and resilience. Drawing from experiences in Special Operations and modern business, this book bridges the gap between tactical precision and human connection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://a.co/d/iC9TEDW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-altivum-gold hover:bg-amber-400 text-altivum-dark font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-altivum-gold/20 min-w-[200px]"
                >
                  <span>Order on Amazon</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeyondTheAssessment;
