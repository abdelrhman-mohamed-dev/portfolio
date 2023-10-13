export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full section bg-black min-h-screen py-2 lg:py-10 overflow-x-hidden px-6 lg:px-12 xl:px-20 text-gray-200">
      {children}
    </div>
  );
}
