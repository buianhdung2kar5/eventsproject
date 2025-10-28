export default function AchievementItem({ icon, title, points }) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-gray-100 last:border-b-0">
      <img src={process.env.PUBLIC_URL + icon} alt="achievement icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
        <p className="text-xs text-gray-500 mt-0.5">{points}</p>
      </div>
    </div>
  )
}
