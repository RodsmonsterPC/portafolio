"use client";
import Image from "next/image";
import Link from "next/link";
import { useDataContext } from "./context/context";
export default function Home() {
  const mode = useDataContext();
  const { dark } = mode;
  return (
    <main
      id="About"
      className={`flex flex-col mt-10 ${
        !dark
          ? "bg-gradient-to-r from-cyan-50 to-cyan-300"
          : "bg-gradient-to-r from-zinc-500 to-zinc-900"
      }`}
    >
      <section className="flex justify-between mt-6">
        <div className="flex flex-col w-title ml-24 mb-10 mt-10">
          <h1 className={`text-5xl text-center ${dark ? "text-white" : ""}`}>
            ¡Hi my name is Rodolfo!
          </h1>
          <h2
            className={`text-4xl  text-center ${
              dark ? "text-neutral-400" : "text-fuchsia-700"
            }`}
          >
            Frontend Developer
          </h2>
          <div className="mt-2 flex justify-center ">
            <Link
              href={
                "https://www.linkedin.com/in/rodolfo-p%C3%A9rez-cerecedo-93b69014b/"
              }
            >
              <Image
                className="m-2 mr-6"
                src={"/linkedin.svg"}
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://github.com/RodsmonsterPC"}>
              <Image
                className="m-2 ml-6"
                src={"/github.svg"}
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div
            className={`flex justify-center mt-4 
            `}
          >
            <Link href={"/CV-Foto.pdf"}>
              <p
                className={`rounded-full w-28 h-9 pt-1.5 text-center text-white ${
                  dark
                    ? "bg-gradient-to-r from-indigo-500 to-blue-600"
                    : "bg-gradient-to-r from-red-500 to-orange-500 "
                }`}
              >
                CV - Resume
              </p>
            </Link>
          </div>
        </div>
        <div className="mr-24 ">
          <Image
            className="rounded-lg"
            src={"/Videojuegos.jpg"}
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className="ml-96 grid grid-rows-3 grid-flow-col gap-4 w-description">
        <div className="col-span-2 text-center text-wrap">
          <h2 className="text-3xl item-center text-blue-600 underline">
            About me
          </h2>
        </div>
        <div className="row-span-2">
          <p
            className={`text-md text-center font-sans ${
              dark ? "text-white" : ""
            }`}
          >
            Hello, my name is Rodolfo Pérez Cerecedo, 25 years old, from
            Tampico, Tamaulipas, Mex. A Junior programmer with experience on
            javascript, nodejs, git, vite.js, next.js and react. Updating to new
            technologies, management on unrelated databases, knowledge of AWS
            and Google Cloud
          </p>
        </div>
        <div className="row-span-3 ">
          {" "}
          <Image
            className="rounded-full"
            src="/Rods2.jpg"
            width={200}
            height={200}
            alt="Author photo"
          />
        </div>
      </section>
      <section id="Languages" className="pt-20">
        <div className="mb-10">
          <h2 className="text-3xl text-center text-blue-600 underline">
            Languages
          </h2>
        </div>
        <div
          className={`grid grid-cols-3 gap-4 ml-96 w-description ${
            dark ? "text-white" : ""
          }`}
        >
          <div className="w-32 h-34 border-1  flex items-center ">
            <Image
              className="overflow-hidden hover:scale-125"
              src={"/React.svg.png"}
              width={40}
              height={40}
              alt="React"
            />
            <p className="ml-2">React</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden hover:scale-125"
              src={"/Javacript.png"}
              width={40}
              height={40}
              alt="Javascript"
            />
            <p className="ml-2">Javascript</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden hover:scale-125"
              src={"/git.png"}
              width={40}
              height={40}
              alt="Git"
            />
            <p className="ml-2">Git</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden hover:scale-125"
              src={"/Node.png"}
              width={40}
              height={40}
              alt="Nodejs"
            />
            <p className="ml-2">Node.js</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden hover:scale-125"
              src={"/Npm.png"}
              width={80}
              height={40}
              alt="Npm"
            />
            <p className="ml-2">Npm</p>
          </div>
          <div className="w-44 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden rounded-md hover:scale-125"
              src={"/nextjs.png"}
              width={80}
              height={40}
              alt="Nextjs"
            />
            <p className="ml-2">Next.js</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden hover:scale-125"
              src={"/Vite.svg"}
              width={40}
              height={40}
              alt="Vitejs"
            />
            <p className="ml-2">Vite.js</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden hover:scale-125"
              src={"/typecript.png"}
              width={40}
              height={40}
              alt="Typescript"
            />
            <p className="ml-2">Typescript</p>
          </div>
          <div className="w-44 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden rounded-md hover:scale-125"
              src={"/Mongoose.png"}
              width={80}
              height={40}
              alt="Mongoose"
            />
            <p className="ml-2">Mongoose</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden  hover:scale-125"
              src={"/Bootstrap.png"}
              width={40}
              height={40}
              alt="Bootstrap"
            />
            <p className="ml-2">Bootstrap</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden hover:scale-125"
              src={"/css.png"}
              width={40}
              height={40}
              alt="CSS"
            />
            <p className="ml-2">CSS</p>
          </div>
          <div className="w-44 h-34 border-1  flex items-center">
            <Image
              className="overflow-hidden rounded-md hover:scale-125"
              src={"/Tailwinds.png"}
              width={40}
              height={40}
              alt="TailwindsCss"
            />
            <p className="ml-2">TailwindsCss</p>
          </div>
        </div>
      </section>
      <section id="Soft" className="flex flex-col pt-20">
        <div>
          <h2 className="text-center text-3xl mb-10 text-blue-600 underline">
            Soft Skills
          </h2>
        </div>
        <div className={`flex justify-center ${dark ? "text-white" : ""}`}>
          <div className="m-10 ">
            <Image
              className="shadow-xl rounded-md"
              src={"/creatividad.jpg"}
              width={100}
              height={100}
            />
            <p className="text-center mt-2">Creativity</p>
          </div>
          <div className="m-10">
            <Image
              className="shadow-xl rounded-md"
              src={"/problem-solution.jpg"}
              width={200}
              height={100}
            />
            <p className="text-center mt-2">Problem Solution</p>
          </div>
          <div className="m-10">
            <Image
              className="shadow-xl rounded-md"
              src={"/time-care.jpg"}
              width={160}
              height={100}
            />
            <p className="text-center mt-2">Time Care</p>
          </div>
          <div className="m-10">
            <Image
              className="shadow-xl rounded-md"
              src={"/team-work.jpg"}
              width={160}
              height={100}
            />
            <p className="text-center mt-2">Team work</p>
          </div>
        </div>
      </section>
      <section id="Projects" className="flex flex-col pt-20 mb-10">
        <div className="">
          <h2 className="text-center text-3xl mb-10 text-blue-600 underline">
            Projects
          </h2>
        </div>

        <div
          className={`grid grid-cols-3 gap-4 mx-auto ${
            dark ? "text-purple-800" : ""
          }`}
        >
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div>
              <Link href={"https://foodie-six-rho.vercel.app/"}>
                <Image
                  className="rounded-t-lg "
                  src={"/Foodie.JPG"}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">Foodie - Ecommerce</p>
            <div>
              <p className="text-center mt-4">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/next.svg"}
                  width={60}
                  height={60}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Tailwinds.png"}
                  width={60}
                  height={60}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Mongoose.png"}
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href={"https://github.com/RodsmonsterPC/foodie-next"}
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1 "
                  href={"https://foodie-six-rho.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div>
              <Link href={"https://devto-challenge-iota.vercel.app/"}>
                <Image
                  className="rounded-t-lg"
                  src={"/Devto.JPG"}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">Devto</p>
            <div>
              <p className="text-center mt-4">Languages</p>
              <div className="flex justify-center mt-4 border-b-4  border-t-4">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Javacript.png"}
                  width={35}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Bootstrap.png"}
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href="https://github.com/RodsmonsterPC/devto-Javascript-Challengue"
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://devto-challenge-iota.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div>
              <Link href={"https://rickandmorty-ashen.vercel.app/"}>
                <Image
                  className="rounded-t-lg"
                  src={"/Rick and Morty.JPG"}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">Rick and Morty API</p>
            <div>
              <p className="text-center mt-4">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Vite.svg"}
                  width={40}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Javacript.png"}
                  width={40}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Bootstrap.png"}
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href="https://github.com/RodsmonsterPC/rickandmorty"
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://rickandmorty-ashen.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div>
              <Link href={"https://mis-pelis.vercel.app/"}>
                <Image
                  className="rounded-t-lg"
                  src={"/MisPelis.JPG"}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">Mis Pelis</p>
            <div>
              <p className="text-center mt-4">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Javacript.png"}
                  width={43}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/css.png"}
                  width={43}
                  height={40}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href="https://github.com/RodsmonsterPC/MisPelis"
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://mis-pelis.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div>
              <Link href={"https://blife-gray.vercel.app/"}>
                <Image
                  className="rounded-t-lg"
                  src={"/Blife.JPG"}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">Blife</p>
            <div>
              <p className="text-center mt-3">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4 pb-1.5">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/next.svg"}
                  width={60}
                  height={60}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Tailwinds.png"}
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href="https://github.com/RodsmonsterPC/Blife"
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://blife-gray.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div className="h-imgPort">
              <Link href={"https://portafolio-maquetacion.vercel.app/"}>
                <Image
                  className="rounded-t-lg"
                  src={"/portafolio.png"}
                  width={400}
                  height={50}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">Portafolio-Prueba</p>
            <div>
              <p className="text-center mt-3">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4 pb-.5">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/css.png"}
                  width={43}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Javacript.png"}
                  width={43}
                  height={34}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href="https://github.com/RodsmonsterPC/cssAvanzado/tree/main/06-Maqutacion-web1"
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://portafolio-maquetacion.vercel.app/index.html"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div className="h-imgPort">
              <Link href={"https://developer-inky-six.vercel.app/"}>
                <Image
                  className="rounded-t-lg"
                  src={"/Develop.jpg"}
                  width={400}
                  height={50}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">Develop</p>
            <div>
              <p className="text-center mt-3">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4 pb-.5">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/css.png"}
                  width={43}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Javacript.png"}
                  width={43}
                  height={34}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href="https://github.com/RodsmonsterPC/cssAvanzado/tree/main/10-Maquetacion-web2"
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://developer-inky-six.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div className="h-imgPort">
              <Link href={"https://games-page-two.vercel.app/"}>
                <Image
                  className="rounded-t-lg"
                  src={"/Games.JPG"}
                  width={400}
                  height={50}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">Gamer</p>
            <div>
              <p className="text-center mt-3">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4 pb-.5">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/css.png"}
                  width={43}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Javacript.png"}
                  width={43}
                  height={34}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href="https://github.com/RodsmonsterPC/cssAvanzado/tree/main/11-Maquetacion-3"
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://games-page-two.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-card h-card  rounded-md ${
              dark ? "bg-gradient-to-r from-zinc-300 to-zinc-400" : "bg-white"
            }`}
          >
            <div className="h-imgPort">
              <Link href={"https://rodsdevtree.netlify.app/"}>
                <Image
                  className="rounded-t-lg"
                  src={"/devtree.jpg"}
                  width={400}
                  height={50}
                />
              </Link>
            </div>
            <p className="m-2 font-bold">DevTree</p>
            <div>
              <p className="text-center mt-3">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4 pb-.5">
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Tailwinds.png"}
                  width={43}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Vite.svg"}
                  width={43}
                  height={34}
                />
                 <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/typecript.png"}
                  width={43}
                  height={34}
                />
                <Image
                  className="m-4 rounded-full overflow-hidden hover:scale-125"
                  src={"/Mongoose.png"}
                  width={43}
                  height={34}
                />
              </div>
              <div className="flex justify-center m-3 h-10">
                <Link
                  className="w-7"
                  href="https://github.com/RodsmonsterPC/Devtree"
                >
                  <Image
                    className="overflow-hidden hover:scale-125"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 transition ease-in-out duration-300 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://rodsdevtree.netlify.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
