import { Link } from "react-router-dom";
import { ICandidate } from "../constants/interfaces";

interface ICandidateProps {
  candidate: ICandidate;
}

const Candidate = ({ candidate }: ICandidateProps) => {
  const {
    name,
    image,

    nationality,
    location,
    role,
  } = candidate;
  return (
    <Link to={`/${name}`} state={{ ...candidate }}>
      <div className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col items-center max-w-60 min-w-60 hover:scale-105 transition-transform">
        <img
          src={image}
          alt="candidate image"
          className="border border-gray-200 rounded-lg"
          width={200}
          height={200}
        />
        <div className="flex flex-col items-center mt-4 gap-2 w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <div className={`font-bold ${name.length > 18 ? "text-sm" : ""}`}>
              {name}
            </div>
            <img
              className="rounded-lg"
              width={40}
              height={40}
              alt={nationality}
              src="/world_flag.png"
            />
          </div>
          <div className="text-blue-500 w-full text-xs">
            {candidate.verified ? "BORDERLESS VERIFIED " : "UNVERIFIED"}
          </div>
          <div className="w-full flex flex-row justify-between">
            <div className="text-gray-500">Location</div>
            <div>{location}</div>
          </div>
          <hr className="w-full " />
          <div className="w-full flex flex-row justify-between mb-10">
            <div className="text-gray-500">Role</div>
            <div>{role}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Candidate;
