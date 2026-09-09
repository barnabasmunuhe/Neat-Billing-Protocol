// src/components/layout/PageContainer.tsx
import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden p-6 pt-2">
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
