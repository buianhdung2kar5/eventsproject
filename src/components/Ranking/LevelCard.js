export default function LevelCard({ level, title, points, description, bgColor, icon }) {
  return (
    <div
      className={`rounded-xl p-6 border transition-all hover:shadow-lg ${bgColor}`}
    >
      <div className="flex items-start gap-4">
        <img src={process.env.PUBLIC_URL+icon} alt="level icon" className="w-14 h-14 flex-shrink-0"/>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-base">{level}</h3>
          <p className="text-sm text-gray-600 mt-0.5">{points}</p>
        </div>
      </div>
          <p className="text-bm text-gray-700 mt-2">{description}</p>
    </div>
  )
}
