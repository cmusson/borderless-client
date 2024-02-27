import InfoPiece from "./InfoPiece";

interface IUserInfoRightProps {
  drivingLicense: string;
  accommodationSupportRequired: boolean;
  skills: string[];
  availability: string;
  experience: string;
}

const UserInfoBottom = ({
  drivingLicense,
  accommodationSupportRequired,
  skills,
  availability,
  experience,
}: IUserInfoRightProps) => {
  const candidateSkills = skills.length ? skills.join(", ") : "";

  const information = [
    { info: "Driving License", detail: drivingLicense, bottom: false },
    {
      info: "Accommodation Suppourt Required",
      detail: accommodationSupportRequired === true ? "Yes" : "No",
      bottom: false,
    },
    { info: "Skills", detail: candidateSkills, bottom: false },
    { info: "Availability", detail: availability, bottom: true },
  ];

  return (
    <section className="bg-white px-4 py-2 rounded-lg flex flex-col gap-4 border border-gray-200 md:flex-row">
      <div className="w-full md:w-1/2">
        <h3 className="font-bold text-xl">Experience</h3>
        <button className="flex flex-row items-center justify-between rounded-lg w-full text-left p-1 hover:bg-blue-200">
          <div className="flex flex-row gap-2">
            <img
              src="/carer-icon.svg"
              alt="experience"
              width={20}
              height={20}
              color={"teal"}
              className="text-teal-400"
              style={{ color: "teal" }}
            />
            <div>
              <div>{experience}</div>
              <p>Aug 2022 - Jan 2024 - 1 year</p>
            </div>
          </div>
          <img
            src="/chevron-right.svg"
            alt="more detail"
            width={15}
            height={15}
          />
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="font-bold text-xl">About & Preferences</h3>
        <div>
          <div>
            {information.map((item, idx) => (
              <InfoPiece
                key={`${item.info}-${idx}`}
                info={item.info}
                detail={item.detail}
                bottom={item.bottom}
              />
            ))}
          </div>
          <div className="flex flex-row items-center text-blue-400 text-xs gap-2 m-4">
            <img
              src="/license-icon.svg"
              alt="driving license"
              width={15}
              height={15}
            />
            <div>Driving License</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfoBottom;
