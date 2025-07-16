'use client';

import { useState } from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { Skill } from '@/types';

const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: 'bg-blue-500' },
  { key: 'backend', label: 'Backend', color: 'bg-green-500' },
  { key: 'tools', label: 'Tools', color: 'bg-purple-500' },
  { key: 'other', label: 'Other', color: 'bg-orange-500' },
] as const;

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all' 
    ? portfolioConfig.skills 
    : portfolioConfig.skills.filter(skill => skill.category === selectedCategory);

  const getSkillsByCategory = (category: string) => {
    return portfolioConfig.skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Skills by Category Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => {
              const categorySkills = getSkillsByCategory(category.key);
              return (
                <div
                  key={category.key}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.label}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {categorySkills.slice(0, 4).map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full mr-1 ${
                                i < Math.floor(skill.level / 20)
                                  ? category.color
                                  : 'bg-gray-200 dark:bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    {categorySkills.length > 4 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 pt-2">
                        +{categorySkills.length - 4} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const categoryConfig = skillCategories.find(cat => cat.key === skill.category);
  
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${categoryConfig?.color || 'bg-gray-500'}`}>
          {categoryConfig?.label}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">Proficiency</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${categoryConfig?.color || 'bg-gray-500'} transition-all duration-1000 ease-out`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
}