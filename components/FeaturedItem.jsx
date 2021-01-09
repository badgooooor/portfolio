import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function FeaturedItem({ name, description, imgSrc, srcUrl, url }) {
  return (
    <div className="featured-item-wrapper">
      <div className="featured-item-content">
          <img 
            src={imgSrc || "mock.jpg"}
            alt={imgSrc ? "Project image" : "Mock image"}
            className="object-cover h-64 w-full"
          />
      </div>
      <div className="featured-item-content relative py-8 px-2">
        <div className="text-xl pb-4">{name}</div>
        <div className="text-lg">{description}</div>
        <div className="absolute top-0 right-0 flex flex-row p-2">
          {srcUrl && <a href={srcUrl} className="p-2"><FiGithub size={32} /></a>}
          {url && <a href={url} className="p-2"><FiExternalLink size={32} /></a>}
        </div>
      </div>
    </div>
  );
}