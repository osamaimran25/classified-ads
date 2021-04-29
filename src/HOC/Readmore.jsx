import { Button } from "@material-ui/core";
import { useState } from "react";

const Readmore = ({ children, number }) => {
  const [isShowMore, setisShowMore] = useState(false);

  const showMoreHandler = () => {
    setisShowMore(!isShowMore);
  };
  return (
    <>
      {children && children.length > number ? (
        <span>
          {`${isShowMore ? children : children.slice(0, number)}
            ${isShowMore ? " " : "..."}`}
          <span onClick={showMoreHandler} className="readMore">
            {isShowMore ? (
              <Button variant="outlined" size="small" color="primary">
                Show Less
              </Button>
            ) : (
              "Show More"
            )}
          </span>
        </span>
      ) : (
        children
      )}
    </>
  );
};

export default Readmore;
