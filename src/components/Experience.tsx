export default function Experience() {
  return (
    <div
      id="experience-section"
      className=" flex bg-black hover:bg-customRed transition ease-in-out flex-col items-center"
    >
      <h2 className="text-5xl text-white sm:text-7xl font-extrabold mt-10">
        Work Experience
      </h2>
      <ul className="timeline mt-16 text-white timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 "
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024-Present</time>
            <div className="text-lg font-bold mb-6">
              Serving As Vice President In ECAST
            </div>
            At Thapathali Campus, each department has its own student-led club,
            and ECAST is the departmental club under the Department of
            Electronics and Computer Engineering. As part of ECAST, we
            collaborate on various projects and organize seminars to enhance
            both technical and professional skills. Serving as the Vice
            President of the club, I have gained valuable experience in
            leadership, network building, resource management, and teamwork,
            while also developing a wide range of technical competencies.
          </div>
          <hr className="bg-gray-800" />
        </li>
        <li className="mt-10">
          <hr className="bg-gray-800" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023-2024</time>
            <div className="text-lg font-bold mb-6">
              Served As Social Media Manager in ECAST
            </div>
            Before becoming the Vice President of ECAST, I had the privilege of
            serving as the Social Media Manager for nearly a year. Eager to
            seize every opportunity from my first year at the campus, I was
            selected for the role due to my prior experience as a content
            writer. As Social Media Manager, I was responsible for managing and
            posting content to promote events and played an active role in
            creating reels and other materials during &apos;Yathartha&apos; too.
          </div>
          <hr className="bg-gray-800" />
        </li>
        <li className="mt-10">
          <hr className="bg-gray-800" />
          <div className="timeline-middle text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Mar 2022 - Nov 2023</time>
            <div className="text-lg font-bold mb-6">
              Worked As Content Creator
            </div>
            After completing my +2, I had the opportunity to work remotely as a
            content creator for Neputer Tech Pvt Ltd, a Nepali company. In this
            role, I was responsible for writing content on assigned topics. This
            first professional experience taught me valuable lessons in
            professionalism, teamwork, and navigating a hybrid work environment.
          </div>
          <hr className="bg-gray-800" />
        </li>
      </ul>
    </div>
  );
}
