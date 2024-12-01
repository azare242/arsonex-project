import Filters from "@/components/Filters"
import DataTablePage from "@/components/Pages/Main"


const MainPage = () => {

  return (
    <div className="flex flex-col">
      <Filters/>
      <DataTablePage />

    </div>
  )
}

export default MainPage