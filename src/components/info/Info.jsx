import { getInitialData } from "../../utils";
import InfoCard from "./InfoCard";
import InfoHeader from "./InfoHeader";

const Info = ({ totalNotes, totalArchived }) => {
  return (
    <div className="flex-[1] h-fit order-first lg:order-last">
      <InfoHeader />
      <div className="flex gap-5 mt-4">
        <InfoCard
          title={"Total Catatan"}
          count={totalNotes}
          icon={"fa-notes"}
        />
        <InfoCard
          title={"Catatan Diarsipkan"}
          count={totalArchived}
          icon={"fa-box-archive"}
        />
      </div>
    </div>
  );
};

export default Info;
