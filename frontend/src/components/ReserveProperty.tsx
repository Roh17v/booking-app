import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSearchContext } from "../context/SearchFilterContext";
import useFetch from "../hooks/useFetch";

interface ReversePropertyProps {
  hotelId: string;
  setModalOpen: (open: boolean) => void;
}

const ReverseProperty: React.FC<ReversePropertyProps> = ({
  hotelId,
  setModalOpen,
}) => {
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const { loading, data, error } = useFetch(
    `https://5000-roh17v-bookingapp-67gwvi3g9g3.ws-us116.gitpod.io/api/hotels/${hotelId}/rooms`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  console.log(data);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((room) => room !== value)
    );
  };

  const { date } = useSearchContext();

  const getDatesRange = (startDate: Date, endDate: Date) => {
    const date = new Date(startDate.getTime());
    let dateList = [];
    while (date <= endDate) {
      dateList.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dateList;
  };

  const allDates = getDatesRange(date[0].startDate, date[0].endDate);
  const isAvailable = (roomNumber: any) => {
    const isFound = roomNumber.unavailableDates.some((date: number) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  console.log(allDates);

  const handleReserve = async () => {
    try {
      await Promise.all(
        selectedRooms.map(async (room) => {
          const response = await fetch(
            `https://5000-roh17v-bookingapp-67gwvi3g9g3.ws-us116.gitpod.io/api/room/availability/${room}`,
            {
              method: "PUT",
              credentials: "include",
              headers: {
                "Content-Type": "Application/json",
              },
              body: JSON.stringify({ dates: allDates }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to Reserve Room.");
          }
        })
      );
      alert("Room Reserved Successfully.");
    } catch (error) {
      alert("Failed to Reserve Room.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto relative max-h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <FontAwesomeIcon
          icon={faXmarkCircle}
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 text-gray-300 text-3xl cursor-pointer hover:text-black"
        />
        {/* Modal Header */}
        <h2 className="text-xl text-center font-bold mb-6">Select Rooms</h2>

        {/* Loading and Room List */}
        <div className="space-y-6">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            data?.map((item: any) => (
              <div
                key={item._id}
                className="flex justify-between items-center rounded-md border p-4"
              >
                <div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="text-gray-600">{item.description}</div>
                  <div className="mt-1 text-sm text-gray-500">
                    Max People:{" "}
                    <span className="font-semibold text-black">
                      {item.maxPeople}
                    </span>
                  </div>
                </div>

                {/* Room Numbers */}
                <div className="flex flex-wrap justify-center items-center gap-4 w-1/3">
                  {item.roomNumbers.map((room: any) => (
                    <div
                      key={room._id}
                      className="flex flex-col items-center justify-center text-gray-500"
                    >
                      <label
                        className={`rounded-md p-2 ${
                          isAvailable(room)
                            ? "text-green-500"
                            : "text-red-500 cursor-not-allowed"
                        }`}
                      >
                        {room.number}
                      </label>
                      <input
                        type="checkbox"
                        disabled={!isAvailable(room)}
                        className={`outline-2 w-4 h-4 rounded-md p-2 cursor-pointer`}
                        value={room._id}
                        onChange={handleSelect}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}

          {data?.length === 0 && <div className="text-center text-gray-500">No Rooms Found!</div>}

          {/* Reserve Button */}
          {!loading && data?.length !== 0 && (
            <button
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              onClick={handleReserve}
            >
              Reserve Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReverseProperty;
