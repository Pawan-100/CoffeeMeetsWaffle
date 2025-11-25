import { Link } from "react-router-dom";

function Credits() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Credits
          </h1>
          <p className="text-lg text-gray-600">
            Resources used in this project
          </p>
        </div>

        {/* Credits List */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Image Resources
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl flex-shrink-0">•</span>
              <div>
                <a
                  href="https://www.freepik.com/free-vector/hand-drawn-cafe-signage-design_22730194.htm#fromView=image_search_similar&page=1&position=17&uuid=coffee-waffle-hero&query=coffee+cup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-orange-700 underline font-medium transition-colors"
                >
                  Hand-drawn cafe signage design by Freepik
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  Logo and branding elements
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl flex-shrink-0">•</span>
              <div>
                <a
                  href="https://www.freepik.com/free-vector/hand-drawn-latte-art-drink_14723637.htm#fromView=search&page=1&position=17&uuid=b91c4b4c-aebb-4350-a13d-6693caf8ac1e&query=coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-orange-700 underline font-medium transition-colors"
                >
                  Hand-drawn latte art drink by rawpixel.com on Freepik
                </a>
                <p className="text-gray-600 text-sm mt-1">Coffee cup image</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl flex-shrink-0">•</span>
              <div>
                <a
                  href="https://www.freepik.com/free-psd/hand-drawn-coffee-illustration_66245547.htm#from_element=cross_selling__psd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-orange-700 underline font-medium transition-colors"
                >
                  Hand-drawn coffee illustration by freepik
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  Coffee illustration
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl flex-shrink-0">•</span>
              <div>
                <a
                  href="https://www.pexels.com/video/close-up-of-cups-of-coffee-9042293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-orange-700 underline font-medium transition-colors"
                >
                  Coffee video by Сергей
                </a>
                <p className="text-gray-600 text-sm mt-1">Coffee video</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl flex-shrink-0">•</span>
              <div>
                <a
                  href="https://www.pexels.com/video/coffee-making-art-by-a-bartender-2909914/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-orange-700 underline font-medium transition-colors"
                >
                  Coffee video by Kelly
                </a>
                <p className="text-gray-600 text-sm mt-1">Coffee video</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl flex-shrink-0">•</span>
              <div>
                <a
                  href="https://www.freepik.com/free-psd/hand-drawn-coffee-illustration_66245553.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-orange-700 underline font-medium transition-colors"
                >
                  Coffee illustration by freepik
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  Coffee illustration
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl flex-shrink-0">•</span>
              <div>
                <a
                  href="https://www.freepik.com/free-psd/hand-drawn-coffee-illustration_66245542.htm#from_element=cross_selling__psd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-orange-700 underline font-medium transition-colors"
                >
                  Coffee illustration by freepik
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  Coffee illustration
                </p>
              </div>
            </li>
          </ul>

          {/* Back to Home Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-primary hover:text-orange-700 font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credits;
