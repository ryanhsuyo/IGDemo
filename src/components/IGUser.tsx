//dispatch
import { useAppDispatch } from "../hooks"


//action Funtion
import { follow, unFollow } from "../slices/friendsSlice"


import { memo } from "react"

type IGUserProps = {
    size?: "medium" | "small";
    showFollow? : boolean;
    isFollowing? : boolean;
    account?: string;
    location?: string;
    avatar?: string;
    id?: number;
}

const IGUser: React.FC<IGUserProps> = memo(({
    size = "small",
    showFollow =  false,
    isFollowing =  false,
    account,
    location,
    avatar,
    id,
}) => {
    const dispatch = useAppDispatch();

    function followclickHandler() {
        if(id === undefined ) return;
        if(isFollowing) {
            dispatch(unFollow(id))
        }else{
            dispatch(follow(id))
        }
    }
    return (
        <div className="flex items-center h-[70px]" px-4>
            <div className={`${
                size === "small" ? "w-[40px] h-[40px]" : "2-[60px] h-[60px]"
            } overflow-hidden rounded-full`}
            style={{
                backgroundImage: `url(${avatar}`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            >
            </div>
            <div className="ml-4">
                <p className="font-bold text-sm">{account}</p>
                <p className="text-gray-400 text-xs">{location}</p>
            </div>
            {showFollow && (
                <p
                    className={`${
                        isFollowing ? "text-gray-700" : "text-blue-400"
                    } ml-auto text-xs font-bold cursor-pointer`}
                    onClick={followclickHandler}
            >
                {isFollowing ? "Following" : "Follow"}
            </p>
            )}
        </div>
    );
})

export default IGUser