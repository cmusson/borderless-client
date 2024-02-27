import { ICandidate } from "../constants/interfaces";
import UserInfoLeft from "./UserInfoLeft";
import UserInfoRight from "./UserInfoRight";
import UserInfoBottom from "./UserInfoBottom";
import { useLocation } from "react-router-dom";

export default function UserInfo() {
  const location = useLocation();
  const candidate = location.state as ICandidate;

  return (
    <main className="py-2 px-4 flex flex-col gap-6">
      <section className="bg-white px-4 py-2 rounded-lg flex flex-col border border-gray-200 md:flex-row">
        <UserInfoLeft
          nationality={candidate.nationality}
          name={candidate.name}
          verified={candidate.verified}
          image={candidate.image}
        />
        <UserInfoRight
          name={candidate.name}
          availability={candidate.availability}
          nationality={candidate.nationality}
          location={candidate.location}
          role={candidate.role}
        />
      </section>

      <UserInfoBottom
        drivingLicense={candidate.drivingLicense}
        accommodationSupportRequired={candidate.accomodationSupportRequired}
        skills={candidate.skills}
        availability={candidate.availability}
        experience={candidate.experience}
      />
    </main>
  );
}
