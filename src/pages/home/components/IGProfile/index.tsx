import IGUser from "components/IGUser"

import { useAppSelector} from "../../../../hooks"


const IGProfile: React.FC = () => {

    const friendReducer = useAppSelector((state) => state.friendReducer);
    const friends = friendReducer.friends.slice(0,5);
    return (
        <div className="mt-8 ml-8 shadow-lg p-2">
            <IGUser 
                account="bruce_fe"
                location="布魯斯前端"
                avatar="/public/images/avatar.png"
                size="medium"
            />
            <p className="font-bold text-grya-400 mt-4 mx-4 mb-3 text-sm">
                You Are Following
            </p>
            {
                friends.map((item) => {
                    const {
                        id,
                        account,
                        avatar,
                        isFollowing,
                        location} = item;
                    return (
                        <div className="-mt-3 key={id}">
                            <IGUser
                                id={id}
                                account={account}
                                avatar={avatar}
                                location={location}
                                isFollowing={isFollowing}
                                showFollow
                            />
                        </div>
                    )
                })}
        </div>
    )
}

export default IGProfile