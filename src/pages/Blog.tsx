import { useState } from 'react';
import { SEO } from '../components/SEO';
import { typography } from '../utils/typography';
import vetImage from '../assets/vet.jpeg';
// import cloudArchImage from '../assets/cloud-arch.jpg'; // Removed unused import
// If cloud-arch.jpg doesn't exist, I'll use a placeholder or keep the existing one if it was there.
// Checking previous file content, it used placeholders. I will use vetImage for the new one.

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraphs
  date: string;
  category: string;
  image: string;
  pdfUrl?: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Turning Tactical Skills Into Technical Impact",
      excerpt: "According to a 2023 Military Transition Survey conducted by the University of Phoenix, approximately 32% of non-active military members reported that they encountered obstacles transferring their military skills to the right civilian job.",
      content: [
        "According to a 2023 Military Transition Survey conducted by the University of Phoenix, approximately 32% of non-active military members reported that they encountered obstacles transferring their military skills to the right civilian job.",
        "If you or someone you know is a veteran interested in building with AWS, this article is for you.",
        "You receive a tasking: conduct a reconnaissance operation. This is unlike any reconnaissance operation you have ever conducted, although the insights gained from this operation will undeniably shape strategic decisions. Similarly to how reconnaissance missions involve simply observing behavior, your new mission is to develop and optimize software that provides key insights on clickstream data in order to better position your best selling products, drive user engagement, and increase total sales.",
        "The client that asked for this software has specific intelligence requirements. The client would like to learn as much as possible about user behavior patterns.",
        "Where are they coming from? What are they clicking on the most? How long are they staying on the site?",
        "But here is the constraint that matters: the data acquired is incredibly valuable and as such it must remain secure. The client cannot expose their analytical infrastructure to the open internet.",
        "This is where tactical doctrine translates brilliantly into cloud architecture.",
        "Your first step is to establish a Virtual Private Cloud (VPC). This is your operational area of responsibility. This is the defined space where you control every ingress and egress point. Within it, you create your public subnet (your forward position where traffic initially lands) and your private subnet (your secure command post where the actual intelligence analysis happens).",
        "The client's clickstream collection endpoint is fronted by an Application Programming Interface (API) Gateway endpoint at the public edge. It is still visible but it remains a hardened location designed to receive incoming data. The data analysis and storage, however, does not happen here. The public facing API receives, validates, and immediately passes the intelligence backward through a controlled channel intentionally and strategically directed by your route table and by the integration Lambda that runs inside your private subnet.",
        "Security is an absolute must. As you layer those security cordons from the inside out, you establish security groups around the public subnet with very explicit instructions, “Allow HTTPS inbound on port 443 from anywhere. Deny everything else.” Similarly, you position a security group around your private subnet but the instructions differ. These are more stringent given the sensitive nature of the intel analysis happening within. “Only accept traffic originating from the public subnet’s Elastic Network Interfaces (ENIs). Reject all traffic that does not meet this criteria.”",
        "Your Network Access Control Lists (ACLs) broaden your security posture. This is a stateless perimeter check that evaluates traffic before it even gets close to your security groups. Its stateless nature is its strength. It does not care that it already checked your credentials when you came in, it will check your credentials again on the way out. No if’s, and’s, or but’s.",
        "Together your route table, Network ACL, and Security Groups form a layered defense consisting of perimeter control, packet filtering, and stateful enforcement.",
        "We finally get to your actual mission. The clickstream data arrives at your API Gateway, which triggers a Lambda function. That Lambda function validates the incoming request, assumes its IAM role, then forwards the authenticated data into an SQS queue. You access the SQS through a VPC endpoint, ensuring your clickstream data never traverses the public internet. The queue remains reachable only through the SQS VPC endpoint from your private subnet. Functionally, this keeps the entire data path within your controlled area of operations, never exposed to routing through public infrastructure.",
        "Lambda functions, akin to troops tasked to run back and forth conducting a specific job, poll from that queue in controlled batches preserving the order of messages when using a FIFO queue. They process each click event, enrich it with geolocation data, session tracking, and detailed behavioral patterns. They take meticulous and organized notes. The longer unstructured notes go to your Data Lake. The detailed metadata gets neatly logged in DynamoDB.",
        "Eventually the client needs to see this intelligence. Perhaps they access it through a different controlled channel like a dashboard running on an EC2 instance in the private subnet, accessible only through AWS Systems Manager Session Manager, which routes through the AWS control plane and not the internet. Or they pull reports through a secured API that sits behind CloudFront and WAF, which applies additional filtering before anything reaches your infrastructure.",
        "Beneath all of this runs CloudTrail. Every API call, every Lambda invocation, every DynamoDB write, every IAM check that succeeded or failed gets logged with a timestamp and the identity of who actioned this. CloudTrail is your operational record. When you need answers, CloudTrail gives you the complete signal trace. If something goes sideways, you have the full record to understand exactly what happened and why. You have accountability.",
        "What is fascinating is of course the technical capability that we’ve just described but also the fact that as a veteran you already understand this. You know that layered defenses beat single perimeters. You have executed asynchronous operations, and you’ve planned operations with redundancy built in because single points of failure are unacceptable.",
        "The AWS services are just the terminology but the doctrine is already in your muscle memory.",
        "I hope that this short essay helps at least one veteran realize that what they learned in the service is still applicable and in turn this provides a sense of purpose.",
        "We lose too many veterans every day and now, more than ever, we need builders. We need you."
      ],
      date: "November 20, 2025",
      category: "Veterans in Tech",
      image: vetImage,
      pdfUrl: "/assets/documents/Turning Tactical Skills into Technical Impact.pdf"
    },
    {
      id: 2,
      title: "The Future of Cloud Architecture",
      excerpt: "Exploring how serverless technologies and edge computing are reshaping the way we build scalable applications.",
      content: ["Full content coming soon..."],
      date: "March 15, 2024",
      category: "Cloud Architecture",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "AI Integration in Modern Business",
      excerpt: "Practical strategies for implementing artificial intelligence to drive operational efficiency and innovation.",
      content: ["Full content coming soon..."],
      date: "March 10, 2024",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Leadership in High-Stakes Environments",
      excerpt: "Lessons learned from special operations applied to corporate leadership and team management.",
      content: ["Full content coming soon..."],
      date: "March 5, 2024",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = ['All', 'Technology', 'Leadership', 'Veterans', 'Business'];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Blog & Insights"
        description="Insights from Christian Perez on cloud architecture, AI integration, military leadership, and entrepreneurship."
        keywords="Christian Perez blog, Altivum insights, cloud architecture blog, AI technology articles, leadership thoughts"
        url="https://thechrisgrey.com/blog"
        type="article"
      />
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="py-32 bg-altivum-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-altivum-gold/10 rounded-md mb-6">
              <span className="text-altivum-gold font-semibold text-sm uppercase tracking-wider">
                Blog
              </span>
            </div>

            <h1 className="text-white mb-6" style={typography.heroHeader}>
              Insights & Perspectives
            </h1>
            <div className="h-px w-24 bg-altivum-gold mb-8"></div>

            <p className="text-altivum-silver" style={typography.subtitle}>
              Thoughts on leadership, technology, veteran transition, and building organizations
              that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {/* Categories */}
      <section className="py-8 bg-altivum-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${category === 'All'
                  ? 'bg-white text-altivum-dark'
                  : 'bg-transparent text-altivum-silver border border-white/10 hover:border-altivum-gold hover:text-altivum-gold'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      {/* Blog Posts */}
      <section className="py-24 bg-altivum-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
                  <div className="absolute inset-0 bg-altivum-navy/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-altivum-gold uppercase tracking-wider font-medium">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-white group-hover:text-altivum-gold transition-colors" style={typography.cardTitleLarge}>
                    {post.title}
                  </h3>
                  <p className="text-altivum-silver line-clamp-3" style={typography.bodyText}>
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center text-altivum-gold text-sm font-medium mt-2 group-hover:translate-x-2 transition-transform">
                    Read Article <span className="material-icons text-sm ml-1">arrow_forward</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* Newsletter Section */}
      <section className="py-24 bg-altivum-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6" style={typography.sectionHeader}>
            Stay Informed
          </h2>
          <p className="text-altivum-silver mb-10" style={typography.bodyText}>
            Subscribe to receive new articles directly to your inbox. No spam, just valuable
            insights on leadership, technology, and growth.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border-b border-white/20 text-white placeholder-altivum-silver/50 focus:outline-none focus:border-altivum-gold transition-colors rounded-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-altivum-dark font-medium hover:bg-altivum-gold transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-altivum-silver/40 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedPost(null)}
          ></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-altivum-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in">

            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-80 flex-shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-altivum-dark via-altivum-dark/50 to-transparent"></div>
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-altivum-gold text-white rounded-full transition-colors backdrop-blur-md"
              >
                <span className="material-icons">close</span>
              </button>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-4 text-xs text-altivum-gold uppercase tracking-wider font-medium mb-3">
                  <span>{selectedPost.category}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="prose prose-invert prose-lg max-w-none">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index} className="text-altivum-silver mb-6 leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Download PDF Option */}
              {selectedPost.pdfUrl && (
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="bg-white/5 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 hover:border-altivum-gold/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-altivum-gold/10 rounded-lg flex items-center justify-center text-altivum-gold">
                        <span className="material-icons text-3xl">picture_as_pdf</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Download Article PDF</h4>
                        <p className="text-altivum-silver text-sm">Read the full article offline</p>
                      </div>
                    </div>
                    <a
                      href={selectedPost.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-altivum-gold text-altivum-dark font-semibold rounded-lg hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap"
                    >
                      Download PDF
                      <span className="material-icons text-sm">download</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div >
  );
};

export default Blog;
