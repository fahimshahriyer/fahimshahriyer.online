import Header from "@/components/layout/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
