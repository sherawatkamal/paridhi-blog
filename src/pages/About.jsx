import { Mail, MapPin, Calendar, BookOpen, Heart, Coffee } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hi, I'm Paridhi. I'm passionate about sharing insights on mindfulness, personal growth, 
            and finding balance in our modern world.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Photo and Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Profile Photo */}
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-1 rounded-2xl mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-purple-600 dark:text-purple-400">P</span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span>Based in India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>Writing since 2020</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <BookOpen className="w-4 h-4 text-purple-500" />
                    <span>50+ articles published</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Heart className="w-4 h-4 text-purple-500" />
                    <span>Mindfulness & Growth</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h3>
                <a
                  href="mailto:hello@paridhi.com"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  hello@paridhi.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Bio and Story */}
          <div className="lg:col-span-2">
            {/* My Story */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h2>
              <div className="prose prose-lg max-w-none prose-p:text-gray-700 prose-p:dark:text-gray-300">
                <p className="mb-4">
                  Hello! I'm Paridhi, a writer, thinker, and eternal student of life. My journey began 
                  in the bustling cities of India, where I discovered the profound beauty of finding 
                  stillness amidst chaos.
                </p>
                <p className="mb-4">
                  I believe that everyone has a unique story to tell and valuable insights to share. 
                  Through my writing, I explore themes of mindfulness, personal growth, relationships, 
                  and the art of living intentionally in our fast-paced world.
                </p>
                <p className="mb-4">
                  My approach combines ancient wisdom with modern psychology, practical strategies with 
                  philosophical reflection. I'm not here to tell you how to live your life—I'm here to 
                  share what I've learned and discovered, in the hope that it might resonate with your 
                  own journey.
                </p>
                <p>
                  When I'm not writing, you'll find me practicing meditation, reading philosophy books, 
                  exploring nature, or having deep conversations with friends over a cup of chai.
                </p>
              </div>
            </div>

            {/* What I Write About */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Write About
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Mindfulness & Presence
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Finding peace and awareness in everyday moments
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <BookOpen className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Personal Growth
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Strategies for continuous self-improvement
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Coffee className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Relationships
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Building meaningful connections with others
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Creativity & Expression
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Unlocking your creative potential
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* My Values */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Values
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Authenticity
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I believe in sharing real experiences, honest reflections, and genuine insights. 
                    No pretense, no perfection—just authentic human experience.
                  </p>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Compassion
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Every person is on their own unique journey. I write with empathy and understanding, 
                    recognizing that we all face challenges and grow at our own pace.
                  </p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Growth Mindset
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I believe in the power of continuous learning and personal development. 
                    Every experience, whether positive or challenging, is an opportunity for growth.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Connection
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Through writing, I aim to create meaningful connections with readers who share 
                    similar experiences, questions, and aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I'd love to hear from you! Whether you have questions, want to share your own experiences, 
              or just want to say hello, feel free to reach out.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
