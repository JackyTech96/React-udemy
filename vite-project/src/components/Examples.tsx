import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState("");

  function handleSelect(selectedButton: string) {
    setSelectedTab(selectedButton);
    console.log(selectedTab);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isActive={selectedTab === "components"}
              onClick={() => handleSelect("components")}
            >
              {" "}
              Components{" "}
            </TabButton>
            <TabButton
              isActive={selectedTab === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              {" "}
              JSX{" "}
            </TabButton>
            <TabButton
              isActive={selectedTab === "props"}
              onClick={() => handleSelect("props")}
            >
              {" "}
              Props{" "}
            </TabButton>
            <TabButton
              isActive={selectedTab === "state"}
              onClick={() => handleSelect("state")}
            >
              {" "}
              State{" "}
            </TabButton>
          </>
        }
      >
        {!selectedTab && <p>Select a topic.</p>}
        {selectedTab && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
