import Loading from '@/components/shared/Loading'
import { apiGetEcommerceDashboard } from '@/services/DashboardService'
import useSWR from 'swr'
import Overview from './components/Overview'
import SalesTarget from './components/SalesTarget'
import TopProduct from './components/TopProduct'
import SalesPurchaseOverview from './components/SalesPurchaseOverview'
const PosDashboard = () => {
  const { data, isLoading } = useSWR(
    ['/api/dashboard/ecommerce'],
    () => apiGetEcommerceDashboard(),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    },
  )
  
  return (
    <Loading loading={isLoading}>
      {data && (
        <div>
          <div className="flex flex-col gap-4 max-w-full overflow-x-hidden">
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="flex flex-col gap-4 flex-1 xl:col-span-3">
                <Overview data={data.statisticData} />
                <SalesPurchaseOverview data={data.taskOverview} />
              </div>
              <div className="flex flex-col gap-4 2xl:min-w-[360px]">
                <SalesTarget data={data.salesTarget} />
                <TopProduct data={data.topProduct} />
              </div>
            </div>

           
          </div>
        </div>
      )}
    </Loading>
  )
}
export default PosDashboard