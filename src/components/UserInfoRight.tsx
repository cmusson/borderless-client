import InfoPiece from "./InfoPiece";

interface IUserInfoRightProps {
  name: string;
  availability: string;
  nationality: string;
  location: string;
  role: string;
}

interface IItem {
  info: string;
  detail: string;
  bottom: boolean;
}

const UserInfoRight = ({
  name,
  availability,
  nationality,
  location,
  role,
}: IUserInfoRightProps) => {
  const information: IItem[] = [
    { info: "Full Name", detail: name, bottom: false },
    { info: "Availability", detail: availability, bottom: false },
    { info: "Nationality", detail: nationality, bottom: false },
    { info: "Location", detail: location, bottom: true },
  ];

  return (
    <div className="w-full pl-2 md:w-1/2">
      <h3 className="font-bold text-xl mb-2 mt-2 md:mt-0">Overview</h3>
      <div className="bg-green-200 w-fit rounded-lg mb-4 text-sm pb-1 px-2">
        {role}
      </div>
      <div>
        {information.map((item, idx) => (
          <InfoPiece
            key={idx}
            info={item.info}
            detail={item.detail}
            bottom={item.bottom}
          />
        ))}
      </div>
      <p className="text-xs my-2 text-gray-600">
        Look risk case parent. Chair they away question organization around
        attach. Half bit indeed provide relationship myself.
      </p>
      <button className="w-full bg-blue-400 rounded-lg text-white p-1 hover:bg-blue-500 flex flex-row items-center justify-center gap-1">
        <img src="/cv.svg" alt="cv" width={20} height={20} />
        <div className="text-xs">CV</div>
      </button>
    </div>
  );
};

export default UserInfoRight;
