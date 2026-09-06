import { useState, useEffect } from "react";
import useWindowsStore from "@store/window";
import { GITHUB_USERNAME, getOwnerPublicProfile } from "@constants";

const useSettings = () => {
  const githubApiBase = process.env.NEXT_PUBLIC_GITHUB_API_URL || "https://api.github.com";
  const { windows } = useWindowsStore();
  const windowData = windows.settings?.data;

  const [activeTab, setActiveTab] = useState("Apple ID");
  const [githubData, setGithubData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (windowData?.tab) {
      setActiveTab(windowData.tab);
    }
  }, [windowData]);

  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );
  const [mobileView, setMobileView] = useState("main");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!GITHUB_USERNAME) {
      setGithubData({ profile: getOwnerPublicProfile(), repos: [] });
      setIsLoading(false);
      return;
    }

    Promise.all([
      fetch(`${githubApiBase}/users/${GITHUB_USERNAME}`).then((res) => res.json()),
      fetch(`${githubApiBase}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`).then((res) =>
        res.json(),
      ),
    ])
      .then(([profile, repos]) => {
        const owner = getOwnerPublicProfile();
        setGithubData({
          profile: {
            ...profile,
            name: owner.name,
            email: owner.email,
            bio: owner.bio,
            location: owner.location,
          },
          repos: Array.isArray(repos) ? repos : [],
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching web details:", err);
        setGithubData({ profile: getOwnerPublicProfile(), repos: [] });
        setIsLoading(false);
      });
  }, [githubApiBase]);

  return {
    activeTab,
    setActiveTab,
    githubData,
    isLoading,
    isMobile,
    mobileView,
    setMobileView,
  };
};

export default useSettings;
