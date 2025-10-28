export default function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
      <span className="text-gray-600 text-sm">{label}</span>
      <span className="font-bold text-gray-900 text-base">{value}</span>
    </div>
  )
}
