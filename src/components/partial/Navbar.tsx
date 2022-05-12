import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b ">
      <div className="container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
            ระบบลงทะเบียนกิจกรรมพัฒนาผู้เรียน
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>หน้าแรก</a>
            </li>
            <li>
              <a>ชุมนุม</a>
            </li>
            <li>
              <a>เข้าสู่ระบบ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
