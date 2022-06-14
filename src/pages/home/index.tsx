
import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGStory from "./components/IGStory";
import IGPost from "./components/IGPOST";
import IGProfile from "./components/IGProfile";
import { useGetIGPostsQuery } from "services/homeServices";
import Loading from "components/Loading";

const IGPostList: React.FC = () => {
  
  const {data, isLoading} = useGetIGPostsQuery("all")

  console.log("data", data)
  console.log("Loading", isLoading)

  return <>
  {isLoading && (
      <div className="w-full flex justify-center mt-20">
        <Loading />
      </div>
    )
  }
  {!isLoading && 
    data?.map((item) => {
    const {
      id,
      location,
      account,
      avatar,
      photo,
      likes,
      description,
      hashTags,
      createTime,
    } = item;
    return (
      <IGPost
      location={location}
      account={account}
      avatar={avatar}
      photo={photo}
      likes={likes}
      description={description}
      hashTags={hashTags}
      createTime={createTime}
      key={id}
      />
    )
  })}
  </>
}

const Home: React.FC = () => {
  return (
  <>
    <IGHeader />
    <IGContainer>
      <div className="flex justify-center ">
        {/* leftSide */}
        <div className="w-full lg:w-[600px] ">
          <IGStory />
          <IGPostList />
        </div>
        {/* rigthSide */}
        <div className="hidden lg:block lg:w-[424px]">
          <IGProfile />
        </div>
      </div> 
      {/* 1234 */}
    </IGContainer>
    
  </>
  )
};

export default Home;