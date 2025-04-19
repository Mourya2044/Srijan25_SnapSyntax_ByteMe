import React from 'react';

export default function MyProject() {
  const projects = [
    { id: 1, name: "Project 1", date: "29-02-2020", image: "/img1.jpeg"},
    { id: 2, name: "Project 2", date: "29-02-2020", image: "/img2.jpeg"},
    { id: 3, name: "Project 3", date: "29-02-2020", image: "/img3.jpeg"},
    { id: 4, name: "Project 4", date: "29-02-2020", image: "/img4.jpeg"}
  ];

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-10 text-center ">
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
                <div className=" rounded-lg overflow-hidden">
                  <div className={`flex ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-2/5">
                      <img 
                        src={project.image}
                        alt={`${project.name} image`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className=" rounded-lg">
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