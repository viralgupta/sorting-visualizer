type UserData = {
  username: string;
  profilePicture?: string;
  points: number;
};

type LeaderBoardProps = {
  usersData: UserData[];
};

const LeaderBoard: React.FC<LeaderBoardProps> = ({ usersData }) => {
  const highestPoints = usersData.reduce(
    (maxUser, currentUser) =>
      currentUser.points > maxUser.points ? currentUser : maxUser,
    usersData[0]
  ).points;

  function setZIndexToZero(value: boolean) {
    const element = document.getElementById("foreground");
    if (value) {
      if (element) {
        element.style.zIndex = "0";
      } else {
        console.error(`Element with ID ${"foreground"} not found.`);
      }
    } else {
      if (element) {
        element.style.zIndex = "10";
      } else {
        console.error(`Element with ID ${"foreground"} not found.`);
      }
    }
  }

  function isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  return (
    <>
      <div
        className=" relative w-full h-full bg-gray-950 overflow-x-hidden overflow-y-scroll p-5 text-3xl font-serif text-center"
        onMouseEnter={() => {
          setZIndexToZero(true);
        }}
        onMouseLeave={() => {
          setZIndexToZero(false);
        }}
      >
        <div
          id="foreground"
          className=" h-full w-full z-10 bg-gradient-to-b from-transparent via-transparent to-black fixed"
        ></div>
        LEADERBOARD
        <div className="w-full h-1/3 flex justify-center items-center mt-5">
          {usersData &&
            usersData.slice(0, 3).map((data, index) => {
              return (
                <div key={index}>
                  <img
                    className="rounded-full p-0.5 text-center"
                    src={
                      data.profilePicture && isValidUrl(data.profilePicture)
                        ? data.profilePicture
                        : "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png"
                    }
                    alt="Profile picture"
                  />
                  {data.username}	&#40;{data.points}P&#41;
                </div>
              );
            })}
        </div>
        {usersData &&
          usersData.map((data, index) => {
            return (
              <div
                key={index}
                style={{
                  width: `${(data.points / highestPoints) * 100}%`,
                  backgroundColor: `rgba(255, 0, 0, ${data.points / 100})`,
                }}
                className={`relative h-10 justify-end text-center w-full mx-0.5 mt-auto rounded-sm flex rounded-r-full hover:bg-blue-700 transition-all duration-1000 ease-in-out`}
              >
                <span className=" h-full flex items-center font-mono text-xl mr-auto">
                  {Math.round(data.points)} Points
                </span>
                <span className="absoulte h-full flex items-center font-mono text-xl">
                  {" "}
                  {data.username}
                </span>
                <img
                  className="rounded-full p-0.5 text-center"
                  src={
                    data.profilePicture && isValidUrl(data.profilePicture)
                      ? data.profilePicture
                      : "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png"
                  }
                  alt="Profile picture"
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default LeaderBoard;
