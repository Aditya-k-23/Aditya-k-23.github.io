import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        👋 Hello! I am Adi
      </h1>
      <div className="flex items-center gap-x-4">
        <Image
          src="/adi.webp"
          alt="Aditya Profile Picture"
          className="relative rounded-full object-cover"
          height={200}
          width={200}
        />
        <div className="mb-4 space-y-3">
          <p>
            I&apos;m a computer science graduate from the{" "}
            <a href="https://www.utoronto.ca/" className="underline">
              University of Toronto
            </a>
            , passionate about building impactful products that improve
            people&apos;s lives.
          </p>
          <p>
            I&apos;m working as a software engineer @{" "}
            <a href="https://www.borderpass.ai/" className="underline">
              BorderPass
            </a>{" "}
            and teach @{" "}
            <a href="https://datasciences.utoronto.ca/" className="underline">
              UofT Data Sciences Institute
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
