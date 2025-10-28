export default function RankingCard({ rank, index, isHighlighted = false }) {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl transition-all border ${
        isHighlighted
          ? 'bg-white border-[#5FA9F0]'
          : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Rank & Badge */}
      <div className="flex-shrink-0 w-14 text-center">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-base font-bold text-orange-500">#{index + 1}</span>
          {index === 0 && <span className="text-2xl">👑</span>}
          {index === 1 && <span className="text-lg">❤️</span>}
          {index === 2 && <span className="text-lg">❤️</span>}
        </div>
      </div>

      {/* Avatar Initial - Rounded Circle */}
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-base font-bold text-gray-700">
          {rank.name.charAt(0)}
        </div>
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900 text-bm">{rank.name}</h3>
          {rank.direction === 'up' && <span className="text-green-500 text-sm">⬆</span>}
          {rank.direction === 'down' && <span className="text-red-500 text-sm">⬇</span>}
        </div>
        <p className="text-sm text-gray-600">{rank.school}</p>
      </div>

      {/* Badge */}
      <div className="flex-shrink-0">
        <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${
          rank.badge === 'Chiến thần'
            ? 'bg-yellow-100 text-yellow-700'
            : rank.badge === 'Thợ săn'
            ? 'bg-purple-100 text-purple-700'
            : 'bg-blue-100 text-blue-700'
        }`}>
          <img
            src={ process.env.PUBLIC_URL +
    (rank.badge === 'Chiến thần'
      ? '/image/rankingPage/badgeIconlv3Small.svg'
      : rank.badge === 'Thợ săn'
      ? '/image/rankingPage/badgeIconlv2Small.svg'
      : '/image/rankingPage/badgeIconlv1Small.svg')
  }
            
            alt={rank.badge}
            className="w-4 h-4"
        />
          {rank.badge}
        </span>
      </div>

      {/* Points */}
      <div className="flex-shrink-0 text-right min-w-14">
        <p className="text-lg font-bold text-gray-900">{rank.points}</p>
        <p className="text-xs text-gray-600">điểm</p>
      </div>
    </div>
  )
}
