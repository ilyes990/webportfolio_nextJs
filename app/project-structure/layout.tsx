import Navbar from "../components/Navbar";

export default function ProjectStructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 