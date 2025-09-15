import { Suspense, useState } from "react";
import {SideBar, HeaderBar} from "@components/ui";
import Loading from '@/components/shared/Loading'
import { useThemeStore } from '@/store/themeStore'
import PostLoginLayout from './PostLoginLayout'

const Layout = ({ children }) => {
  const layoutType = useThemeStore((state) => state.layout.type)

  return (
    <Suspense fallback={
      <div className="flex flex-auto flex-col h-[100vh]">
        <Loading loading={true} />
      </div>
    }>
      <PostLoginLayout layoutType={layoutType}>
        {children}
      </PostLoginLayout>
    </Suspense>
  );
};

export default Layout;
