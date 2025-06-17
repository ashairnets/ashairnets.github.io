function Skills() {
  const skills = ["Unity", "C#", "WebGL", "Multiplayer", "DOTween", "Firebase", "IronSource"];
  return (
    <div className="py-10 text-center">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-800 px-4 py-2 rounded text-white">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Skills;
