"use client";
import { useEffect, useState } from "react";
import LeftCanvas from "./components/LeftCanvas";
import LeaderBoard from "./components/RightCanvas";

export default function Home() {
  const [number_of_bars, setNumber_of_bars] = useState(50);
  const [time, setTime] = useState(10);
  const [sampleArray, setSampleArray] = useState<
    { height: number; active: boolean }[]
  >([
    {
      height: 0,
      active: false,
    },
  ]);
  const [Sorting, setSorting] = useState(false);
  const [timetosort, setTimetosort] = useState(0);

  useEffect(() => {
    let newArray = Array.from({ length: number_of_bars }, (_, index) => ({
      height: Math.round(((index + 1) / number_of_bars) * 100),
      active: false,
    }));
    setSampleArray(newArray);
  }, [number_of_bars]);

  const randomButton = () => {
    setSampleArray((s) => (s.length > 1 ? randomizeArray([...s]) : s));
  };

  function randomizeArray(
    array: { height: number; active: boolean }[]
  ): { height: number; active: boolean }[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function bubbleSortByHeight() {
    let arr = [...sampleArray];
    const date1 = Date.now();
    setTimetosort(0);

    const n = arr.length;
    let i = 0;
    let j = 0;

    const sortStep = () => {
      arr.forEach((bar) => (bar.active = false));
      if (i < n - 1) {
        setSorting((s) => (s == false ? true : true));
        if (j < n - i - 1) {
          arr[j].active = true;
          arr[j + 1].active = true;

          if (arr[j].height > arr[j + 1].height) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            setSampleArray([...arr]);
          }

          j++;
          setTimeout(sortStep, time);
        } else {
          arr[i].active = true;
          i++;
          j = 0;
          setTimeout(sortStep, time);
        }
      } else {
        setTimetosort(Date.now() - date1);
        setSorting((s) => (s == true ? false : false));
      }
    };
    sortStep();
  }

  function selectionSortByHeight() {
    const date1 = Date.now();
    setTimetosort(0);
    let arr = [...sampleArray];

    const n = arr.length;
    let i = 0;
    let j = i + 1;

    const sortStep = () => {
      arr.forEach((bar) => (bar.active = false));

      if (i < n - 1) {
        let minIndex = i;
        setSorting((s) => (s == false ? true : true));

        if (j < n) {
          arr[i].active = true;
          arr[j].active = true;

          if (arr[j].height < arr[minIndex].height) {
            const temp = arr[j];
            arr[j] = arr[minIndex];
            arr[minIndex] = temp;
          }

          setSampleArray([...arr]);
          j++;
          setTimeout(sortStep, time);
        } else {
          i++;
          j = i + 1;
          setTimeout(sortStep, time);
        }
      } else {
        setTimetosort(Date.now() - date1);
        setSorting((s) => (s == true ? false : false));
      }
    };

    sortStep();
  }

  const usersData = [
    { username: "user1", profilePicture: "url1", points: 30 },
    { username: "user2", profilePicture: "url2", points: 80 },
    { username: "user3", profilePicture: "url3", points: 45 },
    { username: "user4", profilePicture: "url4", points: 60 },
    { username: "user5", profilePicture: "url5", points: 90 },
    { username: "user6", profilePicture: "url6", points: 110 },
    { username: "user7", profilePicture: "url7", points: 75 },
    { username: "user8", profilePicture: "url8", points: 40 },
    { username: "user9", profilePicture: "url9", points: 85 },
    { username: "user10", profilePicture: "url10", points: 120 },
    { username: "user11", profilePicture: "url11", points: 55 },
    { username: "user12", profilePicture: "url12", points: 95 },
    { username: "user13", profilePicture: "url13", points: 70 },
    { username: "user14", profilePicture: "url14", points: 50 },
    { username: "user15", profilePicture: "url15", points: 105 },
    { username: "user16", profilePicture: "url16", points: 65 },
    { username: "user17", profilePicture: "url17", points: 110 },
    { username: "user18", profilePicture: "url18", points: 75 },
    { username: "user19", profilePicture: "url19", points: 40 },
    { username: "user20", profilePicture: "url20", points: 85 },
    { username: "user21", profilePicture: "url21", points: 120 },
    { username: "user22", profilePicture: "url22", points: 55 },
    { username: "user23", profilePicture: "url23", points: 95 },
    { username: "user24", profilePicture: "url24", points: 70 },
    { username: "user25", profilePicture: "url25", points: 50 },
    { username: "user26", profilePicture: "url26", points: 105 },
    { username: "user27", profilePicture: "url27", points: 65 },
    { username: "user28", profilePicture: "url28", points: 110 },
    { username: "user29", profilePicture: "url29", points: 75 },
    { username: "user30", profilePicture: "url30", points: 40 },
    { username: "user31", profilePicture: "url31", points: 85 },
    { username: "user32", profilePicture: "url32", points: 120 },
    { username: "user33", profilePicture: "url33", points: 55 },
    { username: "user34", profilePicture: "url34", points: 95 },
    { username: "user35", profilePicture: "url35", points: 70 },
    { username: "user36", profilePicture: "url36", points: 50 },
    { username: "user37", profilePicture: "url37", points: 105 },
    { username: "user38", profilePicture: "url38", points: 65 },
    { username: "user39", profilePicture: "url39", points: 110 },
    { username: "user40", profilePicture: "url40", points: 75 },
    { username: "user41", profilePicture: "url41", points: 40 },
    { username: "user42", profilePicture: "url42", points: 85 },
    { username: "user43", profilePicture: "url43", points: 120 },
    { username: "user44", profilePicture: "url44", points: 55 },
    { username: "user45", profilePicture: "url45", points: 95 },
    { username: "user46", profilePicture: "url46", points: 70 },
    { username: "user47", profilePicture: "url47", points: 50 },
    { username: "user48", profilePicture: "url48", points: 105 },
    { username: "user49", profilePicture: "url49", points: 65 },
    { username: "user50", profilePicture: "url50", points: 110 },
  ];

  return (
    <>
      <div className="w-2/3 h-96 bg-green-600">
        {/* <LeftCanvas
          timetosort={timetosort}
          sorting={Sorting}
          time={time}
          setTime={setTime}
          bubbleSort={bubbleSortByHeight}
          selectionSort={selectionSortByHeight}
          randomButton={randomButton}
          number_of_bars={number_of_bars}
          setNumber_of_bars={setNumber_of_bars}
        /> */}
        <LeaderBoard winner={usersData} />
      </div>
    </>
  );
}
