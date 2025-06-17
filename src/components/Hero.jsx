function Hero() {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">Cihat Yiğit</h1>
      <p className="text-lg text-gray-300">Unity Game Developer | Mobile & PC</p>
      <div className="mt-4 space-x-4">
        <a
          href="/cv/Cihat_Yigit_CV.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Hero;
