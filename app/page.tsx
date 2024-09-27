import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello! I am Adi 👋
      </h1>
      <div className="flex items-center gap-x-4">
        <Image
          src="/adi.webp"
          alt="Aditya Profile Picture"
          className="relative rounded-full object-cover"
          height={200}
          width={200}
        />
        <p className="mb-4">
          {`I'm a computer science graduate from the `}
          <br />
          <a href="https://www.utoronto.ca/">
            <u>University of Toronto.</u>
          </a>
          <br />
          {` I'm passionate about developing software and building products that
        positively impact people's lives.`}
        </p>
      </div>
    </section>
  );
}
