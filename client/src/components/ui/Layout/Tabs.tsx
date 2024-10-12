import React, { useState } from 'react';

interface Tab {
  name: string;
  component: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  gap: 'between' | number;
}

export default function Tabs({ tabs, gap }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0); // Track the currently active tab

  return (
    <div className="p-4">
      {/* Tab Buttons */}
      <div
        className={`flex ${typeof gap == 'string' ? 'justify-between' : `gap-${gap}`} mb-8 `}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`body1 capitalize font-bold px-6 py-2 ${
              activeTab === index ? 'border-b-4 border-secondary' : null
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Render the active tab's content */}
      <div>{tabs[activeTab].component}</div>
    </div>
  );
}
