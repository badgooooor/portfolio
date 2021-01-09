export default function About() {
  return (
    <div id="about" className="landing-container flex-col">
      <div className="content-heading">About</div>
      <div className="about-wrapper">
        <div className="about-content">
          Hello, I'm Bier, a software engineer.<br />
          I enjoy creating things. I specialized myself in software development, embedded system. 
          I also keen in learning new things such as blockchain and distributed system.<br />
          Aside from technical interest, I also love in solving problem related to business
          and communities.<br />
        </div>
        <div className="about-content md:w-1/2">
          <img 
            src="/profile.jpg"
            alt="Profile image"
            className="block m-auto h-64 shadow-lg border-b-4 border-r-4 border-razzmatazz"
          />
        </div>
      </div>
    </div>
  );
}