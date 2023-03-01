import { Clinic } from "../../interfaces/interfaces";
import { AboutBlock, DescBlock, StateBlock } from "./aboutClinicStyle";

interface IProps {
  aboutClinic: Clinic;
}

const AboutClinic = ({ aboutClinic }: IProps) => {
  return (
    <AboutBlock>
      <h2>{aboutClinic.clinicName}</h2>
      <StateBlock>
        <div>
          <p>{aboutClinic.suburb}</p>
          <p>{aboutClinic.state}</p>
        </div>
        <p>{aboutClinic.email}</p>
      </StateBlock>
      <DescBlock>{aboutClinic.about}</DescBlock>
    </AboutBlock>
  );
};
export default AboutClinic;
