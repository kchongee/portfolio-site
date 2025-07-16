'use client';

import { portfolioConfig } from '@/config/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-t">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {portfolioConfig.personal.bio}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and creating 
                  intuitive user experiences. When I&apos;m not coding, you can find me 
                  exploring new technologies, contributing to volunteer projects.
                </p>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    3+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div> */}

              {/* Download Resume Button */}
              {portfolioConfig.personal.resume && (
                <div className="pt-6">
                  <a
                    href={portfolioConfig.personal.resume}
                    download
                    className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Resume
                  </a>
                </div>
              )}
            </div>

            {/* Right Column - Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Experience
              </h3>
              
              <div className="space-y-8">
                {portfolioConfig.experience.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index !== portfolioConfig.experience.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-16 bg-gray-200 dark:bg-gray-700"></div>
                    )}
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-2 top-2 w-4 h-4 bg-primary-500 rounded-full ring-4 ring-white dark:ring-gray-900"></div>
                    
                    {/* Content */}
                    <div className="ml-12">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.position}
                          </h4>
                          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                          {exp.company}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 4 && (
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                              +{exp.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}