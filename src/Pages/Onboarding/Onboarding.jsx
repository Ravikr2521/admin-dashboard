import React, { useEffect } from 'react'
import { setBreadcrumbs } from '../../features/slices/appslice';
import { useDispatch, useSelector } from 'react-redux';
import CustomTabs from '../../Components/CustomComponents/CustomTabs';
import OnbordingList from './OnbordingList';
import { Box } from '@mui/material';
import Counter from '../Counter';
import Charts from './Charts';
import Example from './Example';
import ColorTabs from '../../Components/CustomComponents/CustomTabs2';

const Onboarding = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state)=> state.app.activeTab)
 


useEffect(() => {
    const breadcrumbs = [
      { name: "Dashboard", link: "/" },
      { name: "Onboarding", link: "" },
    ];

    dispatch(setBreadcrumbs(breadcrumbs));
  }, []);

  const tabsData = [
    {
      label: "Upcoming",
      notification: 2,
      content: <Box><Example/></Box>,
    },
    {
      label: "Development",
      notification: 5,
      content: <div><Counter/></div>,
    },
    {
      label: "Completed",
      notification: 1,
      content: <Box><Charts/></Box>,
    },
  ];
  


  return (
    <div>
     <CustomTabs tabs={tabsData} currentTab={activeTab}/>

     <ColorTabs/>
    </div>
  )
}

export default Onboarding
