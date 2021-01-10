import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function WorkItem({ name, description, srcUrl, url }) {
  return (
    <div className="work-item-wrapper relative">
      <div className="font-semibold	text-lg pb-4">{name}</div>
      <div>{description}</div>
      <div className="absolute top-0 right-0 flex flex-row p-2">
          {srcUrl && <a href={srcUrl} className="p-2"><FiGithub size={16} /></a>}
          {url && <a href={url} className="p-2"><FiExternalLink size={16} /></a>}
        </div>
    </div>
  );
}