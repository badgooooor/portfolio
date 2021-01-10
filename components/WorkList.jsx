import WorkItem from "./WorkItem";

import projects from "../content/projects.json";

export default function WorkList() {
  return (
    <div className="landing-container flex-col">
      <div className="content-heading">
        Other works and projects I've worked
        <div className="w-full bg-razzmatazz h-1"></div>
      </div>
      <div className="work-list-container">
        {
          projects.map((project, _) => {
            if (project.featured == false || !project.featured) {
              return <WorkItem 
                name={project.name}
                description={project.description}
                srcUrl={project.srcUrl}
                url={project.url}
              />
            }
          })
        }
      </div>
    </div>
  );
}