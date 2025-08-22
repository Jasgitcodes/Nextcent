import React from "react";
import { PiUsersThreeLight } from "react-icons/pi";

interface ServiceCardProps {
  avatar: React.ReactNode;
  title: string;
  description: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  avatar,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-100 w-full  p-6 rounded-lg shadow-md">
      <div className="flex items-center flex-col gap-2 ">
        {avatar}
        <h3 className="text-4xl md:text-3xl font-bold mb-2">{title}</h3>
      </div>
      <div className="text-center w-full p-4 md:p-0 md:max-w-[95%] mx-auto">
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
