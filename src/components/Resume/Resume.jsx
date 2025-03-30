import React from "react";
import { Link } from "react-router-dom";
function Resume({user}){
  // Function to check if the string is a valid URL (for websites)
  const isValidUrl = (str) => {
    const pattern = /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/i;
    return pattern.test(str);
  };

  // Function to check if the string is a valid email
  const isEmail = (str) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(str);
  };

  // Function to check if the string is a valid phone number
  const isPhoneNumber = (str) => {
    const pattern = /^\+?[0-9]{1,4}?[-.●]?[0-9]{1,15}$/; // Simple pattern for phone numbers
    return pattern.test(str);
  };
  return (
    <>
      <div className="p-5 md:p-10 bg-[#fafafa] rounded-[15px] md:rounded-[25px]">
        <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-6xl text-primary-theme-clr font-bold">{user.Name}</h1>
              <p className="font-medium text-[#4f4f4f] text-lg">{user.Destination}</p>
            </div>
            <div className="flex flex-col">
            {user?.BasicInfo?.map((info, index) => (
              <div key={index} className="flex items-center mb-2">
                {info.icon && <span className="mr-2">{info.icon}</span>}

                
                {isEmail(info.data) ? (
                  <a href={`mailto:${info.data}`}>
                    {info.data}
                  </a>
                ) : isPhoneNumber(info.data) ? (
                  <a href={`tel:${info.data}`}>
                    {info.data}
                  </a>
                ) : isValidUrl(info.data) ? (
                  <a
                    href={info.data.startsWith("http") ? info.data : `http://${info.data}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.data}
                  </a>
                ) : info.data.startsWith("/") ? (
                  <Link to={info.data}>
                    {info.data}
                  </Link>
                ) : (
                  <span>{info.data}</span>
                )}
              </div>
            ))}
            </div>
        </div>
        <hr className="my-10"/>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center">
          <div className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] bg-primary-theme-clr rounded-full overflow-hidden">
            <img src={user?.profilePic} alt=""  className="w-full"/>
          </div>
          <p className="md:w-[80%]">{user?.profileSummary}</p>
        </div>
        <hr className="my-10"/>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[70%]">
                {user.breifIntro.map((breif, index)=>(
                  <div className="flex flex-col gap-2 md:gap-4" key={index}>
                     <h2 className="text-3xl font-bold relative after:absolute leading-[1.2] border-primary-theme-clr border-l-[5px] ps-3 text-primary-theme-clr">{breif?.title}</h2>
                     <div className="flex flex-col md:flex-row justify-between">
                        <h4 className="text-lg font-medium">{breif?.subtitle}</h4>
                        <p className="flex">{breif?.company} {breif?.timeLine}</p>
                     </div>
                     <p>{breif?.summary}</p>
                     <ul className="flex flex-col gap-2 list-disc ms-10">
                      {breif?.lists.map((list, index)=>(
                          <li key={index}>
                            {list.listContent}
                          </li>
                        ))}
                     </ul>
                  </div>
                ))}
          </div>
          <div className="md:w-[25%]">
            <div className="ps-2 flex flex-col gap-4 md:border-l-[1px] border-[#000]">
              {user.sidePoints.map((sidePoint, index)=>(
                <div className="flex flex-col gap-2 md:gap-4" key={index}>
                  <h2 className="text-3xl font-bold relative after:absolute leading-[1.2] border-primary-theme-clr border-l-[5px] ps-3 text-primary-theme-clr">     {sidePoint?.title}
                  </h2>
                  <h4 className="text-lg font-medium">{sidePoint?.subtTitle}</h4>
                  <ul className="list-disc flex flex-col gap-2 ms-10">
                    {sidePoint?.lists.map((list, index)=>(
                      <li>{list?.content}</li>
                    ))}
                  </ul>
                    {sidePoint.skillDesc.map((descInfo, index)=>(
                      <div className="flex justify-between gap-3 items-start">
                        <span>{descInfo?.icon}</span>
                        <div className="flex flex-col">
                          <p>{descInfo?.iconTitle}</p>
                          <p className="text-[12px]">{descInfo?.iconDate}</p>
                        </div>
                      </div>  
                    ))}
                  </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-10"/>
        <div className="flex gap-4 justify-center items-center">
              {user.social.map((platform, index)=>(
                <Link to={platform?.link}  key={index} className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] rounded-full border-[1px] border-[#ccc] flex items-center justify-center">
                        {platform?.icon}
                    </div>
                  <span className="hidden md:inline-block text-[12px]">{platform?.name}</span>
                </Link>
              ))}
          </div>
      </div>
    </>
  )
}
export default Resume;