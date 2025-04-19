import React from 'react';

const skills = [
  { name: 'C++', level: 8 },
  { name: 'JavaScript', level: 6 },
  { name: 'HTML & CSS', level: 9 },
  { name: 'React', level: 5 },
  { name: 'Data Structures', level: 7 },
  { name: 'Algorithms', level: 7 },
  { name: 'Git & GitHub', level: 6 },
  { name: 'Bootstrap', level: 8 }
];

const MySkills = () => {
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

export default MySkills;