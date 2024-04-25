import React from 'react';
//import Image from 'next/image';
//w-24 h-24 mb-3 rounded-full shadow
interface ReviewCardProps {
    Name: string;
    Comment: string;
    Rating: number;
    Image:string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ Name, Comment, Rating, Image }) => {
    return (
        <div className="w-80 px-4 max-w-sm bg-white rounded shadow-[3px_3px_6px_rgba(0,0,0,0.2)] dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="" src={Image} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mb-8">{Name}</h5>
                <span className="text-sm text-center text-gray-500 dark:text-gray-400">{Comment}</span>
                <div className="flex mt-4 md:mt-6">{Rating}</div>
            </div>
        </div>
    );
};

export default ReviewCard;
