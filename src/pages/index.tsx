import { Player } from "@lottiefiles/react-lottie-player";
import type { NextPage } from "next";
import Countdown from "../components/partial/Countdown";
import Navbar from "../components/partial/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <header className="p-6 flex items-center intro justify-between">
          <div className="flex flex-col items-start">
            <h1 className="text-7xl">
              <span className="text-5xl text-neutral">ระบบลงทะเบียน</span>
              <br />
              <span className="font-bold text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
                กิจกรรมพัฒนาผู้เรียน
              </span>
            </h1>
            <h2 className="text-3xl text-red-500">โรงเรียนเบญจมราชูทิศ</h2>
            <Countdown />
          </div>
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_sknsem5j.json"
            style={{
              height: "400px",
              width: "400px",
            }}
          />
        </header>
      </div>
    </>
  );
};

export default Home;
