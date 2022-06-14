type ItemProps = {
    name: string;
    avatar: string;
}

const Item: React.FC<ItemProps> = ({name, avatar}) => {
    return (
        <>
            <div className="text-center">

                <div className="w-[60px] h-[60px] rounded-full p-[3px] ring-2 ring-gradient-to-bl from-purple-600 via-pink-500 to-yellow-300   border-1 border-white mx-[11px] overflow-hidden "
                    style= {{
                    backgroundImage: `url(${avatar})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    }}
                    >
                </div>
                <p className="text-xs mt-1">{name}</p>
            </div>
        </>
    )
}

export default Item