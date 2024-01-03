import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import DiffrentContent from "./DiffrentContent";
const Tabbed = ({ content }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ padding: "2px", border: "1px solid red" }}>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} />
      ) : (
        <DiffrentContent />
      )}
    </div>
  );
};

export default Tabbed;
