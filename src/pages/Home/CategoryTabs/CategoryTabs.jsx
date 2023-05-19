import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toys from "../Toys/Toys";

const CategoryTabs = () => {
  const [selectedSubCategory, setSelectedSubCategory] =
    useState("App Controlled");

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <p onClick={() => setSelectedSubCategory("App Controlled")}>
              Controlled Car
            </p>
          </Tab>
          <Tab>
            <p onClick={() => setSelectedSubCategory("Ramrod")}>
              Matchbox Cars
            </p>
          </Tab>
          <Tab>
            <p onClick={() => setSelectedSubCategory("Aventador")}>
              Lamborghini
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>
                <p onClick={() => setSelectedSubCategory("App Controlled")}>
                  App Controlled
                </p>
              </Tab>
              <Tab>
                <p onClick={() => setSelectedSubCategory("Remote Controlled")}>
                  Remote Controlled
                </p>
              </Tab>
              <Tab>
                <p onClick={() => setSelectedSubCategory("Other")}>Other</p>
              </Tab>
            </TabList>
            <TabPanel>
              <Toys toy={selectedSubCategory} />
            </TabPanel>
            <TabPanel>
              <Toys toy={selectedSubCategory} />
            </TabPanel>
            <TabPanel>
              <Toys toy={selectedSubCategory} />
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>
                <p onClick={() => setSelectedSubCategory("Ramrod")}>Ramrod</p>
              </Tab>
              <Tab>
                <p onClick={() => setSelectedSubCategory("Attack jet")}>
                  Attack Jet
                </p>
              </Tab>
            </TabList>
            <TabPanel>
              <Toys toy={selectedSubCategory} />
            </TabPanel>
            <TabPanel>
              <Toys toy={selectedSubCategory} />
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>
                <p onClick={() => setSelectedSubCategory("Aventador")}>
                  Aventador
                </p>
              </Tab>
              <Tab>
                <p onClick={() => setSelectedSubCategory("Huracan")}>Huracan</p>
              </Tab>
            </TabList>
            <TabPanel>
              <Toys toy={selectedSubCategory} />
            </TabPanel>
            <TabPanel>
              <Toys toy={selectedSubCategory} />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default CategoryTabs;
