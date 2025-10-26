export const SectionCard = ({ icon, title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex justify-center items-center w-12 h-12">
          {icon.endsWith(".svg") ? (
            <img src={icon} alt={title} className="w-12 h-12" />
          ) : (
            <span className="text-4xl">{icon}</span>
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <div className="space-y-1">
            {content.map((line, index) => (
              <p key={index} className="text-sm text-gray-600">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
