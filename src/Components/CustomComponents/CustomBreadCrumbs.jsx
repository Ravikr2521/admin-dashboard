import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { selectBreadcrumbs } from "../../features/slices/appslice";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CustomBreadCrumbs = () => {
  const breadcrumbsFromState = useSelector(selectBreadcrumbs);

  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    if (breadcrumbsFromState) {
      const currentPageName = breadcrumbsFromState[breadcrumbsFromState.length - 1].name;
      setCurrentPage(currentPageName);
    }
  }, [breadcrumbsFromState]);

  if (!breadcrumbsFromState) {
    return null;
  }

  return (
    <Box className="w-full h-11 border border-t">
      <Box className="bg-white flex justify-between p-2.5">
        <span>{currentPage}</span>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbsFromState?.map((item, index) => {
            const isLast = index === breadcrumbsFromState.length - 1;
            return (
              <Link
                key={index}
                to={item.link}
                className={`${
                  isLast ? "text-orange-400" : "text-gray-400"
                } hover:text-gray-500`}
                component={isLast ? "span" : "a"}
              >
                {item.name}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default CustomBreadCrumbs;
