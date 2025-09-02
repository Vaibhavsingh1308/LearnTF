'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';

type TabsContextType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

type TabsProviderProps = {
  children: React.ReactNode;
  defaultActiveTab?: number;
};

const TabsProvider: React.FC<TabsProviderProps> = ({ children, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);
  const contextValue = useMemo(() => ({ activeTab, setActiveTab }), [activeTab]);
  return (
    <TabsContext.Provider value={contextValue}>
      {children}
    </TabsContext.Provider>
  );
};

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};

type TabsProps = {
  children: React.ReactNode;
  defaultActiveTab?: number;
};

const Tabs: React.FC<TabsProps> = ({ children, defaultActiveTab }) => {
  return <TabsProvider defaultActiveTab={defaultActiveTab}>{children}</TabsProvider>;
};

type TabProps = {
    index: number;
    label: string;
    className?: string;
    defaultActive?: boolean;
    onClick?: (index: number) => void;
};

const Tab: React.FC<TabProps> = ({ index, label, className, defaultActive, onClick }) => {
    const { activeTab, setActiveTab } = useTabs();
    const isActive = activeTab === index;

    React.useEffect(() => {
        if (defaultActive) {
        setActiveTab(index);
        }
    }, [defaultActive, index, setActiveTab]);

    const buttonClass = `
        w-full py-4 px-4 text-left font-poppinsRegular border-b border-b-lightgray2 text-base rounded-t-xl
        ${isActive ? 'bg-brandSecondary text-brandWhite' : 'bg-transparent focus-visible:outline-brandSecondary'}
    `;

    const handleClick = () => {
        setActiveTab(index);
        if (onClick) {
        onClick(index);
        }
    };

    return (
        <button
        onClick={handleClick}
        className={`${buttonClass} ${className}`}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${index}`}
        id={`tab-${index}`}
        >
        {label}
        </button>
    );
};

type TabPanelProps = {
  index: number;
  children: React.ReactNode;
  className?: string;
};

const TabPanel: React.FC<TabPanelProps> = ({ index, children, className }) => {
  const { activeTab } = useTabs();
  return activeTab === index ? (
    <div
      id={`tabpanel-${index}`}
      tabIndex={-1}
      className={`tabpanel ${className}`}
      role="tabpanel"
      aria-labelledby={`tab-${index}`}
    >
      {children}
    </div>
  ) : null;
};

export { Tabs, Tab, TabPanel };