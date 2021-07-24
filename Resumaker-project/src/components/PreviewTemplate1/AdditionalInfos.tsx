import React from "react";
import { AdditionalInfo } from "modules/template/interfaces";
import { hasValues } from "util/helperFunctions";

interface Props {
  additionalInfo: AdditionalInfo[] | undefined;
}

const AdditionalInfos = ({ additionalInfo }: Props) => {
  const additionalInfoObject = additionalInfo![0];

  return (
    <>
      {hasValues(additionalInfoObject) && (
        <section className="template1-additional-info" id="additionalInfo">
          <h1 className="template1-additional-info-header">additional info</h1>
          <h3 className="template1-additional-info-sub-header">
            {additionalInfo![0].description}
          </h3>
        </section>
      )}
    </>
  );
};

export default AdditionalInfos;
