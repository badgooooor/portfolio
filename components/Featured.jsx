import FeaturedItem from "./FeaturedItem";

import projects from "../content/projects.json";

export default function Featured() {
  return (
    <div id="projects" className="landing-container flex-col">
      <div className="content-heading">
        Featured projects
        <div className="w-full bg-razzmatazz h-1"></div>
      </div>
      {
        projects.map((project, _) => {
          if (project.featured == true) {
            return <FeaturedItem 
              name={project.name}
              description={project.description}
              srcUrl={project.srcUrl}
              url={project.url}
              imgSrc={project.imgSrc}
            />
          }
        })
      }
    </div>
  );
}