import militaryLogo from '../assets/18d.png';

const MilitaryBackground = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden opacity-0 animate-fade-in">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-altivum-dark via-altivum-navy to-altivum-blue opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 sm:mb-8">
              <img
                src={militaryLogo}
                alt="Military Background - Former Green Beret, 18D"
                className="w-full max-w-3xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MilitaryBackground;
