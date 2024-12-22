import Image from "next/image";

export function AboutSection() {
  return (
    <section className="mt-16 py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="hidden md:block relative w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about.jpg"
              alt="Biryani on a pot"
              className="object-cover w-full h-full"
              width={800}
              height={600}
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="w-full">
            <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 mb-8 font-serif">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-600 text-center md:text-left max-w-3xl">
              We are excited to provide you with much better, healthier food options. At Jathara, we believe that
              nutritious meals can also be delicious. Our chefs use fresh, locally-sourced ingredients to create dishes
              that not only taste great but also contribute to your overall well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

