import Image from "next/image";

export default function Statistics() {
    const stats = [
        { icon: "/images/img_briefcase_2_2.svg", number: "25,850", label: "Jobs" },
        { icon: "/images/img_icon_bg.svg", number: "10,250", label: "Candidates" },
        { icon: "/images/img_icon_bg_black_900.svg", number: "18,400", label: "Companies" },
    ];
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-[60px]">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-3 w-full sm:w-[160px]">
          <div className="w-[60px] h-[60px] bg-[#309689] rounded-[30px] flex items-center justify-center">
            <Image src={stat.icon} alt={stat.label} width={28} height={28} />
          </div>
          <div>
            <p className="text-lg font-bold text-white">{stat.number}</p>
            <span className="text-sm text-[#ffffffcc]">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}