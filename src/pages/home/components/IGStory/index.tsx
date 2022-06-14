import Item from "./items"
import { useGetIGStoiesQuery } from "services/homeServices";
import Loading from "components/Loading";


const IGStory: React.FC = () => {

    const {data, isLoading } = useGetIGStoiesQuery("all");

    console.log('data', data)
    console.log('isLoading', isLoading)

    return(
        <div className="w-full h-[100px] flex items-center overflow-x-auto overflow-y-hidden border-gray-300 border-[1px] margin-[16px] rounded
        no-scrollbar lg:my-7 p">
        {  isLoading && (
            <div className="flex justify-center w-full">
                <Loading />
            </div>
        )}
        {!isLoading &&
            data?.map((item) => {
            const {id, name, avatar } = item;
            return <Item key={id} name={name} avatar={avatar} />
        }
        )}
        </div>
    )
}

export default IGStory