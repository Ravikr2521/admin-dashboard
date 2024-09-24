import { Box, Divider } from "@mui/material";
import React from "react";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";

const GridCards = () => {
  const people = [
    {
      name: "Ravi Kumar",
      title: "Frontend Developer",
      image:
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
      role: "Admin",
    },
    {
      name: "Kartik Gaur",
      title: "Backend Developer",
      image:
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
      role: "Admin",
    },
    {
      name: "Ashutosh Verma",
      title: "UI/UX Designer",
      image:
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
      role: "Editor",
    },
    {
      name: "Charan Kumar",
      title: "Full Stack Developer",
      image:
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
      role: "Editor",
    },
    {
      name: "Pratap Singh",
      title: "DevOps Engineer",
      image:
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
      role: "Contributor",
    },
    {
      name: "Richa Yadav",
      title: "Project Manager",
      image:
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
      role: "Admin",
    },
  ];
  return (
    <Box className="">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-white border rounded-md flex flex-col justify-between h-full"
          >
            <div className="flex w-full justify-between p-4 px-8">
              <div>
                {person.name}
                <span className="bg-green-200 cursor-pointer border border-green-300 hover:bg-green-100 hover:border-green-500 rounded-full px-3 p-[2px] font-semibold text-xs text-green-600 m-0 mx-2">
                  {person.role}
                </span>
                <p className="m-0 text-gray-500 mt-1 text-sm">{person.title}</p>
              </div>

              <div>
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-10 rounded-full"
                />
              </div>
            </div>
            <Divider />
            <div className="bg--200 p-3 flex justify-between items-center">
              <div className="w-full gap-2  hover:gap-3 group transition-all ease-in-out duration-300 flex justify-center items-center cursor-pointer hover:text-red-500">
                <MarkunreadIcon
                  className="text-gray-400 group-hover:text-red-500 !transition-colors !ease-out !duration-700"
                  fontSize="small"
                />
                Email
              </div>
              <Divider orientation="vertical" flexItem />
              <div className="w-full gap-2  hover:gap-3 group transition-all ease-in-out duration-300 flex justify-center items-center cursor-pointer hover:text-red-500">
                <CallIcon
                   className="text-gray-400 group-hover:text-red-500 !transition-colors !ease-out !duration-700"
                  fontSize="small"
                />
                Mobile
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default GridCards;
