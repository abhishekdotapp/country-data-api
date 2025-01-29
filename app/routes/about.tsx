export default function About() {
  return (
    <div className="py-16 bg-slate-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-slate-300 mb-6 text-center">
          Welcome to our interactive country explorer!
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed mb-4">
          Our website utilizes the REST Countries API to provide detailed information about nations across the globe. Discover key insights, including country names, capitals, regions, populations, flags, and more—all in one place.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          Built with the latest technologies, including React Router v7 for smooth navigation and Tailwind CSS for a modern, fully responsive design, our platform ensures a seamless user experience across all devices.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          Whether you're exploring a specific country or comparing global regions, our intuitive interface makes it effortless. Start exploring now!
        </p>
      </div>
    </div>
  );
}
