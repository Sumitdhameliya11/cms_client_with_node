import React from "react";
import loader from "../image/loader.gif";

const Loader = ({showimg}) => {
  // const [showimg, setshowimg] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setshowimg(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      {showimg && (
        <div className="loader-background">
          <div className="loader-img">
            <img src={loader} alt="loader-gif" width={60} />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
