import myImg from "./assets/images/illustration-article.svg";
import profilePicture from "./assets/images/image-avatar.webp";
function App() {
  return (
    <main className="h-dvh bg-custom-yellow flex justify-center items-center">
      <div className="w-80 bg-white flex flex-col gap-6 p-8 rounded-2xl">
        <img className="rounded-lg" src={myImg} alt="image" />
        <span className="text-black font-bold bg-custom-yellow px-4 py-1 self-start	">
          learning
        </span>
        <p>Published 21 Dec 2023</p>
        <h1 className="font-extrabold text-xl">HTML & CSS foundations</h1>
        <p className="text-sm text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center gap-4">
          <img src={profilePicture} alt="profile-picture" />
          <h2 className="font-bold text-sm">Greg Hooper</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
