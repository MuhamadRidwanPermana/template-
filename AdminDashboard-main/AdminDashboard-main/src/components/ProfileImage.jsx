import React from "react";

const ProfileImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-[32px] h-[32px] rounded-full border-2 object-cover border-white -ml-2 box-border"
    />
  );
};

export default ProfileImage;
