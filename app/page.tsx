
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfaf6] text-[#26352d]">
      <header className="flex items-center justify-between border-b border-[#e7e2d8] px-6 py-5 md:px-12">
        <a href="#" className="text-xl font-semibold tracking-tight">
          Maya Reynolds
          <span className="mt-1 block text-xs font-normal tracking-[0.2em]">
            THERAPY &amp; COUNSELING
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#office" className="hover:underline">Our Office</a>
          <a
            href="#contact"
            className="rounded-full bg-[#36574b] px-5 py-3 text-white hover:bg-[#294438]"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      <section className="grid min-h-[75vh] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8a735e]">
            A space to feel understood
          </p>

          <h1 className="text-4xl font-normal leading-tight md:text-6xl">
            Find your way toward a more balanced life.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#59645c]">
            Therapy offers a space to pause, reflect, and explore what matters
            to you, at your own pace.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-[#36574b] px-7 py-4 text-white transition hover:bg-[#294438]"
          >
            Begin Your Journey
          </a>
        </div>

        <div className="flex min-h-[340px] items-center justify-center rounded-t-full bg-[#e9e5d9] p-8 md:min-h-[470px]">
          <div className="max-w-xs text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#fcfaf6] text-3xl">
              ✿
            </div>
            <p className="text-xl">A welcoming space for growth</p>
            <p className="mt-3 text-sm leading-6 text-[#59645c]">
              Thoughtful support, grounded in compassion and understanding.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-20 text-center md:px-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[#8a735e]">
          A little about therapy
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-snug md:text-4xl">
          You deserve a space where you can show up as you are.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#59645c]">
          Everyone&apos;s story is different. Our work begins by understanding
          yours and exploring what support might look like for you.
        </p>
      </section>

      <section id="services" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8a735e]">
            How I can help
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Therapy &amp; Support</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Individual Therapy",
              text: "A dedicated space to explore your experiences, feelings, and goals.",
            },
            {
              title: "Anxiety & Stress",
              text: "Explore patterns and develop ways to navigate life's challenges.",
            },
            {
              title: "Personal Growth",
              text: "Build self-understanding and move toward meaningful change.",
            },
          ].map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[#e7e2d8] bg-white p-7"
            >
              <h3 className="text-xl">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#59645c]">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="office" className="bg-[#e9e5d9] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8a735e]">
            Our Office
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl">
            A calm space for meaningful conversations.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#59645c]">
            The office details, photographs, and session information will be
            tailored to Dr. Maya Reynolds&apos; profile.
          </p>
          <div className="mt-8 rounded-2xl border border-[#d4cdbd] bg-[#fcfaf6] px-6 py-12">
            <p className="text-lg">A welcoming environment, designed around you.</p>
            <p className="mt-2 text-sm text-[#59645c]">
              Office photographs and verified location details to be added.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center md:px-12">
        <h2 className="text-3xl md:text-4xl">Take the first step.</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#59645c]">
          Get in touch to learn more about the next steps and available support.
        </p>
        <p className="mt-6 text-sm text-[#59645c]">
          Contact information will be added from the provided profile.
        </p>
      </section>

      <footer className="border-t border-[#e7e2d8] px-6 py-6 text-center text-sm text-[#59645c]">
       © 2026 Maya Reynolds · Therapy & Counseling
      </footer>
    </main>
  );
}
