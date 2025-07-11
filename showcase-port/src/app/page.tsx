import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Nav Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 shadow z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-bold text-xl">Ethan Wojcik</span>
          <div className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#skills" className="hover:underline">Skills</a>
          </div>
        </div>
      </nav>

      {/* About Me */}
      <section
        id="about"
        className="flex flex-col sm:flex-row items-center justify-center gap-12 p-8 pt-32 min-h-screen max-w-4xl mx-auto"
      >
        {/* About Me text */}
        <div className="flex-1 flex flex-col items-start justify-center text-left">
          <h1 className="text-3xl font-bold mb-2">Ethan Wojcik</h1>
          <h2 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
            Software Engineer
          </h2>
          <p className="text-lg max-w-xl mb-4">
            About me
          </p>
        </div>
        {/* Profile Photo  */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center shadow-lg border-4 border-foreground">
            <Image
              src="/headshot_2.jpg"
              alt="Ethan Wojcik"
              width={220}
              height={220}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-foreground text-background rounded-full font-semibold shadow hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-black transition"
        >
          View Resume
        </a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc pl-6 space-y-2">

          <li>C, C++, C#</li>
          <li>Java</li>
          <li>Python</li>
          <li>Rust</li>
          <li>SQL</li>
          <li>React and Next.js</li>

        </ul>
      </section>
    </div>
  );
}