import HomeFeed from '@/components/Home/HomeFeed';
import HomeAuth from '@/components/Home/HomeAuth';
import HomeNav from '@/components/Home/HomeNav';
export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-5">
     <div className="col-span-3 min-h-[300px] bg-gray-200 shadow-sm p-4 space-y-4">
      <h3 className="font-bold">All categories</h3>
      <HomeNav></HomeNav>
     </div>
     <div className="col-span-6 min-h-[300px] bg-gray-200 shadow-sm p-4 space-y-4">
      <h3 className="font-bold">News by category</h3>
      <HomeFeed></HomeFeed>
     </div>
     <div className="col-span-3 min-h-[300px] bg-gray-200 shadow-sm p-4 space-y-4">
      <h3 className="font-bold">Login with</h3>
      <HomeAuth></HomeAuth> 
     </div>
    </div>
  );
}
