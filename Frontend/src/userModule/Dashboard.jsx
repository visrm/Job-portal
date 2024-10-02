import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppliedIcon from "@mui/icons-material/Checklist";
import BrowseIcon from "@mui/icons-material/Pageview";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import AppliedJobs from "./AppliedJobs";
import BrowseJobs from "./BrowseJobs";
import Profile from "./Profile";

const NAVIGATION = [
  {
    kind: "header",
    title: "Dashboard",
  },
  {
    segment: "dashboard/profile",
    title: "Account",
    icon: <AccountCircleIcon />,
  },
  {
    segment: "dashboard/applied-jobs",
    title: "Applied Jobs",
    icon: <AppliedIcon />,
  },
  {
    segment: "dashboard/browse-jobs",
    title: "Browse Jobs",
    icon: <BrowseIcon />,
  },
];

const dashboardTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function PageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {pathname.startsWith("/dashboard/applied-jobs") && <AppliedJobs />}
      {pathname.startsWith("/dashboard/browse-jobs") && <BrowseJobs />}
      {pathname.startsWith("/dashboard/profile") && <Profile />}
    </Box>
  );
}

PageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {
  const { window } = props;

  const [pathname, setPathname] = useState("/dashboard/profile");

  const router = useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  Window = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        title: "Job Portal",
      }}
      router={router}
      theme={dashboardTheme}
      window={Window}
    >
      <DashboardLayout>
        <PageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

export default DashboardLayoutBranding;
