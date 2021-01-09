export default function FeaturedItem() {
  return (
    <div className="featured-item-wrapper">
      <div className="featured-item-content">
          <img 
            src="/mock.jpg"
            alt="Profile image"
            className="object-cover h-64 w-full"
          />
      </div>
      <div className="featured-item-content py-8 px-2">
        <div className="text-xl pb-4">Project Name</div>
        <div className="text-lg">Project description</div>
      </div>
    </div>
  );
}