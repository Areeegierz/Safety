import React from "react";
import { useDispatch } from "react-redux";
import { Avatar, Popover } from "antd";
import { userSignOut } from "appRedux/actions/Auth";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const UserInfo = () => {
  const dispatch = useDispatch();

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => dispatch(userSignOut())}>Logout</li>
    </ul>
  );

  return (
    <Popover
      overlayClassName="gx-popover-horizantal"
      placement="bottomRight"
      content={userMenuOptions}
      trigger="click"
      className="text-white"
    >
      {/* <Avatar
        src={"https://via.placeholder.com/150"}
        className="gx-avatar gx-pointer"
        alt=""
      /> */}
      <span style={{ fontSize: "14px" }}>
        <UserOutlined style={{ fontSize: "30px" }} />
        &nbsp;&nbsp; Nontawat Nokpet&nbsp;&nbsp;
        <DownOutlined style={{ fontSize: "14px" }} />
      </span>
    </Popover>
  );
};

export default UserInfo;
