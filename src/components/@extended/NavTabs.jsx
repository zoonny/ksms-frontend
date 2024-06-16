import { CloseCircleFilled, CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { IconButton, Tab, Tabs } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const NavTabs = ({ navigation, title }) => {
  const location = useLocation();
  const [activeTabs, setActiveTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTabs([
      ...activeTabs,
      {
        id: activeTabs.length,
        label: location.pathname,
        pathname: location.pathname,
        closeable: true
      }
    ]);
  }, [location]);

  const handleClose = useCallback(
    (event, tabToDelete) => {
      event.stopPropagation();

      const tabToDeleteIndex = activeTabs.findIndex((tab) => tab.id === tabToDelete.id);

      const tab = activeTabs[tabToDeleteIndex];
      // navigate(tab.label, {
      //   state: {}
      // });

      const updatedTabs = activeTabs.filter((tab, index) => {
        return index !== tabToDeleteIndex;
      });
      const previousTab = activeTabs[tabToDeleteIndex - 1] || activeTabs[tabToDeleteIndex + 1] || {};

      setActiveTabs(updatedTabs);
      setActiveTab(previousTab.id);
    },
    [activeTabs]
  );

  return (
    <>
      {/* <div>navigation: {JSON.stringify(navigation)}</div>
      <div>location: {JSON.stringify(location)}</div>
      <div>title: {title}</div> */}
      <div>{JSON.stringify(activeTabs)}</div>
      <div>
        <Tabs value={activeTab} onChange={() => {}}>
          {activeTabs.map((tab) => (
            <Tab
              key={tab.id}
              value={tab.id}
              label={
                typeof tab.label === 'string' ? (
                  <span>
                    {tab.label}
                    {tab.closeable && (
                      <IconButton component="div" onClick={(event) => handleClose(event, tab)}>
                        <CloseOutlined />
                      </IconButton>
                    )}
                  </span>
                ) : (
                  tab.label
                )
              }
            />
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default NavTabs;
