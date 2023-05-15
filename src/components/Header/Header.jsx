import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signout } from "../../slices/userSlice";

function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = () => {
    // Chuyển sang trang /signin
    navigate("/signin");
  };

  const handleSignout = () => {
    dispatch(signout());
    localStorage.removeItem("user");
  };

  return (
    <div style={{ background: "red", display: "flex" }}>
      <h3>Cybermovie</h3>

      <div style={{ marginLeft: "auto", display: "flex" }}>
        {user ? (
          <>
            <p>{user.hoTen}</p>
            <button onClick={handleSignout}>Đăng Xuất</button>
          </>
        ) : (
          <button onClick={handleSignin}>Đăng Nhập</button>
        )}
      </div>
    </div>
  );
}

export default Header;
