type ItemsProps = {
    children: React.ReactNode;
};

function Items({ children }: ItemsProps) {
    return <div className="space-y-5 sm:space-y-7 ">{children}</div>;
}

export default Items;
