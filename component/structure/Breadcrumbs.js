import React from "react";
import { breadcrumbs } from "../../utils/configs";
import Link from "../base/links";
import Text from "../base/text";



const Breadcrumbs = () => {
  return (
    <div >
      {breadcrumbs.map((links, index) => {
        return (
          <React.Fragment key={links.link + index}>
          <Link
            label={links.label}
            path={links.link}
            color={
              breadcrumbs.length === index + 1
                ? "text-gray-400"
                : "text-primary"
            }
          />
          {breadcrumbs.length !== index + 1 && <Text content={` > `} />}
        </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
