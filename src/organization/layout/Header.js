import { Button } from '../../ui/Button'
export default function HeaderOrganization({
  title,
  description,
  buttonIcon,
  buttonName,
  onSubmit,
}) {
  return (
    <>
      <div className="w-full flex justify-between bg-white">
        <div>
          <p className="text-2xl">{title}</p>
          <p className="text-sm text-[#6B7280]">{description}</p>
        </div>

        <div className=" h-8 my-auto flex gap-1 items-center px-2 text-white rounded-lg bg-[#5FA9F0]">
          <p className="text-sm">{buttonIcon}</p>
          <button className="text-sm">{buttonName}</button>
        </div>
      </div>
    </>
  )
}
