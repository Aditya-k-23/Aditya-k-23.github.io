import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        👋 Hello! I&apos;m Adi
      </h1>
      <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-400">
        Software Engineer & CS Educator
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <Image
          src="/adi.webp"
          alt="Aditya Profile Picture"
          className="relative rounded-full object-cover flex-shrink-0"
          height={200}
          width={200}
        />
        <div className="mb-4 space-y-3">
          <p>
            I&apos;m a computer science graduate from the{" "}
            <a
              href="https://www.utoronto.ca/"
              className="underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              University of Toronto
            </a>
            , passionate about building impactful products that improve
            people&apos;s lives.
          </p>
          <p>
            Currently, I&apos;m a software engineer at{" "}
            <a
              href="https://www.borderpass.ai/"
              className="underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              BorderPass
            </a>{" "}
            and teach at the{" "}
            <a
              href="https://datasciences.utoronto.ca/"
              className="underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              UofT Data Sciences Institute
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
