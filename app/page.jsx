import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main id="About" className="flex flex-col mt-16">
      <section className="flex justify-between">
        <div className="flex flex-col w-title ml-24 mb-10 mt-10">
          <h1 className="text-5xl text-center">¡Hi my name is Rodolfo!</h1>
          <h2 className="text-4xl text-fuchsia-700 text-center">
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
          <p className="text-md text-center font-sans">
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
        <div className="grid grid-cols-3 gap-4 ml-96 w-description">
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/React.svg.png"}
              width={40}
              height={40}
              alt="React"
            />
            <p className="ml-2">React</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/Javacript.png"}
              width={40}
              height={40}
              alt="Javascript"
            />
            <p className="ml-2">Javascript</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/git.png"}
              width={40}
              height={40}
              alt="Git"
            />
            <p className="ml-2">Git</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/Node.png"}
              width={40}
              height={40}
              alt="Nodejs"
            />
            <p className="ml-2">Nodejs</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/Npm.png"}
              width={80}
              height={40}
              alt="Npm"
            />
            <p className="ml-2">Npm</p>
          </div>
          <div className="w-44 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/nextjs.png"}
              width={80}
              height={40}
              alt="Nextjs"
            />
            <p className="ml-2">Nextjs</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-20"
              src={"/Vite.svg"}
              width={40}
              height={40}
              alt="Vitejs"
            />
            <p className="ml-2">Vitejs</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/typecript.png"}
              width={40}
              height={40}
              alt="Typescript"
            />
            <p className="ml-2">Typescript</p>
          </div>
          <div className="w-44 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/Mongoose.png"}
              width={80}
              height={40}
              alt="Mongoose"
            />
            <p className="ml-2">Mongoose</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/Bootstrap.png"}
              width={40}
              height={40}
              alt="Bootstrap"
            />
            <p className="ml-2">Bootstrap</p>
          </div>
          <div className="w-32 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
              src={"/css.png"}
              width={40}
              height={40}
              alt="CSS"
            />
            <p className="ml-2">CSS</p>
          </div>
          <div className="w-44 h-34 border-1  flex items-center">
            <Image
              className="hover:w-40"
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
        <div className="flex justify-center">
          <div className="m-10 ">
            <Image
              className="shadow-xl"
              src={"/creatividad.jpg"}
              width={100}
              height={100}
            />
            <p className="text-center mt-2">Creativity</p>
          </div>
          <div className="m-10">
            <Image
              className="shadow-xl"
              src={"/problem-solution.jpg"}
              width={200}
              height={100}
            />
            <p className="text-center mt-2">Problem Solution</p>
          </div>
          <div className="m-10">
            <Image
              className="shadow-xl"
              src={"/time-care.jpg"}
              width={160}
              height={100}
            />
            <p className="text-center mt-2">Time Care</p>
          </div>
          <div className="m-10">
            <Image
              className="shadow-xl"
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

        <div className="grid grid-cols-2 gap-4 mx-auto ">
          <div className="w-card h-card bg-white rounded-md ">
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
            <p className="m-2">Foodie - Ecommerce</p>
            <div>
              <p className="text-center mt-4">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4">
                <Image
                  className="m-4 rounded-full"
                  src={"/next.svg"}
                  width={60}
                  height={60}
                />
                <Image
                  className="m-4 rounded-full"
                  src={"/Tailwinds.png"}
                  width={60}
                  height={60}
                />
                <Image
                  className="m-4 rounded-full"
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
                    className="hover:w-8 h-8"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://foodie-six-rho.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div className="w-card h-card bg-white rounded-md">
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
            <p className="m-2">Devto</p>
            <div>
              <p className="text-center mt-4">Languages</p>
              <div className="flex justify-center mt-4 border-b-4  border-t-4">
                <Image
                  className="m-4 rounded-full"
                  src={"/Javacript.png"}
                  width={35}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full"
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
                    className="hover:w-8 h-8"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://devto-challenge-iota.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div className="w-card h-card bg-white rounded-md">
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
            <p className="m-2">Rick and Morty API</p>
            <div>
              <p className="text-center mt-4">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4">
                <Image
                  className="m-4 rounded-full"
                  src={"/Vite.svg"}
                  width={40}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full"
                  src={"/Javacript.png"}
                  width={40}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full"
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
                    className="hover:w-8 h-8"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://rickandmorty-ashen.vercel.app/"}
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
          <div className="w-card h-card bg-white rounded-md">
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
            <p className="m-2">Mis Pelis</p>
            <div>
              <p className="text-center mt-4">Languages</p>
              <div className="flex justify-center mt-4 border-b-4 border-t-4">
                <Image
                  className="m-4 rounded-full"
                  src={"/Javacript.png"}
                  width={43}
                  height={40}
                />
                <Image
                  className="m-4 rounded-full"
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
                    className="hover:w-8 h-8"
                    src={"/github.svg"}
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  className="bg-cyan-400 rounded-full w-16 text-center text-white ml-6 hover:bg-indigo-900 h-8 pt-1"
                  href={"https://mis-pelis.vercel.app/"}
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
