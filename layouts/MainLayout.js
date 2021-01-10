import ContactBar from "../components/ContactBar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <main className="flex-col">
          {children}
          <ContactBar />
        </main>
      </div>
    </div>
  );
}