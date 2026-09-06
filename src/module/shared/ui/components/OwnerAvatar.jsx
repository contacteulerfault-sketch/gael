import { OWNER_AVATAR, OWNER_NAME } from "@constants";

const OwnerAvatar = ({ size = 40, className = "", tone = "light", onClick, alt = OWNER_NAME }) => {
  const isDark = tone === "dark";

  return (
    <img
      src={OWNER_AVATAR}
      alt={alt}
      onClick={onClick}
      className={`rounded-full object-cover shrink-0 ${
        isDark ? "border border-white/20" : "border border-gray-300"
      } ${onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : ""} ${className}`}
      style={{ width: size, height: size }}
      draggable={false}
    />
  );
};

export default OwnerAvatar;
