import Image from "next/image";

export default function SkillsCard() {
  return (
    <div
      id="skill-section"
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
    >
      <h2 className="text-8xl font-extrabold my-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 w-full max-w-4xl">
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Frontend</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/javascript-programming-language-icon.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              JavaScript
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/html-5.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              HTML
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/css-3.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              CSS
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/tailwind-css-icon.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              Tailwind Css
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/react-js-icon.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              React Js
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/nextjs-icon.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              Next Js
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/alphabet-a-icon.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              Acceternity UI
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/daisy-flower-icon.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              Daisy UI
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Backend</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/node-js.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              Node Js
            </div>
            {/* <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">Express Js</div> */}
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/python.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              Python
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/icons/c.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              C
            </div>
            <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
              <Image
                src="/images/icons/cpp.png"
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
              C++
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
