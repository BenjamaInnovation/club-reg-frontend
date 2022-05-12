import type { NextPage } from "next";
import Countdown from "../components/partial/Countdown";
import Navbar from "../components/partial/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <header className="p-6 flex flex-col items-center text-center intro">
          <h1 className="text-9xl">
            <span className="text-5xl text-neutral">ระบบลงทะเบียน</span>
            <br />
            <span className="font-bold text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
              กิจกรรมพัฒนาผู้เรียน
            </span>
          </h1>
          <h2 className="text-3xl text-red-500">โรงเรียนเบญจมราชูทิศ</h2>
          <Countdown />
        </header>
      </div>
    </>
  );
};

export default Home;
