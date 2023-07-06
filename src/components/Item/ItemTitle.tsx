type ItemTitleProps = {
    title: string;
    desc?: string;
};

function ItemTitle({ title, desc }: ItemTitleProps) {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="!leading-none text-sm md:text-base">{title}</div>
            <div className="!leading-none text-xs md:text-sm text-gray-blue ">
                {desc}
            </div>
        </div>
    );
}

export default ItemTitle;
