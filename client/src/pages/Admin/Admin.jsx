import "./Admin.css";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PublishList from "../../components/PublishList/PublishList";
import { TfiReload } from "react-icons/all";

function Admin() {
  // hooks
  const navigate = useNavigate();

  // useSelectors
  const admin = useSelector((state) => state.adminReducer?.adminData?.admin);

  // useStates
  const [activeTab, setActiveTab] = useState(0);
  const [refresh, setRefresh] = useState(false);

  //useEffects
  useEffect(() => {
    if (!admin) {
      navigate("/auth");
    }
  }, [admin]);

  // functions
  function handleTabClick(index) {
    setActiveTab(index);
  }

  function handleRefresh(){
    setRefresh(true);
  }

  return (
    <div className="page">
      <AdminNavbar />
      <div className="page-tabs">
        <div
          className={`page-tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Publish List
        </div>
        <div
          className={`page-tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Published List
        </div>
        <div
          className={`page-tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Client List
        </div>
        <button className="refreshBtn" onClick={handleRefresh}>
          {activeTab === 0 ? (
            <>
              <TfiReload className="reload" /> {"Refresh"}
            </>
          ) : (
            ""
          )}
        </button>
      </div>
      <div className="page-container">
        {activeTab === 0 && (
          <PublishList refresh={refresh} setRefresh={setRefresh} />
        )}
      </div>
    </div>
  );
}

export default Admin;
