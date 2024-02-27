interface IUserInfoLeftProps {
  nationality: string;
  name: string;
  verified: boolean;
  image: string;
}

const UserInfoLeft = ({
  nationality,
  name,
  verified,
  image,
}: IUserInfoLeftProps) => {
  return (
    <div className="w-full md:pr-2 md:w-1/2">
      <div className="flex flex-row items-center gap-4 mb-4">
        <img
          className="rounded-lg"
          width={60}
          height={60}
          src={"/world_flag.png"}
          alt={nationality}
        />

        <div>
          <h2 className="font-bold text-lg text-xl">{name}</h2>
          <div className="text-gray-400 w-full text-xs">
            {verified ? "Borferless Verified" : "Unverified"}
          </div>
        </div>
      </div>

      <img
        className="border border-black rounded-lg w-full"
        width={400}
        height={400}
        src={image}
        alt="user profile pic"
      />
    </div>
  );
};

export default UserInfoLeft;
