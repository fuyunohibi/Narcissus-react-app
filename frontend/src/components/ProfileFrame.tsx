import React from 'react';
import HeartCard from '../assets/images/aHeart.png';

interface ProfileFrameProps {
   image?: any;
   className?: string;
};

const ProfileFrame = ({ image, className }: ProfileFrameProps) => {
   const Profile: any = image ? image : HeartCard;
   const frameClassName = `w-60 h-80 border-2 border-black ${className}`;
   return (
      <div className={frameClassName}>
         <img
            src={Profile}
            alt="Profile Picture"
            className="mx-auto w-full h-full object-cover"
         />
      </div>
   );
};

export default ProfileFrame;