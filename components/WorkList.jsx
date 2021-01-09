import WorkItem from "./WorkItem";

export default function WorkList() {
  return (
    <div className="landing-container flex-col">
      <div className="content-heading">
        Other works and projects I've worked
      </div>
      <div className="work-list-container">
        <WorkItem />
        <WorkItem />
        <WorkItem />
        <WorkItem />
        <WorkItem />
      </div>
    </div>
  );
}