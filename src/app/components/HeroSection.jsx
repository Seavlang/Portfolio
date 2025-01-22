"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Seavlang",
                1000,
                "IT Instructor",
                1000,
                "Web Instructor",
                1000,
                "Git/Deployment",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit sequi error doloribus porro autem delectus libero nesciunt impedit. Praesentium blanditiis distinctio adipisci, provident quo animi sit eum magnam dignissimos.
      Reiciendis natus voluptates veritatis nostrum reprehenderit sed at, debitis unde cumque laborum iure perferendis. Minus non, quis assumenda sed corrupti reiciendis, quasi ea reprehenderit nesciunt, tempore et? Est, ut reprehenderit.
      Iure totam, eos saepe nam, tenetur aspernatur, possimus incidunt molestiae eius deleniti quia odit in itaque corrupti? Accusamus veniam aut, mollitia quidem eius incidunt similique assumenda amet sed nisi quae?
      Quaerat sit nulla expedita nobis tempora odit maiores nesciunt tempore dolorum itaque, doloremque voluptas quae consequatur totam cumque assumenda, id temporibus esse alias ad provident ullam voluptatem ipsa velit? Doloribus.
      Ipsam facere quae maxime rem veniam quibusdam laboriosam harum repellat libero quasi a tempora cupiditate, suscipit non, animi natus, quos pariatur aut iusto. A facilis eligendi ipsam omnis consectetur corporis.
      Nulla aliquam nemo ea harum alias sequi explicabo, sunt dolores doloribus illum. Ut, amet, maiores libero magni eius, optio laudantium illum quis vitae numquam sequi fuga quod a at provident.
      Repellat, quo dignissimos inventore expedita cupiditate, vel placeat iste ad accusamus molestiae quisquam perspiciatis atque asperiores sunt quos doloremque maxime quas eaque. Nobis, repellendus. Necessitatibus culpa autem ipsa a nihil.
      Distinctio quasi blanditiis iusto esse corporis magni ipsa eligendi ab beatae quis. Asperiores velit odit ratione, quia, quam quibusdam nam omnis, rerum consequuntur autem inventore similique aut quo dignissimos praesentium!
      Similique aliquam pariatur vero omnis sit blanditiis? Aliquam non id accusamus dolor perspiciatis placeat magni optio, ipsa magnam, quaerat tempore iusto natus atque omnis dolore harum at illum, aspernatur exercitationem!
      Soluta molestias accusantium magni alias numquam quae eaque veritatis sunt voluptas amet dicta deleniti ab tempora sequi illo sapiente, fugiat reiciendis. Soluta magnam nulla numquam minus nostrum commodi consequatur beatae?</div>
    </section>
  );
};

export default HeroSection;
