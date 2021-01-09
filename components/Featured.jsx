import FeaturedItem from "./FeaturedItem";

export default function Featured() {
  return (
    <div className="landing-container flex-col">
      <div className="content-heading">
        Featured projects
      </div>
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
    </div>
  );
}