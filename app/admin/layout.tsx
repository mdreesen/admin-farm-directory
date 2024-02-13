import SideNav from '@/app/ui/dashboard/sidenav';


export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <SideNav />
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}