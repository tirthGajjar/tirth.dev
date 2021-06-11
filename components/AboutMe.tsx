const AboutMe = () => {
  return (
    <div className="relative dark:text-indigo-100 py-16 sm:py-24 min-w-[100vw] overflow-x-hidden max-w-[100vw] mx-auto px-4 md:px-0">
      <div className="py-16 xl:py-36 overflow-hidden">
        <div className="max-w-max  mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base prose dark:prose-light max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide">
                About me
              </h2>
            </div>
          </div>
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-indigo-600 dark:text-blue-600"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-green-400 dark:text-yellow-600"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative lg:px-8 md:bg-opacity-90 dark:text-indigo-50 md:bg-gray-50 md:dark:bg-gray-900 md:dark:bg-opacity-95 md:p-6 prose dark:prose-light md:prose-lg md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-lg dark:text-indigo-100 font-normal lg:max-w-none">
                  <p>
                    Ultrices ultricies a in odio consequat egestas rutrum. Ut
                    vitae aliquam in ipsum. Duis nullam placerat cursus risus
                    ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut
                    rerum. Perspiciatis iusto mollitia iste minima soluta id.
                  </p>
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue{" "}
                    <a href="#">maecenas</a> risus nulla ultrices congue nunc
                    tortor. Eu leo risus porta integer suspendisse sed sit
                    ligula elit.
                  </p>
                  <ol>
                    <li>
                      Integer varius imperdiet sed interdum felis cras in nec
                      nunc.
                    </li>
                    <li>
                      Quam malesuada odio ut sit egestas. Elementum at porta
                      vitae.
                    </li>
                  </ol>
                  <p>
                    Amet, eu nulla id molestie quis tortor. Auctor erat justo,
                    sed pellentesque scelerisque interdum blandit lectus. Nec
                    viverra amet ac facilisis vestibulum. Vestibulum purus nibh
                    ac ultricies congue.
                  </p>
                </div>
                <div className="mt-6 prose dark:text-indigo-100 prose-lg font-normal lg:mt-0">
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue
                    maecenas risus nulla ultrices congue nunc tortor.
                  </p>
                  <p>
                    Eu leo risus porta integer suspendisse sed sit ligula elit.
                    Elit egestas lacinia sagittis pellentesque neque dignissim
                    vulputate sodales. Diam sed mauris felis risus, ultricies
                    mauris netus tincidunt. Mauris sit eu ac tellus nibh non
                    eget sed accumsan. Viverra ac sed venenatis pulvinar elit.
                    Cras diam quis tincidunt lectus. Non mi vitae, scelerisque
                    felis nisi, netus amet nisl.
                  </p>
                  <p>
                    Eu eu mauris bibendum scelerisque adipiscing et. Justo,
                    elementum consectetur morbi eros, posuere ipsum tortor. Eget
                    cursus massa sed velit feugiat sed ut. Faucibus eros mauris
                    morbi aliquam nullam. Scelerisque elementum sit magna
                    ullamcorper dignissim pretium.
                  </p>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
