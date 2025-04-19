import React from 'react';

const projects = [
  { name: 'project1', image: 'https://example.com/cpp.png', date: '2023-01-01'},
  { name: 'project2', image: 'https://example.com/cpp.png', date: '2023-01-01'},
  { name: 'project3', image: 'https://example.com/cpp.png', date: '2023-01-01'},
  { name: 'project4', image: 'https://example.com/cpp.png', date: '2023-01-01'}
];

const MyProjects = () => {
    return (
      <div className="max-w-2xl mx-auto p-6 mt-10 bg-gray-900 rounded-2xl shadow-xl text-white">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between mb-6">
            <span className="text-lg font-medium">{skill.name}</span>
            <div className="flex gap-1">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i < skill.level ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };