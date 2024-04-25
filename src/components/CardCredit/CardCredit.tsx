import profilePicture from "../../assets/images/image-avatar.webp";

export default function CardCredit() {
  return (
    <div className="flex items-center gap-4">
      <img src={profilePicture} alt="profile-picture" />
      <h2 className="font-bold text-sm">Greg Hooper</h2>
    </div>
  );
}
