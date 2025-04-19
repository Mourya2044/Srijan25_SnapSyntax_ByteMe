import React from 'react';

export default function MyProject() {
  const projects = [
    { id: 1, name: "Project 1", date: "29-02-2020"},
    { id: 2, name: "Project 2", date: "29-02-2020"},
    { id: 3, name: "Project 3", date: "29-02-2020"},
    { id: 4, name: "Project 4", date: "29-02-2020"}
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-10 text-center">
          My Project
        </h1>
        
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = (index + 1) % 2 === 0;
            
            return (
              <div 
                key={project.id} 
                className={`flex ${isEven ? 'justify-end' : 'justify-start'}`}
              >
                <div className="w-1/2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className={`flex ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-2/5">
                      <img 
                        src={`/api/placeholder/300/200`}
                        alt={`${project.name} image`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/5 p-2-5">
                      <h2 className="text-white text-xl font-semibold mb-3">{project.name}</h2>
                      <p className="text-white">{project.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}